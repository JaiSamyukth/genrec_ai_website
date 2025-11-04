import type { Metadata } from 'next'
import { Inter, Merriweather } from 'next/font/google'
import './globals.css'
import { cn } from '@/lib/utils'
import { HeaderEnhanced } from '@/components/HeaderEnhanced'
import { Footer } from '@/components/Footer'
import { Toaster } from '@/components/ui/toaster'
import { Analytics } from '@vercel/analytics/react'
import { CookieBannerEnhanced } from '@/components/CookieBannerEnhanced'
import { organizationSchema, luminaIQSchema, tabbleSchema, createPricingSchema } from '@/lib/seo'

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
    default: 'Genrec AI - Built by Precision. Driven by Purpose.',
    template: '%s | Genrec AI',
  },
  description:
    'We build intelligent systems that work where others fail — software designed for performance, not pretense. Founder-led custom AI solutions for construction, hospitality & education.',
  keywords: [
    'enterprise AI solutions',
    'custom CRM systems',
    'AI automation dashboards',
    'construction AI software',
    'hospitality tech solutions',
    'educational AI platform',
    'LuminaIQ learning platform',
    'Tabble dining software',
    'bespoke software development',
    'founder-led AI development',
    'premium AI engineering',
    'intelligent web applications',
    'AI for construction management',
    'restaurant booking systems',
    'adaptive learning technology',
  ],
  authors: [
    { name: 'Jai Samyukth B U', url: 'https://linkedin.com/in/jaisamyukth' },
    { name: 'Shyamnath Sankar', url: 'https://linkedin.com/in/shyamnathsankar' },
    { name: 'Harish V', url: 'https://linkedin.com/in/harishv' },
  ],
  creator: 'Genrec AI',
  publisher: 'Genrec AI',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: 'https://genrecai.com',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://genrecai.com',
    siteName: 'Genrec AI',
    title: 'Genrec AI - Built by Precision. Driven by Purpose.',
    description:
      'We build intelligent systems that work where others fail — software designed for performance, not pretense. Founder-led custom AI solutions.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Genrec AI - Boutique AI engineering studio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Genrec AI - Built by Precision. Driven by Purpose.',
    description: 'Founder-led custom AI solutions for enterprise',
    images: ['/og-image.png'],
    creator: '@genrecai',
    site: '@genrecai',
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
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    other: {
      'facebook-domain-verification': 'your-facebook-verification-code',
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
  category: 'technology',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
        <link rel="preconnect" href="https://va.vercel-scripts.com" />
        
        {/* Preload critical fonts */}
        <link rel="preload" href="/fonts/inter.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/merriweather.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        
        {/* Critical CSS for initial render */}
        <style dangerouslySetInnerHTML={{ __html: `
          body { 
            font-family: system-ui, -apple-system, sans-serif; 
            margin: 0;
            padding: 0;
          }
        `}} />
        
        {/* Comprehensive Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(luminaIQSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(tabbleSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(createPricingSchema()),
          }}
        />
        
        {/* Additional SEO meta tags */}
        <meta name="theme-color" content="#FFFFFF" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="format-detection" content="telephone=no" />
      </head>
      <body
        className={cn(
          'min-h-screen bg-white font-sans antialiased scroll-smooth',
          inter.variable,
          merriweather.variable
        )}
      >
        {/* Main content with proper landmarks */}
        <HeaderEnhanced />
        <main id="main-content" className="flex-1 pt-20">
          {children}
        </main>
        <Footer />
        <Toaster />
        <CookieBannerEnhanced />
        <Analytics />
      </body>
    </html>
  )
}
