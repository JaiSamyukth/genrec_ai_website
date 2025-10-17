'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { MorphingBlob } from '@/components/animations/MorphingBlob'
import { TreeAnimation } from '@/components/animations/TreeAnimation'
import { TiltCard } from '@/components/animations/TiltCard'
import { ScrollReveal } from '@/components/ScrollReveal'

const reasons = [
  {
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=400',
    title: 'Privacy-First Architecture',
    description: "Your data stays yours. No third-party access, no selling, no compromise. We're GDPR and CCPA ready.",
    color: 'blue',
  },
  {
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=400',
    title: 'Engineering Excellence',
    description: "Built by engineers, for enterprises. Clean code, scalable architecture, and proper documentation.",
    color: 'green',
  },
  {
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=400',
    title: 'Industry Expertise',
    description: "We understand construction sites, hotel operations, and classroom dynamics. Domain knowledge matters.",
    color: 'purple',
  },
  {
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=400',
    title: 'Rapid Deployment',
    description: "From pilot to production in weeks, not months. Our systems are designed for quick wins.",
    color: 'amber',
  },
  {
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=400',
    title: 'Enterprise Security',
    description: "SOC 2 Type II compliant architecture. End-to-end encryption, audit logs, and role-based access.",
    color: 'red',
  },
  {
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=400',
    title: 'Measurable ROI',
    description: "Clear metrics, transparent reporting. We show impact on your bottom line, not just fancy dashboards.",
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
          <motion.span 
            className="inline-block px-4 py-2 bg-gradient-to-r from-accent-metal/10 to-accent-metal/5 text-accent-metal rounded-full text-sm font-bold uppercase tracking-wide mb-6"
            whileHover={{ scale: 1.05 }}
          >
            Our Differentiators
          </motion.span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-primary-bg mb-6">
            Why Industry Leaders Choose Us
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We&apos;re not another AI vendor. We&apos;re your engineering partners,
            building systems that actually work in production environments.
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
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-bold text-white">
                      {reason.title}
                    </h3>
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
          className="mt-16 bg-gradient-to-br from-primary-bg to-slate-900 rounded-2xl p-8 md:p-12 text-center"
        >
          <h3 className="text-2xl md:text-3xl font-serif font-bold text-light-text mb-4">
            Ready to see the difference?
          </h3>
          <p className="text-muted text-lg mb-6 max-w-2xl mx-auto">
            Schedule a 20-minute demo. We&apos;ll show you a working pilot
            tailored to your use case — because seeing beats reading.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center px-6 py-3 bg-accent-metal text-white rounded-lg hover:bg-accent-metal/90 transition-colors"
          >
            Schedule your demo →
          </a>
        </motion.div>
      </div>
    </section>
  )
}
