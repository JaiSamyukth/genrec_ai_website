import { theme } from '@/lib/theme'

export const metadata = {
  title: 'Tabble — Luxury Hospitality Table Management',
  description: 'Premium table management app for high-end hotels and restaurants. Luxury UI, seamless operations.'
}

export default function TabblePage() {
  return (
    <div style={{ backgroundColor: theme.colors.background.primary }}>
      <div className={theme.spacing.container}>
        <div className={theme.spacing.maxWidth}>
          <header className="py-12 text-center">
            <h1 className="text-4xl md:text-5xl font-serif font-bold" style={{ color: theme.colors.text.primary }}>Tabble — Luxury Hospitality Table Management</h1>
            <p className="mt-4 text-lg" style={{ color: theme.colors.text.secondary }}>Enhances dining experiences for hotels and restaurants with a luxury, privacy-first approach.</p>
            <div className="mt-8">
              <img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=2000" alt="luxury restaurant interior" className="w-full h-64 object-cover rounded-lg mx-auto" loading="lazy" />
            </div>
          </header>

          <section className="grid grid-cols-1 md:grid-cols-2 gap-8 py-8">
            <div>
              <h2 className="text-2xl font-semibold mb-4" style={{ color: theme.colors.text.primary }}>Purpose</h2>
              <p style={{ color: theme.colors.text.secondary }}>Enhances dining experiences for hotels and restaurants. Integrates table management, customer interactions, and staff operations into a single seamless platform with an emphasis on luxury UX and privacy.</p>

              <h3 className="text-xl font-semibold mt-6 mb-2" style={{ color: theme.colors.text.primary }}>Core Features</h3>
              <ul className="list-disc pl-5" style={{ color: theme.colors.text.secondary }}>
                <li><strong>Customer-Facing (Tablet UI):</strong> Menu browsing, entertainment features, and a ‘Complete Dining’ flow that shows the total bill at checkout.</li>
                <li><strong>Staff-Facing:</strong> Admin dashboard for table management, notifications, and billing operations; Chef interface for kitchen workflow.</li>
                <li><strong>ERP Integration:</strong> Smooth interaction between front-of-house and back-of-house operations.</li>
                <li><strong>Design Philosophy:</strong> Luxury, dark-themed UI with fast, smooth, and intuitive interactions.</li>
                <li><strong>Deployment:</strong> Works on tablets, PCs, and touch TVs. Scales across multiple hotel locations.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2" style={{ color: theme.colors.text.primary }}>Impact / Results</h3>
              <ul className="list-disc pl-5" style={{ color: theme.colors.text.secondary }}>
                <li>Increased guest satisfaction scores by 35% in the first quarter.</li>
                <li>Streamlined staff operations and improved order accuracy.</li>
                <li>Testimonials emphasize enhanced dining experience and intuitive usability.</li>
              </ul>

              <div className="mt-8 p-6 rounded-lg border" style={{ backgroundColor: theme.colors.background.secondary }}>
                <h4 className="text-lg font-semibold" style={{ color: theme.colors.text.primary }}>Experience Tabble</h4>
                <p className="text-sm mb-4" style={{ color: theme.colors.text.secondary }}>Visit Tabble to learn more and request a demo or partnership.</p>
                <div className="mb-4">
                  <img src="https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&q=80&w=1200" alt="dining table setup" className="w-full h-40 object-cover rounded-md" loading="lazy" />
                </div>
                <a href="https://www.tabble.in" target="_blank" rel="noreferrer" className="inline-flex items-center px-5 py-3 rounded-lg font-semibold" style={{ background: `linear-gradient(135deg, ${theme.colors.accent.gold} 0%, ${theme.colors.accent.goldHover} 100%)`, color: theme.colors.text.dark }}>
                  Visit Tabble
                </a>
              </div>
            </div>
          </section>

        </div>
      </div>
    </div>
  )
}
