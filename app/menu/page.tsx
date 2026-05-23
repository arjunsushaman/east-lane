import type { Metadata } from 'next'
import { pageMetadata } from '@/lib/metadata'
import PageHero from '@/components/shared/PageHero'
import TextReveal from '@/components/ui/TextReveal'
import MenuHighlights from '@/components/menu/MenuHighlights'
import MenuNav from '@/components/menu/MenuNav'
import MenuSection from '@/components/menu/MenuSection'
import HomepageContactSection from '@/components/home/HomepageContactSection'
import Link from 'next/link'

export const metadata: Metadata = {
  title:       pageMetadata.menu.title,
  description: pageMetadata.menu.description,
}

const INTRO_TEXT =
  'Our menu is a journey across the East — from the hawker lanes of Vietnam to the ' +
  'smoky grills of Korea and the spice markets of Thailand. Every dish is designed ' +
  'to share. Order a little of everything.'

const menuSections = [
  {
    id: 'small-plates',
    category: 'Small Plates & Starters',
    intro: 'Begin the journey — pass them around',
    items: [
      {
        name: 'Thai Veggie Spring Rolls',
        desc: 'Glass noodles, fresh herbs, sweet chilli',
        price: '£7',
        ingredients: ['Glass noodles', 'Fresh mint & coriander', 'Sweet chilli sauce', 'Rice paper', 'Carrot & cabbage'],
        calories: 180,
        macros: { protein: '3g', carbs: '28g', fat: '6g' },
        tags: ['Vegan', 'Gluten Free'],
      },
      {
        name: 'Gyoza Potstickers',
        desc: 'Pork & ginger, ponzu dipping sauce',
        price: '£8',
        ingredients: ['Pork mince', 'Fresh ginger', 'Garlic', 'Napa cabbage', 'Sesame oil'],
        calories: 220,
        macros: { protein: '14g', carbs: '24g', fat: '8g' },
        tags: ['Chef Favourite'],
        allergens: ['Soy', 'Gluten', 'Sesame'],
      },
      {
        name: 'Crab Rangoon Wontons',
        desc: 'Cream cheese, crab, sriracha honey',
        price: '£9',
        ingredients: ['Crab meat', 'Cream cheese', 'Sriracha', 'Honey', 'Spring onion'],
        calories: 280,
        macros: { protein: '10g', carbs: '22g', fat: '16g' },
        tags: ['Spicy'],
        allergens: ['Shellfish', 'Dairy', 'Gluten'],
      },
      {
        name: 'Edamame',
        desc: 'Sea salt or chilli garlic',
        price: '£5',
        ingredients: ['Edamame', 'Sea salt', 'Garlic', 'Chilli flakes', 'Sesame oil'],
        calories: 120,
        macros: { protein: '11g', carbs: '10g', fat: '5g' },
        tags: ['Vegan', 'Gluten Free'],
        allergens: ['Soy', 'Sesame'],
      },
      {
        name: 'Miso Soup',
        desc: 'Tofu, wakame, spring onion',
        price: '£4',
        ingredients: ['White miso paste', 'Silken tofu', 'Wakame seaweed', 'Spring onion', 'Dashi stock'],
        calories: 80,
        macros: { protein: '6g', carbs: '9g', fat: '3g' },
        tags: ['Vegan', 'Low Cal'],
        allergens: ['Soy', 'Sesame'],
      },
    ],
  },
  {
    id: 'sharing-mains',
    category: 'Sharing Mains',
    intro: 'Order a little of everything',
    items: [
      {
        name: 'Thai Green Curry',
        desc: 'Chicken or tofu, jasmine rice, kaffir lime',
        price: '£15',
        ingredients: ['Lemongrass', 'Kaffir lime leaf', 'Coconut milk', 'Green chilli', 'Thai basil'],
        calories: 520,
        macros: { protein: '28g', carbs: '55g', fat: '18g' },
        tags: ['Spicy', 'Gluten Free'],
        allergens: ['Fish sauce', 'Shellfish'],
      },
      {
        name: 'Korean BBQ Bulgogi Beef',
        desc: 'Soy-marinated short rib, pickled daikon, ssam',
        price: '£18',
        ingredients: ['Short rib', 'Soy marinade', 'Pickled daikon', 'Ssam leaves', 'Gochujang'],
        calories: 620,
        macros: { protein: '38g', carbs: '32g', fat: '32g' },
        tags: ['Chef Favourite', 'Spicy'],
        allergens: ['Soy', 'Sesame', 'Gluten'],
      },
      {
        name: 'Miso Salmon',
        desc: 'White miso glaze, jasmine rice, pak choi',
        price: '£15',
        ingredients: ['Atlantic salmon', 'White miso', 'Jasmine rice', 'Pak choi', 'Sesame oil'],
        calories: 480,
        macros: { protein: '42g', carbs: '36g', fat: '18g' },
        tags: ['Gluten Free'],
        allergens: ['Fish', 'Soy', 'Sesame'],
      },
      {
        name: 'Vietnamese Pho',
        desc: 'Slow-cooked bone broth, rice noodles, fresh herbs',
        price: '£14',
        ingredients: ['Bone broth', 'Rice noodles', 'Beef brisket', 'Bean sprouts', 'Fresh basil & lime'],
        calories: 420,
        macros: { protein: '32g', carbs: '48g', fat: '10g' },
        tags: ['Gluten Free'],
        allergens: ['Fish sauce'],
      },
      {
        name: 'Pad Thai',
        desc: 'Rice noodles, tamarind, peanuts — chicken or prawn',
        price: '£14',
        ingredients: ['Rice noodles', 'Tamarind paste', 'Crushed peanuts', 'Egg', 'Bean sprouts'],
        calories: 540,
        macros: { protein: '26g', carbs: '72g', fat: '16g' },
        tags: ['Gluten Free'],
        allergens: ['Peanuts', 'Egg', 'Shellfish'],
      },
    ],
  },
  {
    id: 'sides',
    category: 'Sides',
    intro: 'The finishing touches',
    items: [
      {
        name: 'Steamed Jasmine Rice',
        desc: '',
        price: '£3',
        ingredients: ['Jasmine rice', 'Water'],
        calories: 160,
        macros: { protein: '3g', carbs: '36g', fat: '0g' },
        tags: ['Vegan', 'Gluten Free'],
      },
      {
        name: 'Garlic Fried Rice',
        desc: 'Egg, spring onion',
        price: '£5',
        ingredients: ['Jasmine rice', 'Garlic', 'Egg', 'Spring onion', 'Soy sauce'],
        calories: 240,
        macros: { protein: '7g', carbs: '42g', fat: '6g' },
        tags: ['Gluten Free option'],
        allergens: ['Egg', 'Soy'],
      },
      {
        name: 'Stir-Fried Greens',
        desc: 'Pak choi, oyster sauce, garlic',
        price: '£5',
        ingredients: ['Pak choi', 'Oyster sauce', 'Garlic', 'Fresh ginger', 'Sesame oil'],
        calories: 90,
        macros: { protein: '4g', carbs: '8g', fat: '4g' },
        tags: ['Gluten Free'],
        allergens: ['Shellfish', 'Sesame', 'Soy'],
      },
      {
        name: 'Kimchi',
        desc: 'House fermented',
        price: '£4',
        ingredients: ['Napa cabbage', 'Gochugaru', 'Garlic', 'Ginger', 'Fish sauce'],
        calories: 30,
        macros: { protein: '2g', carbs: '5g', fat: '0g' },
        tags: ['Gluten Free', 'Low Cal'],
        allergens: ['Shellfish'],
      },
    ],
  },
  {
    id: 'desserts',
    category: 'Desserts',
    intro: 'Sweet endings from the East',
    items: [
      {
        name: 'Mango Sticky Rice',
        desc: 'Coconut cream, toasted sesame',
        price: '£7',
        ingredients: ['Glutinous rice', 'Fresh mango', 'Coconut cream', 'Palm sugar', 'Toasted sesame'],
        calories: 320,
        macros: { protein: '4g', carbs: '62g', fat: '8g' },
        tags: ['Vegan', 'Gluten Free'],
        allergens: ['Sesame'],
      },
      {
        name: 'Matcha Green Tea Tiramisu',
        desc: 'Mascarpone, matcha, ladyfingers',
        price: '£8',
        ingredients: ['Mascarpone', 'Ceremonial matcha', 'Ladyfingers', 'Egg yolk', 'Double cream'],
        calories: 380,
        macros: { protein: '8g', carbs: '42g', fat: '20g' },
        tags: ['Vegetarian'],
        allergens: ['Dairy', 'Egg', 'Gluten'],
      },
      {
        name: 'Fried Bananas with Ice Cream',
        desc: 'Tempura batter, vanilla gelato, sesame caramel',
        price: '£7',
        ingredients: ['Banana', 'Tempura batter', 'Vanilla gelato', 'Sesame caramel', 'Black sesame'],
        calories: 440,
        macros: { protein: '5g', carbs: '68g', fat: '18g' },
        tags: ['Vegetarian'],
        allergens: ['Dairy', 'Egg', 'Gluten', 'Sesame'],
      },
    ],
  },
  {
    id: 'drinks',
    category: 'Cocktails & Drinks',
    intro: 'Straight back to our favourite corners of the East',
    items: [
      {
        name: 'Lychee Martini',
        desc: 'Vodka, lychee liqueur, elderflower',
        price: '£12',
        ingredients: ['Vodka', 'Lychee liqueur', 'Elderflower cordial', 'Fresh lime juice', 'Lychee garnish'],
        calories: 185,
        macros: { protein: '0g', carbs: '14g', fat: '0g' },
        tags: ['Signature', 'Gluten Free'],
      },
      {
        name: 'Seoul Sour',
        desc: 'Korean soju, citrus, yuzu bitters',
        price: '£11',
        ingredients: ['Korean soju', 'Yuzu bitters', 'Fresh citrus', 'Egg white', 'Honey syrup'],
        calories: 150,
        macros: { protein: '2g', carbs: '12g', fat: '0g' },
        tags: ['Chef Favourite'],
        allergens: ['Egg'],
      },
      {
        name: 'Thai Iced Tea',
        desc: 'Spiced black tea, condensed milk',
        price: '£5',
        ingredients: ['Thai black tea', 'Condensed milk', 'Star anise', 'Vanilla', 'Crushed ice'],
        calories: 180,
        macros: { protein: '4g', carbs: '38g', fat: '4g' },
        tags: ['Non-Alcoholic'],
        allergens: ['Dairy'],
      },
      {
        name: 'Sake (glass)',
        desc: "Ask your server for today's selection",
        price: '£7',
        ingredients: ['Rice', 'Water', 'Koji mould', 'Yeast'],
        calories: 120,
        macros: { protein: '1g', carbs: '5g', fat: '0g' },
        tags: ['Gluten Free'],
      },
      {
        name: 'Imported Beers',
        desc: 'Asahi, Sapporo, Tiger',
        price: '£5',
        calories: 140,
        macros: { protein: '1g', carbs: '12g', fat: '0g' },
        tags: ['Ask server for GF option'],
        allergens: ['Gluten'],
      },
      {
        name: 'Still / Sparkling Water',
        desc: '',
        price: '£3',
        calories: 0,
        macros: { protein: '0g', carbs: '0g', fat: '0g' },
        tags: ['Vegan', 'Gluten Free', 'Non-Alcoholic'],
      },
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

      {/* Intro quote — word-by-word scroll reveal */}
      <section className="bg-cream py-14 lg:py-20">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <TextReveal
            text={INTRO_TEXT}
            className="editorial-quote text-brand-dark text-[clamp(1.1rem,2vw,1.4rem)] leading-relaxed"
          />
        </div>
      </section>

      {/* Pinned highlights carousel — page pins until all 6 slides are scrolled through */}
      <MenuHighlights />

      {/* Sticky section tabs — active tab tracked by scroll position */}
      <MenuNav sections={menuSections} />

      {/* Menu sections — each with its own staggered GSAP animation */}
      <section className="bg-cream py-16 lg:py-24">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="flex flex-col gap-24 lg:gap-32">
            {menuSections.map(s => (
              <MenuSection
                key={s.id}
                id={s.id}
                category={s.category}
                intro={s.intro}
                items={s.items}
              />
            ))}
          </div>

          {/* Bottom note + CTA */}
          <div className="mt-20 pt-12 border-t border-cream-dark/35 text-center">
            <p className="font-jost text-sm text-brand-dark/35 mb-3 tracking-wide">
              Allergen information available on request.
            </p>
            <p className="font-jost text-sm text-brand-dark/35 mb-10">
              Menu subject to seasonal change.
            </p>
            <Link
              href="/reservations"
              data-cursor="cta"
              className="pill-btn border border-brand-dark/35 text-brand-dark hover:bg-brand-dark hover:text-cream"
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
