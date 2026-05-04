import type { Metadata } from 'next'
import { pageMetadata } from '@/lib/metadata'
import Image from 'next/image'
import PageHero from '@/components/shared/PageHero'
import MotionSection, { MotionStagger, MotionChild } from '@/components/ui/MotionSection'
import HomepageContactSection from '@/components/home/HomepageContactSection'
import Link from 'next/link'

export const metadata: Metadata = {
  title:       pageMetadata.about.title,
  description: pageMetadata.about.description,
}

export default function AboutPage() {
  return (
    <>
      <PageHero
        label="About Us"
        title="East Lane –"
        titleItalic="Asian Bistro, Kingston upon Thames"
        subtitle="One address, every craving."
      />

      {/* Opening quote — full-width editorial */}
      <section className="bg-cream py-20">
        <MotionSection className="max-w-3xl mx-auto px-6 text-center">
          <p className="editorial-quote text-brand-dark text-[clamp(1.3rem,2.8vw,1.9rem)] leading-relaxed">
            East Lane is Kingston's melting pot of the East — one address, every craving.
            From the smoky street stalls of Thailand to the bold, layered flavours of Korea,
            we've brought the best of Asia's culinary map to SW London.
          </p>
        </MotionSection>
      </section>

      {/* Split: large photo left + brand story right */}
      <section className="bg-cream overflow-hidden">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Photo */}
            <div className="relative overflow-hidden" style={{ minHeight: '520px' }}>
              <Image
                src="/images/about-interior.jpg"
                alt="East Lane restaurant interior"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            {/* Text */}
            <MotionSection className="flex flex-col justify-center px-10 lg:px-16 py-16">
              <p className="label-caps text-terracotta mb-5">The Story</p>
              <h2 className="display-heading text-brand-dark text-[clamp(1.8rem,3.5vw,2.75rem)] mb-8 leading-tight">
                From Street Stalls<br />
                <em className="font-cormorant italic font-normal">to Kingston</em>
              </h2>
              <MotionStagger className="space-y-5">
                {[
                  'At the heart of it is Chef Vin. A natural across cuisines, it was the food of the East that truly struck a chord — the kind of cooking where everyone at the table gets a bite of everything, where dishes are simple on the surface yet layered beneath, and where great ingredients are allowed to speak for themselves.',
                  'Raised with a deep reverence for home cooking — shaped by his mother and grandmother — he left with a backpack and a curiosity that took him through the night markets of Vietnam, the hawker lanes of Thailand, and everywhere in between.',
                  'What struck him wasn\'t complexity. It was the opposite: the magic of simple things, done with soul.',
                ].map((para, i) => (
                  <MotionChild key={i}>
                    <p className="font-jost text-[0.9375rem] leading-[1.8] text-brand-dark/65">{para}</p>
                  </MotionChild>
                ))}
              </MotionStagger>
            </MotionSection>
          </div>
        </div>
      </section>

      {/* Chef section — text left, photo right */}
      <section className="bg-cream overflow-hidden">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Text */}
            <MotionSection className="flex flex-col justify-center px-10 lg:px-16 py-16 order-2 lg:order-1">
              <p className="label-caps text-terracotta mb-5">Meet the Chef</p>
              <h2 className="display-heading text-brand-dark text-[clamp(1.8rem,3.5vw,2.75rem)] mb-8 leading-tight">
                Chef <em className="font-cormorant italic font-normal">Vin</em>
              </h2>
              <p className="font-jost text-[0.9375rem] leading-[1.8] text-brand-dark/65 mb-6">
                East Lane is his answer to that. A menu curated so every plate tells a story of
                a place, a journey, a moment. A slice of every country, on one table.
              </p>
              <p className="font-jost text-[0.9375rem] leading-[1.8] text-brand-dark/65 mb-10">
                We've built a space that works as hard as the food does — for birthday dinners
                and lazy Sunday lunches, date nights and big family gatherings. Sharing plates
                made for passing around, drinks that take you straight back to our favourite
                corners of the East.
              </p>
              <Link
                href="/reservations"
                className="pill-btn border border-brand-dark/40 text-brand-dark hover:bg-brand-dark hover:text-cream self-start"
              >
                · Reserve Now ·
              </Link>
            </MotionSection>

            {/* Chef photo */}
            <div className="relative overflow-hidden order-1 lg:order-2" style={{ minHeight: '460px' }}>
              <Image
                src="/images/chef-portrait.jpg"
                alt="Chef Vin at East Lane"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      <HomepageContactSection />
    </>
  )
}
