'use client'

import { useRef } from 'react'
import Link from 'next/link'
import FAQAccordion from '@/components/ui/FAQAccordion'
import type { FAQCategory } from '@/components/ui/FAQAccordion'
import { useGSAP } from '@gsap/react'
import { gsap } from '@/lib/gsap'
import { openBookingWidget } from '@/lib/bookingWidget'

const faqData: FAQCategory[] = [
  {
    category: 'Location & Getting Here',
    items: [
      { question: 'Where is East Lane located?', answer: 'East Lane is at 10 Kingston Hill, Kingston upon Thames, KT2 7NH.' },
      { question: 'What are your opening hours?', answer: 'Tuesday to Friday: 5:00 pm – 10:30 pm. Saturday: 12:00 pm – 10:30 pm. Sunday: 12:00 pm – 9:30 pm. Closed on Mondays.' },
      { question: 'Is there parking nearby?', answer: '[TBC — to be confirmed before launch]' },
    ],
  },
  {
    category: 'Reservations & Dining',
    items: [
      { question: 'How do I book a table?', answer: 'Book online via our Reservations page. For large parties or special requests, please contact us directly.' },
      { question: 'Do you accept walk-ins?', answer: 'Yes, subject to availability. We recommend booking ahead, especially on weekends.' },
      { question: 'Can I book for a group or celebration?', answer: 'Absolutely — birthdays, anniversaries, Sunday lunches, corporate meals. Contact us to discuss your requirements.' },
      { question: 'Is there a minimum spend for large parties?', answer: '[TBC — to be confirmed before launch]' },
    ],
  },
  {
    category: 'Menu & Dietary Requirements',
    items: [
      { question: 'What kind of food do you serve?', answer: 'Pan-Asian sharing plates — from Vietnamese-inspired small plates to Korean grills, Thai curries, and more.' },
      { question: 'Do you have vegetarian or vegan options?', answer: '[TBC — to be confirmed before launch]' },
      { question: 'Do you cater for food allergies?', answer: 'Please inform us of any allergies when booking or on arrival. Allergen information is available on request.' },
      { question: 'Do you serve halal meat?', answer: '[TBC — to be confirmed before launch]' },
    ],
  },
  {
    category: 'Drinks',
    items: [
      { question: 'Do you have a cocktail menu?', answer: 'Yes — cocktails inspired by flavours from across the East, alongside wines and spirits.' },
      { question: 'Do you allow corkage?', answer: '[TBC — to be confirmed before launch]' },
    ],
  },
  {
    category: 'Payments & Policies',
    items: [
      { question: 'Is a service charge added?', answer: '[TBC — to be confirmed before launch]' },
      { question: 'Do you offer gift cards?', answer: '[TBC — to be confirmed before launch]' },
    ],
  },
]

export default function FaqsContentSection() {
  const sectionRef       = useRef<HTMLElement>(null)
  const accordionWrapRef = useRef<HTMLDivElement>(null)
  const footerRef        = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    // Each FAQ category block triggers independently as it enters the viewport
    const cats = Array.from(
      accordionWrapRef.current?.firstElementChild?.children ?? []
    ) as HTMLElement[]

    cats.forEach(cat => {
      gsap.from(cat, {
        opacity: 0,
        y: 32,
        duration: 0.7,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: cat,
          start: 'top 86%',
          toggleActions: 'play none none none',
        },
      })
    })

    // Footer "Still have questions?" text
    gsap.from('[data-faq-foot-text]', {
      opacity: 0,
      y: 14,
      duration: 0.6,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: footerRef.current,
        start: 'top 88%',
        toggleActions: 'play none none none',
      },
    })

    // Footer CTA buttons stagger in
    gsap.from('[data-faq-cta]', {
      opacity: 0,
      y: 14,
      scale: 0.96,
      stagger: 0.12,
      duration: 0.6,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: footerRef.current,
        start: 'top 85%',
        toggleActions: 'play none none none',
      },
    })
  }, { scope: sectionRef })

  return (
    <section ref={sectionRef} className="bg-cream py-16 lg:py-20">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div ref={accordionWrapRef}>
          <FAQAccordion categories={faqData} />
        </div>

        <div ref={footerRef} className="mt-16 pt-12 border-t border-cream-dark/40 text-center">
          <p data-faq-foot-text="" className="font-jost text-[0.9375rem] text-brand-dark/55 mb-8">
            Still have questions? We&apos;re happy to help.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              data-faq-cta=""
              href="/contact"
              className="pill-btn border border-brand-dark/35 text-brand-dark hover:bg-brand-dark hover:text-cream"
            >
              Contact Us
            </Link>
            <button
              data-faq-cta=""
              onClick={() => openBookingWidget()}
              className="pill-btn bg-amber border border-amber text-cream hover:bg-terracotta hover:border-terracotta"
            >
              Book a Table
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
