'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Brain, Utensils, BarChart3, Users, MessageSquare, FileText, DollarSign, Building2 } from 'lucide-react'
import { theme, gradients } from '@/lib/theme'
import { FAQ } from '@/components/FAQ'

const products = [
  {
    id: 'lumina-iq',
    title: 'Lumina IQ',
    tagline: 'AI-Powered Learning Platform',
    description: 'Transform any PDF into an intelligent learning experience. Interactive AI chat, quizzes, and adaptive learning paths.',
    icon: Brain,
    href: '/products/lumina-iq',
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=800',
    features: [
      'Smart PDF processing with RAG & NLP',
      'Interactive AI chat for contextual learning',
      'Auto-generated quizzes and assessments',
      'Personal library with intelligent search'
    ],
    stats: {
      value: '40%',
      label: 'Improvement in test scores'
    },
    gradient: 'from-[#C9A66B] to-[#D4B478]'
  },
  {
    id: 'tabble',
    title: 'Tabble',
    tagline: 'Premium Dining Solution',
    description: 'Elegant tablet ordering system for luxury hotels. Real-time kitchen coordination, guest preferences, and revenue analytics.',
    icon: Utensils,
    href: '/products/tabble',
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=80&w=800',
    features: [
      'Premium tablet interface for guests',
      'Real-time staff dashboard',
      'Guest preferences & dietary tracking',
      'Revenue analytics & insights'
    ],
    stats: {
      value: '30%',
      label: 'Increase in room service orders'
    },
    gradient: 'from-[#D4B478] to-[#E0C084]'
  },
  {
    id: 'data-agent',
    title: 'DataScience Agent',
    tagline: 'Analytical Automation',
    description: 'Intelligent data analysis, automated reporting, and predictive insights powered by AI. Transform raw data into actionable intelligence.',
    icon: BarChart3,
    href: '/products/data-agent',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
    features: [
      'Automated data analysis & reporting',
      'Predictive analytics with ML models',
      'Custom dashboard creation',
      'Data visualization & storytelling'
    ],
    stats: {
      value: '10x',
      label: 'Faster data processing'
    },
    gradient: 'from-[#B8955A] to-[#C9A66B]'
  },
  {
    id: 'hrms',
    title: 'HRMS',
    tagline: 'Employee & Attendance Manager',
    description: 'Complete HR management system. Track attendance, manage leave, monitor performance, and streamline payroll processing.',
    icon: Users,
    href: '/products/hrms',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800',
    features: [
      'Biometric attendance integration',
      'Leave management system',
      'Performance tracking & reviews',
      'Automated payroll processing'
    ],
    stats: {
      value: '60%',
      label: 'Reduction in HR admin time'
    },
    gradient: 'from-[#C9A66B] to-[#B8955A]'
  },
  {
    id: 'feedback-system',
    title: 'Anonymous Feedback',
    tagline: 'Staff-Student Feedback Platform',
    description: 'Secure, anonymous feedback collection for educational institutions. Real-time sentiment analysis and actionable insights.',
    icon: MessageSquare,
    href: '/products/feedback-system',
    image: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&q=80&w=800',
    features: [
      'Anonymous submission system',
      'Real-time sentiment analysis',
      'Categorization & prioritization',
      'Dashboard for actionable insights'
    ],
    stats: {
      value: '85%',
      label: 'Student participation rate'
    },
    gradient: 'from-[#D4B478] to-[#C9A66B]'
  },
  {
    id: 'billing',
    title: 'Billing System',
    tagline: 'Internal Billing Module',
    description: 'Comprehensive billing and invoicing system. Client management, recurring payments, expense tracking, and financial reporting.',
    icon: DollarSign,
    href: '/products/billing',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=800',
    features: [
      'Automated invoice generation',
      'Recurring payment setup',
      'Expense tracking & categorization',
      'Financial reports & tax summaries'
    ],
    stats: {
      value: '50%',
      label: 'Faster invoice processing'
    },
    gradient: 'from-[#E0C084] to-[#D4B478]'
  },
  {
    id: 'crm',
    title: 'CRM Application',
    tagline: 'Business Management System',
    description: 'Full-featured CRM for client management, sales pipeline, task automation, and team collaboration.',
    icon: Building2,
    href: '/products/crm',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
    features: [
      'Contact & lead management',
      'Sales pipeline visualization',
      'Task automation & reminders',
      'Team collaboration tools'
    ],
    stats: {
      value: '3x',
      label: 'Increase in sales conversions'
    },
    gradient: 'from-[#C9A66B] to-[#D4B478]'
  },
  {
    id: 'invoice-generator',
    title: 'Invoice Generator',
    tagline: 'Lightweight Invoice Automation',
    description: 'Simple, fast invoice generation tool. Professional templates, multi-currency support, and PDF export.',
    icon: FileText,
    href: '/products/invoice-generator',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800',
    features: [
      'Professional invoice templates',
      'Multi-currency support',
      'Instant PDF generation',
      'Client & product database'
    ],
    stats: {
      value: '2min',
      label: 'Average invoice creation time'
    },
    gradient: 'from-[#D4B478] to-[#E0C084]'
  }
]

