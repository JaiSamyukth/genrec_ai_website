import Link from 'next/link'
import { LucideIcon, ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'

interface ProductCardProps {
  product: {
    id: string
    title: string
    description: string
    icon: LucideIcon
    href: string
    features: string[]
    gradient: string
  }
}

export function ProductCard({ product }: ProductCardProps) {
  const Icon = product.icon

  return (
    <Link href={product.href}>
      <div className="group relative h-full bg-white rounded-xl border border-gray-200 hover:border-accent-metal/30 transition-all duration-300 hover:shadow-lg">
        <div className="p-6 h-full flex flex-col">
          <div className={cn('w-12 h-12 rounded-lg bg-gradient-to-br flex items-center justify-center mb-4', product.gradient)}>
            <Icon className="w-6 h-6 text-white" />
          </div>

          <h3 className="text-xl font-serif font-semibold text-primary-bg mb-2">
            {product.title}
          </h3>

          <p className="text-sm text-muted mb-4 flex-grow">
            {product.description}
          </p>

          <ul className="space-y-2 mb-4">
            {product.features.slice(0, 3).map((feature, index) => (
              <li key={index} className="flex items-start">
                <span className="text-accent-metal mr-2 mt-1">•</span>
                <span className="text-xs text-gray-600">{feature}</span>
              </li>
            ))}
          </ul>

          <div className="flex items-center text-accent-metal group-hover:text-accent-metal/80 transition-colors">
            <span className="text-sm font-medium">Learn more</span>
            <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>

        {/* Gradient overlay on hover */}
        <div className="absolute inset-0 rounded-xl bg-gradient-to-br opacity-0 group-hover:opacity-5 transition-opacity pointer-events-none" />
      </div>
    </Link>
  )
}
