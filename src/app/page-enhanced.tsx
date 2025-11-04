import { HeroMinimal } from '@/components/HeroMinimal'
import { FeatureCards } from '@/components/FeatureCards'
import { StatsCounter } from '@/components/StatsCounter'
import { ProcessTimeline } from '@/components/ProcessTimeline'
import { OurWork } from '@/components/OurWork'
import { LuminaIQSection } from '@/components/LuminaIQSection'
import { WhoWeAre } from '@/components/WhoWeAre'
import { OurEthos } from '@/components/OurEthos'
import { WorkWithUs } from '@/components/WorkWithUs'
import { FooterRedesign } from '@/components/FooterRedesign'
import type { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/seo'

export const metadata: Metadata = generatePageMetadata({
  title: 'Genrec AI - Privacy-First Engineering for Enterprise Dominance',
  description: 'We don\'t just build software, we create leverage for your business. From custom CRMs to AI learning platforms, we create tools that adapt, evolve, and scale.',
  path: '/',
})

/**
 * Enhanced home page using all new spec-compliant components
 * 
 * Components used:
 * - HeroMinimal: Spec-compliant hero with exact animations
 * - FeatureCards: 6 features with hover animations
 * - StatsCounter: Animated counters with honest disclaimers
 * - ProcessTimeline: 4-step process with dot pulse animations
 * 
 * Performance optimizations:
 * - All components use MotionContainer for reduced-motion support
 * - Images lazy-loaded via Intersection Observer
 * - Critical CSS inlined via layout
 * - Fonts preloaded
 */
export default function EnhancedHomePage() {
  return (
    <div className="flex flex-col bg-white">
      {/* Hero Section - Spec-compliant animations */}
      <HeroMinimal />

      {/* Feature Cards - 6 features with hover effects */}
      <FeatureCards />

      {/* Stats Section - Animated counters with disclaimers */}
      <StatsCounter />

      {/* Process Timeline - 4 steps with scroll animations */}
      <ProcessTimeline />

      {/* Our Work / Portfolio Section */}
      <OurWork />

      {/* Lumina IQ Product Highlight */}
      <LuminaIQSection />

      {/* About / Who We Are */}
      <WhoWeAre />

      {/* Our Ethos / Values */}
      <OurEthos />

      {/* Contact CTA Section */}
      <WorkWithUs />

      {/* Footer */}
      <FooterRedesign />
    </div>
  )
}
