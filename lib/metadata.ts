import type { Metadata } from 'next'

const siteUrl = 'https://eastlanekingston.co.uk'

export const defaultMetadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'East Lane – Pan-Asian Bistro, Kingston upon Thames',
    template: '%s | East Lane',
  },
  description:
    "Kingston's melting pot of the East. Pan-Asian sharing plates from Thailand, Korea & Vietnam. Book a table at East Lane Asian Bistro, Kingston upon Thames.",
  keywords: [
    'Pan-Asian restaurant Kingston',
    'Asian bistro Kingston upon Thames',
    'Asian sharing plates Kingston',
    'East Lane Kingston restaurant',
    'Best Asian restaurant Kingston',
    'Korean food Kingston',
    'Thai restaurant Kingston',
    'Group dining Kingston',
    'Vietnamese restaurant Kingston upon Thames',
    'Korean BBQ Kingston',
    'Sharing plates restaurant Kingston',
    'Pan-Asian Kingston Hill',
    'Asian restaurant Kingston upon Thames',
  ],
  authors: [{ name: 'East Lane' }],
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    siteName: 'East Lane',
    images: [{ url: '/images/logo-wordmark.png', width: 400, height: 160, alt: 'East Lane – Pan-Asian Bistro, Kingston upon Thames' }],
  },
  twitter: {
    card: 'summary_large_image',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
}

export const pageMetadata = {
  home: {
    title: 'East Lane – Pan-Asian Bistro, Kingston upon Thames',
    description:
      "Kingston's melting pot of the East. Sharing plates from Thailand, Korea & Vietnam. Book a table at East Lane Asian Bistro, Kingston upon Thames.",
    alternates: { canonical: `${siteUrl}/` },
  },
  menu: {
    title: 'East Lane Menu – Pan-Asian Sharing Plates in Kingston',
    description:
      "Browse East Lane's full menu of pan-Asian sharing plates — Vietnamese starters, Korean mains, Thai curries, desserts & cocktails. Kingston upon Thames.",
    alternates: { canonical: `${siteUrl}/menu` },
  },
  about: {
    title: 'About – Asian Bistro in Kingston upon Thames',
    description:
      "The story behind East Lane — Chef Vin's journey through Asia's street food scenes, brought to Kingston upon Thames.",
    alternates: { canonical: `${siteUrl}/about` },
  },
  faqs: {
    title: 'FAQs – East Lane Asian Bistro Kingston',
    description:
      'Answers to your questions about East Lane: reservations, menu, location, dietary requirements and more.',
    alternates: { canonical: `${siteUrl}/faqs` },
  },
  reservations: {
    title: 'Reserve a Table – East Lane Kingston',
    description:
      "Book a table at East Lane, Kingston's pan-Asian bistro. Easy online reservations for groups, date nights & special occasions.",
    alternates: { canonical: `${siteUrl}/reservations` },
  },
  contact: {
    title: 'Contact East Lane – Find Us in Kingston',
    description:
      'Get in touch with East Lane Asian Bistro. Address: 10 Kingston Hill, Kingston upon Thames, KT2 7NH.',
    alternates: { canonical: `${siteUrl}/contact` },
  },
}
