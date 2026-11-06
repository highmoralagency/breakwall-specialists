'use client'

import { useEffect, useRef, useState } from 'react'

// The source clip opens with a ~1s black letterbox reveal. Playback starts (and loops)
// just after it, and the poster images are that exact frame, so the hand-off is seamless.
const START_TIME = 1.1

export function HeroVideo({ className = '' }: { className?: string }) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      video.pause()
      return
    }

    const skipIntro = () => {
      if (video.currentTime < START_TIME) video.currentTime = START_TIME
    }
    const restart = () => {
      video.currentTime = START_TIME
      video.play().catch(() => {})
    }
    const markPlaying = () => {
      if (!video.paused && video.currentTime >= START_TIME) setIsPlaying(true)
    }

    if (video.readyState >= 1) skipIntro()
    markPlaying()
    video.addEventListener('loadedmetadata', skipIntro)
    video.addEventListener('ended', restart)
    video.addEventListener('playing', markPlaying)
    video.addEventListener('timeupdate', markPlaying)

    // Some mobile browsers ignore the autoplay attribute until play() is called.
    // If autoplay is blocked (e.g. iOS Low Power Mode), the freeze frame simply stays.
    video.play().catch(() => {})

    return () => {
      video.removeEventListener('loadedmetadata', skipIntro)
      video.removeEventListener('ended', restart)
      video.removeEventListener('playing', markPlaying)
      video.removeEventListener('timeupdate', markPlaying)
    }
  }, [])

  return (
    <>
      <picture>
        <source srcSet="/videos/hero-poster-mobile.jpg" media="(max-width: 767px)" />
        <img
          src="/videos/hero-poster.jpg"
          alt=""
          aria-hidden="true"
          fetchPriority="high"
          decoding="async"
          className={`absolute inset-0 h-full w-full object-cover ${className}`}
        />
      </picture>
      <video
        ref={videoRef}
        className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-300 ${
          isPlaying ? 'opacity-100' : 'opacity-0'
        } ${className}`}
        autoPlay
        muted
        playsInline
        preload="auto"
        aria-label="Breakwall Specialists crew working from an excavator barge on the water"
      >
        <source src={`/videos/hero-720.mp4#t=${START_TIME}`} type="video/mp4" media="(max-width: 767px)" />
        <source src={`/videos/hero-1080.mp4#t=${START_TIME}`} type="video/mp4" />
      </video>
    </>
  )
}
