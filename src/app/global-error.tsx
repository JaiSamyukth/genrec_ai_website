'use client'

import { useEffect } from 'react'

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <html>
      <body>
        <div className="min-h-screen flex items-center justify-center bg-white px-4">
          <div className="text-center max-w-2xl">
            <h1 className="text-6xl md:text-8xl font-serif font-bold text-gray-900 mb-4">
              500
            </h1>
            
            <p className="text-2xl md:text-3xl text-gray-600 mb-8">
              Server Error
            </p>
            
            <p className="text-gray-500 mb-8">
              We're experiencing technical difficulties. Please try again later.
            </p>

            <button
              onClick={reset}
              className="px-8 py-4 bg-black text-white rounded-lg font-semibold hover:bg-gray-800 transition-all"
            >
              Try Again
            </button>
          </div>
        </div>
      </body>
    </html>
  )
}
