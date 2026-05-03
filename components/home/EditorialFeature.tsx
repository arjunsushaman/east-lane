'use client'

import Link from 'next/link'
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
  imageSrc?: string           // optional — shows placeholder when absent
  imageRight?: boolean        // flip image to right side
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
  bgClass = 'bg-cream-light',
}: EditorialFeatureProps) {
  const textCol = (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="flex flex-col justify-center py-12 lg:py-0 lg:px-16"
    >
      <p className="label-caps text-terracotta mb-5">{label}</p>
      <h2 className="display-heading text-brand-dark text-[clamp(2rem,4vw,3rem)] mb-6 leading-tight">
        {heading}
        {headingItalic && (
          <em className="font-cormorant italic font-normal block text-[0.92em]">{headingItalic}</em>
        )}
      </h2>
      <p className="font-jost text-[0.9375rem] leading-[1.75] text-brand-dark/70 mb-8 max-w-sm">
        {body}
      </p>
      <Link
        href={linkHref}
        className="inline-flex items-center gap-2 label-caps text-brand-dark hover:text-terracotta transition-colors duration-200 group"
      >
        {linkLabel}
        <span className="w-6 h-px bg-current transition-all duration-300 group-hover:w-10" />
        <ArrowRight size={12} className="opacity-70" />
      </Link>
    </motion.div>
  )

  const imageCol = (
    <motion.div
      initial={{ opacity: 0, scale: 1.04 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
      className="relative overflow-hidden"
      style={{ aspectRatio: '4/5', minHeight: '360px' }}
    >
      {imageSrc ? (
        /* eslint-disable-next-line @next/next/no-img-element */
        <img src={imageSrc} alt={imageAlt} className="w-full h-full object-cover" />
      ) : (
        <div className="w-full h-full bg-gradient-to-br from-olive-deep to-brand-dark flex items-center justify-center">
          <p className="label-caps text-cream/25" style={{ fontSize: '0.58rem', textAlign: 'center', padding: '1rem' }}>
            {imageAlt} — client to provide
          </p>
        </div>
      )}
    </motion.div>
  )

  return (
    <section className={`${bgClass} overflow-hidden`}>
      <div className="max-w-[1400px] mx-auto">
        <div className={`grid grid-cols-1 lg:grid-cols-2`}>
          {imageRight ? (
            <>{textCol}{imageCol}</>
          ) : (
            <>{imageCol}{textCol}</>
          )}
        </div>
      </div>
    </section>
  )
}
