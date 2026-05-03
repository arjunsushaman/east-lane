import { MapPin } from 'lucide-react'
import MotionSection from '@/components/ui/MotionSection'

const address    = '10 Kingston Hill, Kingston upon Thames, KT2 7NH'
const mapsSearch = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(address)}`
const embedSrc   =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2489.5!2d-0.2759!3d51.4122!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTHCsDI0JzQzLjkiTiAwwrAxNicxMy4yIlc!5e0!3m2!1sen!2suk!4v1!5m2!1sen!2suk'

export default function MapSection() {
  return (
    <section className="bg-cream-light overflow-hidden" id="location">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2">

          {/* ── Map iframe ── */}
          <div
            className="w-full overflow-hidden"
            style={{ minHeight: 'clamp(360px, 48vw, 520px)' }}
          >
            <iframe
              src={embedSrc}
              width="100%"
              height="100%"
              style={{
                border: 0,
                display: 'block',
                minHeight: 'clamp(360px, 48vw, 520px)',
                filter: 'grayscale(18%) contrast(1.04) saturate(0.85)',
              }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="East Lane location on Google Maps"
            />
          </div>

          {/* ── Info panel ── */}
          <MotionSection className="flex flex-col justify-center px-10 lg:px-14 xl:px-20 py-14">

            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-6 bg-terracotta/50" />
              <p className="label-caps text-terracotta">Find Us</p>
            </div>

            <h2 className="display-heading text-brand-dark text-[clamp(2rem,3.8vw,3.25rem)] mb-8 leading-tight">
              Visit{' '}
              <em className="font-cormorant italic font-normal">East Lane</em>
            </h2>

            <div className="flex items-start gap-3 mb-8">
              <MapPin size={14} className="text-terracotta mt-1 flex-shrink-0" />
              <address className="not-italic font-jost text-[0.9375rem] leading-relaxed text-brand-dark/70">
                10 Kingston Hill<br />
                Kingston upon Thames<br />
                KT2 7NH
              </address>
            </div>

            {/* Contact detail rows */}
            <div className="flex flex-col gap-3 mb-10 border-t border-cream-dark/30 pt-6">
              <div className="flex items-center justify-between">
                <span className="label-caps text-brand-dark/30" style={{ fontSize: '0.58rem' }}>Phone</span>
                <span className="font-jost text-sm text-brand-dark/45">[TBC]</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="label-caps text-brand-dark/30" style={{ fontSize: '0.58rem' }}>Email</span>
                <span className="font-jost text-sm text-brand-dark/45">[TBC]</span>
              </div>
            </div>

            {/* Pill CTA — proper touch target */}
            <a
              href={mapsSearch}
              target="_blank"
              rel="noopener noreferrer"
              className="pill-btn border border-brand-dark/35 text-brand-dark hover:bg-brand-dark hover:text-cream-light transition-colors duration-300 self-start"
              aria-label="Get directions to East Lane on Google Maps"
            >
              · Get Directions ·
            </a>

          </MotionSection>
        </div>
      </div>
    </section>
  )
}
