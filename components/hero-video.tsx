'use client'

import { useEffect, useRef } from 'react'

export function HeroVideo({ className = '' }: { className?: string }) {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (reduce.matches) {
      video.pause()
      return
    }
    // Some mobile browsers ignore the autoplay attribute until play() is called.
    video.play().catch(() => {})
  }, [])

  return (
    <video
      ref={videoRef}
      className={`h-full w-full object-cover ${className}`}
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      poster="/videos/hero-poster.jpg"
      aria-label="Breakwall Specialists crew working from an excavator barge on the water"
    >
      <source src="/videos/hero-720.mp4" type="video/mp4" media="(max-width: 767px)" />
      <source src="/videos/hero-1080.mp4" type="video/mp4" />
    </video>
  )
}
