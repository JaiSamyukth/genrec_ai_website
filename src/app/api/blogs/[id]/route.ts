import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase/client'
import { supabaseAdmin } from '@/lib/supabase/server'
import { z } from 'zod'

const blogUpdateSchema = z.object({
  title: z.string().min(3).optional(),
  slug: z.string().min(3).optional(),
  excerpt: z.string().min(10).optional(),
  content: z.string().min(50).optional(),
  cover_image: z.string().url().optional(),
  author: z.string().optional(),
  date: z.string().optional(),
  category: z.string().optional(),
  read_time: z.string().optional(),
  published: z.boolean().optional(),
})

// GET /api/blogs/[id] - Fetch single blog post
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { data, error } = await supabase
      .from('blogs')
      .select('*')
      .eq('id', params.id)
      .single()
    
    if (error || !data) {
      return NextResponse.json(
        { error: 'Blog post not found' },
        { status: 404 }
      )
    }
    
    return NextResponse.json({ blog: data }, { status: 200 })
  } catch (error) {
    console.error('Error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

// PUT /api/blogs/[id] - Update blog post (admin only)
export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const body = await request.json()
    const validatedData = blogUpdateSchema.parse(body)
    
    const { data, error } = await supabaseAdmin
      .from('blogs')
      .update({
        ...validatedData,
        updated_at: new Date().toISOString(),
      })
      .eq('id', params.id)
      .select()
      .single()
    
    if (error) {
      console.error('Error updating blog:', error)
      return NextResponse.json(
        { error: 'Failed to update blog post' },
        { status: 500 }
      )
    }
    
    return NextResponse.json(
      { message: 'Blog post updated successfully', blog: data },
      { status: 200 }
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

// DELETE /api/blogs/[id] - Delete blog post (admin only)
export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { error } = await supabaseAdmin
      .from('blogs')
      .delete()
      .eq('id', params.id)
    
    if (error) {
      console.error('Error deleting blog:', error)
      return NextResponse.json(
        { error: 'Failed to delete blog post' },
        { status: 500 }
      )
    }
    
    return NextResponse.json(
      { message: 'Blog post deleted successfully' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
