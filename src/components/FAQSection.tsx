'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'
import { useState } from 'react'

const faqs = [
  {
    question: "How quickly can we see ROI from your AI solutions?",
    answer: "Most clients see measurable ROI within 4-8 weeks of implementation. Our rapid deployment approach and focus on high-impact use cases ensure you start seeing benefits quickly. We provide detailed metrics and dashboards to track improvements in efficiency, cost savings, and operational performance."
  },
  {
    question: "How do you ensure our data remains private and secure?",
    answer: "We follow a privacy-first architecture where your data never leaves your infrastructure unless explicitly authorized. All AI models can be deployed on-premise or in your private cloud. We're SOC 2 Type II compliant and follow enterprise-grade security practices including end-to-end encryption, audit logs, and role-based access control."
  },
  {
    question: "What industries do you specialize in?",
    answer: "We specialize in construction, hospitality, and education sectors. Our deep domain expertise in these industries allows us to deliver tailored solutions that address specific challenges. However, our platform is flexible enough to adapt to other industries with similar operational complexities."
  },
  {
    question: "Do we need technical expertise to use your solutions?",
    answer: "No technical expertise is required. Our solutions are designed with user-friendly interfaces that your existing staff can use immediately. We provide comprehensive training and ongoing support to ensure smooth adoption. Our team handles all technical aspects including setup, maintenance, and updates."
  },
  {
    question: "How do you handle integration with existing systems?",
    answer: "Our API-first architecture ensures seamless integration with your existing tech stack. We support all major platforms and can work with legacy systems through our flexible integration layer. Our engineering team manages the entire integration process with minimal disruption to your operations."
  },
  {
    question: "What kind of support do you provide?",
    answer: "We offer 24/7 enterprise support with dedicated account managers and technical specialists. This includes proactive monitoring, regular optimization reviews, continuous model improvements, and immediate assistance for any issues. We also provide quarterly business reviews to ensure alignment with your evolving needs."
  },
  {
    question: "Can your solutions scale with our growth?",
    answer: "Absolutely. Our cloud-native architecture is built to scale horizontally, handling everything from pilot programs to enterprise-wide deployments. Whether you're processing thousands or millions of data points, our infrastructure automatically scales to meet demand without performance degradation."
  },
  {
    question: "What makes you different from other AI consultancies?",
    answer: "Three key differentiators: 1) Engineering excellence - we're engineers first, building robust, production-ready systems. 2) Industry expertise - we deeply understand your sector's unique challenges. 3) Privacy-first approach - your data sovereignty is non-negotiable. We don't just consult; we build, deploy, and ensure success."
  }
]

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="relative py-24 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full filter blur-3xl opacity-10" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-100 rounded-full filter blur-3xl opacity-10" />
      </div>

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span 
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-semibold mb-4"
          >
            FAQ
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to know about our AI solutions and services
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <div 
                  className={`bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden border ${
                    openIndex === index ? 'border-blue-200' : 'border-gray-100'
                  }`}
                >
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                  >
                    <h3 className="text-lg font-semibold text-gray-900 pr-4">
                      {faq.question}
                    </h3>
                    <motion.div
                      animate={{ rotate: openIndex === index ? 45 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="flex-shrink-0"
                    >
                      {openIndex === index ? (
                        <Minus className="w-5 h-5 text-blue-600" />
                      ) : (
                        <Plus className="w-5 h-5 text-gray-400" />
                      )}
                    </motion.div>
                  </button>
                  
                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        <div className="px-6 pb-5 pt-0">
                          <p className="text-gray-600 leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 mb-4">
            Still have questions? We're here to help.
          </p>
          <button className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-105">
            Contact Our Team
          </button>
        </motion.div>
      </div>
    </section>
  )
}
