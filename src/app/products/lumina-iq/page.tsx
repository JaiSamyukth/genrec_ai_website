import { theme } from '@/lib/theme'
import Link from 'next/link'

export const metadata = {
  title: 'Lumina IQ — AI Learning Platform',
  description: 'Personalized learning at scale. Privacy-first, SOC 2 Type II compliant.'
}

export default function LuminaPage() {
  return (
    <div style={{ backgroundColor: theme.colors.background.primary }}>
      <div className={theme.spacing.container}>
        <div className={theme.spacing.maxWidth}>
          <header className="py-12 text-center">
            <h1 className="text-4xl md:text-5xl font-serif font-bold" style={{ color: theme.colors.text.primary }}>Lumina IQ — AI Learning Platform</h1>
            <p className="mt-4 text-lg" style={{ color: theme.colors.text.secondary }}>Personalized learning at scale for educational institutions. Privacy-first and engineered for impact.</p>
            <div className="mt-8">
              <img src="https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&q=80&w=2000" alt="students learning with tablets" className="w-full h-64 object-cover rounded-lg mx-auto" loading="lazy" />
            </div>
          </header>

          <section className="grid grid-cols-1 md:grid-cols-2 gap-8 py-8">
            <div>
              <h2 className="text-2xl font-semibold mb-4" style={{ color: theme.colors.text.primary }}>Purpose</h2>
              <p style={{ color: theme.colors.text.secondary }}>Personalized learning at scale for educational institutions. Uses AI to adapt lessons, exercises, and assessments to each student’s level and pace. Focused on enhancing learning outcomes while making educators’ workflows more efficient.</p>

              <h3 className="text-xl font-semibold mt-6 mb-2" style={{ color: theme.colors.text.primary }}>Core Features</h3>
              <ul className="list-disc pl-5" style={{ color: theme.colors.text.secondary }}>
                <li><strong>Adaptive Learning:</strong> AI assesses student performance in real-time and customizes content to their skill level.</li>
                <li><strong>Analytics & Insights:</strong> Actionable data on student progress for teachers and admins.</li>
                <li><strong>Scalability:</strong> Supports thousands of students simultaneously.</li>
                <li><strong>Privacy-First:</strong> Student data is secure; no third-party access. SOC 2 Type II compliant.</li>
                <li><strong>Content Flexibility:</strong> Integrates with existing course materials or digital textbooks.</li>
                <li><strong>Gamified Engagement:</strong> Optional gamification to motivate students.</li>
                <li><strong>Outcome Tracking:</strong> Tracks improvements, mastery, and learning gaps.</li>
              </ul>

              <h3 className="text-xl font-semibold mt-6 mb-2" style={{ color: theme.colors.text.primary }}>Target Users</h3>
              <p style={{ color: theme.colors.text.secondary }}>Private schools, universities, online learning platforms, teachers and administrators seeking personalized education at scale.</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2" style={{ color: theme.colors.text.primary }}>Impact / Results</h3>
              <ul className="list-disc pl-5" style={{ color: theme.colors.text.secondary }}>
                <li>Personalizes learning for 10,000+ students.</li>
                <li>Significant improvements in engagement and test performance during pilot programs.</li>
                <li>Testimonials highlight extraordinary results and efficiency gains for educators.</li>
              </ul>

              <div className="mt-8 p-6 rounded-lg border" style={{ backgroundColor: theme.colors.background.secondary }}>
                <h4 className="text-lg font-semibold" style={{ color: theme.colors.text.primary }}>Ready to personalize learning?</h4>
                <p className="text-sm mb-4" style={{ color: theme.colors.text.secondary }}>Schedule a demo and see a working pilot tailored to your institution.</p>
                <div className="mb-4">
                  <img src="https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&q=80&w=1200" alt="teacher reviewing student analytics" className="w-full h-40 object-cover rounded-md" loading="lazy" />
                </div>
                <Link href="/contact" className="inline-flex items-center px-5 py-3 rounded-lg font-semibold" style={{ background: `linear-gradient(135deg, ${theme.colors.accent.gold} 0%, ${theme.colors.accent.goldHover} 100%)`, color: theme.colors.text.dark }}>
                  Request a Demo
                </Link>
              </div>
            </div>
          </section>

        </div>
      </div>
    </div>
  )
}
