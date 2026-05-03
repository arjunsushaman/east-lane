# East Lane Website — Task Checklist
_Last updated: 2026-05-03_

---

## ✅ Phase 1: Project Setup
- [x] Scaffold Next.js 16 + TypeScript + Tailwind v4
- [x] Install all dependencies (framer-motion, radix, react-hook-form, zod, @hookform/resolvers, lucide-react)
- [x] `globals.css` — brand color tokens, typography utilities, pill-btn, hero-overlay, brand-hr
- [x] `lib/fonts.ts` — DM Serif Display, Cormorant Garamond, Jost via next/font
- [x] `lib/schema.ts` — LocalBusiness JSON-LD (Restaurant schema)
- [x] `lib/metadata.ts` — per-page SEO titles + descriptions
- [x] `app/layout.tsx` — root layout with font variables + schema injection
- [x] Logos copied to `public/images/` (wordmark + icon)
- [x] `docs/` folder created (BRAND.md, TODO.md)

## ✅ Phase 2: Layout Shell
- [x] `components/layout/Navbar.tsx` — centered logo, items spread left/right (plazakhaogaeng style), transparent→dark on scroll, mobile overlay, pill Book CTA
- [x] `components/layout/Footer.tsx` — centered logo, cream bg, 3-col (address / hours / nav), copyright bar

## ✅ Phase 3: UI Primitives
- [x] `components/ui/Button.tsx` — primary / outline / outline-dark / ghost variants
- [x] `components/ui/SectionWrapper.tsx` — bg variant + narrow option
- [x] `components/ui/LotusDecor.tsx` — SVG lotus + LotusRule divider
- [x] `components/ui/FAQAccordion.tsx` — Radix accordion, editorial styling
- [x] `components/ui/MotionSection.tsx` — fadeInUp, MotionStagger, MotionChild
- [x] `components/shared/PageHero.tsx` — dark/light inner-page hero, rule lines
- [x] `components/home/ContactForm.tsx` — react-hook-form + zod, success state

## ✅ Phase 4: Homepage (all 10 sections)
- [x] HeroSection — full-screen video bg, lower-third text, pill CTAs (· Reservations · / · See the Menu ·), animated scroll indicator
- [x] IntroSection — SEO critical live HTML paragraph, Cormorant editorial quote style
- [x] FeastImage — full-bleed food photography block (placeholder)
- [x] EditorialFeature — large photo + text (menu tease, two-column, link with arrow)
- [x] ReservationCTA — dark block, Dojo placeholder, pill CTA
- [x] EditorialFeature (About) — photo right, chef story teaser
- [x] HoursSection — clean table layout, cream bg
- [x] MapSection — Google Maps iframe + address info, two-col layout
- [x] HomepageContactSection — contact form, editorial heading
- [x] NewsletterSection — dark bg, email capture

## ✅ Phase 5: Inner Pages
- [x] `/menu` — editorial header, sticky section tabs, full menu HTML (5 sections), all content from UX brief
- [x] `/about` — full brand narrative, Chef Vin story, editorial split layouts, all UX brief copy
- [x] `/faqs` — accordion, all 5 categories, all questions from UX brief (placeholders marked [TBC])
- [x] `/reservations` — Dojo widget placeholder, group bookings note
- [x] `/contact` — map, address, form with phone field, social links

## ✅ Phase 6: SEO
- [x] Per-page metadata exports on all routes
- [x] LocalBusiness JSON-LD injected in root layout
- [x] `app/sitemap.ts` → `/sitemap.xml`
- [x] `app/robots.ts` → `/robots.txt`
- [x] OG/Twitter meta tags via defaultMetadata

## ✅ Phase 7: UI Redesign (plazakhaogaeng reference)
- [x] Navbar → centered logo, spread nav items, pill "Book" CTA, Instagram icon
- [x] Hero → full-bleed cinematic, lower-third positioning, pill CTAs with · dots ·
- [x] Sections → editorial two-column layouts (photo + text, alternating)
- [x] Typography → display-heading (.display-heading), editorial-quote (.editorial-quote), label-caps (.label-caps)
- [x] Pill buttons → .pill-btn CSS class (rounded-full, tracked uppercase, smooth hover)
- [x] Footer → centered logo, cream bg, 3-col layout
- [x] Framer Motion → hero stagger, scroll fadeInUp on all sections

## ✅ Phase 8: Build Verification
- [x] TypeScript: zero errors
- [x] `next build` passes — all 6 pages + sitemap + robots static
- [x] All routes return 200
- [x] JSON-LD schema present in page source
- [x] sitemap.xml valid XML

---

## 🔲 Awaiting Client — Placeholders
| Item | File / Location |
|---|---|
| Hero video | `public/videos/hero.mp4` |
| Hero poster image | `public/images/hero-poster.jpg` |
| Full feast / food photography | `public/images/feast.jpg` + all section images |
| Interior photos | EditorialFeature image props |
| Chef Vin portrait | About page EditorialFeature |
| Opening hours | HoursSection.tsx + Footer + FAQs |
| Phone number | MapSection, Footer, Contact page, lib/schema.ts |
| Email address | MapSection, Footer, Contact page, lib/schema.ts |
| Dojo widget embed code | `app/reservations/page.tsx` + ReservationCTA.tsx |
| Full final menu prices | `app/menu/page.tsx` (menuSections array) |
| Dietary/vegan/halal confirmations | `app/faqs/page.tsx` |
| Allergy policy | `app/faqs/page.tsx` |
| Corkage/service charge/gift cards | `app/faqs/page.tsx` |
| Parking info | `app/faqs/page.tsx` |
| Additional social profiles | Footer.tsx + Contact page |

## 🔲 Pre-Launch Checklist (when client provides assets)
- [ ] Replace all placeholder divs with `<Image>` components using actual photography
- [ ] Insert Dojo widget embed code in `/reservations` and homepage ReservationCTA
- [ ] Fill [TBC] placeholders in FAQs, Hours, Contact details
- [ ] Update `lib/schema.ts` with real phone, email, hours
- [ ] Submit sitemap to Google Search Console
- [ ] Verify Google Business address matches exactly: 10 Kingston Hill, Kingston upon Thames, KT2 7NH
- [ ] Run Lighthouse audit (target: 90+ Performance, 100 SEO, 100 Accessibility)
- [ ] Test mobile on real devices (iPhone + Android)
- [ ] Check reduced-motion behaviour
