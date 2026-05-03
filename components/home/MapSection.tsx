import { MapPin } from 'lucide-react'
import MotionSection from '@/components/ui/MotionSection'

const address = '10 Kingston Hill, Kingston upon Thames, KT2 7NH'
const mapsSearch = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`
const embedSrc =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2489.5!2d-0.2759!3d51.4122!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTHCsDI0JzQzLjkiTiAwwrAxNicxMy4yIlc!5e0!3m2!1sen!2suk!4v1!5m2!1sen!2suk'

export default function MapSection() {
  return (
    <section className="bg-cream" id="location">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Map */}
          <div className="w-full overflow-hidden" style={{ minHeight: '420px' }}>
            <iframe
              src={embedSrc}
              width="100%" height="100%"
              style={{ border: 0, display: 'block', minHeight: '420px' }}
              allowFullScreen loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="East Lane location on Google Maps"
            />
          </div>

          {/* Info */}
          <MotionSection className="flex flex-col justify-center px-10 lg:px-16 py-14">
            <p className="label-caps text-terracotta mb-4">Find Us</p>
            <h2 className="display-heading text-brand-dark text-4xl lg:text-5xl mb-8">
              Visit <em className="font-cormorant italic font-normal">East Lane</em>
            </h2>

            <div className="flex items-start gap-3 mb-6">
              <MapPin size={16} className="text-terracotta mt-1 flex-shrink-0" />
              <address className="not-italic font-jost text-base leading-relaxed text-brand-dark/70">
                10 Kingston Hill<br />Kingston upon Thames<br />KT2 7NH
              </address>
            </div>

            <div className="flex flex-col gap-2 mb-8 font-jost text-sm text-brand-dark/50">
              <span><span className="text-brand-dark/30 mr-2 label-caps" style={{fontSize:'0.6rem'}}>Phone</span>[TBC]</span>
              <span><span className="text-brand-dark/30 mr-2 label-caps" style={{fontSize:'0.6rem'}}>Email</span>[TBC]</span>
            </div>

            <a
              href={mapsSearch}
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 label-caps text-brand-dark hover:text-terracotta transition-colors duration-200 group self-start"
            >
              Get Directions
              <span className="w-6 h-px bg-current transition-all duration-300 group-hover:w-10" />
            </a>
          </MotionSection>
        </div>
      </div>
    </section>
  )
}
