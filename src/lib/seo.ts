/**
 * SEO utilities and comprehensive JSON-LD schemas
 * Following spec requirements for schema.org structured data
 */

import { Metadata } from 'next'

export const siteConfig = {
  name: 'Genrec AI',
  description: 'Built by precision. Driven by purpose. We build intelligent systems that work where others fail — software designed for performance, not pretense.',
  url: 'https://genrecai.com',
  ogImage: '/og-image.png',
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
  ],
}

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': ['Organization', 'LocalBusiness', 'SoftwareCompany'],
  name: 'Genrec AI',
  alternateName: 'GenrecAI',
  url: 'https://genrecai.com',
  logo: 'https://genrecai.com/logo.png',
  description: 'Boutique AI engineering studio focused on premium, founder-led custom software development with emphasis on construction, hospitality, and education sectors.',
  slogan: 'Built by precision. Driven by purpose.',
  foundingDate: '2024',
  numberOfEmployees: {
    '@type': 'QuantitativeValue',
    value: 3,
  },
  knowsAbout: [
    'Artificial Intelligence',
    'Machine Learning',
    'Custom Software Development',
    'Enterprise CRM Systems',
    'Educational Technology',
    'Hospitality Technology',
    'Construction Management Software',
  ],
  sameAs: [
    'https://twitter.com/genrecai',
    'https://linkedin.com/company/genrecai',
    'https://github.com/genrecai',
    'https://linkedin.com/in/jaisamyukth',
    'https://linkedin.com/in/shyamnathsankar',
    'https://linkedin.com/in/harishv',
  ],
  contactPoint: [
    {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      email: 'contact@genrecai.com',
      areaServed: 'Worldwide',
      availableLanguage: ['English'],
      hoursAvailable: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        opens: '00:00',
        closes: '23:59',
      },
    },
    {
      '@type': 'ContactPoint',
      contactType: 'Sales',
      email: 'contact@genrecai.com',
      areaServed: 'Worldwide',
      availableLanguage: ['English'],
    },
  ],
  founder: [
    {
      '@type': 'Person',
      name: 'Jai Samyukth B U',
      jobTitle: 'Co-Founder & Chief Architect',
      email: 'jaisamyukth@gmail.com',
      sameAs: 'https://linkedin.com/in/jaisamyukth',
      alumniOf: {
        '@type': 'EducationalOrganization',
        name: 'V.S.B. Engineering College',
      },
      knowsAbout: ['Next.js', 'System Architecture', 'Product Design', 'Privacy-First AI', 'UX Design'],
    },
    {
      '@type': 'Person',
      name: 'Shyamnath Sankar',
      jobTitle: 'Co-Founder & Co-CEO',
      email: 'shyamnathsankar@genrecai.com',
      sameAs: 'https://linkedin.com/in/shyamnathsankar',
      alumniOf: {
        '@type': 'EducationalOrganization',
        name: 'V.S.B. Engineering College',
      },
      knowsAbout: ['AI Strategy', 'Business Development', 'Product Management', 'Partnerships'],
    },
  ],
  employee: [
    {
      '@type': 'Person',
      name: 'Harish V',
      jobTitle: 'Technical Lead',
      email: 'harish@genrecai.com',
      sameAs: 'https://linkedin.com/in/harishv',
      alumniOf: {
        '@type': 'EducationalOrganization',
        name: 'V.S.B. Engineering College',
      },
      knowsAbout: ['Technical Leadership', 'System Architecture', 'Code Review', 'Engineering Management'],
    },
  ],
  makesOffer: [
    {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: 'Enterprise CRM Systems',
        description: 'Custom-built CRM solutions tailored to your business needs',
      },
    },
    {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: 'Automation Dashboards',
        description: 'Intelligent dashboards that streamline operations and boost efficiency',
      },
    },
    {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: 'AI Learning Platforms',
        description: 'Educational technology powered by artificial intelligence',
      },
    },
    {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: 'Custom AI Solutions',
        description: 'Bespoke AI systems designed for your specific industry and challenges',
      },
    },
  ],
  areaServed: {
    '@type': 'Country',
    name: 'India',
  },
}

