import { Headphones, Image, Music, Folder, Users } from 'lucide-react'
import { SectionConfig } from '../types/fileExplorer'

export const SECTION_CONFIG: { [key: string]: SectionConfig } = {
    'AUDIO SOFTWARE SECTION': {
        icon: Headphones,
        color: 'text-gray-600 dark:text-pink-400',
        bgColor: 'bg-white-100 dark:bg-gray-900',
    },
    'INNERCIRCLE': {
        icon: Users,
        color: 'text-gray-500 dark:text-cyan-400',
        bgColor: 'bg-white-100 dark:bg-gray-900',
    },
    'MUSIC SECTION': {
        icon: Music,
        color: 'text-gray-500 dark:text-green-400',
        bgColor: 'bg-white-100 dark:bg-gray-900',
    },
    'GFX & 3D SECTION': {
        icon: Image,
        color: 'text-gray-500 dark:text-purple-400',
        bgColor: 'bg-white-100 dark:bg-gray-900',
    },
    'OTHER': {
        icon: Folder,
        color: 'text-gray-500 dark:text-cyan-400',
        bgColor: 'bg-white-100 dark:bg-gray-800',
    },
}

export const LANDING_PAGE_BG_IMAGE = 'http://86.92.129.223/121.jpg'
export const VIDEO_EXTENSIONS = ['.mkv', '.mov', '.mp4']
