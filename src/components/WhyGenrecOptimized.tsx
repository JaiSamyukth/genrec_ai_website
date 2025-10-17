'use client'

import { motion } from 'framer-motion'
import { Shield, Code, Users, Zap, Lock, BarChart3 } from 'lucide-react'

const reasons = [
  {
    icon: Shield,
    title: 'Privacy-First Architecture',
    description: "Your data stays yours. No third-party access, no selling, no compromise.",
    gradient: 'from-blue-500 to-blue-600',
    bgColor: 'bg-blue-50',
    delay: 0
  },
  {
    icon: Code,
    title: 'Engineering Excellence',
    description: "Built by engineers, for enterprises. Clean code, scalable architecture.",
    gradient: 'from-purple-500 to-purple-600', 
    bgColor: 'bg-purple-50',
    delay: 0.1
  },
  {
    icon: Users,
    title: 'Industry Expertise',
    description: "We understand construction sites, hotel operations, and classroom dynamics.",
    gradient: 'from-green-500 to-green-600',
    bgColor: 'bg-green-50',
    delay: 0.2
  },
  {
    icon: Zap,
    title: 'Rapid Deployment',
    description: "From pilot to production in weeks, not months. Quick wins guaranteed.",
    gradient: 'from-orange-500 to-orange-600',
    bgColor: 'bg-orange-50',
    delay: 0.3
  },
  {
    icon: Lock,
    title: 'Enterprise Security',
    description: "SOC 2 Type II compliant. End-to-end encryption and role-based access.",
    gradient: 'from-red-500 to-red-600',
    bgColor: 'bg-red-50',
    delay: 0.4
  },
  {
    icon: BarChart3,
    title: 'Measurable ROI',
    description: "Clear metrics, transparent reporting. Impact on your bottom line.",
    gradient: 'from-indigo-500 to-indigo-600',
    bgColor: 'bg-indigo-50',
    delay: 0.5
  }
]

export function WhyGenrecOptimized() {
  return (
    <section className="py-24 bg-gradient-to-b from-white via-gray-50/50 to-white relative overflow-hidden">
      {/* Simple gradient background */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl animate-blob" />
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
            WHY GENREC AI
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Why Industry Leaders Choose Us
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Six compelling reasons to partner with Genrec AI for your digital transformation
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: reason.delay }}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
              className="group relative"
            >
              <div className="relative h-full bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-transparent">
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${reason.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`} />
                
                <div className="relative">
                  {/* Icon */}
                  <div className={`w-14 h-14 ${reason.bgColor} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <reason.icon className={`w-7 h-7 ${reason.gradient.replace('from-', 'text-').split(' ')[0]}`} />
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {reason.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {reason.description}
                  </p>

                  {/* Bottom accent line */}
                  <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${reason.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-b-2xl`} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Simple stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
        >
          {[
            { number: '500+', label: 'Enterprise Clients' },
            { number: '98%', label: 'Satisfaction Rate' },
            { number: '40%', label: 'Cost Reduction' },
            { number: '24/7', label: 'Support Available' }
          ].map((stat, index) => (
            <div key={index}>
              <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {stat.number}
              </div>
              <div className="text-gray-600 text-sm mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
