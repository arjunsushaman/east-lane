import type { Metadata } from 'next'
import { pageMetadata } from '@/lib/metadata'
import { breadcrumbSchema } from '@/lib/schema'
import PageHero from '@/components/shared/PageHero'
import ContactContent from '@/components/contact/ContactContent'
import MapSection from '@/components/contact/MapSection'

export const metadata: Metadata = {
  title:       pageMetadata.contact.title,
  description: pageMetadata.contact.description,
  alternates:  pageMetadata.contact.alternates,
}

const crumbs = breadcrumbSchema([
  { name: 'Home', url: 'https://eastlane.uk' },
  { name: 'Contact', url: 'https://eastlane.uk/contact' },
])

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(crumbs) }}
      />

      <PageHero
        label="Contact"
        title="Find"
        titleItalic="Us"
      />
      <ContactContent />
      <MapSection />
    </>
  )
}
