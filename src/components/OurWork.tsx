'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Code2, Database, Workflow, Globe } from 'lucide-react'

const projects = [
  {
    icon: Database,
    title: 'Enterprise CRM Systems',
    description: 'Custom-built customer relationship management platforms engineered for scale and precision.',
  },
  {
    icon: Workflow,
    title: 'Automation Dashboards',
    description: 'Intelligent workflow automation that reduces complexity and eliminates repetitive tasks.',
  },
  {
    icon: Code2,
    title: 'Feedback Systems',
    description: 'Institutional feedback platforms designed for clarity, speed, and actionable insights.',
  },
  {
    icon: Globe,
    title: 'Intelligent Web Applications',
    description: 'End-to-end web solutions built from scratch with performance as the foundation.',
  },
]

export function OurWork() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="our-work" className="bg-white py-24 sm:py-32">
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
            Our Work Speaks in <span className="font-normal">Results</span>
          </h2>
          <p className="text-lg leading-relaxed text-gray-600">
            We've engineered everything from enterprise-grade CRM systems to intelligent web platforms, 
            automation dashboards, and institutional feedback systems. Every product is built from scratch — 
            no templates, no shortcuts, no noise. Just code that works flawlessly.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-8 sm:grid-cols-2 lg:gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
              className="group relative"
            >
              <div className="relative border border-gray-200 bg-white p-8 transition-all duration-300 hover:border-gray-900 hover:shadow-xl">
                {/* Icon */}
                <div className="mb-6 inline-flex h-14 w-14 items-center justify-center border border-gray-900 bg-white transition-colors duration-300 group-hover:bg-gray-900">
                  <project.icon className="h-7 w-7 text-gray-900 transition-colors duration-300 group-hover:text-white" />
                </div>

                {/* Content */}
                <h3 className="mb-3 text-xl font-medium text-gray-900">
                  {project.title}
                </h3>
                <p className="leading-relaxed text-gray-600">
                  {project.description}
                </p>

                {/* Hover Line */}
                <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-gray-900 transition-all duration-300 group-hover:w-full" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
