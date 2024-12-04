import { NextApiRequest, NextApiResponse } from 'next';
import { listFiles } from '@/lib/file-utils';
import path from 'path';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { subdir = '', search = '' } = req.query;
  const rootDir = process.env.FILE_DIRECTORY || '/path/to/your/files';
  const targetDir = path.join(rootDir, subdir as string);

  console.log('Root directory:', rootDir);
  console.log('Target directory:', targetDir);

  try {
    const files = await listFiles(targetDir, rootDir);
    console.log('Files found:', files.length);
    const filteredFiles = files.filter(file => 
      file.name.toLowerCase().includes((search as string).toLowerCase())
    );
    console.log('Filtered files:', filteredFiles.length);
    res.status(200).json(filteredFiles);
  } catch (error) {
    console.error('Error listing files:', error);
    res.status(500).json({ error: 'Failed to list files', details: error.message });
  }
}