'use client'

import { useRef, useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useGSAP } from '@gsap/react'
import { gsap } from '@/lib/gsap'

const HIGHLIGHTS = [
  {
    name: 'Braised Pork Belly',
    category: 'Small Plates',
    desc: 'Lantern chili & fresh herbs, Vietnamese-style',
    price: '£15',
    tagline: 'The one to start with',
    image: '/images/feast.jpg',
    href: '#small-plates',
  },
  {
    name: 'Lamb Racks',
    category: 'Grills',
    desc: 'Korean kimchi butter, charred over open flame',
    price: '£16',
    tagline: "Chef Vin's showstopper",
    image: '/images/editorial-chef.jpg',
    href: '#grills',
  },
  {
    name: 'Braised Lamb Shank',
    category: "Chef's Specials",
    desc: 'Low & slow, served with scallion pancake',
    price: '£24',
    tagline: 'Low & slow, worth the wait',
    image: '/images/editorial-menu.jpg',
    href: '#chefs-specials',
  },
  {
    name: 'Wok Tossed Aromatic Duck',
    category: "Chef's Specials",
    desc: 'Hoisin, cucumber, mandarin pancake',
    price: '£15',
    tagline: 'A crowd favourite',
    image: '/images/reservation-interior.jpg',
    href: '#chefs-specials',
  },
  {
    name: 'Chicken Karaage',
    category: 'Small Plates',
    desc: 'Japanese-style, soy, mirin & ginger marinade',
    price: '£10',
    tagline: 'Straight from Japan',
    image: '/images/chef-portrait.jpg',
    href: '#small-plates',
  },
  {
    name: 'Jaggery Coconut Crème Brûlée',
    category: 'Desserts',
    desc: 'Coconut cream, caramelised jaggery crust',
    price: '£8',
    tagline: 'Sweet endings',
    image: '/images/about-interior.jpg',
    href: '#desserts',
  },
]

