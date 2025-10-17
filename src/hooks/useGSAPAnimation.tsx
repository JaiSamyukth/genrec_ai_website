'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

interface UseGSAPAnimationProps {
  animation?: 'parallax' | 'reveal' | 'stagger' | 'morphText' | 'drawSVG'
  trigger?: string
  start?: string
  end?: string
  scrub?: boolean | number
  pin?: boolean
  markers?: boolean
}

export function useGSAPAnimation({
  animation = 'reveal',
  trigger,
  start = 'top 80%',
  end = 'bottom 20%',
  scrub = false,
  pin = false,
  markers = false,
}: UseGSAPAnimationProps = {}) {
  const elementRef = useRef<HTMLDivElement>(null)
  const timelineRef = useRef<gsap.core.Timeline | null>(null)

  useEffect(() => {
    if (!elementRef.current) return

    const element = elementRef.current
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: trigger || element,
        start,
        end,
        scrub,
        pin,
        markers,
      },
    })

    timelineRef.current = tl

    switch (animation) {
      case 'parallax':
        tl.fromTo(
          element,
          {
            y: 100,
            opacity: 0,
          },
          {
            y: -50,
            opacity: 1,
            duration: 1,
            ease: 'power2.out',
          }
        )
        break

      case 'reveal':
        tl.fromTo(
          element,
          {
            opacity: 0,
            y: 50,
            scale: 0.9,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            ease: 'power3.out',
          }
        )
        break

      case 'stagger':
        const children = element.children
        tl.fromTo(
          children,
          {
            opacity: 0,
            y: 30,
            scale: 0.95,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.6,
            stagger: 0.1,
            ease: 'power2.out',
          }
        )
        break

      case 'morphText':
        tl.fromTo(
          element,
          {
            opacity: 0,
            scale: 1.5,
            filter: 'blur(10px)',
          },
          {
            opacity: 1,
            scale: 1,
            filter: 'blur(0px)',
            duration: 1,
            ease: 'power2.inOut',
          }
        )
        break

      case 'drawSVG':
        const paths = element.querySelectorAll('path, line, polyline, polygon, circle, rect')
        paths.forEach((path) => {
          const length = (path as SVGGeometryElement).getTotalLength?.() || 100
          gsap.set(path, {
            strokeDasharray: length,
            strokeDashoffset: length,
          })
        })
        tl.to(paths, {
          strokeDashoffset: 0,
          duration: 2,
          stagger: 0.1,
          ease: 'power2.inOut',
        })
        break
    }

    return () => {
      if (timelineRef.current) {
        timelineRef.current.kill()
      }
    }
  }, [animation, trigger, start, end, scrub, pin, markers])

  return elementRef
}

// Custom parallax component using GSAP
interface GSAPParallaxProps {
  children: React.ReactNode
  speed?: number
  offset?: number
  className?: string
}

export function GSAPParallax({ 
  children, 
  speed = 0.5, 
  offset = 0,
  className = '' 
}: GSAPParallaxProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    const element = containerRef.current
    
    gsap.to(element, {
      y: () => offset - (window.innerHeight * speed),
      ease: 'none',
      scrollTrigger: {
        trigger: element,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    })

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [speed, offset])

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  )
}
