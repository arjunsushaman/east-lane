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
      { name: 'Thai Veggie Spring Rolls',  desc: 'Glass noodles, fresh herbs, sweet chilli',     price: '£7'  },
      { name: 'Gyoza Potstickers',          desc: 'Pork & ginger, ponzu dipping sauce',            price: '£8'  },
      { name: 'Crab Rangoon Wontons',       desc: 'Cream cheese, crab, sriracha honey',            price: '£9'  },
      { name: 'Edamame',                    desc: 'Sea salt or chilli garlic',                      price: '£5'  },
      { name: 'Miso Soup',                  desc: 'Tofu, wakame, spring onion',                     price: '£4'  },
    ],
  },
  {
    id: 'sharing-mains',
    category: 'Sharing Mains',
    intro: 'Order a little of everything',
    items: [
      { name: 'Thai Green Curry',        desc: 'Chicken or tofu, jasmine rice, kaffir lime',          price: '£15' },
      { name: 'Korean BBQ Bulgogi Beef', desc: 'Soy-marinated short rib, pickled daikon, ssam',       price: '£18' },
      { name: 'Miso Salmon',             desc: 'White miso glaze, jasmine rice, pak choi',            price: '£15' },
      { name: 'Vietnamese Pho',          desc: 'Slow-cooked bone broth, rice noodles, fresh herbs',   price: '£14' },
      { name: 'Pad Thai',                desc: 'Rice noodles, tamarind, peanuts — chicken or prawn',  price: '£14' },
    ],
  },
  {
    id: 'sides',
    category: 'Sides',
    intro: 'The finishing touches',
    items: [
      { name: 'Steamed Jasmine Rice', desc: '',                             price: '£3' },
      { name: 'Garlic Fried Rice',    desc: 'Egg, spring onion',            price: '£5' },
      { name: 'Stir-Fried Greens',    desc: 'Pak choi, oyster sauce, garlic', price: '£5' },
      { name: 'Kimchi',               desc: 'House fermented',               price: '£4' },
    ],
  },
  {
    id: 'desserts',
    category: 'Desserts',
    intro: 'Sweet endings from the East',
    items: [
      { name: 'Mango Sticky Rice',              desc: 'Coconut cream, toasted sesame',               price: '£7'  },
      { name: 'Matcha Green Tea Tiramisu',      desc: 'Mascarpone, matcha, ladyfingers',             price: '£8'  },
      { name: 'Fried Bananas with Ice Cream',   desc: 'Tempura batter, vanilla gelato, sesame caramel', price: '£7' },
    ],
  },
  {
    id: 'drinks',
    category: 'Cocktails & Drinks',
    intro: 'Straight back to our favourite corners of the East',
    items: [
      { name: 'Lychee Martini',       desc: 'Vodka, lychee liqueur, elderflower',         price: '£12' },
      { name: 'Seoul Sour',           desc: 'Korean soju, citrus, yuzu bitters',          price: '£11' },
      { name: 'Thai Iced Tea',        desc: 'Spiced black tea, condensed milk',           price: '£5'  },
      { name: 'Sake (glass)',         desc: 'Ask your server for today\'s selection',     price: '£7'  },
      { name: 'Imported Beers',       desc: 'Asahi, Sapporo, Tiger',                     price: '£5'  },
      { name: 'Still / Sparkling Water', desc: '',                                         price: '£3'  },
    ],
  },
]

export default function MenuPage() {
  return (
    <>
      <PageHero
        label="The Menu"
        title="Pan-Asian Sharing Plates"
        titleItalic="in Kingston"
        subtitle="Every dish designed to share. A journey across the East — Vietnam, Korea, Thailand."
      />

      {/* Intro */}
      <section className="bg-cream-light py-16">
        <MotionSection className="max-w-2xl mx-auto px-6 text-center">
          <p className="editorial-quote text-brand-dark text-[clamp(1.1rem,2vw,1.4rem)] leading-relaxed">
            Our menu is a journey across the East – from the hawker lanes of Vietnam to the
            smoky grills of Korea and the spice markets of Thailand. Every dish is designed
            to share. Order a little of everything.
          </p>
        </MotionSection>
      </section>

      {/* Sticky section tabs */}
      <nav
        className="sticky top-[72px] z-30 bg-cream border-b border-cream-dark/40 overflow-x-auto"
        aria-label="Menu sections"
      >
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 flex gap-8 py-0">
          {menuSections.map(s => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="label-caps text-brand-dark/50 hover:text-terracotta transition-colors duration-200 py-4 whitespace-nowrap border-b-2 border-transparent hover:border-terracotta"
              style={{ fontSize: '0.62rem' }}
            >
              {s.category}
            </a>
          ))}
        </div>
      </nav>

      {/* Menu content */}
      <section className="bg-cream py-16 lg:py-20">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="flex flex-col gap-20">
            {menuSections.map((sec, si) => (
              <MotionSection key={sec.id} delay={si * 0.05}>
                <div id={sec.id} className="scroll-mt-36">
                  {/* Category header */}
                  <div className="flex items-baseline justify-between mb-2 pb-4 border-b border-cream-dark/60">
                    <div>
                      <h2 className="display-heading text-brand-dark text-3xl lg:text-4xl">{sec.category}</h2>
                      <p className="editorial-quote text-brand-dark/50 text-base mt-1">{sec.intro}</p>
                    </div>
                  </div>

                  {/* Items */}
                  {sec.items.map((item, i) => (
                    <div
                      key={i}
                      className="flex items-start justify-between py-5 border-b border-cream-dark/30 last:border-0 gap-8 group"
                    >
                      <div className="flex-1">
                        <p className="font-jost font-medium text-brand-dark text-[0.9375rem] group-hover:text-terracotta transition-colors duration-200">
                          {item.name}
                        </p>
                        {item.desc && (
                          <p className="font-jost text-sm text-brand-dark/45 mt-0.5 leading-relaxed">{item.desc}</p>
                        )}
                      </div>
                      <span className="editorial-quote text-terracotta text-xl flex-shrink-0 tabular-nums">
                        {item.price}
                      </span>
                    </div>
                  ))}
                </div>
              </MotionSection>
            ))}
          </div>

          {/* Bottom note + CTA */}
          <div className="mt-16 pt-10 border-t border-cream-dark/40 text-center">
            <p className="font-jost text-sm text-brand-dark/40 mb-8">
              Allergen information available on request. Menu subject to seasonal change.
            </p>
            <Link
              href="/reservations"
              className="pill-btn border border-brand-dark/40 text-brand-dark hover:bg-brand-dark hover:text-cream-light px-10 py-3.5"
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
