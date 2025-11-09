'use client'

import { motion } from 'framer-motion'

const milestones = [
  {
    year: '2019',
    title: 'Foundation',
    description: 'Genrec AI founded by Jai Samyukth B U and Shyamnath Sankar. First AI systems deployed.'
  },
  {
    year: '2021',
    title: 'Product Launch',
    description: 'Tabble and LuminaIQ platforms launched. First enterprise clients onboarded.'
  },
  {
    year: '2023',
    title: 'Division Expansion',
    description: 'Expanded into Studios (creative), Design (architecture/UI), and Data divisions.'
  },
  {
    year: '2024',
    title: 'Scale & Growth',
    description: 'Reached 50+ enterprise clients. Harish V joined as Technical Lead.'
  },
  {
    year: '2025',
    title: 'Global Reach',
    description: 'Building intelligent ecosystems for ambitious brands worldwide.'
  }
]

export function Timeline() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
            Our Journey
          </h2>
          <p className="text-xl text-gray-600">
            From AI studio to full-scale engineering powerhouse
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          {/* Vertical line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-accent-metal/30 -translate-x-1/2" />

          <div className="space-y-12">
            {milestones.map((milestone, index) => {
              const isEven = index % 2 === 0

              return (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative flex items-center ${
                    isEven ? 'md:justify-end' : 'md:justify-start'
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-accent-metal rounded-full border-4 border-white shadow-lg -translate-x-1/2 z-10" />

                  {/* Content card */}
                  <div
                    className={`ml-20 md:ml-0 md:w-5/12 bg-white rounded-xl p-6 shadow-lg border-2 border-gray-200 hover:border-accent-metal transition-all ${
                      isEven ? 'md:mr-20' : 'md:ml-20'
                    }`}
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-3xl font-bold text-accent-metal font-serif">
                        {milestone.year}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {milestone.title}
                    </h3>
                    <p className="text-gray-600">
                      {milestone.description}
                    </p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
