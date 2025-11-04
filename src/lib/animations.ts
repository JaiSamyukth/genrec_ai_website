/**
 * Animation constants and utilities per spec
 * All durations and easings follow the exact specification
 */

export const animationDurations = {
  fast: 120,
  default: 240,
  long: 420,
} as const

export const easing = {
  smooth: [0.2, 0.9, 0.3, 1] as const,
  easeOut: [0.4, 0, 0.2, 1] as const,
} as const

// Spec-compliant animation variants for Framer Motion
export const variants = {
  badge: {
    initial: { y: -6, opacity: 0 },
    animate: { 
      y: 0, 
      opacity: 1,
      transition: {
        duration: animationDurations.fast / 1000,
        ease: easing.smooth,
        delay: 0.12,
      }
    },
  },
  h1: {
    initial: { clipPath: 'inset(0 100% 0 0)', opacity: 0 },
    animate: { 
      clipPath: 'inset(0 0 0 0)', 
      opacity: 1,
      transition: {
        duration: animationDurations.long / 1000,
        ease: easing.smooth,
        delay: 0.12,
      }
    },
  },
  subheading: {
    initial: { y: 6, opacity: 0 },
    animate: { 
      y: 0, 
      opacity: 1,
      transition: {
        duration: animationDurations.default / 1000,
        ease: easing.smooth,
      }
    },
  },
  cta: {
    initial: { scale: 0.98, opacity: 0 },
    animate: { 
      scale: 1, 
      opacity: 1,
      transition: {
        duration: animationDurations.fast / 1000,
        ease: easing.smooth,
      }
    },
    hover: {
      y: -3,
      scale: 1.02,
      transition: {
        duration: 0.16,
        ease: easing.easeOut,
      }
    },
    tap: {
      scale: 0.99,
    }
  },
  card: {
    hover: {
      y: -8,
      scale: 1.01,
      transition: {
        duration: 0.16,
        ease: easing.easeOut,
      }
    },
  },
  stagger: {
    animate: {
      transition: {
        staggerChildren: 0.06,
      }
    }
  }
}

// Counter animation for stats
export const useCountAnimation = (target: number, duration: number = 700) => {
  return {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: duration / 1000, ease: [0.65, 0, 0.35, 1] }
  }
}
