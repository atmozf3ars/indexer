import { useState, useEffect, useRef, useCallback, useTransition } from 'react'
import { usePathname, useSearchParams, useRouter } from 'next/navigation'
import { FileInfo, DownloadProgress, VideoPreview, AudioPlayer } from './types'

export function useFileExplorer() {
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
  const [bgImages, setBgImages] = useState<{[key: string]: string}>({})
  const abortControllerRef = useRef<AbortController | null>(null)
  const [isPending, startTransition] = useTransition()
  const [isZipping, setIsZipping] = useState(false)
  const [zipProgress, setZipProgress] = useState(0)
  const [selectedFolder, setSelectedFolder] = useState<string | null>(null)
  const [isVideoDirectory, setIsVideoDirectory] = useState(false)
  const [folderDownloadProgress, setFolderDownloadProgress] = useState<number>(0)

  const handleLogin = useCallback((e: React.FormEvent) => {
    e.preventDefault()
    if (password === 'thisisthecircle') {
      setIsAuthenticated(true)
      setError('')
      localStorage.setItem('isAuthenticated', 'true')
    } else {
      setError('Incorrect password. Please try again.')
    }
  }, [password])

  const handleLogout = useCallback(() => {
    setIsAuthenticated(false)
    setCurrentPath([])
    setSearchTerm('')
    setIsSearching(false)
    setCurrentPage(1)
    setSelectedFolder(null)
    localStorage.removeItem('isAuthenticated')
    router.push(pathname)
  }, [pathname, router])

  const fetchFiles = useCallback(async (subdir: string, search: string, page: number) => {
    setIsLoading(true)
    setIsSearching(!!search)
    setError('')
    try {
      const url = `/api/files?subdir=${encodeURIComponent(subdir)}&search=${encodeURIComponent(search)}&page=${page}`
      const response = await fetch(url)
      const data = await response.json()
      if (response.ok) {
        setFiles(data.files)
        setCurrentPage(data.currentPage)
        setTotalPages(Math.ceil(data.totalCount / 100))
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
  }, [])

  const handleDownload = useCallback(async (filePath: string, fileName: string) => {
    // Implementation of handleDownload
  }, [])

  const cancelDownload = useCallback(() => {
    if (abortControllerRef.current) {
      abortControllerRef.current.abort()
    }
  }, [])

  const openVideoPreview = useCallback((filePath: string, fileName: string) => {
    setVideoPreview({ isOpen: true, filePath, fileName })
  }, [])

  const closeVideoPreview = useCallback(() => {
    setVideoPreview({ isOpen: false, filePath: '', fileName: '' })
  }, [])

  const toggleAudioPlayback = useCallback((filePath: string, fileName: string) => {
    setAudioPlayer(prev => {
      if (prev.isPlaying && prev.filePath === filePath) {
        return { isPlaying: false, filePath: '', fileName: '' }
      } else {
        return { isPlaying: true, filePath, fileName }
      }
    })
  }, [])

  const handlePageChange = useCallback((newPage: number) => {
    setCurrentPage(newPage)
    fetchFiles(currentPath.join('/'), searchTerm, newPage)
  }, [currentPath, fetchFiles, searchTerm])

  const handleZipDownload = useCallback(async () => {
    // Implementation of handleZipDownload
  }, [selectedFolder])

  const cancelZipCreation = useCallback(() => {
    if (abortControllerRef.current) {
      abortControllerRef.current.abort()
    }
  }, [])

  const navigateToSubdirectory = useCallback((folderName: string) => {
    startTransition(() => {
      const newPath = [...currentPath, folderName]
      setCurrentPath(newPath)
      setSearchTerm('')
      setCurrentPage(1)
      setSelectedFolder(newPath.join('/'))
      router.push(`${pathname}?path=${encodeURIComponent(newPath.join('/'))}`)
    })
  }, [currentPath, pathname, router])

  const navigateUp = useCallback(() => {
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
  }, [currentPath, pathname, router])

  const returnToHome = useCallback(() => {
    startTransition(() => {
      setCurrentPath([])
      setSearchTerm('')
      setIsSearching(false)
      setCurrentPage(1)
      setSelectedFolder(null)
      router.push(pathname)
    })
  }, [pathname, router])

  useEffect(() => {
    const storedAuthState = localStorage.getItem('isAuthenticated')
    if (storedAuthState === 'true') {
      setIsAuthenticated(true)
    }
  }, [])

  useEffect(() => {
    if (isAuthenticated) {
      fetchFiles(currentPath.join('/'), searchTerm, currentPage)
    }
  }, [currentPath, searchTerm, currentPage, isAuthenticated, fetchFiles])

  return {
    files,
    isLoading,
    currentPath,
    searchTerm,
    isSearching,
    isAuthenticated,
    password,
    error,
    downloadProgress,
    videoPreview,
    audioPlayer,
    currentPage,
    totalPages,
    isZipping,
    folderDownloadProgress,
    setSearchTerm,
    setPassword,
    handleLogin,
    handleDownload,
    cancelDownload,
    openVideoPreview,
    closeVideoPreview,
    toggleAudioPlayback,
    handlePageChange,
    handleLogout,
    handleZipDownload,
    cancelZipCreation,
    navigateToSubdirectory,
    navigateUp,
    returnToHome,
  }
}

