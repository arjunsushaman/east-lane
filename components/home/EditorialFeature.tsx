'use client'

import { useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { useGSAP } from '@gsap/react'
import { gsap } from '@/lib/gsap'

interface EditorialFeatureProps {
  label: string
  heading?: string
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
  const sectionRef = useRef<HTMLElement>(null)
  const imageWrapRef = useRef<HTMLDivElement>(null)
  const imageInnerRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    if (!imageWrapRef.current || !textRef.current) return
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (!reduced) {
      // Clip-path wipe: image sweeps in from the correct edge
      const clipFrom = imageRight
        ? 'inset(0% 0% 0% 100%)'
        : 'inset(0% 100% 0% 0%)'

      gsap.fromTo(
        imageWrapRef.current,
        { clipPath: clipFrom },
        {
          clipPath: 'inset(0% 0% 0% 0%)',
          ease: 'power2.inOut',
          scrollTrigger: {
            trigger: imageWrapRef.current,
            start: 'top 88%',
            end: 'top 22%',
            scrub: 1,
          },
        }
      )

      // Inner image parallax inside the clip container
      if (imageInnerRef.current) {
        gsap.fromTo(
          imageInnerRef.current,
          { y: -35 },
          {
            y: 35,
            ease: 'none',
            scrollTrigger: {
              trigger: imageWrapRef.current,
              start: 'top bottom',
              end: 'bottom top',
              scrub: true,
            },
          }
        )
      }

      // Text elements stagger in one at a time
      const textEls = textRef.current.querySelectorAll('[data-anim]')
      gsap.fromTo(
        textEls,
        { opacity: 0, x: imageRight ? 28 : -28 },
        {
          opacity: 1,
          x: 0,
          duration: 0.75,
          ease: 'power2.out',
          stagger: 0.1,
          scrollTrigger: {
            trigger: textRef.current,
            start: 'top 76%',
            once: true,
          },
        }
      )
    } else {
      // Reduced motion: simple opacity fade
      const textEls = textRef.current.querySelectorAll('[data-anim]')
      gsap.fromTo(
        [imageWrapRef.current, ...Array.from(textEls)],
        { opacity: 0 },
        {
          opacity: 1,
          duration: 0.5,
          stagger: 0.07,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            once: true,
          },
        }
      )
    }
  }, [imageRight])

  const textCol = (
    <div
      ref={textRef}
      className="flex flex-col justify-center py-14 px-8 lg:py-0 lg:px-16 xl:px-20"
    >
      <div className="flex items-center gap-3 mb-6" data-anim="">
        <span className="h-px w-6 bg-terracotta/50" />
        <p className="label-caps text-terracotta">{label}</p>
      </div>

      {(heading || headingItalic) && (
        <h2
          data-anim=""
          className="display-heading text-brand-dark text-[clamp(2rem,3.8vw,3.1rem)] mb-6 leading-[1.08]"
        >
          {heading}
          {headingItalic && (
            <em className="font-cormorant italic font-normal block text-[0.92em] mt-1">
              {headingItalic}
            </em>
          )}
        </h2>
      )}

      <p
        data-anim=""
        className="font-jost text-[0.9375rem] leading-[1.8] text-brand-dark/65 mb-10 max-w-[38ch]"
      >
        {body}
      </p>

      <Link
        href={linkHref}
        data-anim=""
        data-cursor="cta"
        className="inline-flex items-center gap-3 label-caps text-brand-dark hover:text-terracotta transition-colors duration-300 group self-start"
      >
        {linkLabel}
        <span className="flex items-center gap-1.5">
          <span className="block w-7 h-px bg-current transition-all duration-300 group-hover:w-12" />
          <ArrowRight size={11} className="opacity-60 transition-transform duration-300 group-hover:translate-x-1" />
        </span>
      </Link>
    </div>
  )

  const imageCol = (
    <div
      ref={imageWrapRef}
      className="relative overflow-hidden"
      style={{ minHeight: 'clamp(380px, 55vw, 640px)' }}
      data-cursor="image"
    >
      {/* Inner oversized for parallax travel */}
      <div
        ref={imageInnerRef}
        className="absolute inset-x-0"
        style={{ top: '-40px', bottom: '-40px' }}
      >
        {imageSrc ? (
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            loading="lazy"
            className="object-cover"
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
      </div>
    </div>
  )

  return (
    <section ref={sectionRef} className={`${bgClass} overflow-hidden`}>
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {imageRight ? <>{textCol}{imageCol}</> : <>{imageCol}{textCol}</>}
        </div>
      </div>
    </section>
  )
}
