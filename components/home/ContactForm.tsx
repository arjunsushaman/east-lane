'use client'

import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import Button from '@/components/ui/Button'

const schema = z.object({
  name: z.string().min(2, 'Please enter your name'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().optional(),
  message: z.string().min(10, 'Please enter a message (min 10 characters)'),
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
    await new Promise((r) => setTimeout(r, 800))
    console.log('Form submitted:', data)
    setSubmitted(true)
    reset()
  }

  const inputBase = `w-full px-4 py-3 font-jost text-sm transition-colors duration-200 outline-none border focus:border-terracotta ${
    light
      ? 'bg-transparent border-cream-dark text-brand-dark placeholder:text-brand-dark/40'
      : 'bg-cream-light border-cream-dark text-brand-dark placeholder:text-brand-dark/40'
  }`

  if (submitted) {
    return (
      <div className="text-center py-8">
        <p className="font-dm-serif text-2xl text-terracotta mb-2">Thank you</p>
        <p className="font-jost text-sm text-olive">We'll be in touch shortly.</p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-4 font-jost text-xs text-terracotta underline underline-offset-4"
        >
          Send another message
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4" noValidate>
      <div>
        <input
          {...register('name')}
          type="text"
          placeholder="Your Name"
          className={inputBase}
          aria-label="Your Name"
        />
        {errors.name && <p className="mt-1 text-xs text-terracotta font-jost">{errors.name.message}</p>}
      </div>

      <div>
        <input
          {...register('email')}
          type="email"
          placeholder="Email Address"
          className={inputBase}
          aria-label="Email Address"
        />
        {errors.email && <p className="mt-1 text-xs text-terracotta font-jost">{errors.email.message}</p>}
      </div>

      {showPhone && (
        <div>
          <input
            {...register('phone')}
            type="tel"
            placeholder="Phone (optional)"
            className={inputBase}
            aria-label="Phone number (optional)"
          />
        </div>
      )}

      <div>
        <textarea
          {...register('message')}
          placeholder="Your Message"
          rows={5}
          className={`${inputBase} resize-none`}
          aria-label="Your Message"
        />
        {errors.message && <p className="mt-1 text-xs text-terracotta font-jost">{errors.message.message}</p>}
      </div>

      <Button type="submit" variant="primary" size="md" disabled={isSubmitting} className="self-start">
        {isSubmitting ? 'Sending…' : 'Send Message'}
      </Button>
    </form>
  )
}
