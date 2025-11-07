'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export function OurEthos() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section className="relative bg-primary-bg py-32 sm:py-40 border-y border-accent-gold/10">
      <div className="relative mx-auto max-w-4xl px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1 }}
          className="text-center"
        >
          {/* Quote Marks with gold glow */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
            className="mb-8"
          >
            <span className="text-8xl font-serif text-accent-gold/20">"</span>
          </motion.div>

          {/* Main Quote with luxury styling */}
          <motion.blockquote
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.5 }}
            className="space-y-6"
          >
            <p className="text-3xl font-light leading-relaxed tracking-tight text-light-text sm:text-4xl lg:text-5xl">
              We don't chase trends.
              <br />
              <span className="font-normal bg-gradient-to-r from-accent-gold to-accent-gold-hover bg-clip-text text-transparent">We build products that outlast them.</span>
            </p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.7 }}
              className="mx-auto mt-8 max-w-2xl text-lg text-secondary-text sm:text-xl"
            >
              Innovation here isn't a tagline — it's <span className="text-accent-gold font-medium">survival</span>.
            </motion.p>
          </motion.blockquote>

          {/* Decorative Element with gold gradient */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={inView ? { opacity: 1, scaleX: 1 } : {}}
            transition={{ duration: 1, delay: 0.9 }}
            className="mx-auto mt-12 h-px w-24 bg-gradient-to-r from-transparent via-accent-gold to-transparent"
          />
        </motion.div>
      </div>
    </section>
  )
}
