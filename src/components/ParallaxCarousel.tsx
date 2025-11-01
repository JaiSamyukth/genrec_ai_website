'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

const carouselImages = [
  {
    url: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&q=80',
    title: 'AI-Powered Intelligence',
    subtitle: 'Privacy-first enterprise solutions'
  },
  {
    url: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=1200&q=80',
    title: 'Construction Excellence',
    subtitle: 'Project tracking with photo-based insights'
  },
  {
    url: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1200&q=80',
    title: 'Hospitality Innovation',
    subtitle: 'Luxury dining experiences reimagined'
  },
  {
    url: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=1200&q=80',
    title: 'Education Transformed',
    subtitle: 'Adaptive learning for modern classrooms'
  },
  {
    url: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=1200&q=80',
    title: 'Enterprise Grade',
    subtitle: 'Built for scale and security'
  }
];

export default function ParallaxCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % carouselImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[600px] rounded-3xl overflow-hidden shadow-2xl border border-gray-200">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          className="absolute inset-0"
        >
          <img
            src={carouselImages[currentIndex].url}
            alt={carouselImages[currentIndex].title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
          
          {/* Overlay Text */}
          <div className="absolute bottom-20 left-8 right-8 text-white z-10">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-3xl font-bold mb-2"
            >
              {carouselImages[currentIndex].title}
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-lg text-white/90"
            >
              {carouselImages[currentIndex].subtitle}
            </motion.p>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
        {carouselImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? 'bg-white w-8'
                : 'bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
