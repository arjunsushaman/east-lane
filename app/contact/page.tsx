import type { Metadata } from 'next'
import { pageMetadata } from '@/lib/metadata'
import PageHero from '@/components/shared/PageHero'
import ContactContent from '@/components/contact/ContactContent'
import MapSection from '@/components/contact/MapSection'

export const metadata: Metadata = {
  title:       pageMetadata.contact.title,
  description: pageMetadata.contact.description,
}

export default function ContactPage() {
  return (
    <>
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
