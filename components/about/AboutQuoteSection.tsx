import TextReveal from '@/components/ui/TextReveal'

const QUOTE =
  'East Lane is Kingston’s melting pot of the East — one address, every craving. ' +
  'From the smoky street stalls of Thailand to the bold, layered flavours of Korea, ' +
  'we’ve brought the best of Asia’s culinary map to SW London.'

export default function AboutQuoteSection() {
  return (
    <section className="bg-cream py-20">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <TextReveal
          text={QUOTE}
          className="editorial-quote text-brand-dark text-[clamp(1.3rem,2.8vw,1.9rem)] leading-relaxed"
        />
      </div>
    </section>
  )
}
