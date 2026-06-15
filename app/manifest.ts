import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'East Lane – Pan-Asian Bistro',
    short_name: 'East Lane',
    description: "Kingston's pan-Asian sharing plate bistro. Book a table online.",
    theme_color: '#1a1a1a',
    background_color: '#f5f0e8',
    display: 'browser',
    start_url: '/',
    icons: [
      { src: '/images/logo-icon.png', sizes: '120x120', type: 'image/png' },
    ],
  }
}
