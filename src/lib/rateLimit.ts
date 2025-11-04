/**
 * Simple in-memory rate limiter for serverless functions
 * In production, use Redis or similar distributed cache
 */

interface RateLimitEntry {
  count: number
  resetAt: number
}

const rateLimitMap = new Map<string, RateLimitEntry>()

// Cleanup old entries every 10 minutes
if (typeof setInterval !== 'undefined') {
  setInterval(() => {
    const now = Date.now()
    rateLimitMap.forEach((entry, key) => {
      if (entry.resetAt < now) {
        rateLimitMap.delete(key)
      }
    })
  }, 10 * 60 * 1000)
}

export interface RateLimitConfig {
  maxRequests: number
  windowMs: number
}

export interface RateLimitResult {
  success: boolean
  limit: number
  remaining: number
  resetAt: number
}

/**
 * Rate limit a request by identifier (typically IP address)
 */
export function rateLimit(
  identifier: string,
  config: RateLimitConfig = { maxRequests: 5, windowMs: 60000 }
): RateLimitResult {
  const now = Date.now()
  const entry = rateLimitMap.get(identifier)

  // No existing entry or window expired
  if (!entry || entry.resetAt < now) {
    const resetAt = now + config.windowMs
    rateLimitMap.set(identifier, {
      count: 1,
      resetAt,
    })
    return {
      success: true,
      limit: config.maxRequests,
      remaining: config.maxRequests - 1,
      resetAt,
    }
  }

  // Within rate limit
  if (entry.count < config.maxRequests) {
    entry.count++
    return {
      success: true,
      limit: config.maxRequests,
      remaining: config.maxRequests - entry.count,
      resetAt: entry.resetAt,
    }
  }

  // Rate limit exceeded
  return {
    success: false,
    limit: config.maxRequests,
    remaining: 0,
    resetAt: entry.resetAt,
  }
}

/**
 * Get client IP address from request
 */
export function getClientIp(request: Request): string {
  // Try various headers in order of preference
  const headers = request.headers
  
  return (
    headers.get('x-real-ip') ||
    headers.get('x-forwarded-for')?.split(',')[0].trim() ||
    headers.get('cf-connecting-ip') || // Cloudflare
    headers.get('x-vercel-forwarded-for') || // Vercel
    'unknown'
  )
}

/**
 * Simple honeypot check - field should be empty
 */
export function checkHoneypot(honeypotValue: any): boolean {
  return !honeypotValue || honeypotValue === ''
}
