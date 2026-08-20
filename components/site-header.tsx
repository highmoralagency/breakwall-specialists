'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { href: '#services', label: 'Services' },
  { href: '#projects', label: 'Projects' },
  { href: '#process', label: 'Process' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  const scrollToTop = () => {
    setOpen(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <header
      id="top"
      className="fixed inset-x-0 top-0 z-30 text-white"
      style={{
        background:
          'linear-gradient(180deg, rgba(4,17,29,.94), rgba(4,17,29,.55), transparent)',
      }}
    >
      <div className="mx-auto flex h-[70px] max-w-[1440px] items-center gap-9 px-4 md:h-[84px] md:px-[4vw]">
        <button
          type="button"
          onClick={scrollToTop}
          aria-label="Breakwall Specialists — back to top"
          className="group flex items-center gap-2 rounded-full p-0.5 transition-transform hover:scale-[1.03] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        >
          <img
            src="/assets/breakwall-mark-white.png"
            alt="Breakwall Specialists logo"
            className="h-10 w-auto object-contain [filter:drop-shadow(0_2px_6px_rgba(0,0,0,0.55))]"
          />
          <span className="hidden font-display text-lg font-extrabold leading-[0.88] tracking-[0.06em] sm:block">
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

        <a
          href="#contact"
          className="ml-auto hidden rounded-[5px] bg-primary px-5 py-3 text-xs font-extrabold uppercase tracking-[0.05em] text-primary-foreground transition-colors hover:bg-accent lg:ml-0 lg:inline-flex"
        >
          Free Estimate
        </a>

        <button
          type="button"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="ml-auto flex size-11 items-center justify-center rounded-full border border-white/25 bg-[rgba(3,17,29,0.38)] lg:hidden"
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
        </nav>
      )}
    </header>
  )
}
