'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function ReservationCTA() {
  return (
    <section className="overflow-hidden" aria-label="Reserve a table">
      <div className="grid grid-cols-1 lg:grid-cols-2">

        {/* ── Left: full-bleed image ── */}
        <motion.div
          className="relative overflow-hidden"
          style={{ minHeight: 'clamp(380px, 52vw, 620px)' }}
          initial={{ opacity: 0, scale: 1.05 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <Image
            src="/images/reservation-interior.jpg"
            alt="East Lane restaurant interior — warm, welcoming dining room"
            fill
            loading="lazy"
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          {/* Subtle right-edge fade into olive panel */}
          <div
            className="absolute inset-y-0 right-0 w-24 hidden lg:block pointer-events-none"
            style={{ background: 'linear-gradient(to right, transparent, rgba(92,107,58,0.6))' }}
            aria-hidden="true"
          />
        </motion.div>

        {/* ── Right: olive booking panel ── */}
        <motion.div
          className="bg-olive flex flex-col justify-center px-10 lg:px-14 xl:px-20 py-16 lg:py-20"
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
        >
          {/* Top rule */}
          <div className="h-px w-10 bg-cream/30 mb-8" />

          <p className="label-caps text-cream/75 mb-5 tracking-[0.22em]">Reserve Your Table</p>

          <h2 className="display-heading text-cream text-[clamp(2rem,3.2vw,2.9rem)] mb-5 leading-[1.1]">
            Gather Around<br />
            <em className="font-cormorant italic font-normal text-[0.95em] text-cream/70">
              the Table
            </em>
          </h2>

          <p className="font-jost text-[0.9375rem] leading-[1.8] text-cream/70 mb-10 max-w-[34ch]">
            For birthday dinners, lazy Sunday lunches, date nights and big family gatherings.
            Sharing plates made for passing around.
          </p>

          {/* CTAs */}
          <div className="flex flex-col gap-4">
            <Link
              href="/reservations"
              className="pill-btn border border-cream/55 text-cream hover:bg-cream hover:text-brand-dark justify-center py-4 transition-colors duration-300"
            >
              · Reserve Now ·
            </Link>
            <p className="font-jost text-[0.72rem] text-cream/45 text-center">
              For groups &amp; special occasions,{' '}
              <Link
                href="/contact"
                className="underline underline-offset-4 hover:text-cream/70 transition-colors duration-200"
              >
                contact us directly
              </Link>
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
