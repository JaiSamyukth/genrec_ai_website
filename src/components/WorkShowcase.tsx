'use client'

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { useState, useRef, MouseEvent } from 'react'
import Image from 'next/image'

const showcaseImages = [
  {
    id: 1,
    url: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=90',
    alt: 'Enterprise CRM Dashboard',
    title: 'Enterprise CRM'
  },
  {
    id: 2,
    url: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&q=90',
    alt: 'Automation Dashboard Interface',
    title: 'Automation Dashboard'
  },
  {
    id: 3,
    url: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=1200&q=90',
    alt: 'Feedback System Platform',
    title: 'Feedback System'
  },
  {
    id: 4,
    url: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&q=90',
    alt: 'Intelligent Web Application',
    title: 'Web Application'
  },
  {
    id: 5,
    url: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&q=90',
    alt: 'LuminaIQ AI Platform',
    title: 'LuminaIQ Platform'
  }
]

export function WorkShowcase() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  
  // Mouse position tracking
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  
  // Spring physics for smooth cursor following
  const springConfig = { damping: 25, stiffness: 150 }
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [8, -8]), springConfig)
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-8, 8]), springConfig)
  
  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return
    
    const rect = containerRef.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    
    // Normalize mouse position relative to center (-0.5 to 0.5)
    const x = (e.clientX - centerX) / rect.width
    const y = (e.clientY - centerY) / rect.height
    
    mouseX.set(x)
    mouseY.set(y)
  }
  
  const handleMouseLeave = () => {
    mouseX.set(0)
    mouseY.set(0)
  }

  return (
    <section className="relative w-full bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      {/* No padding - full screen utilization */}
      <div className="relative w-full py-32">
        {/* Section Header */}
        <div className="px-6 lg:px-12 mb-16 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-sm uppercase tracking-wider text-gray-500 mb-4"
          >
            Portfolio
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl font-light text-gray-900"
          >
            Our Work <span className="font-bold">Speaks in Results</span>
          </motion.h2>
        </div>

        {/* Interactive Carousel Container */}
        <div 
          ref={containerRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="relative w-full flex items-center justify-center px-6 lg:px-12 gap-8"
          style={{ perspective: '1000px' }}
        >
          {/* Main Image Display with 3D Rotation */}
          <motion.div
            style={{
              rotateX,
              rotateY,
              transformStyle: 'preserve-3d'
            }}
            className="relative w-full max-w-4xl h-[600px]"
          >
            <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl">
              {/* Image Carousel */}
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5 }}
                className="relative w-full h-full"
              >
                <Image
                  src={showcaseImages[currentIndex].url}
                  alt={showcaseImages[currentIndex].alt}
                  fill
                  className="object-cover"
                  priority={currentIndex === 0}
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                {/* Image Title */}
                <div className="absolute bottom-8 left-8 z-10">
                  <motion.h3
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-3xl md:text-5xl font-bold text-white"
                  >
                    {showcaseImages[currentIndex].title}
                  </motion.h3>
                </div>
                
                {/* Counter Badge */}
                <div className="absolute bottom-8 right-8 z-10">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.3 }}
                    className="bg-white/90 backdrop-blur-md rounded-2xl px-6 py-3 shadow-xl"
                  >
                    <span className="text-2xl md:text-4xl font-bold text-gray-900">
                      {currentIndex + 1}/{showcaseImages.length}
                    </span>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Side Vertical Controls */}
          <div className="hidden lg:flex flex-col items-center gap-6">
            {/* Navigation Arrows - Vertical */}
            <button
              onClick={() => setCurrentIndex((prev) => (prev === 0 ? showcaseImages.length - 1 : prev - 1))}
              className="bg-white/90 hover:bg-white backdrop-blur-md rounded-full p-4 shadow-xl transition-all hover:scale-110"
              aria-label="Previous image"
            >
              <svg className="w-6 h-6 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
              </svg>
            </button>

            {/* Thumbnail Navigation - Vertical */}
            <div className="flex flex-col gap-3">
              {showcaseImages.map((image, index) => (
                <motion.button
                  key={image.id}
                  onClick={() => setCurrentIndex(index)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`relative w-20 h-20 rounded-xl overflow-hidden transition-all ${
                    index === currentIndex
                      ? 'ring-4 ring-gray-900 shadow-xl'
                      : 'ring-2 ring-gray-200 opacity-60 hover:opacity-100'
                  }`}
                >
                  <Image
                    src={image.url}
                    alt={image.alt}
                    fill
                    className="object-cover"
                  />
                  {index === currentIndex && (
                    <div className="absolute inset-0 bg-gray-900/10" />
                  )}
                </motion.button>
              ))}
            </div>

            <button
              onClick={() => setCurrentIndex((prev) => (prev === showcaseImages.length - 1 ? 0 : prev + 1))}
              className="bg-white/90 hover:bg-white backdrop-blur-md rounded-full p-4 shadow-xl transition-all hover:scale-110"
              aria-label="Next image"
            >
              <svg className="w-6 h-6 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Progress Indicators */}
        <div className="mt-8 flex lg:hidden justify-center gap-2">
          {showcaseImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-1 rounded-full transition-all ${
                index === currentIndex ? 'w-12 bg-gray-900' : 'w-6 bg-gray-300'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
