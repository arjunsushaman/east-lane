import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'
import { dmSerifDisplay, cormorantGaramond, jost, cubaoNarrow } from '@/lib/fonts'
import { defaultMetadata } from '@/lib/metadata'
import { localBusinessSchema } from '@/lib/schema'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import SmoothScrollProvider from '@/components/providers/SmoothScrollProvider'
import CustomCursor from '@/components/ui/CustomCursor'
import BookingWidgetProvider from '@/components/providers/BookingWidgetProvider'

export const metadata: Metadata = defaultMetadata

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en-GB"
      className={`${dmSerifDisplay.variable} ${cormorantGaramond.variable} ${jost.variable} ${cubaoNarrow.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        {/* Google Ads conversion tag */}
        <Script
          id="google-ads-tag"
          src="https://www.googletagmanager.com/gtag/js?id=AW-18196726861"
          strategy="afterInteractive"
        />
        <Script id="google-ads-tag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-18196726861');
          `}
        </Script>
      </head>
      <body className="antialiased min-h-full flex flex-col">
        <BookingWidgetProvider />
        <SmoothScrollProvider>
          <CustomCursor />
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  )
}
