import type { Metadata } from 'next'
import { pageMetadata } from '@/lib/metadata'
import PageHero from '@/components/shared/PageHero'
import MotionSection from '@/components/ui/MotionSection'
import Link from 'next/link'

export const metadata: Metadata = {
  title:       pageMetadata.reservations.title,
  description: pageMetadata.reservations.description,
}

export default function ReservationsPage() {
  return (
    <>
      <PageHero
        label="Online Booking"
        title="Reserve a"
        titleItalic="Table"
        subtitle="Book your seat at Kingston's pan-Asian bistro. Sharing plates made for passing around."
      />

      {/* Booking widget */}
      <section className="bg-cream py-16 lg:py-24">
        <div className="max-w-2xl mx-auto px-6 lg:px-10">
          <MotionSection>
            {/* Dojo widget placeholder */}
            <div className="border border-cream-dark/50 bg-white p-10 lg:p-16 text-center mb-10">
              <p className="label-caps text-brand-dark/30 mb-4" style={{ fontSize: '0.6rem' }}>
                Booking Widget
              </p>
              <p className="editorial-quote text-brand-dark/50 text-xl mb-6">
                Dojo booking widget embedded here
              </p>
              <p className="font-jost text-xs text-brand-dark/35 mb-8 leading-relaxed max-w-sm mx-auto">
                Replace this placeholder with the Dojo embed code when provided by the client.
              </p>
              <Link
                href="https://app.dojo.tech"
                target="_blank" rel="noopener noreferrer"
                className="pill-btn bg-amber border border-amber text-cream hover:bg-terracotta hover:border-terracotta px-10 py-4 justify-center"
              >
                · Reserve via Dojo ·
              </Link>
            </div>

            {/* Divider */}
            <div className="h-px bg-cream-dark/40 mb-10" />

            {/* Group note */}
            <div className="text-center">
              <p className="font-jost text-sm text-brand-dark/55 mb-3">
                For large groups or special occasions, please contact us directly.
              </p>
              <address className="not-italic font-jost text-sm text-brand-dark/40 mb-6">
                10 Kingston Hill, Kingston upon Thames, KT2 7NH
              </address>
              <Link href="/contact" className="pill-btn border border-brand-dark/35 text-brand-dark hover:bg-brand-dark hover:text-cream">
                Get in Touch
              </Link>
            </div>
          </MotionSection>
        </div>
      </section>
    </>
  )
}
