const siteUrl = 'https://eastlane.uk'

export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'Restaurant',
  '@id': `${siteUrl}/#restaurant`,
  name: 'East Lane',
  description: 'Pan-Asian sharing plate bistro in Kingston upon Thames, London.',
  url: siteUrl,
  logo: `${siteUrl}/images/logo-icon.png`,
  image: [
    `${siteUrl}/images/feast.jpg`,
    `${siteUrl}/images/about-interior.jpg`,
  ],
  address: {
    '@type': 'PostalAddress',
    streetAddress: '10 Kingston Hill',
    addressLocality: 'Kingston upon Thames',
    addressRegion: 'London',
    postalCode: 'KT2 7NH',
    addressCountry: 'GB',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 51.4122,
    longitude: -0.2759,
  },
  servesCuisine: ['Pan-Asian', 'Vietnamese', 'Korean', 'Thai', 'Japanese'],
  priceRange: '££',
  currenciesAccepted: 'GBP',
  paymentAccepted: 'Cash, Credit Card',
  telephone: '+442031615960',
  email: 'hello@eastlane.uk',
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '17:00',
      closes: '22:30',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Saturday'],
      opens: '12:00',
      closes: '22:30',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Sunday'],
      opens: '12:00',
      closes: '21:30',
    },
  ],
  sameAs: [
    'https://www.instagram.com/eastlanekingston',
    'https://www.facebook.com/eastlanebistro',
  ],
  hasMenu: `${siteUrl}/menu`,
  acceptsReservations: 'True',
}

export const faqPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Where is East Lane located?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'East Lane is at 10 Kingston Hill, Kingston upon Thames, KT2 7NH.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are your opening hours?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Tuesday to Friday: 5:00 pm – 10:30 pm. Saturday: 12:00 pm – 10:30 pm. Sunday: 12:00 pm – 9:30 pm. Closed on Mondays.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I book a table?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Book online via our Reservations page. For large parties or special requests, please contact us directly.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you accept walk-ins?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, subject to availability. We recommend booking ahead, especially on weekends.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I book for a group or celebration?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Absolutely — birthdays, anniversaries, Sunday lunches, corporate meals. Contact us to discuss your requirements.',
      },
    },
    {
      '@type': 'Question',
      name: 'What kind of food do you serve?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Pan-Asian sharing plates — from Vietnamese-inspired small plates to Korean grills, Thai curries, and more.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you cater for food allergies?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Please inform us of any allergies when booking or on arrival. Allergen information is available on request.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you have a cocktail menu?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes — cocktails inspired by flavours from across the East, alongside wines and spirits.',
      },
    },
  ],
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}
