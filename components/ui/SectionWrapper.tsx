type BgVariant = 'cream' | 'olive' | 'olive-deep' | 'amber' | 'brand-dark' | 'white'

interface SectionWrapperProps {
  children: React.ReactNode
  bg?: BgVariant
  className?: string
  id?: string
  narrow?: boolean
}

const bgClasses: Record<BgVariant, string> = {
  'cream':      'bg-cream text-brand-dark',
  'olive':      'bg-olive text-cream',
  'olive-deep': 'bg-olive-deep text-cream',
  'amber':      'bg-amber text-cream',
  'brand-dark': 'bg-brand-dark text-cream',
  'white':      'bg-white text-brand-dark',
}

export default function SectionWrapper({
  children,
  bg = 'cream',
  className = '',
  id,
  narrow = false,
}: SectionWrapperProps) {
  return (
    <section id={id} className={`py-20 lg:py-28 ${bgClasses[bg]} ${className}`}>
      <div className={`mx-auto px-6 lg:px-8 ${narrow ? 'max-w-3xl' : 'max-w-7xl'}`}>
        {children}
      </div>
    </section>
  )
}
