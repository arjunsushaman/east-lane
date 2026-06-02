import type { Metadata } from 'next'
import { pageMetadata } from '@/lib/metadata'
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
    intro: 'Begin the journey — pass them around',
    items: [
      {
        name: 'Edamame',
        desc: 'Salted or spicy',
        price: '£6',
        ingredients: ['Edamame', 'Sea salt', 'Chilli flakes', 'Garlic', 'Sesame oil'],
        calories: 120,
        macros: { protein: '11g', carbs: '10g', fat: '5g' },
        tags: ['Vegan', 'Gluten Free'],
        allergens: ['Soy', 'Sesame'],
      },
      {
        name: 'Assorted Crackers',
        desc: 'House chili sauce',
        price: '£6',
        ingredients: ['Prawn crackers', 'Rice crackers', 'House chili sauce', 'Garlic', 'Spring onion'],
        calories: 160,
        macros: { protein: '2g', carbs: '22g', fat: '7g' },
        tags: ['Gluten Free'],
        allergens: ['Shellfish'],
      },
      {
        name: 'Smashed Cucumber',
        desc: 'Sesame chili soy',
        price: '£8',
        ingredients: ['Cucumber', 'Sesame oil', 'Chilli', 'Soy sauce', 'Rice vinegar'],
        calories: 80,
        macros: { protein: '2g', carbs: '8g', fat: '4g' },
        tags: ['Vegan', 'Gluten Free'],
        allergens: ['Soy', 'Sesame'],
      },
      {
        name: 'Cauliflower Karaage',
        desc: 'Gochujang sauce (Korean)',
        price: '£10',
        ingredients: ['Cauliflower', 'Gochujang', 'Potato starch', 'Garlic', 'Soy sauce'],
        calories: 220,
        macros: { protein: '6g', carbs: '28g', fat: '9g' },
        tags: ['Vegan', 'Spicy'],
        allergens: ['Soy', 'Gluten'],
      },
      {
        name: 'Crispy Vegetables',
        desc: 'Som tam sauce (Thai)',
        price: '£10',
        ingredients: ['Mixed vegetables', 'Green papaya', 'Fish sauce', 'Lime juice', 'Chilli'],
        calories: 180,
        macros: { protein: '4g', carbs: '24g', fat: '7g' },
        tags: ['Vegan'],
        allergens: ['Fish sauce'],
      },
      {
        name: 'Vegetable Spring Rolls',
        desc: 'House sweet chili sauce (Chinese)',
        price: '£10',
        ingredients: ['Rice paper', 'Glass noodles', 'Carrot', 'Cabbage', 'Sweet chili sauce'],
        calories: 200,
        macros: { protein: '4g', carbs: '28g', fat: '8g' },
        tags: ['Vegan'],
        allergens: ['Gluten'],
      },
      {
        name: 'Tofu in Black Pepper Sauce',
        desc: 'Chinese-style wok toss',
        price: '£11',
        ingredients: ['Silken tofu', 'Black pepper', 'Oyster sauce', 'Garlic', 'Spring onion'],
        calories: 190,
        macros: { protein: '12g', carbs: '14g', fat: '9g' },
        tags: ['Vegetarian'],
        allergens: ['Soy', 'Shellfish'],
      },
      {
        name: 'Tangra Chili Paneer',
        desc: 'Indo-Chinese',
        price: '£12',
        ingredients: ['Paneer', 'Green chilli', 'Bell pepper', 'Soy sauce', 'Ginger'],
        calories: 280,
        macros: { protein: '14g', carbs: '18g', fat: '16g' },
        tags: ['Vegetarian', 'Spicy'],
        allergens: ['Dairy', 'Soy', 'Gluten'],
      },
      {
        name: 'Crispy Corn',
        desc: 'Salt n pepper (Chinese)',
        price: '£11',
        ingredients: ['Sweetcorn', 'Salt', 'Black pepper', 'Spring onion', 'Chilli flakes'],
        calories: 240,
        macros: { protein: '4g', carbs: '34g', fat: '10g' },
        tags: ['Vegan', 'Gluten Free'],
      },
      {
        name: 'Crispy Lotus Stem',
        desc: 'Sambhal chili sauce (Malaysian)',
        price: '£11',
        ingredients: ['Lotus stem', 'Sambhal sauce', 'Chilli', 'Garlic', 'Sesame seeds'],
        calories: 210,
        macros: { protein: '3g', carbs: '30g', fat: '8g' },
        tags: ['Vegan'],
        allergens: ['Sesame'],
      },
      {
        name: 'Sichuan Mushrooms Gua Bao',
        desc: 'Steamed bao (Vietnamese)',
        price: '£10',
        ingredients: ['Steamed bao', 'Shiitake mushrooms', 'Sichuan peppercorn', 'Hoisin sauce', 'Cucumber'],
        calories: 260,
        macros: { protein: '8g', carbs: '34g', fat: '10g' },
        tags: ['Vegetarian'],
        allergens: ['Gluten', 'Soy', 'Sesame'],
      },
      {
        name: 'Chicken Karaage',
        desc: 'Japanese-style fried chicken',
        price: '£10',
        ingredients: ['Chicken thigh', 'Soy sauce', 'Mirin', 'Garlic', 'Ginger'],
        calories: 290,
        macros: { protein: '22g', carbs: '18g', fat: '14g' },
        tags: ['Chef Favourite'],
        allergens: ['Soy', 'Gluten'],
      },
      {
        name: 'Hakka Chili Chicken',
        desc: 'Chinese',
        price: '£11',
        ingredients: ['Chicken', 'Green chilli', 'Soy sauce', 'Garlic', 'Spring onion'],
        calories: 310,
        macros: { protein: '24g', carbs: '16g', fat: '16g' },
        tags: ['Spicy'],
        allergens: ['Soy', 'Gluten'],
      },
      {
        name: 'Salt n Pepper Prawns',
        desc: 'Chinese',
        price: '£12',
        ingredients: ['Tiger prawns', 'Salt', 'Black pepper', 'Spring onion', 'Chilli'],
        calories: 250,
        macros: { protein: '20g', carbs: '14g', fat: '12g' },
        tags: ['Gluten Free'],
        allergens: ['Shellfish'],
      },
      {
        name: 'Crispy Baby Squid',
        desc: 'Chili lime aioli',
        price: '£12',
        ingredients: ['Baby squid', 'Chilli', 'Lime', 'Aioli', 'Cornflour'],
        calories: 270,
        macros: { protein: '18g', carbs: '20g', fat: '12g' },
        allergens: ['Shellfish', 'Egg', 'Gluten'],
      },
      {
        name: 'Creamy Sambhal Prawns',
        desc: 'Butter garlic (Malaysian)',
        price: '£13',
        ingredients: ['King prawns', 'Sambhal sauce', 'Butter', 'Garlic', 'Cream'],
        calories: 320,
        macros: { protein: '22g', carbs: '12g', fat: '20g' },
        allergens: ['Shellfish', 'Dairy'],
      },
      {
        name: 'Braised Pork Belly',
        desc: 'Lantern chili & fresh herbs (Vietnamese)',
        price: '£15',
        ingredients: ['Pork belly', 'Lantern chilli', 'Star anise', 'Soy sauce', 'Fresh herbs'],
        calories: 420,
        macros: { protein: '26g', carbs: '18g', fat: '28g' },
        tags: ['Chef Favourite'],
        allergens: ['Soy'],
      },
      {
        name: 'Shao Xing Beef',
        desc: 'Crispy chili (Chinese)',
        price: '£12',
        ingredients: ['Beef strips', 'Shaoxing wine', 'Crispy chilli', 'Garlic', 'Spring onion'],
        calories: 380,
        macros: { protein: '28g', carbs: '16g', fat: '22g' },
        allergens: ['Soy', 'Gluten'],
      },
      {
        name: 'Chicken Bao Bun',
        desc: 'Spicy mayo',
        price: '£11',
        ingredients: ['Steamed bao', 'Chicken thigh', 'Spicy mayo', 'Pickled cucumber', 'Spring onion'],
        calories: 310,
        macros: { protein: '20g', carbs: '32g', fat: '12g' },
        allergens: ['Gluten', 'Egg', 'Soy'],
      },
    ],
  },

  // ── DIM SUM ─────────────────────────────────────────────────────────────────
  {
    id: 'dim-sum',
    category: 'Dim Sum',
    intro: 'Handcrafted, steamed & pan-seared',
    items: [
      {
        name: 'Assorted Vegetable Dumplings',
        desc: 'Pan seared, pickled chili spiced tofu',
        price: '£8',
        ingredients: ['Tofu', 'Mixed vegetables', 'Pickled chili', 'Dumpling wrapper', 'Sesame oil'],
        calories: 180,
        macros: { protein: '6g', carbs: '26g', fat: '5g' },
        tags: ['Vegan'],
        allergens: ['Gluten', 'Soy', 'Sesame'],
      },
      {
        name: 'Chicken Gyoza',
        desc: 'Pan seared dumplings',
        price: '£9',
        ingredients: ['Chicken mince', 'Cabbage', 'Ginger', 'Garlic', 'Sesame oil'],
        calories: 220,
        macros: { protein: '16g', carbs: '22g', fat: '8g' },
        tags: ['Chef Favourite'],
        allergens: ['Gluten', 'Soy', 'Sesame'],
      },
      {
        name: 'Chicken Dumplings',
        desc: 'Chili oil',
        price: '£9',
        ingredients: ['Chicken mince', 'Ginger', 'Soy sauce', 'Chilli oil', 'Spring onion'],
        calories: 200,
        macros: { protein: '14g', carbs: '20g', fat: '7g' },
        allergens: ['Gluten', 'Soy'],
      },
      {
        name: 'Har Gau Prawns',
        desc: 'Steamed prawn dumpling',
        price: '£10',
        ingredients: ['Tiger prawns', 'Bamboo shoots', 'Sesame oil', 'Rice starch wrapper', 'White pepper'],
        calories: 190,
        macros: { protein: '14g', carbs: '18g', fat: '6g' },
        allergens: ['Shellfish', 'Sesame'],
      },
      {
        name: 'Pork Dumplings',
        desc: 'Chili oil',
        price: '£9',
        ingredients: ['Pork mince', 'Ginger', 'Garlic', 'Chilli oil', 'Spring onion'],
        calories: 240,
        macros: { protein: '16g', carbs: '22g', fat: '10g' },
        allergens: ['Gluten', 'Soy'],
      },
      {
        name: 'Char Siu Pork Bao',
        desc: 'Steamed BBQ pork bun',
        price: '£9',
        ingredients: ['Steamed bao', 'BBQ pork', 'Hoisin sauce', 'Spring onion', 'Sesame seeds'],
        calories: 280,
        macros: { protein: '14g', carbs: '38g', fat: '8g' },
        allergens: ['Gluten', 'Soy', 'Sesame'],
      },
    ],
  },

  // ── GRILLS ──────────────────────────────────────────────────────────────────
  {
    id: 'grills',
    category: 'Grills',
    intro: 'From the open flame — charred, smoky, shared',
    items: [
      {
        name: 'Broccoli Tender Stem',
        desc: 'Sichuan sour cream',
        price: '£10',
        ingredients: ['Tenderstem broccoli', 'Sichuan peppercorn', 'Sour cream', 'Garlic', 'Sesame oil'],
        calories: 160,
        macros: { protein: '6g', carbs: '12g', fat: '9g' },
        tags: ['Vegetarian', 'Gluten Free'],
        allergens: ['Dairy', 'Sesame'],
      },
      {
        name: 'Grilled Paneer',
        desc: 'Thai curry',
        price: '£12',
        ingredients: ['Paneer', 'Thai red curry paste', 'Coconut milk', 'Lime', 'Coriander'],
        calories: 320,
        macros: { protein: '18g', carbs: '14g', fat: '22g' },
        tags: ['Vegetarian', 'Gluten Free'],
        allergens: ['Dairy'],
      },
      {
        name: 'Aubergine',
        desc: 'Miso sauce',
        price: '£12',
        ingredients: ['Aubergine', 'White miso', 'Mirin', 'Sake', 'Sesame seeds'],
        calories: 220,
        macros: { protein: '6g', carbs: '22g', fat: '12g' },
        tags: ['Vegan'],
        allergens: ['Soy', 'Sesame'],
      },
      {
        name: 'Thai Chicken Chops',
        desc: 'Soy garlic, scallion & ginger hainanese sauce',
        price: '£14',
        ingredients: ['Chicken thighs', 'Soy sauce', 'Garlic', 'Ginger', 'Hainanese sauce'],
        calories: 360,
        macros: { protein: '34g', carbs: '8g', fat: '20g' },
        allergens: ['Soy'],
      },
      {
        name: 'Pork Belly',
        desc: 'Yakitori glaze',
        price: '£13',
        ingredients: ['Pork belly', 'Yakitori sauce', 'Mirin', 'Sake', 'Spring onion'],
        calories: 380,
        macros: { protein: '24g', carbs: '14g', fat: '26g' },
        allergens: ['Soy', 'Gluten'],
      },
      {
        name: 'Chicken Satay',
        desc: 'Chili peanut sauce',
        price: '£12',
        ingredients: ['Chicken breast', 'Satay sauce', 'Peanuts', 'Chilli', 'Lemongrass'],
        calories: 340,
        macros: { protein: '30g', carbs: '16g', fat: '18g' },
        allergens: ['Peanuts', 'Soy'],
      },
      {
        name: 'Grilled Prawns',
        desc: 'Curried egg sauce',
        price: '£13',
        ingredients: ['Tiger prawns', 'Curry powder', 'Egg yolk', 'Butter', 'Spring onion'],
        calories: 290,
        macros: { protein: '24g', carbs: '10g', fat: '16g' },
        allergens: ['Shellfish', 'Egg', 'Dairy'],
      },
      {
        name: 'Spiced Seabass',
        desc: 'Butter garlic, lemon',
        price: '£14',
        ingredients: ['Seabass fillet', 'Butter', 'Garlic', 'Lemon', 'Mixed spices'],
        calories: 320,
        macros: { protein: '30g', carbs: '6g', fat: '18g' },
        tags: ['Gluten Free'],
        allergens: ['Fish', 'Dairy'],
      },
      {
        name: 'Lamb Racks',
        desc: 'Korean kimchi butter',
        price: '£16',
        ingredients: ['Lamb rack', 'Kimchi butter', 'Garlic', 'Rosemary', 'Gochujang'],
        calories: 480,
        macros: { protein: '36g', carbs: '8g', fat: '32g' },
        tags: ['Chef Favourite'],
        allergens: ['Dairy'],
      },
    ],
  },

  // ── LARGE PLATES ────────────────────────────────────────────────────────────
  {
    id: 'large-plates',
    category: 'Large Plates',
    intro: 'Mix & match — choose your sauce: Thai green curry · Hot garlic · Sichuan',
    items: [
      {
        name: 'Tofu',
        desc: 'With your choice of sauce, served with jasmine rice',
        price: '£16',
        ingredients: ['Silken tofu', 'Choice of sauce', 'Jasmine rice', 'Spring onion', 'Chilli'],
        calories: 480,
        macros: { protein: '18g', carbs: '52g', fat: '16g' },
        tags: ['Vegan', 'Gluten Free'],
        allergens: ['Soy'],
      },
      {
        name: 'Vegetables',
        desc: 'With your choice of sauce, served with jasmine rice',
        price: '£16',
        ingredients: ['Seasonal vegetables', 'Choice of sauce', 'Jasmine rice', 'Garlic', 'Ginger'],
        calories: 420,
        macros: { protein: '10g', carbs: '58g', fat: '12g' },
        tags: ['Vegan', 'Gluten Free'],
      },
      {
        name: 'Chicken',
        desc: 'With your choice of sauce, served with jasmine rice',
        price: '£18',
        ingredients: ['Chicken breast', 'Choice of sauce', 'Jasmine rice', 'Spring onion', 'Lime'],
        calories: 560,
        macros: { protein: '42g', carbs: '50g', fat: '16g' },
        tags: ['Gluten Free'],
        allergens: ['Fish sauce'],
      },
      {
        name: 'Prawns',
        desc: 'With your choice of sauce, served with jasmine rice',
        price: '£19',
        ingredients: ['Tiger prawns', 'Choice of sauce', 'Jasmine rice', 'Spring onion', 'Chilli'],
        calories: 540,
        macros: { protein: '36g', carbs: '52g', fat: '14g' },
        tags: ['Gluten Free'],
        allergens: ['Shellfish', 'Fish sauce'],
      },
    ],
  },

  // ── CHEF'S SPECIALS ──────────────────────────────────────────────────────────
  {
    id: 'chefs-specials',
    category: "Chef's Specials",
    intro: "Chef Vin's signature dishes — the heart of the kitchen",
    items: [
      {
        name: 'Yasai Katsu Curry',
        desc: 'Sticky rice',
        price: '£18',
        ingredients: ['Mixed vegetables', 'Katsu curry sauce', 'Sticky rice', 'Pickled daikon', 'Spring onion'],
        calories: 580,
        macros: { protein: '14g', carbs: '72g', fat: '22g' },
        tags: ['Vegetarian'],
        allergens: ['Gluten', 'Soy'],
      },
      {
        name: 'Braised Lamb Shank',
        desc: 'Scallion pancake',
        price: '£24',
        ingredients: ['Lamb shank', 'Scallion pancake', 'Red wine', 'Star anise', 'Ginger'],
        calories: 680,
        macros: { protein: '52g', carbs: '38g', fat: '32g' },
        tags: ['Chef Favourite'],
        allergens: ['Gluten'],
      },
      {
        name: 'Nasi Goreng Seafood',
        desc: 'Wok-fried rice with mixed seafood',
        price: '£18',
        ingredients: ['Jasmine rice', 'Mixed seafood', 'Egg', 'Kecap manis', 'Sambal'],
        calories: 580,
        macros: { protein: '32g', carbs: '68g', fat: '16g' },
        allergens: ['Shellfish', 'Egg', 'Soy', 'Gluten'],
      },
      {
        name: 'Wok Tossed Aromatic Duck',
        desc: 'Mandarin pancake',
        price: '£15',
        ingredients: ['Duck breast', 'Mandarin pancake', 'Hoisin sauce', 'Cucumber', 'Spring onion'],
        calories: 520,
        macros: { protein: '34g', carbs: '36g', fat: '24g' },
        allergens: ['Gluten', 'Soy', 'Sesame'],
      },
    ],
  },

  // ── NOODLES & RICE ───────────────────────────────────────────────────────────
  {
    id: 'noodles-rice',
    category: 'Noodles & Rice',
    intro: 'Add protein: chicken +£8 · prawns +£10 · mixed meat +£10 · fried egg +£2',
    items: [
      {
        name: 'Vegetable Fried Rice',
        desc: 'Wok tossed with seasonal vegetables',
        price: '£6',
        ingredients: ['Jasmine rice', 'Mixed vegetables', 'Egg', 'Soy sauce', 'Spring onion'],
        calories: 320,
        macros: { protein: '7g', carbs: '58g', fat: '8g' },
        tags: ['Vegetarian'],
        allergens: ['Soy', 'Egg'],
      },
      {
        name: 'Vegetable Truffle Fried Rice',
        desc: 'Black truffle oil, seasonal vegetables',
        price: '£8',
        ingredients: ['Jasmine rice', 'Truffle oil', 'Mixed vegetables', 'Egg', 'Soy sauce'],
        calories: 380,
        macros: { protein: '8g', carbs: '60g', fat: '12g' },
        tags: ['Vegetarian'],
        allergens: ['Soy', 'Egg'],
      },
      {
        name: 'Assorted Vegetable Hakka Noodles',
        desc: 'Wok tossed egg noodles',
        price: '£8',
        ingredients: ['Egg noodles', 'Mixed vegetables', 'Soy sauce', 'Sesame oil', 'Spring onion'],
        calories: 360,
        macros: { protein: '10g', carbs: '58g', fat: '10g' },
        tags: ['Vegetarian'],
        allergens: ['Gluten', 'Egg', 'Soy', 'Sesame'],
      },
      {
        name: 'Steamed Jasmine Rice',
        desc: '',
        price: '£4',
        ingredients: ['Jasmine rice', 'Water'],
        calories: 160,
        macros: { protein: '3g', carbs: '36g', fat: '0g' },
        tags: ['Vegan', 'Gluten Free'],
      },
    ],
  },

  // ── DESSERTS ─────────────────────────────────────────────────────────────────
  {
    id: 'desserts',
    category: 'Desserts',
    intro: 'Sweet endings from across the East',
    items: [
      {
        name: 'Chocolate Brownie',
        desc: 'Vanilla ice cream',
        price: '£9',
        ingredients: ['Dark chocolate', 'Butter', 'Eggs', 'Vanilla ice cream', 'Cocoa powder'],
        calories: 420,
        macros: { protein: '6g', carbs: '52g', fat: '22g' },
        tags: ['Vegetarian'],
        allergens: ['Dairy', 'Egg', 'Gluten'],
      },
      {
        name: 'Crispy Darsaan',
        desc: 'Vanilla ice cream, lemongrass sauce',
        price: '£8',
        ingredients: ['Crispy noodles', 'Honey', 'Sesame seeds', 'Vanilla ice cream', 'Lemongrass sauce'],
        calories: 380,
        macros: { protein: '5g', carbs: '58g', fat: '16g' },
        tags: ['Vegetarian'],
        allergens: ['Dairy', 'Gluten', 'Sesame'],
      },
      {
        name: 'Jaggery Coconut Crème Brûlée',
        desc: 'Caramelised jaggery crust',
        price: '£8',
        ingredients: ['Coconut cream', 'Jaggery', 'Eggs', 'Vanilla', 'Brown sugar'],
        calories: 360,
        macros: { protein: '6g', carbs: '42g', fat: '20g' },
        tags: ['Vegetarian', 'Gluten Free'],
        allergens: ['Dairy', 'Egg'],
      },
    ],
  },
]

export default function MenuPage() {
  return (
    <>
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
