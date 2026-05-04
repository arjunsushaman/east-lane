import ContactForm from '@/components/home/ContactForm'
import MotionSection from '@/components/ui/MotionSection'
import Link from 'next/link'

const reasons = [
  { label: 'Group Bookings',        desc: '8+ guests or private dining enquiries' },
  { label: 'Events & Celebrations', desc: 'Birthdays, anniversaries, corporate meals' },
  { label: 'General Enquiries',     desc: 'Menu, accessibility, or anything else' },
]

export default function HomepageContactSection() {
  return (
    <section className="bg-cream py-20 lg:py-28" id="contact">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <MotionSection>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

            {/* ── Left column ── */}
            <div>
              <p className="label-caps text-terracotta mb-5">Get in Touch</p>
              <h2 className="display-heading text-brand-dark text-[clamp(2rem,4vw,3.25rem)] mb-6 leading-tight">
                Say <em className="font-cormorant italic font-normal">Hello</em>
              </h2>
              <p className="font-jost text-[0.9375rem] leading-relaxed text-brand-dark/60 mb-8 max-w-sm">
                Questions, group bookings, or special occasions — we'd love to hear from you.
                We aim to get back within 24 hours.
              </p>

              <div className="h-px w-10 bg-terracotta/40 mb-8" />

              <ul className="space-y-5 mb-10">
                {reasons.map(r => (
                  <li key={r.label} className="flex items-start gap-3.5">
                    <span className="mt-2 w-1 h-1 rounded-full bg-terracotta flex-shrink-0" />
                    <div>
                      <p className="font-jost font-medium text-sm text-brand-dark leading-snug">{r.label}</p>
                      <p className="font-jost text-sm text-brand-dark/45 mt-0.5">{r.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="pt-7 border-t border-cream-dark/40">
                <p className="font-jost text-sm text-brand-dark/45 mb-4">Prefer to book online?</p>
                <Link
                  href="/reservations"
                  className="pill-btn border border-brand-dark/30 text-brand-dark hover:bg-brand-dark hover:text-cream"
                >
                  · Reserve a Table ·
                </Link>
              </div>
            </div>

            {/* ── Right: form ── */}
            <ContactForm />
          </div>
        </MotionSection>
      </div>
    </section>
  )
}
