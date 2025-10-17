'use client'

import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'

const testimonials = [
  {
    quote: "Genrec's AI solution transformed our project tracking. What used to take hours now happens automatically.",
    author: 'Operations Director',
    company: 'Regional Construction Firm',
    industry: 'Construction',
  },
  {
    quote: "The Tabble system elevated our dining service. Guests love the premium experience, and our staff finds it intuitive.",
    author: 'General Manager',
    company: 'Luxury Hotel Group',
    industry: 'Hospitality',
  },
  {
    quote: "Lumina IQ gave us insights we never had before. We can now personalize learning at scale.",
    author: 'Academic Director',
    company: 'Private Educational Institution',
    industry: 'Education',
  },
]

const stats = [
  { value: '15+', label: 'Enterprise Pilots' },
  { value: '98%', label: 'Client Retention' },
  { value: '4-6', label: 'Weeks to Deploy' },
  { value: '100%', label: 'Privacy Compliant' },
]

export function ClientsTrust() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary-bg to-slate-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-light-text mb-4">
            Trusted by Select Enterprises
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            We work with forward-thinking organizations ready to embrace
            privacy-first AI. Quality over quantity, always.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6"
            >
              <Quote className="w-8 h-8 text-accent-metal mb-4" />
              <p className="text-light-text mb-4 italic">
                "{testimonial.quote}"
              </p>
              <div className="border-t border-white/20 pt-4">
                <p className="text-light-text font-semibold">
                  {testimonial.author}
                </p>
                <p className="text-muted text-sm">
                  {testimonial.company}
                </p>
                <p className="text-accent-metal text-xs mt-1">
                  {testimonial.industry}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <p className="text-4xl md:text-5xl font-bold text-accent-metal mb-2">
                {stat.value}
              </p>
              <p className="text-muted text-sm">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12"
        >
          <p className="text-xs text-muted">
            * Testimonials are from pilot programs. Names withheld for privacy.
            Numbers represent demo metrics.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
