export interface FileInfo {
  name: string;
  isDirectory: boolean;
  size: number;
  lastModified: string;
  path?: string;
  hash?: string;
  displayName?: string;
  externalLink?: string;
}

export interface DownloadProgress {
  progress: number;
  speed: number;
  fileName: string;
}

export interface VideoPreview {
  isOpen: boolean;
  filePath: string;
  fileName: string;
}

export interface AudioPlayer {
  isPlaying: boolean;
  filePath: string;
  fileName: string;
}

