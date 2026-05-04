import type { Metadata } from 'next'
import PageHero from '@/components/shared/PageHero'

export const metadata: Metadata = {
  title: 'Terms & Conditions | East Lane',
  description: 'Terms & Conditions for East Lane Asian Bistro, Kingston upon Thames.',
  robots: { index: false, follow: false },
}

export default function TermsConditionsPage() {
  return (
    <>
      <PageHero
        label="Legal"
        title="Terms &"
        titleItalic="Conditions"
        subtitle="East Lane Asian Bistro, Kingston upon Thames"
      />
      <section className="bg-cream py-16 lg:py-24">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <p className="editorial-quote text-brand-dark/60 text-xl text-center">
            Our Terms & Conditions are being finalised and will be published here before launch.
          </p>
          <p className="font-jost text-sm text-brand-dark/45 text-center mt-6">
            For any enquiries in the meantime, please{' '}
            <a href="/contact" className="underline underline-offset-4 hover:text-terracotta transition-colors">
              contact us directly
            </a>.
          </p>
        </div>
      </section>
    </>
  )
}
