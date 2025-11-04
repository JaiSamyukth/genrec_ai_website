'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'

interface CookiePreferences {
  necessary: boolean
  analytics: boolean
  timestamp: number
}

/**
 * GDPR-compliant cookie consent banner
 * - Necessary cookies enabled by default
 * - Optional analytics requiring explicit consent
 * - Persistent preferences via localStorage
 * - Accessibility-first design
 */
export function CookieBannerEnhanced() {
  const [isVisible, setIsVisible] = useState(false)
  const [showDetails, setShowDetails] = useState(false)
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true,
    analytics: false,
    timestamp: Date.now(),
  })

  useEffect(() => {
    // Check if user has already set preferences
    const stored = localStorage.getItem('cookie-preferences')
    if (stored) {
      try {
        const parsed = JSON.parse(stored) as CookiePreferences
        setPreferences(parsed)
        
        // Initialize analytics if consent given
        if (parsed.analytics) {
          initializeAnalytics()
        }
      } catch (error) {
        console.error('Error parsing cookie preferences:', error)
        setIsVisible(true)
      }
    } else {
      // Show banner after short delay for better UX
      setTimeout(() => setIsVisible(true), 1000)
    }
  }, [])

  const initializeAnalytics = () => {
    // Enable Vercel Analytics or other analytics here
    if (typeof window !== 'undefined') {
      // @ts-ignore
      window.va?.('consent', 'granted')
    }
  }

  const savePreferences = (prefs: Partial<CookiePreferences>) => {
    const newPreferences = {
      ...preferences,
      ...prefs,
      timestamp: Date.now(),
    }
    setPreferences(newPreferences)
    localStorage.setItem('cookie-preferences', JSON.stringify(newPreferences))
    
    // Initialize analytics if consent given
    if (newPreferences.analytics) {
      initializeAnalytics()
    }
    
    setIsVisible(false)
  }

  const acceptAll = () => {
    savePreferences({ necessary: true, analytics: true })
  }

  const acceptNecessary = () => {
    savePreferences({ necessary: true, analytics: false })
  }

  const saveCustom = () => {
    savePreferences(preferences)
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6"
          role="dialog"
          aria-labelledby="cookie-banner-title"
          aria-describedby="cookie-banner-description"
        >
          <div className="max-w-7xl mx-auto bg-white shadow-2xl rounded-xl border-2 border-gray-200 overflow-hidden">
            <div className="p-6 md:p-8">
              <h2 
                id="cookie-banner-title"
                className="text-2xl font-bold mb-4 text-gray-900"
              >
                Cookie Preferences
              </h2>
              
              <p 
                id="cookie-banner-description"
                className="text-gray-700 mb-6 max-w-3xl"
              >
                We use cookies to enhance your experience. Necessary cookies are required for basic functionality. 
                Analytics cookies help us improve our services but require your consent.{' '}
                <Link 
                  href="/privacy" 
                  className="text-accent-blue hover:underline focus:outline-none focus:ring-2 focus:ring-accent-blue"
                >
                  Read our privacy policy
                </Link>
              </p>

              {showDetails && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="mb-6 space-y-4"
                >
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <label className="flex items-start gap-3">
                      <input
                        type="checkbox"
                        checked={preferences.necessary}
                        disabled
                        className="mt-1 w-4 h-4"
                        aria-label="Necessary cookies (always enabled)"
                      />
                      <div>
                        <span className="font-semibold text-gray-900 block">
                          Necessary Cookies <span className="text-sm text-gray-500">(Always enabled)</span>
                        </span>
                        <span className="text-sm text-gray-600">
                          Required for the website to function properly. Cannot be disabled.
                        </span>
                      </div>
                    </label>
                  </div>

                  <div className="p-4 bg-gray-50 rounded-lg">
                    <label className="flex items-start gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={preferences.analytics}
                        onChange={(e) => setPreferences({ ...preferences, analytics: e.target.checked })}
                        className="mt-1 w-4 h-4 accent-accent-blue focus:ring-2 focus:ring-accent-blue"
                        aria-label="Analytics cookies (optional)"
                      />
                      <div>
                        <span className="font-semibold text-gray-900 block">
                          Analytics Cookies <span className="text-sm text-gray-500">(Optional)</span>
                        </span>
                        <span className="text-sm text-gray-600">
                          Help us understand how visitors use our site. No personal data is collected.
                        </span>
                      </div>
                    </label>
                  </div>
                </motion.div>
              )}

              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={acceptAll}
                  className="px-6 py-3 bg-accent-blue text-white rounded-lg font-semibold hover:bg-accent-blue-hover transition-colors focus:outline-none focus:ring-4 focus:ring-accent-blue focus:ring-offset-2"
                  aria-label="Accept all cookies"
                >
                  Accept All
                </button>
                
                <button
                  onClick={acceptNecessary}
                  className="px-6 py-3 bg-gray-200 text-gray-900 rounded-lg font-semibold hover:bg-gray-300 transition-colors focus:outline-none focus:ring-4 focus:ring-gray-400 focus:ring-offset-2"
                  aria-label="Accept necessary cookies only"
                >
                  Necessary Only
                </button>

                <button
                  onClick={() => setShowDetails(!showDetails)}
                  className="px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-colors focus:outline-none focus:ring-4 focus:ring-gray-400 focus:ring-offset-2"
                  aria-label={showDetails ? "Hide cookie details" : "Customize cookie preferences"}
                  aria-expanded={showDetails}
                >
                  {showDetails ? 'Hide Details' : 'Customize'}
                </button>

                {showDetails && (
                  <button
                    onClick={saveCustom}
                    className="px-6 py-3 bg-accent-blue text-white rounded-lg font-semibold hover:bg-accent-blue-hover transition-colors focus:outline-none focus:ring-4 focus:ring-accent-blue focus:ring-offset-2"
                    aria-label="Save custom cookie preferences"
                  >
                    Save Preferences
                  </button>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
