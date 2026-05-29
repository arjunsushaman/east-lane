'use client'

import { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useGSAP } from '@gsap/react'
import { gsap } from '@/lib/gsap'

export default function ChefSection() {
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

    // Label slides in from right (image is on right at lg)
    gsap.from('[data-cs-label]', {
      opacity: 0,
      x: 16,
      duration: 0.6,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: textRef.current,
        start: 'top 82%',
        toggleActions: 'play none none none',
      },
    })

    // Heading lines: mask reveal
    gsap.from('[data-cs-line]', {
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
    gsap.from('[data-cs-para]', {
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

    // CTA button enters last
    gsap.from('[data-cs-cta]', {
      opacity: 0,
      scale: 0.94,
      y: 12,
      duration: 0.65,
      ease: 'power2.out',
      delay: 0.35,
      scrollTrigger: {
        trigger: textRef.current,
        start: 'top 75%',
        toggleActions: 'play none none none',
      },
    })
  }, { scope: sectionRef })

  return (
    <section ref={sectionRef} className="bg-cream overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2">

          {/* Text — left at lg */}
          <div ref={textRef} className="flex flex-col justify-center px-10 lg:px-16 py-16 order-2 lg:order-1">
            <p data-cs-label="" className="label-caps text-terracotta mb-5">Meet the Chef</p>

            <h2 className="display-heading text-brand-dark text-[clamp(1.8rem,3.5vw,2.75rem)] mb-8 leading-tight">
              <span className="block overflow-hidden pb-1">
                <span className="block" data-cs-line="">Chef</span>
              </span>
              <span className="block overflow-hidden pb-1">
                <em className="block font-cormorant italic font-normal" data-cs-line="">
                  Vin
                </em>
              </span>
            </h2>

            <p data-cs-para="" className="font-jost text-[0.9375rem] leading-[1.8] text-brand-dark/65 mb-6">
              East Lane is his answer to that. A menu curated so every plate tells a story of
              a place, a journey, a moment. A slice of every country, on one table.
            </p>
            <p data-cs-para="" className="font-jost text-[0.9375rem] leading-[1.8] text-brand-dark/65 mb-10">
              We&apos;ve built a space that works as hard as the food does — for birthday dinners
              and lazy Sunday lunches, date nights and big family gatherings. Sharing plates
              made for passing around, drinks that take you straight back to our favourite
              corners of the East.
            </p>

            <Link
              href="/reservations"
              data-cs-cta=""
              className="pill-btn bg-olive border border-olive text-cream hover:bg-olive-deep hover:border-olive-deep self-center mx-auto"
            >
              · Reserve Now ·
            </Link>
          </div>

          {/* Chef image — right at lg, clip-path reveal + parallax */}
          <div
            ref={imageWrapRef}
            className="relative overflow-hidden order-1 lg:order-2"
            style={{ minHeight: '460px' }}
            data-cursor="image"
          >
            <div
              ref={parallaxRef}
              className="absolute"
              style={{ inset: '-20% 0' }}
            >
              <Image
                src="/images/chef-portrait.jpg"
                alt="Chef Vin at East Lane"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
