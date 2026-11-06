'use client'

import { useEffect, useRef, useState } from 'react'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'

export type LightboxPhoto = {
  src: string
  alt: string
  tag?: 'Before' | 'After'
}

type PhotoLightboxProps = {
  open: boolean
  onClose: () => void
  title: string
  photos: readonly LightboxPhoto[]
}

const pad = (n: number) => String(n).padStart(2, '0')

export function PhotoLightbox({ open, onClose, title, photos }: PhotoLightboxProps) {
  const dialogRef = useRef<HTMLDialogElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const [slide, setSlide] = useState(0)
  const total = photos.length

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return
    if (open && !dialog.open) {
      dialog.showModal()
      setSlide(0)
      trackRef.current?.scrollTo({ left: 0 })
      document.documentElement.style.overflow = 'hidden'
    } else if (!open && dialog.open) {
      dialog.close()
    }
    if (!open) document.documentElement.style.overflow = ''
  }, [open])

  useEffect(() => () => {
    document.documentElement.style.overflow = ''
  }, [])

  const goTo = (index: number) => {
    const track = trackRef.current
    if (!track) return
    const next = Math.max(0, Math.min(total - 1, index))
    track.scrollTo({ left: next * track.clientWidth, behavior: 'smooth' })
  }

  const handleScroll = () => {
    const track = trackRef.current
    if (!track) return
    setSlide(Math.round(track.scrollLeft / track.clientWidth))
  }

  return (
    <dialog
      ref={dialogRef}
      onClose={onClose}
      onKeyDown={(e) => {
        if (e.key === 'ArrowRight') goTo(slide + 1)
        if (e.key === 'ArrowLeft') goTo(slide - 1)
      }}
      aria-label={`${title} photos`}
      className="m-0 h-dvh max-h-none w-screen max-w-none bg-[#050f19] p-0 text-white backdrop:bg-[#050f19]/90"
    >
      {open && (
        <div className="flex h-full flex-col">
          <header className="flex items-center justify-between gap-4 px-5 pb-3 pt-[max(1rem,env(safe-area-inset-top))]">
            <div className="min-w-0">
              <p className="text-[10px] font-extrabold uppercase tracking-[0.17em] text-accent">
                {pad(slide + 1)}
                <span className="text-white/50">{` / ${pad(total)}`}</span>
              </p>
              <h2 className="truncate font-display text-[26px] uppercase leading-none">
                {title}
              </h2>
            </div>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close photos"
              className="flex size-11 shrink-0 items-center justify-center rounded-[5px] bg-white/10 transition-colors hover:bg-primary"
            >
              <X className="size-5" />
            </button>
          </header>

          <div className="relative min-h-0 flex-1">
            <div
              ref={trackRef}
              onScroll={handleScroll}
              aria-roledescription="carousel"
              aria-label={title}
              className="flex h-full snap-x snap-mandatory overflow-x-auto overscroll-x-contain [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            >
              {photos.map((photo, i) => (
                <figure
                  key={photo.src}
                  aria-roledescription="slide"
                  aria-label={`${i + 1} of ${total}`}
                  className="relative flex h-full w-full shrink-0 snap-center snap-always items-center justify-center"
                >
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    loading={i < 2 ? 'eager' : 'lazy'}
                    decoding="async"
                    draggable={false}
                    className="max-h-full max-w-full select-none object-contain"
                  />
                  {photo.tag && (
                    <span
                      className={`absolute left-5 top-3 rounded-[4px] px-3 py-2 font-display text-lg uppercase leading-none tracking-wide ${
                        photo.tag === 'After'
                          ? 'bg-primary text-primary-foreground'
                          : 'bg-[#081827]/90 text-white'
                      }`}
                    >
                      {photo.tag}
                    </span>
                  )}
                </figure>
              ))}
            </div>

            <button
              type="button"
              onClick={() => goTo(slide - 1)}
              disabled={slide === 0}
              aria-label="Previous photo"
              className="absolute left-3 top-1/2 hidden size-11 -translate-y-1/2 items-center justify-center rounded-[5px] bg-[#081827]/85 transition-colors hover:bg-primary disabled:opacity-30 md:flex"
            >
              <ChevronLeft className="size-5" />
            </button>
            <button
              type="button"
              onClick={() => goTo(slide + 1)}
              disabled={slide === total - 1}
              aria-label="Next photo"
              className="absolute right-3 top-1/2 hidden size-11 -translate-y-1/2 items-center justify-center rounded-[5px] bg-[#081827]/85 transition-colors hover:bg-primary disabled:opacity-30 md:flex"
            >
              <ChevronRight className="size-5" />
            </button>
          </div>

          <footer className="flex items-center justify-between gap-4 px-5 pb-[max(1.25rem,env(safe-area-inset-bottom))] pt-4">
            <div className="flex flex-wrap items-center gap-1.5" aria-hidden="true">
              {photos.map((photo, i) => (
                <span
                  key={photo.src}
                  className={`h-1 rounded-full transition-all duration-300 ${
                    i === slide ? 'w-8 bg-primary' : 'w-3 bg-white/25'
                  }`}
                />
              ))}
            </div>
            {total > 1 && (
              <span className="shrink-0 text-[11px] font-extrabold uppercase tracking-[0.12em] text-white/60 md:hidden">
                Swipe for more
              </span>
            )}
          </footer>
        </div>
      )}
    </dialog>
  )
}
