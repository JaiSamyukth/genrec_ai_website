'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { Brain, Palette, Ruler, BarChart3, ArrowRight, Code, Video, Megaphone, Search, Cog, Globe } from 'lucide-react'

const divisions = [
  {
    id: 'software-development',
    name: 'Software Development',
    tagline: 'Full-Stack Engineering',
    description: 'Enterprise-grade software, AI systems, SaaS platforms, and custom applications built from the ground up.',
    icon: Code,
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80',
    services: [
      'Custom AI Solutions',
      'Full-Stack Web Applications',
      'Mobile App Development',
      'SaaS Platform Engineering',
      'API Development & Integration'
    ],
    technologies: ['Python', 'TypeScript', 'Next.js', 'React Native', 'PostgreSQL', 'AWS'],
    gradient: 'from-[#C9A66B] to-[#D4B478]',
    href: '/products'
  },
  {
    id: 'website-development',
    name: 'Website Development',
    tagline: 'High-Converting Sites',
    description: 'Landing pages, portfolios, and institutional websites designed to convert visitors into customers.',
    icon: Globe,
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
    services: [
      'Landing Page Design',
      'Portfolio Websites',
      'Business Websites',
      'E-commerce Solutions',
      'CMS Integration'
    ],
    technologies: ['Next.js', 'Tailwind CSS', 'Framer Motion', 'Vercel', 'Contentful'],
    gradient: 'from-[#D4B478] to-[#E0C084]',
    href: '/products'
  },
  {
    id: 'smma-marketing',
    name: 'SMMA (Marketing)',
    tagline: 'Branding & Lead Generation',
    description: 'Social media marketing, ad management, brand strategy, and lead funnels that drive measurable growth.',
    icon: Megaphone,
    image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&q=80',
    services: [
      'Social Media Management',
      'Ad Campaign Strategy',
      'Brand Identity & Design',
      'Lead Funnel Optimization',
      'Content Marketing'
    ],
    technologies: ['Meta Ads', 'Google Ads', 'HubSpot', 'Mailchimp', 'Canva'],
    gradient: 'from-[#B8955A] to-[#C9A66B]',
    href: '/case-studies'
  },
  {
    id: 'video-production',
    name: 'Video Production',
    tagline: 'Creative Visuals',
    description: 'Product demos, animations, brand videos, and creative content that tells your story with cinematic precision.',
    icon: Video,
    image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&q=80',
    services: [
      'Product Demo Videos',
      'Motion Graphics',
      'Brand Story Videos',
      '2D/3D Animation',
      'Video Editing & Post-Production'
    ],
    technologies: ['Premiere Pro', 'After Effects', 'DaVinci Resolve', 'Cinema 4D', 'Blender'],
    gradient: 'from-[#C9A66B] to-[#B8955A]',
    href: '/case-studies'
  },
  {
    id: 'seo-optimization',
    name: 'SEO Optimization',
    tagline: 'Ranking Strategy',
    description: 'Technical SEO, content strategy, analytics, and performance optimization to dominate search rankings.',
    icon: Search,
    image: 'https://images.unsplash.com/photo-1571677208773-f0b56c3e5b73?w=800&q=80',
    services: [
      'Technical SEO Audits',
      'Keyword Research & Strategy',
      'On-Page Optimization',
      'Link Building',
      'Performance & Core Web Vitals'
    ],
    technologies: ['Google Analytics', 'Semrush', 'Ahrefs', 'Screaming Frog', 'Search Console'],
    gradient: 'from-[#D4B478] to-[#C9A66B]',
    href: '/case-studies'
  },
  {
    id: 'automation',
    name: 'Automation (Excel & Scripts)',
    tagline: 'Data & Workflow Automation',
    description: 'Excel automation, workflow scripts, reporting systems, and data pipelines that eliminate manual work.',
    icon: Cog,
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    services: [
      'Excel Automation & Macros',
      'Custom Scripting Solutions',
      'Workflow Automation',
      'Data Pipeline Development',
      'Automated Reporting Systems'
    ],
    technologies: ['Excel VBA', 'Python', 'Power BI', 'Zapier', 'Google Apps Script'],
    gradient: 'from-[#E0C084] to-[#D4B478]',
    href: '/case-studies'
  }
]

