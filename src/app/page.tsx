import { HeroParallax } from '@/components/HeroParallax'
import { OurWork } from '@/components/OurWork'
import { WorkShowcase } from '@/components/WorkShowcase'
import { WhoWeAre } from '@/components/WhoWeAre'
import { OurEthos } from '@/components/OurEthos'
import { WorkWithUs } from '@/components/WorkWithUs'
import { FooterRedesign } from '@/components/FooterRedesign'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Genrec AI - Built by Precision. Driven by Purpose.',
  description: 'We build intelligent systems that work where others fail — software designed for performance, not pretense.'
}

export default function HomePage() {
  return (
    <div className="flex flex-col bg-primary-bg">
      <HeroParallax />
      <OurWork />
      <WorkShowcase />
      <WhoWeAre />
      <OurEthos />
      <WorkWithUs />
      <FooterRedesign />
    </div>
  )
}
