'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import ParallaxCarousel from './ParallaxCarousel';
import ScrollIndicator from './ScrollIndicator';

export default function HeroWithCarousel() {
  return (
    <section className="relative overflow-hidden min-h-screen flex items-center bg-white">
      {/* Animated background gradient */}
      <motion.div
        animate={{
          background: [
            'radial-gradient(circle at 20% 50%, rgba(8, 28, 255, 0.03) 0%, transparent 50%)',
            'radial-gradient(circle at 80% 50%, rgba(8, 28, 255, 0.03) 0%, transparent 50%)',
            'radial-gradient(circle at 20% 50%, rgba(8, 28, 255, 0.03) 0%, transparent 50%)',
          ],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute inset-0 -z-10"
      />

      <div className="container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.18, delay: 0.12, ease: [0.2, 0.9, 0.3, 1] }}
              className="inline-block mb-6"
            >
              <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs uppercase tracking-wider font-medium bg-gray-100 text-gray-700 border border-gray-200">
                Privacy-First Engineering for Enterprise Dominance
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.42, delay: 0.24 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-balance"
            >
              We don't just build software, we create leverage for your business.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.24, delay: 0.36 }}
              className="text-lg md:text-xl text-gray-600 mb-8 max-w-prose"
            >
              Enterprise pilots in construction, hospitality, and education. Privacy-first AI that delivers measurable results.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.24, delay: 0.48 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link href="/contact" className="btn-primary text-center">
                Reserved for Select Clients
              </Link>
              <Link href="/products" className="btn-secondary text-center">
                Explore Premium Solutions
              </Link>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            <ParallaxCarousel />
          </motion.div>
        </div>
      </div>
      
      <ScrollIndicator />
    </section>
  );
}
