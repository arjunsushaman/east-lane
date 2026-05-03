import type { Metadata } from 'next'
import { pageMetadata } from '@/lib/metadata'
import PageHero from '@/components/shared/PageHero'
import MotionSection from '@/components/ui/MotionSection'
import HomepageContactSection from '@/components/home/HomepageContactSection'
import Link from 'next/link'

export const metadata: Metadata = {
  title:       pageMetadata.menu.title,
  description: pageMetadata.menu.description,
}

const menuSections = [
  {
    id: 'small-plates',
    category: 'Small Plates & Starters',
    intro: 'Begin the journey — pass them around',
    items: [
      { name: 'Thai Veggie Spring Rolls',  desc: 'Glass noodles, fresh herbs, sweet chilli',         price: '£7'  },
      { name: 'Gyoza Potstickers',         desc: 'Pork & ginger, ponzu dipping sauce',               price: '£8'  },
      { name: 'Crab Rangoon Wontons',      desc: 'Cream cheese, crab, sriracha honey',               price: '£9'  },
      { name: 'Edamame',                   desc: 'Sea salt or chilli garlic',                         price: '£5'  },
      { name: 'Miso Soup',                 desc: 'Tofu, wakame, spring onion',                        price: '£4'  },
    ],
  },
  {
    id: 'sharing-mains',
    category: 'Sharing Mains',
    intro: 'Order a little of everything',
    items: [
      { name: 'Thai Green Curry',          desc: 'Chicken or tofu, jasmine rice, kaffir lime',        price: '£15' },
      { name: 'Korean BBQ Bulgogi Beef',   desc: 'Soy-marinated short rib, pickled daikon, ssam',     price: '£18' },
      { name: 'Miso Salmon',              desc: 'White miso glaze, jasmine rice, pak choi',           price: '£15' },
      { name: 'Vietnamese Pho',           desc: 'Slow-cooked bone broth, rice noodles, fresh herbs',  price: '£14' },
      { name: 'Pad Thai',                 desc: 'Rice noodles, tamarind, peanuts — chicken or prawn', price: '£14' },
    ],
  },
  {
    id: 'sides',
    category: 'Sides',
    intro: 'The finishing touches',
    items: [
      { name: 'Steamed Jasmine Rice',  desc: '',                              price: '£3' },
      { name: 'Garlic Fried Rice',     desc: 'Egg, spring onion',             price: '£5' },
      { name: 'Stir-Fried Greens',     desc: 'Pak choi, oyster sauce, garlic', price: '£5' },
      { name: 'Kimchi',                desc: 'House fermented',                price: '£4' },
    ],
  },
  {
    id: 'desserts',
    category: 'Desserts',
    intro: 'Sweet endings from the East',
    items: [
      { name: 'Mango Sticky Rice',           desc: 'Coconut cream, toasted sesame',                  price: '£7' },
      { name: 'Matcha Green Tea Tiramisu',   desc: 'Mascarpone, matcha, ladyfingers',                price: '£8' },
      { name: 'Fried Bananas with Ice Cream', desc: 'Tempura batter, vanilla gelato, sesame caramel', price: '£7' },
    ],
  },
  {
    id: 'drinks',
    category: 'Cocktails & Drinks',
    intro: 'Straight back to our favourite corners of the East',
    items: [
      { name: 'Lychee Martini',          desc: 'Vodka, lychee liqueur, elderflower',          price: '£12' },
      { name: 'Seoul Sour',              desc: 'Korean soju, citrus, yuzu bitters',            price: '£11' },
      { name: 'Thai Iced Tea',           desc: 'Spiced black tea, condensed milk',             price: '£5'  },
      { name: 'Sake (glass)',            desc: "Ask your server for today's selection",        price: '£7'  },
      { name: 'Imported Beers',          desc: 'Asahi, Sapporo, Tiger',                       price: '£5'  },
      { name: 'Still / Sparkling Water', desc: '',                                             price: '£3'  },
    ],
  },
]

