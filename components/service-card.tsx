'use client'

import { useEffect, useRef, useState } from 'react'
import { Images } from 'lucide-react'
import { PhotoLightbox, type LightboxPhoto } from '@/components/photo-lightbox'

type ServiceCardProps = {
  number: string
  title: string
  copy: string
  bannerPosition: 'top' | 'bottom'
  focus: string
  photos: readonly LightboxPhoto[]
}

export function ServiceCard({
  number,
  title,
  copy,
  bannerPosition,
  focus,
  photos,
}: ServiceCardProps) {
  const ref = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)
  const [open, setOpen] = useState(false)
  const bannerOnTop = bannerPosition === 'top'
  const cover = photos[0]

  useEffect(() => {
    const node = ref.current
    if (!node) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.25 },
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <article
        ref={ref}
        data-visible={visible}
        className="service-card group relative flex min-h-[360px] flex-col overflow-hidden rounded-lg border border-white/10 bg-[linear-gradient(145deg,#0d2c44,#081827)] p-7 md:min-h-[380px] md:p-8"
      >
        {/* Photo sits in the half of the card the banner leaves clear, so the subject stays visible */}
        <div
          className={`service-media absolute right-0 h-[60%] w-[68%] ${
            bannerOnTop ? 'bottom-0' : 'top-0'
          }`}
        >
          <div className="service-accent absolute inset-0 bg-primary" />
          <div className="service-photo absolute inset-0 overflow-hidden">
            <img
              src={cover.src}
              alt={cover.alt}
              loading="lazy"
              decoding="async"
              style={{ objectPosition: focus }}
              className="size-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div
              className={`absolute inset-0 ${
                bannerOnTop
                  ? 'bg-[linear-gradient(0deg,rgba(8,24,39,0)_70%,rgba(8,24,39,0.55)_100%)]'
                  : 'bg-[linear-gradient(180deg,rgba(8,24,39,0)_70%,rgba(8,24,39,0.55)_100%)]'
              }`}
            />
            <span
              aria-hidden="true"
              className={`absolute right-3 flex items-center gap-1.5 rounded-[4px] bg-[#081827]/85 px-2.5 py-1.5 text-[11px] font-extrabold uppercase tracking-[0.1em] text-white backdrop-blur-sm ${
                bannerOnTop ? 'bottom-3' : 'top-3'
              }`}
            >
              <Images className="size-4 text-accent" />
              {photos.length}
            </span>
          </div>
        </div>

        <div className="relative font-display text-lg font-extrabold text-accent">
          {number}
        </div>

        <div
          className={`service-banner relative -ml-7 w-[calc(100%+1.75rem)] md:-ml-8 md:w-[calc(100%+2rem)] ${
            bannerOnTop ? 'mt-4' : 'mt-auto'
          }`}
        >
          {/* Plate artwork includes its own blue left, bottom and angled right edges, so it's stretched to the banner box */}
          <div className="relative bg-[url('/assets/service-plate.webp')] bg-size-[100%_100%] bg-no-repeat pb-7 pl-7 pr-14 pt-5 drop-shadow-[0_10px_18px_rgba(0,0,0,0.45)] md:pl-8">
            <h3 className="mb-2 font-display text-[30px] uppercase leading-none text-balance">
              {title}
            </h3>
            <p className="max-w-[34ch] text-sm leading-relaxed text-[#c3d4e0] text-pretty">
              {copy}
            </p>
          </div>
        </div>

        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label={`View ${photos.length} ${title} photos`}
          className="absolute inset-0 z-10 rounded-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
        />
      </article>

      <PhotoLightbox
        open={open}
        onClose={() => setOpen(false)}
        title={title}
        photos={photos}
      />
    </>
  )
}