const productFAQs = [
  {
    question: "Which website type is right for my business?",
    answer: "If you're an educational institution, school, or training center, choose our Educational Website. Construction companies, contractors, and builders should select our Construction Website. Restaurants, cafes, and food service businesses will benefit from our Restaurant Website. Each is specifically designed for your industry's unique needs."
  },
  {
    question: "How long does it take to build my website?",
    answer: "Most websites are completed within 2-3 weeks from project kickoff. This includes design, development, content integration, and testing. Rush delivery options are available if you need your site launched sooner."
  },
  {
    question: "Will my website work on mobile devices?",
    answer: "Absolutely! All our websites are mobile-first, meaning they're designed for smartphones and tablets first, then adapted for desktop. Over 70% of your visitors will come from mobile devices, so we ensure a flawless experience across all screen sizes."
  },
  {
    question: "Can I update content myself after launch?",
    answer: "Yes! Every website comes with an easy-to-use content management system (CMS). We provide training so you can update text, images, menus, pricing, and more without any coding knowledge. We also offer ongoing support packages if you prefer hands-off management."
  },
  {
    question: "How do you ensure my website attracts customers?",
    answer: "We implement proven SEO strategies from day one, optimize for local search, integrate with Google Business Profile, and set up conversion-focused design elements. We also include analytics tracking so you can see exactly where your visitors come from and what actions they take."
  },
  {
    question: "What's included in the price?",
    answer: "Everything you need to succeed: custom design, mobile optimization, SEO setup, hosting for the first year, SSL certificate, contact forms, analytics integration, and training. No hidden fees. We provide transparent, all-inclusive pricing."
  }
]

