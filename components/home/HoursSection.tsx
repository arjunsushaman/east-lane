'use client'

import { useRef } from 'react'
import { Info } from 'lucide-react'
import { useGSAP } from '@gsap/react'
import { gsap } from '@/lib/gsap'

const days = [
  { label: 'Monday',            time: 'Closed'              },
  { label: 'Tuesday – Friday',  time: '5:00 pm – 10:30 pm' },
  { label: 'Saturday',          time: '12:00 pm – 10:30 pm' },
  { label: 'Sunday',            time: '12:00 pm – 9:30 pm'  },
]

export default function HoursSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useGSAP(() => {
    if (!sectionRef.current) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const rows = sectionRef.current.querySelectorAll('[data-hours-row]')
    const borders = sectionRef.current.querySelectorAll('[data-hours-border]')

    // Rows stagger up into view
    gsap.fromTo(
      rows,
      { opacity: 0, y: 26 },
      {
        opacity: 1,
        y: 0,
        duration: 0.55,
        ease: 'power2.out',
        stagger: 0.13,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          once: true,
        },
      }
    )

    // Border lines draw from left to right
    gsap.fromTo(
      borders,
      { scaleX: 0 },
      {
        scaleX: 1,
        duration: 0.65,
        ease: 'power2.inOut',
        stagger: 0.14,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 65%',
          once: true,
        },
      }
    )
  }, [])

  return (
    <section ref={sectionRef} className="bg-olive py-20 lg:py-28" id="hours">
      <div className="max-w-lg mx-auto px-6 text-center">

        {/* Flanked label */}
        <div className="flex items-center gap-5 mb-12">
          <div className="h-px flex-1 bg-cream/20" />
          <p className="label-caps text-cream/75 tracking-[0.28em]">We&apos;re Open</p>
          <div className="h-px flex-1 bg-cream/20" />
        </div>

        <h2 className="display-heading text-cream text-[clamp(2.25rem,5vw,3.5rem)] mb-14 leading-tight">
          Opening{' '}
          <em className="font-cormorant italic font-normal">Hours</em>
        </h2>

        {/* Hours rows with animated borders */}
        <div className="flex flex-col">
          {days.map((d, i) => (
            <div key={i}>
              <div
                data-hours-row=""
                className="flex items-baseline justify-between py-6"
              >
                <span className="font-jost text-sm text-cream/70 tracking-wide text-left">
                  {d.label}
                </span>
                <span className="editorial-quote text-cream text-xl">
                  {d.time}
                </span>
              </div>
              {i < days.length - 1 && (
                <div
                  data-hours-border=""
                  className="h-px w-full"
                  style={{
                    backgroundColor: 'rgba(232,222,200,0.18)',
                    transformOrigin: 'left center',
                  }}
                />
              )}
            </div>
          ))}
        </div>

        {/* Upcoming change notice */}
        <div
          role="note"
          className="mt-10 rounded-xl border border-cream/20 bg-cream/[0.06] px-5 py-4 text-left flex gap-3.5"
        >
          <Info size={16} className="mt-[3px] flex-shrink-0 text-cream/70" aria-hidden="true" />
          <p className="font-jost text-[0.85rem] text-cream/80 leading-relaxed">
            <span className="label-caps block text-cream mb-1">From 1st November</span>
            Starting from November 1st, the restaurant will be open on{' '}
            <strong className="font-medium text-cream">Mondays</strong> and remain closed on{' '}
            <strong className="font-medium text-cream">Tuesdays</strong>.
          </p>
        </div>

        {/* Footer note */}
        <p className="mt-8 font-jost text-[0.72rem] text-cream/50 leading-relaxed">
          Hours confirmed before launch.{' '}
          <a
            href="https://www.instagram.com/eastlanekingston"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cream/60 hover:text-cream underline underline-offset-4 transition-colors duration-200"
          >
            Follow us
          </a>{' '}
          for the latest updates.
        </p>

      </div>
    </section>
  )
}