export default function MenuPage() {
  return (
    <>
      <PageHero
        label="The Menu"
        title="East Lane Menu —"
        titleItalic="Pan-Asian Sharing Plates in Kingston"
        subtitle="Every dish designed to share. A journey across the East — Vietnam, Korea, Thailand."
      />

      {/* ── Intro quote ── */}
      <section className="bg-cream-light py-14 lg:py-20">
        <MotionSection className="max-w-2xl mx-auto px-6 text-center">
          <p className="editorial-quote text-brand-dark text-[clamp(1.1rem,2vw,1.4rem)] leading-relaxed">
            Our menu is a journey across the East — from the hawker lanes of Vietnam to the
            smoky grills of Korea and the spice markets of Thailand. Every dish is designed
            to share. Order a little of everything.
          </p>
        </MotionSection>
      </section>

      {/* ── Sticky section tabs ── */}
      <nav
        className="sticky top-[72px] z-30 bg-cream border-b border-cream-dark/35 overflow-x-auto"
        aria-label="Menu sections"
      >
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 flex gap-0">
          {menuSections.map(s => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="font-jost font-medium text-[0.68rem] uppercase tracking-[0.16em] text-brand-dark/45 hover:text-terracotta transition-colors duration-200 py-4 px-4 lg:px-6 whitespace-nowrap border-b-[1.5px] border-transparent hover:border-terracotta"
            >
              {s.category}
            </a>
          ))}
        </div>
      </nav>

      {/* ── Menu sections ── */}
      <section className="bg-cream py-16 lg:py-24">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="flex flex-col gap-24 lg:gap-32">
            {menuSections.map((sec, si) => (
              <MotionSection key={sec.id} delay={si * 0.04}>
                <div id={sec.id} className="scroll-mt-32">

                  {/* ── Category header ── */}
                  <div className="mb-10 lg:mb-12">
                    {/* Thin rule with category label centred */}
                    <div className="flex items-center gap-5 mb-6">
                      <div className="h-px flex-1 bg-gradient-to-r from-transparent via-cream-dark/50 to-cream-dark/50" />
                      <span
                        className="label-caps text-terracotta/70 flex-shrink-0"
                        style={{ fontSize: '0.58rem', letterSpacing: '0.25em' }}
                      >
                        {sec.category}
                      </span>
                      <div className="h-px flex-1 bg-gradient-to-l from-transparent via-cream-dark/50 to-cream-dark/50" />
                    </div>

                    {/* Large editorial heading + italic intro */}
                    <div className="text-center">
                      <h2 className="display-heading text-brand-dark text-[clamp(2rem,5vw,3.5rem)] leading-none mb-3">
                        {sec.category}
                      </h2>
                      <p className="editorial-quote text-brand-dark/45 text-lg">
                        {sec.intro}
                      </p>
                    </div>
                  </div>

                  {/* ── Items — 2-column grid on lg+ ── */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-16 xl:gap-x-24">
                    {sec.items.map((item, i) => (
                      <div
                        key={i}
                        className="group flex items-start justify-between gap-6 py-5 border-b border-cream-dark/25 last:border-0 lg:[&:nth-last-child(2):nth-child(odd)]:border-0 transition-colors duration-200 hover:bg-cream-light -mx-3 px-3 rounded-sm"
                      >
                        {/* Name + description */}
                        <div className="flex-1 min-w-0">
                          <p className="font-jost font-medium text-[0.9375rem] text-brand-dark group-hover:text-terracotta transition-colors duration-200 leading-snug">
                            {item.name}
                          </p>
                          {item.desc && (
                            <p className="font-jost text-[0.8125rem] text-brand-dark/40 mt-1 leading-relaxed">
                              {item.desc}
                            </p>
                          )}
                        </div>

                        {/* Price */}
                        <span className="editorial-quote text-terracotta text-[1.2rem] flex-shrink-0 tabular-nums leading-tight mt-0.5">
                          {item.price}
                        </span>
                      </div>
                    ))}
                  </div>

                </div>
              </MotionSection>
            ))}
          </div>

          {/* ── Bottom note + CTA ── */}
          <div className="mt-20 pt-12 border-t border-cream-dark/35 text-center">
            <p className="font-jost text-sm text-brand-dark/35 mb-3 tracking-wide">
              Allergen information available on request.
            </p>
            <p className="font-jost text-sm text-brand-dark/35 mb-10">
              Menu subject to seasonal change.
            </p>
            <Link
              href="/reservations"
              className="pill-btn border border-brand-dark/35 text-brand-dark hover:bg-brand-dark hover:text-cream-light"
            >
              · Book a Table ·
            </Link>
          </div>
        </div>
      </section>

      <HomepageContactSection />
    </>
  )
}
