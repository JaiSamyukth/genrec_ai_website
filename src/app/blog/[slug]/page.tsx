'use client'

import { useState, useEffect } from 'react'
import { useParams, notFound } from 'next/navigation'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowLeft, Calendar, Clock, User, MessageSquare, Send } from 'lucide-react'
import { theme, gradients } from '@/lib/theme'
import blogData from '@/data/blogs.json'
import commentsData from '@/data/comments.json'
import { Comment } from '@/types/blog'

// Simple markdown parser
function parseMarkdown(content: string): string {
  return content
    .replace(/^### (.*$)/gim, '<h3 class="text-2xl font-bold mt-6 mb-3 text-[#F7F7F7]">$1</h3>')
    .replace(/^## (.*$)/gim, '<h2 class="text-3xl font-bold mt-8 mb-4 text-[#F7F7F7]">$1</h2>')
    .replace(/^# (.*$)/gim, '<h1 class="text-4xl font-bold mt-8 mb-4 text-[#F7F7F7]">$1</h1>')
    .replace(/\*\*(.*)\*\*/g, '<strong class="font-semibold">$1</strong>')
    .replace(/\*(.*)\*/g, '<em>$1</em>')
    .replace(/^- (.*$)/gim, '<li class="ml-6 mb-2 text-[#9AA3B2]">• $1</li>')
    .replace(/\n\n/g, '</p><p class="mb-4 text-[#9AA3B2] leading-relaxed">')
    .replace(/^/, '<p class="mb-4 text-[#9AA3B2] leading-relaxed">')
    .replace(/$/, '</p>')
}

export default function BlogPostPage() {
  const params = useParams()
  const slug = params.slug as string
  const post = blogData.posts.find(p => p.slug === slug)
  
  const [comments, setComments] = useState<Comment[]>([])
  const [newComment, setNewComment] = useState({ name: '', content: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')

  useEffect(() => {
    // Load comments for this post
    const postComments = (commentsData as any)[slug] || []
    setComments(postComments)
  }, [slug])

  if (!post || !post.published) {
    notFound()
  }

  const handleCommentSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!newComment.name.trim() || !newComment.content.trim()) {
      setSubmitMessage('Please fill in all fields.')
      return
    }

    setIsSubmitting(true)
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500))
    
    const comment: Comment = {
      id: Date.now().toString(),
      postSlug: slug,
      name: newComment.name.trim(),
      content: newComment.content.trim(),
      timestamp: new Date().toISOString()
    }
    
    setComments([...comments, comment])
    setNewComment({ name: '', content: '' })
    setSubmitMessage('Your comment will appear after a short review.')
    setIsSubmitting(false)
    
    setTimeout(() => setSubmitMessage(''), 5000)
  }

  return (
    <main style={{ backgroundColor: theme.colors.background.primary, minHeight: '100vh' }}>
      {/* Hero Section with Cover Image */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url("${post.coverImage}")`,
            opacity: 0.3
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0b0f1a]/80 to-[#0b0f1a]" />
        
        <div className={`${theme.spacing.container} relative z-10`}>
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Back Link */}
              <Link href="/blog" className="inline-flex items-center gap-2 mb-8 hover:gap-3 transition-all" style={{ color: theme.colors.accent.gold }}>
                <ArrowLeft className="w-5 h-5" />
                <span>Back to Blog</span>
              </Link>
              
              {/* Category */}
              <span 
                className="inline-block px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wider mb-4"
                style={{ 
                  backgroundColor: 'rgba(201, 166, 107, 0.1)',
                  color: theme.colors.accent.gold 
                }}
              >
                {post.category}
              </span>
              
              {/* Title */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6" style={{ color: theme.colors.text.primary }}>
                {post.title}
              </h1>
              
              {/* Excerpt */}
              <p className="text-xl mb-8" style={{ color: theme.colors.text.secondary }}>
                {post.excerpt}
              </p>
              
              {/* Meta */}
              <div className="flex items-center gap-6">
                {post.authorImage && (
                  <img 
                    src={post.authorImage}
                    alt={post.author}
                    className="w-12 h-12 rounded-full"
                  />
                )}
                <div className="flex flex-wrap items-center gap-4 text-sm" style={{ color: theme.colors.text.secondary }}>
                  <span className="flex items-center gap-1">
                    <User className="w-4 h-4" />
                    {post.author}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {post.readTime}
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-12">
        <div className={theme.spacing.container}>
          <motion.article 
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div 
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: parseMarkdown(post.content) }}
            />
          </motion.article>
        </div>
      </section>

      {/* Comments Section */}
      <section className="py-12 border-t" style={{ borderColor: 'rgba(201, 166, 107, 0.1)' }}>
        <div className={theme.spacing.container}>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-2" style={{ color: theme.colors.text.primary }}>
              <MessageSquare className="w-8 h-8" style={{ color: theme.colors.accent.gold }} />
              Comments ({comments.length})
            </h2>
            
            {/* Comment Form */}
            <motion.div 
              className="mb-12 p-6 rounded-xl border"
              style={{ 
                backgroundColor: theme.colors.background.secondary,
                borderColor: 'rgba(201, 166, 107, 0.2)'
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-xl font-bold mb-4" style={{ color: theme.colors.text.primary }}>
                Join the Conversation
              </h3>
              
              <form onSubmit={handleCommentSubmit}>
                <div className="mb-4">
                  <input
                    type="text"
                    placeholder="Your name"
                    value={newComment.name}
                    onChange={(e) => setNewComment({ ...newComment, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-[#0b0f1a] border"
                    style={{ 
                      color: theme.colors.text.primary,
                      borderColor: 'rgba(201, 166, 107, 0.2)'
                    }}
                    disabled={isSubmitting}
                  />
                </div>
                
                <div className="mb-4">
                  <textarea
                    placeholder="Share your thoughts..."
                    value={newComment.content}
                    onChange={(e) => setNewComment({ ...newComment, content: e.target.value })}
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg bg-[#0b0f1a] border resize-none"
                    style={{ 
                      color: theme.colors.text.primary,
                      borderColor: 'rgba(201, 166, 107, 0.2)'
                    }}
                    disabled={isSubmitting}
                  />
                </div>
                
                <div className="flex items-center justify-between">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all hover:scale-105 disabled:opacity-50"
                    style={{ 
                      background: gradients.button,
                      color: theme.colors.text.primary
                    }}
                  >
                    <Send className="w-4 h-4" />
                    {isSubmitting ? 'Posting...' : 'Post Comment'}
                  </button>
                  
                  {submitMessage && (
                    <span className="text-sm" style={{ color: theme.colors.accent.gold }}>
                      {submitMessage}
                    </span>
                  )}
                </div>
              </form>
            </motion.div>
            
            {/* Comments List */}
            <div className="space-y-6">
              {comments.map((comment, index) => (
                <motion.div
                  key={comment.id}
                  className="p-6 rounded-xl border"
                  style={{ 
                    backgroundColor: theme.colors.background.secondary,
                    borderColor: 'rgba(201, 166, 107, 0.1)'
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="flex items-start justify-between mb-3">
                    <h4 className="font-semibold" style={{ color: theme.colors.text.primary }}>
                      {comment.name}
                    </h4>
                    <time className="text-sm" style={{ color: theme.colors.text.secondary }}>
                      {new Date(comment.timestamp).toLocaleDateString('en-US', { 
                        month: 'short', 
                        day: 'numeric',
                        year: 'numeric',
                        hour: '2-digit',
                        minute: '2-digit'
                      })}
                    </time>
                  </div>
                  <p style={{ color: theme.colors.text.secondary }}>
                    {comment.content}
                  </p>
                </motion.div>
              ))}
              
              {comments.length === 0 && (
                <p className="text-center py-8" style={{ color: theme.colors.text.secondary }}>
                  Be the first to share your thoughts!
                </p>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
