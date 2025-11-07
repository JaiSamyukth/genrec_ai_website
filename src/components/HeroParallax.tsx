'use client'

import { motion, useScroll, useTransform, MotionValue } from 'framer-motion'
import Link from 'next/link'
import { ChevronDown } from 'lucide-react'
import { useState, useEffect } from 'react'

const carouselImages = [
  'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2070',
  'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=2070',
  'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=2070',
  'https://images.unsplash.com/photo-1504639725590-34d0984388bd?auto=format&fit=crop&q=80&w=2070',
  'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=2070',
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
      <section className="relative h-screen overflow-hidden bg-primary-bg">
        <div className="h-full max-w-7xl mx-auto px-6 lg:px-8 flex items-center">
          <div className="relative z-10 text-left max-w-3xl">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif mb-6">
              <span className="block font-light bg-gradient-to-r from-accent-gold to-accent-gold-hover bg-clip-text text-transparent">Built by precision.</span>
              <span className="block font-normal text-light-text">Driven by purpose.</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-secondary-text mb-12 leading-relaxed">
              We build intelligent systems that work where others fail —<br className="hidden sm:block" />
              software designed for performance, not pretense.
            </p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="relative h-screen overflow-hidden bg-primary-bg">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-bg via-secondary-bg to-primary-bg" />
      
      {/* Main Container */}
      <div className="relative h-full max-w-7xl mx-auto px-6 lg:px-8">
        <div className="h-full grid lg:grid-cols-2 gap-8 items-center">
          
          {/* Left Content */}
          <motion.div 
            className="relative z-10 text-left"
            style={{ opacity: contentOpacity }}
          >
            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-serif mb-6"
            >
              <span className="block font-light bg-gradient-to-r from-accent-gold via-accent-gold-hover to-accent-gold bg-clip-text text-transparent animate-gradient-x">Built by precision.</span>
              <span className="block font-normal text-light-text">Driven by purpose.</span>
            </motion.h1>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg sm:text-xl lg:text-2xl text-secondary-text mb-12 leading-relaxed"
            >
              We build intelligent systems that work where others fail — software designed for performance, not pretense.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link href="/products">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative px-8 py-4 bg-gradient-to-r from-accent-gold to-accent-gold-hover text-white rounded-lg font-semibold text-sm uppercase tracking-wider overflow-hidden shadow-lg shadow-accent-gold/30 transition-all"
                >
                  <span className="relative z-10">EXPLORE OUR WORK</span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-accent-gold-hover to-accent-gold-dark"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.button>
              </Link>
              
              <Link href="/products/lumina-iq">
                <motion.button
                  whileHover={{ scale: 1.05, borderColor: '#D4B478', color: '#D4B478' }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border-2 border-accent-gold text-accent-gold rounded-lg font-semibold text-sm uppercase tracking-wider transition-all hover:bg-accent-gold/10"
                >
                  LEARN ABOUT LUMINAIQ
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Side - Vertical Carousel */}
          <motion.div 
            className="hidden lg:flex flex-col gap-4 h-full py-20 justify-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {carouselImages.map((image, index) => (
              <motion.div
                key={image}
                className="relative overflow-hidden rounded-lg border-2 transition-all duration-500 cursor-pointer"
                style={{
                  height: currentImageIndex === index ? '35%' : '13%',
                  borderColor: currentImageIndex === index ? '#C9A66B' : 'transparent',
                }}
                whileHover={{ scale: 1.02 }}
                onClick={() => setCurrentImageIndex(index)}
              >
                <motion.div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${image})`,
                    filter: currentImageIndex === index ? 'grayscale(0%)' : 'grayscale(80%)',
                  }}
                  animate={{
                    scale: currentImageIndex === index ? 1 : 1.1,
                  }}
                  transition={{ duration: 0.5 }}
                />
                {currentImageIndex !== index && (
                  <div className="absolute inset-0 bg-primary-bg/40" />
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

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
          className="text-accent-gold/60"
        >
          <ChevronDown className="w-8 h-8" />
        </motion.div>
      </motion.div>
    </section>
  )
}
