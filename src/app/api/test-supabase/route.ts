import { NextResponse } from 'next/server'

// Simple health check endpoint
export async function GET() {
  try {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
    const hasAnonKey = !!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
    const hasServiceKey = !!process.env.SUPABASE_SERVICE_ROLE_KEY
    
    return NextResponse.json({
      status: 'ok',
      supabase: {
        url: supabaseUrl ? 'configured' : 'missing',
        anonKey: hasAnonKey ? 'configured' : 'missing',
        serviceRoleKey: hasServiceKey ? 'configured' : 'missing',
      },
      message: 'Supabase environment variables check',
    })
  } catch (error) {
    return NextResponse.json({
      status: 'error',
      error: String(error),
    }, { status: 500 })
  }
}
