'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  FileText, 
  MessageSquare, 
  HelpCircle, 
  GraduationCap, 
  BookOpen, 
  Library 
} from 'lucide-react'
import Link from 'next/link'

const features = [
  {
    icon: FileText,
    title: 'Smart PDF Processing',
    description: 'AI reads, understands, and extracts insights from any document.',
  },
  {
    icon: MessageSquare,
    title: 'Interactive AI Chat',
    description: 'Ask, learn, and explore through natural conversation.',
  },
  {
    icon: HelpCircle,
    title: 'Question Generation',
    description: 'Auto-generate questions to test understanding.',
  },
  {
    icon: GraduationCap,
    title: 'Quiz Mode',
    description: 'Reinforce knowledge through adaptive quizzes.',
  },
  {
    icon: BookOpen,
    title: 'Smart Notes',
    description: 'Seamlessly integrated AI-powered notes.',
  },
  {
    icon: Library,
    title: 'Personal Library',
    description: 'Organize all your materials with intelligent search.',
  },
]

export function LuminaIQSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="lumina-iq" className="relative bg-secondary-bg py-24 sm:py-32">
      {/* Background Pattern with luxury gold tint */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(201,166,107,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(201,166,107,0.05)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_110%)]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-3xl text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-6 inline-block"
          >
            <span className="inline-block border-2 border-accent-gold bg-primary-bg px-4 py-2 text-sm font-semibold tracking-wider text-accent-gold uppercase">
              OUR FLAGSHIP PRODUCT
            </span>
          </motion.div>

          <h2 className="mb-6 text-4xl font-light tracking-tight sm:text-5xl lg:text-6xl bg-gradient-to-r from-accent-gold via-accent-gold-hover to-accent-gold bg-clip-text text-transparent animate-gradient-x">
            LuminaIQ
          </h2>
          
          <p className="mb-8 text-xl font-light leading-relaxed text-light-text sm:text-2xl">
            Transform any PDF into a living, <span className="text-accent-gold">intelligent learning experience</span>.
          </p>

          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-secondary-text">
            LuminaIQ turns static documents into interactive conversations. Upload your notes, 
            research papers, or books — our AI processes, explains, and quizzes you on them. 
            It's not just study automation. It's <span className="text-accent-gold font-medium">cognitive augmentation</span>.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mx-auto mt-20 grid max-w-6xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
              className="group relative bg-tertiary-bg p-8 border border-accent-gold/10 transition-all duration-300 hover:border-accent-gold hover:shadow-xl hover:shadow-accent-gold/20"
            >
              {/* Icon with gold theme */}
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center border-2 border-accent-gold/50 transition-all duration-300 group-hover:border-accent-gold group-hover:bg-accent-gold">
                <feature.icon className="h-6 w-6 text-accent-gold transition-colors duration-300 group-hover:text-primary-bg" />
              </div>

              {/* Content */}
              <h3 className="mb-2 text-lg font-medium text-light-text group-hover:text-accent-gold transition-colors">
                {feature.title}
              </h3>
              <p className="text-sm leading-relaxed text-secondary-text">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Buttons with luxury gold styling */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-16 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6"
        >
          <Link
            href="/products/lumina-iq"
            className="group relative overflow-hidden bg-gradient-to-r from-accent-gold to-accent-gold-hover px-8 py-4 text-primary-bg font-semibold transition-all duration-300 hover:from-accent-gold-hover hover:to-accent-gold-dark hover:scale-105 shadow-lg shadow-accent-gold/30"
          >
            <span className="relative z-10 text-sm font-semibold tracking-wider uppercase">
              JOIN WAITLIST
            </span>
          </Link>

          <button className="group border-2 border-accent-gold bg-transparent px-8 py-4 text-accent-gold font-semibold transition-all duration-300 hover:bg-accent-gold/10 hover:border-accent-gold-hover">
            <span className="text-sm font-semibold tracking-wider uppercase">
              WATCH DEMO
            </span>
          </button>
        </motion.div>

        {/* Decorative Element with luxury styling */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1.2, delay: 0.8 }}
          className="mt-20"
        >
          <div className="mx-auto aspect-video max-w-4xl border-2 border-accent-gold/20 bg-gradient-to-br from-tertiary-bg to-primary-bg p-8 hover:border-accent-gold/40 transition-colors">
            <div className="flex h-full items-center justify-center">
              <p className="text-center text-sm font-medium tracking-wider text-accent-gold/60 uppercase">
                [ PRODUCT INTERFACE PREVIEW ]
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