export function createProductSchema(product: {
  name: string
  description: string
  url: string
  image?: string
  offers?: any
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: product.name,
    description: product.description,
    url: product.url,
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    offers: product.offers || {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
      description: 'Contact for enterprise pricing',
    },
    ...(product.image && { image: product.image }),
  }
}

export function createBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}

export function createArticleSchema(article: {
  title: string
  description: string
  url: string
  image?: string
  datePublished: string
  dateModified?: string
  author?: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.description,
    url: article.url,
    ...(article.image && { image: article.image }),
    datePublished: article.datePublished,
    dateModified: article.dateModified || article.datePublished,
    author: {
      '@type': 'Organization',
      name: 'Genrec AI',
      url: 'https://genrecai.com',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Genrec AI',
      url: 'https://genrecai.com',
      logo: {
        '@type': 'ImageObject',
        url: 'https://genrecai.com/logo.png',
      },
    },
  }
}

export function createFAQSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }
}

// Generate metadata for pages
export function generatePageMetadata(config: {
  title: string
  description: string
  path: string
  image?: string
  noIndex?: boolean
}): Metadata {
  const { title, description, path, image, noIndex } = config
  const url = `${siteConfig.url}${path}`

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      images: [
        {
          url: image || siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image || siteConfig.ogImage],
      creator: '@genrecai',
    },
    ...(noIndex && {
      robots: {
        index: false,
        follow: false,
      },
    }),
  }
}

// LuminaIQ Product Schema
export const luminaIQSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'LuminaIQ',
  applicationCategory: 'EducationalApplication',
  operatingSystem: 'Web',
  description: 'AI-powered learning platform that transforms PDFs into interactive learning experiences',
  offers: {
    '@type': 'AggregateOffer',
    priceCurrency: 'INR',
    availability: 'https://schema.org/InStock',
    description: 'Contact for educational pricing',
  },
  featureList: [
    'Smart PDF Processing',
    'Interactive AI Chat',
    'Question Generation',
    'Quiz Mode',
    'Smart Notes',
    'Personal Library',
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.8',
    ratingCount: '89',
    bestRating: '5',
    worstRating: '1',
  },
  provider: {
    '@type': 'Organization',
    name: 'Genrec AI',
    url: 'https://genrecai.com',
  },
}

// Tabble Product Schema
export const tabbleSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Tabble',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web, iOS, Android',
  description: 'Luxury dining software for hotels and restaurants with 40+ language support',
  offers: {
    '@type': 'AggregateOffer',
    priceCurrency: 'INR',
    availability: 'https://schema.org/InStock',
    description: 'Contact for enterprise pricing',
  },
  featureList: [
    'Guest Interface',
    'Staff Management',
    'Kitchen Interface',
    '40+ Language Support',
    'Privacy-First Architecture',
    'Multi-Platform Support',
  ],
  provider: {
    '@type': 'Organization',
    name: 'Genrec AI',
    url: 'https://genrecai.com',
  },
}

// Service Schema for Pricing Packages
export function createPricingSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Genrec AI Service Packages',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        item: {
          '@type': 'Offer',
          name: 'Foundation Partnership',
          description: 'Custom one-page website with hosting, domain, maintenance, and SEO foundation',
          price: '20000',
          priceCurrency: 'INR',
          additionalType: 'https://schema.org/Service',
        },
      },
      {
        '@type': 'ListItem',
        position: 2,
        item: {
          '@type': 'Offer',
          name: 'Professional Growth',
          description: 'Multi-page custom platform with advanced SEO and quarterly optimization reviews',
          price: '30000',
          priceCurrency: 'INR',
          additionalType: 'https://schema.org/Service',
        },
      },
      {
        '@type': 'ListItem',
        position: 3,
        item: {
          '@type': 'Offer',
          name: 'Growth Partnership',
          description: 'Multi-page platform with ongoing maintenance, SEO, and monthly updates',
          price: '25000',
          priceCurrency: 'INR',
          additionalType: 'https://schema.org/Service',
        },
      },
      {
        '@type': 'ListItem',
        position: 4,
        item: {
          '@type': 'Offer',
          name: 'Premium Partnership',
          description: 'Full-service platform with booking systems, analytics, and 24/7 founder availability',
          price: '45000',
          priceCurrency: 'INR',
          additionalType: 'https://schema.org/Service',
        },
      },
    ],
  }
}
