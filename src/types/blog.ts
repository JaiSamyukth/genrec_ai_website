export interface BlogPost {
  id: string
  slug: string
  title: string
  excerpt: string
  content: string
  coverImage: string
  author: string
  authorImage?: string
  date: string
  category: string
  readTime: string
  published: boolean
}

export interface Comment {
  id: string
  postSlug: string
  name: string
  content: string
  timestamp: string
}

export interface BlogData {
  posts: BlogPost[]
}

export interface CommentsData {
  [postSlug: string]: Comment[]
}
