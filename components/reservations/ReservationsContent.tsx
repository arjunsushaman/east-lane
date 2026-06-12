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
      <div className="max-w-3xl mx-auto px-6 lg:px-10">

        {/* Iframe container */}
        <div ref={widgetRef} className="mb-16">
          {/* Label */}
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px flex-1 bg-brand-dark/12" />
            <p className="label-caps text-brand-dark/30" style={{ fontSize: '0.58rem' }}>Online Reservation</p>
            <div className="h-px flex-1 bg-brand-dark/12" />
          </div>

          {/* Card */}
          <div
            className="overflow-hidden"
            style={{
              boxShadow: '0 8px 48px -8px rgba(30,17,11,0.13)',
              outline: '1px solid rgba(30,17,11,0.07)',
            }}
          >
            {/* Terracotta accent bar */}
            <div className="h-[3px]" style={{ background: 'linear-gradient(90deg, #A8481A 0%, #C8681A 55%, rgba(168,72,26,0.15) 100%)' }} />
            <iframe
              src="https://mylightspeed.app/reservation/e23b6d1c-d6db-4756-a3f0-268269466e8d/reservation"
              title="Book a table at East Lane"
              className="w-full border-0 block"
              style={{ height: '820px' }}
              loading="lazy"
            />
          </div>
        </div>

        {/* Divider */}
        <div ref={dividerRef} className="h-px bg-cream-dark/40 mb-10" />

        {/* Group note */}
        <div ref={noteRef} className="text-center">
          <p data-res-note="" className="font-jost text-sm text-brand-dark/55 mb-3">
            For large groups or special occasions, please contact us directly.
          </p>
          <div data-res-note="" className="flex flex-col items-center gap-1.5 mb-6">
            <a href="tel:02031615960" className="font-jost text-sm text-brand-dark/40 hover:text-terracotta transition-colors duration-200">02031615960</a>
            <a href="mailto:hello@eastlane.uk" className="font-jost text-sm text-brand-dark/40 hover:text-terracotta transition-colors duration-200">hello@eastlane.uk</a>
          </div>
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
