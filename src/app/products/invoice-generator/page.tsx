'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  FileText, 
  Download, 
  Globe, 
  Palette, 
  Database, 
  Zap,
  Edit,
  Send,
  CheckCircle
} from 'lucide-react'
import Link from 'next/link'

const features = [
  {
    icon: Palette,
    title: 'Professional Templates',
    description: 'Beautiful, customizable invoice templates that match your brand identity.',
  },
  {
    icon: Globe,
    title: 'Multi-Currency Support',
    description: 'Invoice clients worldwide with automatic currency conversion and formatting.',
  },
  {
    icon: Download,
    title: 'Instant PDF Export',
    description: 'Generate print-ready PDFs with one click, optimized for email and printing.',
  },
  {
    icon: Database,
    title: 'Client Database',
    description: 'Save client details and frequently used items for faster invoice creation.',
  },
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Create professional invoices in under 2 minutes with our streamlined interface.',
  },
  {
    icon: FileText,
    title: 'Invoice Management',
    description: 'Track all invoices, payment status, and client history in one dashboard.',
  },
]

const processSteps = [
  {
    icon: Edit,
    number: '01',
    title: 'Create',
    description: 'Select a template, add your business details, and input client information. Add line items, quantities, and pricing.',
  },
  {
    icon: Send,
    number: '02',
    title: 'Customize',
    description: 'Choose currency, add taxes, apply discounts, include payment terms, and add personalized notes or terms and conditions.',
  },
  {
    icon: CheckCircle,
    number: '03',
    title: 'Deliver',
    description: 'Generate PDF instantly, download or send via email directly. Track invoice status and receive payment confirmation.',
  },
]

export default function InvoiceGeneratorPage() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [processRef, processInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gray-50 py-24 sm:py-32">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_110%)]" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="mx-auto max-w-3xl text-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-6 inline-block"
            >
              <span className="inline-block border border-gray-900 bg-white px-4 py-2 text-sm font-medium tracking-wider text-gray-900">
                LIGHTWEIGHT INVOICE AUTOMATION
              </span>
            </motion.div>

            <h1 className="mb-6 text-4xl font-light tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
              Invoice Generator
            </h1>
            
            <p className="mb-8 text-xl font-light leading-relaxed text-gray-600 sm:text-2xl">
              Professional invoices in under 2 minutes.
            </p>

            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-gray-600">
              Simple, fast, and beautiful invoice generation. Choose from professional templates, 
              support multiple currencies, and export to PDF instantly. No complexity, no subscriptions—just invoices.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mx-auto grid max-w-6xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                className="group relative bg-gray-50 p-8 transition-all duration-300 hover:bg-white hover:shadow-lg"
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center border border-gray-200 transition-colors duration-300 group-hover:border-gray-900">
                  <feature.icon className="h-6 w-6 text-gray-900" />
                </div>

                <h3 className="mb-2 text-lg font-medium text-gray-900">
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed text-gray-600">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Product Preview */}
      <section className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1.2, delay: 0.8 }}
          >
            <div className="mx-auto aspect-video max-w-4xl border border-gray-200 bg-gradient-to-br from-gray-100 to-white p-8">
              <div className="flex h-full items-center justify-center">
                <p className="text-center text-sm font-medium tracking-wider text-gray-400">
                  [ PRODUCT INTERFACE PREVIEW ]
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3-Step Process */}
      <section className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            ref={processRef}
            initial={{ opacity: 0, y: 30 }}
            animate={processInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="mb-6 text-4xl font-light tracking-tight text-gray-900 sm:text-5xl">
              How It <span className="font-bold">Works</span>
            </h2>
            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-gray-600">
              Simple. Transparent. Obsessively executed.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                animate={processInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.2 }}
                className="relative bg-white p-8 border border-gray-200 group hover:border-gray-900 transition-all duration-300 hover:shadow-xl"
              >
                <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-gray-900 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className="mb-6">
                  <span className="text-4xl font-bold text-gray-900">{step.number}</span>
                </div>

                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center border border-gray-200 group-hover:border-gray-900 transition-colors">
                  <step.icon className="h-6 w-6 text-gray-900" />
                </div>

                <h3 className="mb-3 text-2xl font-bold text-gray-900">
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed text-gray-600">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-900 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1 }}
            className="text-center"
          >
            <h2 className="mb-6 text-3xl font-light tracking-tight text-white sm:text-4xl">
              Ready to Create Professional Invoices?
            </h2>
            <p className="mb-8 text-lg text-gray-400">
              Start generating beautiful invoices in under 2 minutes. No learning curve.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
              <Link
                href="/contact"
                className="group relative overflow-hidden border border-white bg-white px-8 py-4 text-gray-900 transition-all duration-300 hover:bg-gray-100"
              >
                <span className="relative z-10 text-sm font-medium tracking-wider">
                  TRY IT FREE
                </span>
              </Link>

              <button className="group border border-white bg-transparent px-8 py-4 text-white transition-all duration-300 hover:bg-white hover:text-gray-900">
                <span className="text-sm font-medium tracking-wider">
                  VIEW DEMO
                </span>
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
