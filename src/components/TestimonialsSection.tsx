'use client'

import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'
import { useState } from 'react'

const testimonials = [
  {
    id: 1,
    content: "Genrec AI transformed our construction site monitoring. We've reduced project delays by 40% and improved safety compliance significantly.",
    author: "Michael Chen",
    role: "VP of Operations",
    company: "BuildTech Global",
    rating: 5,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100&h=100"
  },
  {
    id: 2,
    content: "The Tabble system revolutionized our luxury dining experience. Guest satisfaction scores increased by 35% within the first quarter.",
    author: "Sophie Laurent",
    role: "Hotel Director",
    company: "Grand Lumière Hotels",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100&h=100"
  },
  {
    id: 3,
    content: "Lumina IQ's adaptive learning platform helped us personalize education for 10,000+ students. The results have been extraordinary.",
    author: "Dr. James Wilson",
    role: "Dean of Innovation",
    company: "TechEd University",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100&h=100"
  },
  {
    id: 4,
    content: "Privacy-first approach was crucial for us. Genrec AI delivered enterprise-grade security without compromising on functionality.",
    author: "Sarah Martinez",
    role: "Chief Security Officer",
    company: "FinanceCore Solutions",
    rating: 5,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=100&h=100"
  },
  {
    id: 5,
    content: "Implementation was seamless and the ROI was visible within weeks. Best technology investment we've made this decade.",
    author: "Robert Kim",
    role: "CEO",
    company: "NextGen Hospitality",
    rating: 5,
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=100&h=100"
  },
  {
    id: 6,
    content: "The support team is exceptional. They truly understand our industry and continuously optimize the AI models for better results.",
    author: "Emily Thompson",
    role: "Operations Manager",
    company: "EduTech Innovations",
    rating: 5,
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=100&h=100"
  }
]

export function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section className="relative py-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-0 w-96 h-96 bg-purple-100 rounded-full filter blur-3xl opacity-10" />
        <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-blue-100 rounded-full filter blur-3xl opacity-10" />
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
            className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold mb-4"
          >
            <Star className="w-4 h-4 fill-current" />
            TESTIMONIALS
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See what our clients say about transforming their operations with Genrec AI
          </p>
        </motion.div>

        {/* Main testimonial display */}
        <div className="max-w-4xl mx-auto mb-12">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-3xl shadow-xl p-8 md:p-12 relative"
          >
            {/* Quote icon */}
            <Quote className="absolute top-6 left-6 w-12 h-12 text-purple-200 transform rotate-180" />
            
            {/* Rating stars */}
            <div className="flex gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>

            {/* Testimonial content */}
            <p className="text-xl md:text-2xl text-gray-800 mb-8 relative z-10 leading-relaxed">
              "{testimonials[activeIndex].content}"
            </p>

            {/* Author info */}
            <div className="flex items-center gap-4">
              <img 
                src={testimonials[activeIndex].image}
                alt={testimonials[activeIndex].author}
                className="w-16 h-16 rounded-full object-cover"
              />
              <div>
                <h4 className="text-lg font-semibold text-gray-900">
                  {testimonials[activeIndex].author}
                </h4>
                <p className="text-gray-600">
                  {testimonials[activeIndex].role} at {testimonials[activeIndex].company}
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Testimonial navigation */}
        <div className="flex justify-center gap-3">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === activeIndex 
                  ? 'w-10 bg-gradient-to-r from-blue-600 to-purple-600' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>

        {/* Additional testimonial cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              
              {/* Content */}
              <p className="text-gray-700 mb-4 line-clamp-3">
                "{testimonial.content}"
              </p>
              
              {/* Author */}
              <div className="flex items-center gap-3">
                <img 
                  src={testimonial.image}
                  alt={testimonial.author}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <h5 className="font-semibold text-gray-900 text-sm">
                    {testimonial.author}
                  </h5>
                  <p className="text-xs text-gray-600">
                    {testimonial.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
