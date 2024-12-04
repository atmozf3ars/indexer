import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'
import archiver from 'archiver'
import { v4 as uuidv4 } from 'uuid'

const BASE_PATH = process.env.FILE_DIRECTORY || 'O:/innercircle-indexer/innercircle/'
const MAX_SIZE = 10 * 1024 * 1024 * 1024 // 10 GB in bytes
const TEMP_DIR = path.join(process.cwd(), 'temp')

export async function POST(req: Request) {
  try {
    const { folderPath } = await req.json()

    if (!folderPath) {
      return NextResponse.json({ error: 'Folder path is required' }, { status: 400 })
    }

    const fullPath = path.join(BASE_PATH, folderPath)

    if (!fs.existsSync(fullPath)) {
      return NextResponse.json({ error: 'Folder not found' }, { status: 404 })
    }

    if (fullPath === BASE_PATH) {
      return NextResponse.json({ error: 'Cannot zip root directory' }, { status: 400 })
    }

    const folderSize = await getFolderSize(fullPath)
    if (folderSize > MAX_SIZE) {
      return NextResponse.json({ error: 'Folder size exceeds 10 GB limit' }, { status: 400 })
    }

    if (!fs.existsSync(TEMP_DIR)) {
      fs.mkdirSync(TEMP_DIR, { recursive: true })
    }

    const zipFileName = `${path.basename(fullPath)}_${uuidv4()}.zip`
    const zipFilePath = path.join(TEMP_DIR, zipFileName)

    const encoder = new TextEncoder()
    const stream = new TransformStream()
    const writer = stream.writable.getWriter()

    const sendEvent = (event: string, data: any) => {
      try {
        writer.write(encoder.encode(`data: ${JSON.stringify({ event, ...data })}\n\n`))
      } catch (error) {
        console.error('Error writing to stream:', error)
      }
    }

    createZip(fullPath, zipFilePath, (progress) => {
      sendEvent('progress', { progress: Math.round(progress * 10000) / 100 })
    }).then(() => {
      sendEvent('complete', { zipFileName })
      writer.close()

      setTimeout(() => {
        fs.unlink(zipFilePath, (err) => {
          if (err) console.error('Error deleting zip file:', err)
        })
      }, 24 * 60 * 60 * 1000)
    }).catch((error) => {
      console.error('Error creating zip:', error)
      sendEvent('error', { message: 'Failed to create zip file: ' + error.message })
      writer.close()
    })

    return new NextResponse(stream.readable, {
      headers: {
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive',
      },
    })
  } catch (error) {
    console.error('Unexpected error in ZIP creation route:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
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
    const archive = archiver('zip', {
      zlib: { level: 9 }
    })

    output.on('close', resolve)
    archive.on('error', reject)

    let totalSize = 0
    let processedSize = 0

    archive.on('entry', (entry) => {
      processedSize += entry.stats.size
      const progress = totalSize > 0 ? processedSize / totalSize : 0
      onProgress(progress)
    })

    archive.on('progress', (progress) => {
      totalSize = progress.fs.totalBytes
      processedSize = progress.fs.processedBytes
      const progressPercentage = totalSize > 0 ? processedSize / totalSize : 0
      onProgress(progressPercentage)
    })

    archive.pipe(output)
    archive.directory(sourcePath, false)
    archive.finalize()
  })
}

