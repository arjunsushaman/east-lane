'use client'

import * as Accordion from '@radix-ui/react-accordion'
import { Plus, Minus } from 'lucide-react'
import { useState } from 'react'

export interface FAQItem     { question: string; answer: string }
export interface FAQCategory { category: string; items: FAQItem[] }

export default function FAQAccordion({ categories }: { categories: FAQCategory[] }) {
  return (
    <div className="flex flex-col gap-14">
      {categories.map(cat => (
        <div key={cat.category}>
          <div className="flex items-center gap-4 mb-6">
            <h3 className="display-heading text-terracotta text-2xl">{cat.category}</h3>
            <div className="flex-1 h-px bg-cream-dark/50" />
          </div>
          <Accordion.Root type="multiple" className="flex flex-col">
            {cat.items.map((item, i) => (
              <FAQItem key={i} item={item} />
            ))}
          </Accordion.Root>
        </div>
      ))}
    </div>
  )
}

function FAQItem({ item }: { item: FAQItem }) {
  const [open, setOpen] = useState(false)
  return (
    <Accordion.Item
      value={item.question}
      className="border-b border-cream-dark/40 last:border-b-0"
    >
      <Accordion.Header>
        <Accordion.Trigger
          className="flex w-full items-center justify-between py-5 text-left group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta rounded-sm"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
        >
          <span className="font-jost font-medium text-brand-dark text-[0.9375rem] pr-8 group-hover:text-terracotta transition-colors duration-200">
            {item.question}
          </span>
          <span className="flex-shrink-0 text-terracotta transition-transform duration-200" style={{ transform: open ? 'rotate(0deg)' : 'rotate(0deg)' }}>
            {open ? <Minus size={16} strokeWidth={1.5} /> : <Plus size={16} strokeWidth={1.5} />}
          </span>
        </Accordion.Trigger>
      </Accordion.Header>
      <Accordion.Content className="overflow-hidden data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up">
        <p className="font-jost text-sm leading-relaxed text-brand-dark/55 pb-5 pr-8">
          {item.answer}
        </p>
      </Accordion.Content>
    </Accordion.Item>
  )
}
