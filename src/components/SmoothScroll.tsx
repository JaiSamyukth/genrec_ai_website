'use client'

import { useEffect, useRef, ReactNode } from 'react'
import { motion, useSpring, useTransform, useMotionValue } from 'framer-motion'

interface SmoothScrollProps {
  children: ReactNode
  className?: string
}

export function SmoothScroll({ children, className = '' }: SmoothScrollProps) {
  const scrollRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const scrollY = useMotionValue(0)
  const smoothY = useSpring(scrollY, { damping: 20, stiffness: 100 })
  
  useEffect(() => {
    const handleScroll = () => {
      scrollY.set(window.scrollY)
    }
    
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [scrollY])
  
  const y = useTransform(smoothY, (value) => -value)
  
  useEffect(() => {
    if (!contentRef.current) return
    
    // Set body height to content height for scrolling
    const contentHeight = contentRef.current.scrollHeight
    document.body.style.height = `${contentHeight}px`
    
    return () => {
      document.body.style.height = 'auto'
    }
  }, [children])
  
  return (
    <div ref={scrollRef} className={`fixed inset-0 ${className}`}>
      <motion.div
        ref={contentRef}
        style={{ y }}
        className="will-change-transform"
      >
        {children}
      </motion.div>
    </div>
  )
}

// Custom smooth scroll hook
export function useSmoothScroll(offset = 0, duration = 800) {
  const scrollToSection = (elementId: string) => {
    const element = document.getElementById(elementId)
    if (!element) return
    
    const targetY = element.offsetTop - offset
    const startY = window.scrollY
    const distance = targetY - startY
    const startTime = performance.now()
    
    const easeInOutCubic = (t: number): number => {
      return t < 0.5
        ? 4 * t * t * t
        : 1 - Math.pow(-2 * t + 2, 3) / 2
    }
    
    const scrollAnimation = (currentTime: number) => {
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)
      const easedProgress = easeInOutCubic(progress)
      
      window.scrollTo(0, startY + distance * easedProgress)
      
      if (progress < 1) {
        requestAnimationFrame(scrollAnimation)
      }
    }
    
    requestAnimationFrame(scrollAnimation)
  }
  
  return { scrollToSection }
}

// Smooth anchor link component
interface SmoothLinkProps {
  href: string
  children: ReactNode
  className?: string
  offset?: number
  duration?: number
}

export function SmoothLink({ 
  href, 
  children, 
  className = '',
  offset = 80,
  duration = 800 
}: SmoothLinkProps) {
  const { scrollToSection } = useSmoothScroll(offset, duration)
  
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault()
    const targetId = href.replace('#', '')
    scrollToSection(targetId)
  }
  
  return (
    <a 
      href={href}
      onClick={handleClick}
      className={className}
    >
      {children}
    </a>
  )
}
