'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { useGSAP } from '@gsap/react'
import { gsap } from '@/lib/gsap'

export default function ReservationsContent() {
  const sectionRef = useRef<HTMLElement>(null)
  const widgetRef  = useRef<HTMLDivElement>(null)
  const dividerRef = useRef<HTMLDivElement>(null)
  const noteRef    = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    // Booking widget card materializes on enter
    gsap.from(widgetRef.current, {
      opacity: 0,
      y: 36,
      scale: 0.98,
      duration: 0.95,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: widgetRef.current,
        start: 'top 82%',
        toggleActions: 'play none none none',
      },
    })

    // Divider draws left-to-right
    gsap.from(dividerRef.current, {
      scaleX: 0,
      transformOrigin: 'left center',
      duration: 0.8,
      ease: 'power2.inOut',
      scrollTrigger: {
        trigger: dividerRef.current,
        start: 'top 88%',
        toggleActions: 'play none none none',
      },
    })

    // Note text elements stagger up
    gsap.from('[data-res-note]', {
      opacity: 0,
      y: 18,
      stagger: 0.1,
      duration: 0.65,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: noteRef.current,
        start: 'top 85%',
        toggleActions: 'play none none none',
      },
    })

    // CTA button
    gsap.from('[data-res-cta]', {
      opacity: 0,
      scale: 0.94,
      y: 12,
      duration: 0.65,
      ease: 'power2.out',
      delay: 0.2,
      scrollTrigger: {
        trigger: noteRef.current,
        start: 'top 82%',
        toggleActions: 'play none none none',
      },
    })
  }, { scope: sectionRef })

  return (
    <section ref={sectionRef} className="bg-cream py-16 lg:py-24">
      <div className="max-w-2xl mx-auto px-6 lg:px-10">
        {/* Booking widget placeholder */}
        <div ref={widgetRef} className="border border-cream-dark/50 bg-white p-10 lg:p-16 text-center mb-10">
          <p className="label-caps text-brand-dark/30 mb-4" style={{ fontSize: '0.6rem' }}>
            Booking Widget
          </p>
          <p className="editorial-quote text-brand-dark/50 text-xl mb-6">
            Dojo booking widget embedded here
          </p>
          <p className="font-jost text-xs text-brand-dark/35 mb-8 leading-relaxed max-w-sm mx-auto">
            Replace this placeholder with the Dojo embed code when provided by the client.
          </p>
          <Link
            href="https://app.dojo.tech"
            target="_blank"
            rel="noopener noreferrer"
            className="pill-btn bg-amber border border-amber text-cream hover:bg-terracotta hover:border-terracotta px-10 py-4 justify-center"
          >
            · Reserve via Dojo ·
          </Link>
        </div>

        {/* Divider */}
        <div ref={dividerRef} className="h-px bg-cream-dark/40 mb-10" />

        {/* Group note */}
        <div ref={noteRef} className="text-center">
          <p data-res-note="" className="font-jost text-sm text-brand-dark/55 mb-3">
            For large groups or special occasions, please contact us directly.
          </p>
          <address data-res-note="" className="not-italic font-jost text-sm text-brand-dark/40 mb-6">
            10 Kingston Hill, Kingston upon Thames, KT2 7NH
          </address>
          <Link
            href="/contact"
            data-res-cta=""
            className="pill-btn border border-brand-dark/35 text-brand-dark hover:bg-brand-dark hover:text-cream"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </section>
  )
}
