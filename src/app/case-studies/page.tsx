import { Metadata } from 'next'
import Link from 'next/link'
import { Building, Hotel, GraduationCap, ChefHat, Clock, Users, TrendingUp, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Case Studies',
  description: 'Real-world implementations of Genrec AI solutions across construction, hospitality, and education.',
}

const caseStudies = [
  {
    id: 'sitepilot',
    title: 'SitePilot Construction',
    client: 'Mid-size Commercial Builder',
    industry: 'Construction',
    icon: Building,
    duration: '12 weeks',
    teamSize: '200+ workers',
    challenge: 'Manual progress tracking was taking 8+ hours weekly and missing critical updates.',
    solution: 'Implemented Construct AI with photo-based tracking and automated reporting.',
    results: [
      { metric: '60%', description: 'Reduction in reporting time' },
      { metric: '85%', description: 'Progress prediction accuracy' },
      { metric: 'Zero', description: 'Safety incidents during pilot' },
    ],
    quote: "Construct AI transformed how we track progress. What took hours now happens automatically.",
    quoteAuthor: 'Project Manager',
    gradient: 'from-green-500 to-emerald-600',
    tags: ['Photo Analysis', 'Automation', 'Safety'],
    isDemo: true,
  },
  {
    id: 'hotel-azure',
    title: 'Hotel Azure',
    client: 'Boutique Luxury Hotel',
    industry: 'Hospitality',
    icon: Hotel,
    duration: '8 weeks',
    teamSize: '40 rooms',
    challenge: 'Generic ordering systems were damaging the premium dining experience.',
    solution: 'Deployed Tabble with custom UI matching hotel aesthetics and chef preferences.',
    results: [
      { metric: '30%', description: 'Increase in room service' },
      { metric: '4.8/5', description: 'Guest satisfaction score' },
      { metric: '25%', description: 'Reduction in order errors' },
    ],
    quote: "Tabble elevated our dining service to match our luxury standards.",
    quoteAuthor: 'General Manager',
    gradient: 'from-amber-500 to-orange-600',
    tags: ['Luxury', 'UX Design', 'Integration'],
    isDemo: true,
  },
  {
    id: 'riverside-academy',
    title: 'Riverside Academy',
    client: 'Private K-12 School',
    industry: 'Education',
    icon: GraduationCap,
    duration: '16 weeks',
    teamSize: '500 students',
    challenge: 'One-size-fits-all curriculum leaving advanced students bored, struggling students behind.',
    solution: 'Lumina IQ created personalized learning paths based on individual progress.',
    results: [
      { metric: '40%', description: 'Improvement in test scores' },
      { metric: '2x', description: 'Student engagement increase' },
      { metric: '90%', description: 'Teacher satisfaction' },
    ],
    quote: "Finally, technology that helps us teach each student at their level.",
    quoteAuthor: 'Academic Director',
    gradient: 'from-blue-500 to-indigo-600',
    tags: ['Personalization', 'Analytics', 'Assessment'],
    isDemo: true,
  },
  {
    id: 'metro-grill-chain',
    title: 'Metro Grill Chain',
    client: 'Regional Restaurant Group',
    industry: 'Restaurant',
    icon: ChefHat,
    duration: '10 weeks',
    teamSize: '8 locations',
    challenge: 'Disconnected systems causing order delays and inventory mismatches.',
    solution: 'Restaurant Tech Suite integrated ordering, kitchen, and inventory systems.',
    results: [
      { metric: '35%', description: 'Faster order processing' },
      { metric: '50%', description: 'Reduction in food waste' },
      { metric: '20%', description: 'Increase in revenue' },
    ],
    quote: "The integration solved problems we didn't even know we had.",
    quoteAuthor: 'Operations Director',
    gradient: 'from-purple-500 to-pink-600',
    tags: ['Integration', 'Efficiency', 'Analytics'],
    isDemo: true,
  },
]

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-bg to-slate-900 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-light-text mb-6">
              Real Results, Real Impact
            </h1>
            <p className="text-xl text-muted">
              See how enterprises across industries are transforming
              their operations with Genrec AI solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto text-center">
            <div>
              <p className="text-3xl font-bold text-accent-metal">15+</p>
              <p className="text-sm text-muted">Enterprise Pilots</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-accent-metal">98%</p>
              <p className="text-sm text-muted">Client Retention</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-accent-metal">4-6</p>
              <p className="text-sm text-muted">Weeks to Deploy</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-accent-metal">3x</p>
              <p className="text-sm text-muted">Average ROI</p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="space-y-12 max-w-6xl mx-auto">
            {caseStudies.map((study, index) => {
              const Icon = study.icon
              return (
                <div
                  key={study.id}
                  className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-xl transition-shadow"
                >
                  <div className={`h-2 bg-gradient-to-r ${study.gradient}`} />
                  
                  <div className="p-8 lg:p-12">
                    <div className="flex flex-col lg:flex-row gap-8">
                      {/* Left Column */}
                      <div className="lg:w-2/3">
                        <div className="flex items-start justify-between mb-6">
                          <div>
                            <div className="flex items-center gap-3 mb-2">
                              <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${study.gradient} flex items-center justify-center`}>
                                <Icon className="w-6 h-6 text-white" />
                              </div>
                              <div>
                                <h2 className="text-3xl font-serif font-bold text-primary-bg">
                                  {study.title}
                                </h2>
                                <p className="text-muted">{study.client}</p>
                              </div>
                            </div>
                          </div>
                          {study.isDemo && (
                            <span className="px-3 py-1 bg-amber-100 text-amber-700 text-xs rounded-full">
                              Demo Case Study
                            </span>
                          )}
                        </div>

                        <div className="space-y-6">
                          <div>
                            <h3 className="font-semibold text-primary-bg mb-2">The Challenge</h3>
                            <p className="text-gray-600">{study.challenge}</p>
                          </div>

                          <div>
                            <h3 className="font-semibold text-primary-bg mb-2">Our Solution</h3>
                            <p className="text-gray-600">{study.solution}</p>
                          </div>

                          <div>
                            <h3 className="font-semibold text-primary-bg mb-3">Key Results</h3>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                              {study.results.map((result, i) => (
                                <div key={i} className="bg-gray-50 rounded-lg p-4 text-center">
                                  <p className="text-2xl font-bold text-accent-metal">
                                    {result.metric}
                                  </p>
                                  <p className="text-sm text-gray-600">{result.description}</p>
                                </div>
                              ))}
                            </div>
                          </div>

                          <blockquote className="border-l-4 border-accent-metal pl-4 italic text-gray-700">
                            "{study.quote}"
                            <footer className="mt-2 text-sm text-muted not-italic">
                              — {study.quoteAuthor}
                            </footer>
                          </blockquote>
                        </div>
                      </div>

                      {/* Right Column */}
                      <div className="lg:w-1/3">
                        <div className="bg-gray-50 rounded-xl p-6 space-y-4">
                          <h4 className="font-semibold text-primary-bg">Project Details</h4>
                          
                          <div className="space-y-3">
                            <div className="flex items-center justify-between">
                              <span className="text-sm text-muted flex items-center">
                                <Clock className="w-4 h-4 mr-2" />
                                Duration
                              </span>
                              <span className="text-sm font-medium">{study.duration}</span>
                            </div>
                            
                            <div className="flex items-center justify-between">
                              <span className="text-sm text-muted flex items-center">
                                <Users className="w-4 h-4 mr-2" />
                                Scale
                              </span>
                              <span className="text-sm font-medium">{study.teamSize}</span>
                            </div>
                            
                            <div className="flex items-center justify-between">
                              <span className="text-sm text-muted flex items-center">
                                <TrendingUp className="w-4 h-4 mr-2" />
                                Industry
                              </span>
                              <span className="text-sm font-medium">{study.industry}</span>
                            </div>
                          </div>

                          <div className="pt-4 border-t">
                            <p className="text-sm text-muted mb-2">Technologies Used</p>
                            <div className="flex flex-wrap gap-2">
                              {study.tags.map((tag) => (
                                <span
                                  key={tag}
                                  className="text-xs px-2 py-1 bg-white text-gray-600 rounded border"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                          </div>

                          <Link
                            href={`/case-studies/${study.id}`}
                            className="mt-4 w-full inline-flex items-center justify-center px-4 py-2 bg-primary-bg text-white rounded-lg hover:bg-primary-bg/90 transition-colors"
                          >
                            Read Full Story
                            <ArrowRight className="w-4 h-4 ml-2" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Disclaimer */}
          <div className="mt-12 text-center">
            <p className="text-sm text-muted">
              * These are demonstration case studies with sample metrics for illustration.
              Actual client names and specific details are confidential.
            </p>
          </div>

          {/* CTA Section */}
          <div className="mt-20 max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-serif font-bold text-primary-bg mb-4">
              Ready to Write Your Success Story?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Let's discuss how Genrec AI can transform your operations.
              Start with a pilot, scale when you see results.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-accent-metal text-white rounded-lg hover:bg-accent-metal/90 transition-colors text-lg"
            >
              Start Your Pilot Project →
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
