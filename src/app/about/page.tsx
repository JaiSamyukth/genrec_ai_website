import { Metadata } from 'next'
import { FoundersPreview } from '@/components/FoundersPreview'
import { Target, Users, Lightbulb, Code } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about Genrec AI - an engineering studio building privacy-first, enterprise-grade AI solutions for construction, hospitality, and education.',
}

const values = [
  {
    icon: Target,
    title: 'Mission-Driven',
    description: "We're here to make AI work for real businesses, not to chase hype. Every line of code serves a purpose.",
  },
  {
    icon: Users,
    title: 'Client-First',
    description: "Your success is our success. We don't build what we think you need — we build what actually solves your problems.",
  },
  {
    icon: Lightbulb,
    title: 'Innovation with Restraint',
    description: "We use cutting-edge tech when it makes sense, proven solutions when it doesn't. Pragmatism beats novelty.",
  },
  {
    icon: Code,
    title: 'Engineering Excellence',
    description: "Clean code, proper documentation, and systems that scale. We build like we'll maintain it forever — because we might.",
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-bg to-slate-900 py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-light-text mb-6">
              Engineering AI That Actually Works
            </h1>
            <p className="text-xl text-muted">
              We're not another AI consultancy. We're engineers who build
              production-ready systems for enterprises that care about privacy,
              reliability, and results.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary-bg mb-8 text-center">
              Our Story
            </h2>
            <div className="prose prose-lg mx-auto text-gray-700">
              <p>
                Genrec AI started with a simple observation: most AI solutions
                are built for Silicon Valley, not for construction sites,
                hotel dining rooms, or classrooms.
              </p>
              <p>
                We saw enterprises struggling with generic AI tools that didn't
                understand their workflows, didn't protect their data, and
                didn't deliver measurable ROI. So we decided to build something
                different.
              </p>
              <p>
                Today, we're an engineering studio focused on three industries
                where we can make the biggest impact: construction, hospitality,
                and education. We build privacy-first, domain-specific AI systems
                that solve real problems for real businesses.
              </p>
              <p>
                We're not trying to be everything to everyone. We're focused
                on being the best engineering partner for enterprises that need
                AI that actually works in production.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary-bg mb-12 text-center">
              Our Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {values.map((value, index) => {
                const Icon = value.icon
                return (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-accent-metal/10 rounded-lg flex items-center justify-center">
                        <Icon className="w-6 h-6 text-accent-metal" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-primary-bg mb-2">
                        {value.title}
                      </h3>
                      <p className="text-gray-600">
                        {value.description}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <FoundersPreview />

      {/* Approach Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary-bg mb-8 text-center">
              Our Approach
            </h2>
            <div className="space-y-6">
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-primary-bg mb-3">
                  1. Listen First
                </h3>
                <p className="text-gray-600">
                  We start by understanding your actual problems, not selling you
                  solutions. Every engagement begins with deep discovery.
                </p>
              </div>
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-primary-bg mb-3">
                  2. Build Small, Prove Value
                </h3>
                <p className="text-gray-600">
                  We run 4-6 week pilots with real data and real users.
                  No PowerPoints — just working software you can test.
                </p>
              </div>
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-primary-bg mb-3">
                  3. Scale Thoughtfully
                </h3>
                <p className="text-gray-600">
                  Once we've proven value, we help you deploy across your
                  organization with proper training, support, and documentation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-primary-bg to-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-light-text mb-6">
              Ready to Work Together?
            </h2>
            <p className="text-xl text-muted mb-8">
              Let's discuss how we can help transform your operations with
              privacy-first AI that actually delivers results.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-accent-metal text-white rounded-lg hover:bg-accent-metal/90 transition-colors text-lg font-medium"
            >
              Schedule a Conversation →
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
