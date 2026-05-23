'use client'

import { useRef, useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useGSAP } from '@gsap/react'
import { gsap } from '@/lib/gsap'

const HIGHLIGHTS = [
  {
    name: 'Korean BBQ Bulgogi Beef',
    category: 'Sharing Mains',
    desc: 'Soy-marinated short rib, pickled daikon, ssam leaves',
    price: '£18',
    tagline: 'The crowd favourite',
    image: '/images/feast.jpg',
    href: '#sharing-mains',
  },
  {
    name: 'Gyoza Potstickers',
    category: 'Small Plates & Starters',
    desc: 'Pork & ginger, ponzu dipping sauce',
    price: '£8',
    tagline: 'Fresh from the pan',
    image: '/images/editorial-chef.jpg',
    href: '#small-plates',
  },
  {
    name: 'Mango Sticky Rice',
    category: 'Desserts',
    desc: 'Coconut cream, toasted sesame',
    price: '£7',
    tagline: 'Sweet endings',
    image: '/images/editorial-menu.jpg',
    href: '#desserts',
  },
  {
    name: 'Lychee Martini',
    category: 'Cocktails & Drinks',
    desc: 'Vodka, lychee liqueur, elderflower',
    price: '£12',
    tagline: 'The signature sip',
    image: '/images/reservation-interior.jpg',
    href: '#drinks',
  },
  {
    name: 'Miso Salmon',
    category: 'Sharing Mains',
    desc: 'White miso glaze, jasmine rice, pak choi',
    price: '£15',
    tagline: "Chef Vin's pick",
    image: '/images/chef-portrait.jpg',
    href: '#sharing-mains',
  },
  {
    name: 'Thai Green Curry',
    category: 'Sharing Mains',
    desc: 'Chicken or tofu, jasmine rice, kaffir lime',
    price: '£15',
    tagline: 'A journey in a bowl',
    image: '/images/about-interior.jpg',
    href: '#sharing-mains',
  },
]

const NUM = HIGHLIGHTS.length

