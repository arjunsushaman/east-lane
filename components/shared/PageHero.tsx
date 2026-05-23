'use client'

import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from '@/lib/gsap'

interface PageHeroProps {
  label?: string
  title: string
  titleItalic?: string
  subtitle?: string
  dark?: boolean
}

export default function PageHero({
  label,
  title,
  titleItalic,
  subtitle,
  dark = true,
}: PageHeroProps) {
  const bg   = dark ? 'bg-olive'     : 'bg-cream'
  const text = dark ? 'text-cream'   : 'text-brand-dark'

  const sectionRef  = useRef<HTMLElement>(null)
  const topRuleRef  = useRef<HTMLDivElement>(null)
  const botRuleRef  = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const tl = gsap.timeline({ delay: 0.08 })

    // Top rule draws from left
    tl.fromTo(
      topRuleRef.current,
      { scaleX: 0, transformOrigin: 'left center' },
      { scaleX: 1, duration: 0.85, ease: 'power2.inOut' },
      0
    )

    // Label (optional)
    tl.fromTo(
      '[data-hero-label]',
      { opacity: 0, y: 10 },
      { opacity: 1, y: 0, duration: 0.5 },
      0.22
    )

    // H1 title sweeps up
    tl.fromTo(
      '[data-hero-title]',
      { opacity: 0, y: 42 },
      { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out' },
      0.36
    )

    // Italic line cascades in a beat after the title
    tl.fromTo(
      '[data-hero-italic]',
      { y: 18 },
      { y: 0, duration: 0.65, ease: 'power2.out' },
      0.52
    )

    // Subtitle
    tl.fromTo(
      '[data-hero-subtitle]',
      { opacity: 0, y: 10 },
      { opacity: 1, y: 0, duration: 0.5 },
      0.66
    )

    // Bottom rule draws from right
    tl.fromTo(
      botRuleRef.current,
      { scaleX: 0, transformOrigin: 'right center' },
      { scaleX: 1, duration: 0.85, ease: 'power2.inOut' },
      0.76
    )
  }, { scope: sectionRef })

  return (
    <section ref={sectionRef} className={`${bg} pt-36 pb-16 lg:pt-44 lg:pb-20`}>
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">

        {/* Top rule — animated via ref */}
        <div
          ref={topRuleRef}
          className={`h-px mb-10 ${dark ? 'bg-cream/20' : 'bg-cream-dark/50'}`}
        />

        {/* Content block — no Framer Motion; GSAP handles entrance */}
        <div>
          {label && (
            <p
              data-hero-label=""
              className={`label-caps mb-5 ${dark ? 'text-cream/70' : 'text-terracotta'}`}
            >
              {label}
            </p>
          )}

          <h1
            data-hero-title=""
            className={`display-heading ${text} text-[clamp(2.75rem,7vw,5.5rem)] leading-tight max-w-3xl`}
          >
            {title}
            {titleItalic && (
              <em data-hero-italic="" className="font-cormorant italic font-normal block">
                {titleItalic}
              </em>
            )}
          </h1>

          {subtitle && (
            <p
              data-hero-subtitle=""
              className={`mt-4 font-jost text-sm leading-relaxed max-w-xl ${
                dark ? 'text-cream/60' : 'text-brand-dark/55'
              }`}
            >
              {subtitle}
            </p>
          )}
        </div>

        {/* Bottom rule — animated via ref */}
        <div
          ref={botRuleRef}
          className={`h-px mt-12 ${dark ? 'bg-cream/15' : 'bg-cream-dark/40'}`}
        />
      </div>
    </section>
  )
}