const NUM = HIGHLIGHTS.length
// Card dimensions — 40vw wide keeps ~2 cards visible at once on desktop
const CARD_W = 'clamp(220px, 40vw, 560px)'
const CARD_H = 'clamp(240px, 35vh, 400px)'
// Vertical padding either side of the cards (section height = CARD_H + 2×V_PAD)
const V_PAD  = 40

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
        start: 'center center',
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
      <section className="bg-cream py-12">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <p className="label-caps text-brand-dark/35 mb-6 tracking-[0.22em]" style={{ fontSize: '0.5rem' }}>
            Menu Highlights
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {HIGHLIGHTS.map(card => (
              <Link
                key={card.name}
                href={card.href}
                className="relative overflow-hidden rounded-2xl block"
                style={{ aspectRatio: '4/3' }}
              >
                <Image src={card.image} alt={card.name} fill className="object-cover"
                  sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw" />
                <div className="absolute inset-0"
                  style={{ background: 'linear-gradient(to top, rgba(30,17,11,0.88) 0%, rgba(30,17,11,0.2) 55%, transparent 80%)' }} />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <p className="label-caps text-terracotta/80 mb-1.5" style={{ fontSize: '0.46rem' }}>{card.category}</p>
                  <p className="display-heading text-cream text-xl mb-1">{card.name}</p>
                  <p className="editorial-quote text-cream/55 text-sm">{card.tagline}</p>
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
      className="relative bg-cream overflow-hidden"
      // height = card height + top/bottom padding (V_PAD px each side)
      style={{ height: `calc(${CARD_H} + ${V_PAD * 2}px)` }}
      aria-label="Menu highlights"
    >
      {/* Section label — sits in the top padding strip */}
      <p
        className="absolute label-caps text-brand-dark/30 tracking-[0.22em] pointer-events-none select-none"
        style={{ top: 14, left: '5vw', fontSize: '0.5rem' }}
        aria-hidden="true"
      >
        Menu Highlights
      </p>

      {/* Counter — top right inside padding strip */}
      <span
        ref={counterRef}
        className="absolute label-caps text-brand-dark/30 tabular-nums pointer-events-none select-none"
        style={{ top: 14, right: 32, fontSize: '0.5rem', letterSpacing: '0.2em' }}
        aria-hidden="true"
      >
        01 / {String(NUM).padStart(2, '0')}
      </span>

      {/*
        Positioning wrapper: absolute so it doesn't participate in flex/block sizing.
        top: V_PAD centres the card strip vertically within the section.
        left: 0 so the track can extend full width and beyond.
        No explicit width — shrinks to content so track.scrollWidth stays accurate.
      */}
      <div style={{ position: 'absolute', top: V_PAD, left: 0 }}>
        {/*
          trackRef uses inline-flex so its box width = content (cards + gaps + padding).
          display:flex would stretch to parent width → scrollWidth ≈ viewport → broken scroll.
        */}
        <div
          ref={trackRef}
          className="will-change-transform"
          style={{ display: 'inline-flex', gap: '20px', paddingLeft: '5vw', paddingRight: '5vw' }}
        >
          {HIGHLIGHTS.map((card, i) => (
            <Link
              key={card.name}
              href={card.href}
              className="relative flex-shrink-0 rounded-2xl overflow-hidden group block"
              style={{
                width: CARD_W,
                height: CARD_H,
                boxShadow: '0 6px 32px rgba(30,17,11,0.13), 0 1px 4px rgba(30,17,11,0.08)',
              }}
              aria-label={`${card.name} — ${card.tagline}`}
            >
              {/* Image */}
              <Image
                src={card.image}
                alt={card.name}
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                sizes="(max-width:768px) 80vw, 40vw"
                priority={i === 0}
              />

              {/* Gradient */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{ background: 'linear-gradient(to top, rgba(30,17,11,0.90) 0%, rgba(30,17,11,0.30) 45%, transparent 70%)' }}
                aria-hidden="true"
              />

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 px-5 pb-5">
                <p className="label-caps text-terracotta/80 mb-1.5 tracking-[0.2em]" style={{ fontSize: '0.44rem' }}>
                  {card.category}
                </p>
                <h2 className="display-heading text-cream leading-tight mb-1" style={{ fontSize: 'clamp(1rem, 2vw, 1.5rem)' }}>
                  {card.name}
                </h2>
                <p className="editorial-quote text-cream/55 mb-3" style={{ fontSize: 'clamp(0.72rem, 1vw, 0.9rem)' }}>
                  {card.tagline}
                </p>
                <div className="flex items-center gap-4">
                  <span className="editorial-quote text-terracotta" style={{ fontSize: 'clamp(1rem, 1.5vw, 1.3rem)' }}>
                    {card.price}
                  </span>
                  <span
                    className="label-caps text-cream/32 group-hover:text-cream/60 transition-colors duration-300"
                    style={{ fontSize: '0.4rem', letterSpacing: '0.16em' }}
                  >
                    · See in menu ·
                  </span>
                </div>
              </div>

              {/* Card index */}
              <span
                className="absolute bottom-4 right-4 font-jost text-cream/18 tabular-nums"
                style={{ fontSize: '0.52rem', letterSpacing: '0.1em' }}
                aria-hidden="true"
              >
                {String(i + 1).padStart(2, '0')}
              </span>
            </Link>
          ))}
        </div>
      </div>

      {/* Scroll hint */}
      <div
        className="absolute left-1/2 -translate-x-1/2 flex items-center gap-2.5 pointer-events-none select-none"
        style={{ bottom: 14 }}
        aria-hidden="true"
      >
        <span className="label-caps text-brand-dark/25" style={{ fontSize: '0.44rem' }}>scroll to explore</span>
        <div className="flex gap-1.5">
          {HIGHLIGHTS.map((_, i) => (
            <div key={i} className="w-1 h-1 rounded-full bg-brand-dark/18" />
          ))}
        </div>
      </div>

      {/* Progress bar */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-brand-dark/8" aria-hidden="true">
        <div
          ref={progressRef}
          className="absolute inset-0 bg-terracotta origin-left"
          style={{ transform: 'scaleX(0)', transformOrigin: 'left center' }}
        />
      </div>
    </section>
  )
}
