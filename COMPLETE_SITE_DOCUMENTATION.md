# GENREC AI WEBSITE - COMPLETE DOCUMENTATION

**Last Updated:** November 9, 2025  
**Version:** 2.1

---

## WEBSITE OVERVIEW

The Genrec AI website is a comprehensive Next.js 14 application featuring multiple pages, an admin panel for content management, blog functionality, and specialized product showcases. The site serves as both a marketing platform and a functional content management system.

### All Pages & Routes

**Public Pages:**
1. **Homepage** (`/`) - Main landing page with portfolio showcase
2. **About** (`/about`) - Company story, values, and team
3. **Products** (`/products`) - Overview of three specialized website solutions
4. **Product Pages:**
   - **LuminaIQ** (`/products/lumina-iq`) - AI learning platform (Complete v2.1)
   - **Tabble** (`/products/tabble`) - Premium dining solution (Complete v2.1)
   - Educational Website (`/products/educational-website`)
   - Construction Website (`/products/construction-website`)
   - Restaurant Website (`/products/restaurant-website`)
5. **Divisions** (`/divisions`) - Four operational divisions
6. **Careers** (`/careers`) - Job openings and company culture
7. **Case Studies** (`/case-studies`) - Client success stories
8. **Blog** (`/blog`) - Insights and articles
9. **Contact** (`/contact`) - Inquiry and demo request form
10. **Privacy Policy** (`/privacy`) - Data privacy information

**Admin & Utility Pages:**
11. **Admin Panel** (`/admin`) - Content management system
    - Blog Admin (Create/Edit/Delete posts)
    - Gallery Admin (Image upload and management)
12. **Error Pages:**
    - 404 Not Found (`/not-found`)
    - Error Boundary (`/error`)
    - Global Error (`/global-error`)
    - Loading State (`/loading`)

**API Routes:**
- `/api/contact` - Contact form submission
- `/api/auth` - Admin authentication
- `/api/gallery` - Image upload and retrieval

**SEO & Meta:**
- `/robots.txt` - Search engine rules
- `/sitemap.xml` - Dynamic sitemap

---

## TABLE OF CONTENTS

