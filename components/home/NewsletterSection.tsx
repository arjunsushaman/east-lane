'use client'

import { useState } from 'react'

export default function NewsletterSection() {
  const [email, setEmail]       = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    await new Promise(r => setTimeout(r, 500))
    setSubmitted(true)
    setEmail('')
  }

  return (
    <section className="bg-brand-dark py-20 lg:py-24">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <p className="label-caps text-terracotta mb-4">Stay Connected</p>
        <h2 className="display-heading text-cream text-3xl lg:text-4xl mb-3">
          Be the first to hear
        </h2>
        <p className="editorial-quote text-cream/60 text-xl mb-8">
          Events, new menus, and specials.
        </p>

        {submitted ? (
          <p className="editorial-quote text-cream/70 text-2xl">You&apos;re on the list — thank you.</p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-0 max-w-md mx-auto">
            <label htmlFor="newsletter-email" className="sr-only">Email address</label>
            <input
              id="newsletter-email"
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="flex-1 px-5 py-3.5 font-jost text-sm bg-white/5 border border-cream/20 text-cream placeholder:text-cream/30 outline-none focus:border-cream/50 transition-colors"
              aria-label="Email address for newsletter"
            />
            <button
              type="submit"
              className="px-7 py-3.5 bg-terracotta hover:bg-terracotta-dark text-cream font-jost text-[0.7rem] font-medium tracking-widest uppercase transition-colors duration-200"
            >
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
