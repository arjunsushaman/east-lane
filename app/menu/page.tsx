import type { Metadata } from 'next'
import { pageMetadata } from '@/lib/metadata'
import { breadcrumbSchema } from '@/lib/schema'
import PageHero from '@/components/shared/PageHero'
import TextReveal from '@/components/ui/TextReveal'
import MenuHighlights from '@/components/menu/MenuHighlights'
import MenuNav from '@/components/menu/MenuNav'
import MenuSection from '@/components/menu/MenuSection'
import HomepageContactSection from '@/components/home/HomepageContactSection'
import BookingCTA from '@/components/ui/BookingCTA'

export const metadata: Metadata = {
  title:       pageMetadata.menu.title,
  description: pageMetadata.menu.description,
  alternates:  pageMetadata.menu.alternates,
}

const INTRO_TEXT =
  'Our menu is a journey across the East — from the hawker lanes of Vietnam to the ' +
  'smoky grills of Korea and the spice markets of Thailand. Every dish is designed ' +
  'to share. Order a little of everything.'

const menuSections = [
  // ── SMALL PLATES ────────────────────────────────────────────────────────────
  {
    id: 'small-plates',
    category: 'Small Plates',
    groupTitle: 'Food Menu',
    intro: 'Begin the journey — pass them around',
    items: [
      { name: 'Edamame', desc: 'Salted or spicy', price: '£5' },
      { name: 'Assorted Crackers', desc: 'House chilli sauce', price: '£5' },
      { name: 'Smashed Cucumber', desc: 'Sesame chilli soy', price: '£6' },
      { name: 'Cauliflower Karaage', desc: 'Gochujang sauce', price: '£7' },
      { name: 'Vegetable Spring Rolls', desc: 'House sweet chilli sauce', price: '£9' },
      { name: 'Tangra Chilli Paneer', desc: '', price: '£10' },
      { name: 'Crispy Corn Salt N Pepper', desc: '', price: '£9' },
      { name: 'Crispy Lotus Stem', desc: 'Sambhal chilli sauce', price: '£10' },
      { name: 'Sichuan Mushroom Gua Bao', desc: '', price: '£10' },
      {
        name: 'East Lane Veg Platter',
        desc: '2pc veg dumplings, 2pc spring roll, cauliflower karaage, tangra chilli paneer',
        price: '£20',
      },
      { name: 'Chicken Karaage', desc: '', price: '£11' },
      { name: 'Hakka Chilli Chicken', desc: '', price: '£12' },
      { name: 'Salt N Pepper Prawns', desc: '', price: '£13' },
      { name: 'Creamy Sambhal Prawns', desc: 'Creamy butter sauce', price: '£13' },
      { name: 'Duck Spring Roll', desc: 'Plum sauce', price: '£12' },
      { name: 'Shao Xing Beef', desc: 'Crispy chilli', price: '£12' },
      { name: 'Korean Chicken Bao Bun', desc: 'Spicy mayo', price: '£11' },
      { name: 'Braised Pork Belly', desc: 'Lantern chilli & herbs', price: '£12' },
      { name: 'Baby Squid', desc: 'Chilli lime aioli', price: '£12' },
      {
        name: 'East Lane Non Veg Platter',
        desc: '2pc chicken dumplings, 2pc pepper prawns, 2pc spring roll, chilli chicken',
        price: '£22',
      },
    ],
  },

  // ── DIM SUM ─────────────────────────────────────────────────────────────────
  {
    id: 'dim-sum',
    category: 'Dim Sum',
    intro: 'Handcrafted, steamed & pan-seared',
    items: [
      { name: 'Vegetable Dumplings', desc: 'Pan seared', price: '£9' },
      { name: 'Spicy Tofu Dumplings', desc: 'House chilli sauce', price: '£9' },
      { name: 'Chicken and Spinach Dumplings', desc: 'Pan seared', price: '£9' },
      { name: 'Prawn and Pork Wontons', desc: 'Chilli oil', price: '£10' },
      { name: 'Hargau Prawns', desc: '', price: '£10' },
      { name: 'Shanghai Pork Dumplings', desc: 'Ginger soya', price: '£10' },
    ],
  },

  // ── GRILLS ──────────────────────────────────────────────────────────────────
  {
    id: 'grills',
    category: 'Grills',
    intro: 'From the open flame — charred, smoky, shared',
    items: [
      { name: 'Broccoli Tender Stems', desc: 'Sichuan sour cream', price: '£10' },
      { name: 'Grilled Paneer', desc: 'Hot braised sauce', price: '£12' },
      { name: 'Aubergine', desc: 'Miso sauce', price: '£10' },
      { name: 'Thai Chicken Chops', desc: 'Scallion & ginger hainanese', price: '£12' },
      { name: 'Pork Belly Skewers', desc: 'Teriyaki sauce', price: '£12' },
      { name: 'Chicken Satay', desc: 'Chilli peanut', price: '£12' },
      { name: 'Grilled Prawns', desc: 'Curried egg sauce', price: '£14' },
      { name: 'Grilled Salmon Pokchoy', desc: 'Tangy coconut curry', price: '£15' },
      { name: 'Spiced Seabass', desc: 'Butter garlic', price: '£12' },
      { name: 'Grilled Lamb Chops with Korean Kimchi Butter', desc: '', price: '£15' },
    ],
  },

  // ── LARGE PLATES ────────────────────────────────────────────────────────────
  {
    id: 'large-plates',
    category: 'Large Plates',
    intro: 'Choose your sauce: Thai green curry · Hot garlic · Sichuan',
    items: [
      { name: 'Tofu', desc: '', price: '£16' },
      { name: 'Vegetables', desc: '', price: '£13' },
      { name: 'Chicken', desc: '', price: '£16' },
      { name: 'Prawns', desc: '', price: '£18' },
      { name: 'Beef', desc: '', price: '£14' },
    ],
  },

  // ── CHEF'S SPECIALS ──────────────────────────────────────────────────────────
  {
    id: 'chefs-specials',
    category: "Chef's Specials",
    intro: "Chef Vin's signature dishes — the heart of the kitchen",
    items: [
      { name: 'Yasai Katsu Curry', desc: 'Sticky rice', price: '£14' },
      { name: 'Braised Lamb Shank', desc: 'Scallion pancake', price: '£18' },
      { name: 'Nasi Goreng Seafood', desc: '', price: '£16' },
      { name: 'Wok Tossed Aromatic Duck', desc: 'Pancake', price: '£14' },
    ],
  },

  // ── NOODLES & RICE ───────────────────────────────────────────────────────────
  {
    id: 'noodles-rice',
    category: 'Noodles & Rice',
    intro: 'Add on: chicken +£3 · prawn +£4 · mixed meat +£6 · fried egg +£3',
    items: [
      { name: 'Vegetable Fried Rice', desc: '', price: '£6' },
      { name: 'Vegetable Truffle Fried Rice', desc: '', price: '£8' },
      { name: 'Assorted Vegetable Hakka Noodles', desc: '', price: '£8' },
      { name: 'Steamed Jasmine Rice', desc: '', price: '£4' },
    ],
  },

  // ── DESSERTS ─────────────────────────────────────────────────────────────────
  {
    id: 'desserts',
    category: 'Desserts',
    intro: 'Sweet endings from across the East',
    items: [
      { name: 'Chocolate Brownie', desc: 'Vanilla ice cream', price: '£8' },
      { name: 'Crispy Darsaan', desc: 'Vanilla ice cream, lemongrass sauce', price: '£7' },
      { name: 'Jaggery Coconut Creme Bruilee', desc: '', price: '£8' },
    ],
  },

  // ── WINE ─────────────────────────────────────────────────────────────────────
  {
    id: 'wine',
    category: 'Wine',
    groupTitle: 'Drinks Menu',
    intro: 'Priced by the 175ml glass / bottle',
    items: [
      { subheading: 'Rosé Wine' },
      { name: 'Pinot Grigio Rosé', desc: "Terre d'Abruzzo IGT, Bella Modella, Abruzzo, Italy", price: '£9 / £29' },
      { name: "Palm Par L'Escarelle", desc: "IGP Méditerranée, Château L'Escarelle, Provence, France", price: '– / £40' },
      { subheading: 'White Wine' },
      { name: 'Viura, Moscatel, Sauvignon Blanc', desc: 'Centelleo, Vinos Más Buscados, Vino de España, Spain', price: '£9 / £29' },
      { name: 'Riesling', desc: 'Bio Bio, Nostros Reserva, Indómita, Bío Bío Valley, Chile', price: '£9 / £30' },
      { name: 'Vale do Homem Branco', desc: 'Vinho Verde DOC, Quintas do Homem, Vinho Verde, Portugal', price: '£9 / £32' },
      { name: 'Uvam, Pinot Grigio', desc: 'DOC, Biscardo, Mabis, Veneto, Italy', price: '– / £37' },
      { name: 'Chardonnay', desc: "IGP Haute Vallée de L'Aude, Montsablé, Terres Fidèles, Languedoc, France", price: '– / £40' },
      { name: 'Sauvignon Blanc', desc: 'Mayfly, Marlborough, New Zealand', price: '– / £40' },
      { subheading: 'Red Wine' },
      { name: 'Tempranillo, Syrah', desc: 'Centelleo, Vinos Más Buscados, Vino de España, Spain', price: '£9 / £29' },
      { name: 'Merlot', desc: 'Colli Berici, IGT, Casa Defra, Cielo e Terra, Veneto, Italy', price: '£9 / £30' },
      { name: 'Tempranillo', desc: '1890 Finca Manzanos, Bodegas Manzanos, Rioja, Spain', price: '£11 / £32' },
      { name: 'Primitivo', desc: 'IGT, Bella Modella, Puglia, Italy', price: '– / £36' },
      { name: 'Malbec', desc: "Vieilles Vignes, IGP Pays d'Oc, Mont Rocher, Terres Fidèles, Languedoc, France", price: '– / £37' },
      { name: 'Pinot Noir', desc: 'Uco Valley, Mendoza, Manos Negras, Mendoza, Argentina', price: '– / £40' },
    ],
  },

  // ── PROSECCO & CHAMPAGNE ──────────────────────────────────────────────────────
  {
    id: 'prosecco-champagne',
    category: 'Prosecco & Champagne',
    intro: 'By the bottle',
    items: [
      { name: 'Prosecco DOC', desc: 'Spumante, La Vita Sociale, Veneto, Italy', price: '£10 (20cl) / £32' },
      { name: 'Grande Réserve Brut', desc: 'Champagne Jean de Villaré, Champagne, France', price: '£55' },
    ],
  },

  // ── BEER & CIDER ──────────────────────────────────────────────────────────────
  {
    id: 'beer-cider',
    category: 'Beer & Cider',
    intro: 'By the bottle',
    items: [
      { name: 'Asahi', desc: '', price: '£5.5' },
      { name: 'Cobra', desc: '', price: '£5 / £7' },
      { name: 'Sapporo', desc: '', price: '£5' },
      { name: 'Saigon Original Apple', desc: '', price: '£6' },
      { name: 'Asahi 0', desc: '', price: '£5' },
    ],
  },

  // ── SOFT DRINKS ───────────────────────────────────────────────────────────────
  {
    id: 'soft-drinks',
    category: 'Soft Drinks',
    intro: '',
    items: [
      { name: 'Coke Classic', desc: '', price: '£5' },
      { name: 'Coke Zero', desc: '', price: '£5' },
      { name: 'Coke Diet', desc: '', price: '£5' },
      { name: 'Fevertree Lemonade', desc: '', price: '£4' },
      { name: 'Fevertree Gingerale', desc: '', price: '£4' },
      { name: 'Fevertree Soda', desc: '', price: '£4' },
      { name: 'Fevertree Light Tonic', desc: '', price: '£4' },
      { name: 'Fevertree Tonic', desc: '', price: '£4' },
      { name: 'Still Water', desc: '', price: '£3' },
      { name: 'Sparkling Water', desc: '', price: '£5' },
    ],
  },

  // ── JUICES ────────────────────────────────────────────────────────────────────
  {
    id: 'juices',
    category: 'Juices',
    intro: '',
    items: [
      { name: 'Eager Apple Juice', desc: '', price: '£3' },
      { name: 'Eager Orange Juice', desc: '', price: '£3' },
      { name: 'Eager Lychee Juice', desc: '', price: '£3' },
      { name: 'Eager Pineapple Juice', desc: '', price: '£3' },
    ],
  },

  // ── TEAS ──────────────────────────────────────────────────────────────────────
  {
    id: 'teas',
    category: 'Teas',
    intro: '',
    items: [
      { name: 'Jasmine Silver Needle', desc: '', price: '£6' },
      { name: 'Dragon Well', desc: '', price: '£6' },
      { name: 'English Breakfast', desc: '', price: '£6' },
      { name: 'Oolong', desc: '', price: '£6' },
      { name: 'Lemongrass & Ginger', desc: '', price: '£6' },
    ],
  },

  // ── SPIRITS ───────────────────────────────────────────────────────────────────
  {
    id: 'spirits',
    category: 'Spirits',
    intro: '',
    items: [
      { subheading: 'Gin · 50ml' },
      { name: 'Hendricks', desc: '', price: '£8' },
      { name: 'Ophir Spiced', desc: '', price: '£10' },
      { name: '135 East Hyogo Dry', desc: '', price: '£10' },
      { name: 'Ki No Tea', desc: '', price: '£12' },
      { subheading: 'Vodka · 50ml' },
      { name: 'Haku', desc: '', price: '£10' },
      { name: 'Grey Goose', desc: '', price: '£10' },
      { name: 'Ketel One', desc: '', price: '£8' },
      { subheading: 'Rum · 50ml' },
      { name: 'Don Papa', desc: '', price: '£12' },
      { name: 'Havana Cuban Spiced', desc: '', price: '£10' },
      { subheading: 'Tequila · 50ml' },
      { name: 'Olmeca Altos Plata', desc: '', price: '£8' },
      { name: 'Olmeca Altos Plata Reposado', desc: '', price: '£10' },
      { subheading: 'Mezcal · 50ml' },
      { name: 'Del Maguey Crema De Mezcal', desc: '', price: '£11' },
      { subheading: 'Sake · 175ml' },
      { name: 'Akashi Tai Junmai Ginjo', desc: '', price: '£30' },
      { name: 'Akashi Tai Tokubestu', desc: '', price: '£25' },
      { subheading: 'Japanese Whiskey · 50ml' },
      { name: 'Hatozaki Blended Whiskey', desc: '', price: '£14' },
      { name: 'The Chita', desc: '', price: '£14' },
    ],
  },

  // ── COCKTAILS ─────────────────────────────────────────────────────────────────
  {
    id: 'cocktails',
    category: 'Cocktails',
    intro: '',
    items: [
      { name: 'East Lane Old-Fashion', desc: '', price: '£12' },
      { name: 'Shisho Negroni', desc: '', price: '£12' },
      { name: 'Kyoto Espresso', desc: '', price: '£12' },
      { name: 'Thai Mango Marg', desc: '', price: '£12' },
      { name: 'Full Moon', desc: '', price: '£12' },
      { name: 'Jasmine Yuzu Spritz', desc: '', price: '£12' },
    ],
  },

  // ── MOCKTAILS ─────────────────────────────────────────────────────────────────
  {
    id: 'mocktails',
    category: 'Mocktails',
    intro: '',
    items: [
      { name: 'Yuzu Iced Tea', desc: '', price: '£9' },
      { name: 'Lotus & Leaf', desc: '', price: '£9' },
    ],
  },

  // ── KIDS MENU ─────────────────────────────────────────────────────────────────
  {
    id: 'kids-menu',
    category: 'Kids Menu',
    groupTitle: 'Kids Menu',
    intro: 'For our younger guests',
    items: [
      { subheading: 'Small Plates' },
      { name: 'Wok-Tossed Mushrooms', desc: '', price: '£5' },
      { name: 'Salt and Pepper Grilled Paneer', desc: '', price: '£6' },
      { name: 'Fried Chicken with Mayo', desc: '', price: '£6' },
      { subheading: 'Large Plates' },
      { name: 'Soya Garlic Paneer', desc: '', price: '£8' },
      { name: 'Butter Garlic Prawns', desc: '', price: '£9' },
      { name: 'Ginger Soya Chicken', desc: '', price: '£8' },
      { subheading: 'Sides' },
      { name: 'Vegetable Fried Rice', desc: '', price: '£8' },
      { name: 'Hakka Noodles', desc: '', price: '£8' },
      { name: 'Steamed Jasmine Rice', desc: '', price: '£5' },
    ],
  },
]

