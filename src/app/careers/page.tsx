'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Code, Palette, BarChart3, Pencil, Camera, Ruler } from 'lucide-react'

const openPositions = [
  {
    id: 'ai-engineer',
    title: 'AI Engineer',
    division: 'Genrec AI',
    type: 'Full-time',
    location: 'Remote / Hybrid',
    description: 'Build production AI systems. Work on LLMs, RAG pipelines, and custom ML models.',
    requirements: [
      'Python + TypeScript proficiency',
      'Experience with LLMs or ML frameworks',
      'Can ship code that scales',
      'Portfolio of real projects, not tutorials'
    ],
    icon: Code,
    gradient: 'from-blue-600 to-cyan-600'
  },
  {
    id: 'ui-ux-designer',
    title: 'UI/UX Designer',
    division: 'Genrec Design',
    type: 'Full-time',
    location: 'Remote / Hybrid',
    description: 'Design interfaces that work. Systems thinking, not just screens.',
    requirements: [
      'Figma mastery',
      'Portfolio showing actual shipped products',
      'Understand design systems and components',
      'Can critique your own work ruthlessly'
    ],
    icon: Ruler,
    gradient: 'from-amber-600 to-orange-600'
  },
  {
    id: 'creative-editor',
    title: 'Creative Editor',
    division: 'Genrec Studios',
    type: 'Full-time',
    location: 'Remote / Hybrid',
    description: 'Edit video with precision. Motion graphics, storytelling, and brand consistency.',
    requirements: [
      'Premiere Pro + After Effects expert',
      'Portfolio with varied styles',
      'Understand pacing and narrative',
      'Can work fast without losing quality'
    ],
    icon: Camera,
    gradient: 'from-purple-600 to-pink-600'
  },
  {
    id: 'marketing-strategist',
    title: 'Marketing Strategist',
    division: 'Genrec Studios',
    type: 'Full-time',
    location: 'Remote / Hybrid',
    description: 'Build campaigns that convert. Data-driven, creative execution.',
    requirements: [
      'Track record of measurable results',
      'Understand funnels and attribution',
      'Can write compelling copy',
      'Experience with paid ads and organic growth'
    ],
    icon: Pencil,
    gradient: 'from-purple-600 to-pink-600'
  },
  {
    id: 'autocad-specialist',
    title: 'AutoCAD Specialist',
    division: 'Genrec Design',
    type: 'Full-time / Contract',
    location: 'Remote / Hybrid',
    description: 'Technical drawings, 3D visualization, and architectural design work.',
    requirements: [
      'AutoCAD proficiency (3+ years)',
      'Experience with architectural or engineering projects',
      'Can deliver precision under tight deadlines',
      'Bonus: Blender or SketchUp skills'
    ],
    icon: Ruler,
    gradient: 'from-amber-600 to-orange-600'
  },
  {
    id: 'data-analyst',
    title: 'Data Analyst',
    division: 'Genrec Data',
    type: 'Full-time',
    location: 'Remote / Hybrid',
    description: 'Turn messy data into intelligent systems. Excel automation, dashboards, insights.',
    requirements: [
      'Excel VBA + Python',
      'Experience with Power BI or Tableau',
      'Can build automated reporting systems',
      'Understand business context, not just numbers'
    ],
    icon: BarChart3,
    gradient: 'from-green-600 to-emerald-600'
  }
]

