import type { Metadata } from 'next'
import { pageMetadata } from '@/lib/metadata'
import PageHero from '@/components/shared/PageHero'
import HomepageContactSection from '@/components/home/HomepageContactSection'
import AboutQuoteSection from '@/components/about/AboutQuoteSection'
import BrandStorySection from '@/components/about/BrandStorySection'
import OriginStorySection from '@/components/about/OriginStorySection'
import ChefSection from '@/components/about/ChefSection'

export const metadata: Metadata = {
  title: pageMetadata.about.title,
  description: pageMetadata.about.description,
}

export default function AboutPage() {
  return (
    <>
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
      <ChefSection />
      <HomepageContactSection />
    </>
  )
}
