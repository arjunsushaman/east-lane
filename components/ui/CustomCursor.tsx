'use client'

import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring, AnimatePresence } from 'framer-motion'

type CursorState = 'default' | 'cta' | 'image' | 'link'

export default function CustomCursor() {
  const mouseX = useMotionValue(-200)
  const mouseY = useMotionValue(-200)
  const [state, setState] = useState<CursorState>('default')
  const [visible, setVisible] = useState(false)
  const [isTouch, setIsTouch] = useState(true)

  const springCfg = { damping: 28, stiffness: 350, mass: 0.4 }
  const ringX = useSpring(mouseX, springCfg)
  const ringY = useSpring(mouseY, springCfg)

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return

    setIsTouch(false)
    document.documentElement.style.cursor = 'none'

    const onMove = (e: MouseEvent) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
      setVisible(true)

      const el = e.target as Element
      if (el.closest('[data-cursor="image"]')) setState('image')
      else if (el.closest('[data-cursor="cta"]')) setState('cta')
      else if (el.closest('a, button')) setState('link')
      else setState('default')
    }

    const onLeave = () => setVisible(false)
    const onEnter = () => setVisible(true)

    window.addEventListener('mousemove', onMove)
    document.documentElement.addEventListener('mouseleave', onLeave)
    document.documentElement.addEventListener('mouseenter', onEnter)

    return () => {
      document.documentElement.style.cursor = ''
      window.removeEventListener('mousemove', onMove)
      document.documentElement.removeEventListener('mouseleave', onLeave)
      document.documentElement.removeEventListener('mouseenter', onEnter)
    }
  }, [mouseX, mouseY])

  if (isTouch) return null

  const ringSize = { default: 40, cta: 56, image: 80, link: 24 }[state]
  const ringBg = state === 'cta'
    ? 'rgba(168,72,26,0.85)'
    : state === 'link'
    ? 'rgba(30,17,11,0.65)'
    : 'transparent'
  const ringBorder = state === 'image'
    ? 'rgba(232,222,200,0.9)'
    : 'rgba(232,222,200,0.45)'

  return (
    <>
      {/* Dot — zero lag */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed z-[9999] rounded-full bg-cream mix-blend-difference"
        style={{
          width: 8,
          height: 8,
          x: mouseX,
          y: mouseY,
          translateX: '-50%',
          translateY: '-50%',
          opacity: visible ? 1 : 0,
        }}
      />

      {/* Ring — spring lag */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed z-[9998] rounded-full flex items-center justify-center overflow-hidden"
        style={{
          x: ringX,
          y: ringY,
          translateX: '-50%',
          translateY: '-50%',
          borderWidth: 1,
          borderStyle: 'solid',
          opacity: visible ? 1 : 0,
        }}
        animate={{
          width: ringSize,
          height: ringSize,
          backgroundColor: ringBg,
          borderColor: ringBorder,
        }}
        transition={{ type: 'spring', damping: 22, stiffness: 200, mass: 0.3 }}
      >
        <AnimatePresence>
          {state === 'image' && (
            <motion.span
              key="view-label"
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.7 }}
              transition={{ duration: 0.2 }}
              className="label-caps text-cream select-none"
              style={{ fontSize: '0.48rem', letterSpacing: '0.22em' }}
            >
              VIEW
            </motion.span>
          )}
        </AnimatePresence>
      </motion.div>
    </>
  )
}
