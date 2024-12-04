import { FileArchive, FileAudio, FileImage, FileVideo, FileCode, FileText, File } from 'lucide-react'
import { isArchiveFile, isAudioFile } from '../utils/fileExplorer'

interface FileIconProps {
    fileName: string
}

export const FileIcon: React.FC<FileIconProps> = ({ fileName }) => {
    if (isArchiveFile(fileName)) {
        return <FileArchive className="h-5 w-5 text-yellow-500 dark:text-gray-400" aria-label="Archive file" />
    } else if (isAudioFile(fileName)) {
        return <FileAudio className="h-5 w-5 text-purple-500 dark:text-gray-400" aria-label="Audio file" />
    } else if (fileName.endsWith('.jpg') || fileName.endsWith('.png') || fileName.endsWith('.gif')) {
        return <FileImage className="h-5 w-5 text-green-500 dark:text-gray-400" aria-label="Image file" />
    } else if (fileName.endsWith('.mp4') || fileName.endsWith('.avi') || fileName.endsWith('.mov')) {
        return <FileVideo className="h-5 w-5 text-red-500 dark:text-gray-400" aria-label="Video file" />
    } else if (fileName.endsWith('.js') || fileName.endsWith('.py') || fileName.endsWith('.cpp')) {
        return <FileCode className="h-5 w-5 text-blue-500 dark:text-gray-400" aria-label="Code file" />
    } else if (fileName.endsWith('.txt') || fileName.endsWith('.md') || fileName.endsWith('.doc')) {
        return <FileText className="h-5 w-5 text-gray-500 dark:text-gray-400" aria-label="Text file" />
    } else {
        return <File className="h-5 w-5 text-gray-400 dark:text-gray-400" aria-label="File" />
    }
}