export default function MenuHighlights() {
  const sectionRef  = useRef<HTMLElement>(null)
  const trackRef    = useRef<HTMLDivElement>(null)
  const progressRef = useRef<HTMLDivElement>(null)
  const counterRef  = useRef<HTMLSpanElement>(null)
  const [reduceMotion, setReduceMotion] = useState(false)

  useEffect(() => {
    setReduceMotion(window.matchMedia('(prefers-reduced-motion: reduce)').matches)
  }, [])

  useGSAP(() => {
    if (reduceMotion) return
    if (!trackRef.current || !sectionRef.current) return

    const track = trackRef.current

    gsap.to(track, {
      x: () => -(track.scrollWidth - window.innerWidth),
      ease: 'none',
      scrollTrigger: {
        trigger: sectionRef.current,
        pin: true,
        scrub: 1,
        start: 'top top',
        end: () => `+=${track.scrollWidth - window.innerWidth}`,
        invalidateOnRefresh: true,
        snap: {
          snapTo: 1 / (NUM - 1),
          duration: { min: 0.3, max: 0.5 },
          ease: 'power2.inOut',
        },
        onUpdate: (self) => {
          if (progressRef.current) {
            gsap.set(progressRef.current, { scaleX: self.progress })
          }
          if (counterRef.current) {
            const idx = Math.round(self.progress * (NUM - 1))
            counterRef.current.textContent = `${String(idx + 1).padStart(2, '0')} / ${String(NUM).padStart(2, '0')}`
          }
        },
      },
    })
  }, { scope: sectionRef, dependencies: [reduceMotion] })

  // Reduced-motion fallback: static grid
  if (reduceMotion) {
    return (
      <section className="bg-olive-deep py-16">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <p className="label-caps text-cream/40 mb-10 text-center tracking-[0.22em]">
            Menu Highlights
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {HIGHLIGHTS.map(card => (
              <Link
                key={card.name}
                href={card.href}
                className="relative overflow-hidden rounded-lg block"
                style={{ aspectRatio: '3/4' }}
              >
                <Image
                  src={card.image}
                  alt={card.name}
                  fill
                  className="object-cover"
                  sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
                />
                <div
                  className="absolute inset-0"
                  style={{ background: 'linear-gradient(to top, rgba(30,17,11,0.85) 0%, rgba(30,17,11,0.2) 55%, transparent 80%)' }}
                />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <p className="label-caps text-terracotta/80 mb-1.5">{card.category}</p>
                  <p className="display-heading text-cream text-xl mb-1">{card.name}</p>
                  <p className="font-jost text-cream/55 text-sm">{card.tagline}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    )
  }

  return (
    <section
      ref={sectionRef}
      className="relative bg-olive-deep overflow-hidden will-change-transform"
      style={{ height: '100dvh' }}
      aria-label="Menu highlights"
    >
      {/* Horizontal track — GSAP moves this via x transform */}
      <div
        ref={trackRef}
        className="flex h-full"
        style={{ width: `${NUM * 100}vw` }}
      >
        {HIGHLIGHTS.map((card, i) => (
          <div
            key={card.name}
            className="relative flex-shrink-0 overflow-hidden"
            style={{ width: '100vw', height: '100dvh' }}
          >
            {/* Background image */}
            <Image
              src={card.image}
              alt={card.name}
              fill
              className="object-cover"
              sizes="100vw"
              priority={i === 0}
            />

            {/* Bottom gradient — text legibility */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  'linear-gradient(to top, rgba(30,17,11,0.94) 0%, rgba(30,17,11,0.60) 35%, rgba(30,17,11,0.10) 60%, transparent 80%)',
              }}
              aria-hidden="true"
            />

            {/* Top gradient — counter legibility */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{ background: 'linear-gradient(to bottom, rgba(30,17,11,0.50) 0%, transparent 22%)' }}
              aria-hidden="true"
            />

            {/* Card content — bottom */}
            <div className="absolute bottom-0 left-0 right-0 px-8 sm:px-14 lg:px-20 pb-14 lg:pb-20">
              <p className="label-caps text-terracotta/80 mb-3 tracking-[0.22em]">{card.category}</p>

              <h2 className="display-heading text-cream leading-tight mb-2"
                style={{ fontSize: 'clamp(2rem, 5.5vw, 4.5rem)' }}>
                {card.name}
              </h2>

              <p className="editorial-quote text-cream/65 mb-1.5"
                style={{ fontSize: 'clamp(1rem, 1.5vw, 1.25rem)' }}>
                {card.tagline}
              </p>

              <p className="font-jost text-cream/38 text-sm mb-8">{card.desc}</p>

              <div className="flex items-center gap-6">
                <span className="editorial-quote text-terracotta"
                  style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2.25rem)' }}>
                  {card.price}
                </span>
                <Link
                  href={card.href}
                  className="pill-btn border border-cream/40 text-cream hover:bg-cream hover:text-brand-dark transition-colors duration-300"
                  style={{ fontSize: '0.62rem' }}
                >
                  · See in Menu ·
                </Link>
              </div>
            </div>

            {/* Per-card index — lower right */}
            <span
              className="absolute bottom-6 right-8 font-jost text-cream/18 tabular-nums"
              style={{ fontSize: '0.6rem', letterSpacing: '0.12em' }}
              aria-hidden="true"
            >
              {String(i + 1).padStart(2, '0')}
            </span>
          </div>
        ))}
      </div>

      {/* Scroll hint — first visible, fades with scroll via opacity on first card (not interactive) */}
      <div
        className="absolute bottom-9 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2.5 pointer-events-none select-none"
        aria-hidden="true"
      >
        <span className="label-caps text-cream/28" style={{ fontSize: '0.52rem' }}>Scroll to explore</span>
        <div className="flex gap-2">
          {HIGHLIGHTS.map((_, i) => (
            <div key={i} className="w-[5px] h-[5px] rounded-full bg-cream/20" />
          ))}
        </div>
      </div>

      {/* Progress bar */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-cream/8" aria-hidden="true">
        <div
          ref={progressRef}
          className="absolute inset-0 bg-terracotta origin-left"
          style={{ transform: 'scaleX(0)', transformOrigin: 'left center' }}
        />
      </div>

      {/* Counter "01 / 06" — top right, clears nav */}
      <span
        ref={counterRef}
        className="absolute right-8 label-caps text-cream/38 tabular-nums pointer-events-none select-none"
        style={{ top: '96px', fontSize: '0.58rem', letterSpacing: '0.2em' }}
        aria-hidden="true"
      >
        01 / {String(NUM).padStart(2, '0')}
      </span>
    </section>
  )
}
