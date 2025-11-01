'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { theme } from '@/lib/theme'

export function Process() {
  return (
    <section className="py-20" style={{ backgroundColor: theme.colors.background.secondary }}>
      <div className={theme.spacing.container}>
        <div className={theme.spacing.maxWidth}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 leading-tight" style={{ color: theme.colors.text.primary }}>
              How We Work
            </h2>
            <p className="mb-12 text-xl font-light max-w-2xl mx-auto" style={{ color: theme.colors.text.secondary }}>
              Simple. Transparent. Obsessively executed.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <motion.div 
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="p-8 rounded-2xl border backdrop-blur-sm relative overflow-hidden group" 
                style={{ backgroundColor: 'rgba(17, 24, 39, 0.6)', borderColor: 'rgba(201, 166, 107, 0.2)' }}
              >
                <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-accent-metal to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="text-accent-metal text-4xl font-bold mb-4">01</div>
                <h3 className="font-serif font-bold text-2xl mb-3" style={{ color: theme.colors.text.primary }}>Upload</h3>
                <p className="font-light leading-relaxed" style={{ color: theme.colors.text.secondary }}>Drag and drop any PDF. Our system processes it instantly using advanced RAG and NLP models.</p>
              </motion.div>
              
              <motion.div 
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="p-8 rounded-2xl border backdrop-blur-sm relative overflow-hidden group" 
                style={{ backgroundColor: 'rgba(17, 24, 39, 0.6)', borderColor: 'rgba(201, 166, 107, 0.2)' }}
              >
                <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-accent-metal to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="text-accent-metal text-4xl font-bold mb-4">02</div>
                <h3 className="font-serif font-bold text-2xl mb-3" style={{ color: theme.colors.text.primary }}>Learn</h3>
                <p className="font-light leading-relaxed" style={{ color: theme.colors.text.secondary }}>Ask anything — get deep, contextual answers with examples, analogies, and summaries.</p>
              </motion.div>
              
              <motion.div 
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="p-8 rounded-2xl border backdrop-blur-sm relative overflow-hidden group" 
                style={{ backgroundColor: 'rgba(17, 24, 39, 0.6)', borderColor: 'rgba(201, 166, 107, 0.2)' }}
              >
                <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-accent-metal to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="text-accent-metal text-4xl font-bold mb-4">03</div>
                <h3 className="font-serif font-bold text-2xl mb-3" style={{ color: theme.colors.text.primary }}>Master</h3>
                <p className="font-light leading-relaxed" style={{ color: theme.colors.text.secondary }}>Generate quizzes, track your learning streak, and convert theory into clarity.</p>
              </motion.div>
              

            </div>

            <div className="mt-12 text-center">
              <Link href="/contact">
                <motion.button 
                  whileHover={{ scale: 1.05, boxShadow: `0 20px 40px ${theme.colors.accent.goldGlow}` }}
                  whileTap={{ scale: 0.98 }}
                  className="px-10 py-5 rounded-xl font-semibold text-lg shadow-xl transition-all"
                  style={{ background: `linear-gradient(135deg, ${theme.colors.accent.gold} 0%, ${theme.colors.accent.goldHover} 100%)`, color: theme.colors.text.dark }}
                >
                  Begin Your Premium Journey →
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
