'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    videoRef.current?.play().catch(() => {})
  }, [])

  return (
    <section
      className="relative w-full overflow-hidden bg-gradient-to-br from-[#1e1510] via-[#2a1a0e] to-[#0e1208]"
      style={{ height: '100dvh', minHeight: '600px' }}
      aria-label="East Lane hero"
    >
      {/* ── Background: video with image fallback ── */}
      <video
        ref={videoRef}
        className="absolute inset-0 z-0 w-full h-full object-cover"
        autoPlay muted loop playsInline
        poster="/images/hero-poster.jpg"
        aria-hidden="true"
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>


      {/* Dark scrim — cinematic overlay */}
      <div className="hero-overlay absolute inset-0 z-10" aria-hidden="true" />

      {/* ── Content: positioned in lower third ── */}
      <motion.div
        className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-6"
        initial="hidden"
        animate="visible"
        variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.2, delayChildren: 0.5 } } }}
      >
        {/* Tagline */}
        <motion.p
          variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22,1,0.36,1] } } }}
          className="label-caps text-cream/60 mb-5 tracking-[0.28em]"
        >
          Asian Bistro · Kingston upon Thames
        </motion.p>

        {/* Main heading */}
        <motion.h1
          variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.22,1,0.36,1] } } }}
          className="display-heading text-cream text-[clamp(3rem,9vw,7.5rem)] mb-4"
        >
          East Lane
        </motion.h1>

        {/* Sub-tagline italic */}
        <motion.p
          variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22,1,0.36,1] } } }}
          className="editorial-quote text-cream/70 text-xl lg:text-2xl mb-10"
        >
          One address, every craving.
        </motion.p>

        {/* Pill CTAs — matching reference site style */}
        <motion.div
          variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22,1,0.36,1] } } }}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          <Link
            href="/reservations"
            className="hero-pill-btn"
          >
            · Reservations ·
          </Link>
          <Link
            href="/menu"
            className="hero-pill-btn"
          >
            · View the Menu ·
          </Link>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-6 right-8 z-20 hidden lg:flex flex-col items-center gap-2"
        aria-hidden="true"
      >
        <div className="w-px h-10 bg-cream/30 relative overflow-hidden">
          <motion.div
            className="absolute top-0 left-0 w-full bg-cream/70"
            style={{ height: '40%' }}
            animate={{ y: ['-100%', '250%'] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut', repeatDelay: 0.4 }}
          />
        </div>
        <span className="label-caps text-cream/40" style={{ fontSize: '0.55rem' }}>Scroll</span>
      </motion.div>
    </section>
  )
}
