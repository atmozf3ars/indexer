'use client'

import React, { useState, useEffect, useRef, useTransition, useCallback } from 'react'
import { usePathname, useSearchParams, useRouter } from 'next/navigation'
import { FileText, Folder, Download, ArrowUp, FileArchive, FileAudio, FileImage, FileVideo, FileCode, File, Search, Lock, Home, ChevronRight, X, Moon, Sun, Play, Pause, ChevronLeft, ChevronRightIcon, Music, Headphones, Image, LogOut, Loader2 } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Progress } from "@/components/ui/progress"
import { useTheme } from "next-themes"
import { VideoThumbnailView } from './VideoThumbnailView'


interface FileInfo {
    name: string
    isDirectory: boolean
    size: number
    lastModified: string
    path?: string
    hash?: string
    displayName?: string
}

interface DownloadProgress {
    progress: number
    speed: number
    fileName: string
}

interface VideoPreview {
    isOpen: boolean
    filePath: string
    fileName: string
}

interface AudioPlayer {
    isPlaying: boolean
    filePath: string
    fileName: string
}

const fadeInOut = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: { duration: 0.3 }
}

const slideUp = {
    initial: { y: 20, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: -20, opacity: 0 },
    transition: { duration: 0.3 }
}

const staggerChildren = {
    animate: {
        transition: {
            staggerChildren: 0.1
        }
    }
}

