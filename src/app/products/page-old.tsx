import { Metadata } from 'next'
import Link from 'next/link'
import { ProductCard } from '@/components/ProductCard'
import { Utensils, GraduationCap, HardHat, ChefHat } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Products',
  description: 'Explore Genrec AI products: Tabble, Lumina IQ, Construct AI, and Restaurant Tech Suite - Enterprise-grade AI solutions.',
}

const products = [
  {
    id: 'tabble',
    title: 'Tabble',
    description: 'Premium dining experience platform for luxury hotels. Non-transactional menu interfaces with chef touch displays.',
    icon: Utensils,
    href: '/products/tabble',
    features: [
      'Luxury-first UI design',
      'Multi-language support',
      'Chef touch TV integration',
      'Real-time menu updates',
      'Guest preference learning',
      'Seamless PMS integration',
    ],
    gradient: 'from-amber-500 to-orange-600',
    industries: ['Hospitality', 'Fine Dining'],
    price: 'Custom pricing',
  },
  {
    id: 'lumina-iq',
    title: 'Lumina IQ',
    description: 'Adaptive learning platform that personalizes education at scale. AI-powered assessments and learning paths.',
    icon: GraduationCap,
    href: '/products/lumina-iq',
    features: [
      'Personalized learning paths',
      'Real-time performance analytics',
      'Automated assessment generation',
      'Student engagement tracking',
      'Curriculum alignment tools',
      'Parent/teacher dashboards',
    ],
    gradient: 'from-blue-500 to-indigo-600',
    industries: ['K-12 Education', 'Higher Ed', 'Corporate Training'],
    price: 'Per student/month',
  },
  {
    id: 'construct-ai',
    title: 'Construct AI',
    description: 'Visual progress tracking for construction projects. Photo-based insights with automated reporting.',
    icon: HardHat,
    href: '/products/construct-ai',
    features: [
      'Photo-based progress tracking',
      'Automated Gantt charts',
      'Safety compliance monitoring',
      'Resource prediction',
      'Weather integration',
      'Subcontractor coordination',
    ],
    gradient: 'from-green-500 to-emerald-600',
    industries: ['Construction', 'Real Estate Development'],
    price: 'Per project',
  },
  {
    id: 'restaurant-tech',
    title: 'Restaurant Tech Suite',
    description: 'Complete digital transformation for restaurants. From ordering to kitchen management.',
    icon: ChefHat,
    href: '/products/restaurant-tech',
    features: [
      'Digital menu management',
      'Kitchen display system',
      'Table management',
      'Inventory tracking',
      'Customer analytics',
      'Integration APIs',
    ],
    gradient: 'from-purple-500 to-pink-600',
    industries: ['Restaurants', 'QSR', 'Food Service'],
    price: 'Monthly subscription',
  },
]

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-bg to-slate-900 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-light-text mb-6">
              AI Solutions That Actually Work
            </h1>
            <p className="text-xl text-muted">
              Four product verticals. Three industries. One promise:
              privacy-first AI that delivers measurable ROI.
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {products.map((product) => (
              <div key={product.id} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow">
                <div className={`h-2 bg-gradient-to-r ${product.gradient}`} />
                <div className="p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <h2 className="text-3xl font-serif font-bold text-primary-bg mb-2">
                        {product.title}
                      </h2>
                      <p className="text-gray-600">
                        {product.description}
                      </p>
                    </div>
                    <div className={`w-16 h-16 rounded-lg bg-gradient-to-br ${product.gradient} flex items-center justify-center flex-shrink-0 ml-4`}>
                      <product.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  <div className="mb-6">
                    <h3 className="font-semibold text-primary-bg mb-3">Key Features</h3>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {product.features.map((feature, index) => (
                        <li key={index} className="flex items-start text-sm text-gray-600">
                          <span className="text-accent-metal mr-2">✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center justify-between pt-6 border-t">
                    <div>
                      <p className="text-xs text-muted mb-1">Industries</p>
                      <p className="text-sm font-medium">{product.industries.join(', ')}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-muted mb-1">Pricing</p>
                      <p className="text-sm font-medium">{product.price}</p>
                    </div>
                  </div>

                  <Link
                    href={product.href}
                    className="mt-6 w-full inline-flex items-center justify-center px-6 py-3 bg-primary-bg text-white rounded-lg hover:bg-primary-bg/90 transition-colors"
                  >
                    Learn more →
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-20 text-center">
            <h2 className="text-3xl font-serif font-bold text-primary-bg mb-4">
              Not Sure Which Product Fits?
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Let's discuss your specific needs. We'll recommend the right
              solution and show you a tailored demo.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-accent-metal text-white rounded-lg hover:bg-accent-metal/90 transition-colors text-lg"
            >
              Schedule a Consultation →
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
