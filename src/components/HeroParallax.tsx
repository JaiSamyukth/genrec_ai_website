'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import Link from 'next/link'
import { ChevronDown } from 'lucide-react'
import { useState, useEffect } from 'react'

const carouselImages = [
  'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2070',
  'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=2070',
  'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=2070',
  'https://images.unsplash.com/photo-1504639725590-34d0984388bd?auto=format&fit=crop&q=80&w=2070',
]

export function HeroParallax() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isMounted, setIsMounted] = useState(false)
  const { scrollY } = useScroll()
  
  // Parallax effects
  const backgroundY = useTransform(scrollY, [0, 500], [0, 200])
  const backgroundOpacity = useTransform(scrollY, [0, 300], [1, 0])
  const contentOpacity = useTransform(scrollY, [0, 200], [1, 0])

  useEffect(() => {
    setIsMounted(true)
  }, [])

  // Carousel rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % carouselImages.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  if (!isMounted) {
    return (
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-white">
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif mb-6">
            <span className="block font-light text-gray-900">Built by precision.</span>
            <span className="block font-normal text-gray-900">Driven by purpose.</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            We build intelligent systems that work where others fail —<br className="hidden sm:block" />
            software designed for performance, not pretense.
          </p>
        </div>
      </section>
    )
  }

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-white">
      {/* Animated Carousel Background */}
      <motion.div 
        className="absolute inset-0 z-0"
        style={{ y: backgroundY }}
      >
        {carouselImages.map((image, index) => (
          <motion.div
            key={image}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: currentImageIndex === index ? 0.08 : 0,
            }}
            transition={{ duration: 1.5 }}
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              filter: 'grayscale(100%) blur(1px)',
            }}
          />
        ))}
        
        {/* Gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-white/60 to-white" />
      </motion.div>

      {/* Main Content */}
      <motion.div 
        className="relative z-10 text-center px-4 max-w-5xl mx-auto"
        style={{ opacity: contentOpacity }}
      >
        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif mb-6"
        >
          <span className="block font-light text-gray-900">Built by precision.</span>
          <span className="block font-normal text-gray-900">Driven by purpose.</span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed"
        >
          We build intelligent systems that work where others fail —<br className="hidden sm:block" />
          software designed for performance, not pretense.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Link href="/products">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-8 py-4 rounded-lg font-medium text-sm uppercase tracking-wider overflow-hidden transition-colors"
              style={{
                background: 'linear-gradient(135deg, #C9A66B 0%, #B8955A 100%)',
                color: '#0b0f1a'
              }}
            >
              <span className="relative z-10">EXPLORE OUR WORK</span>
            </motion.button>
          </Link>
          
          <Link href="/products/lumina-iq">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border-2 rounded-lg font-medium text-sm uppercase tracking-wider transition-all"
              style={{
                borderColor: '#C9A66B',
                color: '#0b0f1a'
              }}
            >
              LEARN ABOUT LUMINAIQ
            </motion.button>
          </Link>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        style={{ opacity: backgroundOpacity }}
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="text-gray-400"
        >
          <ChevronDown className="w-8 h-8" />
        </motion.div>
      </motion.div>
    </section>
  )
}
