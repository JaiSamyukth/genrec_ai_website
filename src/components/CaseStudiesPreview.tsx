'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { ScrollReveal } from '@/components/ScrollReveal'
import Link from 'next/link'
import { ArrowRight, Clock } from 'lucide-react'

const caseStudies = [
  {
    id: 'sitepilot',
    title: 'SitePilot Construction',
    client: 'Mid-size Commercial Builder',
    industry: 'Construction',
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=800',
    duration: '12 weeks',
    highlight: 'Reduced weekly reporting time by 60%',
    description: 'Implemented photo-based progress tracking for a 200-unit residential complex. Automated daily reports and compliance checks.',
    results: [
      '60% reduction in reporting time',
      '85% accuracy in progress predictions',
      'Zero safety incidents during pilot',
    ],
    gradient: 'from-green-500 to-emerald-600',
    tag: 'Demo Case Study',
  },
  {
    id: 'hotel-azure',
    title: 'Hotel Azure',
    client: 'Boutique Luxury Hotel',
    industry: 'Hospitality',
    image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&q=80&w=800',
    duration: '8 weeks',
    highlight: 'Improved service flow and upsell rates',
    description: 'Deployed Tabble across 40-room property. Enhanced guest dining experience with premium digital interfaces.',
    results: [
      '30% increase in room service orders',
      '4.8/5 guest satisfaction score',
      '25% reduction in order errors',
    ],
    gradient: 'from-amber-500 to-orange-600',
    tag: 'Demo Case Study',
  },
]

export function CaseStudiesPreview() {
  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, 1000], [0, -35])

  return (
    <section className="relative py-32 bg-white overflow-hidden">
      {/* Background decoration */}
      <motion.div 
        className="absolute bottom-20 left-10 w-96 h-96 bg-blue-500/5 rounded-full filter blur-3xl"
        style={{ y: y1 }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <ScrollReveal animation="slideUp" className="text-center mb-16">
          <motion.span 
            className="inline-block px-4 py-2 bg-accent-metal/10 text-accent-metal rounded-full text-sm font-bold uppercase tracking-wide mb-6"
            whileHover={{ scale: 1.05 }}
          >
            Success Stories
          </motion.span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-primary-bg mb-6">
            Pilot Success Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Real implementations, measurable results. See how we&apos;ve helped
            enterprises transform their operations with AI.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {caseStudies.map((study, index) => (
            <ScrollReveal
              key={study.id}
              animation="scale"
              delay={index * 0.2}
            >
              <Link href={`/case-studies/${study.id}`}>
                <motion.div 
                  className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden h-full"
                  whileHover={{ y: -10 }}
                >
                  {/* Image header */}
                  <div className="relative h-64 overflow-hidden">
                    <motion.img
                      src={study.image}
                      alt={study.title}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${study.gradient} opacity-60 mix-blend-multiply`} />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    
                    {/* Tag */}
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-accent-metal text-xs font-bold rounded-full">
                        {study.tag}
                      </span>
                    </div>
                    
                    {/* Title overlay */}
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <h3 className="text-3xl font-serif font-bold mb-2">
                        {study.title}
                      </h3>
                      <div className="flex items-center space-x-3 text-sm opacity-90">
                        <span>{study.client}</span>
                        <span>•</span>
                        <span className="flex items-center">
                          <Clock className="w-3 h-3 mr-1" />
                          {study.duration}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <p className="text-gray-700 mb-6 leading-relaxed">
                      {study.description}
                    </p>

                    <div className="bg-gradient-to-br from-accent-metal/5 to-accent-metal/10 rounded-xl p-6 mb-6">
                      <p className="text-accent-metal font-bold text-lg mb-3">
                        {study.highlight}
                      </p>
                      <ul className="space-y-2">
                        {study.results.map((result, i) => (
                          <li key={i} className="flex items-start text-sm text-gray-700">
                            <span className="w-5 h-5 rounded-full bg-accent-metal/20 flex items-center justify-center text-accent-metal mr-3 mt-0.5 flex-shrink-0">
                              ✓
                            </span>
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <motion.div 
                      className="flex items-center text-accent-metal font-semibold group-hover:text-accent-metal/80"
                      whileHover={{ x: 5 }}
                    >
                      <span>Read Full Case Study</span>
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </motion.div>
                  </div>

                  {/* Hover gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-accent-metal/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                </motion.div>
              </Link>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal animation="fadeIn" delay={0.5}>
          <div className="text-center mt-16">
            <p className="text-sm text-gray-500 mb-6">
              * These are demo case studies with sample data for illustration purposes
            </p>
            <Link href="/case-studies">
              <motion.button
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-accent-metal to-yellow-500 text-primary-bg font-bold rounded-full hover:shadow-2xl hover:shadow-accent-metal/30 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>View All Case Studies</span>
                <ArrowRight className="ml-3 w-5 h-5" />
              </motion.button>
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
