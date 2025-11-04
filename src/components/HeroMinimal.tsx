'use client'

import { MotionContainer } from '@/components/animations/MotionContainer'
import { variants } from '@/lib/animations'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

/**
 * Hero section following exact spec requirements:
 * - Clean white minimal aesthetic
 * - Exact animation timings and easing
 * - Accessibility-first
 * - Performance-optimized
 */
export function HeroMinimal() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-white overflow-hidden">
      {/* Skip link for accessibility */}
      <a 
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-accent-blue focus:text-white focus:rounded-lg focus:outline-none focus:ring-4 focus:ring-accent-blue focus:ring-offset-4"
      >
        Skip to content
      </a>

      {/* Subtle decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute top-20 right-20 w-96 h-96 bg-accent-blue/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-accent-blue/5 rounded-full blur-3xl" />
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-32">
        <div className="text-center max-w-5xl mx-auto">
          {/* Badge - exact spec animation */}
          <MotionContainer
            as="span"
            className="inline-block px-5 py-2 bg-accent-blue/10 text-accent-blue rounded-full text-xs font-semibold uppercase tracking-widest mb-8"
            initial={variants.badge.initial}
            animate={variants.badge.animate}
          >
            Genrec AI — Privacy-First Engineering for Enterprise Dominance
          </MotionContainer>

          {/* H1 with clip-path reveal - exact spec */}
          <MotionContainer
            as="h1"
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-light-text leading-tight"
            initial={variants.h1.initial}
            animate={variants.h1.animate}
          >
            We don't just build software,
            <span className="block mt-2">
              we create <span className="text-accent-blue">leverage</span> for your business.
            </span>
          </MotionContainer>

          {/* Subheading - exact spec animation */}
          <MotionContainer
            as="p"
            className="text-lg md:text-xl text-secondary-text mb-12 max-w-3xl mx-auto leading-relaxed"
            initial={variants.subheading.initial}
            animate={variants.subheading.animate}
            style={{ maxWidth: '65ch' }}
          >
            From custom CRMs to AI learning platforms, we create tools that adapt, evolve, and scale. 
            No templates. No shortcuts. Just code that works flawlessly.
          </MotionContainer>

          {/* CTAs with exact hover animations */}
          <MotionContainer
            className="flex flex-col sm:flex-row gap-6 justify-center mb-14"
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.24, delay: 0.4, ease: [0.2, 0.9, 0.3, 1] }}
          >
            <Link href="/contact">
              <MotionContainer
                as="button"
                className="px-10 py-5 text-lg font-semibold rounded-xl bg-accent-blue text-white shadow-lg hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-accent-blue focus:ring-offset-4 transition-shadow"
                variants={variants.cta}
                whileHover="hover"
                whileTap="tap"
                aria-label="Request private consultation"
              >
                <span className="flex items-center justify-center gap-3">
                  Reserved for Select Clients
                  <ArrowRight className="w-5 h-5" aria-hidden="true" />
                </span>
              </MotionContainer>
            </Link>

            <Link href="/products">
              <MotionContainer
                as="button"
                className="px-10 py-5 text-lg font-semibold rounded-xl border-2 border-accent-blue text-accent-blue bg-transparent hover:bg-accent-blue/5 focus:outline-none focus:ring-4 focus:ring-accent-blue focus:ring-offset-4 transition-colors"
                variants={variants.cta}
                whileHover={{ scale: 1.02, borderColor: '#0618E0' }}
                whileTap="tap"
                aria-label="Explore premium solutions"
              >
                Explore Premium Solutions
              </MotionContainer>
            </Link>
          </MotionContainer>

          {/* Trust indicator - subtle */}
          <MotionContainer
            as="p"
            className="text-sm text-secondary-text/80 uppercase tracking-widest font-light"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Privacy-first engineering • Available 24/7 • Select enterprise pilots
          </MotionContainer>
        </div>
      </div>
    </section>
  )
}
