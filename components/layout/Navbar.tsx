'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { X, Menu } from 'lucide-react'

const navLinks = [
  { label: 'Menu',         href: '/menu'         },
  { label: 'About',        href: '/about'        },
  { label: 'FAQs',         href: '/faqs'         },
  { label: 'Reservations', href: '/reservations' },
  { label: 'Contact',      href: '/contact'      },
]

function InstagramIcon() {
  return (
    <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
    </svg>
  )
}

function FacebookIcon() {
  return (
    <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
    </svg>
  )
}

export default function Navbar() {
  const [scrolled,   setScrolled]   = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const navItemClass =
    'font-jost font-medium text-[13px] uppercase tracking-[0.2em] text-cream/85 hover:text-cream transition-colors duration-300 hidden lg:block'

  return (
    <>
      <header
        role="banner"
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
          scrolled ? 'bg-[rgba(18,14,10,0.94)] backdrop-blur-md shadow-md' : 'bg-transparent'
        }`}
      >
        {/* Top decorative rule */}
        <div className="h-px w-full bg-cream/15" />

        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          {/* Three-column grid: left-nav | logo | right-CTA */}
          <div className={`grid grid-cols-[1fr_auto_1fr] items-center transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            scrolled ? 'h-16 lg:h-[72px]' : 'h-24 lg:h-[116px]'
          }`}>

            {/* ── Left: social icons + all nav links ── */}
            <div className="flex items-center gap-6">
              {/* Social icons */}
              <div className="hidden lg:flex items-center gap-4">
                <a
                  href="https://www.instagram.com/eastlane_bistro"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="East Lane on Instagram"
                  className="text-cream/75 hover:text-cream transition-colors duration-200"
                >
                  <InstagramIcon />
                </a>
                <a
                  href="https://www.facebook.com/eastlanebistro"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="East Lane on Facebook"
                  className="text-cream/75 hover:text-cream transition-colors duration-200"
                >
                  <FacebookIcon />
                </a>
              </div>

              {/* All 5 nav links */}
              <div className="hidden lg:flex items-center gap-8">
                {navLinks.map(l => (
                  <Link key={l.href} href={l.href} className={navItemClass}>
                    {l.label}
                  </Link>
                ))}
              </div>

              {/* Mobile hamburger */}
              <button
                className="lg:hidden text-cream p-1 -ml-1"
                onClick={() => setMobileOpen(true)}
                aria-label="Open navigation menu"
                aria-expanded={mobileOpen}
              >
                <Menu size={22} strokeWidth={1.5} />
              </button>
            </div>

            {/* ── Centre: Logo ── */}
            <Link
              href="/"
              className="flex items-center justify-center px-6"
              aria-label="East Lane – home"
              onClick={() => setMobileOpen(false)}
            >
              <Image
                src="/images/logo-wordmark.png"
                alt="East Lane Asian Bistro"
                width={300}
                height={120}
                className={`w-auto transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                  scrolled ? 'h-9 lg:h-10' : 'h-16 lg:h-[76px]'
                }`}
                priority
              />
            </Link>

            {/* ── Right: Book Now CTA ── */}
            <div className="hidden lg:flex items-center justify-end">
              <Link
                href="/reservations"
                className="pill-btn text-[13px] tracking-[0.2em] border border-cream/70 text-cream hover:bg-cream hover:text-brand-dark"
              >
                Book Now
              </Link>
            </div>

            {/* Mobile right: spacer */}
            <div className="lg:hidden" />
          </div>
        </div>

        {/* Bottom decorative rule */}
        <div className="h-px w-full bg-cream/10" />
      </header>

      {/* ── Mobile fullscreen overlay ── */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        className={`fixed inset-0 z-[200] bg-brand-dark transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          mobileOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full px-8 pt-6 pb-10">
          {/* Header row */}
          <div className="flex items-center justify-between mb-16">
            <Link href="/" onClick={() => setMobileOpen(false)}>
              <Image
                src="/images/logo-wordmark.png"
                alt="East Lane"
                width={200} height={80}
                className="h-9 w-auto"
              />
            </Link>
            <button
              className="text-cream/70 hover:text-cream p-1"
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
            >
              <X size={24} strokeWidth={1.5} />
            </button>
          </div>

          {/* Nav links */}
          <nav className="flex flex-col gap-7 flex-1">
            {navLinks.map((l, i) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setMobileOpen(false)}
                className="font-dm-serif text-4xl text-cream/90 hover:text-terracotta transition-colors duration-200"
                style={{ transitionDelay: `${i * 40}ms` }}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          {/* Social icons */}
          <div className="flex items-center gap-5 mb-6">
            <a href="https://www.instagram.com/eastlane_bistro" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-cream/50 hover:text-cream transition-colors duration-200">
              <InstagramIcon />
            </a>
            <a href="https://www.facebook.com/eastlanebistro" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-cream/50 hover:text-cream transition-colors duration-200">
              <FacebookIcon />
            </a>
          </div>

          {/* Book Now CTA */}
          <Link
            href="/reservations"
            onClick={() => setMobileOpen(false)}
            className="pill-btn border border-cream/50 text-cream hover:bg-cream hover:text-brand-dark justify-center py-4 text-xs"
          >
            Book Now
          </Link>
        </div>
      </div>
    </>
  )
}
