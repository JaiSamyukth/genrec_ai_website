'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'
import { theme } from '@/lib/theme'

const defaultFAQs = [
  {
    question: "How does Genrec AI ensure data privacy?",
    answer: "We follow a privacy-first architecture where your data never leaves your infrastructure unless explicitly authorized. Our AI models can be deployed entirely on-premise, with zero cloud requirements and no third-party access. We're SOC 2 Type II compliant and exceed GDPR, CCPA, and HIPAA requirements."
  },
  {
    question: "What makes your AI different from competitors?",
    answer: "Three things: First, we're engineers who build production-ready systems, not consultants with PowerPoints. Second, we have deep domain expertise in construction, hospitality, and education—we speak your language. Third, our privacy-first approach means your data sovereignty is non-negotiable."
  },
  {
    question: "How quickly can we see ROI?",
    answer: "Most clients see measurable ROI within 4-8 weeks of implementation. Our rapid deployment approach focuses on high-impact use cases first. We provide detailed metrics and dashboards from day one, so you can track improvements in efficiency, cost savings, and operational performance."
  },
  {
    question: "Do we need technical expertise to use your solutions?",
    answer: "No technical expertise required. Our solutions are designed with intuitive interfaces that your existing staff can use immediately. We provide comprehensive training and 24/7 support. Our team handles all technical aspects including setup, maintenance, and updates."
  },
  {
    question: "Can your solutions scale with our growth?",
    answer: "Absolutely. Our cloud-native architecture scales horizontally to handle everything from pilot programs to enterprise-wide deployments. Whether you're processing thousands or millions of data points, our infrastructure automatically scales to meet demand without performance degradation."
  },
  {
    question: "What kind of support do you provide?",
    answer: "We offer 24/7 enterprise support with dedicated account managers and technical specialists. This includes proactive monitoring, regular optimization reviews, continuous model improvements, and immediate assistance for any issues. We also provide quarterly business reviews to ensure alignment with your evolving needs."
  },
  {
    question: "How do you handle integration with existing systems?",
    answer: "Our API-first architecture ensures seamless integration with your existing tech stack. We support all major platforms and can work with legacy systems through our flexible integration layer. Our engineering team manages the entire integration process with minimal disruption to your operations."
  },
  {
    question: "What about AI ethics and bias?",
    answer: "We take AI ethics seriously. Our models are regularly audited for bias, with transparent reporting on decision-making processes. We follow strict ethical guidelines, ensure human oversight capabilities, and provide full explainability for AI decisions. Privacy and fairness aren't afterthoughts—they're core design principles."
  }
]

interface FAQProps {
  faqs?: Array<{ question: string; answer: string }>
  title?: string
  subtitle?: string
}

export function FAQ({ 
  faqs = defaultFAQs, 
  title = "Frequently Asked Questions",
  subtitle = "Everything you need to know about our AI solutions"
}: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="py-20">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4" style={{ color: theme.colors.text.primary }}>
            {title}
          </h2>
          <p className="text-xl" style={{ color: theme.colors.text.secondary }}>
            {subtitle}
          </p>
        </motion.div>

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
                className="rounded-xl overflow-hidden border transition-all duration-300"
                style={{ 
                  backgroundColor: theme.colors.background.secondary,
                  borderColor: openIndex === index ? theme.colors.accent.gold : 'rgba(201, 166, 107, 0.2)'
                }}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-[#1f2937]/50 transition-colors"
                >
                  <h3 className="text-lg font-semibold pr-4" style={{ color: theme.colors.text.primary }}>
                    {faq.question}
                  </h3>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 45 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="flex-shrink-0"
                  >
                    {openIndex === index ? (
                      <Minus className="w-5 h-5" style={{ color: theme.colors.accent.gold }} />
                    ) : (
                      <Plus className="w-5 h-5" style={{ color: theme.colors.accent.gold }} />
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
                        <p className="leading-relaxed" style={{ color: theme.colors.text.secondary }}>
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
    </section>
  )
}
