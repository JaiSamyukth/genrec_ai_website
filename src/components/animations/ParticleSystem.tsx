'use client'

import { motion } from 'framer-motion'
import { useEffect, useState, useRef } from 'react'

interface Particle {
  id: number
  x: number
  y: number
  vx: number
  vy: number
  size: number
  duration: number
  delay: number
  color: string
  opacity: number
}

interface ParticleSystemProps {
  count?: number
  className?: string
  mouseInteraction?: boolean
}

export function ParticleSystem({ count = 80, className = '', mouseInteraction = true }: ParticleSystemProps) {
  const [particles, setParticles] = useState<Particle[]>([])
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const colors = ['#C9A66B', '#FFD700', '#FFA500', '#FF6B6B', '#4ECDC4', '#9D84B7']
    const newParticles = Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      size: Math.random() * 4 + 1,
      duration: Math.random() * 20 + 10,
      delay: Math.random() * 5,
      color: colors[Math.floor(Math.random() * colors.length)],
      opacity: Math.random() * 0.5 + 0.3
    }))
    setParticles(newParticles)
  }, [count])

  useEffect(() => {
    if (!mouseInteraction) return
    
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect()
        setMousePos({
          x: ((e.clientX - rect.left) / rect.width) * 100,
          y: ((e.clientY - rect.top) / rect.height) * 100
        })
      }
    }
    
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [mouseInteraction])

  return (
    <div ref={containerRef} className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {particles.map((particle) => {
        const distance = mouseInteraction 
          ? Math.sqrt(Math.pow(particle.x - mousePos.x, 2) + Math.pow(particle.y - mousePos.y, 2))
          : 100
        const scale = distance < 15 ? 2 : 1
        const brightness = distance < 15 ? 1.5 : 1
        
        return (
          <motion.div
            key={particle.id}
            className="absolute rounded-full blur-sm"
            style={{
              left: `${particle.x}%`,
              width: particle.size,
              height: particle.size,
              backgroundColor: particle.color,
              boxShadow: `0 0 ${particle.size * 3}px ${particle.color}`,
              filter: `brightness(${brightness})`
            }}
            animate={{
              y: ['100vh', '-10vh'],
              x: [0, particle.vx * 100, 0],
              opacity: [0, particle.opacity, particle.opacity, 0],
              scale: [0, scale, scale, 0],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
              ease: 'easeInOut',
            }}
          />
        )
      })}
      
      {/* Connection lines for nearby particles */}
      <svg className="absolute inset-0 w-full h-full">
        {particles.slice(0, Math.min(30, particles.length)).map((p1, i) => 
          particles.slice(i + 1, Math.min(30, particles.length)).map((p2, j) => {
            const dist = Math.sqrt(Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2))
            if (dist < 20) {
              return (
                <motion.line
                  key={`${i}-${j}`}
                  x1={`${p1.x}%`}
                  y1={`${p1.y}%`}
                  x2={`${p2.x}%`}
                  y2={`${p2.y}%`}
                  stroke={p1.color}
                  strokeWidth="0.5"
                  initial={{ strokeOpacity: 0 }}
                  animate={{
                    strokeOpacity: [0, 0.3 * (1 - dist / 20), 0]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: Math.random() * 2
                  }}
                />
              )
            }
            return null
          })
        )}
      </svg>
    </div>
  )
}
