'use client'

import { useEffect, useState } from 'react'

export function LuminaIQEmbed() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="relative w-full bg-gray-100 flex items-center justify-center" style={{ height: '600px' }}>
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-accent-metal border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading LuminaIQ...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="relative w-full bg-gray-100" style={{ height: '600px' }}>
      <iframe
        src="https://luminaiq.genrecai.com"
        title="LuminaIQ Live Demo"
        className="w-full h-full border-0"
        sandbox="allow-same-origin allow-scripts allow-popups allow-forms allow-popups-to-escape-sandbox"
        loading="lazy"
      />
    </div>
  )
}
