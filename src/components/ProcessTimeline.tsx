'use client'

import { useEffect, useRef } from 'react'
import { useInView } from 'react-intersection-observer'
import { MotionContainer } from '@/components/animations/MotionContainer'
import { motion } from 'framer-motion'
import { MessageSquare, FileSearch, Code, Rocket } from 'lucide-react'

interface Step {
  number: number
  title: string
  description: string
  detail: string
  icon: React.ElementType
}

const steps: Step[] = [
  {
    number: 1,
    title: 'Discover',
    description: 'Deep dive into your business needs and pain points',
    detail: 'We start with a comprehensive consultation to understand your workflows, challenges, and goals. No sales pitch, just honest conversation.',
    icon: MessageSquare,
  },
  {
    number: 2,
    title: 'Design',
    description: 'Blueprint your custom solution with precision',
    detail: 'We create detailed technical specifications and prototypes. You review, we iterate, until the design perfectly matches your vision.',
    icon: FileSearch,
  },
  {
    number: 3,
    title: 'Develop',
    description: 'Build from scratch with obsessive attention to detail',
    detail: 'Custom code. Zero templates. Every feature engineered for performance, security, and scalability. Real-time updates, founder-level support.',
    icon: Code,
  },
  {
    number: 4,
    title: 'Deploy',
    description: 'Launch with confidence and continuous support',
    detail: 'Seamless deployment, team training, and monitoring. We are here for the long haul, not just until launch day.',
    icon: Rocket,
  },
]

function StepCard({ step, index }: { step: Step; index: number }) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  })

  return (
    <MotionContainer
      ref={ref}
      className="relative"
      initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.2,
        ease: [0.2, 0.9, 0.3, 1] as const
      }}
    >
      {/* Dot with pulse animation */}
      <div className="flex items-start gap-6 group">
        <motion.div
          className="relative flex-shrink-0"
          initial={{ scale: 0 }}
          animate={inView ? { scale: 1 } : {}}
          transition={{ 
            duration: 0.3, 
            delay: index * 0.2 + 0.3,
            ease: [0.2, 0.9, 0.3, 1]
          }}
        >
          {/* Pulse ring */}
          {inView && (
            <motion.div
              className="absolute inset-0 rounded-full bg-accent-blue"
              initial={{ scale: 1, opacity: 0.5 }}
              animate={{ 
                scale: 1.5, 
                opacity: 0,
              }}
              transition={{ 
                duration: 1,
                delay: index * 0.2 + 0.5,
                ease: 'easeOut'
              }}
            />
          )}
          
          {/* Main dot */}
          <div className="relative w-16 h-16 rounded-full bg-accent-blue flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow">
            <step.icon className="w-8 h-8 text-white" aria-hidden="true" />
          </div>
          
          {/* Step number badge */}
          <div className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-white border-2 border-accent-blue flex items-center justify-center text-sm font-bold text-accent-blue">
            {step.number}
          </div>
        </motion.div>

        {/* Content */}
        <div className="flex-1 pb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-accent-blue transition-colors">
            {step.title}
          </h3>
          <p className="text-lg text-gray-700 mb-3 font-medium">
            {step.description}
          </p>
          
          {/* Progressive disclosure detail */}
          <details className="mt-4 group/details">
            <summary className="cursor-pointer text-accent-blue hover:underline focus:outline-none focus:ring-2 focus:ring-accent-blue rounded px-2 py-1 -ml-2 list-none flex items-center gap-2">
              <motion.span
                className="inline-block"
                initial={{ rotate: 0 }}
                whileHover={{ rotate: 90 }}
                transition={{ duration: 0.2 }}
              >
                →
              </motion.span>
              Learn more
            </summary>
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="mt-3 p-4 bg-gray-50 rounded-lg text-gray-600"
            >
              {step.detail}
            </motion.div>
          </details>
        </div>
      </div>
    </MotionContainer>
  )
}

/**
 * Process Timeline with spec-compliant animations
 * - Dot pulse animation on reveal (600ms)
 * - Progressive disclosure for details
 * - Responsive: horizontal on desktop, vertical on mobile
 */
export function ProcessTimeline() {
  const [lineRef, lineInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section className="py-24 bg-white" id="process">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <MotionContainer
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            How We Work
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A proven process refined through enterprise pilots. Transparent, collaborative, and obsessively detailed.
          </p>
        </MotionContainer>

        <div className="relative">
          {/* Connecting line */}
          <div 
            ref={lineRef}
            className="absolute left-8 top-8 bottom-8 w-0.5 bg-gray-200 hidden md:block"
            aria-hidden="true"
          >
            {/* Animated fill */}
            {lineInView && (
              <motion.div
                className="absolute inset-0 bg-accent-blue origin-top"
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{
                  duration: 0.6,
                  delay: 0.5,
                  ease: [0.2, 0.9, 0.3, 1]
                }}
              />
            )}
          </div>

          {/* Steps */}
          <div className="relative space-y-8">
            {steps.map((step, index) => (
              <StepCard key={step.number} step={step} index={index} />
            ))}
          </div>
        </div>

        {/* CTA */}
        <MotionContainer
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <a
            href="/contact"
            className="inline-block px-10 py-5 bg-accent-blue text-white text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-accent-blue focus:ring-offset-4 transition-all duration-200"
          >
            Start Your Project
          </a>
        </MotionContainer>
      </div>
    </section>
  )
}
