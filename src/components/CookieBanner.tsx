'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Cookie, X } from 'lucide-react'

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false)
  const [hasConsent, setHasConsent] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent')
    if (!consent) {
      setIsVisible(true)
    } else {
      setHasConsent(consent === 'accepted')
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted')
    setHasConsent(true)
    setIsVisible(false)
    // Initialize analytics here if consent is given
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('consent', 'update', {
        analytics_storage: 'granted',
      })
    }
  }

  const handleReject = () => {
    localStorage.setItem('cookieConsent', 'rejected')
    setHasConsent(false)
    setIsVisible(false)
    // Ensure analytics is disabled
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('consent', 'update', {
        analytics_storage: 'denied',
      })
    }
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3, type: 'spring' }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-white border-t shadow-lg md:p-6"
        >
          <div className="container mx-auto max-w-5xl">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div className="flex items-start gap-3">
                <Cookie className="w-5 h-5 text-accent-metal mt-1" />
                <div className="flex-1">
                  <p className="text-sm text-gray-700">
                    We use cookies to enhance your experience. We don't track you without consent
                    and never sell your data. Your privacy matters to us.{' '}
                    <a
                      href="/privacy"
                      className="text-accent-metal hover:underline"
                    >
                      Learn more
                    </a>
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleReject}
                  className="text-xs"
                >
                  Reject
                </Button>
                <Button
                  size="sm"
                  onClick={handleAccept}
                  className="bg-accent-metal hover:bg-accent-metal/90 text-white text-xs"
                >
                  Accept cookies
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

// Extend Window interface for gtag
declare global {
  interface Window {
    gtag: any
  }
}
