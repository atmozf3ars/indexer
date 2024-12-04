import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

const TEMP_DIR = path.join(process.cwd(), 'temp')

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const file = searchParams.get('file')

    if (!file) {
      return NextResponse.json({ error: 'File name is required' }, { status: 400 })
    }

    const filePath = path.join(TEMP_DIR, file)

    if (!fs.existsSync(filePath)) {
      return NextResponse.json({ error: 'File not found' }, { status: 404 })
    }

    const fileStream = fs.createReadStream(filePath)
    const stat = fs.statSync(filePath)

    const headers = new Headers()
    headers.set('Content-Type', 'application/zip')
    headers.set('Content-Length', stat.size.toString())
    headers.set('Content-Disposition', `attachment; filename="${file}"`)

    return new NextResponse(fileStream as any, {
      headers,
      status: 200,
    })
  } catch (error) {
    console.error('Error in ZIP download route:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

