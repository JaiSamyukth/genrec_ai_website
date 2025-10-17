'use client'

import { motion } from 'framer-motion'

interface FloatingIslandsProps {
  className?: string
}

export function FloatingIslands({ className = '' }: FloatingIslandsProps) {
  const islands = [
    { size: 120, x: 20, y: 30, duration: 15, delay: 0 },
    { size: 80, x: 70, y: 20, duration: 12, delay: 2 },
    { size: 100, x: 50, y: 60, duration: 18, delay: 1 },
    { size: 60, x: 80, y: 70, duration: 10, delay: 3 },
    { size: 90, x: 30, y: 80, duration: 14, delay: 1.5 },
  ]
  
  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      {islands.map((island, index) => (
        <motion.div
          key={index}
          className="absolute"
          style={{
            left: `${island.x}%`,
            top: `${island.y}%`,
          }}
          animate={{
            y: [0, -20, 0],
            rotateZ: [-5, 5, -5],
          }}
          transition={{
            duration: island.duration,
            repeat: Infinity,
            delay: island.delay,
            ease: 'easeInOut',
          }}
        >
          {/* Island base */}
          <div
            className="relative"
            style={{
              width: island.size,
              height: island.size,
            }}
          >
            {/* Main island */}
            <motion.div
              className="absolute inset-0 rounded-full bg-gradient-to-br from-accent-metal/20 via-accent-metal/10 to-transparent backdrop-blur-md border border-accent-metal/20"
              animate={{
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: island.duration / 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
            
            {/* Glowing core */}
            <motion.div
              className="absolute inset-1/4 rounded-full bg-gradient-radial from-accent-metal/40 to-transparent blur-xl"
              animate={{
                opacity: [0.5, 1, 0.5],
                scale: [0.8, 1.2, 0.8],
              }}
              transition={{
                duration: island.duration / 3,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
            
            {/* Orbiting particles */}
            {[0, 120, 240].map((angle, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-accent-metal/60 rounded-full"
                style={{
                  left: '50%',
                  top: '50%',
                  marginLeft: -4,
                  marginTop: -4,
                }}
                animate={{
                  x: [
                    Math.cos((angle * Math.PI) / 180) * island.size * 0.6,
                    Math.cos(((angle + 360) * Math.PI) / 180) * island.size * 0.6,
                  ],
                  y: [
                    Math.sin((angle * Math.PI) / 180) * island.size * 0.6,
                    Math.sin(((angle + 360) * Math.PI) / 180) * island.size * 0.6,
                  ],
                }}
                transition={{
                  duration: island.duration / 2,
                  repeat: Infinity,
                  ease: 'linear',
                  delay: i * 0.5,
                }}
              />
            ))}
            
            {/* Energy rings */}
            <motion.div
              className="absolute inset-0 rounded-full border border-accent-metal/30"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 0, 0.5],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeOut',
                delay: index * 0.5,
              }}
            />
          </div>
        </motion.div>
      ))}
    </div>
  )
}
