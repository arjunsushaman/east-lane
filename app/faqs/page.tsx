import type { Metadata } from 'next'
import { pageMetadata } from '@/lib/metadata'
import PageHero from '@/components/shared/PageHero'
import FAQAccordion from '@/components/ui/FAQAccordion'
import type { FAQCategory } from '@/components/ui/FAQAccordion'
import MotionSection from '@/components/ui/MotionSection'
import Link from 'next/link'

export const metadata: Metadata = {
  title:       pageMetadata.faqs.title,
  description: pageMetadata.faqs.description,
}

const faqData: FAQCategory[] = [
  {
    category: 'Location & Getting Here',
    items: [
      { question: 'Where is East Lane located?', answer: 'East Lane is at 10 Kingston Hill, Kingston upon Thames, KT2 7NH.' },
      { question: 'What are your opening hours?', answer: '[TBC — to be confirmed before launch]' },
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

export default function FAQsPage() {
  return (
    <>
      <PageHero
        label="FAQs"
        title="Frequently Asked"
        titleItalic="Questions"
        subtitle="Everything you need to know about East Lane."
      />

      <section className="bg-cream-light py-16 lg:py-20">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <MotionSection>
            <FAQAccordion categories={faqData} />
          </MotionSection>

          <div className="mt-16 pt-12 border-t border-cream-dark/40 text-center">
            <p className="font-jost text-[0.9375rem] text-brand-dark/55 mb-8">
              Still have questions? We&apos;re happy to help.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact" className="pill-btn border border-brand-dark/35 text-brand-dark hover:bg-brand-dark hover:text-cream-light">
                Contact Us
              </Link>
              <Link href="/reservations" className="pill-btn bg-terracotta border border-terracotta text-cream hover:bg-terracotta-dark hover:border-terracotta-dark">
                Book a Table
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
