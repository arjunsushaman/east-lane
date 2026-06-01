'use client'

import { useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useGSAP } from '@gsap/react'
import { gsap } from '@/lib/gsap'

export default function ReservationCTA() {
  const sectionRef = useRef<HTMLElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)
  const panelRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    if (!sectionRef.current || !imageRef.current || !panelRef.current) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    // Image drifts down; panel drifts up — creates 3D split depth
    gsap.fromTo(
      imageRef.current,
      { y: -22 },
      {
        y: 22,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 2,
        },
      }
    )

    gsap.fromTo(
      panelRef.current,
      { y: 22 },
      {
        y: -22,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 2,
        },
      }
    )
  }, [])

  return (
    <section ref={sectionRef} aria-label="Reserve a table">
      <div className="grid grid-cols-1 lg:grid-cols-2">

        {/* Left: full-bleed image */}
        <div
          ref={imageRef}
          className="relative overflow-hidden"
          style={{ minHeight: 'clamp(380px, 52vw, 620px)' }}
          data-cursor="image"
        >
          <Image
            src="/images/reservation-interior.jpg"
            alt="East Lane restaurant interior — warm, welcoming dining room"
            fill
            loading="lazy"
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          {/* Subtle right-edge fade into olive panel */}
          <div
            className="absolute inset-y-0 right-0 w-24 hidden lg:block pointer-events-none"
            style={{ background: 'linear-gradient(to right, transparent, rgba(232,222,200,0.6))' }}
            aria-hidden="true"
          />
        </div>

        {/* Right: olive booking panel */}
        <div
          ref={panelRef}
          className="bg-cream flex flex-col justify-center px-10 lg:px-14 xl:px-20 py-16 lg:py-20"
        >
          <div className="h-px w-10 bg-brand-dark/20 mb-8" />

          <p className="label-caps text-brand-dark/50 mb-5 tracking-[0.22em]">Reserve Your Table</p>

          <h2 className="display-heading text-brand-dark text-[clamp(2rem,3.2vw,2.9rem)] mb-5 leading-[1.1]">
            Gather Around<br />
            <em className="font-cormorant italic font-normal text-[0.95em] text-brand-dark/65">
              the Table
            </em>
          </h2>

          <p className="font-jost text-[0.9375rem] leading-[1.8] text-brand-dark/65 mb-10 max-w-[34ch]">
            For birthday dinners, lazy Sunday lunches, date nights and big family gatherings.
            Sharing plates made for passing around.
          </p>

          <div className="flex flex-col gap-4">
            <Link
              href="/reservations"
              data-cursor="cta"
              className="pill-btn border border-brand-dark/35 text-brand-dark hover:bg-brand-dark hover:text-cream justify-center py-4 transition-colors duration-300"
            >
              · Reserve Now ·
            </Link>
            <p className="font-jost text-[0.72rem] text-brand-dark/40 text-center">
              For groups &amp; special occasions,{' '}
              <Link
                href="/contact"
                className="underline underline-offset-4 hover:text-brand-dark/70 transition-colors duration-200"
              >
                contact us directly
              </Link>
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}
