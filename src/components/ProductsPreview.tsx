'use client'

import Link from 'next/link'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ScrollReveal } from '@/components/ScrollReveal'
import { TiltCard } from '@/components/animations/TiltCard'
import { ParticleSystem } from '@/components/animations/ParticleSystem'
import { ArrowRight } from 'lucide-react'

const products = [
  {
    id: 'tabble',
    title: 'Tabble',
    description: 'Premium dining tablet & staff interfaces for luxury hotels.',
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=80&w=600',
    href: '/products/tabble',
    features: [
      'Non-transactional menu experience',
      'Chef touch TV integration',
      'Luxury-first UI design',
      'Multi-language support',
    ],
    gradient: 'from-amber-500 to-orange-600',
    color: 'amber',
  },
  {
    id: 'lumina-iq',
    title: 'Lumina IQ',
    description: 'Adaptive learning and assessment engine for modern education.',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=600',
    href: '/products/lumina-iq',
    features: [
      'Personalized learning paths',
      'Real-time analytics dashboard',
      'Evaluation insights',
      'Student progress tracking',
    ],
    gradient: 'from-blue-500 to-indigo-600',
    color: 'blue',
  },
  {
    id: 'construct-ai',
    title: 'Construct AI',
    description: 'Project progress tracking with photo-based insights.',
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=600',
    href: '/products/construct-ai',
    features: [
      'Photo-based progress logs',
      'Gantt chart automation',
      'Resource prediction',
      'Safety compliance tracking',
    ],
    gradient: 'from-green-500 to-emerald-600',
    color: 'green',
  },
  {
    id: 'restaurant-tech',
    title: 'Restaurant Tech Suite',
    description: 'Complete digital solution for modern restaurants.',
    image: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&q=80&w=600',
    href: '/products/restaurant-tech',
    features: [
      'Digital menu management',
      'Kitchen display system',
      'Table management',
      'Integration-friendly APIs',
    ],
    gradient: 'from-purple-500 to-pink-600',
    color: 'purple',
  },
]

export function ProductsPreview() {
  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, 1000], [0, -50])

  return (
    <section id="products" className="relative py-32 overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100" />
      
      {/* Particle System */}
      <ParticleSystem count={30} />
      
      {/* Decorative elements */}
      <motion.div 
        className="absolute top-0 right-0 w-96 h-96 bg-accent-metal/5 rounded-full filter blur-3xl"
        style={{ y: y1 }}
      />
      <motion.div 
        className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full filter blur-3xl"
        style={{ y: useTransform(scrollY, [0, 1000], [0, 50]) }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <ScrollReveal animation="slideUp" className="text-center mb-16">
          <motion.span 
            className="inline-block px-4 py-2 bg-accent-metal/10 text-accent-metal rounded-full text-sm font-bold uppercase tracking-wide mb-6"
            whileHover={{ scale: 1.05 }}
          >
            Innovative Solutions
          </motion.span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-primary-bg mb-6">
            AI-Powered Product Suite
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Transform your industry with our tailored AI solutions. Each product is meticulously crafted 
            for enterprise-scale deployment while maintaining absolute data privacy.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {products.map((product, index) => (
            <ScrollReveal
              key={product.id}
              animation="slideUp"
              delay={index * 0.1}
            >
              <TiltCard className="h-full" maxTilt={10}>
                <motion.div
                  className="group relative h-full"
                  whileHover={{ y: -10, transition: { duration: 0.3 } }}
                >
                  <Link href={product.href}>
                    <div className="relative overflow-hidden rounded-2xl bg-white shadow-xl hover:shadow-2xl transition-all duration-500 h-full">
                    {/* Image Container */}
                    <div className="relative h-56 overflow-hidden">
                      <motion.img
                        src={product.image}
                        alt={product.title}
                        className="w-full h-full object-cover"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                      />
                      <div className={`absolute inset-0 bg-gradient-to-t ${product.gradient} opacity-60 mix-blend-multiply`} />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                      
                      {/* Title overlay */}
                      <div className="absolute bottom-4 left-4 right-4">
                        <h3 className="text-2xl font-bold text-white mb-1">{product.title}</h3>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <p className="text-gray-600 mb-4 line-clamp-2">
                        {product.description}
                      </p>
                      
                      {/* Features */}
                      <div className="space-y-2 mb-6">
                        {product.features.slice(0, 3).map((feature, idx) => (
                          <div key={idx} className="flex items-start">
                            <div className={`w-1.5 h-1.5 rounded-full bg-${product.color}-500 mt-2 mr-3 flex-shrink-0`} />
                            <span className="text-sm text-gray-500">{feature}</span>
                          </div>
                        ))}
                      </div>

                      {/* CTA */}
                      <div className="flex items-center text-accent-metal font-semibold group-hover:text-accent-metal/80 transition-colors">
                        <span>Learn More</span>
                        <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>

                    {/* Hover effect overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-accent-metal/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                    </div>
                  </Link>
                </motion.div>
              </TiltCard>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal animation="fadeIn" delay={0.5}>
          <div className="text-center">
            <Link href="/products">
              <motion.button
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-accent-metal to-yellow-500 text-primary-bg font-bold rounded-full hover:shadow-2xl hover:shadow-accent-metal/30 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Explore All Solutions</span>
                <ArrowRight className="ml-3 w-5 h-5" />
              </motion.button>
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
