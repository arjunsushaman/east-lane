import MotionSection from '@/components/ui/MotionSection'

const TEXT =
  'Some of you may know this address. East Lane sits in the same spot that was home to Bindaas — ' +
  'and if you were a regular, you\'re more than welcome back. Chef Vin has always had a love for ' +
  'the food of the East, and over time that passion grew into something he couldn\'t ignore. What ' +
  'began as Indian cooking evolved naturally into the pan-Asian kitchen he\'d always dreamed of — ' +
  'one that draws from every corner of the East, from the street food stalls of Vietnam to the home ' +
  'kitchens of Korea and Thailand. Same warmth, same heart. A new journey. We hope you\'ll join us for it.'

export default function OriginStorySection() {
  return (
    <section className="bg-olive-deep py-20 lg:py-28">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <MotionSection>
          {/* Decorative rule + label */}
          <div className="flex items-center gap-5 mb-10">
            <div className="h-px flex-1 bg-cream/15" />
            <p className="label-caps text-cream/40 tracking-[0.28em]">A note from us</p>
            <div className="h-px flex-1 bg-cream/15" />
          </div>

          <p className="editorial-quote text-cream/80 text-[clamp(1.1rem,2.2vw,1.55rem)] leading-relaxed">
            {TEXT}
          </p>

          <div className="mt-10 flex justify-center">
            <span className="w-1.5 h-1.5 rounded-full bg-cream/25 inline-block" />
          </div>
        </MotionSection>
      </div>
    </section>
  )
}
