'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import { theme } from '@/lib/theme'

interface ContactModalProps {
  isOpen: boolean
  onClose: () => void
}

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Site container push-out effect */}
          <motion.div
            initial={{ scale: 1, rotate: 0, x: 0, y: 0, opacity: 1 }}
            animate={{
              scale: 0.7,
              rotateY: -15,
              rotateX: 8,
              x: '-120vw',
              y: '-100vh',
              opacity: 0,
              filter: 'blur(12px)'
            }}
            exit={{
              scale: 1,
              rotateY: 0,
              rotateX: 0,
              x: 0,
              y: 0,
              opacity: 1,
              filter: 'blur(0px)'
            }}
            transition={{
              duration: 1.4,
              ease: [0.68, -0.55, 0.27, 1.55]
            }}
            className="fixed inset-0 z-40 pointer-events-none"
            style={{
              perspective: '1000px',
              transformStyle: 'preserve-3d'
            }}
          >
            <div id="site-content" />
          </motion.div>

          {/* Contact form entrance */}
          <motion.div
            initial={{
              scale: 0.8,
              rotateY: 15,
              rotateX: -8,
              x: '120vw',
              y: '100vh',
              opacity: 0,
              filter: 'blur(8px)'
            }}
            animate={{
              scale: 1,
              rotateY: 0,
              rotateX: 0,
              x: 0,
              y: 0,
              opacity: 1,
              filter: 'blur(0px)'
            }}
            exit={{
              scale: 0.8,
              rotateY: 15,
              rotateX: -8,
              x: '120vw',
              y: '100vh',
              opacity: 0,
              filter: 'blur(8px)'
            }}
            transition={{
              duration: 0.8,
              delay: 0.6,
              ease: [0.22, 1, 0.36, 1],
              type: 'spring',
              stiffness: 80,
              damping: 15
            }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            style={{
              perspective: '1000px',
              transformStyle: 'preserve-3d'
            }}
          >
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/95 backdrop-blur-xl"
              onClick={onClose}
            />

            {/* Contact form container */}
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              transition={{
                type: 'spring',
                stiffness: 100,
                damping: 15,
                delay: 0.8
              }}
              className="relative w-full max-w-2xl bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl shadow-2xl overflow-hidden"
              style={{
                boxShadow: '0 0 60px rgba(201, 166, 107, 0.3), 0 40px 100px rgba(0, 0, 0, 0.8)'
              }}
            >
              {/* Decorative particles */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-accent-metal/20 to-transparent rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-accent-metal/20 to-transparent rounded-full blur-3xl" />

              {/* Close button */}
              <button
                onClick={onClose}
                className="absolute top-6 right-6 z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              >
                <X className="w-6 h-6" style={{ color: theme.colors.text.primary }} />
              </button>

              {/* Form content */}
              <div className="relative z-10 p-12">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1, duration: 0.6 }}
                >
                  <h2 className="text-4xl font-serif font-bold mb-3" style={{ color: theme.colors.text.primary }}>
                    Let's Talk
                  </h2>
                  <p className="text-lg font-light mb-8" style={{ color: theme.colors.text.secondary }}>
                    Text, call, or fill this out. We'll respond within 24 hours.
                  </p>

                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1.1, duration: 0.4 }}
                      >
                        <label className="block text-sm font-medium mb-2" style={{ color: theme.colors.text.secondary }}>
                          Name
                        </label>
                        <input
                          type="text"
                          className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-accent-metal focus:outline-none transition-colors"
                          style={{ color: theme.colors.text.primary }}
                          placeholder="Your name"
                        />
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1.2, duration: 0.4 }}
                      >
                        <label className="block text-sm font-medium mb-2" style={{ color: theme.colors.text.secondary }}>
                          Email
                        </label>
                        <input
                          type="email"
                          className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-accent-metal focus:outline-none transition-colors"
                          style={{ color: theme.colors.text.primary }}
                          placeholder="your@email.com"
                        />
                      </motion.div>
                    </div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.3, duration: 0.4 }}
                    >
                      <label className="block text-sm font-medium mb-2" style={{ color: theme.colors.text.secondary }}>
                        Company
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-accent-metal focus:outline-none transition-colors"
                        style={{ color: theme.colors.text.primary }}
                        placeholder="Your company"
                      />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.4, duration: 0.4 }}
                    >
                      <label className="block text-sm font-medium mb-2" style={{ color: theme.colors.text.secondary }}>
                        Message
                      </label>
                      <textarea
                        rows={5}
                        className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-accent-metal focus:outline-none transition-colors resize-none"
                        style={{ color: theme.colors.text.primary }}
                        placeholder="Tell us about your project..."
                      />
                    </motion.div>

                    <motion.button
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.5, duration: 0.4 }}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      className="w-full py-4 rounded-lg bg-gradient-to-r from-accent-metal to-yellow-600 font-bold text-lg text-gray-900 hover:shadow-2xl hover:shadow-accent-metal/50 transition-all duration-300"
                    >
                      Send Message
                    </motion.button>
                  </form>

                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.6, duration: 0.6 }}
                    className="text-center mt-6 text-sm font-light"
                    style={{ color: theme.colors.text.secondary }}
                  >
                    Or text us directly: <span className="text-accent-metal font-medium">+1 (555) 123-4567</span>
                  </motion.p>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
