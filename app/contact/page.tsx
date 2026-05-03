import type { Metadata } from 'next'
import { pageMetadata } from '@/lib/metadata'
import PageHero from '@/components/shared/PageHero'
import ContactForm from '@/components/home/ContactForm'
import MotionSection from '@/components/ui/MotionSection'
import { MapPin, Phone, Mail } from 'lucide-react'

export const metadata: Metadata = {
  title:       pageMetadata.contact.title,
  description: pageMetadata.contact.description,
}

function InstagramIcon({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
    </svg>
  )
}

const embedSrc =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2489.5!2d-0.2759!3d51.4122!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTHCsDI0JzQzLjkiTiAwwrAxNicxMy4yIlc!5e0!3m2!1sen!2suk!4v1!5m2!1sen!2suk'

export default function ContactPage() {
  return (
    <>
      <PageHero
        label="Contact"
        title="Find"
        titleItalic="Us"
        subtitle="10 Kingston Hill, Kingston upon Thames, KT2 7NH"
      />

      <section className="bg-cream-light py-16 lg:py-20">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <MotionSection>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

              {/* Left: details + map */}
              <div className="flex flex-col gap-8">
                <div>
                  <p className="label-caps text-terracotta mb-5">Get in Touch</p>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <MapPin size={14} className="text-terracotta mt-0.5 flex-shrink-0" />
                      <address className="not-italic font-jost text-[0.9375rem] leading-relaxed text-brand-dark/70">
                        10 Kingston Hill<br />Kingston upon Thames<br />KT2 7NH
                      </address>
                    </li>
                    <li className="flex items-center gap-3">
                      <Phone size={14} className="text-terracotta flex-shrink-0" />
                      <span className="font-jost text-[0.9375rem] text-brand-dark/65">[TBC]</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Mail size={14} className="text-terracotta flex-shrink-0" />
                      <span className="font-jost text-[0.9375rem] text-brand-dark/65">[TBC]</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <InstagramIcon size={14} />
                      <a href="https://www.instagram.com/eastlane_bistro" target="_blank" rel="noopener noreferrer"
                        className="font-jost text-[0.9375rem] text-brand-dark/65 hover:text-terracotta transition-colors underline underline-offset-4">
                        @eastlane_bistro
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="border-t border-cream-dark/40 pt-6">
                  <p className="label-caps text-brand-dark/35 mb-2" style={{ fontSize: '0.6rem' }}>Opening Hours</p>
                  <p className="editorial-quote text-brand-dark/55 text-lg">[To be confirmed]</p>
                </div>

                {/* Map */}
                <div className="overflow-hidden border border-cream-dark/40" style={{ height: '300px' }}>
                  <iframe src={embedSrc} width="100%" height="100%"
                    style={{ border: 0, display: 'block' }}
                    allowFullScreen loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="East Lane on Google Maps"
                  />
                </div>
              </div>

              {/* Right: form */}
              <div>
                <p className="label-caps text-terracotta mb-5">Send a Message</p>
                <h2 className="display-heading text-brand-dark text-3xl lg:text-4xl mb-8 leading-tight">
                  We&apos;d love to <em className="font-cormorant italic font-normal">hear from you</em>
                </h2>
                <ContactForm showPhone />
              </div>
            </div>
          </MotionSection>
        </div>
      </section>
    </>
  )
}
