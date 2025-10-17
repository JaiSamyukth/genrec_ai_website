'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowUpRight, CheckCircle } from 'lucide-react'
import { ReactNode } from 'react'

interface ServiceCardProps {
  id: string
  title: string
  description: string
  image: string
  href: string
  features: string[]
  icon: ReactNode
  color: string
  index: number
}

export function ServiceCard({ 
  title, 
  description, 
  image, 
  href, 
  features, 
  icon,
  color,
  index 
}: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative"
    >
      <Link href={href} className="block">
        {/* Card container with hover effect */}
        <div className="relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
          {/* Image section with overlay */}
          <div className="relative h-48 overflow-hidden">
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
              style={{ backgroundImage: `url(${image})` }}
            />
            <div className={`absolute inset-0 bg-gradient-to-t ${color} to-transparent opacity-60`} />
            
            {/* Icon overlay */}
            <div className="absolute top-4 left-4 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-xl flex items-center justify-center">
              {icon}
            </div>
            
            {/* Arrow icon on hover */}
            <div className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <ArrowUpRight className="w-5 h-5 text-gray-900" />
            </div>
          </div>

          {/* Content section */}
          <div className="p-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
              {title}
            </h3>
            <p className="text-gray-600 mb-4 line-clamp-2">
              {description}
            </p>

            {/* Features list */}
            <div className="space-y-2">
              {features.slice(0, 3).map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.1 + i * 0.05 }}
                  className="flex items-center gap-2 text-sm text-gray-700"
                >
                  <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                  <span>{feature}</span>
                </motion.div>
              ))}
            </div>

            {/* Progress bar animation on hover */}
            <div className="mt-6 h-1 bg-gray-200 rounded-full overflow-hidden">
              <motion.div
                className={`h-full ${color}`}
                initial={{ width: "0%" }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.3 }}
              />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}

// Creative Bento-style service card for featured products
export function BentoServiceCard({
  title,
  description,
  image,
  href,
  features,
  icon,
  color,
  index,
  size = "normal"
}: ServiceCardProps & { size?: "normal" | "large" | "tall" | "wide" }) {
  const sizeClasses = {
    normal: "col-span-1 row-span-1",
    large: "col-span-2 row-span-2",
    tall: "col-span-1 row-span-2",
    wide: "col-span-2 row-span-1"
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`${sizeClasses[size]} group relative`}
    >
      <Link href={href} className="block h-full">
        <div className="relative h-full bg-gradient-to-br from-gray-50 to-white rounded-3xl overflow-hidden border border-gray-200 hover:border-gray-300 transition-all duration-500 hover:shadow-2xl">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }} />
          </div>

          <div className="relative h-full p-8 flex flex-col">
            {/* Header with icon */}
            <div className="flex items-start justify-between mb-6">
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${color} flex items-center justify-center text-white`}>
                {icon}
              </div>
              <ArrowUpRight className="w-5 h-5 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>

            {/* Title and description */}
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
              {title}
            </h3>
            <p className="text-gray-600 mb-6 flex-grow">
              {description}
            </p>

            {/* Features or image based on size */}
            {size === "large" || size === "tall" ? (
              <div className="relative h-48 rounded-xl overflow-hidden mb-6">
                <img 
                  src={image} 
                  alt={title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${color} to-transparent opacity-40`} />
              </div>
            ) : null}

            {/* Compact features */}
            <div className="flex flex-wrap gap-2">
              {features.slice(0, 3).map((feature, i) => (
                <span 
                  key={i}
                  className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full hover:bg-gray-200 transition-colors"
                >
                  {feature}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}
