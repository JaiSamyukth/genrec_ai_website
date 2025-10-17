'use client'

import { motion } from 'framer-motion'
import { theme } from '@/lib/theme'

export function Integrations() {
  return (
    <section className="py-20">
      <div className={theme.spacing.container}>
        <div className={theme.spacing.maxWidth}>
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6" style={{ color: theme.colors.text.primary }}>
              Seamless Ecosystem Integration
            </h2>
            <p className="mb-6" style={{ color: theme.colors.text.secondary }}>
              Built to work with your existing systems and favorite tools without compromise.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="p-4 text-center rounded-lg border overflow-hidden" style={{ backgroundColor: theme.colors.background.primary }}>
                <img src="https://images.unsplash.com/photo-1504691342899-30a8d1f3a3b3?auto=format&fit=crop&q=80&w=800" alt="cloud infrastructure" className="w-full h-28 object-cover rounded-md mb-3" loading="lazy" />
                <strong>AWS, Azure</strong>
                <div className="text-sm text-gray-600">Enterprise-grade cloud</div>
              </div>
              <div className="p-4 text-center rounded-lg border overflow-hidden" style={{ backgroundColor: theme.colors.background.primary }}>
                <img src="https://images.unsplash.com/photo-1581091012184-7c1b7b5d6d6d?auto=format&fit=crop&q=80&w=800" alt="database" className="w-full h-28 object-cover rounded-md mb-3" loading="lazy" />
                <strong>PostgreSQL</strong>
                <div className="text-sm text-gray-600">Secure data storage</div>
              </div>
              <div className="p-4 text-center rounded-lg border overflow-hidden" style={{ backgroundColor: theme.colors.background.primary }}>
                <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800" alt="containers" className="w-full h-28 object-cover rounded-md mb-3" loading="lazy" />
                <strong>Kubernetes, Docker</strong>
                <div className="text-sm text-gray-600">Scalable deployment</div>
              </div>
              <div className="p-4 text-center rounded-lg border overflow-hidden" style={{ backgroundColor: theme.colors.background.primary }}>
                <img src="https://images.unsplash.com/photo-1555949963-aa79dcee9813?auto=format&fit=crop&q=80&w=800" alt="ai model" className="w-full h-28 object-cover rounded-md mb-3" loading="lazy" />
                <strong>TensorFlow, PyTorch</strong>
                <div className="text-sm text-gray-600">Advanced AI frameworks</div>
              </div>

            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="p-4 text-center rounded-lg border overflow-hidden" style={{ backgroundColor: theme.colors.background.primary }}>
                <img src="https://images.unsplash.com/photo-1581093588401-6b1f8d3b1f2c?auto=format&fit=crop&q=80&w=800" alt="authentication" className="w-full h-28 object-cover rounded-md mb-3" loading="lazy" />
                <strong>Auth0</strong>
                <div className="text-sm text-gray-600">Secure authentication</div>
              </div>
              <div className="p-4 text-center rounded-lg border overflow-hidden" style={{ backgroundColor: theme.colors.background.primary }}>
                <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=800" alt="ai research" className="w-full h-28 object-cover rounded-md mb-3" loading="lazy" />
                <strong>OpenAI</strong>
                <div className="text-sm text-gray-600">Powerful models</div>
              </div>
              <div className="p-4 text-center rounded-lg border overflow-hidden" style={{ backgroundColor: theme.colors.background.primary }}>
                <img src="https://images.unsplash.com/photo-1581093585550-3b1b8f1a6b1b?auto=format&fit=crop&q=80&w=800" alt="database cluster" className="w-full h-28 object-cover rounded-md mb-3" loading="lazy" />
                <strong>Redis, MongoDB</strong>
                <div className="text-sm text-gray-600">Caching & flexible storage</div>
              </div>
              <div className="p-4 text-center rounded-lg border overflow-hidden" style={{ backgroundColor: theme.colors.background.primary }}>
                <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800" alt="api" className="w-full h-28 object-cover rounded-md mb-3" loading="lazy" />
                <strong>GraphQL, REST</strong>
                <div className="text-sm text-gray-600">API-first integrations</div>
              </div>
            </div>

            <div className="mt-8 text-center">
              <p className="mb-4" style={{ color: theme.colors.text.secondary }}>Modern Tech Stack: Python, TypeScript, React, Next.js, Node.js, FastAPI, Redis, MongoDB, GraphQL, REST</p>
              <a href="/contact" className="inline-flex items-center px-6 py-3 rounded-lg" style={{ background: `linear-gradient(135deg, ${theme.colors.accent.gold} 0%, ${theme.colors.accent.goldHover} 100%)`, color: theme.colors.text.dark }}>
                API-First, No Vendor Lock-in, Enterprise Ready
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
