import MotionSection from '@/components/ui/MotionSection'

const days = [
  { label: 'Monday – Thursday', time: '[TBC]' },
  { label: 'Friday – Saturday',  time: '[TBC]' },
  { label: 'Sunday',             time: '[TBC]' },
]

export default function HoursSection() {
  return (
    <section className="bg-cream-light py-20 lg:py-24">
      <MotionSection className="max-w-xl mx-auto px-6 text-center">
        <p className="label-caps text-terracotta mb-4">We&apos;re Open</p>
        <h2 className="display-heading text-brand-dark text-4xl lg:text-5xl mb-12">
          Opening <em className="font-cormorant italic font-normal">Hours</em>
        </h2>

        <div className="flex flex-col">
          {days.map((d, i) => (
            <div key={i} className="flex items-center justify-between py-5 border-b border-cream-dark/60 last:border-0">
              <span className="font-jost text-sm text-brand-dark/60 tracking-wide">{d.label}</span>
              <span className="editorial-quote text-brand-dark text-lg">{d.time}</span>
            </div>
          ))}
        </div>

        <p className="mt-8 font-jost text-xs text-brand-dark/35">
          Hours confirmed before launch. Follow{' '}
          <a href="https://www.instagram.com/eastlane_bistro" target="_blank" rel="noopener noreferrer"
            className="text-terracotta hover:text-amber underline underline-offset-4">
            @eastlane_bistro
          </a>{' '}
          for updates.
        </p>
      </MotionSection>
    </section>
  )
}
