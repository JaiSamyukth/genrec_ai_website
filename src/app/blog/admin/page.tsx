'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { Lock, Eye, EyeOff, Save, LogOut, Plus, Edit2, Trash2 } from 'lucide-react'
import { theme, gradients } from '@/lib/theme'
import { BlogPost } from '@/types/blog'
import blogData from '@/data/blogs.json'

const ADMIN_USERNAME = 'genrecai'
const ADMIN_PASSWORD = 'jaisamyukth1709'

export default function BlogAdminPage() {
  const router = useRouter()
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [credentials, setCredentials] = useState({ username: '', password: '' })
  const [authError, setAuthError] = useState('')
  
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [editingPost, setEditingPost] = useState<BlogPost | null>(null)
  const [isNewPost, setIsNewPost] = useState(false)
  
  const [formData, setFormData] = useState<Partial<BlogPost>>({
    title: '',
    slug: '',
    excerpt: '',
    content: '',
    coverImage: '',
    author: 'Genrec AI Team',
    category: 'AI Innovation',
    readTime: '5 min read',
    published: false
  })

  useEffect(() => {
    // Check session storage for auth
    const auth = sessionStorage.getItem('blog_admin_auth')
    if (auth === 'true') {
      setIsAuthenticated(true)
      loadPosts()
    }
  }, [])

  const loadPosts = () => {
    setPosts(blogData.posts)
  }

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    
    if (credentials.username === ADMIN_USERNAME && credentials.password === ADMIN_PASSWORD) {
      setIsAuthenticated(true)
      sessionStorage.setItem('blog_admin_auth', 'true')
      setAuthError('')
      loadPosts()
    } else {
      setAuthError('Invalid credentials. Please try again.')
    }
  }

  const handleLogout = () => {
    setIsAuthenticated(false)
    sessionStorage.removeItem('blog_admin_auth')
    setCredentials({ username: '', password: '' })
  }

  const generateSlug = (title: string) => {
    return title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')
  }

  const handleNewPost = () => {
    setIsNewPost(true)
    setEditingPost(null)
    setFormData({
      title: '',
      slug: '',
      excerpt: '',
      content: '',
      coverImage: '',
      author: 'Genrec AI Team',
      category: 'AI Innovation',
      readTime: '5 min read',
      published: false,
      date: new Date().toISOString().split('T')[0]
    })
  }

  const handleEditPost = (post: BlogPost) => {
    setEditingPost(post)
    setIsNewPost(false)
    setFormData(post)
  }

  const handleSavePost = () => {
    if (!formData.title || !formData.content || !formData.excerpt) {
      alert('Please fill in all required fields')
      return
    }

    const postToSave: BlogPost = {
      id: editingPost?.id || Date.now().toString(),
      slug: formData.slug || generateSlug(formData.title!),
      title: formData.title!,
      excerpt: formData.excerpt!,
      content: formData.content!,
      coverImage: formData.coverImage || 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=2070',
      author: formData.author || 'Genrec AI Team',
      date: formData.date || new Date().toISOString().split('T')[0],
      category: formData.category || 'AI Innovation',
      readTime: formData.readTime || '5 min read',
      published: formData.published || false
    }

    let updatedPosts: BlogPost[]
    if (editingPost) {
      updatedPosts = posts.map(p => p.id === editingPost.id ? postToSave : p)
    } else {
      updatedPosts = [...posts, postToSave]
    }

    setPosts(updatedPosts)
    
    // In a real app, this would save to a database
    console.log('Saving posts:', updatedPosts)
    alert('Post saved successfully! (In production, this would persist to database)')
    
    setEditingPost(null)
    setIsNewPost(false)
  }

  const handleDeletePost = (id: string) => {
    if (confirm('Are you sure you want to delete this post?')) {
      const updatedPosts = posts.filter(p => p.id !== id)
      setPosts(updatedPosts)
      alert('Post deleted! (In production, this would update the database)')
    }
  }

  if (!isAuthenticated) {
    return (
      <main className="min-h-screen flex items-center justify-center" style={{ backgroundColor: theme.colors.background.primary }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-md p-8 rounded-xl border"
          style={{ 
            backgroundColor: theme.colors.background.secondary,
            borderColor: 'rgba(201, 166, 107, 0.2)'
          }}
        >
          <div className="flex items-center justify-center mb-8">
            <Lock className="w-12 h-12" style={{ color: theme.colors.accent.gold }} />
          </div>
          
          <h1 className="text-2xl font-bold text-center mb-2" style={{ color: theme.colors.text.primary }}>
            Blog Admin Access
          </h1>
          <p className="text-center mb-8" style={{ color: theme.colors.text.secondary }}>
            Authorized personnel only
          </p>
          
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <input
                type="text"
                placeholder="Username"
                value={credentials.username}
                onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-[#0b0f1a] border"
                style={{ 
                  color: theme.colors.text.primary,
                  borderColor: 'rgba(201, 166, 107, 0.2)'
                }}
              />
            </div>
            
            <div className="mb-6 relative">
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Password"
                value={credentials.password}
                onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-[#0b0f1a] border pr-12"
                style={{ 
                  color: theme.colors.text.primary,
                  borderColor: 'rgba(201, 166, 107, 0.2)'
                }}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2"
                style={{ color: theme.colors.text.secondary }}
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
            
            {authError && (
              <p className="text-red-500 text-sm mb-4">{authError}</p>
            )}
            
            <button
              type="submit"
              className="w-full py-3 rounded-lg font-semibold transition-all hover:scale-105"
              style={{ 
                background: gradients.button,
                color: theme.colors.text.primary
              }}
            >
              Access Admin Panel
            </button>
          </form>
        </motion.div>
      </main>
    )
  }

  return (
    <main className="min-h-screen" style={{ backgroundColor: theme.colors.background.primary }}>
      <div className="pt-32 pb-20">
        <div className={theme.spacing.container}>
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-4xl font-bold" style={{ color: theme.colors.text.primary }}>
              Blog Admin Panel
            </h1>
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 px-4 py-2 rounded-lg border hover:bg-red-500/10 transition-colors"
              style={{ borderColor: 'rgba(201, 166, 107, 0.2)', color: theme.colors.text.secondary }}
            >
              <LogOut className="w-5 h-5" />
              Logout
            </button>
          </div>

          {/* New Post Button */}
          {!isNewPost && !editingPost && (
            <button
              onClick={handleNewPost}
              className="mb-8 flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all hover:scale-105"
              style={{ 
                background: gradients.button,
                color: theme.colors.text.primary
              }}
            >
              <Plus className="w-5 h-5" />
              Create New Post
            </button>
          )}

          {/* Post Editor */}
          {(isNewPost || editingPost) && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-12 p-8 rounded-xl border"
              style={{ 
                backgroundColor: theme.colors.background.secondary,
                borderColor: 'rgba(201, 166, 107, 0.2)'
              }}
            >
              <h2 className="text-2xl font-bold mb-6" style={{ color: theme.colors.text.primary }}>
                {isNewPost ? 'Create New Post' : 'Edit Post'}
              </h2>
              
              <div className="space-y-4">
                <div>
                  <label className="block mb-2 text-sm font-semibold" style={{ color: theme.colors.text.secondary }}>
                    Title *
                  </label>
                  <input
                    type="text"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-[#0b0f1a] border"
                    style={{ 
                      color: theme.colors.text.primary,
                      borderColor: 'rgba(201, 166, 107, 0.2)'
                    }}
                  />
                </div>
                
                <div>
                  <label className="block mb-2 text-sm font-semibold" style={{ color: theme.colors.text.secondary }}>
                    Slug (URL)
                  </label>
                  <input
                    type="text"
                    value={formData.slug}
                    onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                    placeholder="Leave empty to auto-generate"
                    className="w-full px-4 py-3 rounded-lg bg-[#0b0f1a] border"
                    style={{ 
                      color: theme.colors.text.primary,
                      borderColor: 'rgba(201, 166, 107, 0.2)'
                    }}
                  />
                </div>
                
                <div>
                  <label className="block mb-2 text-sm font-semibold" style={{ color: theme.colors.text.secondary }}>
                    Excerpt *
                  </label>
                  <textarea
                    value={formData.excerpt}
                    onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
                    rows={3}
                    className="w-full px-4 py-3 rounded-lg bg-[#0b0f1a] border resize-none"
                    style={{ 
                      color: theme.colors.text.primary,
                      borderColor: 'rgba(201, 166, 107, 0.2)'
                    }}
                  />
                </div>
                
                <div>
                  <label className="block mb-2 text-sm font-semibold" style={{ color: theme.colors.text.secondary }}>
                    Content * (Markdown supported)
                  </label>
                  <textarea
                    value={formData.content}
                    onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                    rows={15}
                    className="w-full px-4 py-3 rounded-lg bg-[#0b0f1a] border resize-none font-mono"
                    style={{ 
                      color: theme.colors.text.primary,
                      borderColor: 'rgba(201, 166, 107, 0.2)'
                    }}
                  />
                </div>
                
                <div>
                  <label className="block mb-2 text-sm font-semibold" style={{ color: theme.colors.text.secondary }}>
                    Cover Image URL
                  </label>
                  <input
                    type="text"
                    value={formData.coverImage}
                    onChange={(e) => setFormData({ ...formData, coverImage: e.target.value })}
                    placeholder="https://images.unsplash.com/..."
                    className="w-full px-4 py-3 rounded-lg bg-[#0b0f1a] border"
                    style={{ 
                      color: theme.colors.text.primary,
                      borderColor: 'rgba(201, 166, 107, 0.2)'
                    }}
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block mb-2 text-sm font-semibold" style={{ color: theme.colors.text.secondary }}>
                      Author
                    </label>
                    <input
                      type="text"
                      value={formData.author}
                      onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-[#0b0f1a] border"
                      style={{ 
                        color: theme.colors.text.primary,
                        borderColor: 'rgba(201, 166, 107, 0.2)'
                      }}
                    />
                  </div>
                  
                  <div>
                    <label className="block mb-2 text-sm font-semibold" style={{ color: theme.colors.text.secondary }}>
                      Category
                    </label>
                    <input
                      type="text"
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-[#0b0f1a] border"
                      style={{ 
                        color: theme.colors.text.primary,
                        borderColor: 'rgba(201, 166, 107, 0.2)'
                      }}
                    />
                  </div>
                  
                  <div>
                    <label className="block mb-2 text-sm font-semibold" style={{ color: theme.colors.text.secondary }}>
                      Read Time
                    </label>
                    <input
                      type="text"
                      value={formData.readTime}
                      onChange={(e) => setFormData({ ...formData, readTime: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-[#0b0f1a] border"
                      style={{ 
                        color: theme.colors.text.primary,
                        borderColor: 'rgba(201, 166, 107, 0.2)'
                      }}
                    />
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    id="published"
                    checked={formData.published}
                    onChange={(e) => setFormData({ ...formData, published: e.target.checked })}
                    className="w-5 h-5"
                  />
                  <label htmlFor="published" className="text-sm font-semibold" style={{ color: theme.colors.text.secondary }}>
                    Publish immediately
                  </label>
                </div>
                
                <div className="flex gap-4 pt-4">
                  <button
                    onClick={handleSavePost}
                    className="flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all hover:scale-105"
                    style={{ 
                      background: gradients.button,
                      color: theme.colors.text.primary
                    }}
                  >
                    <Save className="w-5 h-5" />
                    Save Post
                  </button>
                  
                  <button
                    onClick={() => {
                      setEditingPost(null)
                      setIsNewPost(false)
                    }}
                    className="px-6 py-3 rounded-lg font-semibold border hover:bg-red-500/10 transition-colors"
                    style={{ 
                      borderColor: 'rgba(201, 166, 107, 0.2)',
                      color: theme.colors.text.secondary
                    }}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </motion.div>
          )}

          {/* Posts List */}
          {!isNewPost && !editingPost && (
            <div className="space-y-4">
              <h2 className="text-2xl font-bold mb-6" style={{ color: theme.colors.text.primary }}>
                All Posts ({posts.length})
              </h2>
              
              {posts.map((post) => (
                <div
                  key={post.id}
                  className="flex items-center justify-between p-6 rounded-xl border"
                  style={{ 
                    backgroundColor: theme.colors.background.secondary,
                    borderColor: 'rgba(201, 166, 107, 0.1)'
                  }}
                >
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2" style={{ color: theme.colors.text.primary }}>
                      {post.title}
                    </h3>
                    <p className="text-sm mb-2" style={{ color: theme.colors.text.secondary }}>
                      {post.excerpt}
                    </p>
                    <div className="flex items-center gap-4 text-sm" style={{ color: theme.colors.text.secondary }}>
                      <span>{post.author}</span>
                      <span>•</span>
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                      <span>•</span>
                      <span className={post.published ? 'text-green-500' : 'text-yellow-500'}>
                        {post.published ? 'Published' : 'Draft'}
                      </span>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2 ml-4">
                    <button
                      onClick={() => handleEditPost(post)}
                      className="p-2 rounded-lg hover:bg-[#C9A66B]/10 transition-colors"
                      style={{ color: theme.colors.accent.gold }}
                    >
                      <Edit2 className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() => handleDeletePost(post.id)}
                      className="p-2 rounded-lg hover:bg-red-500/10 transition-colors text-red-500"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </main>
  )
}
