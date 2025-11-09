'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export function GlobalLoader() {
  const [isLoading, setIsLoading] = useState(true)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          setTimeout(() => setIsLoading(false), 300)
          return 100
        }
        return prev + 10
      })
    }, 100)

    return () => clearInterval(interval)
  }, [])

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-white"
        >
          <div className="text-center">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-5xl md:text-6xl font-serif font-bold mb-8">
                <span className="text-black">Genrec</span>{' '}
                <span className="text-accent-metal">AI</span>
              </h1>
            </motion.div>

            {/* Progress Bar */}
            <div className="w-64 h-2 bg-gray-200 rounded-full overflow-hidden mx-auto">
              <motion.div
                className="h-full bg-gradient-to-r from-accent-metal-dark via-accent-metal to-accent-metal-light"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.2 }}
              />
            </div>

            {/* Loading Text */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="mt-6 text-gray-600 text-sm font-medium"
            >
              {progress < 100 ? 'Loading...' : 'Ready!'}
            </motion.p>
          </div>

          {/* Decorative Elements */}
          <motion.div
            className="absolute top-1/4 right-1/4 w-32 h-32 bg-accent-metal/5 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{ duration: 3, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-1/4 left-1/4 w-32 h-32 bg-accent-metal/5 rounded-full blur-3xl"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.5, 0.3, 0.5],
            }}
            transition={{ duration: 3, repeat: Infinity }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  )
}
