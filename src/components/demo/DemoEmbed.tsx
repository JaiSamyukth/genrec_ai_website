'use client'

import { useEffect, useRef, useState, useCallback } from 'react'
import { useInView } from 'react-intersection-observer'

interface DemoEmbedProps {
  demoUrl: string
  title: string
  onEvent?: (eventType: string, payload?: any) => void
  className?: string
  fallbackContent?: React.ReactNode
}

interface DemoMessage {
  source: string
  type: string
  payload?: any
}

/**
 * DemoEmbed - Secure iframe wrapper for product demos
 * Features:
 * - Lazy loading with Intersection Observer
 * - PostMessage communication
 * - Security validation
 * - Error handling with fallback
 * - Analytics integration
 */
export function DemoEmbed({ 
  demoUrl, 
  title, 
  onEvent, 
  className = '',
  fallbackContent 
}: DemoEmbedProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [hasError, setHasError] = useState(false)
  const [showFallback, setShowFallback] = useState(false)
  const iframeRef = useRef<HTMLIFrameElement>(null)
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  // Handle postMessage from iframe
  const handleMessage = useCallback((event: MessageEvent) => {
    // Security: Validate origin
    const allowedOrigin = new URL(demoUrl).origin
    if (event.origin !== allowedOrigin) {
      console.warn('Ignored message from unauthorized origin:', event.origin)
      return
    }

    try {
      const data = event.data as DemoMessage

      // Security: Validate message structure
      if (!data || typeof data !== 'object' || data.source !== 'lumina-demo') {
        return
      }

      // Handle specific event types
      switch (data.type) {
        case 'demo_loaded':
          setIsLoaded(true)
          setHasError(false)
          break
        case 'demo_error':
          setHasError(true)
          console.error('Demo error:', data.payload)
          break
        case 'demo_interaction':
        case 'demo_started_quiz':
        case 'demo_request_demo':
        case 'cta_clicked':
          // Forward events to parent component for analytics
          onEvent?.(data.type, data.payload)
          break
      }
    } catch (error) {
      console.error('Error handling demo message:', error)
    }
  }, [demoUrl, onEvent])

  useEffect(() => {
    window.addEventListener('message', handleMessage)
    return () => window.removeEventListener('message', handleMessage)
  }, [handleMessage])

  // Error timeout - show fallback if iframe doesn't load within 10s
  useEffect(() => {
    if (inView) {
      const timeout = setTimeout(() => {
        if (!isLoaded && !hasError) {
          setShowFallback(true)
        }
      }, 10000)
      return () => clearTimeout(timeout)
    }
  }, [inView, isLoaded, hasError])

  const handleIframeError = () => {
    setHasError(true)
    setShowFallback(true)
  }

  if (hasError || showFallback) {
    return (
      <div className={`bg-gray-50 rounded-xl p-8 text-center ${className}`}>
        {fallbackContent || (
          <>
            <p className="text-lg text-gray-700 mb-4">
              Unable to load interactive demo
            </p>
            <a
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-accent-blue text-white rounded-lg hover:bg-accent-blue-hover transition-colors focus:outline-none focus:ring-4 focus:ring-accent-blue focus:ring-offset-2"
            >
              Open Demo in New Tab
            </a>
          </>
        )}
      </div>
    )
  }

  return (
    <div ref={ref} className={className}>
      {/* Loading skeleton */}
      {inView && !isLoaded && (
        <div className="absolute inset-0 bg-gray-100 animate-pulse rounded-xl flex items-center justify-center">
          <div className="text-center">
            <div className="w-12 h-12 border-4 border-accent-blue border-t-transparent rounded-full animate-spin mx-auto mb-4" />
            <p className="text-gray-600">Loading demo...</p>
          </div>
        </div>
      )}

      {/* Iframe - only load when in view */}
      {inView && (
        <iframe
          ref={iframeRef}
          src={demoUrl}
          title={title}
          className={`w-full h-full rounded-xl border-2 border-gray-200 ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}
          sandbox="allow-scripts allow-forms allow-popups allow-same-origin"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          loading="lazy"
          onError={handleIframeError}
          aria-label={`Interactive demo: ${title}`}
        />
      )}

      {/* Accessibility: Provide text alternative */}
      <div className="sr-only">
        <p>Interactive demo for {title}. If you cannot access the demo, please contact us for assistance.</p>
        <a href={demoUrl} target="_blank" rel="noopener noreferrer">
          Open demo in new window
        </a>
      </div>
    </div>
  )
}
