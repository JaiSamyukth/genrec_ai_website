'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { theme } from '@/lib/theme'

export function Process() {
  return (
    <section className="py-20" style={{ backgroundColor: theme.colors.background.secondary }}>
      <div className={theme.spacing.container}>
        <div className={theme.spacing.maxWidth}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6" style={{ color: theme.colors.text.primary }}>
              Your Journey to AI Mastery
            </h2>
            <p className="mb-8 text-lg" style={{ color: theme.colors.text.secondary }}>
              A short, decisive path from opportunity to measurable advantage.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="p-6 rounded-lg border" style={{ backgroundColor: theme.colors.background.primary, borderColor: 'rgba(201, 166, 107, 0.08)' }}>
                <h3 className="font-semibold text-xl mb-2" style={{ color: theme.colors.text.primary }}>Discovery Call</h3>
                <p style={{ color: theme.colors.text.secondary }}>We uncover hidden opportunities and identify where AI can give you undeniable leverage.</p>
              </div>
              <div className="p-6 rounded-lg border" style={{ backgroundColor: theme.colors.background.primary, borderColor: 'rgba(201, 166, 107, 0.08)' }}>
                <h3 className="font-semibold text-xl mb-2" style={{ color: theme.colors.text.primary }}>Custom Solution Design</h3>
                <p style={{ color: theme.colors.text.secondary }}>Tailored architecture that amplifies your business while ensuring secure, compliant operations.</p>
              </div>
              <div className="p-6 rounded-lg border" style={{ backgroundColor: theme.colors.background.primary, borderColor: 'rgba(201, 166, 107, 0.08)' }}>
                <h3 className="font-semibold text-xl mb-2" style={{ color: theme.colors.text.primary }}>Rapid Implementation</h3>
                <p style={{ color: theme.colors.text.secondary }}>From concept to live, real impact in weeks, not months.</p>
              </div>
              <div className="p-6 rounded-lg border" style={{ backgroundColor: theme.colors.background.primary, borderColor: 'rgba(201, 166, 107, 0.08)' }}>
                <h3 className="font-semibold text-xl mb-2" style={{ color: theme.colors.text.primary }}>Continuous Optimization</h3>
                <p style={{ color: theme.colors.text.secondary }}>AI that learns, adapts, and keeps your competitive edge razor-sharp.</p>
              </div>
            </div>

            <div className="mt-8">
              <Link href="/contact">
                <button className="px-6 py-3 rounded-lg font-semibold" style={{ background: `linear-gradient(135deg, ${theme.colors.accent.gold} 0%, ${theme.colors.accent.goldHover} 100%)`, color: theme.colors.text.dark }}>
                  Start Your AI Journey
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
