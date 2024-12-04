import { NextApiRequest, NextApiResponse } from 'next'
import fs from 'fs'
import path from 'path'
import archiver from 'archiver'
import { v4 as uuidv4 } from 'uuid'

const BASE_PATH = 'O:/innercircle-indexer/innercircle/'
const MAX_SIZE = 10 * 1024 * 1024 * 1024 // 10 GB in bytes
const TEMP_DIR = path.join(process.cwd(), 'temp')

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { folderPath } = req.body

  if (!folderPath) {
    return res.status(400).json({ error: 'Folder path is required' })
  }

  const fullPath = path.join(BASE_PATH, folderPath)

  // Check if the folder exists
  if (!fs.existsSync(fullPath)) {
    return res.status(404).json({ error: 'Folder not found' })
  }

  // Check if it's the root directory
  if (fullPath === BASE_PATH) {
    return res.status(400).json({ error: 'Cannot zip root directory' })
  }

  // Check folder size
  const folderSize = await getFolderSize(fullPath)
  if (folderSize > MAX_SIZE) {
    return res.status(400).json({ error: 'Folder size exceeds 10 GB limit' })
  }

  // Create temp directory if it doesn't exist
  if (!fs.existsSync(TEMP_DIR)) {
    fs.mkdirSync(TEMP_DIR)
  }

  const zipFileName = `${path.basename(fullPath)}_${uuidv4()}.zip`
  const zipFilePath = path.join(TEMP_DIR, zipFileName)

  res.writeHead(200, {
    'Content-Type': 'text/event-stream',
    'Cache-Control': 'no-cache',
    'Connection': 'keep-alive',
  })

  try {
    await createZip(fullPath, zipFilePath, (progress) => {
      res.write(`data: ${JSON.stringify({ progress })}\n\n`)
    })

    res.write(`data: ${JSON.stringify({ zipFileName })}\n\n`)

    // Schedule deletion after 24 hours
    setTimeout(() => {
      fs.unlink(zipFilePath, (err) => {
        if (err) console.error('Error deleting zip file:', err)
      })
    }, 24 * 60 * 60 * 1000)

    res.end()
  } catch (error) {
    console.error('Error creating zip:', error)
    res.write(`data: ${JSON.stringify({ error: 'Failed to create zip file' })}\n\n`)
    res.end()
  }
}

async function getFolderSize(folderPath: string): Promise<number> {
  let size = 0
  const files = fs.readdirSync(folderPath)

  for (const file of files) {
    const filePath = path.join(folderPath, file)
    const stats = fs.statSync(filePath)

    if (stats.isDirectory()) {
      size += await getFolderSize(filePath)
    } else {
      size += stats.size
    }
  }

  return size
}

function createZip(sourcePath: string, zipPath: string, onProgress: (progress: number) => void): Promise<void> {
  return new Promise((resolve, reject) => {
    const output = fs.createWriteStream(zipPath)
    const archive = archiver('zip', { zlib: { level: 9 } })

    output.on('close', resolve)
    archive.on('error', reject)

    let totalSize = 0
    let processedSize = 0

    archive.on('entry', (entry) => {
      processedSize += entry.stats.size
      const progress = Math.round((processedSize / totalSize) * 100)
      onProgress(progress)
    })

    archive.pipe(output)

    archive.directory(sourcePath, false)

    archive.on('progress', (progress) => {
      totalSize = progress.entries.total
    })

    archive.finalize()
  })
}

