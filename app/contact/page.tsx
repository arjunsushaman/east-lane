import type { Metadata } from 'next'
import { pageMetadata } from '@/lib/metadata'
import PageHero from '@/components/shared/PageHero'
import ContactForm from '@/components/home/ContactForm'
import MotionSection from '@/components/ui/MotionSection'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'

export const metadata: Metadata = {
  title:       pageMetadata.contact.title,
  description: pageMetadata.contact.description,
}

function InstagramIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
    </svg>
  )
}

const contactDetails = [
  {
    icon: <MapPin size={13} className="text-terracotta flex-shrink-0 mt-[3px]" />,
    label: 'Address',
    value: (
      <address className="not-italic font-jost text-[0.9375rem] leading-relaxed text-brand-dark/75">
        10 Kingston Hill<br />Kingston upon Thames, KT2 7NH
      </address>
    ),
  },
  {
    icon: <Phone size={13} className="text-terracotta flex-shrink-0 mt-[3px]" />,
    label: 'Phone',
    value: <span className="font-jost text-[0.9375rem] text-brand-dark/50">[To be confirmed]</span>,
  },
  {
    icon: <Mail size={13} className="text-terracotta flex-shrink-0 mt-[3px]" />,
    label: 'Email',
    value: <span className="font-jost text-[0.9375rem] text-brand-dark/50">[To be confirmed]</span>,
  },
  {
    icon: <Clock size={13} className="text-terracotta flex-shrink-0 mt-[3px]" />,
    label: 'Opening Hours',
    value: <span className="editorial-quote text-brand-dark/55 text-base">[To be confirmed]</span>,
  },
  {
    icon: <InstagramIcon />,
    label: 'Instagram',
    value: (
      <a
        href="https://www.instagram.com/eastlane_bistro"
        target="_blank"
        rel="noopener noreferrer"
        className="font-jost text-[0.9375rem] text-brand-dark/65 hover:text-terracotta transition-colors duration-200 underline underline-offset-4"
      >
        @eastlane_bistro
      </a>
    ),
  },
]

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

      {/* ── Contact details + Form ── */}
      <section className="bg-cream py-16 lg:py-24">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <MotionSection>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-24 items-start">

              {/* ── Left: contact details ── */}
              <div>
                <p className="label-caps text-terracotta mb-8">Contact Details</p>

                <dl className="flex flex-col">
                  {contactDetails.map((row, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-4 py-5 border-b border-cream-dark/30 last:border-0"
                    >
                      <span className="mt-[2px]">{row.icon}</span>
                      <div className="flex-1 min-w-0">
                        <dt
                          className="label-caps text-brand-dark/30 mb-1.5"
                          style={{ fontSize: '0.58rem' }}
                        >
                          {row.label}
                        </dt>
                        <dd>{row.value}</dd>
                      </div>
                    </div>
                  ))}
                </dl>
              </div>

              {/* ── Right: form ── */}
              <div>
                <p className="label-caps text-terracotta mb-5">Send a Message</p>
                <h2 className="display-heading text-brand-dark text-3xl lg:text-4xl mb-10 leading-tight">
                  We&apos;d love to{' '}
                  <em className="font-cormorant italic font-normal">hear from you</em>
                </h2>
                <ContactForm showPhone />
              </div>

            </div>
          </MotionSection>
        </div>
      </section>

      {/* ── Cinematic map section ── */}
      <section
        className="relative overflow-hidden"
        style={{ height: 'clamp(420px, 55vw, 560px)' }}
        aria-label="East Lane location on map"
      >
        {/* Map iframe — slight desaturation to harmonise with warm palette */}
        <iframe
          src={embedSrc}
          className="absolute inset-0 w-full h-full"
          style={{ border: 0, filter: 'grayscale(25%) contrast(1.04) saturate(0.82)' }}
          loading="lazy"
          title="East Lane Asian Bistro on Google Maps"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
        />

        {/* Gradient overlay — brand-dark → transparent left-to-right */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'linear-gradient(100deg, rgba(30,17,11,0.88) 0%, rgba(30,17,11,0.55) 38%, rgba(30,17,11,0.0) 68%)',
          }}
          aria-hidden="true"
        />

        {/* Info panel */}
        <MotionSection className="absolute inset-y-0 left-0 flex items-center px-8 sm:px-12 lg:px-16 xl:px-24 pointer-events-none">
          <div className="pointer-events-auto max-w-xs lg:max-w-sm">
            <p className="label-caps text-terracotta/80 mb-4 tracking-[0.22em]">Visit Us</p>

            <h2 className="display-heading text-cream leading-tight mb-5"
              style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.75rem)' }}>
              East Lane
              <span className="block font-cormorant italic font-normal text-cream/65"
                style={{ fontSize: 'clamp(1.1rem, 2.2vw, 1.75rem)' }}>
                Asian Bistro, Kingston
              </span>
            </h2>

            <address className="not-italic font-jost text-sm text-cream/60 leading-relaxed mb-8">
              10 Kingston Hill<br />
              Kingston upon Thames<br />
              KT2 7NH
            </address>

            <a
              href="https://www.google.com/maps/dir/?api=1&destination=10+Kingston+Hill+Kingston+upon+Thames+KT2+7NH"
              target="_blank"
              rel="noopener noreferrer"
              className="pill-btn border border-cream/55 text-cream hover:bg-cream hover:text-brand-dark transition-colors duration-300"
              aria-label="Get directions to East Lane on Google Maps"
            >
              · Get Directions ·
            </a>
          </div>
        </MotionSection>
      </section>
    </>
  )
}
