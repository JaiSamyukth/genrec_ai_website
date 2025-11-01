'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { ScrollReveal } from '@/components/ScrollReveal'
import { Mail, Linkedin, ArrowRight } from 'lucide-react'

const founders = [
  {
    name: 'Jai Samyukth B U',
    role: 'Co-Founder & Chief Architect',
    bio: 'Software architect specializing in privacy-first AI, end-to-end product development, and refined UX. Founder of Tabble. Leads technical vision, scalable architecture, and product execution.',
    email: 'jaisamyukth@gmail.com',
    linkedin: 'https://linkedin.com/in/jaisamyukth',
    education: 'V.S.B. Engineering College, B.Sc. Computer Science & Business Systems',
    expertise: ['Next.js', 'Framer Motion', 'System Architecture', 'Product Design'],
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=800',
  },
  {
    name: 'Shyamnath Sankar',
    role: 'Co-Founder & Co-CEO',
    bio: "Product and strategy lead focused on AI strategy, product development, and business scaling. Drives Genrec's market and partnership direction.",
    email: 'shyamnathsankar@genrecai.com',
    linkedin: 'https://linkedin.com/in/shyamnathsankar',
    education: 'V.S.B. Engineering College',
    expertise: ['AI Strategy', 'Business Development', 'Product Management', 'Partnerships'],
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800',
  },
  {
    name: 'Harish V',
    role: 'Technical Lead',
    bio: 'Technical lead driving engineering excellence across all Genrec AI products. Oversees system architecture, code quality, and technical execution.',
    email: 'harish@genrecai.com',
    linkedin: 'https://linkedin.com/in/harishv',
    education: 'V.S.B. Engineering College',
    expertise: ['Technical Leadership', 'System Architecture', 'Code Review', 'Engineering Management'],
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=800',
  },
]

export function FoundersPreview() {
  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, 1000], [0, -40])

  return (
    <section className="relative py-32 bg-gradient-to-b from-gray-50 via-white to-gray-50 overflow-hidden">
      {/* Background decoration */}
      <motion.div 
        className="absolute top-20 right-10 w-96 h-96 bg-accent-metal/5 rounded-full filter blur-3xl"
        style={{ y: y1 }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <ScrollReveal animation="slideUp" className="text-center mb-20">
          <motion.span 
            className="inline-block px-4 py-2 bg-accent-metal/10 text-accent-metal rounded-full text-sm font-bold uppercase tracking-wide mb-6"
            whileHover={{ scale: 1.05 }}
          >
            Leadership Team
          </motion.span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-primary-bg mb-6">
            Meet the Founders
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Engineers first. We build what we&apos;d want to use ourselves—privacy-first, 
            production-ready, and purpose-built for real-world challenges.
          </p>
        </ScrollReveal>

        <div className="space-y-24 max-w-7xl mx-auto">
          {founders.map((founder, index) => (
            <ScrollReveal
              key={founder.name}
              animation={index % 2 === 0 ? 'slideRight' : 'slideLeft'}
              delay={0.2}
            >
              <motion.div
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                {/* Image */}
                <div className={`relative ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <motion.div 
                    className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl"
                    whileHover={{ y: -10 }}
                    transition={{ duration: 0.4 }}
                  >
                    <img
                      src={founder.image}
                      alt={founder.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary-bg/80 via-primary-bg/20 to-transparent" />
                    
                    {/* Overlay info */}
                    <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                      >
                        <h3 className="text-3xl font-serif font-bold mb-2">
                          {founder.name}
                        </h3>
                        <p className="text-accent-metal font-semibold text-lg mb-4">
                          {founder.role}
                        </p>
                        
                        {/* Social links on image */}
                        <div className="flex items-center space-x-4">
                          <motion.a
                            href={`mailto:${founder.email}`}
                            className="w-10 h-10 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-accent-metal transition-colors"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            aria-label={`Email ${founder.name}`}
                          >
                            <Mail className="w-5 h-5" />
                          </motion.a>
                          <motion.a
                            href={founder.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-accent-metal transition-colors"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            aria-label={`${founder.name} LinkedIn`}
                          >
                            <Linkedin className="w-5 h-5" />
                          </motion.a>
                        </div>
                      </motion.div>
                    </div>
                  </motion.div>
                  
                  {/* Decorative accent */}
                  <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-accent-metal to-yellow-500 rounded-2xl -z-10 blur-xl opacity-50" />
                </div>

                {/* Content */}
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <motion.div
                    className="space-y-6"
                    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    <div>
                      <h4 className="text-sm font-bold text-accent-metal uppercase tracking-wide mb-3">
                        About
                      </h4>
                      <p className="text-lg text-gray-700 leading-relaxed">
                        {founder.bio}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-sm font-bold text-accent-metal uppercase tracking-wide mb-3">
                        Education
                      </h4>
                      <p className="text-gray-600">
                        {founder.education}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-sm font-bold text-accent-metal uppercase tracking-wide mb-3">
                        Expertise
                      </h4>
                      <div className="flex flex-wrap gap-3">
                        {founder.expertise.map((skill) => (
                          <motion.span
                            key={skill}
                            className="px-4 py-2 bg-gradient-to-r from-accent-metal/10 to-accent-metal/5 border border-accent-metal/20 rounded-full text-sm font-semibold text-gray-700"
                            whileHover={{ scale: 1.05, backgroundColor: 'rgba(201, 166, 107, 0.2)' }}
                          >
                            {skill}
                          </motion.span>
                        ))}
                      </div>
                    </div>

                    <motion.a
                      href={`mailto:${founder.email}`}
                      className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-accent-metal to-yellow-500 text-primary-bg font-bold rounded-full hover:shadow-xl hover:shadow-accent-metal/30 transition-all duration-300"
                      whileHover={{ scale: 1.05, x: 5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span>Get in Touch</span>
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </motion.a>
                  </motion.div>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal animation="fadeIn" delay={0.5}>
          <div className="text-center mt-20">
            <a href="/about">
              <motion.button
                className="inline-flex items-center px-8 py-4 bg-white border-2 border-accent-metal text-accent-metal font-bold rounded-full hover:bg-accent-metal hover:text-white transition-all duration-300 shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Learn More About Our Team</span>
                <ArrowRight className="ml-3 w-5 h-5" />
              </motion.button>
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
