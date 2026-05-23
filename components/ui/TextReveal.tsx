'use client'

import { useRef, useMemo } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from '@/lib/gsap'

interface TextRevealProps {
  text: string
  className?: string
}

export default function TextReveal({ text, className = '' }: TextRevealProps) {
  const containerRef = useRef<HTMLParagraphElement>(null)

  const tokens = useMemo(() => text.split(/(\s+)/), [text])

  useGSAP(() => {
    const container = containerRef.current
    if (!container) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const words = container.querySelectorAll('.tr-word')

    gsap.fromTo(
      words,
      { opacity: 0.08, filter: 'blur(5px)', y: 10 },
      {
        opacity: 1,
        filter: 'blur(0px)',
        y: 0,
        ease: 'power2.out',
        stagger: { each: 0.028, from: 'start' },
        scrollTrigger: {
          trigger: container,
          start: 'top 82%',
          end: 'bottom 30%',
          scrub: 1.4,
        },
      }
    )
  }, [])

  return (
    <p ref={containerRef} className={className}>
      {tokens.map((token, i) =>
        token.trim() ? (
          <span key={i} className="tr-word inline-block">
            {token}
          </span>
        ) : (
          <span key={i} aria-hidden="true">&nbsp;</span>
        )
      )}
    </p>
  )
}
