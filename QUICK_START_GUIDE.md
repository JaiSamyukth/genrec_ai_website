# Quick Start Guide - Genrec AI Website

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

```bash
# Install dependencies
npm install

# Set up environment variables (optional)
cp .env.example .env.local

# Run development server
npm run dev
```

Visit `http://localhost:3000` to see the site.

## 📦 New Components Usage

### 1. Hero Section with Exact Animations

```tsx
import { HeroMinimal } from '@/components/HeroMinimal'

export default function Page() {
  return <HeroMinimal />
}
```

**Features:**
- Badge fade animation (180ms, delay 120ms)
- H1 clip-path reveal (420ms)
- CTA hover effects (translateY -3px, scale 1.02)
- Skip link for accessibility
- Respects prefers-reduced-motion

### 2. Feature Cards with Hover Effects

```tsx
import { FeatureCards } from '@/components/FeatureCards'

export default function Page() {
  return <FeatureCards />
}
```

**Features:**
- 6 predefined features (customizable)
- Hover: translateY(-8px), scale(1.01), 160ms
- Edge gradient effect
- Keyboard accessible
- Focus rings

### 3. Stats Counter with Disclaimers

```tsx
import { StatsCounter } from '@/components/StatsCounter'

export default function Page() {
  return <StatsCounter />
}
```

**Features:**
- Animated counters (700ms easeOutQuad)
- Staggered reveal (100ms per stat)
- Honest "Pilot Metrics" disclaimers
- aria-live regions for accessibility

### 4. Process Timeline

```tsx
import { ProcessTimeline } from '@/components/ProcessTimeline'

export default function Page() {
  return <ProcessTimeline />
}
```

**Features:**
- 4 steps: Discover, Design, Develop, Deploy
- Dot pulse animation on reveal
- Connecting line with fill animation (600ms)
- Progressive disclosure for details

### 5. Enhanced Header (Sticky with Hide/Show)

```tsx
// Already integrated in layout.tsx
import { HeaderEnhanced } from '@/components/HeaderEnhanced'

export default function Layout({ children }) {
  return (
    <>
      <HeaderEnhanced />
      <main className="pt-20">{children}</main>
    </>
  )
}
```

**Features:**
- Hides on scroll down, shows on scroll up
- Backdrop blur after 20px scroll
- Mobile: full-screen menu with stagger animation
- Submenu dropdowns

### 6. Cookie Consent Banner

```tsx
// Already integrated in layout.tsx
import { CookieBannerEnhanced } from '@/components/CookieBannerEnhanced'

export default function Layout({ children }) {
  return (
    <>
      {children}
      <CookieBannerEnhanced />
    </>
  )
}
```

**Features:**
- GDPR compliant
- Necessary vs. optional cookies
- Persistent preferences
- Analytics opt-in/out

### 7. Demo Integration (for Product Pages)

```tsx
import { DemoEmbed } from '@/components/demo/DemoEmbed'

export default function ProductPage() {
  return (
    <section className="py-24">
      <h2>Try Lumina IQ</h2>
      
      <div className="h-[600px]">
        <DemoEmbed
          demoUrl="https://demo.genrecai.com/lumina-iq"
          title="Lumina IQ Interactive Demo"
          onEvent={(type, payload) => {
            // Track in your analytics
            console.log('Demo event:', type, payload)
            
            // Example: Vercel Analytics
            if (typeof window !== 'undefined' && window.va) {
              window.va('track', `demo_${type}`, payload)
            }
          }}
          fallbackContent={
            <div className="text-center">
              <p>Demo not available. Please try again later.</p>
              <a href="https://demo.genrecai.com/lumina-iq" target="_blank">
                Open in new tab
              </a>
            </div>
          }
        />
      </div>
    </section>
  )
}
```

**Features:**
- Lazy loading with Intersection Observer
- PostMessage communication
- Security: origin validation
- Error handling with fallback
- Loading skeleton

### 8. SEO Utilities

```tsx
import { generatePageMetadata, createProductSchema } from '@/lib/seo'

// Generate page metadata
export const metadata = generatePageMetadata({
  title: 'Lumina IQ - AI Learning Platform',
  description: 'Transform PDFs into interactive learning',
  path: '/products/lumina-iq',
  image: '/og-images/lumina-iq.png',
})

// Add product schema
export default function ProductPage() {
  const schema = createProductSchema({
    name: 'Lumina IQ',
    description: 'AI-powered learning platform',
    url: 'https://genrecai.com/products/lumina-iq',
    image: 'https://genrecai.com/products/lumina-iq-og.png',
  })

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      {/* Page content */}
    </>
  )
}
```

### 9. Motion Container (for custom animations)

```tsx
import { MotionContainer } from '@/components/animations/MotionContainer'
import { variants } from '@/lib/animations'

export default function MyComponent() {
  return (
    <MotionContainer
      as="section"
      className="py-24"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h2>My Section</h2>
      <p>Content respects user's motion preferences automatically</p>
    </MotionContainer>
  )
}
```

