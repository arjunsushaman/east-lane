import Link from 'next/link'
import Image from 'next/image'
import MotionSection from '@/components/ui/MotionSection'

export default function ReservationCTA() {
  return (
    <section className="bg-cream py-20 lg:py-28">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <MotionSection>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-0 items-stretch">

            {/* Left image block */}
            <div className="relative overflow-hidden" style={{ minHeight: '420px' }}>
              <Image
                src="/images/reservation-interior.jpg"
                alt="East Lane restaurant interior"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            {/* Right: booking info */}
            <div className="bg-brand-dark flex flex-col justify-center px-10 lg:px-16 py-14">
              <p className="label-caps text-terracotta mb-5">Reserve Your Table</p>

              <h2 className="display-heading text-cream text-[clamp(1.9rem,3.5vw,2.75rem)] mb-6 leading-tight">
                Gather Around<br />
                <em className="font-cormorant italic font-normal text-[0.95em] text-cream/80">the Table</em>
              </h2>

              <p className="font-jost text-[0.9375rem] leading-relaxed text-cream/60 mb-8 max-w-xs">
                For birthday dinners, lazy Sunday lunches, date nights and big family gatherings.
                Sharing plates made for passing around.
              </p>

              {/* Dojo placeholder → pill CTA */}
              <div className="space-y-4">
                <Link
                  href="/reservations"
                  className="pill-btn border border-cream/50 text-cream hover:bg-cream hover:text-brand-dark w-full justify-center py-4"
                >
                  · Reserve Now ·
                </Link>
                <p className="font-jost text-[0.75rem] text-cream/35 text-center">
                  For groups &amp; special occasions,{' '}
                  <Link href="/contact" className="underline underline-offset-4 hover:text-cream/60 transition-colors">
                    contact us directly
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </MotionSection>
      </div>
    </section>
  )
}
