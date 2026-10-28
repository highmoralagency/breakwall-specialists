'use client'

import { useRef, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { projects } from '@/lib/projects'

const pad = (n: number) => String(n).padStart(2, '0')

export function ProjectGallery() {
  const [projectIndex, setProjectIndex] = useState(0)
  const [slide, setSlide] = useState(0)
  const trackRef = useRef<HTMLDivElement>(null)
  const project = projects[projectIndex]
  const total = project.photos.length

  const selectProject = (index: number) => {
    setProjectIndex(index)
    setSlide(0)
    trackRef.current?.scrollTo({ left: 0 })
  }

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
    <div className="min-w-0">
      <div
        role="tablist"
        aria-label="Projects"
        className="-mx-5 mb-4 flex gap-2 overflow-x-auto px-5 pb-1 [scrollbar-width:none] md:mx-0 md:px-0 [&::-webkit-scrollbar]:hidden"
      >
        {projects.map((p, i) => {
          const active = i === projectIndex
          return (
            <button
              key={p.id}
              type="button"
              role="tab"
              aria-selected={active}
              onClick={(e) => {
                selectProject(i)
                e.currentTarget.scrollIntoView({ block: 'nearest', inline: 'center', behavior: 'smooth' })
              }}
              className={`min-h-11 shrink-0 rounded-[5px] border px-4 text-[11px] font-extrabold uppercase tracking-[0.08em] transition-colors ${
                active
                  ? 'border-primary bg-primary text-primary-foreground'
                  : 'border-current/20 bg-transparent text-current/70 hover:border-primary hover:text-primary'
              }`}
            >
              {p.title}
            </button>
          )
        })}
      </div>

      <div className="relative overflow-hidden rounded-[14px] bg-[#081827] shadow-[0_35px_80px_rgba(8,33,51,0.22)]">
        <div
          ref={trackRef}
          onScroll={handleScroll}
          aria-roledescription="carousel"
          aria-label={project.title}
          className="flex aspect-[4/5] snap-x snap-mandatory overflow-x-auto overscroll-x-contain [scrollbar-width:none] md:aspect-[16/11] [&::-webkit-scrollbar]:hidden"
        >
          {project.photos.map((photo, i) => (
            <figure
              key={photo.src}
              aria-roledescription="slide"
              aria-label={`${i + 1} of ${total}`}
              className="relative h-full w-full shrink-0 snap-center snap-always"
            >
              <img
                src={photo.src}
                alt={photo.alt}
                loading={i === 0 ? 'eager' : 'lazy'}
                decoding="async"
                draggable={false}
                className="size-full select-none object-cover"
              />
              {photo.tag && (
                <span
                  className={`absolute left-5 top-5 rounded-[4px] px-3 py-2 font-display text-lg uppercase leading-none tracking-wide ${
                    photo.tag === 'After'
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-[#081827]/90 text-white'
                  }`}
                >
                  {photo.tag}
                </span>
              )}
              <figcaption className="sr-only">{photo.caption}</figcaption>
            </figure>
          ))}
        </div>

        <div className="pointer-events-none absolute right-4 top-4 rounded-[4px] bg-[#081827]/85 px-3 py-2 font-display text-base leading-none tracking-wide text-white backdrop-blur-sm">
          <span className="text-accent">{pad(slide + 1)}</span>
          <span className="text-white/50">{` / ${pad(total)}`}</span>
        </div>

        <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-[linear-gradient(0deg,rgba(8,24,39,0.7),rgba(8,24,39,0))] pb-4 pt-16">
          <div className="relative mr-14 md:mr-40" aria-live="polite">
            <div
              aria-hidden="true"
              className="absolute inset-0 translate-x-2 translate-y-2 bg-primary [clip-path:polygon(0_0,100%_0,calc(100%-24px)_100%,0_100%)]"
            />
            <div className="relative border-l-4 border-primary bg-[#081827]/95 py-3 pl-5 pr-10 [clip-path:polygon(0_0,100%_0,calc(100%-24px)_100%,0_100%)]">
              <p className="text-[10px] font-extrabold uppercase tracking-[0.17em] text-accent">
                {project.category}
              </p>
              <h3 className="mt-1 font-display text-[24px] uppercase leading-none text-white text-balance md:text-[30px]">
                {project.title}
              </h3>
              <p className="mt-1.5 text-sm leading-snug text-[#c3d4e0]">
                {project.photos[slide]?.caption}
              </p>
            </div>
          </div>
        </div>

        <div className="absolute bottom-4 right-3 hidden gap-2 md:flex">
          <button
            type="button"
            onClick={() => goTo(slide - 1)}
            disabled={slide === 0}
            aria-label="Previous photo"
            className="flex size-11 items-center justify-center rounded-[5px] bg-[#081827]/85 text-white transition-colors hover:bg-primary disabled:opacity-40 disabled:hover:bg-[#081827]/85"
          >
            <ChevronLeft className="size-5" />
          </button>
          <button
            type="button"
            onClick={() => goTo(slide + 1)}
            disabled={slide === total - 1}
            aria-label="Next photo"
            className="flex size-11 items-center justify-center rounded-[5px] bg-[#081827]/85 text-white transition-colors hover:bg-primary disabled:opacity-40 disabled:hover:bg-[#081827]/85"
          >
            <ChevronRight className="size-5" />
          </button>
        </div>
      </div>

      <div className="mt-4 flex items-center justify-between gap-4">
        <div className="flex items-center gap-1.5" aria-hidden="true">
          {project.photos.map((photo, i) => (
            <span
              key={photo.src}
              className={`h-1 rounded-full transition-all duration-300 ${
                i === slide ? 'w-8 bg-primary' : 'w-3 bg-current/20'
              }`}
            />
          ))}
        </div>
        <span className="text-[11px] font-extrabold uppercase tracking-[0.12em] text-current/60 md:hidden">
          Swipe for more
        </span>
      </div>
    </div>
  )
}
