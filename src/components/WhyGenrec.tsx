'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { theme } from '@/lib/theme'
import { MorphingBlob } from '@/components/animations/MorphingBlob'
import { TreeAnimation } from '@/components/animations/TreeAnimation'
import { TiltCard } from '@/components/animations/TiltCard'
import { ScrollReveal } from '@/components/ScrollReveal'

const reasons = [
  {
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=400',
    title: 'Founder-Led',
    description: "Work directly with Samyukth & Shyamnath. No middlemen. No junior devs.",
    color: 'blue',
  },
  {
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=400',
    title: 'Always Here',
    description: "2 AM bug? We answer. This isn't a job—it's our craft.",
    color: 'green',
  },
  {
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=400',
    title: 'Zero Templates',
    description: "Every project custom-built. Your challenge is unique. So is our solution.",
    color: 'purple',
  },
  {
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=400',
    title: 'Real Results',
    description: "40 hours → 4 hours. Manual chaos → automated precision.",
    color: 'amber',
  },
  {
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=400',
    title: 'Obsessive Quality',
    description: "We don't ship 'good enough.' We ship perfect.",
    color: 'red',
  },
  {
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=400',
    title: 'Built Fast',
    description: "Weeks, not months. Because we know what we're doing.",
    color: 'indigo',
  },
]

export function WhyGenrec() {
  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, 1000], [0, -30])

  return (
    <section className="relative py-32 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden">
      {/* Background decoration */}
      <motion.div 
        className="absolute top-20 left-10 w-72 h-72 bg-accent-metal/5 rounded-full filter blur-3xl"
        style={{ y: y1 }}
      />
      <motion.div 
        className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/5 rounded-full filter blur-3xl"
        style={{ y: useTransform(scrollY, [0, 1000], [0, 30]) }}
      />
      
      {/* Morphing Blobs */}
      <MorphingBlob className="top-1/4 right-1/4 w-64 h-64 opacity-10" />
      
      {/* Tree Animations */}
      <TreeAnimation className="top-10 left-10 w-48 h-48 opacity-20" />
      <TreeAnimation className="bottom-10 right-10 w-56 h-56 opacity-15 rotate-90" />
      
      <div className="container mx-auto px-4 relative z-10">
        <ScrollReveal animation="slideUp" className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-primary-bg mb-6 leading-tight">
            Beyond Partnership
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed font-light">
            We obsess over details. We answer at 3 AM. We build what others can't.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <ScrollReveal
              key={index}
              animation="scale"
              delay={index * 0.1}
            >
              <TiltCard className="h-full" maxTilt={8}>
                <motion.div
                  className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 h-full"
                  whileHover={{ y: -5, transition: { duration: 0.3 } }}
                >
                {/* Image header */}
                <div className="relative h-48 overflow-hidden">
                  <motion.img
                    src={reason.image}
                    alt={reason.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-lg font-semibold">{reason.title}</h3>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <p className="text-gray-600 leading-relaxed">
                    {reason.description}
                  </p>
                  <motion.div 
                    className="mt-4 flex items-center text-accent-metal font-semibold group-hover:text-accent-metal/80 transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    <span className="text-sm">Learn more</span>
                    <ArrowRight className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </motion.div>
                </div>
                
                {/* Color accent bar */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-${reason.color}-400 to-${reason.color}-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`} />
                </motion.div>
              </TiltCard>
            </ScrollReveal>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 rounded-2xl p-8 md:p-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center mb-8">
            <div>
              <div className="text-3xl font-bold" style={{ color: 'var(--primary-bg)' }}>500+</div>
              <div className="text-sm text-gray-600">Enterprise Clients</div>
            </div>
            <div>
              <div className="text-3xl font-bold" style={{ color: 'var(--primary-bg)' }}>98%</div>
              <div className="text-sm text-gray-600">Satisfaction Rate</div>
            </div>
            <div>
              <div className="text-3xl font-bold" style={{ color: 'var(--primary-bg)' }}>40%</div>
              <div className="text-sm text-gray-600">Average Cost Reduction</div>
            </div>
            <div>
              <div className="text-3xl font-bold" style={{ color: 'var(--primary-bg)' }}>24/7</div>
              <div className="text-sm text-gray-600">Support</div>
            </div>
          </div>

          <div className="text-center">
            <h3 className="text-2xl md:text-3xl font-serif font-bold mb-4" style={{ color: theme.colors.text.primary }}>
              Join the Select Few
            </h3>
            <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto font-light">Private consultation with founders. No sales pitch. Just strategic conversation about your vision. Limited availability.</p>
            <a
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-accent-metal text-white rounded-xl hover:bg-accent-metal/90 transition-all shadow-xl hover:shadow-2xl hover:scale-105 font-semibold"
            >
              Request Private Consultation →
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
