'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Upload, MessageCircle, Award } from 'lucide-react'

const steps = [
  {
    number: '01',
    icon: Upload,
    title: 'Upload',
    description: 'Drag and drop any PDF. Our system processes it instantly using advanced RAG and NLP models.',
  },
  {
    number: '02',
    icon: MessageCircle,
    title: 'Learn',
    description: 'Ask anything — get deep, contextual answers with examples, analogies, and summaries.',
  },
  {
    number: '03',
    icon: Award,
    title: 'Master',
    description: 'Generate quizzes, track your learning streak, and convert theory into clarity.',
  },
]

export function HowItWorksRedesign() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="mb-6 text-4xl font-light tracking-tight text-gray-900 sm:text-5xl">
            How It <span className="font-normal">Works</span>
          </h2>
          <p className="text-lg text-gray-600">
            Three steps between you and mastery.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="mx-auto mt-20 max-w-5xl">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 + index * 0.2 }}
              className="group relative"
            >
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="absolute left-20 top-24 h-32 w-px bg-gray-200 sm:left-24" />
              )}

              <div className="relative mb-16 flex flex-col gap-8 sm:flex-row sm:items-start">
                {/* Left Side - Icon and Number */}
                <div className="flex items-center gap-6 sm:w-48">
                  <div className="relative flex h-16 w-16 items-center justify-center border-2 border-gray-900 bg-white transition-all duration-300 group-hover:bg-gray-900 sm:h-20 sm:w-20">
                    <step.icon className="h-7 w-7 text-gray-900 transition-colors duration-300 group-hover:text-white sm:h-8 sm:w-8" />
                  </div>
                  <span className="text-5xl font-light text-gray-300 sm:text-6xl">
                    {step.number}
                  </span>
                </div>

                {/* Right Side - Content */}
                <div className="flex-1 border-l border-gray-200 pl-8 pt-2 sm:pl-12">
                  <h3 className="mb-3 text-2xl font-medium text-gray-900 sm:text-3xl">
                    {step.title}
                  </h3>
                  <p className="text-lg leading-relaxed text-gray-600">
                    {step.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
