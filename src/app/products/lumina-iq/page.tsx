import { theme } from '@/lib/theme'
import Link from 'next/link'

export const metadata = {
  title: 'LuminaIQ — Transform PDFs into Intelligent Learning Experiences',
  description: 'Turn static documents into interactive conversations. AI-powered learning that adapts to you.'
}

export default function LuminaPage() {
  return (
    <div style={{ backgroundColor: theme.colors.background.primary }}>
      <div className={theme.spacing.container}>
        <div className={theme.spacing.maxWidth}>
          <header className="py-12 text-center">
            <h1 className="text-4xl md:text-5xl font-serif font-bold" style={{ color: theme.colors.text.primary }}>LuminaIQ</h1>
            <p className="mt-4 text-xl" style={{ color: theme.colors.text.secondary }}>Transform any PDF into a living, intelligent learning experience. It's not just study automation. It's cognitive augmentation.</p>
            <div className="mt-8">
              <img src="https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&q=80&w=2000" alt="students learning with tablets" className="w-full h-64 object-cover rounded-lg mx-auto" loading="lazy" />
            </div>
          </header>

          <section className="grid grid-cols-1 md:grid-cols-2 gap-8 py-8">
            <div>
              <h2 className="text-2xl font-semibold mb-4" style={{ color: theme.colors.text.primary }}>What is LuminaIQ?</h2>
              <p style={{ color: theme.colors.text.secondary }}>Personalized learning at scale for educational institutions. Uses AI to adapt lessons, exercises, and assessments to each student’s level and pace. Focused on enhancing learning outcomes while making educators’ workflows more efficient.</p>

              <h3 className="text-xl font-semibold mt-6 mb-2" style={{ color: theme.colors.text.primary }}>Features</h3>
              <ul className="list-disc pl-5" style={{ color: theme.colors.text.secondary }}>
                <li><strong>Smart PDF Processing</strong> — AI reads, understands, and extracts insights from any document.</li>
                <li><strong>Interactive AI Chat</strong> — Ask, learn, and explore through natural conversation.</li>
                <li><strong>Question Generation</strong> — Auto-generate questions to test understanding.</li>
                <li><strong>Quiz Mode</strong> — Reinforce knowledge through adaptive quizzes.</li>
                <li><strong>Smart Notes</strong> — Seamlessly integrated AI-powered notes.</li>
                <li><strong>Personal Library</strong> — Organize all your materials with intelligent search and categorization.</li>
                <li><strong>Learning Streaks</strong> — Stay motivated with daily learning goals and progress tracking.</li>
              </ul>

              <h3 className="text-xl font-semibold mt-6 mb-2" style={{ color: theme.colors.text.primary }}>How It Works</h3>
              <p style={{ color: theme.colors.text.secondary }}><strong>1. Upload.</strong> Drag and drop any PDF. Our system processes it instantly using advanced RAG and NLP models.<br/><br/><strong>2. Learn.</strong> Ask anything — get deep, contextual answers with examples, analogies, and summaries.<br/><br/><strong>3. Master.</strong> Generate quizzes, track your learning streak, and convert theory into clarity.</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2" style={{ color: theme.colors.text.primary }}>Who We Are</h3>
              <p className="mb-4" style={{ color: theme.colors.text.secondary }}>
                Genrec AI was founded by <strong>Jai Samyukth B U</strong> and <strong>Shyamnath Sankar</strong>, with <strong>Harish V</strong> as technical lead. 
                We build from nothing but code, caffeine, and conviction. No investors. No paid tools. No noise. Just pure engineering.
              </p>

              <div className="mt-8 p-6 rounded-lg border" style={{ backgroundColor: theme.colors.background.secondary }}>
                <h4 className="text-lg font-semibold" style={{ color: theme.colors.text.primary }}>Join the Waitlist</h4>
                <p className="text-sm mb-4" style={{ color: theme.colors.text.secondary }}>Experience the next generation of AI learning. Be among the first to transform how you learn.</p>
                <div className="mb-4">
                  <img src="https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&q=80&w=1200" alt="teacher reviewing student analytics" className="w-full h-40 object-cover rounded-md" loading="lazy" />
                </div>
                <Link href="/contact" className="inline-flex items-center px-5 py-3 rounded-lg font-semibold" style={{ background: `linear-gradient(135deg, ${theme.colors.accent.gold} 0%, ${theme.colors.accent.goldHover} 100%)`, color: theme.colors.text.dark }}>
                  Join the Waitlist
                </Link>
              </div>
            </div>
          </section>

        </div>
      </div>
    </div>
  )
}
