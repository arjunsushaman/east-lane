'use client'

import { useRef } from 'react'
import { Phone, Mail, Clock } from 'lucide-react'
import { useGSAP } from '@gsap/react'
import { gsap } from '@/lib/gsap'
import ContactForm from '@/components/home/ContactForm'

function InstagramIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}

const contactRows = [
  {
    icon: <Phone size={13} className="text-terracotta flex-shrink-0 mt-[3px]" />,
    label: 'Phone',
    value: <a href="tel:+447533423636" className="font-jost text-[0.9375rem] text-brand-dark/75 hover:text-terracotta transition-colors duration-200">+44 7533 423636</a>,
  },
  {
    icon: <Mail size={13} className="text-terracotta flex-shrink-0 mt-[3px]" />,
    label: 'Email',
    value: <a href="mailto:hello@eastlane.uk" className="font-jost text-[0.9375rem] text-brand-dark/75 hover:text-terracotta transition-colors duration-200">hello@eastlane.uk</a>,
  },
  {
    icon: <Clock size={13} className="text-terracotta flex-shrink-0 mt-[3px]" />,
    label: 'Opening Hours',
    value: (
      <ul className="font-jost text-[0.9375rem] text-brand-dark/75 space-y-1 leading-snug">
        <li><span className="text-brand-dark/40">Mon</span> — Closed</li>
        <li><span className="text-brand-dark/40">Tue – Fri</span> — 5:00 pm – 10:30 pm</li>
        <li><span className="text-brand-dark/40">Sat</span> — 12:00 pm – 10:30 pm</li>
        <li><span className="text-brand-dark/40">Sun</span> — 12:00 pm – 9:30 pm</li>
      </ul>
    ),
  },
  {
    icon: <InstagramIcon />,
    label: 'Instagram',
    value: (
      <a
        href="https://www.instagram.com/eastlanekingston"
        target="_blank"
        rel="noopener noreferrer"
        className="font-jost text-[0.9375rem] text-brand-dark/65 hover:text-terracotta transition-colors duration-200 underline underline-offset-4"
      >
        @eastlanekingston
      </a>
    ),
  },
]

export default function ContactContent() {
  const sectionRef     = useRef<HTMLElement>(null)
  const detailsColRef  = useRef<HTMLDivElement>(null)
  const formColRef     = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    // "Contact Details" label slides from left
    gsap.from('[data-cd-label]', {
      opacity: 0,
      x: -16,
      duration: 0.6,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: detailsColRef.current,
        start: 'top 82%',
        toggleActions: 'play none none none',
      },
    })

    // Each contact detail row staggers up
    gsap.from('[data-cd-row]', {
      opacity: 0,
      y: 18,
      stagger: 0.08,
      duration: 0.6,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: detailsColRef.current,
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
    })

    // "Send a Message" label slides from right
    gsap.from('[data-form-label]', {
      opacity: 0,
      x: 16,
      duration: 0.6,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: formColRef.current,
        start: 'top 82%',
        toggleActions: 'play none none none',
      },
    })

    // Heading lines: mask reveal
    gsap.from('[data-form-line]', {
      yPercent: 105,
      stagger: 0.12,
      duration: 0.85,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: formColRef.current,
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
    })

    // Contact form wrapper fades up
    gsap.from('[data-contact-form]', {
      opacity: 0,
      y: 20,
      duration: 0.7,
      ease: 'power2.out',
      delay: 0.2,
      scrollTrigger: {
        trigger: formColRef.current,
        start: 'top 78%',
        toggleActions: 'play none none none',
      },
    })
  }, { scope: sectionRef })

  return (
    <section ref={sectionRef} className="bg-cream py-16 lg:py-24">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-24 items-start">

          {/* Left: contact details */}
          <div ref={detailsColRef}>
            <p data-cd-label="" className="label-caps text-terracotta mb-8">Contact Details</p>
            <dl className="flex flex-col">
              {contactRows.map((row, i) => (
                <div
                  key={i}
                  data-cd-row=""
                  className="flex items-start gap-4 py-5 border-b border-cream-dark/30 last:border-0"
                >
                  <span className="mt-[2px]">{row.icon}</span>
                  <div className="flex-1 min-w-0">
                    <dt className="label-caps text-brand-dark/30 mb-1.5" style={{ fontSize: '0.58rem' }}>
                      {row.label}
                    </dt>
                    <dd>{row.value}</dd>
                  </div>
                </div>
              ))}
            </dl>
          </div>

          {/* Right: form */}
          <div ref={formColRef}>
            <p data-form-label="" className="label-caps text-terracotta mb-5">Send a Message</p>
            <h2 className="display-heading text-brand-dark text-3xl lg:text-4xl mb-10 leading-tight">
              <span className="block overflow-hidden pb-1">
                <span className="block" data-form-line="">We&apos;d love to</span>
              </span>
              <span className="block overflow-hidden pb-1">
                <em className="block font-cormorant italic font-normal" data-form-line="">
                  hear from you
                </em>
              </span>
            </h2>
            <div data-contact-form="">
              <ContactForm showPhone />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
