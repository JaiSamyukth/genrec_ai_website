import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://genrecai.com'
  
  const routes = [
    '',
    '/about',
    '/products',
    '/products/tabble',
    '/products/lumina-iq',
    '/products/construct-ai',
    '/products/restaurant-tech',
    '/case-studies',
    '/blog',
    '/contact',
    '/privacy',
  ]

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'daily' : 'weekly' as const,
    priority: route === '' ? 1 : route.startsWith('/products') ? 0.8 : 0.6,
  }))
}
