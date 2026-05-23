'use client'

import { useState } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap, ScrollTrigger } from '@/lib/gsap'

interface MenuNavProps {
  sections: { id: string; category: string }[]
}

export default function MenuNav({ sections }: MenuNavProps) {
  const [activeId, setActiveId] = useState<string>(sections[0].id)

  useGSAP(() => {
    sections.forEach(s => {
      const el = document.getElementById(s.id)
      if (!el) return

      ScrollTrigger.create({
        trigger: el,
        start: 'top 58%',
        end: 'bottom 58%',
        onEnter:      () => setActiveId(s.id),
        onEnterBack:  () => setActiveId(s.id),
      })
    })
  }, [])

  return (
    <nav
      className="sticky top-[72px] z-30 bg-cream border-b border-cream-dark/35 overflow-x-auto"
      aria-label="Menu sections"
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 flex gap-0">
        {sections.map(s => (
          <a
            key={s.id}
            href={`#${s.id}`}
            className={[
              'font-jost font-medium text-[0.68rem] uppercase tracking-[0.16em]',
              'transition-colors duration-200 py-4 px-4 lg:px-6 whitespace-nowrap',
              'border-b-[1.5px]',
              activeId === s.id
                ? 'text-terracotta border-terracotta'
                : 'text-brand-dark/45 hover:text-terracotta border-transparent hover:border-terracotta',
            ].join(' ')}
          >
            {s.category}
          </a>
        ))}
      </div>
    </nav>
  )
}
