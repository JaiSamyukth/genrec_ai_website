'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Check, Shield } from 'lucide-react'
import { theme, gradients } from '@/lib/theme'

export default function ConstructionWebsitePage() {
  return (
    <main style={{ backgroundColor: theme.colors.background.primary, minHeight: '100vh' }}>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=2070")'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0b0f1a]/90 to-[#0b0f1a]" />
        
        <div className={`${theme.spacing.container} relative z-10`}>
          <div className="text-center max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Shield className="w-16 h-16 mx-auto mb-6" style={{ color: theme.colors.accent.gold }} />
              <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6" style={{ color: theme.colors.text.primary }}>
                Construction Websites That Win Contracts
              </h1>
              <p className="text-xl mb-8" style={{ color: theme.colors.text.secondary }}>
                Showcase your portfolio and win high-value projects. We build professional construction websites that establish credibility and turn property owners into paying clients.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <button 
                    className="px-8 py-4 rounded-lg font-semibold transition-all hover:scale-105 hover:shadow-xl"
                    style={{ 
                      background: gradients.button,
                      color: theme.colors.text.primary 
                    }}
                  >
                    Get Your Free Quote
                  </button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20" style={{ backgroundColor: 'rgba(201, 166, 107, 0.05)' }}>
        <div className={theme.spacing.container}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-5xl font-bold mb-2" style={{ color: theme.colors.accent.gold }}>5.2x</div>
              <div className="text-xl" style={{ color: theme.colors.text.primary }}>More Quality Leads</div>
              <p className="mt-2" style={{ color: theme.colors.text.secondary }}>
                Attract property owners ready to build
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="text-5xl font-bold mb-2" style={{ color: theme.colors.accent.gold }}>73%</div>
              <div className="text-xl" style={{ color: theme.colors.text.primary }}>Higher Close Rate</div>
              <p className="mt-2" style={{ color: theme.colors.text.secondary }}>
                Professional site builds trust before meetings
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="text-5xl font-bold mb-2" style={{ color: theme.colors.accent.gold }}>$420K</div>
              <div className="text-xl" style={{ color: theme.colors.text.primary }}>Avg Contract Value</div>
              <p className="mt-2" style={{ color: theme.colors.text.secondary }}>
                Premium sites attract premium clients
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className={theme.spacing.section}>
        <div className={theme.spacing.container}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6" style={{ color: theme.colors.text.primary }}>
              Everything to Establish Market Dominance
            </h2>
            <p className="text-xl" style={{ color: theme.colors.text.secondary }}>
              Built specifically for contractors and builders who want to win more high-value projects
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              'Interactive project portfolio with before-and-after photos',
              'Local SEO to dominate your geographic market',
              'Client testimonials and case studies that build credibility',
              'Lead capture forms optimized for contractor inquiries',
              'Mobile-optimized for on-the-go property owners',
              'Licenses and insurance certificate display',
              'Service area maps and coverage display',
              'Quote request system with instant notifications',
              'Blog setup for ongoing content marketing',
              'Google My Business integration',
              'Analytics dashboard to track leads',
              'Secure hosting and SSL certificate included',
              'Training for your team to update projects',
              'Ongoing support for 12 months'
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="flex items-start gap-3"
              >
                <Check className="w-6 h-6 flex-shrink-0 mt-1" style={{ color: theme.colors.accent.gold }} />
                <span style={{ color: theme.colors.text.primary }}>{feature}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20" style={{ background: gradients.button }}>
        <div className={theme.spacing.container}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6" style={{ color: theme.colors.text.primary }}>
              Ready to Book Out Your Calendar?
            </h2>
            <p className="text-xl mb-8" style={{ color: theme.colors.text.secondary }}>
              Stop chasing low-margin projects. Let a professional website bring premium clients to you.
            </p>
            <Link href="/contact">
              <button 
                className="px-10 py-5 bg-[#0b0f1a] rounded-lg font-semibold text-xl transition-all hover:scale-105"
                style={{ color: theme.colors.accent.gold }}
              >
                Get Your Free Website Proposal
              </button>
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
