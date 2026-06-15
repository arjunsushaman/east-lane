import type { Metadata } from 'next'
import { pageMetadata } from '@/lib/metadata'
import { breadcrumbSchema } from '@/lib/schema'
import PageHero from '@/components/shared/PageHero'
import ReservationsContent from '@/components/reservations/ReservationsContent'

export const metadata: Metadata = {
  title:       pageMetadata.reservations.title,
  description: pageMetadata.reservations.description,
  alternates:  pageMetadata.reservations.alternates,
}

const crumbs = breadcrumbSchema([
  { name: 'Home', url: 'https://eastlanekingston.co.uk' },
  { name: 'Reserve a Table', url: 'https://eastlanekingston.co.uk/reservations' },
])

export default function ReservationsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(crumbs) }}
      />

      <PageHero
        label="Online Booking"
        title="Reserve a"
        titleItalic="Table"
        subtitle="Book your seat at Kingston's bistro. Sharing plates made for passing around."
      />
      <ReservationsContent />
    </>
  )
}
