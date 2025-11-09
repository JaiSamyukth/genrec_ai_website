export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      blogs: {
        Row: {
          id: string
          created_at: string
          updated_at: string
          title: string
          slug: string
          excerpt: string
          content: string
          cover_image: string
          author: string
          date: string
          category: string
          read_time: string
          published: boolean
        }
        Insert: {
          id?: string
          created_at?: string
          updated_at?: string
          title: string
          slug: string
          excerpt: string
          content: string
          cover_image?: string
          author?: string
          date?: string
          category?: string
          read_time?: string
          published?: boolean
        }
        Update: {
          id?: string
          created_at?: string
          updated_at?: string
          title?: string
          slug?: string
          excerpt?: string
          content?: string
          cover_image?: string
          author?: string
          date?: string
          category?: string
          read_time?: string
          published?: boolean
        }
      }
      gallery_images: {
        Row: {
          id: string
          created_at: string
          name: string
          url: string
          size: number
          uploaded_by: string | null
        }
        Insert: {
          id?: string
          created_at?: string
          name: string
          url: string
          size: number
          uploaded_by?: string | null
        }
        Update: {
          id?: string
          created_at?: string
          name?: string
          url?: string
          size?: number
          uploaded_by?: string | null
        }
      }
      contact_messages: {
        Row: {
          id: string
          created_at: string
          full_name: string
          role: string
          company: string
          email: string
          phone: string | null
          product: string
          message: string
          status: 'new' | 'read' | 'replied' | 'archived'
        }
        Insert: {
          id?: string
          created_at?: string
          full_name: string
          role: string
          company: string
          email: string
          phone?: string | null
          product: string
          message: string
          status?: 'new' | 'read' | 'replied' | 'archived'
        }
        Update: {
          id?: string
          created_at?: string
          full_name?: string
          role?: string
          company?: string
          email?: string
          phone?: string | null
          product?: string
          message?: string
          status?: 'new' | 'read' | 'replied' | 'archived'
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
  }
}