const crumbs = breadcrumbSchema([
  { name: 'Home', url: 'https://eastlane.uk' },
  { name: 'Menu', url: 'https://eastlane.uk/menu' },
])

export default function MenuPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(crumbs) }}
      />

      <PageHero
        label="The Menu"
        title="Sharing Plates"
        titleItalic="in Kingston"
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
              <div key={s.id}>
                {s.groupTitle && (
                  <h2 className="display-heading text-brand-dark/90 text-center text-[clamp(2.5rem,7vw,5rem)] leading-none mb-24 lg:mb-32">
                    {s.groupTitle}
                  </h2>
                )}
                <MenuSection
                  id={s.id}
                  category={s.category}
                  intro={s.intro}
                  items={s.items}
                />
              </div>
            ))}
          </div>

          {/* Bottom note + CTA */}
          <div className="mt-20 pt-12 border-t border-cream-dark/35 text-center">
            <p className="font-jost text-sm text-brand-dark/35 mb-10 max-w-2xl mx-auto">
              All prices are inclusive of VAT. Please advise floor manager of allergens or dietary
              requirements. A discretionary 12.5% service charge will be added to your bill.
            </p>
            <BookingCTA
              data-cursor="cta"
              className="pill-btn bg-olive border border-olive text-cream hover:bg-olive-deep hover:border-olive-deep"
            />
          </div>
        </div>
      </section>

      <HomepageContactSection />
    </>
  )
}
