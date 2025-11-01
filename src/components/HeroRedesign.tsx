'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { ChevronDown } from 'lucide-react'

const carouselImages = [
  'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&q=80',
  'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&q=80',
  'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200&q=80',
  'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200&q=80',
]

export function HeroRedesign() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [currentImage, setCurrentImage] = useState(0)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % carouselImages.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const scrollToWork = () => {
    const workSection = document.getElementById('our-work')
    workSection?.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToLumina = () => {
    const luminaSection = document.getElementById('lumina-iq')
    luminaSection?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div ref={containerRef} className="relative h-screen overflow-hidden bg-white">
      {/* Parallax Background Carousel */}
      <motion.div 
        style={{ y }}
        className="absolute inset-0 -z-10"
      >
        {carouselImages.map((img, idx) => (
          <motion.div
            key={img}
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: idx === currentImage ? 0.08 : 0 
            }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0"
            style={{
              backgroundImage: `url(${img})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              filter: 'grayscale(100%) blur(1px)',
            }}
          />
        ))}
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-white/60 to-white" />
      </motion.div>

      {/* Content */}
      <motion.div 
        style={{ opacity }}
        className="relative flex h-full flex-col items-center justify-center px-6 text-center"
      >
        {/* Main Tagline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mb-8 text-5xl font-light tracking-tight text-gray-900 sm:text-6xl md:text-7xl lg:text-8xl"
        >
          Built by precision.
          <br />
          <span className="font-normal">Driven by purpose.</span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mb-12 max-w-2xl text-lg text-gray-600 sm:text-xl md:text-2xl font-light"
        >
          We build intelligent systems that work where others fail — software designed for performance, not pretense.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="flex flex-col gap-4 sm:flex-row sm:gap-6"
        >
          <button
            onClick={scrollToWork}
            className="group relative overflow-hidden bg-black px-8 py-4 text-white transition-all duration-300 hover:bg-gray-900"
          >
            <span className="relative z-10 text-sm font-medium tracking-wider">
              EXPLORE OUR WORK
            </span>
            <div className="absolute inset-0 -translate-x-full bg-gray-800 transition-transform duration-300 group-hover:translate-x-0" />
          </button>

          <button
            onClick={scrollToLumina}
            className="group border border-gray-900 bg-transparent px-8 py-4 text-gray-900 transition-all duration-300 hover:bg-gray-900 hover:text-white"
          >
            <span className="text-sm font-medium tracking-wider">
              LEARN ABOUT LUMINAIQ
            </span>
          </button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ChevronDown className="h-8 w-8 text-gray-400" />
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  )
}
