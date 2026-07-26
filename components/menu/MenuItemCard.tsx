'use client'

export interface MenuItem {
  name: string
  desc: string
  price: string
}

export interface MenuSubheading {
  subheading: string
}

export type MenuEntry = MenuItem | MenuSubheading

export function isSubheading(entry: MenuEntry): entry is MenuSubheading {
  return 'subheading' in entry
}

export default function MenuItemCard({ item }: { item: MenuItem }) {
  return (
    <div className="relative border-b border-cream-dark/25 last:border-0 lg:[&:nth-last-child(2):nth-child(odd)]:border-0">
      <div
        data-menu-item=""
        className="group flex items-start justify-between gap-6 py-5 transition-colors duration-200 hover:bg-cream-dark/20 -mx-3 px-3 rounded-sm cursor-default"
      >
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
        <span
          data-item-price=""
          className="editorial-quote text-terracotta text-[1.2rem] flex-shrink-0 tabular-nums leading-tight mt-0.5"
        >
          {item.price}
        </span>
      </div>
    </div>
  )
}
