import { Metadata } from 'next'
import { ContactForm } from '@/components/ContactForm'
import { Mail, Clock } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contact Us - Request a Demo',
  description: 'Schedule a 20-minute demo to see how Genrec AI can transform your operations with privacy-first AI solutions.',
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary-bg mb-4">
              Let&apos;s Build Something Great Together
            </h1>
            <p className="text-lg text-muted max-w-2xl mx-auto">
              Schedule a 20-minute demo. We&apos;ll show you a working pilot
              tailored to your use case — because seeing beats reading.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
                <ContactForm />
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <h3 className="font-serif font-bold text-xl text-primary-bg mb-4">
                  Get in Touch
                </h3>
                <div className="space-y-4">
                  <a
                    href="mailto:contact@genrecai.com"
                    className="flex items-start space-x-3 text-gray-600 hover:text-accent-metal transition-colors"
                  >
                    <Mail className="w-5 h-5 mt-0.5" />
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-sm">contact@genrecai.com</p>
                    </div>
                  </a>

                  <div className="flex items-start space-x-3 text-gray-600">
                    <Clock className="w-5 h-5 mt-0.5" />
                    <div>
                      <p className="font-medium">Response Time</p>
                      <p className="text-sm">Within 48 hours</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-primary-bg to-slate-900 rounded-xl p-6 text-white">
                <h3 className="font-serif font-bold text-xl mb-4">
                  What to Expect
                </h3>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start">
                    <span className="text-accent-metal mr-2">✓</span>
                    <span>20-minute focused demo call</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent-metal mr-2">✓</span>
                    <span>Tailored solution presentation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent-metal mr-2">✓</span>
                    <span>Clear pilot roadmap</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent-metal mr-2">✓</span>
                    <span>No obligations or pressure</span>
                  </li>
                </ul>
              </div>

              <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
                <h3 className="font-serif font-bold text-lg text-amber-900 mb-2">
                  Limited Availability
                </h3>
                <p className="text-sm text-amber-800">
                  We work with a select number of enterprises to ensure quality.
                  Limited demo slots available for pilot partnerships.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-sm text-muted">
              We respect your privacy. No third-party selling of data. 
              Read our{' '}
              <a href="/privacy" className="text-accent-metal hover:underline">
                privacy policy
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
