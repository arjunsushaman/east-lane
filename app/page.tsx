import type { Metadata } from 'next'
import { pageMetadata } from '@/lib/metadata'
import HeroSection            from '@/components/home/HeroSection'
import IntroSection           from '@/components/home/IntroSection'
import FeastImage             from '@/components/home/FeastImage'
import EditorialFeature       from '@/components/home/EditorialFeature'
import ReservationCTA         from '@/components/home/ReservationCTA'
import HoursSection           from '@/components/home/HoursSection'
import MarqueeStrip           from '@/components/home/MarqueeStrip'
import MapSection             from '@/components/home/MapSection'
import HomepageContactSection from '@/components/home/HomepageContactSection'
import NewsletterSection      from '@/components/home/NewsletterSection'

export const metadata: Metadata = {
  title:       pageMetadata.home.title,
  description: pageMetadata.home.description,
}

export default function HomePage() {
  return (
    <>
      {/* 1 — Full-screen cinematic hero */}
      <HeroSection />

      {/* 2 — SEO intro paragraph (live HTML — critical for Google indexing) */}
      <IntroSection />

      {/* 3 — Full-bleed feast image */}
      <FeastImage />

      {/* 4 — Marquee strip */}
      <MarqueeStrip />

      {/* 5 — Editorial: Menu tease (large photo left + text right) */}
      <EditorialFeature
        label="The Menu"
        body="From the hawker lanes of Vietnam to the smoky grills of Korea and the spice markets of Thailand. Every dish is designed to share. Order a little of everything."
        linkLabel="Explore menus"
        linkHref="/menu"
        imageAlt="East Lane sharing plates"
        imageSrc="/images/editorial-menu.jpg"
        bgClass="bg-olive"
        dark
      />

      {/* 5 — Reservation CTA block */}
      <ReservationCTA />

      {/* 7 — Opening hours */}
      <HoursSection />

      {/* 8 — Location + Google Map */}
      <MapSection />

      {/* 9 — Contact form */}
      <HomepageContactSection />

      {/* 10 — Newsletter */}
      <NewsletterSection />
    </>
  )
}
