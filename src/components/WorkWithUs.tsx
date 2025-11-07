'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState } from 'react'
import { Send } from 'lucide-react'

export function WorkWithUs() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    console.log('Form submitted:', formData)
    setIsSubmitting(false)
    setFormData({ name: '', email: '', message: '' })
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section className="bg-secondary-bg py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="mb-6 text-4xl font-light tracking-tight text-light-text sm:text-5xl">
            Work With <span className="font-normal bg-gradient-to-r from-accent-gold to-accent-gold-hover bg-clip-text text-transparent">Us</span>
          </h2>
          <p className="text-lg leading-relaxed text-secondary-text">
            We partner with teams and institutions that value <span className="text-accent-gold">precision</span>, <span className="text-accent-gold">performance</span>, 
            and long-term impact.
            <br />
            <br />
            If that sounds like you, reach out. If not, we wish you luck keeping up.
          </p>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mx-auto mt-16 max-w-xl"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Field with luxury styling */}
            <div>
              <label 
                htmlFor="name" 
                className="mb-2 block text-sm font-medium tracking-wider text-accent-gold uppercase"
              >
                NAME
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full border border-accent-gold/20 bg-tertiary-bg px-4 py-3 text-light-text transition-colors focus:border-accent-gold focus:outline-none focus:ring-2 focus:ring-accent-gold/50 placeholder:text-secondary-text"
                placeholder="Your name"
              />
            </div>

            {/* Email Field with luxury styling */}
            <div>
              <label 
                htmlFor="email" 
                className="mb-2 block text-sm font-medium tracking-wider text-accent-gold uppercase"
              >
                EMAIL
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full border border-accent-gold/20 bg-tertiary-bg px-4 py-3 text-light-text transition-colors focus:border-accent-gold focus:outline-none focus:ring-2 focus:ring-accent-gold/50 placeholder:text-secondary-text"
                placeholder="your.email@example.com"
              />
            </div>

            {/* Message Field with luxury styling */}
            <div>
              <label 
                htmlFor="message" 
                className="mb-2 block text-sm font-medium tracking-wider text-accent-gold uppercase"
              >
                MESSAGE
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full resize-none border border-accent-gold/20 bg-tertiary-bg px-4 py-3 text-light-text transition-colors focus:border-accent-gold focus:outline-none focus:ring-2 focus:ring-accent-gold/50 placeholder:text-secondary-text"
                placeholder="Tell us about your project..."
              />
            </div>

            {/* Submit Button with gold gradient */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="group relative flex w-full items-center justify-center gap-2 overflow-hidden bg-gradient-to-r from-accent-gold to-accent-gold-hover px-8 py-4 text-primary-bg font-semibold transition-all duration-300 hover:from-accent-gold-hover hover:to-accent-gold-dark hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-accent-gold/30"
            >
              <span className="text-sm font-medium tracking-wider uppercase">
                {isSubmitting ? 'SENDING...' : 'SEND MESSAGE'}
              </span>
              {!isSubmitting && <Send className="h-4 w-4" />}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  )
}
