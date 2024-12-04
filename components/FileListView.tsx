import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { FileIcon } from './FileIcon'
import { FileInfo } from '../types/fileExplorer'
import { formatFileSize } from '../utils/fileExplorer'
import { Download, Play, Pause } from 'lucide-react'

interface FileListViewProps {
    files: FileInfo[]
    currentPath: string[]
    handleDownload: (filePath: string, fileName: string) => void
    openVideoPreview: (filePath: string, fileName: string) => void
    toggleAudioPlayback: (filePath: string, fileName: string) => void
    audioPlayer: { isPlaying: boolean; filePath: string; fileName: string }
    downloadProgress: { fileName: string } | null
    navigateToSubdirectory: (folderName: string) => void
    isSearching: boolean
}

export const FileListView: React.FC<FileListViewProps> = ({
    files,
    currentPath,
    handleDownload,
    openVideoPreview,
    toggleAudioPlayback,
    audioPlayer,
    downloadProgress,
    navigateToSubdirectory,
    isSearching
}) => {
    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Size</TableHead>
                    <TableHead>Last Modified</TableHead>
                    <TableHead>Action</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                <AnimatePresence>
                    {files.map((file) => {
                        const filePath = file.path || [...currentPath, file.name].join('/')
                        return (
                            <motion.tr
                                key={filePath}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.3 }}
                            >
                                <TableCell>
                                    <div className="flex items-center">
                                        {file.isDirectory ? (
                                            <FileIcon fileName="directory" />
                                        ) : (
                                            <FileIcon fileName={file.name} />
                                        )}
                                        <span
                                            className={`text-sm font-medium ml-2 ${file.isDirectory
                                                ? 'text-blue-600 dark:text-blue-400 cursor-pointer font-bold'
                                                : 'text-gray-900 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer'
                                            }`}
                                            onClick={() => file.isDirectory ? navigateToSubdirectory(file.name) : handleDownload(filePath, file.name)}
                                        >
                                            {file.name}
                                        </span>
                                    </div>
                                    {isSearching && file.path && (
                                        <div className="text-xs text-gray-500 dark:text-gray-400 ml-7">{file.path}</div>
                                    )}
                                </TableCell>
                                <TableCell className="text-sm text-gray-500 dark:text-gray-400">
                                    {file.isDirectory ? '-' : formatFileSize(file.size)}
                                </TableCell>
                                <TableCell className="text-sm text-gray-500 dark:text-gray-400">
                                    {new Date(file.lastModified).toLocaleString()}
                                </TableCell>
                                <TableCell>
                                    <div className="flex items-center space-x-2">
                                        {!file.isDirectory && (
                                            <Button
                                                onClick={() => handleDownload(filePath, file.name)}
                                                variant="ghost"
                                                size="sm"
                                                className="flex items-center text-gray-600 hover:text-blue-800 dark:text-blue-100 dark:hover:text-pink-500"
                                                disabled={!!downloadProgress}
                                                aria-label={`Download ${file.name}`}
                                            >
                                                <Download className="h-4 w-4 mr-1" aria-hidden="true" />
                                                {downloadProgress && downloadProgress.fileName === file.name ? 'Downloading...' : 'Download'}
                                            </Button>
                                        )}
                                        {file.name.toLowerCase().endsWith('.mp4') && (
                                            <Button
                                                onClick={() => openVideoPreview(filePath, file.name)}
                                                variant="ghost"
                                                size="sm"
                                                className="flex items-center text-green-600 hover:text-green-800 dark:text-green-400 dark:hover:text-gray-100"
                                                aria-label={`Preview ${file.name}`}
                                            >
                                                <Play className="h-4 w-4 mr-1" aria-hidden="true" />
                                                Preview
                                            </Button>
                                        )}
                                        {(file.name.toLowerCase().endsWith('.mp3') || file.name.toLowerCase().endsWith('.wav')) && (
                                            <Button
                                                onClick={() => toggleAudioPlayback(filePath, file.name)}
                                                variant="ghost"
                                                size="sm"
                                                className="flex items-center text-purple-600 hover:text-purple-800 dark:text-purple-400 dark:hover:text-gray-100"
                                                aria-label={`${audioPlayer.isPlaying && audioPlayer.filePath === filePath ? 'Pause' : 'Play'} ${file.name}`}
                                            >
                                                {audioPlayer.isPlaying && audioPlayer.filePath === filePath ? (
                                                    <Pause className="h-4 w-4 mr-1" aria-hidden="true" />
                                                ) : (
                                                    <Play className="h-4 w-4 mr-1" aria-hidden="true" />
                                                )}
                                                {audioPlayer.isPlaying && audioPlayer.filePath === filePath ? 'Pause' : 'Play'}
                                            </Button>
                                        )}
                                    </div>
                                </TableCell>
                            </motion.tr>
                        )
                    })}
                </AnimatePresence>
            </TableBody>
        </Table>
    )
}

