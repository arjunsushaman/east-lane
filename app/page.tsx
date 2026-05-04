import type { Metadata } from 'next'
import { pageMetadata } from '@/lib/metadata'
import HeroSection            from '@/components/home/HeroSection'
import IntroSection           from '@/components/home/IntroSection'
import FeastImage             from '@/components/home/FeastImage'
import EditorialFeature       from '@/components/home/EditorialFeature'
import ReservationCTA         from '@/components/home/ReservationCTA'
import HoursSection           from '@/components/home/HoursSection'
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

      {/* 4 — Editorial: Menu tease (large photo left + text right) */}
      <EditorialFeature
        label="The Menu"
        heading="One Table,"
        headingItalic="Every Craving."
        body="From the hawker lanes of Vietnam to the smoky grills of Korea and the spice markets of Thailand. Every dish is designed to share. Order a little of everything."
        linkLabel="Explore menus"
        linkHref="/menu"
        imageAlt="East Lane sharing plates"
        imageSrc="/images/editorial-menu.jpg"
        bgClass="bg-cream"
      />

      {/* 5 — Reservation CTA block */}
      <ReservationCTA />

      {/* 6 — Editorial: About / Chef story (photo right) */}
      <EditorialFeature
        label="About Us"
        heading="A Slice of Every"
        headingItalic="Country, on One Table."
        body="East Lane is Chef Vin's answer to the food that struck a chord — the kind of cooking where everyone at the table gets a bite of everything. A menu curated so every plate tells a story of a place, a journey, a moment."
        linkLabel="Our story"
        linkHref="/about"
        imageAlt="Chef Vin at East Lane"
        imageSrc="/images/editorial-chef.jpg"
        imageRight
        bgClass="bg-cream"
      />

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
