import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Genrec AI privacy policy - Learn how we protect and handle your data.',
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto prose prose-gray">
          <h1 className="text-4xl font-serif font-bold text-primary-bg mb-8">Privacy Policy</h1>
          
          <p className="text-gray-600 mb-8">
            <strong>Effective Date:</strong> January 20, 2024<br />
            <strong>Last Updated:</strong> January 20, 2024
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-serif font-semibold text-primary-bg mb-4">Our Privacy Promise</h2>
            <p>
              At Genrec AI, we believe your data is yours. We don't sell it, we don't share it
              without your explicit consent, and we use industry-standard security to protect it.
              This policy explains exactly what we collect, why, and how we handle it.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-serif font-semibold text-primary-bg mb-4">Information We Collect</h2>
            
            <h3 className="text-xl font-semibold mb-2">Information You Provide</h3>
            <ul className="list-disc pl-6 mb-4">
              <li>Contact information (name, email, phone) when you request a demo</li>
              <li>Company information for business inquiries</li>
              <li>Any information you include in messages to us</li>
            </ul>

            <h3 className="text-xl font-semibold mb-2">Information Collected Automatically</h3>
            <ul className="list-disc pl-6 mb-4">
              <li>Basic analytics data (page views, referrer) - only with your consent</li>
              <li>Technical information for troubleshooting (browser type, OS)</li>
              <li>No tracking cookies without explicit opt-in</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-serif font-semibold text-primary-bg mb-4">How We Use Your Information</h2>
            <ul className="list-disc pl-6">
              <li>To respond to your inquiries and demo requests</li>
              <li>To provide our services to enterprise clients</li>
              <li>To improve our products and services</li>
              <li>To comply with legal obligations</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-serif font-semibold text-primary-bg mb-4">Data Security</h2>
            <p>
              We implement industry-standard security measures including:
            </p>
            <ul className="list-disc pl-6">
              <li>End-to-end encryption for sensitive data</li>
              <li>Regular security audits</li>
              <li>Limited access controls</li>
              <li>Secure data centers with SOC 2 compliance</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-serif font-semibold text-primary-bg mb-4">Your Rights</h2>
            <p>You have the right to:</p>
            <ul className="list-disc pl-6">
              <li>Access your personal data</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Opt-out of marketing communications</li>
              <li>Export your data in a portable format</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-serif font-semibold text-primary-bg mb-4">Third-Party Services</h2>
            <p>
              We use minimal third-party services:
            </p>
            <ul className="list-disc pl-6">
              <li>Vercel for hosting (no personal data shared)</li>
              <li>Optional: Google Analytics (only with consent)</li>
              <li>Email delivery services (for contact forms)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-serif font-semibold text-primary-bg mb-4">Data Retention</h2>
            <p>
              We retain your data only as long as necessary:
            </p>
            <ul className="list-disc pl-6">
              <li>Demo requests: 2 years or until you request deletion</li>
              <li>Customer data: Duration of business relationship plus legal requirements</li>
              <li>Analytics data: 14 months</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-serif font-semibold text-primary-bg mb-4">Children's Privacy</h2>
            <p>
              Our services are for enterprise clients. We don't knowingly collect
              information from children under 16. If we discover we've collected
              such information, we'll delete it immediately.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-serif font-semibold text-primary-bg mb-4">Updates to This Policy</h2>
            <p>
              We'll notify you of significant changes via email or a prominent
              notice on our website. Continued use after changes constitutes
              acceptance of the updated policy.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-serif font-semibold text-primary-bg mb-4">Contact Us</h2>
            <p>
              Questions about our privacy practices? Contact us:
            </p>
            <ul className="list-none">
              <li>Email: privacy@genrecai.com</li>
              <li>General inquiries: contact@genrecai.com</li>
            </ul>
          </section>

          <section className="mb-8 p-4 bg-gray-50 rounded-lg">
            <h2 className="text-2xl font-serif font-semibold text-primary-bg mb-4">GDPR Compliance</h2>
            <p>
              For EU residents, we comply with GDPR requirements including:
            </p>
            <ul className="list-disc pl-6">
              <li>Legal basis for processing (legitimate interest or consent)</li>
              <li>Data portability rights</li>
              <li>Right to be forgotten</li>
              <li>Data protection officer contact: dpo@genrecai.com</li>
            </ul>
          </section>

          <section className="mb-8 p-4 bg-gray-50 rounded-lg">
            <h2 className="text-2xl font-serif font-semibold text-primary-bg mb-4">CCPA Compliance</h2>
            <p>
              For California residents, we comply with CCPA including:
            </p>
            <ul className="list-disc pl-6">
              <li>Right to know what personal information is collected</li>
              <li>Right to delete personal information</li>
              <li>Right to opt-out of sale (we don't sell your data)</li>
              <li>Right to non-discrimination</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  )
}
