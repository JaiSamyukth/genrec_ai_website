'use client'

import { motion } from 'framer-motion'
import { theme } from '@/lib/theme'

export function Testimonials() {
  return (
    <section className="py-20" style={{ backgroundColor: theme.colors.background.secondary }}>
      <div className={theme.spacing.container}>
        <div className={theme.spacing.maxWidth}>
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6" style={{ color: theme.colors.text.primary }}>
              Trusted by leaders who demand results
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <blockquote className="p-6 rounded-lg border" style={{ backgroundColor: theme.colors.background.primary }}>
                <p className="italic text-lg" style={{ color: theme.colors.text.primary }}>
                  “Genrec AI transformed our construction site monitoring. Delays cut by 40% while safety compliance skyrocketed.”
                </p>
                <footer className="mt-4 text-sm" style={{ color: theme.colors.text.secondary }}>– Michael Chen, VP of Operations, BuildTech Global</footer>
              </blockquote>

              <blockquote className="p-6 rounded-lg border" style={{ backgroundColor: theme.colors.background.primary }}>
                <p className="italic text-lg" style={{ color: theme.colors.text.primary }}>
                  “Tabble revolutionized our luxury dining. Guest satisfaction surged 35% in the first quarter.”
                </p>
                <footer className="mt-4 text-sm" style={{ color: theme.colors.text.secondary }}>– Sophie Laurent, Grand Lumière Hotels</footer>
              </blockquote>

              <blockquote className="p-6 rounded-lg border" style={{ backgroundColor: theme.colors.background.primary }}>
                <p className="italic text-lg" style={{ color: theme.colors.text.primary }}>
                  “Lumina IQ personalized learning for 10,000+ students. Results were beyond expectations.”
                </p>
                <footer className="mt-4 text-sm" style={{ color: theme.colors.text.secondary }}>– Dr. James Wilson, TechEd University</footer>
              </blockquote>
            </div>

            <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div>
                <div className="text-xl font-bold" style={{ color: theme.colors.text.primary }}>15+</div>
                <div className="text-sm" style={{ color: theme.colors.text.secondary }}>Enterprise Pilots</div>
              </div>
              <div>
                <div className="text-xl font-bold" style={{ color: theme.colors.text.primary }}>98%</div>
                <div className="text-sm" style={{ color: theme.colors.text.secondary }}>Client Retention</div>
              </div>
              <div>
                <div className="text-xl font-bold" style={{ color: theme.colors.text.primary }}>4–6</div>
                <div className="text-sm" style={{ color: theme.colors.text.secondary }}>Weeks to Deploy</div>
              </div>
              <div>
                <div className="text-xl font-bold" style={{ color: theme.colors.text.primary }}>100%</div>
                <div className="text-sm" style={{ color: theme.colors.text.secondary }}>Privacy Compliant</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
