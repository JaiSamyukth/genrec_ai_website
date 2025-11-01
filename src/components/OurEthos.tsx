'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export function OurEthos() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section className="relative bg-white py-32 sm:py-40">
      {/* Background Lines */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-4xl px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1 }}
          className="text-center"
        >
          {/* Quote Marks */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
            className="mb-8"
          >
            <span className="text-8xl font-serif text-gray-200">"</span>
          </motion.div>

          {/* Main Quote */}
          <motion.blockquote
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.5 }}
            className="space-y-6"
          >
            <p className="text-3xl font-light leading-relaxed tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
              We don't chase trends.
              <br />
              <span className="font-normal">We build products that outlast them.</span>
            </p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.7 }}
              className="mx-auto mt-8 max-w-2xl text-lg text-gray-600 sm:text-xl"
            >
              Innovation here isn't a tagline — it's survival.
            </motion.p>
          </motion.blockquote>

          {/* Decorative Element */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={inView ? { opacity: 1, scaleX: 1 } : {}}
            transition={{ duration: 1, delay: 0.9 }}
            className="mx-auto mt-12 h-px w-24 bg-gray-900"
          />
        </motion.div>
      </div>
    </section>
  )
}
