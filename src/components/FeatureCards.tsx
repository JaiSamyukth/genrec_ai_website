'use client'

import { MotionContainer } from '@/components/animations/MotionContainer'
import { variants } from '@/lib/animations'
import { Shield, Zap, Code, Lock, Rocket, Users } from 'lucide-react'
import { motion } from 'framer-motion'

const features = [
  {
    icon: Code,
    title: 'Bespoke Engineering',
    description: 'No templates. No shortcuts. Everything custom-built from scratch for your unique needs.',
  },
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Performance-first architecture. 40-hour workflows become 4 hours. Manual chaos becomes automated precision.',
  },
  {
    icon: Shield,
    title: 'Privacy-First',
    description: 'Enterprise-grade security and data protection. Your data stays yours, always.',
  },
  {
    icon: Users,
    title: 'Founder-Led',
    description: 'Text us at 3 AM. We answer. Founders, not support teams.',
  },
  {
    icon: Rocket,
    title: 'Scales With You',
    description: 'Built to grow from pilot to enterprise without breaking. Proven at scale.',
  },
  {
    icon: Lock,
    title: 'Zero Lock-In',
    description: 'Own your code, own your data. No vendor dependencies. Complete freedom.',
  },
]

/**
 * Feature Cards with spec-compliant hover animations
 * - Hover: translateY(-8px) scale(1.01)
 * - Duration: 160ms
 * - Shadow and edge gradient effects
 */
export function FeatureCards() {
  return (
    <section className="py-24 bg-gray-50" id="features">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <MotionContainer
          as="div"
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Why Choose Genrec AI
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Engineering excellence meets business impact. Here's what makes us different.
          </p>
        </MotionContainer>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <MotionContainer
              key={feature.title}
              className="group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.1,
                ease: [0.2, 0.9, 0.3, 1]
              }}
            >
              <motion.div
                className="relative h-full p-8 bg-white rounded-xl border-2 border-gray-200 cursor-pointer overflow-hidden"
                whileHover={{
                  y: -8,
                  scale: 1.01,
                  boxShadow: '0 20px 40px -12px rgba(0, 0, 0, 0.15)',
                  borderColor: '#081CFF',
                  transition: {
                    duration: 0.16,
                    ease: [0.4, 0, 0.2, 1]
                  }
                }}
                tabIndex={0}
                role="article"
                aria-label={`Feature: ${feature.title}`}
              >
                {/* Edge gradient effect on hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-accent-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  aria-hidden="true"
                />

                <div className="relative z-10">
                  {/* Icon */}
                  <div className="mb-6">
                    <div className="inline-flex p-3 bg-accent-blue/10 rounded-lg group-hover:bg-accent-blue/20 transition-colors duration-300">
                      <feature.icon 
                        className="w-8 h-8 text-accent-blue" 
                        aria-hidden="true"
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-accent-blue transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* Focus ring for accessibility */}
                <div className="absolute inset-0 rounded-xl ring-4 ring-transparent group-focus-visible:ring-accent-blue ring-offset-4 pointer-events-none" />
              </motion.div>
            </MotionContainer>
          ))}
        </div>
      </div>
    </section>
  )
}
