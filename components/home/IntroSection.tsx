import MotionSection from '@/components/ui/MotionSection'

export default function IntroSection() {
  return (
    <section className="bg-cream-light py-20 lg:py-28" id="intro">
      <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
        <MotionSection>
          {/* Small label */}
          <p className="label-caps text-terracotta mb-7 tracking-[0.28em]">
            Kingston upon Thames
          </p>

          {/* SEO-critical live text — Cormorant large editorial style */}
          <p className="editorial-quote text-brand-dark text-[clamp(1.25rem,2.5vw,1.75rem)] leading-relaxed">
            East Lane is Kingston's melting pot of the East — one address, every craving.
            From the smoky street stalls of Thailand to the bold, layered flavours of Korea,
            sharing plates made for passing around, drinks that take you straight back to our
            favourite corners of the East. Book a table at East Lane, the pan-Asian bistro in
            Kingston upon Thames.
          </p>
        </MotionSection>
      </div>
    </section>
  )
}
