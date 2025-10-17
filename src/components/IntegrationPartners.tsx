'use client'

import { motion } from 'framer-motion'
import { Cloud, Database, Shield, Cpu, Globe, Code2 } from 'lucide-react'

const partners = [
  { name: 'AWS', icon: Cloud, description: 'Cloud Infrastructure' },
  { name: 'Azure', icon: Cloud, description: 'Enterprise Cloud' },
  { name: 'PostgreSQL', icon: Database, description: 'Data Storage' },
  { name: 'Kubernetes', icon: Cpu, description: 'Container Orchestration' },
  { name: 'TensorFlow', icon: Code2, description: 'ML Framework' },
  { name: 'OpenAI', icon: Globe, description: 'AI Models' },
  { name: 'Docker', icon: Cpu, description: 'Containerization' },
  { name: 'Auth0', icon: Shield, description: 'Authentication' }
]

const technologies = [
  'Python', 'TypeScript', 'React', 'Next.js', 'Node.js', 'FastAPI', 
  'PyTorch', 'Scikit-learn', 'Redis', 'MongoDB', 'GraphQL', 'REST API'
]

export function IntegrationPartners() {
  return (
    <section className="relative py-20 bg-white overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-purple-50/50" />
      
      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span 
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4"
          >
            INTEGRATIONS
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Seamless Ecosystem Integration
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Built to work with your existing infrastructure and favorite tools
          </p>
        </motion.div>

        {/* Partner logos grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-blue-200">
                <div className="flex flex-col items-center text-center">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                    <partner.icon className="w-7 h-7 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-1">{partner.name}</h3>
                  <p className="text-xs text-gray-600">{partner.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Technology tags */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
        >
          <h3 className="text-lg font-semibold text-gray-900 mb-6">
            Built with Modern Technologies
          </h3>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {technologies.map((tech, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.2, delay: index * 0.02 }}
                whileHover={{ scale: 1.05 }}
                className="px-4 py-2 bg-gradient-to-r from-gray-50 to-gray-100 text-gray-700 rounded-lg text-sm font-medium border border-gray-200 hover:border-blue-300 hover:shadow-sm transition-all cursor-default"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Integration benefits */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {[
            {
              title: "API-First Design",
              description: "RESTful and GraphQL APIs for seamless integration",
              icon: "🔌"
            },
            {
              title: "No Vendor Lock-in",
              description: "Open standards and portable architecture",
              icon: "🔓"
            },
            {
              title: "Enterprise Ready",
              description: "SSO, SAML, OAuth 2.0 support out of the box",
              icon: "🏢"
            }
          ].map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl mb-3">{benefit.icon}</div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                {benefit.title}
              </h4>
              <p className="text-gray-600 text-sm">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
