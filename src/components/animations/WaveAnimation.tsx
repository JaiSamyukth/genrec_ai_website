'use client'

import { motion } from 'framer-motion'

interface WaveAnimationProps {
  className?: string
  color?: string
}

export function WaveAnimation({ className = '', color = '#C9A66B' }: WaveAnimationProps) {
  return (
    <div className={`absolute ${className}`}>
      <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-full">
        <defs>
          <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style={{ stopColor: color, stopOpacity: 0.3 }} />
            <stop offset="50%" style={{ stopColor: color, stopOpacity: 0.5 }} />
            <stop offset="100%" style={{ stopColor: color, stopOpacity: 0.3 }} />
          </linearGradient>
        </defs>
        
        {/* Wave 1 - Bottom */}
        <motion.path
          d="M0,60 C300,90 600,30 900,60 C1050,75 1140,75 1200,60 L1200,120 L0,120 Z"
          fill="url(#waveGradient)"
          animate={{
            d: [
              'M0,60 C300,90 600,30 900,60 C1050,75 1140,75 1200,60 L1200,120 L0,120 Z',
              'M0,70 C300,40 600,80 900,50 C1050,35 1140,55 1200,70 L1200,120 L0,120 Z',
              'M0,60 C300,90 600,30 900,60 C1050,75 1140,75 1200,60 L1200,120 L0,120 Z',
            ],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        
        {/* Wave 2 - Middle */}
        <motion.path
          d="M0,80 C400,60 600,100 900,70 C1050,50 1150,90 1200,80 L1200,120 L0,120 Z"
          fill="url(#waveGradient)"
          opacity="0.5"
          animate={{
            d: [
              'M0,80 C400,60 600,100 900,70 C1050,50 1150,90 1200,80 L1200,120 L0,120 Z',
              'M0,90 C400,100 600,60 900,90 C1050,100 1150,70 1200,90 L1200,120 L0,120 Z',
              'M0,80 C400,60 600,100 900,70 C1050,50 1150,90 1200,80 L1200,120 L0,120 Z',
            ],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        
        {/* Wave 3 - Top */}
        <motion.path
          d="M0,100 C350,80 650,110 900,90 C1050,75 1130,95 1200,100 L1200,120 L0,120 Z"
          fill="url(#waveGradient)"
          opacity="0.3"
          animate={{
            d: [
              'M0,100 C350,80 650,110 900,90 C1050,75 1130,95 1200,100 L1200,120 L0,120 Z',
              'M0,95 C350,110 650,85 900,100 C1050,110 1130,90 1200,95 L1200,120 L0,120 Z',
              'M0,100 C350,80 650,110 900,90 C1050,75 1130,95 1200,100 L1200,120 L0,120 Z',
            ],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </svg>
    </div>
  )
}
