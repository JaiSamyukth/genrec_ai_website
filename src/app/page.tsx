import { Hero } from '@/components/Hero'
import { StatsSection } from '@/components/StatsSection'
import { HowItWorks } from '@/components/HowItWorks'
import { WhyGenrecOptimized } from '@/components/WhyGenrecOptimized'
import { ClientsTrust } from '@/components/ClientsTrust'
import { TestimonialsSection } from '@/components/TestimonialsSection'
import { IntegrationPartners } from '@/components/IntegrationPartners'
import { FAQ } from '@/components/FAQ'
import { CTASection } from '@/components/CTASection'
import { Process } from '@/components/Process'
import { WhyGenrec } from '@/components/WhyGenrec'
import { Testimonials } from '@/components/Testimonials'
import { Integrations } from '@/components/Integrations'
import { FAQSection } from '@/components/FAQSection'
import type { Metadata } from 'next'
import { theme } from '@/lib/theme'

export const metadata: Metadata = {
  title: 'Genrec AI - Privacy-First Enterprise AI Solutions',
  description: "We don't automate people, we amplify them. Engineering-grade AI for construction, hospitality, and education."
}

export default function HomePage() {
  return (
    <div className="flex flex-col" style={{ backgroundColor: theme.colors.background.primary }}>
  <Hero />
  <Process />
  <WhyGenrec />
  <StatsSection />
  <Testimonials />
  <Integrations />
  <FAQSection />
  <CTASection />
  <ClientsTrust />
    </div>
  )
}
