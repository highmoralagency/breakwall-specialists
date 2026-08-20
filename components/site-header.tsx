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
      className={`fixed inset-x-0 top-0 z-30 text-white transition-transform duration-500 ease-out ${
        hidden ? '-translate-y-full' : 'translate-y-0'
      }`}
      style={{
        background: atTop
          ? 'linear-gradient(180deg, rgba(4,17,29,.94), rgba(4,17,29,.55), transparent)'
          : 'rgba(4,17,29,.9)',
        backdropFilter: atTop ? 'none' : 'saturate(140%) blur(10px)',
        boxShadow: atTop ? 'none' : '0 10px 30px rgba(0,0,0,0.35)',
        transitionProperty: 'transform, background, box-shadow',
      }}
    >
      <div className="mx-auto flex h-[70px] max-w-[1440px] items-center gap-6 px-4 md:h-[84px] md:px-[4vw]">
        <button
          type="button"
          onClick={scrollToTop}
          aria-label="Breakwall Specialists — back to top"
          className="group flex items-center rounded-full transition-transform hover:scale-[1.03] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        >
          <span className="font-display text-base font-extrabold leading-[0.88] tracking-[0.06em] sm:text-lg">
            BREAKWALL
            <small className="block text-[0.7em] font-semibold tracking-[0.24em]">
              SPECIALISTS
            </small>
          </span>
        </button>

        <nav
          aria-label="Primary navigation"
          className="ml-auto hidden gap-7 text-[13px] font-semibold uppercase tracking-[0.06em] lg:flex"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="opacity-90 transition-opacity hover:opacity-100"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Call Now — desktop */}
        <a
          href={PHONE_HREF}
          className="ml-6 hidden items-center gap-2 rounded-[5px] bg-primary px-5 py-3 text-xs font-extrabold uppercase tracking-[0.05em] text-primary-foreground transition-colors hover:bg-accent lg:inline-flex"
        >
          <Phone className="size-4" />
          Call Now
        </a>

        {/* Call Now — mobile (icon + short label), sits left of the menu toggle */}
        <a
          href={PHONE_HREF}
          aria-label={`Call Breakwall Specialists at ${PHONE_DISPLAY}`}
          className="ml-auto inline-flex items-center gap-2 rounded-[5px] bg-primary px-3.5 py-2.5 text-xs font-extrabold uppercase tracking-[0.05em] text-primary-foreground transition-colors hover:bg-accent lg:hidden"
        >
          <Phone className="size-4" />
          Call
        </a>

        <button
          type="button"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex size-11 items-center justify-center rounded-full border border-white/25 bg-[rgba(3,17,29,0.38)] lg:hidden"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open && (
        <nav
          aria-label="Mobile navigation"
          className="absolute inset-x-3.5 top-[70px] flex flex-col rounded-[9px] border border-white/10 bg-navy-panel p-3.5 shadow-[0_20px_50px_rgba(0,0,0,0.35)] lg:hidden"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="border-b border-white/10 p-3.5 text-[13px] font-bold uppercase text-white last:border-0"
            >
              {link.label}
            </a>
          ))}
          <a
            href={PHONE_HREF}
            onClick={() => setOpen(false)}
            className="mt-2 inline-flex items-center justify-center gap-2 rounded-[6px] bg-primary p-3.5 text-[13px] font-extrabold uppercase tracking-[0.05em] text-primary-foreground"
          >
            <Phone className="size-4" />
            Call {PHONE_DISPLAY}
          </a>
        </nav>
      )}
    </header>
  )
}
