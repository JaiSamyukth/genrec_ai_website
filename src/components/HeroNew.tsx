'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export function HeroNew() {
  const { scrollY } = useScroll()
  const backgroundY = useTransform(scrollY, [0, 500], [0, 150])
  const backgroundOpacity = useTransform(scrollY, [0, 500], [1, 0.7])

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#0b0f1a]">
      {/* Parallax Background */}
      <motion.div 
        className="absolute inset-0 z-0"
        style={{ y: backgroundY, opacity: backgroundOpacity }}
      >
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2069")',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0b0f1a]/70 via-[#0b0f1a]/85 to-[#0b0f1a]" />
      </motion.div>

      {/* Decorative gold blurs */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-20 right-20 w-64 h-64 bg-[#C9A66B] rounded-full filter blur-3xl opacity-5" />
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-[#C9A66B] rounded-full filter blur-3xl opacity-5" />
      </div>

      {/* Content - NO container padding, full bleed */}
      <div className="relative z-10 w-full py-32">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            {/* Main Heading - NO PRIVACY BADGE */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold mb-6 text-[#F7F7F7]"
            >
              We don't just build software,
              <span className="block mt-2 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-600">
                we obsess over every detail.
              </span>
            </motion.h1>

            {/* Subheading - Founder-focused, premium positioning */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed text-[#9AA3B2]"
            >
              Elite solutions crafted by founders who answer at 3 AM. We don't do templates. 
              We don't do "good enough." We build premium products for clients who demand excellence.
            </motion.p>

            {/* CTA Buttons */}
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
                    boxShadow: `0 20px 40px rgba(201, 166, 107, 0.3)`,
                    transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] }
                  }}
                  whileTap={{ scale: 0.98 }}
                  className="group px-10 py-5 text-lg font-semibold rounded-xl transition-all shadow-xl relative overflow-hidden bg-gradient-to-r from-[#C9A66B] to-[#D4B478] text-[#0b0f1a]"
                >
                  <span className="relative z-10 flex items-center justify-center">
                    Reserved for Select Clients
                    <ArrowRight className="inline-block ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-amber-500 opacity-30"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.button>
              </Link>
              <Link href="/products">
                <motion.button
                  whileHover={{ 
                    scale: 1.05,
                    backgroundColor: 'rgba(201, 166, 107, 0.1)',
                    borderColor: '#D4B478',
                    transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] }
                  }}
                  whileTap={{ scale: 0.98 }}
                  className="px-10 py-5 text-lg font-semibold rounded-xl border-2 transition-all border-[#C9A66B] text-[#C9A66B] bg-transparent"
                >
                  Explore Premium Solutions
                </motion.button>
              </Link>
            </motion.div>

            {/* Trust Indicators - NO "talk to founders" language */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-sm uppercase tracking-widest font-light text-[#9AA3B2]"
            >
              Available 24/7 • Engineered by Samyukth & Shyamnath • Limited to 3 Clients Per Quarter
            </motion.p>
          </motion.div>

          {/* Feature Cards - MASSIVE WHITESPACE (mt-64 = 256px) */}
          <div className="mt-64">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
              {[
                {
                  title: "Bespoke Engineering",
                  description: "No templates. No shortcuts. Everything custom-built from scratch for your unique needs.",
                  image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1200"
                },
                {
                  title: "Always Available",
                  description: "Text us at 3 AM. We answer. Founders, not support teams.",
                  image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80&w=1200"
                },
                {
                  title: "Results That Matter",
                  description: "40-hour workflows become 4 hours. Manual chaos becomes automated precision.",
                  image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200"
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={{ 
                    y: -15,
                    scale: 1.02,
                    boxShadow: '0 25px 50px -12px rgba(201, 166, 107, 0.25)',
                    transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] }
                  }}
                  className="group relative overflow-hidden rounded-2xl border border-[#C9A66B]/30 bg-[#111827]/80 backdrop-blur-sm"
                >
                  {/* Image with proper loading */}
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={feature.image}
                      alt={feature.title}
                      className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-110 transition-all duration-700"
                      loading="eager"
                      decoding="async"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f1a] to-transparent opacity-80" />
                  </div>
                  
                  {/* Content */}
                  <div className="p-8">
                    <h3 className="text-2xl font-bold mb-3 text-[#F7F7F7]">
                      {feature.title}
                    </h3>
                    <p className="text-base leading-relaxed text-[#9AA3B2]">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
