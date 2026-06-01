'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export interface MenuItem {
  name: string
  desc: string
  price: string
  ingredients?: string[]
  calories?: number
  macros?: { protein: string; carbs: string; fat: string }
  tags?: string[]
  allergens?: string[]
}

interface CardConfig {
  type: 'ingredients' | 'nutrition'
  finalX: number
  rotate: number
  zIndex: number
  delay: number
}

const CARD_CONFIGS: CardConfig[] = [
  { type: 'ingredients', finalX: 0,  rotate: -10, zIndex: 1, delay: 0.08 },
  { type: 'nutrition',   finalX: 84, rotate:  5,  zIndex: 2, delay: 0    },
]

// Variants keep enter-delay and exit-no-delay separate
function makeVariants(cfg: CardConfig) {
  return {
    hidden: {
      x: 42,
      y: 16,
      rotate: 0,
      opacity: 0,
      scale: 0.82,
      transition: { duration: 0.15, ease: [0.42, 0, 1, 1] as [number, number, number, number] },
    },
    visible: {
      x: cfg.finalX,
      y: 0,
      rotate: cfg.rotate,
      opacity: 1,
      scale: 1,
      transition: { delay: cfg.delay, duration: 0.35, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
    },
  }
}

export default function MenuItemCard({ item }: { item: MenuItem }) {
  const [isHovered, setIsHovered]   = useState(false)
  const [isTouch,   setIsTouch]     = useState(true)

  useEffect(() => {
    setIsTouch(window.matchMedia('(pointer: coarse)').matches)
  }, [])

  const hasCardData = !!(item.ingredients?.length || item.calories)
  const showDeck    = hasCardData && !isTouch

  return (
    <motion.div
      className="relative border-b border-cream-dark/25 last:border-0 lg:[&:nth-last-child(2):nth-child(odd)]:border-0"
      style={{ zIndex: 1 }}
      animate={{ zIndex: isHovered ? 20 : 1 }}
      transition={{ duration: 0 }}
      onMouseEnter={() => showDeck && setIsHovered(true)}
      onMouseLeave={() => showDeck && setIsHovered(false)}
    >
      {/* Standard menu item row — preserves GSAP-targeted data attributes */}
      <div
        data-menu-item=""
        className="group flex items-start justify-between gap-6 py-5 transition-colors duration-200 hover:bg-cream-dark/20 -mx-3 px-3 rounded-sm cursor-default"
      >
        <div className="flex-1 min-w-0">
          <p className="font-jost font-medium text-[0.9375rem] text-brand-dark group-hover:text-terracotta transition-colors duration-200 leading-snug">
            {item.name}
            {item.tags?.includes('Chef Favourite') && (
              <span className="ml-2 label-caps text-terracotta/60" style={{ fontSize: '0.48rem' }}>
                Chef Fav
              </span>
            )}
          </p>
          {item.desc && (
            <p className="font-jost text-[0.8125rem] text-brand-dark/40 mt-1 leading-relaxed">
              {item.desc}
            </p>
          )}
        </div>
        <span
          data-item-price=""
          className="editorial-quote text-terracotta text-[1.2rem] flex-shrink-0 tabular-nums leading-tight mt-0.5"
        >
          {item.price}
        </span>
      </div>

      {/* Card deck — fanned above the row on hover */}
      {/* Temporarily commented out — ingredients & calories cards hidden
      {showDeck && (
        <div
          className="absolute pointer-events-none select-none"
          style={{
            bottom: 'calc(100% - 4px)',
            left: 12,
            zIndex: 50,
            width: 260,
            height: 150,
          }}
          aria-hidden="true"
        >
          <AnimatePresence>
            {isHovered && CARD_CONFIGS.map((cfg) => (
              <motion.div
                key={cfg.type}
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={makeVariants(cfg)}
                className="absolute bottom-0 w-40 rounded-xl border shadow-xl overflow-hidden"
                style={{
                  left: 0,
                  zIndex: cfg.zIndex,
                  backgroundColor: '#F2EDE0',
                  borderColor: 'rgba(212,201,172,0.45)',
                  transformOrigin: 'bottom center',
                  boxShadow: '0 8px 32px rgba(30,17,11,0.14), 0 2px 8px rgba(30,17,11,0.08)',
                }}
              >
                <InfoCard type={cfg.type} item={item} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      )}
      */}
    </motion.div>
  )
}

function InfoCard({ type, item }: { type: CardConfig['type']; item: MenuItem }) {
  const labelCls = 'label-caps text-terracotta mb-2' as const

  if (type === 'ingredients') {
    return (
      <div className="p-3.5">
        <p className={labelCls} style={{ fontSize: '0.5rem' }}>Ingredients</p>
        <div className="h-px bg-cream-dark/40 mb-2.5" />
        <ul className="space-y-1.5">
          {(item.ingredients ?? []).slice(0, 5).map(ing => (
            <li key={ing} className="flex items-start gap-1.5">
              <span className="text-terracotta/50 flex-shrink-0 mt-[2px]" style={{ fontSize: '0.55rem' }}>·</span>
              <span className="font-jost text-[0.72rem] text-brand-dark/72 leading-snug">{ing}</span>
            </li>
          ))}
          {!item.ingredients?.length && (
            <li className="font-jost text-[0.72rem] text-brand-dark/35">Details coming soon</li>
          )}
        </ul>
      </div>
    )
  }

  if (type === 'nutrition') {
    return (
      <div className="p-3.5">
        <p className={labelCls} style={{ fontSize: '0.5rem' }}>
          {item.calories ? `~${item.calories} kcal` : 'Nutrition'}
        </p>
        <div className="h-px bg-cream-dark/40 mb-2.5" />
        {item.macros ? (
          <div className="grid grid-cols-3 text-center gap-x-1">
            {(['protein', 'carbs', 'fat'] as const).map(key => (
              <div key={key}>
                <p className="font-jost font-semibold text-brand-dark leading-none mb-1" style={{ fontSize: '0.88rem' }}>
                  {item.macros![key]}
                </p>
                <p className="label-caps text-brand-dark/30" style={{ fontSize: '0.44rem' }}>
                  {key === 'protein' ? 'Protein' : key === 'carbs' ? 'Carbs' : 'Fat'}
                </p>
              </div>
            ))}
          </div>
        ) : (
          <p className="font-jost text-[0.72rem] text-brand-dark/35 leading-relaxed">
            Nutritional info available on request
          </p>
        )}
        {item.calories && (
          <p className="font-jost text-[0.62rem] text-brand-dark/25 mt-2.5 text-center">
            per serving · estimates only
          </p>
        )}
      </div>
    )
  }

  return null
}
