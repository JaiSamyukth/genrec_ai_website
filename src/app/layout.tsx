import type { Metadata } from 'next'
import { Inter, Merriweather } from 'next/font/google'
import './globals.css'
import { cn } from '@/lib/utils'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Toaster } from '@/components/ui/toaster'
import { Analytics } from '@vercel/analytics/react'
import { CookieBanner } from '@/components/CookieBanner'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
  preload: true,
  fallback: ['system-ui', '-apple-system', 'sans-serif'],
})

const merriweather = Merriweather({
  subsets: ['latin'],
  weight: ['300', '400', '700', '900'],
  variable: '--font-serif',
  display: 'swap',
  preload: true,
  fallback: ['Georgia', 'serif'],
})

export const metadata: Metadata = {
  metadataBase: new URL('https://genrecai.com'),
  title: {
    default: 'Genrec AI - Privacy-first AI for Construction, Hospitality & Education',
    template: '%s | Genrec AI',
  },
  description:
    'Engineering-grade AI systems that scale, protect data, and make operations smarter. Trusted by enterprises in construction, hospitality, and education.',
  keywords: [
    'enterprise AI for construction',
    'hotel dining software',
    'adaptive learning platform',
    'privacy-first AI consultancy',
    'AI construction management',
    'restaurant tech solutions',
    'educational AI tools',
  ],
  authors: [
    { name: 'Jai Samyukth', url: 'mailto:jaisamyukth@gmail.com' },
    { name: 'Shyamnath Sankar', url: 'mailto:shyamnathsankar@genrecai.com' },
  ],
  creator: 'Genrec AI',
  publisher: 'Genrec AI',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://genrecai.com',
    siteName: 'Genrec AI',
    title: 'Genrec AI - Privacy-first AI for Construction, Hospitality & Education',
    description:
      'Engineering-grade AI systems that scale, protect data, and make operations smarter.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Genrec AI - Privacy-first enterprise AI solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Genrec AI - Privacy-first AI Solutions',
    description: 'Engineering-grade AI systems for enterprise',
    images: ['/og-image.png'],
    creator: '@genrecai',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Genrec AI',
    url: 'https://genrecai.com',
    logo: 'https://genrecai.com/logo.png',
    description: 'Engineering-grade AI systems that scale, protect data, and make operations smarter. Trusted by enterprises in construction, hospitality, and education.',
    sameAs: [
      'https://twitter.com/genrecai',
      'https://linkedin.com/company/genrecai',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+1-XXX-XXX-XXXX',
      contactType: 'Customer Service',
      areaServed: 'Worldwide',
      availableLanguage: ['English'],
    },
    founder: [
      {
        '@type': 'Person',
        name: 'Jai Samyukth',
        jobTitle: 'Co-Founder & CEO',
      },
      {
        '@type': 'Person',
        name: 'Shyamnath Sankar',
        jobTitle: 'Co-Founder & CTO',
      },
    ],
    offers: [
      {
        '@type': 'Offer',
        name: 'Tabble',
        description: 'Premium dining tablet & staff interfaces for luxury hotels',
      },
      {
        '@type': 'Offer',
        name: 'Lumina IQ',
        description: 'Adaptive learning and assessment engine for modern education',
      },
      {
        '@type': 'Offer',
        name: 'Construct AI',
        description: 'Project progress tracking with photo-based insights',
      },
    ],
  }

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
        <link rel="preload" href="/fonts/inter.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/merriweather.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <style dangerouslySetInnerHTML={{ __html: `
          body { font-family: system-ui, -apple-system, sans-serif; }
        `}} />
        
        {/* Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
        
        {/* Additional SEO meta tags */}
        <meta name="theme-color" content="#0b0f1a" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      </head>
      <body
        className={cn(
          'min-h-screen bg-white font-sans antialiased scroll-smooth',
          inter.variable,
          merriweather.variable
        )}
      >
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <Toaster />
        <CookieBanner />
        <Analytics />
      </body>
    </html>
  )
}
