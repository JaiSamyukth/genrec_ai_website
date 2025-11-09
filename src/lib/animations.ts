// Standardized Animation System for Genrec AI
// All animations follow: Default 0.24s, Hover 0.3s, Entrance 0.5s

import { Variants } from 'framer-motion'

// TIMING CONSTANTS
export const timing = {
  fast: 0.24,
  default: 0.3,
  entrance: 0.5,
  slow: 0.8,
} as const

// EASING FUNCTIONS
export const easing = {
  smooth: [0.22, 1, 0.36, 1],
  easeOut: [0.4, 0, 0.2, 1],
  elastic: [0.68, -0.55, 0.265, 1.55],
} as const

// STANDARDIZED VARIANTS

// Fade In (for section entrances)
export const fadeIn: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: timing.entrance, ease: easing.smooth },
}

// Slide Up (for cards, content blocks)
export const slideUp: Variants = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: timing.entrance, ease: easing.easeOut },
}

// Slide Down (for dropdowns, modals)
export const slideDown: Variants = {
  initial: { opacity: 0, y: -20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: timing.default, ease: easing.easeOut },
}

// Scale In (for badges, icons)
export const scaleIn: Variants = {
  initial: { opacity: 0, scale: 0.9 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: timing.default, ease: easing.easeOut },
}

// Stagger Children (for lists, grids)
export const staggerContainer: Variants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

// Hover Lift (for cards)
export const hoverLift = {
  whileHover: { 
    y: -8, 
    scale: 1.02,
    transition: { duration: timing.default, ease: easing.easeOut }
  },
  whileTap: { scale: 0.98 }
}

// Button Hover
export const buttonHover = {
  whileHover: { 
    scale: 1.05,
    transition: { duration: timing.default, ease: easing.easeOut }
  },
  whileTap: { scale: 0.95 }
}

// Viewport Animation Settings (for scroll-triggered animations)
export const viewport = {
  once: true,
  amount: 0.1,
  margin: "0px 0px -100px 0px"
}

// Transition Presets
export const transitions = {
  // Fast transition for micro-interactions
  fast: {
    duration: timing.fast,
    ease: easing.easeOut,
  },
  // Default transition for most elements
  default: {
    duration: timing.default,
    ease: easing.easeOut,
  },
  // Entrance transition for page/section loads
  entrance: {
    duration: timing.entrance,
    ease: easing.smooth,
  },
  // Smooth transition for complex animations
  smooth: {
    duration: timing.slow,
    ease: easing.smooth,
  },
}

// Section Animation (standardized for all page sections)
export const sectionAnimation = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport,
  transition: transitions.entrance,
}

// Card Animation (for product cards, division cards, etc.)
export const cardAnimation = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport,
  ...hoverLift,
}

// Hero Text Animation
export const heroText = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: timing.entrance, delay: 0.2, ease: easing.smooth },
}

// Badge Animation
export const badgeAnimation = {
  initial: { scale: 0.9, opacity: 0 },
  animate: { scale: 1, opacity: 1 },
  transition: { duration: timing.default, delay: 0.1, ease: easing.easeOut },
}

// CTA Button Animation
export const ctaAnimation = {
  initial: { scale: 0.98, opacity: 0 },
  animate: { scale: 1, opacity: 1 },
  transition: { duration: timing.entrance, delay: 0.4, ease: easing.smooth },
  ...buttonHover,
}

// Image Animation
export const imageAnimation = {
  initial: { opacity: 0, scale: 0.95 },
  whileInView: { opacity: 1, scale: 1 },
  viewport,
  transition: transitions.smooth,
}

// Staggered List Item
export const listItemAnimation = (index: number) => ({
  initial: { opacity: 0, x: -20 },
  whileInView: { opacity: 1, x: 0 },
  viewport,
  transition: { 
    duration: timing.default, 
    delay: index * 0.1,
    ease: easing.easeOut 
  },
})

// Floating Animation (continuous)
export const floating = {
  animate: {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: easing.smooth,
    },
  },
}

// Reduced Motion Fallback
export const reducedMotion = {
  initial: {},
  animate: {},
  transition: { duration: 0.01 },
}
