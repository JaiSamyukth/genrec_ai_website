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
    <section id="lumina-iq" className="relative bg-gray-50 py-24 sm:py-32">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_110%)]" />

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
            <span className="inline-block border border-gray-900 bg-white px-4 py-2 text-sm font-medium tracking-wider text-gray-900">
              OUR FLAGSHIP PRODUCT
            </span>
          </motion.div>

          <h2 className="mb-6 text-4xl font-light tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
            LuminaIQ
          </h2>
          
          <p className="mb-8 text-xl font-light leading-relaxed text-gray-600 sm:text-2xl">
            Transform any PDF into a living, intelligent learning experience.
          </p>

          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-gray-600">
            LuminaIQ turns static documents into interactive conversations. Upload your notes, 
            research papers, or books — our AI processes, explains, and quizzes you on them. 
            It's not just study automation. It's cognitive augmentation.
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
              className="group relative bg-white p-8 transition-all duration-300 hover:shadow-lg"
            >
              {/* Icon */}
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center border border-gray-200 transition-colors duration-300 group-hover:border-gray-900">
                <feature.icon className="h-6 w-6 text-gray-900" />
              </div>

              {/* Content */}
              <h3 className="mb-2 text-lg font-medium text-gray-900">
                {feature.title}
              </h3>
              <p className="text-sm leading-relaxed text-gray-600">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-16 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6"
        >
          <Link
            href="/products/lumina-iq"
            className="group relative overflow-hidden border border-gray-900 bg-gray-900 px-8 py-4 text-white transition-all duration-300 hover:bg-black"
          >
            <span className="relative z-10 text-sm font-medium tracking-wider">
              JOIN WAITLIST
            </span>
          </Link>

          <button className="group border border-gray-900 bg-transparent px-8 py-4 text-gray-900 transition-all duration-300 hover:bg-gray-900 hover:text-white">
            <span className="text-sm font-medium tracking-wider">
              WATCH DEMO
            </span>
          </button>
        </motion.div>

        {/* Decorative Element */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1.2, delay: 0.8 }}
          className="mt-20"
        >
          <div className="mx-auto aspect-video max-w-4xl border border-gray-200 bg-gradient-to-br from-gray-100 to-white p-8">
            <div className="flex h-full items-center justify-center">
              <p className="text-center text-sm font-medium tracking-wider text-gray-400">
                [ PRODUCT INTERFACE PREVIEW ]
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
