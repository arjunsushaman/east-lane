import MotionSection from '@/components/ui/MotionSection'
import TextReveal from '@/components/ui/TextReveal'

const INTRO_TEXT =
  'East Lane is Kingston’s melting pot of the East — one address, every craving. ' +
  'From the smoky street stalls of Thailand to the bold, layered flavours of Korea, ' +
  'sharing plates made for passing around, drinks that take you straight back to our ' +
  'favourite corners of the East. Book a table at East Lane, the Asian bistro in ' +
  'Kingston upon Thames.'

export default function IntroSection() {
  return (
    <section className="bg-cream py-20 lg:py-28" id="intro">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <MotionSection className="text-center">

          {/* Decorative rule + label */}
          <div className="flex items-center gap-5 mb-8">
            <div className="h-px flex-1 bg-terracotta/20" />
            <p className="label-caps text-terracotta tracking-[0.28em]">
              Kingston upon Thames
            </p>
            <div className="h-px flex-1 bg-terracotta/20" />
          </div>

          {/* Word-by-word scroll reveal */}
          <TextReveal
            text={INTRO_TEXT}
            className="editorial-quote text-brand-dark text-[clamp(1.2rem,2.4vw,1.7rem)] leading-relaxed"
          />

          {/* Decorative dot */}
          <div className="mt-10 flex justify-center">
            <span className="w-1.5 h-1.5 rounded-full bg-terracotta/40 inline-block" />
          </div>

        </MotionSection>
      </div>
    </section>
  )
}
