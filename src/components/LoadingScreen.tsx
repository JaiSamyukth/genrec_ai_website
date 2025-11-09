'use client'

import { motion } from 'framer-motion'

export function LoadingScreen() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
      <div className="text-center">
        {/* Animated Logo/Text */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
            <span className="text-black">Genrec</span>{' '}
            <span className="text-accent-metal">AI</span>
          </h1>
        </motion.div>

        {/* Loading Spinner */}
        <div className="flex justify-center mt-8">
          <motion.div
            className="w-16 h-16 border-4 border-gray-200 border-t-accent-metal rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          />
        </div>

        {/* Loading Text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-6 text-gray-600 text-sm"
        >
          Loading...
        </motion.p>
      </div>
    </div>
  )
}
