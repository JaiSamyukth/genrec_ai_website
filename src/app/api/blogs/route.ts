import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase/client'
import { supabaseAdmin } from '@/lib/supabase/server'
import { z } from 'zod'

const blogSchema = z.object({
  title: z.string().min(3, 'Title must be at least 3 characters'),
  slug: z.string().min(3, 'Slug must be at least 3 characters').optional(),
  excerpt: z.string().min(10, 'Excerpt must be at least 10 characters'),
  content: z.string().min(50, 'Content must be at least 50 characters'),
  cover_image: z.string().url('Invalid cover image URL').optional(),
  author: z.string().optional(),
  date: z.string().optional(),
  category: z.string().optional(),
  read_time: z.string().optional(),
  published: z.boolean().optional(),
})

// GET /api/blogs - Fetch all blogs (or only published for public)
export async function GET(request: NextRequest) {
  try {
    if (!supabase) {
      return NextResponse.json(
        { 
          blogs: [], 
          message: 'Supabase not configured. Please check environment variables.' 
        },
        { status: 200 }
      )
    }
    
    const { searchParams } = new URL(request.url)
    const includeUnpublished = searchParams.get('includeUnpublished') === 'true'
    
    let query = supabase
      .from('blogs')
      .select('*')
      .order('date', { ascending: false })
    
    if (!includeUnpublished) {
      query = query.eq('published', true)
    }
    
    const { data, error } = await query
    
    if (error) {
      console.error('Error fetching blogs:', error)
      // Return empty array instead of error if table doesn't exist yet
      if (error.message?.includes('relation') || error.message?.includes('does not exist')) {
        return NextResponse.json(
          { 
            blogs: [], 
            message: 'Database tables not yet created. Please run the SQL schema in Supabase.' 
          },
          { status: 200 }
        )
      }
      return NextResponse.json(
        { error: 'Failed to fetch blogs', blogs: [] },
        { status: 500 }
      )
    }
    
    return NextResponse.json({ blogs: data || [] }, { status: 200 })
  } catch (error) {
    console.error('Error:', error)
    return NextResponse.json(
      { error: 'Internal server error', blogs: [] },
      { status: 500 }
    )
  }
}

// POST /api/blogs - Create new blog post (admin only)
export async function POST(request: NextRequest) {
  try {
    if (!supabaseAdmin) {
      return NextResponse.json(
        { error: 'Supabase not configured' },
        { status: 503 }
      )
    }
    
    const body = await request.json()
    
    // Validate data
    const validatedData = blogSchema.parse(body)
    
    // Generate slug if not provided
    const slug = validatedData.slug || 
      validatedData.title.toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-|-$/g, '')
    
    // Insert into Supabase with admin client
    const { data, error } = await supabaseAdmin
      .from('blogs')
      .insert([
        {
          title: validatedData.title,
          slug,
          excerpt: validatedData.excerpt,
          content: validatedData.content,
          cover_image: validatedData.cover_image || 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=2070',
          author: validatedData.author || 'Genrec AI Team',
          date: validatedData.date || new Date().toISOString().split('T')[0],
          category: validatedData.category || 'AI Innovation',
          read_time: validatedData.read_time || '5 min read',
          published: validatedData.published ?? false,
        },
      ])
      .select()
      .single()
    
    if (error) {
      console.error('Error creating blog:', error)
      return NextResponse.json(
        { error: 'Failed to create blog post', details: error.message },
        { status: 500 }
      )
    }
    
    return NextResponse.json(
      { message: 'Blog post created successfully', blog: data },
      { status: 201 }
    )
  } catch (error) {
    console.error('Error:', error)
    
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Invalid data', details: error.errors },
        { status: 400 }
      )
    }
    
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
