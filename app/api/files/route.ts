import { NextRequest, NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'
import crypto from 'crypto'

const BASE_PATH = 'O:/innercircle-indexer/innercircle/'
const PAGE_SIZE = 100 // Number of items per page

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const subdir = searchParams.get('subdir') || ''
  const search = subdir ? (searchParams.get('search') || '') : ''
  const page = parseInt(searchParams.get('page') || '1', 10)

  const fullPath = path.join(BASE_PATH, subdir)

  try {
    const { files, totalCount } = await getFiles(fullPath, search, page)
    return NextResponse.json({ files, totalCount, currentPage: page })
  } catch (error) {
    console.error('Error fetching files:', error)
    return NextResponse.json({ error: 'Failed to fetch files' }, { status: 500 })
  }
}

async function getFiles(dir: string, search: string, page: number): Promise<{ files: any[], totalCount: number }> {
  const allEntries = fs.readdirSync(dir, { withFileTypes: true })
  const searchLower = search.toLowerCase()
  const filteredEntries = allEntries.filter(entry => entry.name.toLowerCase().includes(searchLower))

  const totalCount = filteredEntries.length
  const startIndex = (page - 1) * PAGE_SIZE
  const endIndex = startIndex + PAGE_SIZE

  const paginatedEntries = filteredEntries.slice(startIndex, endIndex)

  const files = await Promise.all(paginatedEntries.map(async (entry) => {
    const fullPath = path.join(dir, entry.name)

    if (entry.isDirectory()) {
      return {
        name: entry.name,
        isDirectory: true,
        size: 0,
        lastModified: new Date().toISOString(),
        path: path.relative(BASE_PATH, fullPath),
      }
    } else {
      try {
        const stats = fs.statSync(fullPath)
        return {
          name: entry.name,
          isDirectory: false,
          size: stats.size,
          lastModified: stats.mtime.toISOString(),
          path: path.relative(BASE_PATH, fullPath),
        }
      } catch (error) {
        console.error(`Error processing file ${fullPath}:`, error)
        return null
      }
    }
  }))

  return { files: files.filter(Boolean), totalCount }
}

export async function calculateHash(filePath: string): Promise<string> {
  return new Promise((resolve, reject) => {
    const hash = crypto.createHash('sha256');
    const stream = fs.createReadStream(filePath);

    stream.on('data', (data) => {
      hash.update(data);
    });

    stream.on('end', () => {
      resolve(hash.digest('hex'));
    });

    stream.on('error', (error) => {
      reject(error);
    });
  });
}

