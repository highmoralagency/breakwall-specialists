'use client'

import { useEffect, useRef, useState } from 'react'
import { Menu, Phone, X } from 'lucide-react'

const navLinks = [
  { href: '#services', label: 'Services' },
  { href: '#projects', label: 'Projects' },
  { href: '#process', label: 'Process' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' },
]

const PHONE_DISPLAY = '519-919-9057'
const PHONE_HREF = 'tel:+15199199057'

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [atTop, setAtTop] = useState(true)
  const lastY = useRef(0)

  useEffect(() => {
    lastY.current = window.scrollY
    const onScroll = () => {
      const y = window.scrollY
      setAtTop(y < 24)
      // Only react to meaningful movement to avoid jitter.
      if (Math.abs(y - lastY.current) > 6) {
        // Hide when scrolling down past the hero, reveal when scrolling up.
        setHidden(y > lastY.current && y > 160 && !open)
        lastY.current = y
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [open])

  const scrollToTop = () => {
    setOpen(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <header
      id="top"
      className={`fixed inset-x-0 top-0 z-30 border-b border-white/60 bg-[#c9cdd1] bg-[url('/assets/nav-steel.webp')] bg-cover bg-center text-navy transition-[transform,box-shadow] duration-500 ease-out ${
        hidden ? '-translate-y-full' : 'translate-y-0'
      } ${atTop ? 'shadow-[0_4px_14px_rgba(6,23,36,0.12)]' : 'shadow-[0_10px_30px_rgba(6,23,36,0.22)]'}`}
    >
      <div className="flex h-[76px] items-stretch md:h-[88px]">
        <button
          type="button"
          onClick={scrollToTop}
          aria-label="Breakwall Specialists — back to top"
          className="flex items-center pl-6 md:pl-[5vw]"
        >
          <span className="font-display text-[27px] font-extrabold uppercase leading-[0.82] tracking-[0.01em] md:text-[30px]">
            Breakwall
            <small className="block text-[0.6em] font-bold tracking-[0.2em]">
              Specialists
            </small>
          </span>
        </button>

        <nav
          aria-label="Primary navigation"
          className="ml-auto hidden items-center gap-8 text-sm font-semibold uppercase tracking-[0.06em] lg:flex"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-navy/80 transition-colors hover:text-primary"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Call — mobile */}
        <a
          href={PHONE_HREF}
          aria-label={`Call Breakwall Specialists at ${PHONE_DISPLAY}`}
  className="ml-auto flex min-h-11 items-center gap-2 px-3 font-display text-[22px] font-black uppercase tracking-[0.06em] text-primary [text-shadow:0_1px_0_rgb(255_255_255/0.55)] lg:hidden"
  >
  <Phone className="size-6" strokeWidth={2.75} />
          Call
        </a>

        {/* Blue angled slab — menu toggle on mobile, phone CTA on desktop */}
        <div className="header-slab flex w-[120px] items-center justify-end bg-primary pr-5 text-primary-foreground lg:ml-8 lg:w-auto lg:pl-20 lg:pr-[5vw]">
          <button
            type="button"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex size-11 items-center justify-center lg:hidden"
          >
            {open ? <X className="size-8" /> : <Menu className="size-8" />}
          </button>
          <a
            href={PHONE_HREF}
            className="hidden items-center gap-2.5 font-display text-xl font-bold uppercase tracking-[0.05em] transition-opacity hover:opacity-85 lg:inline-flex"
          >
            <Phone className="size-5" />
            Call {PHONE_DISPLAY}
          </a>
        </div>
      </div>

      {open && (
        <nav
          aria-label="Mobile navigation"
          className="absolute inset-x-3.5 top-[84px] flex flex-col rounded-[9px] border border-white/10 bg-navy-panel p-3.5 shadow-[0_20px_50px_rgba(0,0,0,0.35)] lg:hidden"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="border-b border-white/10 p-3.5 text-[15px] font-bold uppercase text-navy-foreground last:border-0"
            >
              {link.label}
            </a>
          ))}
          <a
            href={PHONE_HREF}
            onClick={() => setOpen(false)}
            className="mt-2 inline-flex items-center justify-center gap-2 rounded-[6px] bg-primary p-3.5 text-[15px] font-bold uppercase tracking-[0.05em] text-primary-foreground"
          >
            <Phone className="size-4" />
            Call {PHONE_DISPLAY}
          </a>
        </nav>
      )}
    </header>
  )
}