export default function ProductsPage() {
  return (
    <main style={{ backgroundColor: theme.colors.background.primary }}>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2070")'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0b0f1a]/80 to-[#0b0f1a]" />
        
        <div className={`${theme.spacing.container} relative z-10`}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold mb-6" style={{ color: theme.colors.text.primary }}>
              Software Built for Real Businesses
            </h1>
            <p className="text-xl md:text-2xl mb-4" style={{ color: theme.colors.text.secondary }}>
              Eight production-ready solutions. One standard: engineering excellence.
            </p>
            <p className="text-xl md:text-2xl" style={{ color: theme.colors.accent.gold }}>
              From AI learning platforms to business management systems—built by engineers, not agencies.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-24">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="group"
              >
                <Link href={product.href}>
                  <div 
                    className="rounded-2xl overflow-hidden border transition-all duration-500 hover:transform hover:-translate-y-2 hover:shadow-2xl"
                    style={{ 
                      backgroundColor: theme.colors.background.secondary,
                      borderColor: 'rgba(201, 166, 107, 0.2)'
                    }}
                  >
                    {/* Product Image */}
                    <div className="h-64 overflow-hidden relative">
                      <img 
                        src={product.image}
                        alt={product.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-t ${product.gradient} opacity-60`} />
                      
                      {/* Icon Overlay */}
                      <div className="absolute top-6 left-6">
                        <div className="w-16 h-16 rounded-xl bg-white/90 backdrop-blur-sm flex items-center justify-center">
                          <product.icon className={`w-8 h-8 bg-gradient-to-r ${product.gradient} bg-clip-text`} style={{ WebkitTextFillColor: 'transparent' }} />
                        </div>
                      </div>

                      {/* Stats Overlay */}
                      <div className="absolute bottom-6 right-6 text-right">
                        <div className="text-3xl font-bold text-white">{product.stats.value}</div>
                        <div className="text-sm text-white/80">{product.stats.label}</div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-8">
                      <h2 className="text-3xl font-serif font-bold mb-2" style={{ color: theme.colors.text.primary }}>
                        {product.title}
                      </h2>
                      <p className="text-lg mb-4" style={{ color: theme.colors.accent.gold }}>
                        {product.tagline}
                      </p>
                      <p className="mb-6" style={{ color: theme.colors.text.secondary }}>
                        {product.description}
                      </p>

                      {/* Features */}
                      <ul className="space-y-3 mb-8">
                        {product.features.map((feature, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <Shield className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: theme.colors.accent.gold }} />
                            <span style={{ color: theme.colors.text.secondary }}>
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>

                      {/* CTA */}
                      <div className="flex items-center justify-between pt-6 border-t" style={{ borderColor: 'rgba(201, 166, 107, 0.2)' }}>
                        <span className="font-semibold text-lg group-hover:translate-x-2 transition-transform flex items-center gap-2" style={{ color: theme.colors.text.primary }}>
                          Learn More
                          <ArrowRight className="w-5 h-5" />
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-20" style={{ backgroundColor: theme.colors.background.secondary }}>
        <div className={theme.spacing.container}>
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6" style={{ color: theme.colors.text.primary }}>
              Why Organizations Choose Genrec AI
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: Shield,
                title: "Privacy is Non-Negotiable",
                description: "Your data never leaves your infrastructure. On-premise deployment available."
              },
              {
                icon: Zap,
                title: "Weeks, Not Months",
                description: "From pilot to production in 2-4 weeks. Quick wins, lasting impact."
              },
              {
                icon: Award,
                title: "Measurable ROI",
                description: "Clear metrics from day one. Track improvements, celebrate victories."
              },
              {
                icon: Users,
                title: "24/7 Human Support",
                description: "Real engineers, not chatbots. We're here when you need us."
              },
              {
                icon: Brain,
                title: "Industry Expertise",
                description: "We speak your language. Deep domain knowledge in every solution."
              },
              {
                icon: Shield,
                title: "No Vendor Lock-in",
                description: "Open standards, portable architecture. Your freedom guaranteed."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="text-center"
              >
                <div 
                  className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: 'rgba(201, 166, 107, 0.1)' }}
                >
                  <item.icon className="w-8 h-8" style={{ color: theme.colors.accent.gold }} />
                </div>
                <h3 className="text-xl font-bold mb-2" style={{ color: theme.colors.text.primary }}>
                  {item.title}
                </h3>
                <p style={{ color: theme.colors.text.secondary }}>
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ 
        faqs={productFAQs} 
        title="Product Questions"
        subtitle="Common questions about Tabble and Lumina IQ"
      />

      {/* CTA Section */}
      <section className="py-20 border-t" style={{ borderColor: 'rgba(201, 166, 107, 0.1)' }}>
        <div className={theme.spacing.container}>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl font-serif font-bold mb-6" style={{ color: theme.colors.text.primary }}>
              Let's Build Something Real Together
            </h2>
            <p className="text-xl mb-8" style={{ color: theme.colors.text.secondary }}>
              Schedule a personalized demo. See your data in action. No PowerPoints, just results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <button 
                  className="px-8 py-4 rounded-lg font-semibold transition-all hover:scale-105 hover:shadow-xl"
                  style={{ 
                    background: gradients.button,
                    color: theme.colors.text.primary 
                  }}
                >
                  Schedule Your Demo
                  <ArrowRight className="inline-block ml-2 w-5 h-5" />
                </button>
              </Link>
              <Link href="/case-studies">
                <button 
                  className="px-8 py-4 rounded-lg font-semibold border-2 transition-all hover:scale-105"
                  style={{ 
                    borderColor: theme.colors.accent.gold,
                    color: theme.colors.text.primary,
                    backgroundColor: 'transparent'
                  }}
                >
                  View Case Studies
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
