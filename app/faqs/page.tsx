import type { Metadata } from 'next'
import { pageMetadata } from '@/lib/metadata'
import PageHero from '@/components/shared/PageHero'
import FaqsContentSection from '@/components/faqs/FaqsContentSection'

export const metadata: Metadata = {
  title:       pageMetadata.faqs.title,
  description: pageMetadata.faqs.description,
}

export default function FAQsPage() {
  return (
    <>
      <PageHero
        label="FAQs"
        title="Frequently Asked"
        titleItalic="Questions"
        subtitle="Everything you need to know about East Lane."
      />
      <FaqsContentSection />
    </>
  )
}
