import { DM_Serif_Display, Cormorant_Garamond, Jost } from 'next/font/google'
import localFont from 'next/font/local'

export const dmSerifDisplay = DM_Serif_Display({
  weight: ['400'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-dm-serif-display',
  display: 'swap',
})

export const cormorantGaramond = Cormorant_Garamond({
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-cormorant-garamond',
  display: 'swap',
})

export const jost = Jost({
  weight: ['300', '400', '500', '600'],
  subsets: ['latin'],
  variable: '--font-jost',
  display: 'swap',
})

export const cubaoNarrow = localFont({
  src: '../public/fonts/Cubao_Free_Narrow.otf',
  variable: '--font-cubao-narrow',
  display: 'swap',
})
