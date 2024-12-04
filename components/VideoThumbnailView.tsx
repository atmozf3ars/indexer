import React from 'react'
import { Play, Download } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

interface VideoFile {
  name: string
  size: number
  type: 'file'
}

interface VideoThumbnailViewProps {
  files: VideoFile[]
  currentPath: string
}

export function VideoThumbnailView({ files, currentPath }: VideoThumbnailViewProps) {
  const handlePlay = (fileName: string) => {
    // Implement video playback logic here
    console.log(`Playing ${fileName}`)
  }

  const handleDownload = (fileName: string) => {
    // Implement file download logic here
    console.log(`Downloading ${fileName}`)
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {files.map((file) => (
        <Card key={file.name} className="overflow-hidden">
          <CardContent className="p-0 relative">
            <img
              src={`/api/thumbnail?path=${encodeURIComponent(`${currentPath}/${file.name}`)}`}
              alt={`Thumbnail for ${file.name}`}
              className="w-full aspect-video object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-200">
              <Button
                variant="secondary"
                size="icon"
                className="mr-2"
                onClick={() => handlePlay(file.name)}
              >
                <Play className="h-6 w-6" />
                <span className="sr-only">Play {file.name}</span>
              </Button>
              <Button
                variant="secondary"
                size="icon"
                onClick={() => handleDownload(file.name)}
              >
                <Download className="h-6 w-6" />
                <span className="sr-only">Download {file.name}</span>
              </Button>
            </div>
          </CardContent>
          <div className="p-2 text-sm truncate">{file.name}</div>
        </Card>
      ))}
    </div>
  )
}

