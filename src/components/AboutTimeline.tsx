'use client'

import { motion } from 'framer-motion'
import { theme } from '@/lib/theme'
import Image from 'next/image'

const timeline = [
  {
    year: '2023',
    title: 'The Beginning',
    description: 'Samyukth & Shyamnath founded Genrec AI with a simple mission: build software that actually solves problems.',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800'
  },
  {
    year: '2024',
    title: 'First Breakthrough',
    description: 'Transformed a 40-hour manual workflow into 4 hours for our first construction client. The feedback: "This changed everything."',
    image: 'https://images.unsplash.com/photo-1541746972996-4e0b0f43e02a?auto=format&fit=crop&q=80&w=800'
  },
  {
    year: '2024',
    title: 'Growing the Vision',
    description: 'Expanded to hospitality and education. Always the same approach: listen deeply, build obsessively, stay available 24/7.',
    image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=800'
  },
  {
    year: '2025',
    title: 'Today',
    description: 'Limited to 3 clients per quarter. Not because we can\'t scale, but because we refuse to compromise on quality.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800'
  }
]

export function AboutTimeline() {
  return (
    <section className="py-32" style={{ backgroundColor: theme.colors.background.primary }}>
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6" style={{ color: theme.colors.text.primary }}>
            Our Journey
          </h2>
          <p className="text-xl font-light max-w-2xl mx-auto" style={{ color: theme.colors.text.secondary }}>
            From two founders with a vision to a team obsessed with excellence.
          </p>
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent-metal via-accent-metal/50 to-transparent" />

          {/* Timeline items */}
          <div className="space-y-24">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } flex-col md:gap-16`}
              >
                {/* Content */}
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                  <div className="inline-block px-4 py-1 rounded-full bg-accent-metal/20 text-accent-metal text-sm font-bold mb-4">
                    {item.year}
                  </div>
                  <h3 className="text-2xl font-serif font-bold mb-3" style={{ color: theme.colors.text.primary }}>
                    {item.title}
                  </h3>
                  <p className="text-base font-light leading-relaxed" style={{ color: theme.colors.text.secondary }}>
                    {item.description}
                  </p>
                </div>

                {/* Center dot */}
                <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 rounded-full bg-accent-metal border-4 border-primary-bg z-10" />

                {/* Image */}
                <div className="w-full md:w-5/12 mt-6 md:mt-0">
                  <div className="relative h-64 rounded-2xl overflow-hidden group">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Founders section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-32 text-center"
        >
          <h3 className="text-3xl font-serif font-bold mb-12" style={{ color: theme.colors.text.primary }}>
            The Founders
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {[
              {
                name: 'Jai Samyukth',
                role: 'Co-Founder & CEO',
                bio: 'Software architecture and UX obsessive. Answers the phone at 3 AM.',
                image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=600'
              },
              {
                name: 'Shyamnath Sankar',
                role: 'Co-Founder & CTO',
                bio: 'AI strategy and product development. Fixes bugs at midnight.',
                image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=600'
              }
            ].map((founder, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                className="group"
              >
                <div className="relative w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden founder-image">
                  <img
                    src={founder.image}
                    alt={founder.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="text-xl font-serif font-bold mb-2" style={{ color: theme.colors.text.primary }}>
                  {founder.name}
                </h4>
                <p className="text-sm mb-3" style={{ color: theme.colors.accent.gold }}>
                  {founder.role}
                </p>
                <p className="text-sm font-light leading-relaxed" style={{ color: theme.colors.text.secondary }}>
                  {founder.bio}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
