import type { Metadata } from 'next'
import { pageMetadata } from '@/lib/metadata'
import PageHero from '@/components/shared/PageHero'
import ReservationsContent from '@/components/reservations/ReservationsContent'

export const metadata: Metadata = {
  title: pageMetadata.reservations.title,
  description: pageMetadata.reservations.description,
}

export default function ReservationsPage() {
  return (
    <>
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
