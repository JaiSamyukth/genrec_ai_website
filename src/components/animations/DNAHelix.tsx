'use client'

import { motion } from 'framer-motion'

interface DNAHelixProps {
  className?: string
  particleCount?: number
}

export function DNAHelix({ className = '', particleCount = 30 }: DNAHelixProps) {
  const particles = Array.from({ length: particleCount }, (_, i) => i)
  
  return (
    <div className={`relative ${className}`}>
      <svg
        className="w-full h-full"
        viewBox="0 0 200 400"
        preserveAspectRatio="xMidYMid meet"
      >
        {particles.map((i) => {
          const y = (i / particleCount) * 400
          const phase = (i / particleCount) * Math.PI * 4
          
          return (
            <motion.g key={i}>
              {/* Left strand */}
              <motion.circle
                cx={100}
                cy={y}
                r="3"
                fill="#C9A66B"
                animate={{
                  cx: [
                    100 + Math.sin(phase) * 40,
                    100 + Math.sin(phase + Math.PI * 2) * 40,
                  ],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'linear',
                }}
              />
              
              {/* Right strand */}
              <motion.circle
                cx={100}
                cy={y}
                r="3"
                fill="#4ECDC4"
                animate={{
                  cx: [
                    100 - Math.sin(phase) * 40,
                    100 - Math.sin(phase + Math.PI * 2) * 40,
                  ],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'linear',
                }}
              />
              
              {/* Connection line */}
              {i % 3 === 0 && (
                <motion.line
                  x1={100 + Math.sin(phase) * 40}
                  y1={y}
                  x2={100 - Math.sin(phase) * 40}
                  y2={y}
                  stroke="rgba(201, 166, 107, 0.3)"
                  strokeWidth="1"
                  animate={{
                    x1: [
                      100 + Math.sin(phase) * 40,
                      100 + Math.sin(phase + Math.PI * 2) * 40,
                    ],
                    x2: [
                      100 - Math.sin(phase) * 40,
                      100 - Math.sin(phase + Math.PI * 2) * 40,
                    ],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                />
              )}
            </motion.g>
          )
        })}
      </svg>
    </div>
  )
}