## 🎨 Using Animation Variants

```tsx
import { variants } from '@/lib/animations'

// Badge animation
<motion.div
  initial={variants.badge.initial}
  animate={variants.badge.animate}
>
  Badge content
</motion.div>

// H1 reveal
<motion.h1
  initial={variants.h1.initial}
  animate={variants.h1.animate}
>
  Heading
</motion.h1>

// CTA button
<motion.button
  variants={variants.cta}
  whileHover="hover"
  whileTap="tap"
>
  Click me
</motion.button>

// Card hover
<motion.div
  whileHover={variants.card.hover}
>
  Card content
</motion.div>
```

## 🔧 Configuration

### Environment Variables

Create `.env.local`:

```env
# Email configuration (optional - uses file storage in dev)
SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_USER=your-email@example.com
SMTP_PASS=your-password
CONTACT_EMAIL=contact@genrecai.com

# Analytics (optional)
NEXT_PUBLIC_PLAUSIBLE_DOMAIN=genrecai.com
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

### Customizing Theme

Edit `tailwind.config.ts`:

```ts
theme: {
  extend: {
    colors: {
      'accent-blue': '#081CFF', // Change primary accent
      'accent-blue-hover': '#0618E0',
    },
    // Add custom animations, spacing, etc.
  }
}
```

### Customizing Animations

Edit `src/lib/animations.ts`:

```ts
export const animationDurations = {
  fast: 120,    // ms
  default: 240,
  long: 420,
}

export const easing = {
  smooth: [0.2, 0.9, 0.3, 1],
  easeOut: [0.4, 0, 0.2, 1],
}
```

## 📝 Content Guidelines

### Stats Section
Always include disclaimers for pilot metrics:

```tsx
{
  label: 'Enterprise Pilots',
  value: 15,
  suffix: '+',
  disclaimer: 'Active pilot programs across construction, hospitality, and education sectors',
}
```

### Testimonials
Use real testimonials or clearly mark as demo:

```tsx
{
  name: 'John Doe',
  role: 'CTO at Company (Demo Testimonial)',
  content: '...',
}
```

### Features
Be honest about capabilities:
- ✅ "Pilot programs in 3 industries"
- ❌ "500+ Enterprise Clients" (unless verified)

## 🧪 Testing

```bash
# Type checking
npm run type-check

# Linting
npm run lint

# Format code
npm run format

# Run tests
npm run test

# E2E tests
npm run test:e2e

# Build for production
npm run build
```

## 📊 Performance Monitoring

### Check Build Output

```bash
npm run build

# Look for:
# - First Load JS < 120KB per page
# - No large bundle warnings
```

### Lighthouse Audit

```bash
# Install lighthouse
npm install -g lighthouse

# Run audit
lighthouse http://localhost:3000 --view

# Target scores:
# Performance: ≥95
# Accessibility: ≥96
# Best Practices: ≥95
# SEO: ≥95
```

## 🚀 Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel

# Production
vercel --prod
```

### Environment Variables on Vercel
Add in Vercel dashboard under Settings → Environment Variables:
- `SMTP_HOST`
- `SMTP_USER`
- `SMTP_PASS`
- `CONTACT_EMAIL`

### Other Platforms

```bash
# Build static export
npm run build

# Output: .next directory
# Deploy .next to any hosting platform
```

## 🔍 Troubleshooting

### Animations not working
- Check console for errors
- Verify `prefers-reduced-motion` is not enabled
- Ensure Framer Motion is installed: `npm install framer-motion`

### Contact form failing
- Check environment variables are set
- Verify SMTP credentials
- Check network tab for API errors
- Rate limit: wait 1 minute if hitting limit

### Demo iframe not loading
- Verify CSP headers in next.config.js
- Check demo URL is accessible
- Verify origin validation in DemoEmbed
- Check browser console for CSP violations

### Type errors
```bash
npm run type-check
```

Fix any TypeScript errors reported.

### Build errors
```bash
# Clear cache
rm -rf .next node_modules
npm install
npm run build
```

## 📚 Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Framer Motion API](https://www.framer.com/motion/)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Accessibility Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)

## 🆘 Support

For issues or questions:
1. Check `IMPLEMENTATION_SPEC.md` for detailed documentation
2. Review component source code in `src/components/`
3. Check browser console for errors
4. Verify environment configuration

## ✅ Checklist for New Pages

- [ ] Add page to sitemap
- [ ] Generate metadata with `generatePageMetadata()`
- [ ] Add structured data (schema.org)
- [ ] Use semantic HTML5 elements
- [ ] Add ARIA labels where needed
- [ ] Test keyboard navigation
- [ ] Test with screen reader
- [ ] Run Lighthouse audit
- [ ] Check mobile responsiveness
- [ ] Verify all images have alt text
- [ ] Add loading states for dynamic content
- [ ] Test error states
- [ ] Add proper focus management

Done! Your page is ready for production.
