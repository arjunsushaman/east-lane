'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { useGSAP } from '@gsap/react'
import { gsap } from '@/lib/gsap'

export default function FeastImage() {
  const sectionRef = useRef<HTMLElement>(null)
  const innerRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    if (!sectionRef.current || !innerRef.current) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    // Image moves at ~60% scroll speed — genuine parallax depth
    gsap.fromTo(
      innerRef.current,
      { y: -45 },
      {
        y: 45,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      }
    )
  }, [])

  return (
    <section
      ref={sectionRef}
      className="w-full relative overflow-hidden"
      style={{ height: 'clamp(340px, 58vw, 700px)' }}
      aria-label="East Lane sharing plates"
    >
      {/* Oversized inner — extra 50px each side gives parallax room */}
      <div
        ref={innerRef}
        className="absolute inset-x-0"
        style={{ top: '-55px', bottom: '-55px' }}
        data-cursor="image"
      >
        <Image
          src="/images/feast.jpg"
          alt="East Lane sharing plates spread — food for passing around the table"
          fill
          className="object-cover"
          sizes="100vw"
          loading="lazy"
        />
      </div>

      {/* Top fade — blends into section above */}
      <div
        className="absolute inset-x-0 top-0 h-24 pointer-events-none z-10"
        style={{ background: 'linear-gradient(to bottom, #F2EDE0 0%, transparent 100%)' }}
        aria-hidden="true"
      />

      {/* Bottom fade — blends into section below */}
      <div
        className="absolute inset-x-0 bottom-0 h-28 pointer-events-none z-10"
        style={{ background: 'linear-gradient(to top, #F2EDE0 0%, transparent 100%)' }}
        aria-hidden="true"
      />
    </section>
  )
}
