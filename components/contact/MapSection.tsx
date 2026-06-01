'use client'

import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from '@/lib/gsap'

const EMBED_SRC =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2489.5!2d-0.2759!3d51.4122!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTHCsDI0JzQzLjkiTiAwwrAxNicxMy4yIlc!5e0!3m2!1sen!2suk!4v1!5m2!1sen!2suk'

export default function MapSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const iframeRef  = useRef<HTMLIFrameElement>(null)
  const coverRef   = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    // Cover div slides away (bottom→top origin, scaleY 1→0 = top-to-bottom reveal).
    // Using a separate element avoids animating clip-path on the section itself,
    // which conflicts with the iframe's GPU composite layer and causes flicker.
    gsap.to(coverRef.current, {
      scaleY: 0,
      duration: 1.2,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 85%',
        toggleActions: 'play none none none',
      },
    })

    // iframe parallax — drifts slower than the page scroll
    gsap.fromTo(
      iframeRef.current,
      { yPercent: 0 },
      {
        yPercent: -8,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
          invalidateOnRefresh: true,
        },
      }
    )

    // Info panel content — orchestrated delays relative to same trigger
    gsap.from('[data-map-label]', {
      opacity: 0,
      x: -16,
      duration: 0.6,
      ease: 'power2.out',
      delay: 0.5,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 85%',
        toggleActions: 'play none none none',
      },
    })

    gsap.from('[data-map-line]', {
      yPercent: 105,
      stagger: 0.12,
      duration: 0.85,
      ease: 'power3.out',
      delay: 0.65,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 85%',
        toggleActions: 'play none none none',
      },
    })

    gsap.from('[data-map-address]', {
      opacity: 0,
      y: 14,
      duration: 0.6,
      ease: 'power2.out',
      delay: 0.9,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 85%',
        toggleActions: 'play none none none',
      },
    })

    gsap.from('[data-map-cta]', {
      opacity: 0,
      scale: 0.94,
      y: 12,
      duration: 0.65,
      ease: 'power2.out',
      delay: 1.1,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 85%',
        toggleActions: 'play none none none',
      },
    })
  }, { scope: sectionRef })

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden"
      style={{ height: 'clamp(420px, 55vw, 560px)' }}
      aria-label="East Lane location on map"
    >
      {/* iframe — pointer-events none prevents Google Maps from capturing wheel events */}
      <iframe
        ref={iframeRef}
        src={EMBED_SRC}
        className="absolute left-0 right-0 w-full"
        style={{
          top: '-15%',
          height: '130%',
          border: 0,
          filter: 'grayscale(25%) contrast(1.04) saturate(0.82)',
          willChange: 'transform',
          pointerEvents: 'none',
        }}
        loading="lazy"
        title="East Lane Asian Bistro on Google Maps"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
      />

      {/* Gradient overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'linear-gradient(100deg, rgba(30,17,11,0.88) 0%, rgba(30,17,11,0.55) 38%, rgba(30,17,11,0.0) 68%)',
        }}
        aria-hidden="true"
      />

      {/* Info panel */}
      <div className="absolute inset-y-0 left-0 flex items-center px-8 sm:px-12 lg:px-16 xl:px-24 pointer-events-none">
        <div className="pointer-events-auto max-w-xs lg:max-w-sm">
          <p data-map-label="" className="label-caps text-terracotta/80 mb-4 tracking-[0.22em]">
            Visit Us
          </p>

          <h2
            className="display-heading text-cream leading-tight mb-5"
            style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.75rem)' }}
          >
            <span className="block overflow-hidden">
              <span className="block" data-map-line="">East Lane</span>
            </span>
            <span className="block overflow-hidden">
              <span
                className="block font-cormorant italic font-normal text-cream/65"
                data-map-line=""
                style={{ fontSize: 'clamp(1.1rem, 2.2vw, 1.75rem)' }}
              >
                Asian Bistro, Kingston
              </span>
            </span>
          </h2>

          <address
            data-map-address=""
            className="not-italic font-jost text-sm text-cream/60 leading-relaxed mb-8"
          >
            10 Kingston Hill<br />
            Kingston upon Thames<br />
            KT2 7NH
          </address>

          <a
            data-map-cta=""
            href="https://www.google.com/maps/dir/?api=1&destination=10+Kingston+Hill+Kingston+upon+Thames+KT2+7NH"
            target="_blank"
            rel="noopener noreferrer"
            className="pill-btn border border-cream/55 text-cream hover:bg-cream hover:text-brand-dark transition-colors duration-300"
            aria-label="Get directions to East Lane on Google Maps"
          >
            · Get Directions ·
          </a>
        </div>
      </div>

      {/* Reveal cover — cream overlay that scales away on scroll-in, replacing the
          clip-path animation that was applied to the section element itself */}
      <div
        ref={coverRef}
        className="absolute inset-0 bg-cream origin-bottom z-10 pointer-events-none"
        aria-hidden="true"
      />
    </section>
  )
}