1. [Brand Overview](#brand-overview)
2. [Design System](#design-system)
3. [All Text Content](#all-text-content)
4. [Animations & Effects](#animations--effects)
5. [Page-by-Page Breakdown](#page-by-page-breakdown)
6. [Component Library](#component-library)
7. [Technical Architecture](#technical-architecture)

---

## BRAND OVERVIEW

### Company Identity
- **Name:** Genrec AI
- **Logo:** "Genrec" (Black) + "AI" (Gold)
- **Tagline:** "Built by precision. Driven by purpose."
- **Core Message:** "We build intelligent systems that work where others fail — software designed for performance, not pretense."

### Brand Philosophy
- **No investors. No paid tools. No noise. Just pure engineering.**
- **Innovation isn't a tagline — it's survival.**
- **We don't chase trends. We build products that outlast them.**

### Founders
1. **Jai Samyukth B U** - Co-Founder & Chief Architect
2. **Shyamnath Sankar** - Co-Founder & Co-CEO  
3. **Harish V** - Technical Lead

---

## DESIGN SYSTEM

### Color Palette

#### Primary Colors
```css
Primary Background: #FFFFFF (White)
Accent Metal (Gold): #C9A66B
Accent Metal Light: #D4B47E
Accent Metal Dark: #B89558
```

#### Secondary Colors
```css
Light Text: #000000 (Black)
Secondary Text: #6B7280 (Gray)
Muted Text: #9AA3B2
```

#### Dark Theme (Alternative)
```css
Background Primary: #0b0f1a (Midnight Black)
Background Secondary: #111827
Background Tertiary: #1f2937
Text Primary: #F7F7F7 (Crisp White)
```

#### Semantic Colors
```css
Success: #48BB78 / #10b981
Warning: #ED8936 / #f59e0b
Error: #F56565 / #ef4444
Info: #4299E1 / #3b82f6
```

### Typography

#### Font Families
```css
Heading Font: 'Merriweather', Georgia, serif
Body Font: 'Inter', system-ui, sans-serif
```

#### Font Sizes
```css
xs: 0.75rem (12px)
sm: 0.875rem (14px)
base: 1rem (16px)
lg: 1.125rem (18px)
xl: 1.25rem (20px)
2xl: 1.5rem (24px)
3xl: 1.875rem (30px)
4xl: 2.25rem (36px)
5xl: 3rem (48px)
6xl: 3.75rem (60px)
7xl: 4.5rem (72px)
8xl: 6rem (96px)
9xl: 8rem (128px)
```

#### Font Weights
```css
Light: 300
Normal: 400
Medium: 500
Semibold: 600
Bold: 700
Extrabold: 800
Black: 900
```

### Spacing System
```css
xs: 0.25rem (4px)
sm: 0.5rem (8px)
md: 1rem (16px)
lg: 1.5rem (24px)
xl: 2rem (32px)
2xl: 3rem (48px)
3xl: 4rem (64px)
4xl: 6rem (96px)
5xl: 8rem (128px)
```

### Border Radius
```css
none: 0
sm: 0.125rem (2px)
md: 0.375rem (6px)
lg: 0.5rem (8px)
xl: 0.75rem (12px)
2xl: 1rem (16px)
3xl: 1.5rem (24px)
full: 9999px
```

### Shadows
```css
sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05)
md: 0 4px 6px -1px rgba(0, 0, 0, 0.1)
lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1)
xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1)
2xl: 0 25px 50px -12px rgba(0, 0, 0, 0.25)
inner: inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)
```

### Gradients
```css
Hero: bg-gradient-to-b from-[#0b0f1a] via-[#111827] to-[#0b0f1a]
Card: bg-gradient-to-br from-[#111827] to-[#1f2937]
Button: bg-gradient-to-r from-[#C9A66B] to-[#D4B478]
Button Hover: bg-gradient-to-r from-[#D4B478] to-[#E0C084]
Text Gradient: bg-gradient-to-r from-[#C9A66B] to-[#D4B478] bg-clip-text
Gold Shine: bg-gradient-to-r from-[#B8955A] via-[#C9A66B] to-[#D4B478]
```

---

## ALL TEXT CONTENT

### Homepage

#### Hero Section
**Main Headline:**
```
Built by precision.
Driven by purpose.
```

**Subheading:**
```
We build intelligent systems that work where others fail —
software designed for performance, not pretense.
```

**CTA Buttons:**
- "EXPLORE OUR WORK"
- "LEARN ABOUT LUMINAIQ"

#### Work Showcase Section
**Section Title:** "Our Work Speaks in Results"

**Featured Projects:**
1. Enterprise CRM Dashboard
2. Automation Dashboard Interface
3. Feedback System Platform
4. Intelligent Web Application
5. LuminaIQ AI Platform

#### Who We Are Section
**Heading:** "Who We Are"

**Description:**
```
Founded by Jai Samyukth B U and Shyamnath Sankar, with Harish V as Technical Lead.

We build from nothing but code, caffeine, and conviction.
No investors. No paid tools. No noise. Just pure engineering.
```

**Founder Bios:**

**Jai Samyukth B U - Co-Founder**
- "Building intelligent systems from first principles."

**Shyamnath Sankar - Co-Founder**
- "Engineering precision into every line of code."

**Harish V - Technical Lead**
- "Architecting scalable solutions that endure."

#### Our Ethos Section
**Quote:**
```
We don't chase trends.
We build products that outlast them.

Innovation here isn't a tagline — it's survival.
```

#### Work With Us Section
**Heading:** "Work With Us"

**Description:**
```
We partner with teams and institutions that value precision, performance, 
and long-term impact.

If that sounds like you, reach out. If not, we wish you luck keeping up.
```

**Contact Form Fields:**
- Name
- Email
- Message

#### Footer
**Copyright:** © 2025 Genrec AI. All rights reserved.  
**Tagline:** Built with purpose. Designed for performance.

---

### About Page

**Hero Headline:**
```
Engineering AI That Actually Works
```

**Hero Subheading:**
```
We're not another AI consultancy. We're engineers who build
production-ready systems for enterprises that care about privacy,
reliability, and results.
```

#### Our Story
```
Genrec AI started with a simple observation: most AI solutions
are built for Silicon Valley, not for construction sites,
hotel dining rooms, or classrooms.

We saw enterprises struggling with generic AI tools that didn't
understand their workflows, didn't protect their data, and
didn't deliver measurable ROI. So we decided to build something
different.

Today, we're an engineering studio focused on three industries
where we can make the biggest impact: construction, hospitality,
and education. We build privacy-first, domain-specific AI systems
that solve real problems for real businesses.

We're not trying to be everything to everyone. We're focused
on being the best engineering partner for enterprises that need
AI that actually works in production.
```

#### Our Values

1. **Mission-Driven**
   - "We're here to make AI work for real businesses, not to chase hype. Every line of code serves a purpose."

2. **Client-First**
   - "Your success is our success. We don't build what we think you need — we build what actually solves your problems."

3. **Innovation with Restraint**
   - "We use cutting-edge tech when it makes sense, proven solutions when it doesn't. Pragmatism beats novelty."

4. **Engineering Excellence**
   - "Clean code, proper documentation, and systems that scale. We build like we'll maintain it forever — because we might."

#### Our Approach

**1. Listen First**
```
We start by understanding your actual problems, not selling you
solutions. Every engagement begins with deep discovery.
```

**2. Build Small, Prove Value**
```
We run 4-6 week pilots with real data and real users.
No PowerPoints — just working software you can test.
```

**3. Scale Thoughtfully**
```
Once we've proven value, we help you deploy across your
organization with proper training, support, and documentation.
```

---

### Products Page

**Hero Headline:**
```
Websites That Grow Your Business
```

**Hero Subheading:**
```
Three specialized solutions. One goal: more customers, more revenue.
Transform your online presence into a customer-generating machine.
```

#### Product 1: Educational Websites
**Tagline:** "Engage students, grow enrollments"

**Description:**
```
Custom websites that turn visitors into enrolled students. Modern designs 
that showcase your institution excellence.
```

**Features:**
- Mobile-first design optimized for student engagement
- Integrated admission forms and enrollment tracking
- SEO-optimized to rank higher and attract more students
- Analytics dashboard to track visitor behavior and conversions

**Stats:** 340% Average increase in online inquiries

#### Product 2: Construction Websites
**Tagline:** "Build trust, win more projects"

**Description:**
```
Professional websites that showcase your portfolio and expertise. 
Turn site visitors into signed contracts.
```

**Features:**
- Interactive project galleries with before/after showcases
- Client testimonials and case studies that build credibility
- Lead capture forms optimized for contractor inquiries
- Local SEO to dominate your geographic market

**Stats:** 5.2x More qualified leads per month

#### Product 3: Restaurant Websites
**Tagline:** "Drive reservations, boost revenue"

**Description:**
```
Mouthwatering websites that make reservations effortless. 
Turn hungry browsers into dining guests.
```

**Features:**
- Integrated reservation systems with real-time availability
- Stunning food photography galleries that drive appetite
- Online menu with dietary filters and allergy information
- Social media integration to amplify your reach

**Stats:** 68% Increase in online reservations

#### Why Choose Genrec AI

1. **Privacy is Non-Negotiable**
   - "Your data never leaves your infrastructure. On-premise deployment available."

2. **Weeks, Not Months**
   - "From pilot to production in 2-4 weeks. Quick wins, lasting impact."

3. **Measurable ROI**
   - "Clear metrics from day one. Track improvements, celebrate victories."

4. **24/7 Human Support**
   - "Real engineers, not chatbots. We're here when you need us."

5. **Industry Expertise**
   - "We speak your language. Deep domain knowledge in every solution."

6. **No Vendor Lock-in**
   - "Open standards, portable architecture. Your freedom guaranteed."

---

### LuminaIQ Product Page

**Main Headline:**
```
LuminaIQ
```

**Subheading:**
```
Transform any PDF into a living, intelligent learning experience. 
It's not just study automation. It's cognitive augmentation.
```

#### How It Works

**Step 1: Upload Your Document**
```
Drag and drop any PDF. Our system processes it instantly using 
advanced RAG and NLP models.
```

**Step 2: Learn Through Conversation**
```
Ask anything — get deep, contextual answers with examples, 
analogies, and summaries.
```

**Step 3: Master The Material**
```
Generate quizzes, track your learning streak, and convert theory into clarity.
```

#### What is LuminaIQ?
```
Personalized learning at scale for educational institutions. Uses AI to 
adapt lessons, exercises, and assessments to each student's level and pace.
```

#### Features

1. **Smart PDF Processing**
   - "AI reads, understands, and extracts insights from any document."

2. **Interactive AI Chat**
   - "Ask, learn, and explore through natural conversation."

3. **Question Generation**
   - "Auto-generate questions to test understanding."

4. **Quiz Mode**
   - "Reinforce knowledge through adaptive quizzes."

5. **Smart Notes**
   - "Seamlessly integrated AI-powered notes."

6. **Personal Library**
   - "Organize materials with intelligent search and categorization."

7. **Learning Streaks**
   - "Stay motivated with daily learning goals and progress tracking."

#### Who We Are (LuminaIQ Section)
```
Genrec AI was founded by Jai Samyukth B U and Shyamnath Sankar, 
with Harish V as technical lead. We build from nothing but code, 
caffeine, and conviction. No investors. No paid tools. No noise. 
Just pure engineering.
```

**CTA:** "Join the Waitlist"

---

### Case Studies Page

**Hero Headline:**
```
Real Results, Real Impact
```

**Hero Subheading:**
```
See how enterprises across industries are transforming
their operations with Genrec AI solutions.
```

#### Stats Bar
- **15+** Enterprise Pilots
- **98%** Client Retention
- **4-6** Weeks to Deploy
- **3x** Average ROI

#### Featured Case Studies

**1. SitePilot Construction**
- **Client:** Mid-size Commercial Builder
- **Industry:** Construction
- **Duration:** 12 weeks
- **Team Size:** 200+ workers

**Challenge:**
```
Manual progress tracking was taking 8+ hours weekly and missing critical updates.
```

**Solution:**
```
Implemented Construct AI with photo-based tracking and automated reporting.
```

**Results:**
- 60% Reduction in reporting time
- 85% Progress prediction accuracy
- Zero Safety incidents during pilot

**Quote:**
```
"Construct AI transformed how we track progress. What took hours now happens automatically."
— Project Manager
```

**2. Hotel Azure**
- **Client:** Boutique Luxury Hotel
- **Industry:** Hospitality
- **Duration:** 8 weeks
- **Team Size:** 40 rooms

**Challenge:**
```
Generic ordering systems were damaging the premium dining experience.
```

**Solution:**
```
Deployed Tabble with custom UI matching hotel aesthetics and chef preferences.
```

**Results:**
- 30% Increase in room service
- 4.8/5 Guest satisfaction score
- 25% Reduction in order errors

**Quote:**
```
"Tabble elevated our dining service to match our luxury standards."
— General Manager
```

**3. Riverside Academy**
- **Client:** Private K-12 School
- **Industry:** Education
- **Duration:** 16 weeks
- **Team Size:** 500 students

**Challenge:**
```
One-size-fits-all curriculum leaving advanced students bored, struggling students behind.
```

**Solution:**
```
Lumina IQ created personalized learning paths based on individual progress.
```

**Results:**
- 40% Improvement in test scores
- 2x Student engagement increase
- 90% Teacher satisfaction

**Quote:**
```
"Finally, technology that helps us teach each student at their level."
— Academic Director
```

**4. Metro Grill Chain**
- **Client:** Regional Restaurant Group
- **Industry:** Restaurant
- **Duration:** 10 weeks
- **Team Size:** 8 locations

**Challenge:**
```
Disconnected systems causing order delays and inventory mismatches.
```

**Solution:**
```
Restaurant Tech Suite integrated ordering, kitchen, and inventory systems.
```

**Results:**
- 35% Faster order processing
- 50% Reduction in food waste
- 20% Increase in revenue

**Quote:**
```
"The integration solved problems we didn't even know we had."
— Operations Director
```

---

### Contact Page

**Main Headline:**
```
Let's Build Something Great Together
```

**Subheading:**
```
Schedule a 20-minute demo. We'll show you a working pilot
tailored to your use case — because seeing beats reading.
```

#### Contact Information
- **Email:** contact@genrecai.com
- **Response Time:** Within 48 hours

#### What to Expect
✓ 20-minute focused demo call  
✓ Tailored solution presentation  
✓ Clear pilot roadmap  
✓ No obligations or pressure

#### Contact Form Fields
1. Full Name *
2. Role / Title *
3. Company *
4. Email *
5. Phone (optional)
6. Product of Interest *
   - Tabble - Premium Dining Solution
   - Lumina IQ - Adaptive Learning
   - Construct AI - Project Tracking
   - Restaurant Tech Suite
   - Multiple Products
   - AI Consulting Services
7. Message *

**Privacy Promise:**
```
We respect your privacy. No spam, no third-party sharing. 
We'll only use your information to respond to your inquiry.
```

---

### Blog Page

**Hero Headline:**
```
Insights & Ideas
```

**Hero Subheading:**
```
Real thoughts on AI, privacy, and the future of technology. 
No fluff, no buzzwords—just honest engineering perspective.
```

---

## ANIMATIONS & EFFECTS

### Animation Timing
```javascript
Fast: 120ms (0.12s)
Default: 240ms (0.24s)
Long: 420ms (0.42s)
```

### Easing Functions
```javascript
Smooth: cubic-bezier(0.2, 0.9, 0.3, 1)
Ease Out: cubic-bezier(0.4, 0, 0.2, 1)
Elastic: cubic-bezier(0.68, -0.55, 0.265, 1.55)
```

### Common Animations

#### 1. Fade In
```css
@keyframes fadeIn {
  0% { opacity: 0 }
  100% { opacity: 1 }
}
Duration: 0.5s
Easing: ease-in-out
```

#### 2. Slide Up
```css
@keyframes slideUp {
  0% { transform: translateY(20px); opacity: 0 }
  100% { transform: translateY(0); opacity: 1 }
}
Duration: 0.5s
Easing: ease-out
```

#### 3. Slide Down
```css
@keyframes slideDown {
  0% { transform: translateY(-20px); opacity: 0 }
  100% { transform: translateY(0); opacity: 1 }
}
Duration: 0.3s
Easing: ease-out
```

#### 4. Scale In
```css
@keyframes scaleIn {
  0% { transform: scale(0.95); opacity: 0 }
  100% { transform: scale(1); opacity: 1 }
}
Duration: 0.3s
Easing: ease-out
```

#### 5. Float (Continuous)
```css
@keyframes float {
  0%, 100% { transform: translateY(0px) }
  50% { transform: translateY(-20px) }
}
Duration: 6s
Easing: ease-in-out
Loop: infinite
```

#### 6. Blob (Organic Movement)
```css
@keyframes blob {
  0%, 100% { transform: translate(0px, 0px) scale(1) }
  33% { transform: translate(30px, -50px) scale(1.1) }
  66% { transform: translate(-20px, 20px) scale(0.9) }
}
Duration: 7s
Loop: infinite
```

#### 7. Gradient Shift
```css
@keyframes gradient-x {
  0%, 100% { background-position: 0% 50% }
  50% { background-position: 100% 50% }
}
Duration: 3s
Easing: ease
Loop: infinite
Background-size: 200% 200%
```

#### 8. Pulse Slow
```css
@keyframes pulse-slow {
  0%, 100% { opacity: 0.2 }
  50% { opacity: 0.3 }
}
Duration: 4s
Easing: ease-in-out
Loop: infinite
```

#### 9. Glow Effect
```css
@keyframes glow {
  0%, 100% {
    opacity: 1;
    filter: drop-shadow(0 0 20px rgba(201, 166, 107, 0.5));
  }
  50% {
    opacity: 0.8;
    filter: drop-shadow(0 0 40px rgba(201, 166, 107, 0.8));
  }
}
Duration: 3s
Easing: ease-in-out
Loop: infinite
```

#### 10. Text Reveal
```css
@keyframes textReveal {
  from { clip-path: inset(0 100% 0 0) }
  to { clip-path: inset(0 0 0 0) }
}
Duration: 1s
Easing: cubic-bezier(0.4, 0, 0.2, 1)
```

#### 11. Shimmer (Loading)
```css
@keyframes shimmer {
  0% { background-position: -468px 0 }
  100% { background-position: 468px 0 }
}
Duration: 2s
Easing: linear
Loop: infinite
Background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%)
Background-size: 468px 104px
```

#### 12. Spin (Slow)
```css
@keyframes spin {
  from { transform: rotate(0deg) }
  to { transform: rotate(360deg) }
}
Duration: 3s
Easing: linear
Loop: infinite
```

### Hover Effects

#### Button Hover
```css
hover:scale-105 
hover:shadow-xl
transition-all duration-300
```

#### Card Hover
```css
hover:transform 
hover:-translate-y-2 
hover:shadow-2xl
transition-all duration-500
```

#### Image Hover (Founder Images)
```css
filter: grayscale(100%)
transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1)

On Hover:
  filter: grayscale(0%)
  transform: scale(1.05)
  border-color: #C9A66B
  box-shadow: 0 20px 40px rgba(201, 166, 107, 0.3)
```

#### Link Hover
```css
hover:text-accent-metal
transition-colors
```

### Scroll Animations

#### Parallax Scrolling
- Hero background moves at 0.4x scroll speed
- Creates depth illusion
- Applied to: Hero sections, background images

#### Scroll-triggered Fade In
- Elements fade in when they enter viewport
- Uses Intersection Observer API
- Threshold: 0.1 (10% visibility)
- Trigger: Once only (triggerOnce: true)

#### Scroll Indicator
```javascript
Chevron Down icon
Animates: y: [0, 10, 0]
Duration: 1.5s
Loop: infinite
Opacity fades out on scroll
```

### Framer Motion Variants

#### Badge Variant
```javascript
initial: { y: -6, opacity: 0 }
animate: { y: 0, opacity: 1 }
transition: { duration: 0.12s, delay: 0.12s }
```

#### H1 Variant (Text Reveal)
```javascript
initial: { clipPath: 'inset(0 100% 0 0)', opacity: 0 }
animate: { clipPath: 'inset(0 0 0 0)', opacity: 1 }
transition: { duration: 0.42s, delay: 0.12s }
```

#### CTA Variant
```javascript
initial: { scale: 0.98, opacity: 0 }
animate: { scale: 1, opacity: 1 }
hover: { y: -3, scale: 1.02 }
tap: { scale: 0.99 }
```

#### Card Variant
```javascript
hover: { y: -8, scale: 1.01 }
transition: { duration: 0.16s }
```

#### Stagger Children
```javascript
staggerChildren: 0.06s between each child
```

### Special Effects

#### Image Outline Animation
- SVG path animation
- Stroke draws around image perimeter
- Gold color (#C9A66B)
- Appears 0.5s after image loads
- Duration: 1.5s

#### Backdrop Blur
- Header: backdrop-blur-md (10px)
- Cookie Banner: backdrop-blur-lg
- Cards: backdrop-blur-sm

#### Glass Morphism
```css
bg-white/10 
backdrop-blur-lg 
border border-white/20
```

---

## PAGE-BY-PAGE BREAKDOWN

### Homepage (/)
**File:** `src/app/page.tsx`  
**Route:** `/`

**Layout Structure:**
```
<div className="flex flex-col bg-white">
  <HeroParallax />
  <WorkShowcase />
  <WhoWeAre />
  <OurEthos />
  <WorkWithUs />
</div>
```
**Note:** Footer is rendered globally in `layout.tsx`, not on individual pages.

**Components Used:**
1. HeroParallax - Animated hero with background carousel
2. WorkShowcase - Interactive portfolio gallery with vertical carousel controls
3. WhoWeAre - Founders showcase
4. OurEthos - Brand philosophy quote
5. WorkWithUs - Contact form

**Key Features:**
- Parallax scrolling effects
- Interactive portfolio carousel with vertical navigation on right side
- 3D card rotation on mouse movement
- Smooth scroll animations
- Responsive grid layouts

**Recent Updates (v2.1):**
- Removed duplicate footer (now only in layout.tsx)
- WorkShowcase carousel controls moved to vertical layout on right side
- Removed LuminaIQ section (moved to dedicated product page)

**Purpose:** Main landing page showcasing Genrec AI's work, founders, and value proposition. Drives visitors to explore products or contact.

---

### About Page (/about)
**File:** `src/app/about/page.tsx`  
**Route:** `/about`

**Sections:**
1. Hero Section (Dark gradient background)
2. Our Story
3. Our Values (4-column grid with icons)
4. Founders Section (FoundersPreview component)
5. Our Approach (3 steps)
6. CTA Section

**Visual Elements:**
- Gradient backgrounds (from-primary-bg to-slate-900)
- Icon-based value cards
- Expandable founder profiles
- Step-by-step approach cards

**Purpose:** Tells Genrec AI's origin story, values, team, and approach to solving enterprise problems. Establishes credibility and trust.

---

### Products Page (/products)
**File:** `src/app/products/page.tsx`  
**Route:** `/products`

**Product Cards Layout:**
```
Grid: 1 column (mobile) → 2 columns (tablet) → 3 columns (desktop)
Each card includes:
  - Cover image with gradient overlay
  - Icon in top-left corner
  - Stats badge in bottom-right
  - Title, tagline, description
  - Feature list with checkmarks
  - "Learn More" CTA
```

**Products Featured:**
1. Educational Websites
2. Construction Websites
3. Restaurant Websites

**Interactive Elements:**
- Hover lifts card up (-translate-y-2)
- Image scales on hover (scale-110)
- Arrow animates on hover
- Smooth transitions (duration-500)

**Purpose:** Showcase Genrec AI's three specialized website solutions targeting specific industries.

---

### LuminaIQ Product Page (/products/lumina-iq)
**File:** `src/app/products/lumina-iq/page.tsx`  
**Route:** `/products/lumina-iq`

**Page Structure:**
1. Hero Section
2. Features Grid (6 features)
3. Product Preview
4. How It Works (3-step process)
5. CTA Section

**Hero Section:**
- Badge: "OUR FLAGSHIP PRODUCT"
- Title: "LuminaIQ"
- Subtitle: "Transform any PDF into a living, intelligent learning experience."
- Description: LuminaIQ value proposition and cognitive augmentation messaging
- Background: Gray-50 with subtle grid pattern

**Features Grid (6 Features):**
1. **Smart PDF Processing** - AI reads, understands, and extracts insights
2. **Interactive AI Chat** - Natural conversation-based learning
3. **Question Generation** - Auto-generate questions to test understanding
4. **Quiz Mode** - Adaptive quizzes for knowledge reinforcement
5. **Smart Notes** - AI-powered note-taking integration
6. **Personal Library** - Intelligent search and organization

**Product Preview:**
- Aspect-video container with border
- Placeholder: "[ PRODUCT INTERFACE PREVIEW ]"
- Gradient background (gray-100 to white)
- Scale-in animation on scroll

**How It Works (3-Step Process):**
- Section positioned AFTER product preview (as of v2.1)
- Heading: "How It Works" with "Simple. Transparent. Obsessively executed."
- 3-column grid on desktop, stacked on mobile

**Step 01 - Upload:**
- Icon: Upload
- Description: "Drag and drop any PDF. Our system processes it instantly using advanced RAG and NLP models."

**Step 02 - Learn:**
- Icon: Brain
- Description: "Ask anything — get deep, contextual answers with examples, analogies, and summaries."

**Step 03 - Master:**
- Icon: Trophy
- Description: "Generate quizzes, track your learning streak, and convert theory into clarity."

**CTA Section:**
- Dark background (gray-900)
- Heading: "Ready to Transform Your Learning?"
- Two buttons: "JOIN WAITLIST" (primary white) and "WATCH DEMO" (outline)

**Recent Updates (v2.1):**
- Complete page redesign with modern layout and animations
- Moved to dedicated page (removed from homepage)
- Reordered sections: How It Works now positioned AFTER product preview
- Added 6 feature cards with icons
- Improved mobile responsiveness
- Added smooth scroll-triggered animations
- Consistent design system with Tabble page

**Purpose:** Comprehensive product page for LuminaIQ AI learning platform showcasing features, workflow, and value proposition with waitlist CTA.

---

### Tabble Product Page (/products/tabble)
**File:** `src/app/products/tabble/page.tsx`  
**Route:** `/products/tabble`

**Page Structure:**
1. Hero Section
2. Features Grid (6 features)
3. Product Preview
4. How It Works (3-step process)
5. CTA Section

**Hero Section:**
- Badge: "HOSPITALITY TECHNOLOGY"
- Title: "Tabble"
- Subtitle: "Premium dining tablet & staff interfaces for luxury hotels."
- Description: Value proposition emphasizing seamless elegant experiences, error reduction, and revenue increase
- Background: Gray-50 with subtle grid pattern

**Features Grid (6 Features):**
1. **Premium Tablet Interface** - Elegant guest-facing ordering system for luxury hotels and fine dining
2. **Staff Dashboard** - Real-time order management, kitchen coordination, and service optimization
3. **Revenue Analytics** - Deep insights into ordering patterns and revenue optimization
4. **Guest Preferences** - Remember dietary restrictions and personalize every experience
5. **Speed & Efficiency** - Reduce wait times and streamline kitchen operations
6. **Smart Recommendations** - AI-powered menu suggestions that increase order value

**Product Preview:**
- Aspect-video container with border
- Placeholder: "[ PRODUCT INTERFACE PREVIEW ]"
- Gradient background (gray-100 to white)
- Scale-in animation on scroll

**How It Works (3-Step Process):**
- Section positioned AFTER product preview
- Heading: "How It Works" with "Simple. Transparent. Obsessively executed."
- 3-column grid on desktop, stacked on mobile

**Step 01 - Browse:**
- Icon: Smartphone
- Description: "Guests explore your menu with stunning photography, detailed descriptions, and allergen information on premium tablets."

**Step 02 - Order:**
- Icon: Utensils
- Description: "One-tap ordering syncs instantly to kitchen displays. Custom requests, dietary preferences, and special instructions captured perfectly."

**Step 03 - Delight:**
- Icon: Sparkles
- Description: "Staff receive real-time notifications, kitchen workflows optimize automatically, and guests enjoy faster, more accurate service."

**CTA Section:**
- Dark background (gray-900)
- Heading: "Ready to Elevate Your Guest Experience?"
- Subheading: "Schedule a demo and see how Tabble transforms hospitality operations."
- Two buttons: "REQUEST DEMO" (primary white) and "VIEW PRICING" (outline)

**Recent Updates (v2.1):**
- Complete page creation with modern layout matching LuminaIQ design
- Added 6 hospitality-specific feature cards with icons
- Implemented 3-step workflow (Browse → Order → Delight)
- Product preview section with placeholder
- Dark CTA section with demo request focus
- Consistent design system and animations with LuminaIQ page
- Mobile-responsive layout

**Purpose:** Comprehensive product page for Tabble premium dining solution showcasing hospitality-specific features, workflow, and value proposition for luxury hotels and restaurants.

---

### Educational Website Product Page (/products/educational-website)
**File:** `src/app/products/educational-website/page.tsx`  
**Route:** `/products/educational-website`

**Purpose:** Detailed information about custom educational institution websites, showcasing features specific to schools and universities.

---

### Construction Website Product Page (/products/construction-website)
**File:** `src/app/products/construction-website/page.tsx`  
**Route:** `/products/construction-website`

**Purpose:** Information about construction business websites highlighting project portfolio showcases and contractor-specific features.

---

### Restaurant Website Product Page (/products/restaurant-website)
**File:** `src/app/products/restaurant-website/page.tsx`  
**Route:** `/products/restaurant-website`

**Purpose:** Details about restaurant websites with integrated reservation systems and food photography galleries.

---

### Divisions Page (/divisions)
**File:** `src/app/divisions/page.tsx`  
**Route:** `/divisions`

**Four Divisions Featured:**

1. **Genrec AI** - Software & Automation
   - Custom AI Solutions, SaaS Platform Development
   - ERP & CRM Systems, Process Automation
   - Machine Learning Models, API Development

2. **Genrec Studios** - Branding, Video, Copy, Marketing
   - Brand Identity & Strategy, Video Production
   - Copywriting & Content, Social Media Marketing
   - Campaign Strategy, Motion Graphics

3. **Genrec Design** - UI/UX, Web, AutoCAD, Architecture
   - Website Design & Development, UI/UX Design Systems
   - AutoCAD & Technical Drawing, 3D Visualization
   - Architectural Design, Product Design

4. **Genrec Data** - Excel Automation, Analytics, Dashboards
   - Excel Automation & Macros, Data Analytics
   - Custom Dashboard Development, Workflow Automation
   - Data Visualization, Business Intelligence

**Layout:**
- Alternating left/right layout for each division
- Large image card with division icon overlay
- Service lists, technology tags
- Gradient-specific branding per division

**Purpose:** Showcase Genrec AI's four operational divisions with their services, technologies, and specializations.

---

### Careers Page (/careers)
**File:** `src/app/careers/page.tsx`  
**Route:** `/careers`

**Open Positions:**
1. AI Engineer (Genrec AI)
2. UI/UX Designer (Genrec Design)
3. Creative Editor (Genrec Studios)
4. Marketing Strategist (Genrec Studios)
5. AutoCAD Specialist (Genrec Design)
6. Data Analyst (Genrec Data)

**Sections:**
1. Hero - "We Hire Conviction, Not Résumés"
2. Philosophy - What We Look For
3. Open Positions (detailed cards)
4. Perks Section
5. CTA - Ready to Build With Us?

**Each Position Includes:**
- Role title, division, type (Full-time/Contract)
- Location (Remote/Hybrid)
- Description
- Requirements list
- Technology/skill tags
- Apply Now CTA (links to contact page)

**Perks Listed:**
- Work directly with founders
- Learn real engineering, not frameworks
- Own entire projects, not tickets
- Remote-first culture
- Competitive compensation
- No corporate bureaucracy
- Ship real products customers use
- Growth based on output, not tenure

**Purpose:** Attract talented professionals to join Genrec AI's team across all divisions.

---

### Case Studies Page (/case-studies)
**File:** `src/app/case-studies/page.tsx`  
**Route:** `/case-studies`

**Layout:**
```
Hero Section
↓
Stats Bar (4 metrics in a row)
↓
Case Study Cards (vertical stack)
  Each card includes:
    - Colored top stripe (gradient)
    - Left column (2/3): Challenge, Solution, Results
    - Right column (1/3): Project details sidebar
    - Quote blockquote
    - Tags
```

**Results Display:**
- 3-column grid per case study
- Large metric numbers in gold
- Description below each metric

**Purpose:** Demonstrate real-world impact and results from Genrec AI's enterprise deployments across industries.

---

### Contact Page (/contact)
**File:** `src/app/contact/page.tsx`  
**Route:** `/contact`

**Layout:**
```
Grid: 2/3 width form + 1/3 sidebar

Form Fields:
  - Full Name*
  - Role/Title*
  - Company*
  - Email*
  - Phone (optional)
  - Product of Interest* (dropdown)
  - Message* (textarea)

Sidebar:
  - Contact info card
  - What to Expect card (dark gradient)
  - Limited Availability notice (amber)
```

**Form Validation:**
- Zod schema validation
- Real-time error messages
- Loading state during submission
- Success/error toast notifications

**Purpose:** Primary conversion point for leads. Enables visitors to request demos, inquiries, or partnership discussions.

---

### Blog Page (/blog)
**File:** `src/app/blog/page.tsx`  
**Route:** `/blog`

**Layout:**
```
Hero Section (dark background)
↓
Blog Posts Grid (3 columns)
  Each card:
    - Cover image (h-56)
    - Category badge (top)
    - Title (2 lines max)
    - Excerpt (3 lines max)
    - Meta: Date + Read time
    - Arrow icon on hover
```

**Post Data Source:** `/data/blogs.json`

**Filtering:** Only displays published posts (`published: true`)

**CTA Section:** Subscribe to Updates (links to contact)

**Purpose:** Content marketing hub sharing insights on AI, privacy, and technology. Establishes thought leadership and SEO presence.

---

### Admin Panel (/admin)
**File:** `src/app/admin/page.tsx`  
**Route:** `/admin`

**Authentication:**
- Username: `believer`
- Password: `achieve`
- Session-based auth (stored in sessionStorage)
- Login form with show/hide password toggle

**Two Main Tabs:**

**1. Blog Admin**
- Create new blog posts
- Edit existing posts
- Delete posts
- Markdown content editor
- Cover image URL input
- Metadata: author, category, read time, date
- Publish/draft toggle
- View all posts with status indicators

**2. Gallery Admin**
- Upload images (drag & drop or click)
- Get unique URLs for uploaded images
- Copy image URLs to clipboard
- Delete images
- View image metadata (size, upload date)
- Grid view of all gallery images

**Form Fields (Blog Editor):**
- Title*
- Slug (URL) - auto-generates if empty
- Excerpt*
- Content* (Markdown supported)
- Cover Image URL
- Author
- Category
- Read Time
- Published checkbox

**Storage:**
- Blog posts: In-memory (would persist to database in production)
- Gallery images: localStorage (Base64 encoded)
- Session auth: sessionStorage

**Purpose:** Content management system for blog posts and image assets. Allows authorized users to create/edit/delete content without touching code.

---

### Privacy Policy Page (/privacy)
**File:** `src/app/privacy/page.tsx`  
**Route:** `/privacy`

**Sections:**
1. Our Privacy Promise
2. Information We Collect
   - Information You Provide
   - Information Collected Automatically
3. How We Use Your Information
4. Data Security
5. Your Rights
6. Third-Party Services
7. Data Retention
8. Children's Privacy
9. Updates to This Policy
10. Contact Us
11. GDPR Compliance (EU residents)
12. CCPA Compliance (California residents)

**Key Highlights:**
- No data selling
- Industry-standard encryption
- Minimal third-party services
- User rights to access/delete/export data
- Clear retention policies
- Compliance with GDPR and CCPA

**Purpose:** Legal requirement and transparency statement about data collection, usage, and user rights.

---

### Error Pages

**404 Not Found (/not-found)**
**File:** `src/app/not-found.tsx`  
**Purpose:** Custom 404 page for invalid routes

**Error Boundary (/error)**
**File:** `src/app/error.tsx`  
**Purpose:** React error boundary for runtime errors

**Global Error (/global-error)**
**File:** `src/app/global-error.tsx`  
**Purpose:** Root-level error boundary for critical failures

**Loading State (/loading)**
**File:** `src/app/loading.tsx`  
**Purpose:** Loading skeleton/spinner for page transitions

---

### API Routes

**1. Contact Form API**
**Location:** `src/app/api/contact/`  
**Purpose:** Handles contact form submissions, sends emails, stores inquiries

**2. Authentication API**
**Location:** `src/app/api/auth/`  
**Purpose:** Admin authentication endpoints (login/logout/session verification)

**3. Gallery API**
**Location:** `src/app/api/gallery/`  
**Purpose:** Image upload, retrieval, and management for gallery admin

---

### SEO & Meta Files

**Robots.txt**
**File:** `src/app/robots.ts`  
**Purpose:** Search engine crawling rules and sitemap reference

**Sitemap**
**File:** `src/app/sitemap.ts`  
**Purpose:** Dynamic XML sitemap generation for all public pages

---

## COMPONENT LIBRARY

### Header Component
**File:** `src/components/HeaderEnhanced.tsx`

**Features:**
- Sticky positioning (fixed top-0)
- Scroll behavior:
  - Shows on scroll up
  - Hides on scroll down
  - Adds backdrop blur after 20px scroll
- Desktop menu: Horizontal with dropdowns
- Mobile menu: Full-screen slide-in panel
- Products dropdown submenu
- "Get Started" CTA button (gradient gold)

**Accessibility:**
- Keyboard navigation
- ARIA labels
- Focus states
- Skip links

---

### Footer Component
**File:** `src/components/Footer.tsx`

**Layout:**
```
4-column grid (mobile: stacked)
Columns:
  1. Brand + description
  2. Products links
  3. Company links
  4. Contact info + social icons
Bottom bar:
  - Tagline left
  - Legal links right
```

**Social Links:**
- LinkedIn
- Twitter
- GitHub
- Email

---

### Cookie Banner
**File:** `src/components/CookieBannerEnhanced.tsx`

**Features:**
- GDPR compliant
- Slides up from bottom
- 3 options:
  1. Accept All
  2. Necessary Only
  3. Customize (expandable)
- Stores preferences in localStorage
- Respects user choice
- Auto-hides after 1s delay

---

### Contact Form
**File:** `src/components/ContactForm.tsx`

**Form Features:**
- React Hook Form
- Zod validation
- Real-time error messages
- Loading spinner during submit
- Success/error toasts
- Privacy promise notice
- Product dropdown selector

**Products Options:**
1. Tabble - Premium Dining Solution
2. Lumina IQ - Adaptive Learning
3. Construct AI - Project Tracking
4. Restaurant Tech Suite
5. Multiple Products
6. AI Consulting Services

---

### Work Showcase
**File:** `src/components/WorkShowcase.tsx`

**Layout:**
- Main image container (left/center): Large image with 3D rotation effect
- Vertical controls sidebar (right): Navigation arrows + thumbnail gallery

**Features:**
- **3D Parallax Effect:** Mouse movement triggers X/Y rotation on main image
- **Vertical Navigation (Desktop):**
  - Up arrow at top
  - Vertical thumbnail stack in middle (5 thumbnails)
  - Down arrow at bottom
  - All controls positioned on right side of main image
- **Mobile Navigation:** 
  - Horizontal progress indicators at bottom
  - Thumbnails and arrows hidden on mobile
- **Counter Badge:** Shows current/total (e.g., "1/5") in bottom-right of image
- **Active State:** Current thumbnail has 4px gray-900 ring
- **Smooth Transitions:** All navigation changes use fade and scale animations

**Images:**
1. Enterprise CRM Dashboard
2. Automation Dashboard Interface
3. Feedback System Platform
4. Intelligent Web Application
5. LuminaIQ AI Platform

**Section Title:** "Our Work Speaks in Results"

**Recent Updates (v2.1):**
- Moved carousel controls from horizontal (bottom) to vertical (right side)
- Repositioned navigation arrows from left/right edges to top/bottom of right sidebar
- Thumbnails now stack vertically instead of horizontal row
- Improved mobile responsiveness with progress dots

---

### Founders Preview
**File:** `src/components/FoundersPreview.tsx`

**Layout:**
- Alternating left/right layout
- Large portrait image with info overlay
- Social icons on image hover
- Content column with:
  - About section
  - Education
  - Expertise tags
  - "Get in Touch" button

**Founder Details:**

**Jai Samyukth B U**
- Role: Co-Founder & Chief Architect
- Email: jaisamyukth@gmail.com
- LinkedIn: linkedin.com/in/jaisamyukth
- Education: V.S.B. Engineering College, B.Sc. Computer Science & Business Systems
- Expertise: Next.js, Framer Motion, System Architecture, Product Design

**Shyamnath Sankar**
- Role: Co-Founder & Co-CEO
- Email: shyamnathsankar@genrecai.com
- LinkedIn: linkedin.com/in/shyamnathsankar
- Education: V.S.B. Engineering College
- Expertise: AI Strategy, Business Development, Product Management, Partnerships

**Harish V**
- Role: Technical Lead
- Email: harish@genrecai.com
- LinkedIn: linkedin.com/in/harishv
- Education: V.S.B. Engineering College
- Expertise: Technical Leadership, System Architecture, Code Review, Engineering Management

---

### FAQ Section
**File:** `src/components/FAQSection.tsx`

**8 Questions:**

1. **What makes Genrec AI premium?**
   - "We're founder-led, available 24/7, and we custom-build everything from scratch. No templates, no outsourcing, no shortcuts."

2. **Do you really answer calls at 3 AM?**
   - "Yes. We love what we do. Your success is our success."

3. **Why should we pay premium pricing?**
   - "Because you're getting premium quality. Founders building your product personally."

4. **How do you stay creative with every project?**
   - "We don't follow templates or trends. Every project is a blank canvas."

5. **What if we need changes after launch?**
   - "We're here. Forever. Call us anytime—we'll hop on a call immediately."

6. **How many clients do you take on?**
   - "We limit ourselves to 3 new clients per quarter."

7. **What's your development process like?**
   - "Deep discovery → Bespoke design → Obsessive execution → Lifelong partnership"

8. **Can you integrate with our existing systems?**
   - "Absolutely. We're engineers first. We can work with any tech stack."

**Interaction:**
- Accordion-style expansion
- Plus/Minus icon animation
- Smooth height transitions
- First question open by default

---

### Hero Parallax
**File:** `src/components/HeroParallax.tsx`

**Background Carousel:**
- 4 rotating images (5s intervals)
- Grayscale filter + blur
- Parallax scroll movement
- Gradient overlay for readability

**Content:**
- Large serif headline (8xl on desktop)
- Body text with line break
- 2 CTA buttons side-by-side
- Scroll indicator (animated chevron)

**Animations:**
- Fade in with staggered delays
- Parallax on scroll
- Content fades out as user scrolls

---

### LuminaIQ Embed
**File:** `src/components/LuminaIQEmbed.tsx`

**Simple iframe wrapper:**
```tsx
<iframe 
  src="https://luminaiq.genrecai.com" 
  width="100%" 
  height="800px"
  style={{ border: 'none' }}
  title="LuminaIQ Demo"
/>
```

---

## TECHNICAL ARCHITECTURE

### Tech Stack
- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Forms:** React Hook Form + Zod
- **UI Components:** shadcn/ui
- **Analytics:** Vercel Analytics
- **Deployment:** Vercel

### File Structure
```
genrec_ai_website/
├── src/
│   ├── app/
│   │   ├── about/page.tsx
│   │   ├── admin/page.tsx
│   │   ├── api/
│   │   │   ├── auth/
│   │   │   ├── contact/
│   │   │   └── gallery/
│   │   ├── blog/page.tsx
│   │   ├── careers/page.tsx
│   │   ├── case-studies/page.tsx
│   │   ├── contact/page.tsx
│   │   ├── divisions/page.tsx
│   │   ├── privacy/page.tsx
│   │   ├── products/
│   │   │   ├── page.tsx
│   │   │   ├── lumina-iq/page.tsx
│   │   │   ├── tabble/page.tsx
│   │   │   ├── construction-website/page.tsx
│   │   │   ├── educational-website/page.tsx
│   │   │   └── restaurant-website/page.tsx
│   │   ├── error.tsx
│   │   ├── global-error.tsx
│   │   ├── layout.tsx
│   │   ├── loading.tsx
│   │   ├── not-found.tsx
│   │   ├── page.tsx (Homepage)
│   │   ├── robots.ts
│   │   ├── sitemap.ts
│   │   └── globals.css
│   ├── components/
│   │   ├── HeaderEnhanced.tsx
│   │   ├── Footer.tsx
│   │   ├── FooterRedesign.tsx
│   │   ├── HeroParallax.tsx
│   │   ├── WorkShowcase.tsx
│   │   ├── WhoWeAre.tsx
│   │   ├── OurEthos.tsx
│   │   ├── WorkWithUs.tsx
│   │   ├── FoundersPreview.tsx
│   │   ├── ContactForm.tsx
│   │   ├── CookieBannerEnhanced.tsx
│   │   ├── FAQSection.tsx
│   │   ├── LuminaIQEmbed.tsx
│   │   ├── DivisionsOverview.tsx
│   │   ├── Timeline.tsx
│   │   ├── GlobalLoader.tsx
│   │   ├── LoadingScreen.tsx
│   │   ├── PageTransition.tsx
│   │   └── ui/ (shadcn components)
│   ├── data/
│   │   └── blogs.json
│   ├── types/
│   │   └── blog.ts
│   └── lib/
│       ├── theme.ts
│       ├── animations.ts
│       ├── seo.ts
│       └── utils.ts
├── public/
│   ├── favicon.ico
│   ├── favicon.svg
│   ├── apple-touch-icon.png
│   ├── site.webmanifest
│   └── browserconfig.xml
├── tailwind.config.ts
├── next.config.js
└── package.json
```

### Key Dependencies
```json
{
  "next": "^14.x",
  "react": "^18.x",
  "typescript": "^5.x",
  "tailwindcss": "^3.x",
  "framer-motion": "^11.x",
  "react-hook-form": "^7.x",
  "zod": "^3.x",
  "@hookform/resolvers": "^3.x",
  "lucide-react": "^0.x",
  "@vercel/analytics": "^1.x"
}
```

### SEO Configuration
**File:** `src/lib/seo.ts`

**Structured Data:**
- Organization Schema
- Product Schemas (LuminaIQ, Tabble)
- Pricing Schema
- WebSite Schema
- BreadcrumbList Schema

**Meta Tags:**
- Open Graph (Facebook/LinkedIn)
- Twitter Cards
- Canonical URLs
- Sitemap integration
- Robots.txt

### Performance Optimizations

1. **Font Loading:**
   - font-display: swap
   - Preload critical fonts
   - Local font fallbacks

2. **Image Optimization:**
   - Next.js Image component
   - Lazy loading
   - WebP format
   - Responsive srcsets

3. **Code Splitting:**
   - Dynamic imports
   - Route-based splitting
   - Component-level splitting

4. **Caching:**
   - Static page generation
   - ISR (Incremental Static Regeneration)
   - Edge caching via Vercel

5. **Critical CSS:**
   - Inline critical styles
   - Async non-critical CSS

### Responsive Breakpoints
```css
sm: 640px   (Mobile landscape)
md: 768px   (Tablets)
lg: 1024px  (Desktop)
xl: 1280px  (Large desktop)
2xl: 1536px (Extra large)
```

### Accessibility Features
- Semantic HTML
- ARIA labels
- Keyboard navigation
- Focus indicators
- Skip links
- Alt text for images
- Color contrast compliance (WCAG AA)
- Screen reader testing

### Browser Support
- Chrome (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Edge (latest 2 versions)
- Mobile Safari (iOS 14+)
- Chrome Mobile (Android 10+)

---

## LAYOUT & SPACING PATTERNS

### Section Padding
```css
Desktop: py-24 (96px top/bottom)
Mobile: py-12 (48px top/bottom)
Large sections: py-32 (128px)
```

### Container Width
```css
max-w-7xl mx-auto (1280px)
Padding: px-6 lg:px-8
```

### Grid Layouts
```css
1-column: grid-cols-1 (mobile default)
2-column: grid-cols-1 md:grid-cols-2
3-column: grid-cols-1 md:grid-cols-2 lg:grid-cols-3
4-column: grid-cols-1 md:grid-cols-2 lg:grid-cols-4

Gap: gap-8 (2rem / 32px)
```

### Common Spacings
```css
Between sections: mb-12 or mb-16
Card padding: p-6 or p-8
Button padding: px-6 py-3 or px-8 py-4
```

---

## INTERACTION PATTERNS

### Buttons

**Primary Button (Gold):**
```css
bg-gradient-to-r from-accent-metal to-accent-metal-light
text-white
px-8 py-4
rounded-lg
hover:shadow-xl
hover:scale-105
transition-all
```

**Secondary Button (Outline):**
```css
border-2 border-gray-900
text-gray-900
px-8 py-4
rounded-lg
hover:bg-gray-900
hover:text-white
transition-all
```

**Ghost Button:**
```css
bg-transparent
border border-white/20
text-white
hover:bg-white/10
backdrop-blur-sm
```

### Links
```css
text-gray-700
hover:text-accent-metal
transition-colors
underline on hover (optional)
```

### Cards
```css
bg-white
rounded-2xl
border border-gray-200
shadow-sm
hover:shadow-xl
transition-all duration-300
hover:-translate-y-2
```

### Forms
```css
Input/Textarea:
  border border-gray-300
  px-4 py-3
  focus:border-gray-900
  focus:ring-1 focus:ring-gray-900
  rounded (no radius specified)

Labels:
  text-sm
  font-medium
  text-gray-700
  mb-1

Error text:
  text-red-500
  text-xs
  mt-1
```

---

## CONTENT GUIDELINES

### Voice & Tone
- **Direct:** No corporate jargon
- **Confident:** "We build" not "We try to build"
- **Honest:** Acknowledge limitations
- **Technical:** Use proper terminology
- **Human:** Conversational but professional

### Writing Style
- Short sentences
- Active voice
- Concrete examples
- Avoid buzzwords ("synergy", "leverage", "paradigm")
- Use specifics ("4-6 weeks" not "quickly")

### Common Phrases
- "Built by precision. Driven by purpose."
- "We build from nothing but code, caffeine, and conviction."
- "No investors. No paid tools. No noise. Just pure engineering."
- "Innovation isn't a tagline — it's survival."
- "We don't chase trends. We build products that outlast them."

---

## BRAND ASSETS

### Logo Usage
- **Full Logo:** "Genrec" (Black) + "AI" (Gold)
- **Monochrome:** All black or all white for certain backgrounds
- **Minimum Size:** 100px width
- **Clear Space:** Equal to height of "AI" on all sides

### Color Usage
- **Primary:** White backgrounds with black text
- **Accent:** Gold (#C9A66B) for CTAs, highlights, emphasis
- **Dark Mode:** Midnight black (#0b0f1a) with white text
- **Never:** Pure black (#000000) on pure white (#FFFFFF) for body text

### Typography Scale
- **Hero Headlines:** 5xl-8xl (48-96px)
- **Section Titles:** 3xl-5xl (30-48px)
- **Subsections:** xl-2xl (20-24px)
- **Body:** base-lg (16-18px)
- **Small:** sm (14px)
- **Tiny:** xs (12px)

---

## MOBILE OPTIMIZATION

### Mobile-First Approach
- Design for mobile (375px) first
- Enhance for tablet (768px)
- Optimize for desktop (1280px+)

### Mobile-Specific Changes
```css
Text sizes: Reduce by 1-2 steps
  8xl → 5xl
  5xl → 3xl
  2xl → xl

Padding: Reduce by ~40%
  py-24 → py-12
  px-8 → px-4

Grid columns: Stack vertically
  grid-cols-3 → grid-cols-1

Navigation: Hamburger menu
  Desktop horizontal → Mobile slide-in panel
```

### Touch Targets
- Minimum: 44x44px (iOS standard)
- Buttons: px-8 py-4 (typically 48px+ height)
- Links: Adequate padding around text

### Performance on Mobile
- Lazy load images
- Defer non-critical JS
- Minimize initial bundle
- Optimize fonts (system fallbacks)

---

## ACCESSIBILITY CHECKLIST

✓ Semantic HTML5 elements  
✓ ARIA labels on interactive elements  
✓ Keyboard navigation (Tab, Enter, Esc)  
✓ Focus visible styles  
✓ Skip links for main content  
✓ Alt text on all images  
✓ Color contrast ratio 4.5:1+ for body text  
✓ Color contrast ratio 3:1+ for large text  
✓ Form labels associated with inputs  
✓ Error messages announced to screen readers  
✓ Loading states communicated  
✓ No autoplay videos with sound  
✓ Captions for video content  
✓ Reduced motion support (@prefers-reduced-motion)  

---

## DEPLOYMENT & HOSTING

### Hosting Platform
- **Provider:** Vercel
- **Domain:** genrecai.com
- **SSL:** Automatic (Let's Encrypt)
- **CDN:** Vercel Edge Network

### Environment Variables
```env
NEXT_PUBLIC_SITE_URL=https://genrecai.com
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
CONTACT_EMAIL=contact@genrecai.com
```

### Build Configuration
```javascript
// next.config.js
module.exports = {
  images: {
    domains: ['images.unsplash.com'],
    formats: ['image/avif', 'image/webp'],
  },
  experimental: {
    optimizeCss: true,
  },
}
```

### Deployment Process
1. Push to main branch on GitHub
2. Vercel auto-deploys
3. Preview deployments for PRs
4. Production at genrecai.com

---

## TESTING CHECKLIST

### Before Launch
- [ ] All links work (no 404s)
- [ ] Forms submit correctly
- [ ] Contact form emails arrive
- [ ] Mobile responsive on iOS/Android
- [ ] Cross-browser testing (Chrome, Safari, Firefox, Edge)
- [ ] Images load and display correctly
- [ ] Animations perform smoothly (60fps)
- [ ] Page load time < 3s
- [ ] Lighthouse score 90+ (Performance, Accessibility, Best Practices, SEO)
- [ ] No console errors
- [ ] Cookie banner works and stores preferences
- [ ] Analytics tracking fires correctly

---

## FUTURE ENHANCEMENTS

### Planned Features
1. Blog CMS integration
2. Case study detail pages
3. Product comparison tool
4. Interactive demos for each product
5. Client testimonial videos
6. Live chat support
7. Multi-language support (Spanish, French)
8. Dark mode toggle
9. A/B testing framework
10. Advanced analytics dashboard

### Content Roadmap
1. Monthly blog posts
2. Quarterly case studies
3. Product update announcements
4. Industry insights and research
5. Technical deep-dives

---

## CONTACT & SUPPORT

**General Inquiries:**  
contact@genrecai.com

**Founders:**
- Jai Samyukth B U: jaisamyukth@gmail.com
- Shyamnath Sankar: shyamnathsankar@genrecai.com
- Harish V: harish@genrecai.com

**Social Media:**
- LinkedIn: linkedin.com/company/genrecai
- Twitter: @genrecai
- GitHub: github.com/genrecai

**Response Time:** Within 48 hours (usually same day)

---

## CONCLUSION

This documentation covers the complete Genrec AI website including:
- ✅ All text content from every page
- ✅ Complete page-by-page breakdown of all 20+ routes
- ✅ Admin panel functionality (Blog & Gallery management)
- ✅ All product pages and specialized solutions
- ✅ Divisions, Careers, and organizational structure
- ✅ Complete design system (colors, typography, spacing)
- ✅ All animations and interactive effects
- ✅ Layout patterns and responsive behavior
- ✅ Component architecture and functionality
- ✅ API routes and backend functionality
- ✅ Technical specifications
- ✅ Accessibility and performance guidelines
- ✅ Privacy policy and legal compliance

### Quick Reference: All Pages

**Marketing & Content:**
- `/` - Homepage (Portfolio showcase with vertical carousel)
- `/about` - About Us
- `/products` - Products Overview
- `/divisions` - Four Divisions
- `/careers` - Join the Team
- `/case-studies` - Success Stories
- `/blog` - Insights & Articles
- `/contact` - Get in Touch
- `/privacy` - Privacy Policy

**Product Details:**
- `/products/lumina-iq` - AI Learning Platform (✨ Updated v2.1)
- `/products/tabble` - Premium Dining Solution (✨ New v2.1)
- `/products/educational-website` - Education Sites
- `/products/construction-website` - Construction Sites
- `/products/restaurant-website` - Restaurant Sites

**Admin & System:**
- `/admin` - Admin Panel (Blog + Gallery)
- `/not-found` - 404 Page
- `/error` - Error Boundary
- `/loading` - Loading State

**API Endpoints:**
- `/api/contact` - Form Submissions
- `/api/auth` - Authentication
- `/api/gallery` - Image Management

**Document Version:** 2.1  
**Last Updated:** November 9, 2025  
**Compiled by:** Droid (Factory AI)

---

## CHANGELOG

### Version 2.1 (November 9, 2025)

**Homepage Updates:**
- ✅ Removed duplicate footer (footer now only in layout.tsx)
- ✅ Removed LuminaIQ section from homepage (moved to dedicated product page)
- ✅ Updated component structure and imports

**WorkShowcase Component (Portfolio Carousel):**
- ✅ Redesigned carousel navigation with vertical layout on right side
- ✅ Moved navigation arrows from horizontal (left/right edges) to vertical (top/bottom of sidebar)
- ✅ Repositioned thumbnail gallery from horizontal row to vertical stack
- ✅ Improved mobile experience with progress dots replacing thumbnails
- ✅ Enhanced responsive behavior for tablet and mobile devices
- ✅ Maintained 3D parallax effect and smooth animations

**LuminaIQ Product Page:**
- ✅ Complete page redesign with modern layout and animations
- ✅ Added comprehensive hero section with "OUR FLAGSHIP PRODUCT" badge
- ✅ Implemented 6-feature grid with icons and hover effects
- ✅ Added product preview section with placeholder
- ✅ Created 3-step process section (Upload → Learn → Master)
- ✅ **Key Change:** Reordered sections - "How It Works" now positioned AFTER product preview
- ✅ Added dark CTA section with "JOIN WAITLIST" and "WATCH DEMO" buttons
- ✅ Scroll-triggered animations throughout page
- ✅ Mobile-responsive layout with stacked sections

**Tabble Product Page (New):**
- ✅ Created complete product page matching LuminaIQ design system
- ✅ Added "HOSPITALITY TECHNOLOGY" hero section
- ✅ Implemented 6 hospitality-specific features
- ✅ Created 3-step process (Browse → Order → Delight)
- ✅ Added product preview section
- ✅ Dark CTA section with "REQUEST DEMO" and "VIEW PRICING" buttons
- ✅ Consistent animations and layout with LuminaIQ page
- ✅ Fully responsive design

**Design System Consistency:**
- ✅ Unified layout structure across product pages
- ✅ Consistent section ordering (Hero → Features → Preview → Process → CTA)
- ✅ Standardized spacing and typography
- ✅ Matching animation patterns and timing
- ✅ Cohesive color scheme and component styles

### Version 2.0 (November 6, 2025)
- Initial comprehensive documentation
- All pages and components documented
- Complete design system reference
- Technical architecture overview

---

For updates or questions about this documentation, contact the Genrec AI team at contact@genrecai.com.

---

**End of Documentation**
