'use client'

import { ReactNode, useEffect, useState, forwardRef } from 'react'
import { motion, MotionProps } from 'framer-motion'

interface MotionContainerProps {
  children: ReactNode
  as?: 'div' | 'section' | 'span' | 'article'
  className?: string
  disableMotion?: boolean
  initial?: any
  animate?: any
  whileInView?: any
  viewport?: any
  exit?: any
  transition?: any
  whileHover?: any
  whileTap?: any
  variants?: any
  [key: string]: any
}

/**
 * MotionContainer - Wrapper component that respects user's motion preferences
 * Automatically disables animations when prefers-reduced-motion is set
 */
export const MotionContainer = forwardRef<any, MotionContainerProps>(function MotionContainer({
  children,
  as = 'div',
  className,
  disableMotion = false,
  initial,
  animate,
  whileInView,
  viewport,
  exit,
  transition,
  whileHover,
  whileTap,
  variants,
  ...props
}, ref) {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setPrefersReducedMotion(mediaQuery.matches)

    const handler = (event: MediaQueryListEvent) => {
      setPrefersReducedMotion(event.matches)
    }

    mediaQuery.addEventListener('change', handler)
    return () => mediaQuery.removeEventListener('change', handler)
  }, [])

  // If reduced motion is preferred or explicitly disabled, render without animations
  if (prefersReducedMotion || disableMotion) {
    const Component = as as any
    return <Component ref={ref} className={className} {...props}>{children}</Component>
  }

  // Render with animations - use explicit component mapping
  if (as === 'section') {
    return (
      <motion.section ref={ref} className={className} initial={initial} animate={animate} whileInView={whileInView} viewport={viewport} exit={exit} transition={transition} whileHover={whileHover} whileTap={whileTap} variants={variants} {...props}>
        {children}
      </motion.section>
    )
  }

  if (as === 'span') {
    return (
      <motion.span ref={ref} className={className} initial={initial} animate={animate} whileInView={whileInView} viewport={viewport} exit={exit} transition={transition} whileHover={whileHover} whileTap={whileTap} variants={variants} {...props}>
        {children}
      </motion.span>
    )
  }

  if (as === 'article') {
    return (
      <motion.article ref={ref} className={className} initial={initial} animate={animate} whileInView={whileInView} viewport={viewport} exit={exit} transition={transition} whileHover={whileHover} whileTap={whileTap} variants={variants} {...props}>
        {children}
      </motion.article>
    )
  }

  // Default to div
  return (
    <motion.div ref={ref} className={className} initial={initial} animate={animate} whileInView={whileInView} viewport={viewport} exit={exit} transition={transition} whileHover={whileHover} whileTap={whileTap} variants={variants} {...props}>
      {children}
    </motion.div>
  )
})
