'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const divisions = [
  {
    id: 'software-development',
    name: 'Software Development',
    tagline: 'Full-Stack Engineering',
    description: 'Enterprise-grade software, AI systems, SaaS platforms, and custom applications.',
    gradient: 'from-[#C9A66B] to-[#D4B478]',
    bgGradient: 'from-gray-900 via-gray-800 to-gray-900',
    href: '/divisions#software-development'
  },
  {
    id: 'website-development',
    name: 'Website Development',
    tagline: 'High-Converting Sites',
    description: 'Landing pages, portfolios, and institutional websites designed to convert.',
    gradient: 'from-[#D4B478] to-[#E0C084]',
    bgGradient: 'from-slate-900 via-slate-800 to-slate-900',
    href: '/divisions#website-development'
  },
  {
    id: 'smma-marketing',
    name: 'SMMA (Marketing)',
    tagline: 'Branding & Lead Generation',
    description: 'Social media marketing, ad management, and brand strategy that drives growth.',
    gradient: 'from-[#B8955A] to-[#C9A66B]',
    bgGradient: 'from-zinc-900 via-zinc-800 to-zinc-900',
    href: '/divisions#smma-marketing'
  },
  {
    id: 'video-production',
    name: 'Video Production',
    tagline: 'Creative Visuals',
    description: 'Product demos, animations, and creative content with cinematic precision.',
    gradient: 'from-[#C9A66B] to-[#B8955A]',
    bgGradient: 'from-neutral-900 via-neutral-800 to-neutral-900',
    href: '/divisions#video-production'
  },
  {
    id: 'seo-optimization',
    name: 'SEO Optimization',
    tagline: 'Ranking Strategy',
    description: 'Technical SEO, content strategy, and performance optimization.',
    gradient: 'from-[#D4B478] to-[#C9A66B]',
    bgGradient: 'from-stone-900 via-stone-800 to-stone-900',
    href: '/divisions#seo-optimization'
  },
  {
    id: 'automation',
    name: 'Automation',
    tagline: 'Data & Workflow Automation',
    description: 'Excel automation, workflow scripts, and data pipelines that eliminate manual work.',
    gradient: 'from-[#E0C084] to-[#D4B478]',
    bgGradient: 'from-amber-950 via-amber-900 to-amber-950',
    href: '/divisions#automation'
  }
]

export function DivisionsOverview() {
  return (
    <section className="relative py-24 bg-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-accent-metal/5 rounded-full filter blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-2 bg-accent-metal/10 text-accent-metal rounded-full text-sm font-bold uppercase tracking-wider mb-6"
          >
            Six Divisions. One Standard.
          </motion.span>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gray-900 mb-6">
            What We <span className="text-accent-metal">Build</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From AI systems to design, we build intelligent ecosystems with the same engineering precision.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto mb-12">
          {divisions.map((division, index) => {
            return (
              <motion.div
                key={division.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <a href={division.href}>
                  <motion.div
                    whileHover={{ y: -8, scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                    className="group relative h-full bg-white rounded-2xl border-2 border-gray-200 hover:border-accent-metal overflow-hidden transition-all shadow-sm hover:shadow-xl"
                  >
                    {/* Gradient Background */}
                    <div className={`relative h-48 overflow-hidden bg-gradient-to-br ${division.bgGradient}`}>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent group-hover:from-black/50 group-hover:via-black/20 transition-all duration-300" />
                      
                      {/* Gradient overlay bar */}
                      <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${division.gradient}`} />
                    </div>
                    
                    <div className="p-6">
                      {/* Title */}
                      <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-accent-metal transition-colors">
                        {division.name}
                      </h3>
                      
                      {/* Tagline */}
                      <p className="text-sm font-semibold text-accent-metal mb-3 uppercase tracking-wide">
                        {division.tagline}
                      </p>
                      
                      {/* Description */}
                      <p className="text-gray-600 text-sm leading-relaxed mb-4">
                        {division.description}
                      </p>
                      
                      {/* Arrow */}
                      <div className="flex items-center text-gray-900 font-semibold text-sm group-hover:text-accent-metal transition-colors">
                        <span>Learn More</span>
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
                      </div>
                    </div>
                  </motion.div>
                </a>
              </motion.div>
            )
          })}
        </div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center"
        >
          <a href="/divisions">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-accent-metal to-accent-metal-light text-white rounded-lg font-semibold hover:shadow-xl transition-all"
            >
              Explore All Divisions
              <ArrowRight className="inline-block ml-2 w-5 h-5" />
            </motion.button>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