export default function FileExplorer() {
    const router = useRouter()
    const pathname = usePathname()
    const searchParams = useSearchParams()
    const [files, setFiles] = useState<FileInfo[]>([])
    const [isLoading, setIsLoading] = useState(false)
    const [currentPath, setCurrentPath] = useState<string[]>([])
    const [searchTerm, setSearchTerm] = useState('')
    const [isSearching, setIsSearching] = useState(false)
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [downloadProgress, setDownloadProgress] = useState<DownloadProgress | null>(null)
    const [videoPreview, setVideoPreview] = useState<VideoPreview>({ isOpen: false, filePath: '', fileName: '' })
    const [audioPlayer, setAudioPlayer] = useState<AudioPlayer>({ isPlaying: false, filePath: '', fileName: '' })
    const [currentPage, setCurrentPage] = useState(1)
    const [totalPages, setTotalPages] = useState(1)
    const [bgImages, setBgImages] = useState<{ [key: string]: string }>({})
    const abortControllerRef = useRef<AbortController | null>(null)
    const [isPending, startTransition] = useTransition()
    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = useState(false)
    const videoRef = useRef<HTMLVideoElement>(null)
    const audioRef = useRef<HTMLAudioElement>(null)
    const landingPageBgImage = 'http://86.92.129.223/121.jpg'
    const [isZipping, setIsZipping] = useState(false)
    const [zipProgress, setZipProgress] = useState(0)
    const [selectedFolder, setSelectedFolder] = useState<string | null>(null)


    const sectionConfig = {
        AUDIO: {
            icon: Headphones,
            color: 'text-gray-600 dark:text-pink-400',
            bgColor: 'bg-white-100 dark:bg-gray-900',
        },
        GFX: {
            icon: Image,
            color: 'text-gray-500 dark:text-purple-400',
            bgColor: 'bg-white-100 dark:bg-gray-900',
        },
        MUSIC: {
            icon: Music,
            color: 'text-gray-500 dark:text-blue-400',
            bgColor: 'bg-white-100 dark:bg-gray-900',
        },
        OTHER: {
            icon: Folder,
            color: 'text-gray-500 dark:text-cyan-400',
            bgColor: 'bg-white-100 dark:bg-gray-800',
        },
    }

    useEffect(() => {
        setMounted(true)
    }, [])

    useEffect(() => {
        const storedAuthState = localStorage.getItem('isAuthenticated')
        if (storedAuthState === 'true') {
            setIsAuthenticated(true)
        }
    }, [])

    useEffect(() => {
        if (isAuthenticated) {
            fetchFiles(currentPath.join('/'), searchTerm, 1)
        }
    }, [currentPath, searchTerm, isAuthenticated])

    useEffect(() => {
        const loadBackgroundImages = async () => {
            const groups = groupDirectories(files)
            const images: { [key: string]: string } = {}
            for (const [groupName, groupFiles] of Object.entries(groups)) {
                for (const file of groupFiles) {
                    if (!images[file.name]) {
                        images[file.name] = landingPageBgImage
                    }
                }
            }
            setBgImages(images)
        }

        loadBackgroundImages()
    }, [files])


    const [isVideoDirectory, setIsVideoDirectory] = useState(false)


    const updateCurrentPath = useCallback((newPath: string) => {
        const decodedPath = decodeURIComponent(newPath)
        setCurrentPath(decodedPath ? decodedPath.split('/') : [])
    }, [])

    useEffect(() => {
        const path = searchParams.get('path') || ''
        updateCurrentPath(path)
    }, [searchParams, updateCurrentPath])

    useEffect(() => {
        const handleRouteChange = () => {
            const path = searchParams.get('path') || ''
            updateCurrentPath(path)
        }

        window.addEventListener('popstate', handleRouteChange)

        return () => {
            window.removeEventListener('popstate', handleRouteChange)
        }
    }, [searchParams, updateCurrentPath])

    useEffect(() => {
        return () => {
            if (abortControllerRef.current) {
                abortControllerRef.current.abort()
            }
            setDownloadProgress(null)
        }
    }, [])

    const fetchFiles = async (subdir: string, search: string, page: number) => {
        setIsLoading(true)
        setIsSearching(!!search)
        setError('')
        try {
            const url = `/api/files?subdir=${encodeURIComponent(subdir)}&search=${encodeURIComponent(search)}&page=${page}`
            const response = await fetch(url)
            const data = await response.json()
            const onlyVideoFiles = data.files.every((file: FileInfo) =>
                file.type === 'file' && videoExtensions.some(ext => file.name.toLowerCase().endsWith(ext))
            )
            setIsVideoDirectory(onlyVideoFiles && data.files.length > 0)

            if (response.ok) {
                if (Array.isArray(data.files)) {
                    setFiles(data.files)
                    setCurrentPage(data.currentPage)
                    setTotalPages(Math.ceil(data.totalCount / 100))
                } else {
                    setFiles([])
                    setError(data.error || 'Received invalid data from server')

                }
            } else {
                throw new Error(data.error || `Failed to fetch files: ${response.status} ${response.statusText}`)
            }
        } catch (error) {
            console.error('Error fetching files:', error)
            setError(`Failed to fetch files: ${error instanceof Error ? error.message : 'Unknown error'}`)
            setFiles([])
        } finally {
            setIsLoading(false)
        }
    }

    const formatFileSize = (bytes: number) => {
        if (bytes < 1024) return bytes + ' B'
        else if (bytes < 1048576) return (bytes / 1024).toFixed(2) + ' KB'
        else if (bytes < 1073741824) return (bytes / 1048576).toFixed(2) + ' MB'
        else return (bytes / 1073741824).toFixed(2) + ' GB'
    }

    const navigateToSubdirectory = (folderName: string) => {
        startTransition(() => {
            const newPath = [...currentPath, folderName]
            setCurrentPath(newPath)
            setSearchTerm('')
            setCurrentPage(1)
            setSelectedFolder(newPath.join('/'))
            router.push(`${pathname}?path=${encodeURIComponent(newPath.join('/'))}`)
        })
    }

    const navigateUp = () => {
        if (currentPath.length > 0) {
            startTransition(() => {
                const newPath = currentPath.slice(0, -1)
                setCurrentPath(newPath)
                setSearchTerm('')
                setCurrentPage(1)
                setSelectedFolder(newPath.length > 0 ? newPath.join('/') : null)
                router.push(`${pathname}?path=${encodeURIComponent(newPath.join('/'))}`)
            })
        }
    }

    const returnToHome = () => {
        startTransition(() => {
            setCurrentPath([])
            setSearchTerm('')
            setIsSearching(false)
            setCurrentPage(1)
            setSelectedFolder(null)
            router.push(pathname)
        })
    }

    const isArchiveFile = (fileName: string): boolean => {
        const archiveExtensions = ['.zip', '.rar', '.7z', '.tar', '.gz']
        return archiveExtensions.some(ext => fileName.toLowerCase().endsWith(ext))
    }

    const isAudioFile = (fileName: string): boolean => {
        return fileName.toLowerCase().endsWith('.mp3') || fileName.toLowerCase().endsWith('.wav')
    }

    const getFileIcon = (fileName: string) => {
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

    const setAuthenticationState = (isAuthenticated: boolean) => {
        if (isAuthenticated) {
            localStorage.setItem('isAuthenticated', 'true')
        } else {
            localStorage.removeItem('isAuthenticated')
        }
        setIsAuthenticated(isAuthenticated)
    }

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault()
        if (password === 'thisisthecircle') {
            setAuthenticationState(true)
            setError('')
        } else {
            setError('Incorrect password. Please try again.')
        }
    }

    const [folderDownloadProgress, setFolderDownloadProgress] = useState<number>(0)

    const handleDownload = async (filePath: string, fileName: string) => {
        if (abortControllerRef.current) {
            abortControllerRef.current.abort()
        }
        abortControllerRef.current = new AbortController()

        try {
            setDownloadProgress({ progress: 0, speed: 0, fileName })

            const response = await fetch(`/api/files/download?file=${encodeURIComponent(filePath)}`, {
                signal: abortControllerRef.current.signal
            })

            if (!response.ok) {
                const errorData = await response.json()
                throw new Error(errorData.error || `HTTP error! status: ${response.status}`)
            }

            const contentLength = response.headers.get('Content-Length')
            const totalSize = contentLength ? parseInt(contentLength, 10) : 0
            let receivedSize = 0
            let startTime = Date.now()

            const reader = response.body?.getReader()
            const chunks: Uint8Array[] = []

            if (reader) {
                while (true) {
                    const { done, value } = await reader.read()
                    if (done) break

                    chunks.push(value)
                    receivedSize += value.length

                    const now = Date.now()
                    const elapsedSeconds = (now - startTime) / 1000
                    const speed = receivedSize / elapsedSeconds / (1024 * 1024) // MB/s

                    const progress = totalSize > 0 ? Math.min(100, Math.round((receivedSize / totalSize) * 100)) : 0

                    setDownloadProgress({
                        progress,
                        speed,
                        fileName
                    })
                }
            }

            const blob = new Blob(chunks)
            const url = window.URL.createObjectURL(blob)
            const a = document.createElement('a')
            a.style.display = 'none'
            a.href = url
            a.download = fileName
            document.body.appendChild(a)
            a.click()
            window.URL.revokeObjectURL(url)
        } catch (error) {
            if (error instanceof Error && error.name === 'AbortError') {
                console.log('Download cancelled')
            } else {
                console.error('Error downloading file:', error)
                setError(`Failed to download file: ${error instanceof Error ? error.message : 'Unknown error'}`)
            }
        } finally {
            setDownloadProgress(null)
            abortControllerRef.current = null
        }
    }


    const cancelDownload = () => {
        if (abortControllerRef.current) {
            abortControllerRef.current.abort()
        }
    }

    const videoExtensions = ['.mkv', '.mov', '.mp4']



    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark')
    }

    const openVideoPreview = (filePath: string, fileName: string) => {
        console.log('Opening video preview:', { filePath, fileName })
        const encodedFilePath = encodeURIComponent(filePath.replace(/\\/g, '/'))
        setVideoPreview({ isOpen: true, filePath: encodedFilePath, fileName })
    }

    const closeVideoPreview = () => {
        setVideoPreview({ isOpen: false, filePath: '', fileName: '' })
        if (videoRef.current) {
            videoRef.current.pause()
        }
    }

    const toggleAudioPlayback = (filePath: string, fileName: string) => {
        if (audioPlayer.isPlaying && audioPlayer.filePath === filePath) {
            if (audioRef.current) {
                audioRef.current.pause()
            }
            setAudioPlayer({ isPlaying: false, filePath: '', fileName: '' })
        } else {
            const encodedFilePath = encodeURIComponent(filePath.replace(/\\/g, '/'))
            setAudioPlayer({ isPlaying: true, filePath: encodedFilePath, fileName })
            if (audioRef.current) {
                audioRef.current.src = `/api/files/stream?file=${encodedFilePath}`
                audioRef.current.play()
            }
        }
    }

    const handlePageChange = (newPage: number) => {
        setCurrentPage(newPage)
        fetchFiles(currentPath.join('/'), searchTerm, newPage)
    }

    const handleLogout = () => {
        setAuthenticationState(false)
        setCurrentPath([])
        setSearchTerm('')
        setIsSearching(false)
        setCurrentPage(1)
        setSelectedFolder(null)
        router.push(pathname)
    }

    const groupDirectories = (files: FileInfo[]) => {
        const groups: { [key: string]: FileInfo[] } = {
            AUDIO: [],
            GFX: [],
            MUSIC: [],
            OTHER: []
        }

        files.forEach(file => {
            if (file.isDirectory) {
                let category = 'OTHER'
                let displayName = file.name

                if (file.name.toUpperCase().includes('AUDIO')) {
                    category = 'AUDIO'
                    displayName = file.name.replace(/AUDIO\.\s*/i, '')
                } else if (file.name.toUpperCase().includes('GFX')) {
                    category = 'GFX'
                    displayName = file.name.replace(/GFX\.\s*/i, '')
                } else if (file.name.toUpperCase().includes('MUSIC')) {
                    category = 'MUSIC'
                    displayName = file.name.replace(/MUSIC\.\s*/i, '')
                }

                groups[category].push({ ...file, displayName })
            }
        })

        return groups
    }

    const handleZipDownload = async () => {
        if (!selectedFolder) {
            setError("No folder selected")
            return
        }

        setIsZipping(true)
        setFolderDownloadProgress(0)
        abortControllerRef.current = new AbortController()

        try {
            const response = await fetch('/api/zip', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ folderPath: selectedFolder }),
                signal: abortControllerRef.current.signal,
            })

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`)
            }

            const reader = response.body?.getReader()
            if (!reader) {
                throw new Error('Failed to get response reader')
            }

            let zipFileName = ''

            while (true) {
                const { done, value } = await reader.read()
                if (done) break

                const text = new TextDecoder().decode(value)
                const messages = text.split('\n\n').filter(Boolean)

                for (const message of messages) {
                    if (message.startsWith('data: ')) {
                        const data = JSON.parse(message.slice(6))
                        if (data.event === 'progress' && typeof data.progress === 'number') {
                            setFolderDownloadProgress(data.progress)
                        } else if (data.event === 'complete' && data.zipFileName) {
                            zipFileName = data.zipFileName
                        } else if (data.event === 'error') {
                            throw new Error(data.message || 'Unknown error occurred')
                        }
                    }
                }
            }

            if (zipFileName) {
                const downloadResponse = await fetch(`/api/zip/download?file=${encodeURIComponent(zipFileName)}`)
                if (downloadResponse.ok) {
                    const blob = await downloadResponse.blob()
                    const url = window.URL.createObjectURL(blob)
                    const a = document.createElement('a')
                    a.style.display = 'none'
                    a.href = url
                    a.download = zipFileName
                    document.body.appendChild(a)
                    a.click()
                    window.URL.revokeObjectURL(url)
                } else {
                    throw new Error(`Failed to download ZIP file: ${downloadResponse.status} ${downloadResponse.statusText}`)
                }
            } else {
                throw new Error('ZIP file name not received')
            }
        } catch (error) {
            if (error instanceof Error && error.name === 'AbortError') {
                console.log('Zip creation cancelled')
            } else {
                console.error('Error creating or downloading ZIP:', error)
                setError(`Failed to create or download ZIP: ${error instanceof Error ? error.message : 'Unknown error'}`)
            }
        } finally {
            setIsZipping(false)
            setFolderDownloadProgress(0)
            abortControllerRef.current = null
        }
    }


    const cancelZipCreation = () => {
        if (abortControllerRef.current) {
            abortControllerRef.current.abort()
        }
    }


    const renderRootDirectory = () => {
        const groups = groupDirectories(files)

        return (
            <motion.div className="space-y-8" variants={staggerChildren}>
                {Object.entries(groups).map(([groupName, groupFiles]) => (
                    groupFiles.length > 0 && (
                        <motion.div
                            key={groupName}
                            className={`rounded-lg shadow-md p-6 ${sectionConfig[groupName as keyof typeof sectionConfig].bgColor}`}
                            variants={fadeInOut}
                        >
                            <h2 className={`text-2xl font-bold mb-4 ${sectionConfig[groupName as keyof typeof sectionConfig].color}`}>{groupName}</h2>
                            <motion.div
                                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
                                variants={staggerChildren}
                            >
                                {groupFiles.map((file) => {
                                    const Icon = sectionConfig[groupName as keyof typeof sectionConfig].icon
                                    return (
                                        <motion.div
                                            key={file.name}
                                            variants={slideUp}
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            <Button
                                                onClick={() => navigateToSubdirectory(file.name)}
                                                className={`w-full h-40 p-2 rounded-lg shadow-sm hover:shadow-md transition-shadow relative overflow-hidden ${sectionConfig[groupName as keyof typeof sectionConfig].color}`}
                                                variant="ghost"
                                            >
                                                <div
                                                    className="absolute inset-0 bg-cover bg-center opacity-50"
                                                    style={{ backgroundImage: `url(${landingPageBgImage})` }}
                                                />
                                                <div className="relative z-10 flex flex-col items-center justify-center w-full h-full">
                                                    <Icon className="h-20 w-20 mb-2" aria-hidden="true" />
                                                    <span className="text-lg font-bold text-center break-words w-full px-2">
                                                        {file.displayName || file.name}
                                                    </span>
                                                </div>
                                            </Button>
                                        </motion.div>
                                    )
                                })}
                            </motion.div>
                        </motion.div>
                    )
                ))}
            </motion.div>
        )
    }

    if (!mounted) {
        return null
    }

    const backgroundImage = theme === 'dark' ? 'url(http://86.92.129.223/ic2dark.jpg)' : 'url(http://86.92.129.223/ic2.jpg)'

    if (!isAuthenticated) {
        return (
            <motion.div
                className="min-h-screen flex items-center justify-center relative overflow-hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat animate-background-move bg-scroll"
                    style={{
                        backgroundImage: backgroundImage,
                        filter: 'blur(5px)',
                    }}
                />
                <div className="absolute inset-0 bg-gradient-radial from-transparent via-white/50 to-white dark:via-gray-800/50 dark:to-gray-900" />
                <motion.div
                    className="bg-white/80 dark:bg-gray-900/80 p-8 rounded-lg shadow-md w-96 relative z-10 backdrop-blur-sm"
                    variants={fadeInOut}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                >
                    <h1 className="text-2xl font-bold mb-4 text-center text-gray-800 dark:text-gray-300">INNERCIRCLE.STORE</h1>
                    <form onSubmit={handleLogin} className="space-y-4">
                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-400">
                                Password
                            </label>
                            <div className="mt-1 relative rounded-md shadow-sm">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <Lock className="h-5 w-5 text-gray-400" aria-hidden="true" />
                                </div>
                                <Input
                                    type="password"
                                    id="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="pl-10"
                                    placeholder="Enter password"
                                />
                            </div>
                        </div>
                        {error && <p className="text-red-500 text-sm">{error}</p>}
                        <Button type="submit" className="w-full">
                            Login
                        </Button>
                    </form>
                </motion.div>
            </motion.div>
        )
    }

    return (
        <div className="relative min-h-screen overflow-hidden">
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat animate-background-move bg-scroll"
                style={{
                    backgroundImage: backgroundImage,
                    filter: 'blur(5px)',
                }}
            />
            <div className="fixed inset-0 bg-gradient-radial from-transparent via-white/50 to-white dark:via-pink-900/50 dark:to-gray-900" />
            <motion.div
                className="container mx-auto p-4 relative z-10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-300 flex items-center">
                        <Folder className="mr-2 h-8 w-8 text-blue-500" aria-hidden="true" />
                        INNERCIRCLE.STORE
                    </h1>
                    <div className="flex items-center space-x-2">
                        <Button
                            onClick={toggleTheme}
                            variant="outline"
                            size="sm"
                            className="rounded-full flex items-center"
                            aria-label={theme === 'dark' ? "Switch to Light Mode" : "Switch to Dark Mode"}
                        >
                            {theme === 'dark' ? (
                                <>
                                    <Sun className="h-[1.2rem] w-[1.2rem] mr-2" aria-hidden="true" />
                                    Switch to Light Mode
                                </>
                            ) : (
                                <>
                                    <Moon className="h-[1.2rem] w-[1.2rem] mr-2 text-gray-600" aria-hidden="true" />
                                    Switch to Dark Mode
                                </>
                            )}
                        </Button>
                        <Button
                            onClick={handleLogout}
                            variant="outline"
                            size="sm"
                            className="flex items-center"
                            aria-label="Logout"
                        >
                            <LogOut className="h-4 w-4 mr-1" aria-hidden="true" />
                            Logout
                        </Button>
                    </div>
                </div>
                {error && (
                    <Alert variant="destructive" className="mb-4">
                        <AlertTitle>Error</AlertTitle>
                        <AlertDescription>{error}</AlertDescription>
                    </Alert>
                )}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentPath.join('/')}
                        className="bg-white/70 dark:bg-gray-900 shadow-md rounded-lg overflow-hidden mb-16 backdrop-blur-sm p-6"
                        variants={fadeInOut}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                    >
                        <div className="p-4 bg-gray-100/90 dark:bg-gray-900  flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                                {currentPath.length > 0 && (
                                    <Button
                                        onClick={navigateUp}
                                        disabled={isSearching}
                                        variant="outline"
                                        size="sm"
                                        className="flex items-center"
                                        aria-label="Go up one directory"
                                    >
                                        <ArrowUp className="h-4 w-4 mr-1" aria-hidden="true" />
                                        Go up
                                    </Button>
                                )}
                                {isSearching && (
                                    <Button
                                        onClick={returnToHome}
                                        variant="outline"
                                        size="sm"
                                        className="flex items-center"
                                        aria-label="Return to home directory"
                                    >
                                        <Home className="h-4 w-4 mr-1" aria-hidden="true" />
                                        Return to Home
                                    </Button>
                                )}
                                <span className="font-bold text-gray-500 dark:text-gray-400 flex items-center">
                                    <ChevronRight className="h-6 w-6 mr-1" aria-hidden="true" />
                                    {isSearching ? 'Search Results' : (currentPath.length === 0 ? 'HOME' : currentPath.join(' / '))}
                                </span>
                            </div>

                            {currentPath.length > 0 && (
                                <div className="flex items-center space-x-2">
                                    <Input
                                        type="text"
                                        placeholder="Search files..."
                                        value={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                        className="mr-2"
                                        aria-label="Search files"
                                    />

                                    <Button
                                        onClick={handleZipDownload}
                                        variant="outline"
                                        size="sm"
                                        className="flex items-center"
                                        disabled={!selectedFolder || isZipping}
                                        aria-label="Download selected folder as ZIP"
                                    >
                                        {isZipping ? (
                                            <Loader2 className="h-4 w-4 mr-1 animate-spin" />
                                        ) : (
                                            <Download className="h-4 w-4 mr-1" />
                                        )}
                                        {isZipping ? 'Zipping...' : 'Download ZIP'}
                                    </Button>
                                </div>
                            )}
                        </div>
                        <AnimatePresence mode="wait">
                            {isLoading ? (
                                <motion.div
                                    className="p-4 text-center"
                                    key="loading"
                                    variants={fadeInOut}
                                    initial="initial"
                                    animate="animate"
                                    exit="exit"
                                >
                                    Loading...
                                </motion.div>
                            ) : files.length > 0 ? (
                                <motion.div
                                    key="content"
                                    variants={staggerChildren}
                                    initial="initial"
                                    animate="animate"
                                    exit="exit"
                                >
                                    {currentPath.length === 0 ? (
                                        renderRootDirectory()
                                    ) : (
                                        <>
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
                                                                    variants={slideUp}
                                                                    initial="initial"
                                                                    animate="animate"
                                                                    exit="exit"
                                                                >
                                                                    <TableCell>
                                                                        <div className="flex items-center">
                                                                            {file.isDirectory ? (
                                                                                <Folder className="h-6 w-6 text-blue-500 mr-2" aria-label="Folder" />
                                                                            ) : (
                                                                                <span className="mr-2">{getFileIcon(file.name)}</span>
                                                                            )}
                                                                            <span
                                                                                className={`text-sm font-medium  ${file.isDirectory
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
                                                                            {isAudioFile(file.name) && (
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

                                            <div className="flex justify-between items-center p-4">
                                                <Button
                                                    onClick={() => handlePageChange(currentPage - 1)}
                                                    disabled={currentPage === 1}
                                                    variant="outline"
                                                    size="sm"
                                                >
                                                    <ChevronLeft className="h-4 w-4 mr-2" />
                                                    Previous
                                                </Button>
                                                <span>
                                                    Page {currentPage} of {totalPages}
                                                </span>
                                                <Button
                                                    onClick={() => handlePageChange(currentPage + 1)}
                                                    disabled={currentPage === totalPages}
                                                    variant="outline"
                                                    size="sm"
                                                >
                                                    Next
                                                    <ChevronRightIcon className="h-4 w-4 ml-2" />
                                                </Button>
                                            </div>
                                        </>
                                    )}
                                </motion.div>
                            ) : (
                                <motion.div
                                    className="p-4 text-center text-gray-700 dark:text-gray-400"
                                    key="empty"
                                    variants={fadeInOut}
                                    initial="initial"
                                    animate="animate"
                                    exit="exit"
                                >
                                    No files found. Current path: {currentPath.join('/')}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                </AnimatePresence>
                {downloadProgress && (
                    <div className="fixed bottom-0 left-0 right-0 bg-white/90 dark:bg-gray-800/90 shadow-md p-4 backdrop-blur-sm">
                        <div className="flex items-center justify-between mb-2">
                            <span className="font-medium text-gray-700 dark:text-gray-400">Downloading: {downloadProgress.fileName}</span>
                            <Button onClick={cancelDownload} variant="destructive" size="sm" className="flex items-center" aria-label="Cancel download">
                                <X className="h-4 w-4 mr-1" aria-hidden="true" />
                                Cancel
                            </Button>
                        </div>
                        <Progress value={downloadProgress.progress} className="w-full h-4 mb-2" aria-label={`Download progress: ${downloadProgress.progress}%`} />
                        <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400">
                            <span>{downloadProgress.progress}% complete</span>
                            <span>{downloadProgress.speed.toFixed(2)} MB/s (avg)</span>
                        </div>
                    </div>
                )}
                {videoPreview.isOpen && (
                    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
                        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg max-w-4xl w-full">
                            <div className="flex justify-between items-center mb-4">
                                <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100">{videoPreview.fileName}</h2>
                                <Button onClick={() => closeVideoPreview()} variant="ghost" size="sm" aria-label="Close video preview">
                                    <X className="h-6 w-6" />
                                </Button>
                            </div>
                            <video
                                ref={videoRef}
                                controls
                                className="w-full"
                                aria-label={`Video preview of ${videoPreview.fileName}`}
                                onError={(e) => {
                                    console.error('Video playback error:', e.currentTarget.error)
                                    setError(`Failed to load video: ${e.currentTarget.error?.message || 'Unknown error'}. Please try downloading the file instead.`)
                                }}
                            >
                                <source
                                    src={`/api/files/stream?file=${videoPreview.filePath}`}
                                    type="video/mp4"
                                    onError={(e) => {
                                        console.error('Source error:', e)
                                    }}
                                />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>
                )}
                {isZipping && (
                    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
                        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg max-w-md w-full">
                            <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-gray-100">Creating ZIP file</h2>
                            <Progress value={folderDownloadProgress} className="w-full h-4 mb-2" />
                            <p className="text-sm text-gray-600 dark:text-gray-400">{folderDownloadProgress.toFixed(2)}% complete</p>
                            <Button onClick={cancelZipCreation} variant="destructive" size="sm" className="mt-4">
                                Cancel
                            </Button>
                        </div>
                    </div>
                )}
                {audioPlayer.isPlaying && (
                    <div className="fixed bottom-0 left-0 right-0 bg-white/90 dark:bg-gray-800/90 shadow-md p-4 backdrop-blur-sm">
                        <div className="flex items-center justify-between mb-2">
                            <span className="font-medium text-gray-700 dark:text-gray-400">Now Playing: {audioPlayer.fileName}</span>
                            <Button onClick={() => toggleAudioPlayback(audioPlayer.filePath, audioPlayer.fileName)} variant="ghost" size="sm" aria-label="Stop audio playback">
                                <X className="h-4 w-4 mr-1" aria-hidden="true" />
                                Stop
                            </Button>
                        </div>
                        <audio
                            ref={audioRef}
                            controls
                            className="w-full"
                            aria-label={`Audio player for ${audioPlayer.fileName}`}
                            onEnded={() => setAudioPlayer({ isPlaying: false, filePath: '', fileName: '' })}
                            onError={(e) => {
                                console.error('Audio playback error:', e.currentTarget.error);
                                setError(`Failed to load audio: ${e.currentTarget.error?.message || 'Unknown error'}. Please try downloading the file instead.`);
                            }}
                        >
                            <source src={`/api/files/stream?file=${audioPlayer.filePath}`} type="audio/mpeg" />
                            Your browser does not support the audio element.
                        </audio>
                    </div>
                )}
            </motion.div>
        </div>
    )
}

