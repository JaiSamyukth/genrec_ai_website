'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ArrowRight, CheckCircle } from 'lucide-react'

export function CTASection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary-bg mb-6">
            Ready to Transform Your Operations?
          </h2>
          
          <p className="text-xl text-muted mb-8">
            Join select enterprises already using Genrec AI.
            Start with a pilot, scale when you're ready.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
            <div className="flex items-center justify-center space-x-2">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <span className="text-sm text-gray-700">20-minute demo</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <span className="text-sm text-gray-700">4-6 week pilot</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <span className="text-sm text-gray-700">Scale at your pace</span>
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 mb-8">
            <h3 className="text-2xl font-serif font-bold text-primary-bg mb-4">
              Your Journey with Genrec AI
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <span className="flex-shrink-0 w-8 h-8 bg-accent-metal text-white rounded-full flex items-center justify-center font-bold">
                    1
                  </span>
                  <h4 className="font-semibold text-primary-bg">Schedule Demo</h4>
                </div>
                <p className="text-sm text-muted pl-10">
                  20-minute call to understand your needs and show relevant solutions.
                </p>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <span className="flex-shrink-0 w-8 h-8 bg-accent-metal text-white rounded-full flex items-center justify-center font-bold">
                    2
                  </span>
                  <h4 className="font-semibold text-primary-bg">Run Pilot</h4>
                </div>
                <p className="text-sm text-muted pl-10">
                  4-6 week implementation with your actual data and workflows.
                </p>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <span className="flex-shrink-0 w-8 h-8 bg-accent-metal text-white rounded-full flex items-center justify-center font-bold">
                    3
                  </span>
                  <h4 className="font-semibold text-primary-bg">Scale</h4>
                </div>
                <p className="text-sm text-muted pl-10">
                  Deploy across your organization with full support and training.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-accent-metal hover:bg-accent-metal/90 text-white px-8 py-6 text-lg"
              >
                Request your demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/products">
              <Button
                size="lg"
                variant="outline"
                className="px-8 py-6 text-lg"
              >
                Explore products first
              </Button>
            </Link>
          </div>

          <p className="text-sm text-muted">
            Limited demo slots for pilot partnerships. No spam. We reply in 48 hours.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
