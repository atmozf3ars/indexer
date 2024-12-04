/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  serverRuntimeConfig: {
    // Will only be available on the server side
    FILE_DIRECTORY: process.env.FILE_DIRECTORY,
    MUSIC_DIR: process.env.MUSIC_DIR || 'W:/Music',
  },
  publicRuntimeConfig: {
    // Will be available on both server and client
    staticFolder: '/static',
    MUSIC_DIR: process.env.MUSIC_DIR || 'W:/Music',
  },
  webpack: (config) => {
    config.externals = [...config.externals, 'sharp'];
    return config;
  },
}


const path = require('path');

module.exports = nextConfig