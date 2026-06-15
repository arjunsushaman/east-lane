import type { MetadataRoute } from 'next'

const siteUrl = 'https://eastlanekingston.co.uk'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      lastModified: new Date('2025-06-15'),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${siteUrl}/menu`,
      lastModified: new Date('2025-06-15'),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${siteUrl}/reservations`,
      lastModified: new Date('2025-06-01'),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${siteUrl}/about`,
      lastModified: new Date('2025-06-01'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${siteUrl}/faqs`,
      lastModified: new Date('2025-06-01'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${siteUrl}/contact`,
      lastModified: new Date('2025-06-01'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ]
}
