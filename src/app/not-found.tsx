'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Home, Search, AlertTriangle } from 'lucide-react'
import { theme, gradients } from '@/lib/theme'

export default function NotFound() {
  return (
    <main 
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{ backgroundColor: theme.colors.background.primary }}
    >
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-96 h-96 bg-[#C9A66B] rounded-full filter blur-3xl opacity-5" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#C9A66B] rounded-full filter blur-3xl opacity-5" />
      </div>

      {/* Animated 404 background */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.03 }}
        transition={{ duration: 1 }}
      >
        <span 
          className="text-[30rem] font-bold select-none"
          style={{ color: theme.colors.accent.gold }}
        >
          404
        </span>
      </motion.div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-2xl">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <AlertTriangle 
            className="w-20 h-20 mx-auto mb-8" 
            style={{ color: theme.colors.accent.gold }}
          />
        </motion.div>

        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-6xl md:text-7xl font-serif font-bold mb-6"
          style={{ color: theme.colors.text.primary }}
        >
          Page Not Found
        </motion.h1>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl mb-12"
          style={{ color: theme.colors.text.secondary }}
        >
          Looks like you've ventured into uncharted territory. 
          The page you're looking for doesn't exist, but don't worry—we'll 
          help you find your way back.
        </motion.p>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link href="/">
            <button 
              className="px-8 py-4 rounded-lg font-semibold transition-all hover:scale-105 hover:shadow-xl flex items-center justify-center gap-2"
              style={{ 
                background: gradients.button,
                color: theme.colors.text.primary 
              }}
            >
              <Home className="w-5 h-5" />
              Back to Home
            </button>
          </Link>
          
          <Link href="/products">
            <button 
              className="px-8 py-4 rounded-lg font-semibold border-2 transition-all hover:scale-105 flex items-center justify-center gap-2"
              style={{ 
                borderColor: theme.colors.accent.gold,
                color: theme.colors.text.primary,
                backgroundColor: 'transparent'
              }}
            >
              <Search className="w-5 h-5" />
              Explore Products
            </button>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16"
        >
          <p className="text-sm mb-4" style={{ color: theme.colors.text.secondary }}>
            Or try one of these popular pages:
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { href: '/blog', label: 'Blog' },
              { href: '/about', label: 'About Us' },
              { href: '/contact', label: 'Contact' },
              { href: '/products/tabble', label: 'Tabble' },
              { href: '/products/lumina-iq', label: 'Lumina IQ' },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="hover:underline transition-colors"
                style={{ color: theme.colors.accent.gold }}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </main>
  )
}
