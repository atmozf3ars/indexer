import React, { useRef, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { X } from 'lucide-react'

interface AudioPlayerProps {
  isPlaying: boolean
  filePath: string
  fileName: string
  onStop: () => void
  onError: (error: string) => void
}

export function AudioPlayer({ isPlaying, filePath, fileName, onStop, onError }: AudioPlayerProps) {
  const audioRef = useRef<HTMLAudioElement>(null)

  useEffect(() => {
    if (isPlaying && audioRef.current) {
      audioRef.current.play().catch((error) => {
        console.error('Audio playback error:', error)
        onError('Failed to play audio. Please try again.')
      })
    }
  }, [isPlaying, filePath, onError])

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white/90 dark:bg-gray-800/90 shadow-md p-4 backdrop-blur-sm">
      <div className="flex items-center justify-between mb-2">
        <span className="font-medium text-gray-700 dark:text-gray-400">Now Playing: {fileName}</span>
        <Button onClick={onStop} variant="ghost" size="sm" aria-label="Stop audio playback">
          <X className="h-4 w-4 mr-1" aria-hidden="true" />
          Stop
        </Button>
      </div>
      <audio
        ref={audioRef}
        controls
        className="w-full"
        aria-label={`Audio player for ${fileName}`}
        onEnded={onStop}
        onError={(e) => {
          console.error('Audio playback error:', e.currentTarget.error)
          onError(`Failed to load audio: ${e.currentTarget.error?.message || 'Unknown error'}. Please try downloading the file instead.`)
        }}
      >
        <source src={`/api/files/stream?file=${filePath}`} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  )
}

