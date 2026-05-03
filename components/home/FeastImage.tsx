'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

export default function FeastImage() {
  return (
    <section
      className="w-full relative overflow-hidden"
      style={{ height: 'clamp(340px, 58vw, 700px)' }}
      aria-label="East Lane sharing plates"
    >
      {/* Image with subtle entrance scale */}
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.06 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true, margin: '-10%' }}
        transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
      >
        <Image
          src="/images/feast.jpg"
          alt="East Lane sharing plates spread — food for passing around the table"
          fill
          className="object-cover"
          sizes="100vw"
          loading="lazy"
        />
      </motion.div>

      {/* Top fade — blends into section above */}
      <div
        className="absolute inset-x-0 top-0 h-24 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, #F2EDE0 0%, transparent 100%)' }}
        aria-hidden="true"
      />

      {/* Bottom fade — blends into section below */}
      <div
        className="absolute inset-x-0 bottom-0 h-28 pointer-events-none"
        style={{ background: 'linear-gradient(to top, #F2EDE0 0%, transparent 100%)' }}
        aria-hidden="true"
      />
    </section>
  )
}
