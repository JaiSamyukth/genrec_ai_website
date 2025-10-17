'use client'

import { motion } from 'framer-motion'

interface MorphingBlobProps {
  className?: string
  color?: string
}

export function MorphingBlob({ className = '', color = 'accent-metal' }: MorphingBlobProps) {
  return (
    <div className={`absolute ${className}`}>
      <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#C9A66B', stopOpacity: 0.3 }} />
            <stop offset="100%" style={{ stopColor: '#F4D03F', stopOpacity: 0.1 }} />
          </linearGradient>
          <filter id="goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
              result="goo"
            />
          </filter>
        </defs>
        <motion.path
          fill="url(#gradient)"
          filter="url(#goo)"
          animate={{
            d: [
              'M44.7,-76.4C58.8,-69.2,71.8,-59.1,79.6,-45.8C87.4,-32.6,90,-16.3,88.5,-0.9C87,14.6,81.4,29.2,73.1,42.3C64.8,55.4,53.8,67,40.6,74.8C27.4,82.6,13.7,86.6,-1.1,88.4C-15.9,90.2,-31.8,89.8,-45.3,82.7C-58.8,75.6,-69.9,61.8,-77.1,46.2C-84.3,30.6,-87.6,13.3,-86.8,-3.6C-86,-20.5,-81.1,-37,-72.8,-50.8C-64.5,-64.6,-52.8,-75.7,-39.2,-83.3C-25.6,-90.9,-10.3,-94.9,3.6,-100.8C17.5,-106.7,30.6,-83.6,44.7,-76.4Z',
              'M37.8,-66.6C49.5,-60.1,59.9,-50.6,67.5,-38.9C75.1,-27.2,79.9,-13.6,80.8,0.5C81.7,14.6,78.7,29.2,71.2,42.1C63.7,55,51.7,66.2,38.2,72.8C24.7,79.4,9.7,81.4,-4.8,79.9C-19.3,78.4,-33.3,73.4,-45.8,65.3C-58.3,57.2,-69.3,46,-76.4,32.4C-83.5,18.8,-86.7,2.8,-84.5,-12.3C-82.3,-27.4,-74.7,-41.6,-63.9,-49.3C-53.1,-57,-39.1,-58.2,-26.4,-64.3C-13.7,-70.4,-2.3,-81.4,8.4,-83.3C19.1,-85.2,26.1,-73.1,37.8,-66.6Z',
              'M44.7,-76.4C58.8,-69.2,71.8,-59.1,79.6,-45.8C87.4,-32.6,90,-16.3,88.5,-0.9C87,14.6,81.4,29.2,73.1,42.3C64.8,55.4,53.8,67,40.6,74.8C27.4,82.6,13.7,86.6,-1.1,88.4C-15.9,90.2,-31.8,89.8,-45.3,82.7C-58.8,75.6,-69.9,61.8,-77.1,46.2C-84.3,30.6,-87.6,13.3,-86.8,-3.6C-86,-20.5,-81.1,-37,-72.8,-50.8C-64.5,-64.6,-52.8,-75.7,-39.2,-83.3C-25.6,-90.9,-10.3,-94.9,3.6,-100.8C17.5,-106.7,30.6,-83.6,44.7,-76.4Z',
            ],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </svg>
    </div>
  )
}
