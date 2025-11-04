import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'
import { z } from 'zod'
import { rateLimit, getClientIp, checkHoneypot } from '@/lib/rateLimit'

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  role: z.string().min(2, 'Role must be at least 2 characters'),
  company: z.string().min(2, 'Company must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().optional(),
  product: z.string().min(1, 'Please select a product'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
  honeypot: z.string().optional(), // Honeypot field for bot detection
  consent: z.boolean().refine(val => val === true, 'You must agree to be contacted'),
})

// For development, save submissions to a JSON file
async function saveToFile(data: any) {
  if (process.env.NODE_ENV === 'development') {
    const fs = (await import('fs')).default
    const path = (await import('path')).default
    
    const dataDir = path.join(process.cwd(), 'data')
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true })
    }
    
    const submissions = []
    const filePath = path.join(dataDir, 'submissions.json')
    
    if (fs.existsSync(filePath)) {
      const existing = fs.readFileSync(filePath, 'utf-8')
      submissions.push(...JSON.parse(existing))
    }
    
    submissions.push({
      ...data,
      timestamp: new Date().toISOString(),
      id: Date.now().toString(),
    })
    
    fs.writeFileSync(filePath, JSON.stringify(submissions, null, 2))
  }
}

export async function POST(request: NextRequest) {
  try {
    // Rate limiting - 5 requests per minute per IP
    const clientIp = getClientIp(request)
    const rateLimitResult = rateLimit(clientIp, {
      maxRequests: 5,
      windowMs: 60000, // 1 minute
    })

    if (!rateLimitResult.success) {
      return NextResponse.json(
        { 
          error: 'Too many requests. Please try again later.',
          retryAfter: Math.ceil((rateLimitResult.resetAt - Date.now()) / 1000)
        },
        { 
          status: 429,
          headers: {
            'Retry-After': String(Math.ceil((rateLimitResult.resetAt - Date.now()) / 1000)),
          }
        }
      )
    }

    const body = await request.json()
    
    // Honeypot check - bot detection
    if (!checkHoneypot(body.honeypot)) {
      console.warn('Bot detected via honeypot:', clientIp)
      // Return success to avoid revealing honeypot
      return NextResponse.json(
        { message: 'Message sent successfully' },
        { status: 200 }
      )
    }
    
    // Validate the request body
    const validatedData = contactSchema.parse(body)
    
    // Save to file in development
    await saveToFile(validatedData)
    
    // If SMTP credentials are provided, send email
    if (process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS) {
      try {
        // Create transporter
        const transporter = nodemailer.createTransport({
          host: process.env.SMTP_HOST,
          port: parseInt(process.env.SMTP_PORT || '587'),
          secure: process.env.SMTP_PORT === '465',
          auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
          },
        })
        
        // Email to admin
        const adminMailOptions = {
          from: process.env.SMTP_USER,
          to: process.env.CONTACT_EMAIL || 'contact@genrecai.com',
          subject: `New Demo Request: ${validatedData.company} - ${validatedData.product}`,
          html: `
            <h2>New Contact Form Submission</h2>
            <p><strong>Name:</strong> ${validatedData.name}</p>
            <p><strong>Role:</strong> ${validatedData.role}</p>
            <p><strong>Company:</strong> ${validatedData.company}</p>
            <p><strong>Email:</strong> ${validatedData.email}</p>
            ${validatedData.phone ? `<p><strong>Phone:</strong> ${validatedData.phone}</p>` : ''}
            <p><strong>Product Interest:</strong> ${validatedData.product}</p>
            <p><strong>Message:</strong></p>
            <p>${validatedData.message.replace(/\n/g, '<br>')}</p>
          `,
        }
        
        // Confirmation email to user
        const userMailOptions = {
          from: process.env.SMTP_USER,
          to: validatedData.email,
          subject: 'Thanks for contacting Genrec AI',
          html: `
            <h2>Thanks for your interest in Genrec AI!</h2>
            <p>Hi ${validatedData.name},</p>
            <p>We've received your request for a demo of our ${validatedData.product} solution.</p>
            <p>Our team will review your message and get back to you within 48 hours.</p>
            <p>In the meantime, feel free to explore our website for more information about our products and approach.</p>
            <br>
            <p>Best regards,<br>The Genrec AI Team</p>
            <br>
            <p style="font-size: 12px; color: #666;">This is an automated response. Please don't reply to this email.</p>
          `,
        }
        
        // Send both emails
        await Promise.all([
          transporter.sendMail(adminMailOptions),
          transporter.sendMail(userMailOptions),
        ])
      } catch (emailError) {
        console.error('Email sending failed:', emailError)
        // Continue even if email fails - we have the submission saved
      }
    }
    
    // If Formspree ID is provided as fallback
    if (process.env.NEXT_PUBLIC_FORMSPREE_ID) {
      try {
        await fetch(`https://formspree.io/f/${process.env.NEXT_PUBLIC_FORMSPREE_ID}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(validatedData),
        })
      } catch (formspreeError) {
        console.error('Formspree submission failed:', formspreeError)
      }
    }
    
    return NextResponse.json(
      { 
        message: 'Message sent successfully',
        ticketId: Date.now().toString(), // In production, use proper ticket ID generation
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Contact form error:', error)
    
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Invalid form data', details: error.errors },
        { status: 400 }
      )
    }
    
    return NextResponse.json(
      { error: 'Failed to process request' },
      { status: 500 }
    )
  }
}
