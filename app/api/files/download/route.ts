import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import { Readable } from 'stream'


export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const filePath = searchParams.get('file');

  if (!filePath) {
    return NextResponse.json({ error: 'No file specified' }, { status: 400 });
  }

  const fullPath = path.join(process.cwd(), 'innercircle', filePath);

  // Ensure the requested file is within the allowed directory
  if (!fullPath.startsWith(path.join(process.cwd(), 'innercircle'))) {
    return NextResponse.json({ error: 'Access denied' }, { status: 403 });
  }

  try {
    const stat = await fs.promises.stat(fullPath);
    const fileName = path.basename(fullPath);

    // Determine the MIME type based on the file extension
    const ext = path.extname(fileName).toLowerCase();
    const mimeType = getMimeType(ext);

    // Set appropriate headers for file download
    const headers = new Headers();
    headers.set('Content-Disposition', `attachment; filename="${fileName}"`);
    headers.set('Content-Type', mimeType);
    headers.set('Content-Length', stat.size.toString());

    // Create a readable stream
    const stream = fs.createReadStream(fullPath);

    // Return a streaming response
    return new NextResponse(stream as any, {
      status: 200,
      headers,
    });
  } catch (error) {
    console.error('Error reading file:', error);
    return NextResponse.json({ error: 'File not found' }, { status: 404 });
  }
}

function getMimeType(extension: string): string {
  const mimeTypes: { [key: string]: string } = {
    '.txt': 'text/plain',
    '.pdf': 'application/pdf',
    '.doc': 'application/msword',
    '.docx': 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    '.xls': 'application/vnd.ms-excel',
    '.xlsx': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.gif': 'image/gif',
    '.csv': 'text/csv',
    '.mp3': 'audio/mpeg',
    '.mp4': 'video/mp4',
    '.zip': 'application/zip',
    '.rar': 'application/x-rar-compressed',
    '.7z': 'application/x-7z-compressed',
    '.tar': 'application/x-tar',
    '.gz': 'application/gzip',
  };

  return mimeTypes[extension] || 'application/octet-stream';
}