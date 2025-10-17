'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Calendar, Clock } from 'lucide-react'
import { theme, gradients } from '@/lib/theme'
import blogData from '@/data/blogs.json'

export default function BlogPage() {
  const publishedPosts = blogData.posts.filter(post => post.published)

  return (
    <main style={{ backgroundColor: theme.colors.background.primary, minHeight: '100vh' }}>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80&w=2070")'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0b0f1a]/90 to-[#0b0f1a]" />
        
        <div className={`${theme.spacing.container} relative z-10`}>
          <div className="text-center max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6" style={{ color: theme.colors.text.primary }}>
                Insights & Ideas
              </h1>
              <p className="text-xl" style={{ color: theme.colors.text.secondary }}>
                Real thoughts on AI, privacy, and the future of technology. No fluff, no buzzwords—just honest engineering perspective.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className={theme.spacing.section}>
        <div className={theme.spacing.container}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {publishedPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <Link href={`/blog/${post.slug}`}>
                  <div 
                    className="rounded-xl overflow-hidden border transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-2xl"
                    style={{ 
                      backgroundColor: theme.colors.background.secondary,
                      borderColor: 'rgba(201, 166, 107, 0.2)'
                    }}
                  >
                    {/* Cover Image */}
                    <div className="h-56 overflow-hidden">
                      <img 
                        src={post.coverImage}
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    
                    {/* Content */}
                    <div className="p-6">
                      {/* Category */}
                      <span 
                        className="text-xs font-semibold uppercase tracking-wider"
                        style={{ color: theme.colors.accent.gold }}
                      >
                        {post.category}
                      </span>
                      
                      {/* Title */}
                      <h2 
                        className="text-xl font-bold mt-2 mb-3 line-clamp-2 group-hover:text-[#C9A66B] transition-colors"
                        style={{ color: theme.colors.text.primary }}
                      >
                        {post.title}
                      </h2>
                      
                      {/* Excerpt */}
                      <p 
                        className="mb-4 line-clamp-3"
                        style={{ color: theme.colors.text.secondary }}
                      >
                        {post.excerpt}
                      </p>
                      
                      {/* Meta */}
                      <div className="flex items-center justify-between pt-4 border-t" style={{ borderColor: 'rgba(201, 166, 107, 0.1)' }}>
                        <div className="flex items-center gap-4 text-sm" style={{ color: theme.colors.text.secondary }}>
                          <span className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {post.readTime}
                          </span>
                        </div>
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" style={{ color: theme.colors.accent.gold }} />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 border-t" style={{ borderColor: 'rgba(201, 166, 107, 0.1)' }}>
        <div className={theme.spacing.container}>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-serif font-bold mb-4" style={{ color: theme.colors.text.primary }}>
              Stay Updated
            </h2>
            <p className="text-lg mb-8" style={{ color: theme.colors.text.secondary }}>
              Get our latest insights delivered straight to your inbox. No spam, just thoughtful content on AI and innovation.
            </p>
            <Link href="/contact">
              <button 
                className="px-8 py-4 rounded-lg font-semibold transition-all hover:scale-105 hover:shadow-xl"
                style={{ 
                  background: gradients.button,
                  color: theme.colors.text.primary 
                }}
              >
                Subscribe to Updates
              </button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
