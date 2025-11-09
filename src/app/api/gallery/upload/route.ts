import { NextRequest, NextResponse } from 'next/server'
import { supabaseAdmin } from '@/lib/supabase/server'

// POST /api/gallery/upload - Upload image to gallery
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, url, size, uploaded_by } = body
    
    if (!name || !url || !size) {
      return NextResponse.json(
        { error: 'Missing required fields: name, url, size' },
        { status: 400 }
      )
    }
    
    const { data, error } = await supabaseAdmin
      .from('gallery_images')
      .insert([
        {
          name,
          url,
          size,
          uploaded_by: uploaded_by || 'admin',
        },
      ])
      .select()
      .single()
    
    if (error) {
      console.error('Error uploading image:', error)
      return NextResponse.json(
        { error: 'Failed to upload image' },
        { status: 500 }
      )
    }
    
    return NextResponse.json(
      { 
        message: 'Image uploaded successfully', 
        image: data,
        publicUrl: `/api/gallery/${data.id}`
      },
      { status: 201 }
    )
  } catch (error) {
    console.error('Error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

// GET /api/gallery/upload - List all gallery images
export async function GET() {
  try {
    const { data, error } = await supabaseAdmin
      .from('gallery_images')
      .select('*')
      .order('created_at', { ascending: false })
    
    if (error) {
      console.error('Error fetching images:', error)
      return NextResponse.json(
        { error: 'Failed to fetch images' },
        { status: 500 }
      )
    }
    
    return NextResponse.json({ images: data }, { status: 200 })
  } catch (error) {
    console.error('Error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
