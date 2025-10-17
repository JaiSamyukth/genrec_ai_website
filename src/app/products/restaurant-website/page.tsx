'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Check, ChefHat } from 'lucide-react'
import { theme, gradients } from '@/lib/theme'

export default function RestaurantWebsitePage() {
  return (
    <main style={{ backgroundColor: theme.colors.background.primary, minHeight: '100vh' }}>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=80&w=2070")'
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
              <ChefHat className="w-16 h-16 mx-auto mb-6" style={{ color: theme.colors.accent.gold }} />
              <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6" style={{ color: theme.colors.text.primary }}>
                Restaurant Websites That Fill Tables
              </h1>
              <p className="text-xl mb-8" style={{ color: theme.colors.text.secondary }}>
                Make reservations effortless and turn hungry browsers into loyal diners. We build beautiful restaurant websites that showcase your food and drive bookings.
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
              <div className="text-5xl font-bold mb-2" style={{ color: theme.colors.accent.gold }}>68%</div>
              <div className="text-xl" style={{ color: theme.colors.text.primary }}>More Reservations</div>
              <p className="mt-2" style={{ color: theme.colors.text.secondary }}>
                One-tap booking drives more tables filled
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="text-5xl font-bold mb-2" style={{ color: theme.colors.accent.gold }}>3.4x</div>
              <div className="text-xl" style={{ color: theme.colors.text.primary }}>Online Orders</div>
              <p className="mt-2" style={{ color: theme.colors.text.secondary }}>
                Effortless ordering means more revenue
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="text-5xl font-bold mb-2" style={{ color: theme.colors.accent.gold }}>4.8★</div>
              <div className="text-xl" style={{ color: theme.colors.text.primary }}>Average Rating</div>
              <p className="mt-2" style={{ color: theme.colors.text.secondary }}>
                Gorgeous design impresses before first bite
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
              Everything Your Restaurant Needs
            </h2>
            <p className="text-xl" style={{ color: theme.colors.text.secondary }}>
              From fine dining to fast-casual, built to drive reservations and repeat visits
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              'Integrated reservation system with real-time availability',
              'Online ordering for delivery and pickup',
              'Digital menu with dietary filters and allergen info',
              'High-quality food photography gallery',
              'Mobile-first design for on-the-go diners',
              'Customer reviews and ratings showcase',
              'Instagram feed auto-sync',
              'Google Maps integration with directions',
              'Email capture for promotions and loyalty',
              'Special events and private dining pages',
              'Gift card sales integration',
              'Local SEO to rank first in searches',
              'Secure hosting and SSL certificate',
              'Analytics and conversion tracking',
              'Training for your staff to manage content',
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
              Ready to Pack Your Restaurant?
            </h2>
            <p className="text-xl mb-8" style={{ color: theme.colors.text.secondary }}>
              Stop leaving money on the table. Let us build a website that keeps your reservation book full and your kitchen buzzing.
            </p>
            <Link href="/contact">
              <button 
                className="px-10 py-5 bg-[#0b0f1a] rounded-lg font-semibold text-xl transition-all hover:scale-105"
                style={{ color: theme.colors.accent.gold }}
              >
                Get Your Free Restaurant Website Demo
              </button>
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
