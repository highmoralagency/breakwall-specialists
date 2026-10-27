'use client'

import { useEffect, useRef, useState } from 'react'

type ServiceCardProps = {
  number: string
  title: string
  copy: string
  image: string
  alt: string
  bannerPosition: 'top' | 'bottom'
  focus: string
}

export function ServiceCard({
  number,
  title,
  copy,
  image,
  alt,
  bannerPosition,
  focus,
}: ServiceCardProps) {
  const ref = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)
  const bannerOnTop = bannerPosition === 'top'

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
            src={image}
            alt={alt}
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
        <div
          aria-hidden="true"
          className="absolute inset-0 translate-x-2 translate-y-2 bg-primary [clip-path:polygon(0_0,100%_0,calc(100%-28px)_100%,0_100%)]"
        />
        <div className="relative border-l-4 border-primary bg-[#081827]/95 py-4 pl-6 pr-10 backdrop-blur-sm [clip-path:polygon(0_0,100%_0,calc(100%-28px)_100%,0_100%)] md:pl-7">
          <h3 className="mb-2 font-display text-[30px] uppercase leading-none text-balance">
            {title}
          </h3>
          <p className="max-w-[34ch] text-sm leading-relaxed text-[#c3d4e0] text-pretty">
            {copy}
          </p>
        </div>
      </div>
    </article>
  )
}
