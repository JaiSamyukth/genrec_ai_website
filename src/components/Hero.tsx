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
              {/* Badge - Power Signal */}
              <motion.span
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="inline-block px-4 py-2 bg-accent-metal/10 text-accent-metal rounded-full text-sm font-bold uppercase tracking-wide mb-6"
              >
                Genrec AI — Privacy-First Engineering for Enterprise Dominance
              </motion.span>

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
                From rapid MVPs to full-scale AI deployment, your data stays yours — always. We accelerate growth, minimize risk, and transform
                <span style={{ color: theme.colors.accent.gold }}> construction</span>,
                <span style={{ color: theme.colors.accent.gold }}> hospitality</span>, and
                <span style={{ color: theme.colors.accent.gold }}> education</span>.
                {' '}No compromises. Immediate impact. Real results.
              </motion.p>

              {/* CTA Buttons - Premium with enhanced animations */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-col sm:flex-row gap-6 justify-center mb-14"
              >
                <Link href="/contact">
                  <motion.button
                    whileHover={{ 
                      scale: 1.05,
                      boxShadow: `0 20px 40px ${theme.colors.accent.goldGlow}`,
                      transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] }
                    }}
                    whileTap={{ scale: 0.98 }}
                    className="group px-10 py-5 text-lg font-semibold rounded-xl transition-all shadow-xl relative overflow-hidden"
                    style={{ 
                      background: `linear-gradient(135deg, ${theme.colors.accent.gold} 0%, ${theme.colors.accent.goldHover} 100%)`,
                      color: theme.colors.text.dark,
                    }}
                  >
                    <span className="relative z-10 flex items-center">
                      Reserved for Select Clients
                      <ArrowRight className="inline-block ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-amber-500"
                      initial={{ x: '-100%' }}
                      whileHover={{ x: 0 }}
                      transition={{ duration: 0.3 }}
                      style={{ opacity: 0.3 }}
                    />
                  </motion.button>
                </Link>
                <Link href="/products">
                  <motion.button
                    whileHover={{ 
                      scale: 1.05,
                      backgroundColor: 'rgba(201, 166, 107, 0.1)',
                      borderColor: theme.colors.accent.goldHover,
                      transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] }
                    }}
                    whileTap={{ scale: 0.98 }}
                    className="px-10 py-5 text-lg font-semibold rounded-xl border-2 transition-all"
                    style={{ 
                      borderColor: theme.colors.accent.gold,
                      color: theme.colors.accent.gold,
                      backgroundColor: 'transparent'
                    }}
                  >
                    Explore Premium Solutions
                  </motion.button>
                </Link>
              </motion.div>

              {/* Trust Indicators - Minimal */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="text-sm uppercase tracking-widest font-light"
                style={{ color: theme.colors.text.secondary }}
              >
                Samyukth & Shyamnath • Available 24/7 • Limited to 3 Clients Per Quarter
              </motion.p>
            </motion.div>

            {/* Feature Cards with Images */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-32"
            >
              {[
                {
                  title: "Bespoke Engineering",
                  description: "No templates. No shortcuts. Everything custom-built from scratch for your unique needs.",
                  image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800"
                },
                {
                  title: "Always Available",
                  description: "Text us at 3 AM. We answer. Founders, not support teams.",
                  image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80&w=800"
                },
                {
                  title: "Results That Matter",
                  description: "40-hour workflows become 4 hours. Manual chaos becomes automated precision.",
                  image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800"
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={{ 
                    y: -15,
                    scale: 1.02,
                    boxShadow: '0 25px 50px -12px rgba(201, 166, 107, 0.25)',
                    transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] }
                  }}
                  className="group relative overflow-hidden rounded-2xl border backdrop-blur-sm"
                  style={{ 
                    backgroundColor: 'rgba(17, 24, 39, 0.8)',
                    borderColor: 'rgba(201, 166, 107, 0.3)'
                  }}
                >
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={feature.image}
                      alt={feature.title}
                      className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-110 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f1a] to-transparent opacity-80" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3" style={{ color: theme.colors.text.primary }}>
                      {feature.title}
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ color: theme.colors.text.secondary }}>
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
