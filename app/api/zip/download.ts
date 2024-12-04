import { NextApiRequest, NextApiResponse } from 'next'
import fs from 'fs'
import path from 'path'

const TEMP_DIR = path.join(process.cwd(), 'temp')

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { file } = req.query

  if (!file || typeof file !== 'string') {
    return res.status(400).json({ error: 'File name is required' })
  }

  const filePath = path.join(TEMP_DIR, file)

  if (!fs.existsSync(filePath)) {
    return res.status(404).json({ error: 'File not found' })
  }

  const stat = fs.statSync(filePath)

  res.writeHead(200, {
    'Content-Type': 'application/zip',
    'Content-Length': stat.size,
    'Content-Disposition': `attachment; filename="${file}"`,
  })

  const readStream = fs.createReadStream(filePath)
  readStream.pipe(res)
}

