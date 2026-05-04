'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'

interface EditorialFeatureProps {
  label: string
  heading: string
  headingItalic?: string
  body: string
  linkLabel: string
  linkHref: string
  imageAlt: string
  imageSrc?: string
  imageRight?: boolean
  bgClass?: string
}

export default function EditorialFeature({
  label,
  heading,
  headingItalic,
  body,
  linkLabel,
  linkHref,
  imageAlt,
  imageSrc,
  imageRight = false,
  bgClass = 'bg-cream',
}: EditorialFeatureProps) {

  const textCol = (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
      className="flex flex-col justify-center py-14 px-8 lg:py-0 lg:px-16 xl:px-20"
    >
      {/* Label with short rule */}
      <div className="flex items-center gap-3 mb-6">
        <span className="h-px w-6 bg-terracotta/50" />
        <p className="label-caps text-terracotta">{label}</p>
      </div>

      <h2 className="display-heading text-brand-dark text-[clamp(2rem,3.8vw,3.1rem)] mb-6 leading-[1.08]">
        {heading}
        {headingItalic && (
          <em className="font-cormorant italic font-normal block text-[0.92em] mt-1">
            {headingItalic}
          </em>
        )}
      </h2>

      <p className="font-jost text-[0.9375rem] leading-[1.8] text-brand-dark/65 mb-10 max-w-[38ch]">
        {body}
      </p>

      <Link
        href={linkHref}
        className="inline-flex items-center gap-3 label-caps text-brand-dark hover:text-terracotta transition-colors duration-300 group self-start"
      >
        {linkLabel}
        <span className="flex items-center gap-1.5">
          <span className="block w-7 h-px bg-current transition-all duration-300 group-hover:w-12" />
          <ArrowRight size={11} className="opacity-60 transition-transform duration-300 group-hover:translate-x-1" />
        </span>
      </Link>
    </motion.div>
  )

  const imageCol = (
    <motion.div
      initial={{ opacity: 0, scale: 1.05 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      className="relative overflow-hidden group"
      style={{ minHeight: 'clamp(380px, 55vw, 640px)' }}
    >
      {imageSrc ? (
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          loading="lazy"
          className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03]"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
      ) : (
        <div className="w-full h-full bg-gradient-to-br from-olive to-brand-dark flex items-center justify-center">
          <p
            className="label-caps text-cream/20 text-center px-4"
            style={{ fontSize: '0.58rem' }}
          >
            {imageAlt} — client to provide
          </p>
        </div>
      )}
    </motion.div>
  )

  return (
    <section className={`${bgClass} overflow-hidden`}>
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {imageRight ? <>{textCol}{imageCol}</> : <>{imageCol}{textCol}</>}
        </div>
      </div>
    </section>
  )
}
