'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { X } from 'lucide-react'
import LotusDecor from '@/components/ui/LotusDecor'

// Bump the key if the announcement changes so returning visitors see the new one
const STORAGE_KEY = 'eastlane:hours-change-nov-2026'
// Stop announcing a few weeks after the change takes effect
const SHOW_UNTIL = new Date('2026-11-30T23:59:59')
const OPEN_DELAY_MS = 1800

const ease = [0.22, 1, 0.36, 1] as const

export default function HoursChangePopup() {
  const [open, setOpen] = useState(false)
  const dialogRef = useRef<HTMLDivElement>(null)
  const closeBtnRef = useRef<HTMLButtonElement>(null)
  const lastFocused = useRef<HTMLElement | null>(null)

  useEffect(() => {
    if (new Date() > SHOW_UNTIL) return
    try {
      if (localStorage.getItem(STORAGE_KEY)) return
    } catch {}

    // Let the hero animation land before interrupting
    const t = window.setTimeout(() => {
      lastFocused.current = document.activeElement as HTMLElement | null
      setOpen(true)
    }, OPEN_DELAY_MS)
    return () => window.clearTimeout(t)
  }, [])

  const close = useCallback(() => {
    setOpen(false)
    try {
      localStorage.setItem(STORAGE_KEY, '1')
    } catch {}
    lastFocused.current?.focus?.()
  }, [])

  // Scroll lock, Escape to close, focus trap
  useEffect(() => {
    if (!open) return

    const html = document.documentElement
    const prevOverflow = html.style.overflow
    html.style.overflow = 'hidden'
    closeBtnRef.current?.focus()

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault()
        close()
        return
      }
      if (e.key !== 'Tab' || !dialogRef.current) return
      const focusables = dialogRef.current.querySelectorAll<HTMLElement>('a[href], button:not([disabled])')
      if (!focusables.length) return
      const first = focusables[0]
      const last = focusables[focusables.length - 1]
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault()
        last.focus()
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault()
        first.focus()
      }
    }

    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('keydown', onKey)
      html.style.overflow = prevOverflow
    }
  }, [open, close])

  const viewHours = () => {
    close()
    // Wait for the scroll lock to release before scrolling
    window.setTimeout(() => {
      document.getElementById('hours')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 350)
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          key="hours-popup"
          className="fixed inset-0 z-[300] flex items-end sm:items-center justify-center p-4 sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35 }}
          data-lenis-prevent=""
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-brand-dark/70 backdrop-blur-[3px]"
            onClick={close}
            aria-hidden="true"
          />

          {/* Dialog */}
          <motion.div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="hours-popup-title"
            aria-describedby="hours-popup-desc"
            className="relative w-full max-w-md overflow-hidden rounded-2xl bg-cream-light text-brand-dark shadow-[0_30px_80px_-20px_rgba(30,17,11,0.6)]"
            initial={{ opacity: 0, y: 32, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.98 }}
            transition={{ duration: 0.55, ease }}
          >
            {/* Header band */}
            <div className="relative bg-olive-deep px-8 pt-9 pb-8 text-center text-cream">
              <LotusDecor
                size={150}
                className="pointer-events-none absolute -right-8 -bottom-10 text-cream/[0.07]"
              />
              <button
                ref={closeBtnRef}
                type="button"
                onClick={close}
                aria-label="Close announcement"
                className="absolute top-3.5 right-3.5 flex h-9 w-9 items-center justify-center rounded-full text-cream/60 transition-colors duration-200 hover:bg-cream/10 hover:text-cream focus-visible:outline focus-visible:outline-1 focus-visible:outline-cream/60"
              >
                <X size={17} aria-hidden="true" />
              </button>

              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="h-px w-8 bg-cream/25" />
                <p className="label-caps text-cream/70 tracking-[0.28em]">From 1st November</p>
                <div className="h-px w-8 bg-cream/25" />
              </div>

              <h2
                id="hours-popup-title"
                className="display-heading text-[clamp(2rem,7vw,2.6rem)] leading-tight"
              >
                New{' '}
                <em className="font-cormorant italic font-normal">Opening Days</em>
              </h2>
            </div>

            {/* Body */}
            <div className="px-7 sm:px-8 pt-7 pb-8">
              <p
                id="hours-popup-desc"
                className="font-jost text-[0.95rem] leading-relaxed text-brand-dark/75 text-center"
              >
                Starting from November 1st, the restaurant will be open on{' '}
                <strong className="font-medium text-brand-dark">Mondays</strong> and remain closed on{' '}
                <strong className="font-medium text-brand-dark">Tuesdays</strong>.
              </p>

              {/* Day change at a glance */}
              <ul className="mt-6 grid grid-cols-2 gap-3" aria-label="Change at a glance">
                <li className="rounded-xl border border-olive/25 bg-olive/[0.07] px-4 py-4 text-center">
                  <span className="label-caps block text-olive">Monday</span>
                  <span className="editorial-quote mt-1 block text-xl text-brand-dark">Now open</span>
                </li>
                <li className="rounded-xl border border-cream-dark bg-cream/50 px-4 py-4 text-center">
                  <span className="label-caps block text-brand-dark/45">Tuesday</span>
                  <span className="editorial-quote mt-1 block text-xl text-brand-dark/55">Closed</span>
                </li>
              </ul>

              <div className="mt-7 flex flex-col-reverse gap-3 sm:flex-row">
                <button
                  type="button"
                  onClick={viewHours}
                  className="flex-1 rounded-full border border-brand-dark/20 px-6 py-3.5 font-jost text-[0.7rem] font-medium uppercase tracking-[0.2em] text-brand-dark/75 transition-colors duration-300 hover:border-brand-dark hover:text-brand-dark"
                >
                  View Hours
                </button>
                <button
                  type="button"
                  onClick={close}
                  data-cursor="cta"
                  className="flex-1 rounded-full border border-terracotta bg-terracotta px-6 py-3.5 font-jost text-[0.7rem] font-medium uppercase tracking-[0.2em] text-cream transition-colors duration-300 hover:border-terracotta-dark hover:bg-terracotta-dark"
                >
                  Got It
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
