import type { Metadata } from 'next'
import { pageMetadata } from '@/lib/metadata'
import { breadcrumbSchema } from '@/lib/schema'
import PageHero from '@/components/shared/PageHero'
import HomepageContactSection from '@/components/home/HomepageContactSection'
import AboutQuoteSection from '@/components/about/AboutQuoteSection'
import BrandStorySection from '@/components/about/BrandStorySection'
import OriginStorySection from '@/components/about/OriginStorySection'
// import ChefSection from '@/components/about/ChefSection'

export const metadata: Metadata = {
  title:       pageMetadata.about.title,
  description: pageMetadata.about.description,
  alternates:  pageMetadata.about.alternates,
}

const crumbs = breadcrumbSchema([
  { name: 'Home', url: 'https://eastlane.uk' },
  { name: 'About', url: 'https://eastlane.uk/about' },
])

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(crumbs) }}
      />

      <PageHero
        label="About Us"
        title="East Lane"
        titleItalic="Asian Bistro, Kingston upon Thames"
        subtitle="One address, every craving."
        cubaoTitle
      />
      <AboutQuoteSection />
      <BrandStorySection />
      <OriginStorySection />
      {/* <ChefSection /> */}
      <HomepageContactSection />
    </>
  )
}
