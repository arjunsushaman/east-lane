import MotionSection from '@/components/ui/MotionSection'

interface PageHeroProps {
  label?: string
  title: string
  titleItalic?: string
  subtitle?: string
  dark?: boolean
}

export default function PageHero({
  label,
  title,
  titleItalic,
  subtitle,
  dark = true,
}: PageHeroProps) {
  const bg   = dark ? 'bg-olive' : 'bg-cream'
  const text = dark ? 'text-cream'    : 'text-brand-dark'

  return (
    <section className={`${bg} pt-36 pb-16 lg:pt-44 lg:pb-20`}>
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        {/* Top rule */}
        <div className={`h-px mb-10 ${dark ? 'bg-cream/20' : 'bg-cream-dark/50'}`} />

        <MotionSection>
          {label && (
            <p className={`label-caps mb-5 ${dark ? 'text-cream/70' : 'text-terracotta'}`}>{label}</p>
          )}
          <h1 className={`display-heading ${text} text-[clamp(2.75rem,7vw,5.5rem)] leading-tight max-w-3xl`}>
            {title}
            {titleItalic && (
              <em className="font-cormorant italic font-normal block">{titleItalic}</em>
            )}
          </h1>
          {subtitle && (
            <p className={`mt-4 font-jost text-sm leading-relaxed max-w-xl ${dark ? 'text-cream/60' : 'text-brand-dark/55'}`}>
              {subtitle}
            </p>
          )}
        </MotionSection>

        <div className={`h-px mt-12 ${dark ? 'bg-cream/15' : 'bg-cream-dark/40'}`} />
      </div>
    </section>
  )
}
