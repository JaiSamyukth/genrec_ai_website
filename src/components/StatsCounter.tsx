'use client'

import { useEffect, useRef, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { MotionContainer } from '@/components/animations/MotionContainer'

interface Stat {
  label: string
  value: number
  suffix?: string
  prefix?: string
  disclaimer?: string
}

const stats: Stat[] = [
  {
    label: 'Enterprise Pilots',
    value: 15,
    suffix: '+',
    disclaimer: 'Active pilot programs across construction, hospitality, and education sectors',
  },
  {
    label: 'Hours Saved',
    value: 10000,
    suffix: '+',
    disclaimer: 'Pilot metrics from early deployments. Measured across client workflows',
  },
  {
    label: 'Client Satisfaction',
    value: 98,
    suffix: '%',
    disclaimer: 'Based on pilot program feedback surveys. Contact for detailed reports',
  },
  {
    label: 'Response Time',
    value: 4,
    suffix: 'h',
    disclaimer: 'Average first response time for client queries. Founder-led support',
  },
]

function useCounter(target: number, duration: number = 700) {
  const [count, setCount] = useState(0)
  const [hasAnimated, setHasAnimated] = useState(false)

  const animate = () => {
    if (hasAnimated) return
    
    setHasAnimated(true)
    const startTime = Date.now()
    const endTime = startTime + duration

    const updateCount = () => {
      const now = Date.now()
      const progress = Math.min((now - startTime) / duration, 1)
      
      // Ease out quad
      const easeOutQuad = progress * (2 - progress)
      const currentCount = Math.floor(easeOutQuad * target)
      
      setCount(currentCount)

      if (now < endTime) {
        requestAnimationFrame(updateCount)
      } else {
        setCount(target)
      }
    }

    requestAnimationFrame(updateCount)
  }

  return { count, animate, hasAnimated }
}

function StatCard({ stat, index }: { stat: Stat; index: number }) {
  const { count, animate, hasAnimated } = useCounter(stat.value)
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  })

  useEffect(() => {
    if (inView && !hasAnimated) {
      // Small delay for stagger effect
      setTimeout(animate, index * 100)
    }
  }, [inView, hasAnimated, animate, index])

  return (
    <MotionContainer
      ref={ref}
      className="text-center p-8 bg-white rounded-xl border-2 border-gray-200 hover:border-accent-blue transition-colors duration-300"
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ 
        duration: 0.5, 
        delay: index * 0.1,
        ease: [0.2, 0.9, 0.3, 1]
      }}
    >
      <div 
        className="text-5xl md:text-6xl font-bold text-accent-blue mb-2"
        aria-live="polite"
        aria-atomic="true"
      >
        {stat.prefix}
        {count}
        {stat.suffix}
      </div>
      <div className="text-lg font-semibold text-gray-900 mb-2">
        {stat.label}
      </div>
      {stat.disclaimer && (
        <div className="text-sm text-gray-600 mt-3 pt-3 border-t border-gray-200">
          <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide block mb-1">
            Pilot Metrics
          </span>
          {stat.disclaimer}
        </div>
      )}
    </MotionContainer>
  )
}

/**
 * Stats section with counter animations
 * - Counter duration: 700ms with easeOutQuad
 * - Staggered animation per stat
 * - Accessibility: aria-live regions
 * - Honest disclaimers for pilot metrics
 */
export function StatsCounter() {
  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-white" id="stats">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <MotionContainer
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Proven Results
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real metrics from our pilot programs. We believe in transparency and honest reporting.
          </p>
        </MotionContainer>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <StatCard key={stat.label} stat={stat} index={index} />
          ))}
        </div>

        <MotionContainer
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-sm text-gray-500 max-w-4xl mx-auto">
            <strong>Note:</strong> All metrics are from pilot programs and early deployments. 
            Detailed methodology and source documentation available upon request. 
            We commit to honest reporting—no inflated numbers, no fake testimonials.
          </p>
        </MotionContainer>
      </div>
    </section>
  )
}