const perks = [
  'Work directly with founders',
  'Learn real engineering, not frameworks',
  'Own entire projects, not tickets',
  'Remote-first culture',
  'Competitive compensation',
  'No corporate bureaucracy',
  'Ship real products customers use',
  'Growth based on output, not tenure'
]

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-black to-gray-900 py-32 overflow-hidden">
        {/* Stock background image with overlay */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=2070')] opacity-100 bg-cover bg-center grayscale" />
        {/* Semi-transparent overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/70" />
        
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
              Join the Team
            </motion.span>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6">
              We Hire Conviction,<br />
              <span className="text-accent-metal">Not Résumés.</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Work directly with founders. Learn real engineering, not frameworks.<br />
              Build products that matter, not features that fade.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
                What We Look For
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                We don't care about degrees or years of experience.<br />
                We care about what you've built, how you think, and whether you give a damn.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-white rounded-xl p-8 shadow-sm border border-gray-200"
              >
                <div className="w-12 h-12 bg-accent-metal/10 rounded-lg flex items-center justify-center mb-4">
                  <Code className="w-6 h-6 text-accent-metal" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Builders First
                </h3>
                <p className="text-gray-600">
                  Show us what you've made. GitHub repos, side projects, anything real. Tutorials don't count.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-white rounded-xl p-8 shadow-sm border border-gray-200"
              >
                <div className="w-12 h-12 bg-accent-metal/10 rounded-lg flex items-center justify-center mb-4">
                  <Palette className="w-6 h-6 text-accent-metal" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Obsessive Quality
                </h3>
                <p className="text-gray-600">
                  Details matter. Pixel-perfect, performant, maintainable. If it's not right, it doesn't ship.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="bg-white rounded-xl p-8 shadow-sm border border-gray-200"
              >
                <div className="w-12 h-12 bg-accent-metal/10 rounded-lg flex items-center justify-center mb-4">
                  <BarChart3 className="w-6 h-6 text-accent-metal" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Owner Mentality
                </h3>
                <p className="text-gray-600">
                  Think like a founder. Own outcomes, not tasks. Ship products, not tickets.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
              Open Positions
            </h2>
            <p className="text-xl text-gray-600">
              Remote-first. Founder-led. Real work that ships.
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto space-y-6">
            {openPositions.map((position, index) => {
              const Icon = position.icon
              
              return (
                <motion.div
                  key={position.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="bg-white rounded-2xl border-2 border-gray-200 hover:border-accent-metal transition-all overflow-hidden group"
                >
                  <div className="p-8">
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex items-start gap-4">
                        <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${position.gradient} flex items-center justify-center flex-shrink-0`}>
                          <Icon className="w-7 h-7 text-white" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900 mb-1">
                            {position.title}
                          </h3>
                          <div className="flex flex-wrap items-center gap-3 text-sm">
                            <span className="text-accent-metal font-semibold">
                              {position.division}
                            </span>
                            <span className="text-gray-400">•</span>
                            <span className="text-gray-600">{position.type}</span>
                            <span className="text-gray-400">•</span>
                            <span className="text-gray-600">{position.location}</span>
                          </div>
                        </div>
                      </div>
                      
                      <Link href="/contact">
                        <motion.button
                          whileHover={{ scale: 1.05, x: 5 }}
                          className="px-6 py-3 bg-gray-900 text-white rounded-lg font-semibold hover:bg-accent-metal transition-all opacity-0 group-hover:opacity-100"
                        >
                          Apply Now
                          <ArrowRight className="inline-block ml-2 w-4 h-4" />
                        </motion.button>
                      </Link>
                    </div>

                    <p className="text-gray-700 mb-6 text-lg">
                      {position.description}
                    </p>

                    <div>
                      <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-3">
                        What We're Looking For
                      </h4>
                      <ul className="space-y-2">
                        {position.requirements.map((req, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${position.gradient} mt-2 flex-shrink-0`} />
                            <span className="text-gray-600">{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Perks Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-12 text-center">
              Why Join Genrec AI
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {perks.map((perk, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.2, delay: index * 0.03 }}
                  className="flex items-center gap-3 bg-white rounded-lg p-4 border border-gray-200"
                >
                  <div className="w-2 h-2 rounded-full bg-accent-metal flex-shrink-0" />
                  <span className="text-gray-700 font-medium">{perk}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 bg-gradient-to-br from-gray-900 via-black to-gray-900 overflow-hidden">
        {/* Stock background with overlay */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=2070')] opacity-100 bg-cover bg-center grayscale" />
        {/* Semi-transparent overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/70" />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
              Ready to Build With Us?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Send us your portfolio, GitHub, or anything that shows what you can do.<br />
              No cover letters. No formalities. Just show us you can ship.
            </p>
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 bg-gradient-to-r from-accent-metal to-accent-metal-light text-white rounded-lg font-bold text-lg hover:shadow-2xl transition-all"
              >
                Work With Us
                <ArrowRight className="inline-block ml-3 w-6 h-6" />
              </motion.button>
            </Link>
            <p className="text-gray-400 mt-6 text-sm">
              Not hiring for your role? Email us anyway. We're always looking for exceptional people.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
