'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="text-center max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-6xl md:text-8xl font-serif font-bold text-gray-900 mb-4">
            Oops!
          </h1>
          
          <p className="text-2xl md:text-3xl text-gray-600 mb-8">
            Something went wrong
          </p>
          
          <p className="text-gray-500 mb-8">
            We encountered an unexpected error. Don't worry, we're on it.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={reset}
              className="px-8 py-4 bg-gradient-to-r from-accent-metal-dark to-accent-metal text-white rounded-lg font-semibold hover:shadow-xl transition-all"
            >
              Try Again
            </motion.button>
            
            <Link href="/">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-gray-900 text-gray-900 rounded-lg font-semibold hover:bg-gray-900 hover:text-white transition-all"
              >
                Go Home
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
