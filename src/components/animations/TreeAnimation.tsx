'use client'

import { motion } from 'framer-motion'

interface Branch {
  id: number
  x1: number
  y1: number
  x2: number
  y2: number
  delay: number
}

export function TreeAnimation({ className = '' }: { className?: string }) {
  const branches: Branch[] = [
    // Main trunk
    { id: 1, x1: 50, y1: 100, x2: 50, y2: 70, delay: 0 },
    
    // First level branches
    { id: 2, x1: 50, y1: 70, x2: 35, y2: 55, delay: 0.2 },
    { id: 3, x1: 50, y1: 70, x2: 65, y2: 55, delay: 0.2 },
    
    // Second level branches - left
    { id: 4, x1: 35, y1: 55, x2: 25, y2: 40, delay: 0.4 },
    { id: 5, x1: 35, y1: 55, x2: 40, y2: 40, delay: 0.4 },
    
    // Second level branches - right
    { id: 6, x1: 65, y1: 55, x2: 60, y2: 40, delay: 0.4 },
    { id: 7, x1: 65, y1: 55, x2: 75, y2: 40, delay: 0.4 },
    
    // Third level branches - far left
    { id: 8, x1: 25, y1: 40, x2: 15, y2: 30, delay: 0.6 },
    { id: 9, x1: 25, y1: 40, x2: 30, y2: 28, delay: 0.6 },
    
    // Third level branches - center left
    { id: 10, x1: 40, y1: 40, x2: 35, y2: 28, delay: 0.6 },
    { id: 11, x1: 40, y1: 40, x2: 45, y2: 28, delay: 0.6 },
    
    // Third level branches - center right
    { id: 12, x1: 60, y1: 40, x2: 55, y2: 28, delay: 0.6 },
    { id: 13, x1: 60, y1: 40, x2: 65, y2: 28, delay: 0.6 },
    
    // Third level branches - far right
    { id: 14, x1: 75, y1: 40, x2: 70, y2: 28, delay: 0.6 },
    { id: 15, x1: 75, y1: 40, x2: 82, y2: 28, delay: 0.6 },
    
    // Fourth level - nodes/leaves
    { id: 16, x1: 15, y1: 30, x2: 12, y2: 22, delay: 0.8 },
    { id: 17, x1: 30, y1: 28, x2: 28, y2: 20, delay: 0.8 },
    { id: 18, x1: 35, y1: 28, x2: 33, y2: 18, delay: 0.8 },
    { id: 19, x1: 45, y1: 28, x2: 48, y2: 18, delay: 0.8 },
    { id: 20, x1: 55, y1: 28, x2: 52, y2: 18, delay: 0.8 },
    { id: 21, x1: 65, y1: 28, x2: 67, y2: 18, delay: 0.8 },
    { id: 22, x1: 70, y1: 28, x2: 72, y2: 20, delay: 0.8 },
    { id: 23, x1: 82, y1: 28, x2: 85, y2: 20, delay: 0.8 },
  ]

  const nodes = [
    { id: 1, x: 50, y: 70, delay: 0.2 },
    { id: 2, x: 35, y: 55, delay: 0.4 },
    { id: 3, x: 65, y: 55, delay: 0.4 },
    { id: 4, x: 25, y: 40, delay: 0.6 },
    { id: 5, x: 40, y: 40, delay: 0.6 },
    { id: 6, x: 60, y: 40, delay: 0.6 },
    { id: 7, x: 75, y: 40, delay: 0.6 },
    { id: 8, x: 15, y: 30, delay: 0.8 },
    { id: 9, x: 30, y: 28, delay: 0.8 },
    { id: 10, x: 35, y: 28, delay: 0.8 },
    { id: 11, x: 45, y: 28, delay: 0.8 },
    { id: 12, x: 55, y: 28, delay: 0.8 },
    { id: 13, x: 65, y: 28, delay: 0.8 },
    { id: 14, x: 70, y: 28, delay: 0.8 },
    { id: 15, x: 82, y: 28, delay: 0.8 },
  ]

  return (
    <div className={`absolute ${className}`}>
      <svg viewBox="0 0 100 100" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
        <defs>
          <linearGradient id="branchGradient" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" style={{ stopColor: '#C9A66B', stopOpacity: 0.8 }} />
            <stop offset="100%" style={{ stopColor: '#F4D03F', stopOpacity: 0.4 }} />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="0.5" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Branches */}
        {branches.map((branch) => (
          <motion.line
            key={branch.id}
            x1={branch.x1}
            y1={branch.y1}
            x2={branch.x1}
            y2={branch.y1}
            stroke="url(#branchGradient)"
            strokeWidth="0.5"
            strokeLinecap="round"
            filter="url(#glow)"
            initial={{ x2: branch.x1, y2: branch.y1 }}
            animate={{ x2: branch.x2, y2: branch.y2 }}
            transition={{
              duration: 0.8,
              delay: branch.delay,
              ease: 'easeOut',
            }}
          />
        ))}

        {/* Nodes */}
        {nodes.map((node) => (
          <motion.circle
            key={`node-${node.id}`}
            cx={node.x}
            cy={node.y}
            r="0"
            fill="#C9A66B"
            filter="url(#glow)"
            initial={{ r: 0, opacity: 0 }}
            animate={{ r: 1, opacity: 1 }}
            transition={{
              duration: 0.4,
              delay: node.delay + 0.6,
              ease: 'easeOut',
            }}
          />
        ))}

        {/* Pulsing effect on nodes */}
        {nodes.map((node) => (
          <motion.circle
            key={`pulse-${node.id}`}
            cx={node.x}
            cy={node.y}
            r="1"
            fill="none"
            stroke="#C9A66B"
            strokeWidth="0.3"
            initial={{ r: 1, opacity: 0 }}
            animate={{
              r: [1, 3, 1],
              opacity: [0, 0.6, 0],
            }}
            transition={{
              duration: 2,
              delay: node.delay + 1,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}
      </svg>
    </div>
  )
}
