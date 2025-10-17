'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight, Shield, Zap, Brain } from 'lucide-react'
import { theme, gradients } from '@/lib/theme'

export function Hero() {
  const { scrollY } = useScroll()
  // Parallax for background only, not content
  const backgroundY = useTransform(scrollY, [0, 500], [0, 150])
  const backgroundOpacity = useTransform(scrollY, [0, 500], [1, 0.7])

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden" style={{ backgroundColor: theme.colors.background.primary }}>
      {/* Parallax Background Image - Moves independently */}
      <motion.div 
        className="absolute inset-0 z-0"
        style={{ 
          y: backgroundY,
          opacity: backgroundOpacity
        }}
      >
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2069")',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0b0f1a]/70 via-[#0b0f1a]/85 to-[#0b0f1a]" />
      </motion.div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 right-20 w-64 h-64 bg-[#C9A66B] rounded-full filter blur-3xl opacity-5" />
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-[#C9A66B] rounded-full filter blur-3xl opacity-5" />
      </div>

      {/* Content - Fixed position, not affected by parallax */}
      <div className="relative z-10 w-full py-32">
        <div className={theme.spacing.container}>
          <div className={theme.spacing.maxWidth}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              {/* Badge removed per request (privacy-first emphasis) */}

              {/* Main Heading */}
               <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
             className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold mb-6"
              style={{ color: theme.colors.text.primary }}
              >
                    We don’t just build software,
                  <span className="block mt-2 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-600">
                    we create leverage for your business.
               </span>
               </motion.h1>

              {/* Subheading */}
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed"
                style={{ color: theme.colors.text.secondary }}
              >
                From rapid MVPs to full-scale AI products, we accelerate growth, minimize risk, and transform
                <span style={{ color: theme.colors.accent.gold }}> construction</span>,
                <span style={{ color: theme.colors.accent.gold }}> hospitality</span>, and
                <span style={{ color: theme.colors.accent.gold }}> education</span>.
                No compromises. Immediate impact. Real results.
              </motion.p>

              {/* CTA Buttons - Always visible and clickable */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
              >
                <Link href="/contact">
                  <button
                    className="px-8 py-4 text-lg font-semibold rounded-lg transition-all hover:scale-105 hover:shadow-2xl shadow-lg"
                    style={{ 
                      background: `linear-gradient(135deg, ${theme.colors.accent.gold} 0%, ${theme.colors.accent.goldHover} 100%)`,
                      color: theme.colors.text.dark,
                      boxShadow: `0 10px 30px ${theme.colors.accent.goldGlow}`
                    }}
                  >
                    Start Your Exclusive Journey
                    <ArrowRight className="inline-block ml-2 h-5 w-5" />
                  </button>
                </Link>
                <Link href="/products">
                  <button
                    className="px-8 py-4 text-lg font-semibold rounded-lg border-2 transition-all hover:scale-105 hover:bg-[#C9A66B]/10"
                    style={{ 
                      borderColor: theme.colors.accent.gold,
                      color: theme.colors.accent.gold,
                      backgroundColor: 'transparent'
                    }}
                  >
                    Explore Your Next Advantage
                  </button>
                </Link>
              </motion.div>

              {/* Trust Indicators */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-sm uppercase tracking-wider"
                style={{ color: theme.colors.text.secondary }}
              >
                Engineered by Samyukth & Shyamnath • For enterprises that demand results
              </motion.p>
            </motion.div>

            {/* Feature Cards with Images */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20"
            >
              {[
                {
                  icon: Shield,
                  title: "Absolute Data Ownership",
                  description: "Your ideas and data are never exposed. Zero third-party access. Total control.",
                  image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&q=80&w=400"
                },
                {
                  icon: Zap,
                  title: "Rapid Deployment, Instant Impact",
                  description: "From pilot to production in weeks. Concepts turn into revenue-generating reality.",
                  image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=400"
                },
                {
                  icon: Brain,
                  title: "Intelligent Industry Mastery",
                  description: "Construction, hospitality, education—we speak your language and amplify your edge.",
                  image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400"
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="group relative overflow-hidden rounded-xl border"
                  style={{ 
                    backgroundColor: theme.colors.background.secondary,
                    borderColor: 'rgba(201, 166, 107, 0.2)'
                  }}
                >
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={feature.image}
                      alt={feature.title}
                      className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-110 transition-all duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <feature.icon className="w-10 h-10 mb-4" style={{ color: theme.colors.accent.gold }} />
                    <h3 className="text-xl font-bold mb-2" style={{ color: theme.colors.text.primary }}>
                      {feature.title}
                    </h3>
                    <p style={{ color: theme.colors.text.secondary }}>
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
