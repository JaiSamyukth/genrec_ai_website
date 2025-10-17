'use client'

import { motion } from 'framer-motion'

interface Cube3DProps {
  className?: string
  size?: number
}

export function Cube3D({ className = '', size = 200 }: Cube3DProps) {
  return (
    <div className={`${className}`} style={{ perspective: '1000px' }}>
      <motion.div
        className="relative"
        style={{
          width: size,
          height: size,
          transformStyle: 'preserve-3d',
        }}
        animate={{
          rotateX: [0, 360],
          rotateY: [0, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear',
        }}
      >
        {/* Front face */}
        <div
          className="absolute border border-accent-metal/30 bg-gradient-to-br from-accent-metal/10 to-transparent backdrop-blur-sm"
          style={{
            width: size,
            height: size,
            transform: `translateZ(${size / 2}px)`,
          }}
        />
        {/* Back face */}
        <div
          className="absolute border border-blue-500/30 bg-gradient-to-br from-blue-500/10 to-transparent backdrop-blur-sm"
          style={{
            width: size,
            height: size,
            transform: `rotateY(180deg) translateZ(${size / 2}px)`,
          }}
        />
        {/* Right face */}
        <div
          className="absolute border border-purple-500/30 bg-gradient-to-br from-purple-500/10 to-transparent backdrop-blur-sm"
          style={{
            width: size,
            height: size,
            transform: `rotateY(90deg) translateZ(${size / 2}px)`,
          }}
        />
        {/* Left face */}
        <div
          className="absolute border border-green-500/30 bg-gradient-to-br from-green-500/10 to-transparent backdrop-blur-sm"
          style={{
            width: size,
            height: size,
            transform: `rotateY(-90deg) translateZ(${size / 2}px)`,
          }}
        />
        {/* Top face */}
        <div
          className="absolute border border-yellow-500/30 bg-gradient-to-br from-yellow-500/10 to-transparent backdrop-blur-sm"
          style={{
            width: size,
            height: size,
            transform: `rotateX(90deg) translateZ(${size / 2}px)`,
          }}
        />
        {/* Bottom face */}
        <div
          className="absolute border border-red-500/30 bg-gradient-to-br from-red-500/10 to-transparent backdrop-blur-sm"
          style={{
            width: size,
            height: size,
            transform: `rotateX(-90deg) translateZ(${size / 2}px)`,
          }}
        />
      </motion.div>
    </div>
  )
}
