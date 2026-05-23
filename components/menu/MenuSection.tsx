'use client'

import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from '@/lib/gsap'
import MenuItemCard, { MenuItem } from './MenuItemCard'

interface MenuSectionProps {
  id: string
  category: string
  intro: string
  items: MenuItem[]
}

export default function MenuSection({ id, category, intro, items }: MenuSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null)

  // scope: sectionRef ensures all string selectors are scoped to THIS section's DOM —
  // critical because this component renders 5 times on the page
  useGSAP(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 80%',
        once: true,
      },
    })

    // Flanking rules close in from the outside toward the centre label
    tl.fromTo(
      '[data-rule-left]',
      { scaleX: 0, transformOrigin: 'right center' },
      { scaleX: 1, duration: 0.75, ease: 'power2.inOut' },
      0
    )
    tl.fromTo(
      '[data-rule-right]',
      { scaleX: 0, transformOrigin: 'left center' },
      { scaleX: 1, duration: 0.75, ease: 'power2.inOut' },
      0
    )

    // Category label fades up between the rules
    tl.fromTo(
      '[data-cat-label]',
      { opacity: 0, y: 8 },
      { opacity: 1, y: 0, duration: 0.45 },
      0.25
    )

    // Main heading sweeps up
    tl.fromTo(
      '[data-cat-heading]',
      { opacity: 0, y: 34 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' },
      0.35
    )

    // Intro italic cascades in after heading
    tl.fromTo(
      '[data-cat-intro]',
      { opacity: 0, y: 14 },
      { opacity: 1, y: 0, duration: 0.55, ease: 'power2.out' },
      0.55
    )

    // Menu item rows stagger upward
    tl.fromTo(
      '[data-menu-item]',
      { opacity: 0, y: 18 },
      { opacity: 1, y: 0, duration: 0.45, ease: 'power2.out', stagger: 0.055 },
      0.6
    )

    // Prices slide in from the right — arrives just after the row name is visible
    tl.fromTo(
      '[data-item-price]',
      { x: 16 },
      { x: 0, duration: 0.45, ease: 'power2.out', stagger: 0.055 },
      0.7
    )
  }, { scope: sectionRef })

  return (
    <div ref={sectionRef} id={id} className="scroll-mt-32">

      {/* Category header */}
      <div className="mb-10 lg:mb-12">
        {/* Flanking rules + centred label */}
        <div className="flex items-center gap-5 mb-6">
          <div
            data-rule-left=""
            className="h-px flex-1 bg-gradient-to-r from-transparent via-cream-dark/50 to-cream-dark/50"
          />
          <span
            data-cat-label=""
            className="label-caps text-terracotta/70 flex-shrink-0"
            style={{ fontSize: '0.58rem', letterSpacing: '0.25em' }}
          >
            {category}
          </span>
          <div
            data-rule-right=""
            className="h-px flex-1 bg-gradient-to-l from-transparent via-cream-dark/50 to-cream-dark/50"
          />
        </div>

        {/* Heading + intro */}
        <div className="text-center">
          <h2
            data-cat-heading=""
            className="display-heading text-brand-dark text-[clamp(2rem,5vw,3.5rem)] leading-none mb-3"
          >
            {category}
          </h2>
          <p data-cat-intro="" className="editorial-quote text-brand-dark/45 text-lg">
            {intro}
          </p>
        </div>
      </div>

      {/* Items — 2-column grid on lg+ */}
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-16 xl:gap-x-24">
        {items.map((item) => (
          <MenuItemCard key={item.name} item={item} />
        ))}
      </div>

    </div>
  )
}
