import type { Metadata } from 'next'
import './globals.css'
import { dmSerifDisplay, cormorantGaramond, jost } from '@/lib/fonts'
import { defaultMetadata } from '@/lib/metadata'
import { localBusinessSchema } from '@/lib/schema'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

export const metadata: Metadata = defaultMetadata

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${dmSerifDisplay.variable} ${cormorantGaramond.variable} ${jost.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body className="antialiased min-h-full flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
