'use client'

import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

export function AOSProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out-cubic',
      once: false,
      mirror: true,
      anchorPlacement: 'top-bottom',
      offset: 100,
      delay: 0,
      useClassNames: true,
      initClassName: 'aos-init',
      animatedClassName: 'aos-animate',
    })

    // Refresh AOS on route change
    const handleRouteChange = () => {
      AOS.refresh()
    }

    window.addEventListener('load', handleRouteChange)
    
    return () => {
      window.removeEventListener('load', handleRouteChange)
    }
  }, [])

  return <>{children}</>
}

// Custom AOS animation variants
export const AOSAnimations = {
  fadeUp: 'fade-up',
  fadeDown: 'fade-down',
  fadeLeft: 'fade-left',
  fadeRight: 'fade-right',
  fadeUpRight: 'fade-up-right',
  fadeUpLeft: 'fade-up-left',
  fadeDownRight: 'fade-down-right',
  fadeDownLeft: 'fade-down-left',
  flipUp: 'flip-up',
  flipDown: 'flip-down',
  flipLeft: 'flip-left',
  flipRight: 'flip-right',
  slideUp: 'slide-up',
  slideDown: 'slide-down',
  slideLeft: 'slide-left',
  slideRight: 'slide-right',
  zoomIn: 'zoom-in',
  zoomInUp: 'zoom-in-up',
  zoomInDown: 'zoom-in-down',
  zoomInLeft: 'zoom-in-left',
  zoomInRight: 'zoom-in-right',
  zoomOut: 'zoom-out',
  zoomOutUp: 'zoom-out-up',
  zoomOutDown: 'zoom-out-down',
  zoomOutLeft: 'zoom-out-left',
  zoomOutRight: 'zoom-out-right',
}

// Helper component for AOS animations
interface AOSWrapperProps {
  children: React.ReactNode
  animation?: keyof typeof AOSAnimations
  duration?: number
  delay?: number
  offset?: number
  easing?: string
  once?: boolean
  mirror?: boolean
  anchorPlacement?: string
  className?: string
}

export function AOSWrapper({
  children,
  animation = 'fadeUp',
  duration = 800,
  delay = 0,
  offset = 100,
  easing = 'ease-in-out-cubic',
  once = false,
  mirror = true,
  anchorPlacement = 'top-bottom',
  className = '',
}: AOSWrapperProps) {
  return (
    <div
      data-aos={AOSAnimations[animation]}
      data-aos-duration={duration}
      data-aos-delay={delay}
      data-aos-offset={offset}
      data-aos-easing={easing}
      data-aos-once={once}
      data-aos-mirror={mirror}
      data-aos-anchor-placement={anchorPlacement}
      className={className}
    >
      {children}
    </div>
  )
}
