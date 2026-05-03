import MotionSection from '@/components/ui/MotionSection'

const days = [
  { label: 'Monday – Thursday', time: '[TBC]' },
  { label: 'Friday – Saturday',  time: '[TBC]' },
  { label: 'Sunday',             time: '[TBC]' },
]

export default function HoursSection() {
  return (
    <section className="bg-brand-dark py-20 lg:py-28" id="hours">
      <MotionSection className="max-w-lg mx-auto px-6 text-center">

        {/* Flanked label */}
        <div className="flex items-center gap-5 mb-12">
          <div className="h-px flex-1 bg-cream/10" />
          <p className="label-caps text-terracotta tracking-[0.28em]">We&apos;re Open</p>
          <div className="h-px flex-1 bg-cream/10" />
        </div>

        <h2 className="display-heading text-cream text-[clamp(2.25rem,5vw,3.5rem)] mb-14 leading-tight">
          Opening{' '}
          <em className="font-cormorant italic font-normal">Hours</em>
        </h2>

        {/* Hours rows */}
        <div className="flex flex-col">
          {days.map((d, i) => (
            <div
              key={i}
              className="flex items-baseline justify-between py-6 border-b last:border-0"
              style={{ borderColor: 'rgba(232,222,200,0.08)' }}
            >
              <span className="font-jost text-sm text-cream/45 tracking-wide text-left">
                {d.label}
              </span>
              <span className="editorial-quote text-cream text-xl">
                {d.time}
              </span>
            </div>
          ))}
        </div>

        {/* Footer note */}
        <p className="mt-10 font-jost text-[0.72rem] text-cream/25 leading-relaxed">
          Hours confirmed before launch.{' '}
          <a
            href="https://www.instagram.com/eastlane_bistro"
            target="_blank"
            rel="noopener noreferrer"
            className="text-terracotta/60 hover:text-terracotta underline underline-offset-4 transition-colors duration-200"
          >
            Follow us
          </a>{' '}
          for the latest updates.
        </p>

      </MotionSection>
    </section>
  )
}
