import { NextRequest, NextResponse } from 'next/server'
import { supabaseAdmin } from '@/lib/supabase/server'
import { uploadImageToS3 } from '@/lib/s3'

// POST /api/gallery/upload - Upload image to gallery
export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()
    const file = formData.get('file') as File
    const uploadedBy = formData.get('uploaded_by') as string
    const providedCategory = (formData.get('category') as string) || undefined

    if (!file) {
      return NextResponse.json({ error: 'No file provided' }, { status: 400 })
    }

    const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp', 'image/gif', 'image/avif']
    if (!allowedTypes.includes(file.type)) {
      return NextResponse.json(
        { error: 'Invalid file type. Only JPEG, PNG, WebP, and GIF are allowed.' },
        { status: 400 }
      )
    }

    const maxSize = 10 * 1024 * 1024
    if (file.size > maxSize) {
      return NextResponse.json({ error: 'File size exceeds 10MB limit' }, { status: 400 })
    }

    if (!supabaseAdmin) {
      return NextResponse.json(
        { error: 'Database connection not configured' },
        { status: 500 }
      )
    }

    const arrayBuffer = await file.arrayBuffer()
    const buffer = Buffer.from(arrayBuffer)

    const category = providedCategory || inferCategoryFromFileName(file.name)
    const imageUrl = await uploadImageToS3(buffer, file.name, file.type, { category })

    const { data, error } = await supabaseAdmin
      .from('gallery_images')
      .insert([
        {
          name: file.name,
          url: imageUrl,
          size: file.size,
          uploaded_by: uploadedBy || 'admin',
        },
      ])
      .select()
      .single()

    if (error) {
      console.error('Error saving image metadata:', error)
      return NextResponse.json(
        { error: 'Failed to save image metadata' },
        { status: 500 }
      )
    }

    return NextResponse.json(
      {
        message: 'Image uploaded successfully',
        image: data,
        publicUrl: imageUrl,
      },
      { status: 201 }
    )
  } catch (error) {
    console.error('Error:', error)
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Internal server error' },
      { status: 500 }
    )
  }
}

// GET /api/gallery/upload - List all gallery images
export async function GET() {
  try {
    if (!supabaseAdmin) {
      return NextResponse.json(
        { error: 'Database connection not configured' },
        { status: 500 }
      )
    }

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

function inferCategoryFromFileName(fileName: string) {
  const normalized = fileName.toLowerCase().replace(/\.[^/.]+$/, '')
  const token = normalized.split(/[-_\s]+/).filter(Boolean)[0]
  return token || 'general'
}
