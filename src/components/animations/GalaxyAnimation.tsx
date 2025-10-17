'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

interface GalaxyAnimationProps {
  className?: string
}

export function GalaxyAnimation({ className = '' }: GalaxyAnimationProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    
    const stars: Array<{
      x: number
      y: number
      z: number
      prevX?: number
      prevY?: number
    }> = []
    const starCount = 800
    const speed = 0.5
    const centerX = canvas.width / 2
    const centerY = canvas.height / 2
    
    // Initialize stars
    for (let i = 0; i < starCount; i++) {
      stars.push({
        x: Math.random() * canvas.width - centerX,
        y: Math.random() * canvas.height - centerY,
        z: Math.random() * 1000
      })
    }
    
    const draw = () => {
      ctx.fillStyle = 'rgba(13, 27, 42, 0.1)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      
      for (let i = 0; i < starCount; i++) {
        const star = stars[i]
        star.z -= speed
        
        if (star.z <= 0) {
          star.x = Math.random() * canvas.width - centerX
          star.y = Math.random() * canvas.height - centerY
          star.z = 1000
          star.prevX = undefined
          star.prevY = undefined
        }
        
        const x = (star.x / star.z) * 100 + centerX
        const y = (star.y / star.z) * 100 + centerY
        const size = (1 - star.z / 1000) * 2
        const opacity = 1 - star.z / 1000
        
        // Trail effect
        if (star.prevX && star.prevY) {
          const gradient = ctx.createLinearGradient(star.prevX, star.prevY, x, y)
          gradient.addColorStop(0, `rgba(201, 166, 107, 0)`)
          gradient.addColorStop(1, `rgba(201, 166, 107, ${opacity})`)
          
          ctx.strokeStyle = gradient
          ctx.lineWidth = size
          ctx.beginPath()
          ctx.moveTo(star.prevX, star.prevY)
          ctx.lineTo(x, y)
          ctx.stroke()
        }
        
        // Star glow
        const glowGradient = ctx.createRadialGradient(x, y, 0, x, y, size * 5)
        glowGradient.addColorStop(0, `rgba(201, 166, 107, ${opacity})`)
        glowGradient.addColorStop(0.5, `rgba(255, 215, 0, ${opacity * 0.5})`)
        glowGradient.addColorStop(1, 'transparent')
        
        ctx.fillStyle = glowGradient
        ctx.beginPath()
        ctx.arc(x, y, size * 5, 0, Math.PI * 2)
        ctx.fill()
        
        // Star core
        ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`
        ctx.beginPath()
        ctx.arc(x, y, size, 0, Math.PI * 2)
        ctx.fill()
        
        star.prevX = x
        star.prevY = y
      }
      
      requestAnimationFrame(draw)
    }
    
    draw()
    
    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    
    window.addEventListener('resize', handleResize)
    
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])
  
  return (
    <motion.canvas
      ref={canvasRef}
      className={`absolute inset-0 ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
      style={{ pointerEvents: 'none' }}
    />
  )
}
