'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useGSAP } from '@gsap/react'
import { gsap, ScrollTrigger } from '@/lib/gsap'

gsap.registerPlugin(useGSAP)

export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const sectionRef = useRef<HTMLElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    videoRef.current?.play().catch(() => {})
  }, [])

  useGSAP(() => {
    if (!sectionRef.current || !videoRef.current || !contentRef.current) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    // Video drifts upward as you scroll out of the hero
    gsap.to(videoRef.current, {
      yPercent: 25,
      ease: 'none',
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },
    })

    // Hero content fades and lifts as you scroll away
    gsap.to(contentRef.current, {
      opacity: 0,
      y: -55,
      ease: 'none',
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top top',
        end: '48% top',
        scrub: 1.5,
      },
    })
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-gradient-to-br from-olive via-olive-deep to-brand-dark"
      style={{ height: '100dvh', minHeight: '600px' }}
      aria-label="East Lane hero"
    >
      {/* Background video */}
      <video
        ref={videoRef}
        className="absolute inset-0 z-0 w-full h-full object-cover"
        autoPlay muted loop playsInline
        poster="/images/hero-poster.jpg"
        aria-hidden="true"
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>

      {/* Dark scrim */}
      <div className="hero-overlay absolute inset-0 z-10" aria-hidden="true" />

      {/* Outer wrapper — GSAP fades/lifts this on scroll */}
      <div ref={contentRef} className="absolute inset-0 z-20">
        {/* Inner — Framer Motion stagger entrance on load */}
        <motion.div
          className="flex flex-col items-center justify-center text-center px-6 h-full"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.2, delayChildren: 0.5 } },
          }}
        >
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
            }}
            className="label-caps text-cream/60 mb-5 tracking-[0.28em]"
          >
            Kingston upon Thames
          </motion.p>

          <motion.h1
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.22, 1, 0.36, 1] } },
            }}
            className="display-heading text-cream text-center mb-4"
          >
            <span className="block text-[clamp(3rem,9vw,7.5rem)]">East Lane</span>
            <span className="block text-[clamp(1.4rem,3.5vw,3rem)] mt-1 opacity-90">Asian Bistro</span>
          </motion.h1>

          <motion.p
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
            }}
            className="editorial-quote text-cream/70 text-xl lg:text-2xl mb-10"
          >
            One address, every craving.
          </motion.p>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
            }}
            className="flex flex-col sm:flex-row items-center gap-4"
          >
            <Link href="/reservations" className="hero-pill-btn" data-cursor="cta">
              · Book Now ·
            </Link>
            <Link href="/menu" className="hero-pill-btn" data-cursor="cta">
              · See Menu ·
            </Link>
          </motion.div>
        </motion.div>
      </div>

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
