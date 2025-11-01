'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Lock, Eye, EyeOff, LogOut, Upload, Copy, Trash2, Image as ImageIcon, FileText, Save, Plus, Edit2 } from 'lucide-react'
import { theme, gradients } from '@/lib/theme'
import { BlogPost } from '@/types/blog'
import blogData from '@/data/blogs.json'

const ADMIN_PASSWORD = 'genrec_admin_2025'

interface GalleryImage {
  id: string
  url: string
  name: string
  uploadedAt: string
  size: number
}

export default function AdminPage() {
  const router = useRouter()
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [password, setPassword] = useState('')
  const [authError, setAuthError] = useState('')
  
  const [activeTab, setActiveTab] = useState<'blog' | 'gallery'>('blog')
  
  // Blog state
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
  
  // Gallery state
  const [galleryImages, setGalleryImages] = useState<GalleryImage[]>([])
  const [uploadingImage, setUploadingImage] = useState(false)
  const [copiedUrl, setCopiedUrl] = useState<string | null>(null)

  useEffect(() => {
    const auth = sessionStorage.getItem('admin_auth')
    if (auth === 'true') {
      setIsAuthenticated(true)
      loadPosts()
      loadGalleryImages()
    }
  }, [])

  const loadPosts = () => {
    setPosts(blogData.posts)
  }

  const loadGalleryImages = () => {
    const stored = localStorage.getItem('gallery_images')
    if (stored) {
      setGalleryImages(JSON.parse(stored))
    }
  }

  const saveGalleryImages = (images: GalleryImage[]) => {
    localStorage.setItem('gallery_images', JSON.stringify(images))
    setGalleryImages(images)
  }

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true)
      sessionStorage.setItem('admin_auth', 'true')
      setAuthError('')
      loadPosts()
      loadGalleryImages()
    } else {
      setAuthError('Invalid password. Access denied.')
    }
  }

  const handleLogout = () => {
    setIsAuthenticated(false)
    sessionStorage.removeItem('admin_auth')
    setPassword('')
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

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    if (!file.type.startsWith('image/')) {
      alert('Please upload an image file')
      return
    }

    setUploadingImage(true)

    try {
      const reader = new FileReader()
      reader.onloadend = () => {
        const base64String = reader.result as string
        const imageId = Date.now().toString()
        const imageUrl = `${window.location.origin}/api/gallery/${imageId}`
        
        const newImage: GalleryImage = {
          id: imageId,
          url: base64String,
          name: file.name,
          uploadedAt: new Date().toISOString(),
          size: file.size
        }
        
        const updatedImages = [...galleryImages, newImage]
        saveGalleryImages(updatedImages)
        
        setUploadingImage(false)
        alert('Image uploaded successfully! Use the unique URL to reference it.')
      }
      
      reader.readAsDataURL(file)
    } catch (error) {
      console.error('Upload error:', error)
      alert('Failed to upload image')
      setUploadingImage(false)
    }
  }

  const handleCopyUrl = (imageId: string) => {
    const url = `${window.location.origin}/api/gallery/${imageId}`
    navigator.clipboard.writeText(url)
    setCopiedUrl(imageId)
    setTimeout(() => setCopiedUrl(null), 2000)
  }

  const handleDeleteImage = (id: string) => {
    if (confirm('Are you sure you want to delete this image? This cannot be undone.')) {
      const updatedImages = galleryImages.filter(img => img.id !== id)
      saveGalleryImages(updatedImages)
      alert('Image deleted successfully')
    }
  }

  const formatFileSize = (bytes: number) => {
    if (bytes < 1024) return bytes + ' B'
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(2) + ' KB'
    return (bytes / (1024 * 1024)).toFixed(2) + ' MB'
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
            Admin Access
          </h1>
          <p className="text-center mb-8" style={{ color: theme.colors.text.secondary }}>
            Protected Area - Authentication Required
          </p>
          
          <form onSubmit={handleLogin}>
            <div className="mb-6 relative">
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Enter admin password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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
              Admin Panel
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

          {/* Tabs */}
          <div className="flex gap-4 mb-8 border-b" style={{ borderColor: 'rgba(201, 166, 107, 0.2)' }}>
            <button
              onClick={() => setActiveTab('blog')}
              className={`flex items-center gap-2 px-6 py-3 font-semibold transition-colors relative ${
                activeTab === 'blog' ? 'text-[#C9A66B]' : 'text-gray-500 hover:text-gray-300'
              }`}
            >
              <FileText className="w-5 h-5" />
              Blog Admin
              {activeTab === 'blog' && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#C9A66B]"
                />
              )}
            </button>
            <button
              onClick={() => setActiveTab('gallery')}
              className={`flex items-center gap-2 px-6 py-3 font-semibold transition-colors relative ${
                activeTab === 'gallery' ? 'text-[#C9A66B]' : 'text-gray-500 hover:text-gray-300'
              }`}
            >
              <ImageIcon className="w-5 h-5" />
              Gallery Admin
              {activeTab === 'gallery' && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#C9A66B]"
                />
              )}
            </button>
          </div>

          <AnimatePresence mode="wait">
            {activeTab === 'blog' && (
              <motion.div
                key="blog"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                {/* Blog Admin Content */}
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
                          placeholder="Use a URL from Gallery Admin"
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
              </motion.div>
            )}

            {activeTab === 'gallery' && (
              <motion.div
                key="gallery"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                {/* Gallery Admin Content */}
                <div className="mb-8 p-8 rounded-xl border"
                  style={{ 
                    backgroundColor: theme.colors.background.secondary,
                    borderColor: 'rgba(201, 166, 107, 0.2)'
                  }}
                >
                  <h2 className="text-2xl font-bold mb-4" style={{ color: theme.colors.text.primary }}>
                    Upload Image
                  </h2>
                  <p className="mb-6" style={{ color: theme.colors.text.secondary }}>
                    Upload images to get unique URLs for use in blog posts and other pages.
                  </p>
                  
                  <label className="flex flex-col items-center justify-center w-full h-64 border-2 border-dashed rounded-xl cursor-pointer hover:bg-[#0b0f1a]/50 transition-colors"
                    style={{ borderColor: 'rgba(201, 166, 107, 0.3)' }}
                  >
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                      <Upload className="w-12 h-12 mb-4" style={{ color: theme.colors.accent.gold }} />
                      <p className="mb-2 text-sm" style={{ color: theme.colors.text.secondary }}>
                        <span className="font-semibold">Click to upload</span> or drag and drop
                      </p>
                      <p className="text-xs" style={{ color: theme.colors.text.secondary }}>
                        PNG, JPG, GIF, WebP (MAX. 5MB)
                      </p>
                    </div>
                    <input
                      type="file"
                      className="hidden"
                      accept="image/*"
                      onChange={handleImageUpload}
                      disabled={uploadingImage}
                    />
                  </label>
                  
                  {uploadingImage && (
                    <p className="mt-4 text-center" style={{ color: theme.colors.accent.gold }}>
                      Uploading...
                    </p>
                  )}
                </div>

                {/* Gallery Images */}
                <div>
                  <h2 className="text-2xl font-bold mb-6" style={{ color: theme.colors.text.primary }}>
                    Gallery Images ({galleryImages.length})
                  </h2>
                  
                  {galleryImages.length === 0 ? (
                    <p className="text-center py-12" style={{ color: theme.colors.text.secondary }}>
                      No images uploaded yet. Upload your first image above.
                    </p>
                  ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {galleryImages.map((image) => (
                        <motion.div
                          key={image.id}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          className="rounded-xl border overflow-hidden"
                          style={{ 
                            backgroundColor: theme.colors.background.secondary,
                            borderColor: 'rgba(201, 166, 107, 0.2)'
                          }}
                        >
                          <div className="relative aspect-video">
                            <img
                              src={image.url}
                              alt={image.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          
                          <div className="p-4">
                            <h3 className="font-semibold mb-2 truncate" style={{ color: theme.colors.text.primary }}>
                              {image.name}
                            </h3>
                            <p className="text-xs mb-3" style={{ color: theme.colors.text.secondary }}>
                              {formatFileSize(image.size)} • {new Date(image.uploadedAt).toLocaleDateString()}
                            </p>
                            
                            <div className="flex gap-2">
                              <button
                                onClick={() => handleCopyUrl(image.id)}
                                className="flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-lg border transition-colors hover:bg-[#C9A66B]/10"
                                style={{ 
                                  borderColor: 'rgba(201, 166, 107, 0.2)',
                                  color: copiedUrl === image.id ? '#4ade80' : theme.colors.accent.gold
                                }}
                              >
                                <Copy className="w-4 h-4" />
                                {copiedUrl === image.id ? 'Copied!' : 'Copy URL'}
                              </button>
                              
                              <button
                                onClick={() => handleDeleteImage(image.id)}
                                className="p-2 rounded-lg border hover:bg-red-500/10 transition-colors text-red-500"
                                style={{ borderColor: 'rgba(201, 166, 107, 0.2)' }}
                              >
                                <Trash2 className="w-4 h-4" />
                              </button>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </main>
  )
}
