'use client'

import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'

const schema = z.object({
  name:    z.string().min(2, 'Please enter your name'),
  email:   z.string().email('Please enter a valid email address'),
  phone:   z.string().optional(),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})

type FormData = z.infer<typeof schema>

interface ContactFormProps {
  showPhone?: boolean
  light?: boolean
}

export default function ContactForm({ showPhone = false, light = false }: ContactFormProps) {
  const [submitted, setSubmitted] = useState(false)
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({ resolver: zodResolver(schema) })

  const onSubmit = async (data: FormData) => {
    await new Promise(r => setTimeout(r, 800))
    console.log('Form submitted:', data)
    setSubmitted(true)
    reset()
  }

  const fieldCls = [
    'w-full bg-transparent border-0 border-b py-3 px-0',
    'font-jost text-[0.9375rem] transition-colors duration-300',
    'focus:outline-none',
    light
      ? 'border-cream/30 text-cream placeholder:text-cream/20 focus:border-cream'
      : 'border-brand-dark/20 text-brand-dark placeholder:text-brand-dark/20 focus:border-terracotta',
  ].join(' ')

  const labelCls = `label-caps block mb-2 ${light ? 'text-cream/50' : 'text-brand-dark/45'}`
  const errorCls = 'mt-1.5 font-jost text-[0.65rem] tracking-wide text-terracotta'

  if (submitted) {
    return (
      <div className="py-10 text-center">
        <div className="h-px w-10 bg-terracotta mx-auto mb-7" />
        <p className="display-heading text-terracotta text-3xl mb-3">Thank you</p>
        <p className={`editorial-quote text-lg ${light ? 'text-cream/60' : 'text-brand-dark/55'}`}>
          We'll be in touch shortly.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className={`mt-7 font-jost text-[0.65rem] uppercase tracking-[0.18em] transition-colors duration-200 ${
            light ? 'text-cream/40 hover:text-cream' : 'text-brand-dark/35 hover:text-terracotta'
          }`}
        >
          Send another message
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-7" noValidate>

      {/* Name + Email — side by side */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-7">
        <div>
          <label className={labelCls}>Name</label>
          <input
            {...register('name')}
            type="text"
            placeholder="Your name"
            className={fieldCls}
            aria-label="Your name"
          />
          {errors.name && <p className={errorCls}>{errors.name.message}</p>}
        </div>

        <div>
          <label className={labelCls}>Email</label>
          <input
            {...register('email')}
            type="email"
            placeholder="your@email.com"
            className={fieldCls}
            aria-label="Email address"
          />
          {errors.email && <p className={errorCls}>{errors.email.message}</p>}
        </div>
      </div>

      {showPhone && (
        <div>
          <label className={labelCls}>
            Phone{' '}
            <span className="normal-case tracking-normal font-normal opacity-50">(optional)</span>
          </label>
          <input
            {...register('phone')}
            type="tel"
            placeholder="+44"
            className={fieldCls}
            aria-label="Phone number (optional)"
          />
        </div>
      )}

      <div>
        <label className={labelCls}>Message</label>
        <textarea
          {...register('message')}
          placeholder="How can we help?"
          rows={4}
          className={`${fieldCls} resize-none`}
          aria-label="Your message"
        />
        {errors.message && <p className={errorCls}>{errors.message.message}</p>}
      </div>

      <div className="pt-1">
        <button
          type="submit"
          disabled={isSubmitting}
          className={`pill-btn border transition-colors duration-300 ${
            light
              ? 'border-cream/60 text-cream hover:bg-cream hover:text-brand-dark'
              : 'border-brand-dark/40 text-brand-dark hover:bg-brand-dark hover:text-cream'
          } ${isSubmitting ? 'opacity-50 pointer-events-none' : ''}`}
        >
          {isSubmitting ? '· Sending… ·' : '· Send Message ·'}
        </button>
      </div>
    </form>
  )
}
