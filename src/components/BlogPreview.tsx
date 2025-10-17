'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { ScrollReveal } from '@/components/ScrollReveal'
import Link from 'next/link'
import { Calendar, Clock, ArrowRight } from 'lucide-react'
import { formatDate } from '@/lib/utils'

const blogPosts = [
  {
    id: 'privacy-first-ai-architecture',
    title: 'Building Privacy-First AI: A Technical Guide',
    excerpt: "Learn how we architect AI systems that keep data secure while delivering enterprise-grade performance. No compromises.",
    author: 'Jai Samyukth',
    date: new Date('2024-01-15'),
    readTime: '8 min read',
    category: 'Engineering',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=600',
    featured: true,
  },
  {
    id: 'ai-hospitality-revolution',
    title: 'Why Hotels Need More Than Just Another App',
    excerpt: "The hospitality industry doesn&apos;t need more apps. It needs thoughtful technology that enhances human service.",
    author: 'Shyamnath Sankar',
    date: new Date('2024-01-10'),
    readTime: '5 min read',
    category: 'Hospitality',
    image: 'https://images.unsplash.com/photo-1455587734955-081b22074882?auto=format&fit=crop&q=80&w=600',
  },
  {
    id: 'construction-site-ai-safety',
    title: 'AI-Powered Safety Compliance: Beyond Checklists',
    excerpt: 'How computer vision and predictive analytics can prevent accidents before they happen. Real cases from the field.',
    author: 'Jai Samyukth',
    date: new Date('2024-01-05'),
    readTime: '6 min read',
    category: 'Construction',
    image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=600',
  },
]

export function BlogPreview() {
  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, 1000], [0, -25])

  return (
    <section className="relative py-32 bg-gradient-to-b from-gray-50 via-white to-gray-50 overflow-hidden">
      {/* Background decoration */}
      <motion.div 
        className="absolute top-20 left-10 w-96 h-96 bg-accent-metal/5 rounded-full filter blur-3xl"
        style={{ y: y1 }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <ScrollReveal animation="slideUp" className="text-center mb-16">
          <motion.span 
            className="inline-block px-4 py-2 bg-accent-metal/10 text-accent-metal rounded-full text-sm font-bold uppercase tracking-wide mb-6"
            whileHover={{ scale: 1.05 }}
          >
            Industry Insights
          </motion.span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-primary-bg mb-6">
            Latest Insights
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Technical deep-dives, industry insights, and lessons learned
            from the trenches of enterprise AI deployment.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {blogPosts.map((post, index) => (
            <ScrollReveal
              key={post.id}
              animation="slideUp"
              delay={index * 0.1}
            >
              <Link href={`/blog/${post.id}`}>
                <motion.article 
                  className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden h-full flex flex-col"
                  whileHover={{ y: -8 }}
                >
                  {/* Image */}
                  <div className="relative h-56 overflow-hidden">
                    <motion.img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    
                    {/* Category badge */}
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-accent-metal/90 backdrop-blur-sm text-white text-xs font-bold rounded-full uppercase tracking-wide">
                        {post.category}
                      </span>
                    </div>

                    {/* Featured badge */}
                    {post.featured && (
                      <div className="absolute top-4 right-4">
                        <span className="px-3 py-1 bg-yellow-400 text-primary-bg text-xs font-bold rounded-full">
                          Featured
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-6 flex-grow flex flex-col">
                    <h3 className="text-xl font-serif font-bold text-primary-bg mb-3 group-hover:text-accent-metal transition-colors line-clamp-2">
                      {post.title}
                    </h3>

                    <p className="text-gray-600 mb-6 flex-grow line-clamp-3 leading-relaxed">
                      {post.excerpt}
                    </p>

                    <div className="space-y-4">
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <span className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1.5" />
                          {formatDate(post.date)}
                        </span>
                        <span className="flex items-center">
                          <Clock className="w-4 h-4 mr-1.5" />
                          {post.readTime}
                        </span>
                      </div>

                      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                        <p className="text-sm text-gray-600 font-medium">
                          By {post.author}
                        </p>
                        <motion.span 
                          className="flex items-center text-accent-metal font-semibold"
                          whileHover={{ x: 5 }}
                        >
                          <span className="text-sm">Read More</span>
                          <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                        </motion.span>
                      </div>
                    </div>
                  </div>

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-accent-metal/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                </motion.article>
              </Link>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal animation="fadeIn" delay={0.4}>
          <div className="text-center mt-16">
            <Link href="/blog">
              <motion.button
                className="inline-flex items-center px-8 py-4 bg-white border-2 border-accent-metal text-accent-metal font-bold rounded-full hover:bg-accent-metal hover:text-white transition-all duration-300 shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>View All Articles</span>
                <ArrowRight className="ml-3 w-5 h-5" />
              </motion.button>
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
