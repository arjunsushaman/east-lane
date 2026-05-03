import ContactForm from '@/components/home/ContactForm'
import MotionSection from '@/components/ui/MotionSection'

export default function HomepageContactSection() {
  return (
    <section className="bg-cream-light py-20 lg:py-28" id="contact">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <MotionSection>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div>
              <p className="label-caps text-terracotta mb-4">Get in Touch</p>
              <h2 className="display-heading text-brand-dark text-[clamp(2rem,4vw,3rem)] mb-6 leading-tight">
                Say <em className="font-cormorant italic font-normal">Hello</em>
              </h2>
              <p className="font-jost text-[0.9375rem] leading-relaxed text-brand-dark/65 max-w-sm">
                Questions, group bookings, or special requests — we&apos;d love to hear from you.
              </p>
            </div>
            <ContactForm />
          </div>
        </MotionSection>
      </div>
    </section>
  )
}
