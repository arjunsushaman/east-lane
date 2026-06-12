import Link from 'next/link'
import Image from 'next/image'
import { MapPin, Phone, Mail } from 'lucide-react'

function InstagramIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
    </svg>
  )
}

function FacebookIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
    </svg>
  )
}

const navLinks = [
  { label: 'Menu',         href: '/menu'         },
  { label: 'About',        href: '/about'        },
  { label: 'FAQs',         href: '/faqs'         },
  { label: 'Reservations', href: '/reservations' },
  { label: 'Contact',      href: '/contact'      },
]

export default function Footer() {
  return (
    <footer className="bg-cream" aria-label="Site footer">
      {/* Top rule */}
      <div className="h-px bg-cream-dark/50" />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 pt-16 pb-10">

        {/* Centred logo */}
        <div className="flex justify-center mb-14">
          <Link href="/" aria-label="East Lane — home">
            <Image
              src="/images/logo-wordmark.png"
              alt="East Lane Asian Bistro"
              width={400} height={160}
              className="h-32 lg:h-44 w-auto opacity-85 hover:opacity-100 transition-opacity duration-200"
            />
          </Link>
        </div>

        {/* Three columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16 pb-12 border-b border-cream-dark/40">

          {/* Col 1 — Address */}
          <div>
            <p className="label-caps text-brand-dark/40 mb-5">Location</p>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5">
                <MapPin size={13} className="text-terracotta mt-0.5 flex-shrink-0" />
                <address className="not-italic font-jost text-sm leading-relaxed text-brand-dark/65">
                  10 Kingston Hill<br />
                  Kingston upon Thames<br />
                  KT2 7NH
                </address>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone size={13} className="text-terracotta flex-shrink-0" />
                <a href="tel:02031615960" className="font-jost text-sm text-brand-dark/60 hover:text-terracotta transition-colors duration-200">02031615960</a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail size={13} className="text-terracotta flex-shrink-0" />
                <a href="mailto:hello@eastlane.uk" className="font-jost text-sm text-brand-dark/60 hover:text-terracotta transition-colors duration-200">hello@eastlane.uk</a>
              </li>
            </ul>
          </div>

          {/* Col 2 — Hours */}
          <div>
            <p className="label-caps text-brand-dark/40 mb-5">Opening Hours</p>
            <ul className="space-y-1.5 font-jost text-sm text-brand-dark/60 leading-relaxed">
              <li><span className="text-brand-dark/35">Mon</span> — Closed</li>
              <li><span className="text-brand-dark/35">Tue – Fri</span> — 5:00 pm – 10:30 pm</li>
              <li><span className="text-brand-dark/35">Sat</span> — 12:00 pm – 10:30 pm</li>
              <li><span className="text-brand-dark/35">Sun</span> — 12:00 pm – 9:30 pm</li>
            </ul>
            <div className="mt-6 flex flex-col gap-3">
              <a
                href="https://www.instagram.com/eastlanekingston"
                target="_blank" rel="noopener noreferrer"
                aria-label="Follow East Lane on Instagram"
                className="inline-flex items-center gap-2 text-brand-dark/50 hover:text-terracotta transition-colors duration-200"
              >
                <InstagramIcon size={15} />
                <span className="font-jost text-sm">@eastlanekingston</span>
              </a>
              <a
                href="https://www.facebook.com/eastlanebistro"
                target="_blank" rel="noopener noreferrer"
                aria-label="Follow East Lane on Facebook"
                className="inline-flex items-center gap-2 text-brand-dark/50 hover:text-terracotta transition-colors duration-200"
              >
                <FacebookIcon size={15} />
                <span className="font-jost text-sm">eastlanebistro</span>
              </a>
            </div>
          </div>

          {/* Col 3 — Nav + Legal */}
          <div>
            <p className="label-caps text-brand-dark/40 mb-5">Navigate</p>
            <nav aria-label="Footer navigation">
              <ul className="space-y-2.5">
                {navLinks.map(l => (
                  <li key={l.href}>
                    <Link href={l.href} className="font-jost text-sm text-brand-dark/60 hover:text-terracotta transition-colors duration-200">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-7 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-jost text-xs text-brand-dark/35">
            © {new Date().getFullYear()} East Lane. All rights reserved.
          </p>
          <div className="flex gap-5">
            {[
              { label: 'Privacy Policy',     href: '/privacy-policy'   },
              { label: 'Terms & Conditions', href: '/terms-conditions'  },
              { label: 'FAQ',                href: '/faqs'              },
            ].map(l => (
              <Link key={l.href} href={l.href}
                className="font-jost text-xs text-brand-dark/35 hover:text-brand-dark/60 transition-colors duration-200">
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
