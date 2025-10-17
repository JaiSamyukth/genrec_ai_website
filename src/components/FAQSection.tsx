'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'
import { useState } from 'react'

const faqs = [
  {
    question: "What makes Genrec AI premium?",
    answer: "We're founder-led, available 24/7, and we custom-build everything from scratch. No templates, no outsourcing, no shortcuts. Just obsessive excellence. You work directly with Samyukth & Shyamnath—the people who actually care about your success."
  },
  {
    question: "Do you really answer calls at 3 AM?",
    answer: "Yes. We love what we do. Your success is our success. We're not a department—we're founders who are genuinely invested. Text, call, email anytime. We answer."
  },
  {
    question: "Why should we pay premium pricing?",
    answer: "Because you're getting premium quality. Founders building your product personally. 24/7 availability—not a ticket system. Bespoke solutions tailored to your unique needs. Lifelong support and partnership. That's not a service—it's a relationship."
  },
  {
    question: "How do you stay creative with every project?",
    answer: "We don't follow templates or trends. Every project is a blank canvas. We solve problems through innovation, not imitation. Your challenges are unique—your solutions should be too."
  },
  {
    question: "What if we need changes after launch?",
    answer: "We're here. Forever. Your product evolves; so do we. Call us anytime—we'll hop on a call immediately. Ongoing optimization is included. This is a partnership, not a transaction."
  },
  {
    question: "How many clients do you take on?",
    answer: "We limit ourselves to 3 new clients per quarter. Quality over quantity, always. This ensures we give each client our obsessive attention to detail and remain available 24/7."
  },
  {
    question: "What's your development process like?",
    answer: "Deep discovery sessions to understand your vision. Bespoke design with no templates. Obsessive execution where we test and polish every detail. Then lifelong partnership—we don't hand off and disappear."
  },
  {
    question: "Can you integrate with our existing systems?",
    answer: "Absolutely. We're engineers first. We can work with any tech stack, any infrastructure, any complexity. And we'll make it seamless. That's what custom-built means."
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
            className="inline-block px-5 py-2 bg-gradient-to-r from-green-500/10 to-emerald-500/10 text-green-600 rounded-full text-sm font-semibold uppercase tracking-wider mb-4"
          >
            QUESTIONS & ANSWERS
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
            Everything You Need to Know
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
            Honest answers about our premium, founder-led approach
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
          <p className="text-gray-600 mb-6 font-light">
            Have more questions? Reach out directly to the founders.
          </p>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-accent-metal to-yellow-500 text-white font-semibold rounded-xl hover:shadow-xl transition-all duration-300 transform"
          >
            Request Private Consultation →
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
