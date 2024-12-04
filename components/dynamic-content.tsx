'use client'

import { useState, useEffect } from 'react'

export default function DynamicContent() {
  const [currentTime, setCurrentTime] = useState<string | null>(null)

  useEffect(() => {
    setCurrentTime(new Date().toLocaleTimeString())
    const timer = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div>
      <h2>Dynamic Content</h2>
      {currentTime ? (
        <p>Current time: {currentTime}</p>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  )
}