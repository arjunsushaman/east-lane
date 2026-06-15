import type { Metadata } from 'next'
import { pageMetadata } from '@/lib/metadata'
import { faqPageSchema, breadcrumbSchema } from '@/lib/schema'
import PageHero from '@/components/shared/PageHero'
import FaqsContentSection from '@/components/faqs/FaqsContentSection'

export const metadata: Metadata = {
  title:       pageMetadata.faqs.title,
  description: pageMetadata.faqs.description,
  alternates:  pageMetadata.faqs.alternates,
}

const crumbs = breadcrumbSchema([
  { name: 'Home', url: 'https://eastlane.uk' },
  { name: 'FAQs', url: 'https://eastlane.uk/faqs' },
])

export default function FAQsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(crumbs) }}
      />

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