export default function DivisionsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-black to-gray-900 py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2070')] opacity-30 bg-cover bg-center" />
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.span
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="inline-block px-4 py-2 bg-accent-metal/20 text-accent-metal rounded-full text-sm font-bold uppercase tracking-wider mb-6"
            >
              Six Divisions. One Standard.
            </motion.span>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6">
              Built by Engineers.<br />
              <span className="text-accent-metal">Mastered Across Fields.</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Every division under Genrec AI operates with founder-level precision.<br />
              Different expertise, one standard.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-accent-metal to-accent-metal-light text-white rounded-lg font-semibold hover:shadow-xl transition-all"
                >
                  Start a Project
                  <ArrowRight className="inline-block ml-2 w-5 h-5" />
                </motion.button>
              </Link>
              <Link href="/case-studies">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all"
                >
                  View Our Work
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Divisions Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="space-y-32">
            {divisions.map((division, index) => {
              const Icon = division.icon
              const isEven = index % 2 === 0
              
              return (
                <motion.div
                  key={division.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                  className="relative"
                >
                  <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${isEven ? '' : 'lg:flex-row-reverse'}`}>
                    {/* Content */}
                    <div className={isEven ? '' : 'lg:order-2'}>
                      <div className={`inline-flex items-center gap-3 px-4 py-2 bg-gradient-to-r ${division.gradient} rounded-full mb-6`}>
                        <Icon className="w-5 h-5 text-white" />
                        <span className="text-white font-bold text-sm uppercase tracking-wider">
                          {division.tagline}
                        </span>
                      </div>

                      <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
                        {division.name}
                      </h2>

                      <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                        {division.description}
                      </p>

                      {/* Services */}
                      <div className="mb-8">
                        <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-4">
                          Services
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {division.services.map((service, i) => (
                            <div key={i} className="flex items-start gap-2">
                              <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${division.gradient} mt-2 flex-shrink-0`} />
                              <span className="text-gray-700">{service}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Technologies */}
                      <div className="mb-8">
                        <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-4">
                          Technologies & Tools
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {division.technologies.map((tech, i) => (
                            <span
                              key={i}
                              className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* CTA */}
                      <div className="flex gap-4">
                        <Link href={division.href}>
                          <motion.button
                            whileHover={{ scale: 1.05, x: 5 }}
                            className={`px-6 py-3 bg-gradient-to-r ${division.gradient} text-white rounded-lg font-semibold hover:shadow-xl transition-all`}
                          >
                            Explore Projects
                            <ArrowRight className="inline-block ml-2 w-4 h-4" />
                          </motion.button>
                        </Link>
                        <Link href="/contact">
                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            className="px-6 py-3 border-2 border-gray-900 text-gray-900 rounded-lg font-semibold hover:bg-gray-900 hover:text-white transition-all"
                          >
                            Start a Project
                          </motion.button>
                        </Link>
                      </div>
                    </div>

                    {/* Visual */}
                    <div className={isEven ? '' : 'lg:order-1'}>
                      <motion.div
                        whileHover={{ scale: 1.02, y: -5 }}
                        transition={{ duration: 0.3 }}
                        className="relative group"
                      >
                        <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl">
                          {/* Background Image */}
                          <Image
                            src={division.image}
                            alt={division.name}
                            fill
                            className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                          />
                          
                          {/* Dark Overlay - visible by default, disappears on hover, returns when hover ends */}
                          <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/70 opacity-100 group-hover:opacity-0 transition-opacity duration-300 ease-in-out" />
                          
                          {/* Gradient Accent Overlay - visible by default, disappears on hover, returns when hover ends */}
                          <div className={`absolute inset-0 bg-gradient-to-br ${division.gradient} opacity-30 mix-blend-overlay group-hover:opacity-0 transition-opacity duration-300 ease-in-out`} />
                          
                          {/* Content - fades out on hover */}
                          <div className="absolute inset-0 p-12 flex flex-col items-center justify-center text-center opacity-100 group-hover:opacity-0 transition-opacity duration-300 ease-in-out">
                            <Icon className="w-24 h-24 text-white mb-6 drop-shadow-lg" />
                            <h3 className="text-3xl font-bold text-white mb-2 drop-shadow-lg">
                              {division.name}
                            </h3>
                            <p className="text-white/90 text-lg drop-shadow-md">
                              {division.tagline}
                            </p>
                          </div>
                          
                          {/* Top Border */}
                          <div className={`absolute top-0 left-0 right-0 h-2 bg-gradient-to-r ${division.gradient}`} />
                        </div>
                        
                        {/* No decorative glow elements */}
                      </motion.div>
                    </div>
                  </div>

                  {/* Divider */}
                  {index < divisions.length - 1 && (
                    <div className="mt-32 flex items-center justify-center">
                      <div className="h-px w-32 bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
                    </div>
                  )}
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-gray-900 via-black to-gray-900">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
              One Team. Infinite Capabilities.
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Whether you need AI systems, creative campaigns, technical design, or data intelligence—
              we build it with the same founder-level precision.
            </p>
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 bg-gradient-to-r from-accent-metal to-accent-metal-light text-white rounded-lg font-bold text-lg hover:shadow-2xl transition-all"
              >
                Start Your Project
                <ArrowRight className="inline-block ml-3 w-6 h-6" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
