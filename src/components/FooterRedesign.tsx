'use client'

import { motion } from 'framer-motion'

export function FooterRedesign() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-gray-200 bg-white py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Copyright */}
          <p className="mb-2 text-sm text-gray-600">
            © {currentYear} Genrec AI. All rights reserved.
          </p>
          
          {/* Tagline */}
          <p className="text-sm text-gray-500">
            Built with purpose. Designed for performance.
          </p>

          {/* Decorative Line */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            className="mx-auto mt-8 h-px w-24 bg-gray-300"
          />
        </motion.div>
      </div>
    </footer>
  )
}
