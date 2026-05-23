'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { useGSAP } from '@gsap/react'
import { gsap } from '@/lib/gsap'

const PARAGRAPHS = [
  'At the heart of it is Chef Vin. A natural across cuisines, it was the food of the East that truly struck a chord — the kind of cooking where everyone at the table gets a bite of everything, where dishes are simple on the surface yet layered beneath, and where great ingredients are allowed to speak for themselves.',
  'Raised with a deep reverence for home cooking — shaped by his mother and grandmother — he left with a backpack and a curiosity that took him through the night markets of Vietnam, the hawker lanes of Thailand, and everywhere in between.',
  "What struck him wasn’t complexity. It was the opposite: the magic of simple things, done with soul.",
]

export default function BrandStorySection() {
  const sectionRef   = useRef<HTMLElement>(null)
  const imageWrapRef = useRef<HTMLDivElement>(null)
  const parallaxRef  = useRef<HTMLDivElement>(null)
  const textRef      = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    // Clip-path reveal: top-to-bottom wipe on first enter
    gsap.from(imageWrapRef.current, {
      clipPath: 'inset(0 0 100% 0)',
      duration: 1.4,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: imageWrapRef.current,
        start: 'top 85%',
        toggleActions: 'play none none none',
      },
    })

    // Parallax: image drifts at a different rate than the page
    gsap.fromTo(
      parallaxRef.current,
      { yPercent: 8 },
      {
        yPercent: -8,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      }
    )

    // Label slides in from left
    gsap.from('[data-bs-label]', {
      opacity: 0,
      x: -16,
      duration: 0.6,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: textRef.current,
        start: 'top 82%',
        toggleActions: 'play none none none',
      },
    })

    // Heading lines: mask reveal (overflow-hidden parent, inner span yPercent)
    gsap.from('[data-bs-line]', {
      yPercent: 105,
      stagger: 0.12,
      duration: 0.85,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: textRef.current,
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
    })

    // Paragraphs stagger in
    gsap.from('[data-bs-para]', {
      opacity: 0,
      y: 20,
      stagger: 0.1,
      duration: 0.7,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: textRef.current,
        start: 'top 78%',
        toggleActions: 'play none none none',
      },
    })
  }, { scope: sectionRef })

  return (
    <section ref={sectionRef} className="bg-cream overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2">

          {/* Image — clip-path reveal + parallax */}
          <div
            ref={imageWrapRef}
            className="relative overflow-hidden"
            style={{ minHeight: '520px' }}
            data-cursor="image"
          >
            <div
              ref={parallaxRef}
              className="absolute"
              style={{ inset: '-20% 0' }}
            >
              <Image
                src="/images/about-interior.jpg"
                alt="East Lane restaurant interior"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* Text */}
          <div ref={textRef} className="flex flex-col justify-center px-10 lg:px-16 py-16">
            <p data-bs-label="" className="label-caps text-terracotta mb-5">The Story</p>

            <h2 className="display-heading text-brand-dark text-[clamp(1.8rem,3.5vw,2.75rem)] mb-8 leading-tight">
              <span className="block overflow-hidden pb-1">
                <span className="block" data-bs-line="">From Street Stalls</span>
              </span>
              <span className="block overflow-hidden pb-1">
                <em className="block font-cormorant italic font-normal" data-bs-line="">
                  to Kingston
                </em>
              </span>
            </h2>

            <div className="space-y-5">
              {PARAGRAPHS.map((para, i) => (
                <p
                  key={i}
                  data-bs-para=""
                  className="font-jost text-[0.9375rem] leading-[1.8] text-brand-dark/65"
                >
                  {para}
                </p>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
