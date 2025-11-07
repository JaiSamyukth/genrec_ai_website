# Genrec AI Website - Complete Technical Documentation

## Table of Contents

1. [Project Overview](#1-project-overview)
2. [Core Architecture](#2-core-architecture)
3. [Technology Stack](#3-technology-stack)
4. [Environment Setup](#4-environment-setup)
5. [Project Structure](#5-project-structure)
6. [Pages (Next.js App Router)](#6-pages-nextjs-app-router)
7. [Components](#7-components)
8. [Styling System](#8-styling-system)
9. [API Routes](#9-api-routes)
10. [Utilities and Libraries](#10-utilities-and-libraries)
11. [Error Handling](#11-error-handling)
12. [Build and Deployment](#12-build-and-deployment)
13. [Testing](#13-testing)
14. [Performance Optimization](#14-performance-optimization)
15. [SEO and Metadata](#15-seo-and-metadata)
16. [Dependencies Reference](#16-dependencies-reference)
17. [Commands Reference](#17-commands-reference)
18. [Future Improvements](#18-future-improvements)

---

## 1. Project Overview

### 1.1 Project Name
**Genrec AI Website** - Privacy-first AI solutions for construction, hospitality, and education

### 1.2 Description
A high-performance, enterprise-grade marketing website built with Next.js 16, React 19, and TypeScript. The project showcases three main product lines:
- **Tabble**: Luxury table management for hotels and restaurants
- **Lumina IQ**: AI learning platform for personalized education
- **Industry Websites**: Custom websites for educational, construction, and restaurant sectors

### 1.3 Purpose
- Marketing and lead generation
- Product showcase and demonstration
- Blog and case studies platform
- Contact and inquiry management
- Brand establishment for Genrec AI

### 1.4 Key Features
- Modern, luxury design aesthetic (gold and midnight black theme)
- Animated parallax scrolling and interactive components
- Mobile-first responsive design
- SEO optimized with structured data
- Privacy-focused analytics
- Email contact forms
- Blog management system
- Case studies showcase

---

## 2. Core Architecture

### 2.1 Application Structure

The application follows Next.js 16 App Router architecture with:
- **Server Components** by default (React Server Components)
- **Client Components** marked with `'use client'` directive
- **File-based routing** in `src/app/` directory
- **API Routes** using Route Handlers (`route.ts` files)
- **Layout composition** for shared UI elements

### 2.2 Data Flow

```
User Request
    ↓
Next.js App Router
    ↓
Server Components (RSC) ←→ API Routes (Next.js Backend)
    ↓                              ↓
Client Components              Supabase Database (Optional)
    ↓                              ↓
Framer Motion Animations      SMTP Email Service
    ↓
Browser Render
```

### 2.3 Rendering Strategy

- **Static Generation (SSG)**: Homepage, product pages, about, case studies
- **Server-Side Rendering (SSR)**: Blog posts with dynamic slugs
- **Client-Side Rendering (CSR)**: Interactive components (forms, animations, modals)
- **Incremental Static Regeneration (ISR)**: Blog index with revalidation

### 2.4 State Management

- **React Server Components**: Server state (no client state needed)
- **React useState/useEffect**: Local component state
- **Form State**: React Hook Form with Zod validation
- **Global State**: Minimal - most state is component-scoped

---

## 3. Technology Stack

### 3.1 Frontend Framework

| Technology | Version | Purpose |
|-----------|---------|---------|
| **Next.js** | 16.0.1 | React framework with App Router |
| **React** | 19.2.0 | UI library |
| **React DOM** | 19.2.0 | React renderer |
| **TypeScript** | 5.3.3 | Type safety |

### 3.2 Styling

| Technology | Version | Purpose |
|-----------|---------|---------|
| **Tailwind CSS** | 3.3.6 | Utility-first CSS framework |
| **PostCSS** | 8.4.32 | CSS processing |
| **Autoprefixer** | 10.4.16 | CSS vendor prefixing |
| **tailwindcss-animate** | 1.0.7 | Animation utilities |
| **class-variance-authority** | 0.7.1 | Component variant management |
| **clsx** | 2.0.0 | Conditional className utility |
| **tailwind-merge** | 2.1.0 | Merge Tailwind classes |

### 3.3 Animation and Interaction

| Library | Version | Purpose |
|---------|---------|---------|
| **Framer Motion** | 11.0.0 | Advanced animations |
| **GSAP** | 3.13.0 | Timeline-based animations |
| **@gsap/react** | 2.1.2 | GSAP React integration |
| **react-spring** | 10.0.3 | Physics-based animations |
| **AOS (Animate On Scroll)** | 2.3.4 | Scroll-triggered animations |
| **Lottie React** | 2.4.1 | JSON-based animations |
| **react-parallax** | 3.5.2 | Parallax effects |
| **react-intersection-observer** | 9.16.0 | Viewport detection |

### 3.4 UI Components

| Library | Version | Purpose |
|---------|---------|---------|
| **Radix UI** | Various | Headless UI components |
| - Accordion | 1.1.2 | Collapsible sections |
| - Dialog | 1.0.5 | Modal dialogs |
| - Dropdown Menu | 2.0.6 | Dropdown menus |
| - Navigation Menu | 1.2.14 | Navigation menus |
| - Select | 2.0.0 | Select dropdowns |
| - Tabs | 1.0.4 | Tab components |
| - Toast | 1.1.5 | Notification toasts |
| **Lucide React** | 0.545.0 | Icon library (24,000+ icons) |

### 3.5 Forms and Validation

| Library | Version | Purpose |
|---------|---------|---------|
| **React Hook Form** | 7.48.2 | Form state management |
| **Zod** | 3.22.4 | Schema validation |
| **@hookform/resolvers** | 5.2.2 | Form validation integration |

### 3.6 Content and Markdown

| Library | Version | Purpose |
|---------|---------|---------|
| **@next/mdx** | 14.0.0 | MDX support |
| **@mdx-js/loader** | 3.0.0 | MDX loader |
| **@mdx-js/react** | 3.0.0 | MDX React integration |

### 3.7 Backend and APIs

| Library | Version | Purpose |
|---------|---------|---------|
| **Nodemailer** | 6.9.7 | Email sending |
| **Supabase** | N/A | Database (optional) |

### 3.8 Analytics and Monitoring

| Library | Version | Purpose |
|---------|---------|---------|
| **@vercel/analytics** | 1.1.1 | Vercel Analytics |

### 3.9 Compiler and Bundler

- **Turbopack**: Next.js 16's default bundler (faster than Webpack)
- **SWC**: Rust-based compiler for fast TypeScript/JavaScript compilation
- **React Compiler**: Automatic optimization for React 19

---

## 4. Environment Setup

### 4.1 Prerequisites

- **Node.js**: 20.10.4 or higher
- **npm**: 10.x or higher (comes with Node.js)
- **Git**: 2.50.1 or higher

### 4.2 Installation Steps

```bash
# 1. Clone the repository
git clone <repository-url>
cd genrec_ai_website

# 2. Install dependencies
npm install

# 3. Set up environment variables
cp .env.example .env.local

# 4. Configure environment variables (see section 4.3)

# 5. Run development server
npm run dev

# 6. Open browser
# Navigate to http://localhost:3000
```

### 4.3 Environment Variables

Create a `.env.local` file with the following variables:

```env
# SMTP Settings (Required for contact form)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
CONTACT_TO_EMAIL=contact@genrecai.com

# Admin Credentials (Optional - for blog admin)
NEXT_PUBLIC_ADMIN_USERNAME=genrecai
ADMIN_PASSWORD_HASH=hashed-password-here

# Analytics (Optional)
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
NEXT_PUBLIC_HOTJAR_ID=XXXXXXX
NEXT_PUBLIC_VERCEL_ANALYTICS_ID=

# Sentry Error Tracking (Optional)
SENTRY_DSN=
NEXT_PUBLIC_SENTRY_DSN=

# API Keys (Optional - for future integrations)
OPENAI_API_KEY=
STRIPE_SECRET_KEY=
STRIPE_PUBLISHABLE_KEY=

# Database (Optional - Supabase)
DATABASE_URL=postgresql://user:password@localhost:5432/genrec_ai

# Site Configuration
NEXT_PUBLIC_SITE_URL=https://genrecai.com
NEXT_PUBLIC_SITE_NAME=Genrec AI
```

### 4.4 Port Configuration

- **Development**: `http://localhost:3000`
- **Production**: Configured by hosting provider (Vercel)

### 4.5 Node Version

```json
// package.json
{
  "engines": {
    "node": ">=20.0.0",
    "npm": ">=10.0.0"
  }
}
```

---

## 5. Project Structure

### 5.1 Directory Tree

```
genrec_ai_website/
├── .env.example                 # Environment variables template
├── .env.local                   # Local environment variables (not in git)
├── .eslintrc.json              # ESLint configuration
├── .prettierrc.json            # Prettier code formatting config
├── .gitignore                  # Git ignore rules
├── .husky/                     # Git hooks for pre-commit
├── .next/                      # Next.js build output (generated)
├── next.config.js              # Next.js configuration
├── tsconfig.json               # TypeScript configuration
├── tailwind.config.ts          # Tailwind CSS configuration
├── postcss.config.js           # PostCSS configuration
├── jest.config.js              # Jest test configuration
├── jest.setup.js               # Jest setup file
├── playwright.config.ts        # Playwright E2E test config
├── vercel.json                 # Vercel deployment config
├── package.json                # Dependencies and scripts
├── package-lock.json           # Locked dependency versions
├── README.md                   # Project readme
├── node_modules/               # Installed dependencies (generated)
│
├── public/                     # Static assets
│   ├── favicon.ico             # Website favicon
│   ├── favicon.svg             # SVG favicon
│   ├── apple-touch-icon.png   # Apple touch icon
│   ├── favicon-16x16.png      # 16x16 favicon
│   ├── favicon-32x32.png      # 32x32 favicon
│   ├── og-image.png           # OpenGraph image
│   ├── logo.png               # Company logo
│   ├── site.webmanifest       # PWA manifest
│   └── browserconfig.xml      # Browser configuration
│
├── content/                    # MDX content files
│   └── blog/                  # Blog post markdown files
│
├── src/                       # Source code
│   ├── app/                   # Next.js App Router
│   │   ├── layout.tsx         # Root layout
│   │   ├── page.tsx           # Homepage
│   │   ├── globals.css        # Global styles
│   │   ├── error.tsx          # Error boundary
│   │   ├── global-error.tsx   # Global error boundary
│   │   ├── not-found.tsx      # 404 page
│   │   ├── loading.tsx        # Loading UI
│   │   ├── robots.ts          # Robots.txt generator
│   │   ├── sitemap.ts         # Sitemap generator
│   │   │
│   │   ├── about/             # About page
│   │   │   └── page.tsx
│   │   │
│   │   ├── products/          # Products section
│   │   │   ├── page.tsx       # Products index
│   │   │   ├── tabble/
│   │   │   │   └── page.tsx
│   │   │   ├── lumina-iq/
│   │   │   │   └── page.tsx
│   │   │   ├── educational-website/
│   │   │   │   └── page.tsx
│   │   │   ├── construction-website/
│   │   │   │   └── page.tsx
│   │   │   └── restaurant-website/
│   │   │       └── page.tsx
│   │   │
│   │   ├── blog/              # Blog section
│   │   │   ├── page.tsx       # Blog index
│   │   │   ├── [slug]/        # Dynamic blog post
│   │   │   │   └── page.tsx
│   │   │   └── admin/         # Blog admin panel
│   │   │       └── page.tsx
│   │   │
│   │   ├── case-studies/      # Case studies (empty)
│   │   │   └── page.tsx
│   │   │
│   │   ├── contact/           # Contact page (empty)
│   │   │   └── page.tsx
│   │   │
│   │   ├── careers/           # Careers page
│   │   │   └── page.tsx
│   │   │
│   │   ├── divisions/         # Divisions page
│   │   │   └── page.tsx
│   │   │
│   │   ├── privacy/           # Privacy policy
│   │   │   └── page.tsx
│   │   │
│   │   ├── admin/             # Admin dashboard
│   │   │   └── page.tsx
│   │   │
│   │   └── api/               # API routes
│   │       ├── contact/
│   │       │   └── route.ts
│   │       ├── blogs/
│   │       │   ├── route.ts
│   │       │   └── [id]/
│   │       │       └── route.ts
│   │       ├── auth/
│   │       │   └── route.ts
│   │       ├── gallery/
│   │       │   └── upload/
│   │       │       └── route.ts
│   │       └── test-supabase/
│   │           └── route.ts
│   │
│   ├── components/            # React components
│   │   ├── ui/                # Base UI components
│   │   │   ├── button.tsx
│   │   │   ├── toaster.tsx
│   │   │   ├── navigation-menu.tsx
│   │   │   └── ... (other Radix UI components)
│   │   │
│   │   ├── animations/        # Animation components
│   │   │   └── ...
│   │   │
│   │   ├── __tests__/         # Component tests
│   │   │   └── ...
│   │   │
│   │   ├── Header.tsx         # Site header
│   │   ├── Footer.tsx         # Site footer
│   │   ├── HeroParallax.tsx   # Homepage hero
│   │   ├── WorkShowcase.tsx   # Work showcase section
│   │   ├── ContactForm.tsx    # Contact form
│   │   ├── ContactModal.tsx   # Contact modal dialog
│   │   ├── CookieBanner.tsx   # GDPR cookie banner
│   │   ├── FAQ.tsx            # FAQ component
│   │   ├── FAQSection.tsx     # FAQ section
│   │   ├── BlogPreview.tsx    # Blog preview cards
│   │   ├── ProductsPreview.tsx # Product showcase
│   │   ├── TestimonialsSection.tsx # Client testimonials
│   │   ├── WhoWeAre.tsx       # Company info section
│   │   ├── OurEthos.tsx       # Company values
│   │   ├── WorkWithUs.tsx     # CTA section
│   │   ├── LoadingScreen.tsx  # Loading animation
│   │   ├── GlobalLoader.tsx   # Global loading state
│   │   ├── PageTransition.tsx # Page transition wrapper
│   │   └── ... (50+ components)
│   │
│   ├── lib/                   # Utility libraries
│   │   ├── utils.ts           # Helper functions
│   │   ├── theme.ts           # Theme configuration
│   │   └── supabase/          # Supabase client
│   │       ├── client.ts
│   │       └── server.ts
│   │
│   ├── hooks/                 # Custom React hooks (empty)
│   │
│   ├── types/                 # TypeScript type definitions (empty)
│   │
│   ├── data/                  # Static data files (empty)
│   │
│   └── providers/             # React context providers
│       └── ...
│
├── tests/                     # Test files
│   ├── e2e/                   # Playwright E2E tests
│   └── unit/                  # Jest unit tests
│
└── Assets/                    # Design assets
```

### 5.2 Key Directories Explained

#### `/src/app`
Next.js App Router directory. Each folder represents a route. Files like `page.tsx`, `layout.tsx`, `loading.tsx`, and `error.tsx` have special meanings.

#### `/src/components`
Reusable React components. Split into:
- **ui/**: Base UI components (buttons, inputs, etc.)
- **Feature components**: Domain-specific components (Hero, Footer, etc.)

#### `/src/lib`
Utility functions, helpers, and shared logic. Contains theme configuration and Supabase client setup.

#### `/public`
Static assets served at root. Accessible via `/filename.ext` URLs.

#### `/content`
Markdown/MDX content files for blog posts and other content.

---

## 6. Pages (Next.js App Router)

### 6.1 Root Layout (`/src/app/layout.tsx`)

**Purpose**: Root layout wrapper for all pages

**Type**: Server Component

**Key Features**:
- Font loading (Inter, Merriweather)
- SEO metadata configuration
- Structured data (JSON-LD) for search engines
- Header and Footer wrappers
- Global styles import
- Analytics integration
- Cookie banner

**Metadata**:
```typescript
title: 'Genrec AI - Privacy-first AI for Construction, Hospitality & Education'
description: 'Engineering-grade AI systems that scale, protect data, and make operations smarter.'
keywords: ['enterprise AI', 'construction', 'hospitality', 'education', 'privacy-first']
```

**Fonts Loaded**:
- **Inter**: Sans-serif for body text
- **Merriweather**: Serif for headings

**Structured Data**:
- Organization schema
- Contact information
- Founder information
- Product offerings

---

### 6.2 Homepage (`/src/app/page.tsx`)

**Route**: `/`

**Type**: Server Component

**Components Used**:
- `HeroParallax` - Animated hero section with carousel
- `WorkShowcase` - Interactive project showcase
- `WhoWeAre` - Company introduction
- `OurEthos` - Company values
- `WorkWithUs` - CTA section
- `Footer` - Site footer

**Metadata**:
```typescript
title: 'Genrec AI - Built by Precision. Driven by Purpose.'
description: 'We build intelligent systems that work where others fail — software designed for performance, not pretense.'
```

**Layout**:
```
Hero Section (Full viewport height)
    ↓
Work Showcase (Interactive carousel)
    ↓
Who We Are (Company introduction)
    ↓
Our Ethos (Values and mission)
    ↓
Work With Us (CTA)
    ↓
Footer
```

---

### 6.3 Products Page (`/src/app/products/page.tsx`)

**Route**: `/products`

**Type**: Client Component (`'use client'`)

**Purpose**: Showcase all products with detailed features

**Products Featured**:
1. **Educational Websites** - Student enrollment sites
2. **Construction Websites** - Portfolio and project sites
3. **Restaurant Websites** - Reservation and menu sites

**Key Features**:
- Interactive product cards with hover effects
- Feature lists with icons
- Statistics and metrics
- FAQ section
- CTA buttons for demos

**Animations**:
- Framer Motion for card animations
- Scroll-triggered fade-ins
- Hover scale effects

---

### 6.4 About Page (`/src/app/about/page.tsx`)

**Route**: `/about`

**Type**: Server Component

**Sections**:
1. **Hero** - Company mission statement
2. **Story** - Company background and founding story
3. **Values** - Four core values with icons
4. **Founders** - Founder profiles with images
5. **Approach** - Three-step methodology
6. **CTA** - Contact call-to-action

**Values Displayed**:
- Mission-Driven
- Client-First
- Innovation with Restraint
- Engineering Excellence

**Icons**: Lucide React icons (Target, Users, Lightbulb, Code)

---

### 6.5 Blog Pages

#### Blog Index (`/src/app/blog/page.tsx`)

**Route**: `/blog`

**Type**: Server Component with dynamic data

**Features**:
- Fetches blog posts from API or static data
- Grid layout of blog cards
- Filtering by category
- Search functionality
- Pagination

**Data Source**: `/api/blogs` or local markdown files

#### Blog Post (`/src/app/blog/[slug]/page.tsx`)

**Route**: `/blog/:slug`

**Type**: Server Component with dynamic routing

**Features**:
- MDX content rendering
- Syntax highlighting for code
- Author information
- Read time calculation
- Share buttons
- Related posts

**Dynamic Params**: `slug` (URL-friendly post identifier)

#### Blog Admin (`/src/app/blog/admin/page.tsx`)

**Route**: `/blog/admin`

**Type**: Client Component with authentication

**Features**:
- Create new blog posts
- Edit existing posts
- Markdown editor with preview
- Image upload
- Draft/publish toggle
- Authentication required

---

### 6.6 Individual Product Pages

#### Tabble (`/src/app/products/tabble/page.tsx`)

**Route**: `/products/tabble`

**Product**: Luxury table management for hotels and restaurants

**Features Highlighted**:
- Guest interface
- Staff dashboard
- Analytics
- Integrations

#### Lumina IQ (`/src/app/products/lumina-iq/page.tsx`)

**Route**: `/products/lumina-iq`

**Product**: AI learning platform

**Features Highlighted**:
- Adaptive learning
- Assessment engine
- Student analytics
- Curriculum integration

#### Educational Website (`/src/app/products/educational-website/page.tsx`)

**Route**: `/products/educational-website`

**Product**: Custom websites for schools and institutions

**Benefits**:
- 340% increase in online inquiries
- Mobile-first design
- SEO optimization
- Enrollment tracking

#### Construction Website (`/src/app/products/construction-website/page.tsx`)

**Route**: `/products/construction-website`

**Product**: Portfolio websites for contractors

**Benefits**:
- 5.2x more qualified leads
- Project galleries
- Testimonials
- Local SEO

#### Restaurant Website (`/src/app/products/restaurant-website/page.tsx`)

**Route**: `/products/restaurant-website`

**Product**: Reservation-optimized restaurant sites

**Benefits**:
- 68% increase in reservations
- Online menu
- Reservation system
- Social integration

---

### 6.7 Special Pages

#### 404 Not Found (`/src/app/not-found.tsx`)

**Type**: Client Component

**Features**:
- Animated 404 background
- Navigation suggestions
- Popular page links
- Branded design

**Components**: Framer Motion animations, Lucide icons

#### Error Page (`/src/app/error.tsx`)

**Type**: Client Component (Error Boundary)

**Props**:
- `error`: Error object
- `reset`: Function to retry

**Features**:
- Error logging
- "Try Again" button
- "Go Home" button
- Friendly error message

#### Loading (`/src/app/loading.tsx`)

**Type**: Server Component

**Purpose**: Loading UI shown during page transitions

**Implementation**: Simple spinner or skeleton UI

#### Robots.txt (`/src/app/robots.ts`)

**Type**: Route Handler

**Purpose**: Generate dynamic `robots.txt`

**Rules**:
- Allow all crawlers
- Sitemap reference

#### Sitemap (`/src/app/sitemap.ts`)

**Type**: Route Handler

**Purpose**: Generate dynamic XML sitemap

**Includes**:
- All static pages
- Blog posts
- Product pages
- Last modified dates

---

## 7. Components

### 7.1 Header Component (`/src/components/Header.tsx`)

**Type**: Client Component (`'use client'`)

**Purpose**: Main navigation header

**State Management**:
- `isScrolled`: Boolean for scroll detection
- `isMobileMenuOpen`: Boolean for mobile menu toggle
- `isVisible`: Boolean for hide-on-scroll behavior
- `lastScrollY`: Number for scroll direction
- `contactOpen`: Boolean for contact modal

**Features**:
- Auto-hide on scroll down
- Show on scroll up or mouse near top
- Responsive mobile menu
- Dropdown navigation for products
- Contact modal trigger
- Smooth animations (Framer Motion)

**Navigation Items**:
- Products (dropdown with 5 products)
- Case Studies
- About
- Blog
- Contact button

**Styling**:
- Fixed position with backdrop blur
- Gradient gold accent on logo
- Mobile hamburger menu
- Sticky header behavior

---

### 7.2 Footer Component (`/src/components/Footer.tsx`)

**Type**: Server Component

**Purpose**: Site footer with links and company info

**Sections**:
1. **Company Info**
   - Logo
   - Tagline
   - Copyright notice

2. **Products Links**
   - Tabble
   - Lumina IQ
   - Construct AI
   - Restaurant Tech

3. **Company Links**
   - About
   - Case Studies
   - Blog
   - Contact

4. **Contact Info**
   - Email address
   - Social media links (LinkedIn, Twitter, GitHub)

5. **Legal Links**
   - Privacy Policy
   - Terms of Service
   - Cookie Policy

**Styling**:
- Dark background (#0b0f1a)
- Gold accent colors
- Grid layout (responsive)
- Icon integration (Lucide React)

---

### 7.3 HeroParallax Component (`/src/components/HeroParallax.tsx`)

**Type**: Client Component (`'use client'`)

**Purpose**: Animated hero section with parallax scrolling

**Hooks Used**:
- `useState`: Current image index, mount status
- `useEffect`: Image carousel rotation, SSR hydration
- `useScroll`: Scroll position tracking (Framer Motion)
- `useTransform`: Parallax transformations

**Features**:
- Rotating background carousel (5-second intervals)
- Parallax scroll effects
- Animated headline and subtext
- Two CTA buttons
- Scroll indicator with bounce animation
- Grayscale images with gradient overlays

**Carousel Images**: 4 tech-related Unsplash images

**CTA Buttons**:
1. "Explore Our Work" → `/products`
2. "Learn About LuminaIQ" → `/products/lumina-iq`

**Animations**:
- `backgroundY`: Parallax background movement
- `backgroundOpacity`: Fade out on scroll
- `contentOpacity`: Fade out on scroll
- Staggered text animations

**Accessibility**:
- `suppressHydrationWarning` for client-only rendering
- Loading state for SSR compatibility

---

### 7.4 WorkShowcase Component (`/src/components/WorkShowcase.tsx`)

**Type**: Client Component (`'use client'`)

**Purpose**: Interactive 3D carousel for project showcase

**State**:
- `currentIndex`: Current displayed image index
- `mouseX`, `mouseY`: Mouse position for 3D rotation

**Features**:
- **3D Rotation**: Card tilts based on mouse position
- **Carousel Navigation**: Previous/Next buttons
- **Thumbnail Navigation**: Clickable thumbnails
- **Progress Indicators**: Dots at bottom
- **Image Metadata**: Title overlay and counter badge
- **Smooth Transitions**: Spring physics for rotation

**Images**: 5 project screenshots from Unsplash

**Physics**:
- Spring config: `{ damping: 25, stiffness: 150 }`
- Rotation range: -8° to +8° on X/Y axes
- Perspective: 1000px for 3D effect

**Animations** (Framer Motion):
- Image fade-in/out with scale
- Hover effects on navigation buttons
- Thumbnail ring highlight on active

**Accessibility**:
- ARIA labels on navigation buttons
- Keyboard navigation support

---

### 7.5 ContactForm Component (`/src/components/ContactForm.tsx`)

**Type**: Client Component (`'use client'`)

**Purpose**: Contact form with validation

**Form Library**: React Hook Form

**Validation**: Zod schema

**Fields**:
- Name (required, min 2 chars)
- Email (required, valid email)
- Company (optional)
- Message (required, min 10 chars)

**Features**:
- Real-time validation
- Error messages
- Loading state during submission
- Success/error toast notifications
- Disabled state after submission
- Honeypot spam protection (optional)

**API Endpoint**: `POST /api/contact`

**Submit Handler**:
```typescript
async function onSubmit(data: FormData) {
  // 1. Show loading state
  // 2. POST to API
  // 3. Handle success/error
  // 4. Show toast notification
  // 5. Reset form or show success message
}
```

**Styling**:
- Tailwind CSS
- Custom focus states
- Error message styling
- Button loading spinner

---

### 7.6 ContactModal Component (`/src/components/ContactModal.tsx`)

**Type**: Client Component (`'use client'`)

**Purpose**: Modal dialog wrapper for contact form

**Props**:
- `isOpen`: Boolean
- `onClose`: Callback function

**Features**:
- Radix UI Dialog component
- Backdrop with blur
- Escape key to close
- Click outside to close
- Animated entrance/exit
- Embedded ContactForm

**Animations**:
- Fade in backdrop
- Scale in content
- Smooth transitions (300ms)

**Accessibility**:
- Focus trap
- Keyboard navigation
- ARIA attributes
- Screen reader support

---

### 7.7 CookieBanner Component (`/src/components/CookieBanner.tsx`)

**Type**: Client Component (`'use client'`)

**Purpose**: GDPR-compliant cookie consent banner

**State**:
- `showBanner`: Boolean (stored in localStorage)

**Features**:
- Fixed position at bottom
- "Accept" and "Decline" buttons
- Animated slide-up entrance
- Persistent choice (localStorage)
- Link to privacy policy

**Cookie Logic**:
- Checks `localStorage.getItem('cookieConsent')`
- Sets consent on accept
- Disables analytics on decline

**Styling**:
- Dark background with gold accent
- Fixed bottom position
- Responsive layout
- Z-index above content

---

### 7.8 FAQ Component (`/src/components/FAQ.tsx`)

**Type**: Server Component (can be client if interactive)

**Purpose**: Reusable FAQ accordion component

**Props**:
- `faqs`: Array of `{ question: string, answer: string }`
- `title`: Section title (optional)
- `subtitle`: Section subtitle (optional)

**Implementation**: Radix UI Accordion

**Features**:
- Collapsible sections
- Single or multiple open at once
- Smooth expand/collapse animations
- Icon rotation on expand
- Keyboard navigation

**Styling**:
- Bordered accordion items
- Gold accent on hover
- Smooth transitions
- Responsive layout

---

### 7.9 BlogPreview Component (`/src/components/BlogPreview.tsx`)

**Type**: Server Component

**Purpose**: Display blog post cards on homepage

**Props**:
- `posts`: Array of blog post objects
- `limit`: Number of posts to show (default 3)

**Data Structure**:
```typescript
interface BlogPost {
  id: string
  title: string
  slug: string
  excerpt: string
  cover_image: string
  author: string
  date: string
  category: string
  read_time: string
}
```

**Features**:
- Image with gradient overlay
- Category badge
- Read time indicator
- Truncated excerpt
- "Read More" link
- Grid layout (responsive)

**Styling**:
- Card with hover lift effect
- Image aspect ratio 16:9
- Typography hierarchy
- Gold accent on hover

---

### 7.10 TestimonialsSection Component (`/src/components/TestimonialsSection.tsx`)

**Type**: Client Component (`'use client'`)

**Purpose**: Client testimonials carousel

**State**:
- `currentIndex`: Current testimonial

**Features**:
- Auto-rotating carousel
- Manual navigation (dots)
- Avatar images
- Company logos
- Star ratings
- Quote styling

**Testimonials Data**:
```typescript
interface Testimonial {
  id: number
  quote: string
  author: string
  role: string
  company: string
  avatar: string
  logo?: string
  rating: number
}
```

**Animations**:
- Fade in/out transitions
- Slide animations
- Auto-advance (5 seconds)

---

### 7.11 UI Components (`/src/components/ui/`)

These are base components from Radix UI, customized with Tailwind:

#### Button (`button.tsx`)
- Variants: default, destructive, outline, secondary, ghost, link
- Sizes: default, sm, lg, icon
- Loading state
- Disabled state

#### Toaster (`toaster.tsx`)
- Toast notification system
- Success, error, warning, info types
- Auto-dismiss
- Action buttons
- Stacking support

#### Navigation Menu (`navigation-menu.tsx`)
- Dropdown menus
- Keyboard navigation
- Hover triggers
- Animated content

#### Accordion (`accordion.tsx`)
- Single or multiple open
- Animated expand/collapse
- Custom icons

#### Dialog (`dialog.tsx`)
- Modal dialogs
- Backdrop
- Escape to close
- Focus trap

#### Tabs (`tabs.tsx`)
- Tab navigation
- Content switching
- Keyboard support

#### Select (`select.tsx`)
- Custom dropdown
- Search support
- Keyboard navigation

---

### 7.12 Animation Components

#### ScrollReveal (`/src/components/ScrollReveal.tsx`)
- Wrapper for scroll-triggered animations
- Uses `react-intersection-observer`
- Configurable animation types

#### ParallaxCarousel (`/src/components/ParallaxCarousel.tsx`)
- Parallax scrolling carousel
- Multiple layers
- Smooth scrolling

#### Timeline (`/src/components/Timeline.tsx`)
- Vertical timeline component
- Milestone markers
- Animated reveal on scroll

---

### 7.13 Feature Components

#### WhoWeAre (`/src/components/WhoWeAre.tsx`)
- Company introduction section
- Team size and expertise
- Mission statement

#### OurEthos (`/src/components/OurEthos.tsx`)
- Company values
- Three pillars of philosophy
- Icon + text layout

#### WorkWithUs (`/src/components/WorkWithUs.tsx`)
- Final CTA section
- Contact information
- Button to schedule call

#### FoundersPreview (`/src/components/FoundersPreview.tsx`)
- Founder profiles
- Images with hover effects
- LinkedIn links
- Bio text

#### ProductsPreview (`/src/components/ProductsPreview.tsx`)
- Product cards for homepage
- Icons and descriptions
- Links to product pages

#### StatsSection (`/src/components/StatsSection.tsx`)
- Key metrics display
- Animated counters
- Grid layout

---

### 7.14 Loading Components

#### LoadingScreen (`/src/components/LoadingScreen.tsx`)
- Full-page loading overlay
- Animated spinner
- Logo display

#### GlobalLoader (`/src/components/GlobalLoader.tsx`)
- Top progress bar
- Route change indicator
- Smooth animations

#### PageTransition (`/src/components/PageTransition.tsx`)
- Page transition wrapper
- Fade in/out effects
- Route change detection

---

## 8. Styling System

### 8.1 Design Tokens

The design system uses a luxury aesthetic with gold and midnight black:

#### Colors

```typescript
// Primary Colors
--primary-bg: #0b0f1a       // Midnight black
--secondary-bg: #111827     // Slightly lighter black
--accent-gold: #C9A66B      // Metallic gold (logo color)

// Accent Variations
--accent-gold-hover: #D4B478
--accent-gold-dark: #B8955A
--accent-gold-light: rgba(201, 166, 107, 0.1)
--accent-gold-glow: rgba(201, 166, 107, 0.3)

// Text Colors
--text-primary: #F7F7F7     // Crisp white
--text-secondary: #9AA3B2   // Muted gray
--text-gold: #C9A66B        // Gold emphasis
```

#### Typography

**Fonts**:
- **Serif**: Merriweather (headings) - weights 300, 400, 700, 900
- **Sans**: Inter (body) - variable font weight

**Font Sizes**:
```typescript
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

#### Spacing

```typescript
section padding: py-24 (96px) mobile, py-48 (192px) desktop
container: mx-auto px-4 (responsive gutters)
maxWidth: max-w-7xl (1280px)
```

#### Border Radius

```typescript
sm: calc(var(--radius) - 4px)
md: calc(var(--radius) - 2px)
lg: var(--radius)  // 0.5rem (8px)
```

---

### 8.2 Tailwind Configuration

File: `/tailwind.config.ts`

**Extended Theme**:

```typescript
colors: {
  'primary-bg': '#0b0f1a',
  'accent-metal': '#C9A66B',
  'light-text': '#F7F7F7',
  // ... plus Radix UI color system
}

fontFamily: {
  serif: ['Merriweather', 'Georgia', 'serif'],
  sans: ['Inter', 'system-ui', 'sans-serif'],
}

animation: {
  'fade-in': 'fadeIn 0.5s ease-in-out',
  'slide-up': 'slideUp 0.5s ease-out',
  'slide-down': 'slideDown 0.3s ease-out',
  'scale-in': 'scaleIn 0.3s ease-out',
  'spin-slow': 'spin 3s linear infinite',
}
```

**Custom Animations**:
- `fadeIn`: Opacity 0 → 1
- `slideUp`: TranslateY 20px → 0
- `slideDown`: TranslateY -20px → 0
- `scaleIn`: Scale 0.95 → 1
- `blob`: Morphing blob animation
- `float`: Floating animation
- `gradient-x`: Horizontal gradient shift

**Plugins**:
- `tailwindcss-animate`: Additional animation utilities

---

### 8.3 Global Styles

File: `/src/app/globals.css`

**Font Loading Optimization**:
```css
/* CRITICAL: Font display swap to prevent invisible text */
@font-face {
  font-family: 'Inter';
  font-display: swap;
  src: local('Inter'), local('system-ui');
}
```

**Smooth Scrolling**:
```css
html {
  scroll-behavior: smooth;
  scroll-padding-top: 80px; /* Header offset */
}
```

**Custom Scrollbar**:
```css
::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-thumb {
  background: #C9A66B; /* Gold scrollbar */
  border-radius: 10px;
}
```

**Selection Colors**:
```css
::selection {
  background: rgba(201, 166, 107, 0.2);
  color: #C9A66B;
}
```

**Image Animations**:
```css
/* Founder image hover effects */
.founder-image {
  filter: grayscale(100%);
  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

.founder-image:hover {
  filter: grayscale(0%);
  transform: scale(1.05);
  border-color: #C9A66B;
  box-shadow: 0 20px 40px rgba(201, 166, 107, 0.3);
}
```

**Utility Classes**:
```css
.gradient-text {
  background: linear-gradient(to right, #C9A66B, #D4B478);
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.glass {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}
```

---

### 8.4 Theme Configuration

File: `/src/lib/theme.ts`

**Exported Constants**:

```typescript
export const theme = {
  colors: { /* color palette */ },
  fonts: {
    serif: 'Merriweather, serif',
    sans: 'Inter, sans-serif',
  },
  spacing: {
    section: 'py-24',
    container: 'container mx-auto px-4',
    maxWidth: 'max-w-7xl mx-auto',
  },
  animation: {
    transition: 'transition-all duration-300',
    parallax: 'transform-gpu',
  }
}

export const gradients = {
  hero: 'bg-gradient-to-b from-[#0b0f1a] via-[#111827] to-[#0b0f1a]',
  card: 'bg-gradient-to-br from-[#111827] to-[#1f2937]',
  button: 'bg-gradient-to-r from-[#C9A66B] to-[#D4B478]',
  buttonHover: 'bg-gradient-to-r from-[#D4B478] to-[#E0C084]',
  text: 'bg-gradient-to-r from-[#C9A66B] to-[#D4B478] bg-clip-text text-transparent',
  goldShine: 'bg-gradient-to-r from-[#B8955A] via-[#C9A66B] to-[#D4B478]',
}
```

**Usage**:
```typescript
import { theme, gradients } from '@/lib/theme'

<div style={{ backgroundColor: theme.colors.background.primary }}>
  <button style={{ background: gradients.button }}>
    Click me
  </button>
</div>
```

---

### 8.5 Animation System

**Framer Motion**:
Used for:
- Page transitions
- Component animations
- Scroll-triggered animations
- Gesture-based interactions

**GSAP**:
Used for:
- Complex timeline animations
- SVG animations
- Scroll-triggered sequences

**AOS (Animate On Scroll)**:
Used for:
- Simple scroll animations
- Fade-in effects
- Slide-in effects

**CSS Animations**:
Used for:
- Loading spinners
- Hover effects
- Repeating animations

---

## 9. API Routes

### 9.1 Contact Form API (`/src/app/api/contact/route.ts`)

**Endpoint**: `POST /api/contact`

**Purpose**: Handle contact form submissions

**Request Body**:
```typescript
{
  name: string        // Min 2 characters
  email: string       // Valid email
  company?: string    // Optional
  message: string     // Min 10 characters
}
```

**Validation**: Zod schema

**Process**:
1. Validate request body with Zod
2. Create email template
3. Send email via Nodemailer
4. Return success/error response

**Email Configuration**:
```typescript
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
})
```

**Response**:
```typescript
// Success
{ message: 'Email sent successfully', status: 200 }

// Validation Error
{ error: 'Invalid data', details: [...], status: 400 }

// Server Error
{ error: 'Failed to send email', status: 500 }
```

**Error Handling**:
- Zod validation errors → 400
- Email send errors → 500
- Missing env vars → 503

---

### 9.2 Blog API

#### Get All Blogs (`GET /api/blogs`)

**Endpoint**: `GET /api/blogs`

**Query Params**:
- `includeUnpublished`: boolean (default: false)

**Purpose**: Fetch published blog posts

**Data Source**: Supabase database (or fallback to empty array)

**Response**:
```typescript
{
  blogs: BlogPost[]
}

interface BlogPost {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string
  cover_image: string
  author: string
  date: string
  category: string
  read_time: string
  published: boolean
  created_at: string
  updated_at: string
}
```

**Process**:
1. Check if Supabase is configured
2. Query `blogs` table
3. Filter by `published` status
4. Order by `date` descending
5. Return array of blogs

**Error Handling**:
- Supabase not configured → Return empty array with message
- Table doesn't exist → Return empty array with message
- Query error → Return empty array

---

#### Create Blog Post (`POST /api/blogs`)

**Endpoint**: `POST /api/blogs`

**Purpose**: Create new blog post (admin only)

**Authentication**: Required (should check admin token)

**Request Body**:
```typescript
{
  title: string           // Min 3 characters
  slug?: string           // Auto-generated if not provided
  excerpt: string         // Min 10 characters
  content: string         // Min 50 characters
  cover_image?: string    // URL
  author?: string         // Default: "Genrec AI Team"
  date?: string           // ISO date, default: today
  category?: string       // Default: "AI Innovation"
  read_time?: string      // Default: "5 min read"
  published?: boolean     // Default: false
}
```

**Validation**: Zod schema

**Process**:
1. Validate request body
2. Generate slug if not provided
3. Insert into Supabase
4. Return created blog post

**Slug Generation**:
```typescript
slug = title.toLowerCase()
  .replace(/[^a-z0-9]+/g, '-')
  .replace(/^-|-$/g, '')
```

**Response**:
```typescript
// Success
{
  message: 'Blog post created successfully',
  blog: BlogPost,
  status: 201
}

// Error
{
  error: 'Failed to create blog post',
  details: string,
  status: 500
}
```

---

#### Get Blog by ID (`GET /api/blogs/[id]`)

**Endpoint**: `GET /api/blogs/:id`

**Purpose**: Fetch single blog post by ID

**Params**: `id` (blog post ID)

**Response**:
```typescript
{
  blog: BlogPost
}
```

#### Update Blog (`PATCH /api/blogs/[id]`)

**Endpoint**: `PATCH /api/blogs/:id`

**Purpose**: Update existing blog post

**Authentication**: Required

**Request Body**: Partial `BlogPost` object

#### Delete Blog (`DELETE /api/blogs/[id]`)

**Endpoint**: `DELETE /api/blogs/:id`

**Purpose**: Delete blog post

**Authentication**: Required

---

### 9.3 Authentication API (`/src/app/api/auth/route.ts`)

**Endpoint**: `POST /api/auth`

**Purpose**: Admin authentication for blog management

**Request Body**:
```typescript
{
  username: string
  password: string
}
```

**Process**:
1. Compare with `NEXT_PUBLIC_ADMIN_USERNAME`
2. Hash password and compare with `ADMIN_PASSWORD_HASH`
3. Generate JWT token (if authentication library used)
4. Return token

**Response**:
```typescript
// Success
{
  token: string,
  user: { username: string }
}

// Error
{
  error: 'Invalid credentials',
  status: 401
}
```

**Security**:
- Password hashing (bcrypt recommended)
- JWT token expiration
- Rate limiting (recommended)
- HTTPS only

---

### 9.4 Test Supabase API (`/src/app/api/test-supabase/route.ts`)

**Endpoint**: `GET /api/test-supabase`

**Purpose**: Test Supabase connection

**Response**:
```typescript
{
  connected: boolean,
  message: string
}
```

---

### 9.5 Gallery Upload API (`/src/app/api/gallery/upload/route.ts`)

**Endpoint**: `POST /api/gallery/upload`

**Purpose**: Upload images to Supabase storage

**Request**: Multipart form data with image file

**Process**:
1. Validate file type and size
2. Generate unique filename
3. Upload to Supabase storage
4. Return public URL

**Response**:
```typescript
{
  url: string,
  filename: string
}
```

---

## 10. Utilities and Libraries

### 10.1 Utils (`/src/lib/utils.ts`)

#### `cn(...inputs: ClassValue[])`
**Purpose**: Merge and deduplicate Tailwind classes

**Usage**:
```typescript
import { cn } from '@/lib/utils'

<div className={cn(
  'base-class',
  isActive && 'active-class',
  'hover:bg-blue-500'
)} />
```

**Implementation**: Uses `clsx` + `tailwind-merge`

---

#### `formatDate(date: Date | string): string`
**Purpose**: Format date to readable string

**Output**: "January 15, 2025"

**Usage**:
```typescript
formatDate(new Date()) // "November 7, 2025"
formatDate('2025-01-15') // "January 15, 2025"
```

---

#### `slugify(text: string): string`
**Purpose**: Convert text to URL-friendly slug

**Process**:
1. Convert to lowercase
2. Replace spaces with hyphens
3. Remove special characters
4. Remove consecutive hyphens
5. Trim hyphens from start/end

**Usage**:
```typescript
slugify('Hello World!') // "hello-world"
slugify('AI & Machine Learning') // "ai-machine-learning"
```

---

#### `truncate(text: string, length: number): string`
**Purpose**: Truncate text with ellipsis

**Usage**:
```typescript
truncate('Long text here...', 10) // "Long text..."
```

---

#### `isValidEmail(email: string): boolean`
**Purpose**: Validate email format

**Regex**: `/^[^\s@]+@[^\s@]+\.[^\s@]+$/`

**Usage**:
```typescript
isValidEmail('test@example.com') // true
isValidEmail('invalid-email') // false
```

---

#### `debounce<T>(func: T, wait: number)`
**Purpose**: Debounce function calls

**Usage**:
```typescript
const debouncedSearch = debounce((query) => {
  // Search logic
}, 500)
```

---

#### `getBaseUrl()`
**Purpose**: Get base URL for API calls

**Returns**:
- Browser: `''` (relative URLs)
- Vercel: `https://${process.env.VERCEL_URL}`
- Local: `http://localhost:3000`

---

### 10.2 Theme Configuration (`/src/lib/theme.ts`)

See section 8.4 for full details.

---

### 10.3 Supabase Clients

#### Client (`/src/lib/supabase/client.ts`)

**Purpose**: Supabase client for browser

**Usage**:
```typescript
import { supabase } from '@/lib/supabase/client'

const { data, error } = await supabase
  .from('blogs')
  .select('*')
```

**Configuration**:
- Uses `NEXT_PUBLIC_SUPABASE_URL`
- Uses `NEXT_PUBLIC_SUPABASE_ANON_KEY`

---

#### Server (`/src/lib/supabase/server.ts`)

**Purpose**: Supabase admin client for server-side

**Usage**:
```typescript
import { supabaseAdmin } from '@/lib/supabase/server'

// Has elevated permissions for admin operations
```

**Configuration**:
- Uses `NEXT_PUBLIC_SUPABASE_URL`
- Uses `SUPABASE_SERVICE_ROLE_KEY` (admin key)

---

## 11. Error Handling

### 11.1 Error Boundaries

#### Page Error (`/src/app/error.tsx`)

**Purpose**: Catch errors within page components

**Props**:
- `error`: Error object
- `reset`: Function to retry rendering

**Features**:
- Logs error to console
- Shows friendly error message
- "Try Again" button calls `reset()`
- "Go Home" link to homepage

**When Triggered**:
- Component render errors
- API fetch errors
- JavaScript errors in client components

---

#### Global Error (`/src/app/global-error.tsx`)

**Purpose**: Catch errors in root layout

**Differences from error.tsx**:
- Wraps entire application
- Must re-render `<html>` and `<body>`
- Last resort error boundary

---

### 11.2 Loading States

#### Page Loading (`/src/app/loading.tsx`)

**Purpose**: Show loading UI during page transitions

**Implementation**: Suspense boundary fallback

**Displays**: Spinner or skeleton UI

---

#### Component Loading

**Approaches**:
1. **useState**: Local loading state
2. **Suspense**: React Suspense boundaries
3. **Loading prop**: Pass loading state as prop

**Example**:
```typescript
const [isLoading, setIsLoading] = useState(false)

if (isLoading) return <LoadingSpinner />
return <Content />
```

---

### 11.3 Error Logging

**Development**:
- Console errors
- React DevTools
- Network tab inspection

**Production** (Recommended):
- Sentry integration (env vars present)
- Custom error logging service
- Error tracking dashboard

---

### 11.4 API Error Handling

**Pattern**:
```typescript
try {
  const response = await fetch('/api/endpoint')
  
  if (!response.ok) {
    throw new Error('API request failed')
  }
  
  const data = await response.json()
  return data
} catch (error) {
  console.error('Error:', error)
  // Show user-friendly error message
  toast.error('Something went wrong')
}
```

**HTTP Status Codes**:
- 200: Success
- 201: Created
- 400: Bad Request (validation error)
- 401: Unauthorized
- 404: Not Found
- 500: Internal Server Error
- 503: Service Unavailable

---

## 12. Build and Deployment

### 12.1 Development Workflow

```bash
# Start development server
npm run dev

# Server runs on http://localhost:3000
# Hot reload enabled
# Turbopack for fast builds
```

**Features**:
- Hot Module Replacement (HMR)
- Fast Refresh (preserves component state)
- Error overlay
- TypeScript checking
- Linting on save (if configured)

---

### 12.2 Production Build

```bash
# Build for production
npm run build

# Output: .next/ directory
# Optimized bundles
# Static pages pre-rendered
# Serverless functions generated
```

**Build Process**:
1. TypeScript compilation
2. Linting (ESLint)
3. Page pre-rendering (SSG)
4. Bundle optimization
5. Image optimization
6. Route manifest generation

**Output Analysis**:
```bash
# Analyze bundle size
npm run analyze

# Generates bundle analysis report
# Shows which packages contribute to bundle size
```

---

### 12.3 Production Server

```bash
# Start production server locally
npm run start

# Requires npm run build first
# Serves optimized .next/ build
```

---

### 12.4 Code Quality Scripts

```bash
# Linting
npm run lint              # Check for linting errors
npm run lint:fix          # Auto-fix linting errors

# Formatting
npm run format            # Format code with Prettier
npm run format:check      # Check code formatting

# Type Checking
npm run type-check        # Check TypeScript types without emitting files

# Testing
npm test                  # Run Jest tests in watch mode
npm run test:ci           # Run tests once with coverage
npm run test:e2e          # Run Playwright E2E tests
```

---

### 12.5 Vercel Deployment

**Configuration**: `/vercel.json`

**Settings**:
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": ".next",
  "framework": "nextjs",
  "regions": ["iad1"],  // US East
}
```

**Deployment Process**:
1. Push to main branch (or manual deploy)
2. Vercel detects Next.js project
3. Runs `npm install`
4. Runs `npm run build`
5. Deploys to CDN
6. Generates preview URL

**Environment Variables**:
- Set in Vercel dashboard
- Never commit `.env.local` to Git
- Use Vercel Secrets for sensitive values

**Features**:
- Automatic HTTPS
- Global CDN
- Serverless Functions
- Edge Functions
- Analytics
- Preview deployments for PRs

---

### 12.6 Custom Headers

**Configured in**: `next.config.js` and `vercel.json`

**Security Headers**:
- `X-DNS-Prefetch-Control: on`
- `Strict-Transport-Security: max-age=63072000`
- `X-Content-Type-Options: nosniff`
- `X-Frame-Options: SAMEORIGIN`
- `X-XSS-Protection: 1; mode=block`
- `Referrer-Policy: origin-when-cross-origin`

---

### 12.7 Image Optimization

**Configuration**: `next.config.js`

```javascript
images: {
  formats: ['image/avif', 'image/webp'],
  remotePatterns: [
    { protocol: 'https', hostname: 'images.unsplash.com' },
    { protocol: 'https', hostname: 'cdn.jsdelivr.net' }
  ]
}
```

**Features**:
- Automatic format detection (AVIF, WebP, PNG)
- Responsive image sizes
- Lazy loading
- Blur placeholder (optional)

**Usage**:
```typescript
import Image from 'next/image'

<Image
  src="/image.jpg"
  alt="Description"
  width={800}
  height={600}
  priority={false}  // Lazy load by default
/>
```

---

## 13. Testing

### 13.1 Unit Testing (Jest)

**Configuration**: `/jest.config.js`

**Test Environment**: jsdom (simulates browser)

**Setup File**: `/jest.setup.js`
- Imports `@testing-library/jest-dom`
- Adds custom matchers

**Path Aliases**:
```javascript
moduleNameMapper: {
  '^@/(.*)$': '<rootDir>/src/$1',
}
```

**Coverage Thresholds**:
- Branches: 60%
- Functions: 60%
- Lines: 60%
- Statements: 60%

**Run Tests**:
```bash
npm test           # Watch mode
npm run test:ci    # CI mode with coverage
```

**Test Files**:
- `src/components/__tests__/*.test.tsx`
- `**/*.{spec,test}.{js,jsx,ts,tsx}`

---

### 13.2 E2E Testing (Playwright)

**Configuration**: `/playwright.config.ts`

**Test Directory**: `/tests/e2e`

**Browsers Tested**:
- Chromium (Desktop)
- Firefox (Desktop)
- WebKit (Safari)
- Mobile Chrome (Pixel 5)
- Mobile Safari (iPhone 12)

**Base URL**: `http://localhost:3000` (dev) or configured URL

**Features**:
- Parallel execution
- Screenshot on failure
- Trace on retry
- Video recording (optional)

**Run Tests**:
```bash
npm run test:e2e           # Run all E2E tests
npx playwright test        # Same as above
npx playwright test --ui   # UI mode
npx playwright show-report # View HTML report
```

**Example Test**:
```typescript
import { test, expect } from '@playwright/test'

test('homepage loads', async ({ page }) => {
  await page.goto('/')
  await expect(page).toHaveTitle(/Genrec AI/)
})
```

---

### 13.3 Component Testing

**Library**: React Testing Library

**Example**:
```typescript
import { render, screen } from '@testing-library/react'
import { Button } from '@/components/ui/button'

test('renders button', () => {
  render(<Button>Click me</Button>)
  expect(screen.getByText('Click me')).toBeInTheDocument()
})
```

**Best Practices**:
- Test user behavior, not implementation
- Use semantic queries (getByRole, getByLabelText)
- Avoid testing internals (state, props)

---

## 14. Performance Optimization

### 14.1 Bundle Optimization

**Code Splitting**:
- Automatic route-based splitting
- Dynamic imports for large components

**Example**:
```typescript
import dynamic from 'next/dynamic'

const HeavyComponent = dynamic(() => import('./HeavyComponent'), {
  loading: () => <LoadingSpinner />,
  ssr: false  // Client-only
})
```

**Tree Shaking**:
- Unused code automatically removed
- ES6 imports required

---

### 14.2 Image Optimization

**Next.js Image Component**:
- Automatic format conversion (AVIF, WebP)
- Responsive sizes
- Lazy loading
- Blur placeholder

**Usage**:
```typescript
<Image
  src="/hero.jpg"
  alt="Hero image"
  width={1920}
  height={1080}
  priority  // Load immediately for above-fold images
  placeholder="blur"
  blurDataURL="data:image/jpeg;base64,..."
/>
```

---

### 14.3 Font Optimization

**Strategy**:
- Google Fonts with `next/font`
- Font display: swap (prevents invisible text)
- Preload critical fonts
- Subset fonts (Latin only)

**Implementation**:
```typescript
import { Inter } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  preload: true,
})
```

---

### 14.4 Animation Performance

**GPU Acceleration**:
- Use `transform` instead of `top/left`
- Use `opacity` for fade effects
- Add `will-change` for heavy animations

**Framer Motion Optimization**:
```typescript
<motion.div
  initial={{ opacity: 0, scale: 0.8 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ type: 'spring', damping: 20 }}
  style={{ willChange: 'transform, opacity' }}
/>
```

**Reduce Motion**:
```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

### 14.5 Caching Strategy

**Static Assets**:
- Cached indefinitely (immutable)
- Cache-Control headers

**API Routes**:
- Configurable cache headers
- Revalidation with ISR

**Example**:
```typescript
export const revalidate = 3600  // Revalidate every hour
```

---

## 15. SEO and Metadata

### 15.1 Metadata System

**Root Layout Metadata** (`/src/app/layout.tsx`):
```typescript
export const metadata: Metadata = {
  metadataBase: new URL('https://genrecai.com'),
  title: {
    default: 'Genrec AI - Privacy-first AI Solutions',
    template: '%s | Genrec AI',  // Page title | Site name
  },
  description: 'Engineering-grade AI systems...',
  keywords: ['enterprise AI', 'privacy-first', ...],
  authors: [{ name: 'Jai Samyukth' }, { name: 'Shyamnath Sankar' }],
  creator: 'Genrec AI',
  publisher: 'Genrec AI',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://genrecai.com',
    siteName: 'Genrec AI',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@genrecai',
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
}
```

---

### 15.2 Structured Data (JSON-LD)

**Implementation** (in root layout):
```typescript
const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Genrec AI',
  url: 'https://genrecai.com',
  logo: 'https://genrecai.com/logo.png',
  description: '...',
  sameAs: [
    'https://twitter.com/genrecai',
    'https://linkedin.com/company/genrecai',
  ],
  founder: [
    { '@type': 'Person', name: 'Jai Samyukth' },
    { '@type': 'Person', name: 'Shyamnath Sankar' },
  ],
  offers: [
    { '@type': 'Offer', name: 'Tabble', description: '...' },
    { '@type': 'Offer', name: 'Lumina IQ', description: '...' },
  ],
}

<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
/>
```

**Schema Types Used**:
- Organization
- Person (founders)
- Offer (products)
- ContactPoint

---

### 15.3 Sitemap

**File**: `/src/app/sitemap.ts`

**Generated Dynamically**:
```typescript
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://genrecai.com',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: 'https://genrecai.com/about',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    // ... more URLs
  ]
}
```

**Accessible at**: `/sitemap.xml`

---

### 15.4 Robots.txt

**File**: `/src/app/robots.ts`

```typescript
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/admin/', '/api/'],
    },
    sitemap: 'https://genrecai.com/sitemap.xml',
  }
}
```

**Accessible at**: `/robots.txt`

---

### 15.5 OpenGraph and Social Sharing

**Image**: `/public/og-image.png` (1200x630px)

**Meta Tags**:
- `og:title`: Page title
- `og:description`: Page description
- `og:image`: Preview image
- `og:url`: Canonical URL
- `og:type`: website/article

**Twitter Card**:
- `twitter:card`: summary_large_image
- `twitter:title`: Page title
- `twitter:description`: Description
- `twitter:image`: Preview image

---

## 16. Dependencies Reference

### 16.1 Production Dependencies

| Package | Version | Purpose | Category |
|---------|---------|---------|----------|
| next | 16.0.1 | React framework | Framework |
| react | 19.2.0 | UI library | Framework |
| react-dom | 19.2.0 | React renderer | Framework |
| typescript | 5.3.3 | Type safety | Language |
| tailwindcss | 3.3.6 | CSS framework | Styling |
| framer-motion | 11.0.0 | Animations | Animation |
| gsap | 3.13.0 | Advanced animations | Animation |
| @radix-ui/* | Various | UI components | UI |
| lucide-react | 0.545.0 | Icons | UI |
| react-hook-form | 7.48.2 | Forms | Forms |
| zod | 3.22.4 | Validation | Validation |
| nodemailer | 6.9.7 | Email sending | Backend |
| @vercel/analytics | 1.1.1 | Analytics | Analytics |
| clsx | 2.0.0 | Classname utility | Utility |
| tailwind-merge | 2.1.0 | Class merging | Utility |

---

### 16.2 Development Dependencies

| Package | Version | Purpose | Category |
|---------|---------|---------|----------|
| @typescript-eslint/eslint-plugin | 6.14.0 | TypeScript linting | Dev Tools |
| @typescript-eslint/parser | 6.14.0 | TypeScript parser | Dev Tools |
| eslint | 8.55.0 | Linting | Dev Tools |
| eslint-config-next | 14.0.3 | Next.js ESLint config | Dev Tools |
| prettier | 3.1.1 | Code formatting | Dev Tools |
| prettier-plugin-tailwindcss | 0.5.9 | Tailwind class sorting | Dev Tools |
| @testing-library/react | 16.0.0 | Component testing | Testing |
| @testing-library/jest-dom | 6.1.5 | Jest matchers | Testing |
| jest | 29.7.0 | Unit testing | Testing |
| @playwright/test | 1.40.1 | E2E testing | Testing |
| husky | 8.0.3 | Git hooks | Dev Tools |
| autoprefixer | 10.4.16 | CSS vendor prefixes | Build |
| postcss | 8.4.32 | CSS processing | Build |

---

## 17. Commands Reference

### 17.1 Development

```bash
npm run dev                # Start development server (port 3000)
npm run build              # Build for production
npm run start              # Start production server
```

---

### 17.2 Code Quality

```bash
npm run lint               # Check linting errors
npm run format             # Format code with Prettier
npm run format:check       # Check formatting without fixing
npm run type-check         # TypeScript type checking
```

---

### 17.3 Testing

```bash
npm test                   # Run Jest tests (watch mode)
npm run test:ci            # Run tests with coverage
npm run test:e2e           # Run Playwright E2E tests
```

---

### 17.4 Build Analysis

```bash
npm run analyze            # Analyze bundle size (requires ANALYZE=true)
```

---

### 17.5 Git Hooks

```bash
npm run postinstall        # Install Husky hooks
```

**Pre-commit Hook**:
- Runs ESLint
- Runs Prettier
- Runs TypeScript check

---

### 17.6 Deployment

```bash
npm run deploy-preview     # Deploy to Vercel production
```

---

## 18. Future Improvements

### 18.1 Known Issues

1. **Supabase Integration**:
   - Database tables not yet created
   - Need to run SQL schema
   - Blog API returns empty arrays if Supabase not configured

2. **Authentication**:
   - Blog admin has basic auth
   - Need proper JWT implementation
   - No refresh token mechanism

3. **Mobile Optimization**:
   - Some animations need mobile-specific optimizations
   - Header mobile menu could be smoother

4. **Testing Coverage**:
   - Many components lack unit tests
   - E2E tests need to be written
   - Target: 80% coverage

---

### 18.2 Planned Features

1. **Blog Enhancement**:
   - Comment system
   - Social sharing
   - RSS feed
   - Newsletter subscription
   - Content search

2. **Case Studies**:
   - Case study detail pages
   - Client logos
   - Metrics and results
   - Interactive demos

3. **Contact Enhancements**:
   - Calendar integration for demos
   - Live chat support
   - File upload in contact form
   - CRM integration

4. **Products**:
   - Interactive product demos
   - Video showcases
   - Pricing calculator
   - ROI calculator

5. **Performance**:
   - Implement ISR for blog posts
   - Add service worker for offline support
   - Optimize GSAP animations
   - Lazy load more components

6. **SEO**:
   - Add blog post schema
   - Implement breadcrumbs
   - Add FAQ schema
   - Improve Core Web Vitals

---

### 18.3 Refactoring Opportunities

1. **Component Organization**:
   - Split large components (Header, Footer)
   - Create more shared UI components
   - Better props typing

2. **State Management**:
   - Consider React Context for global state
   - Implement proper auth state
   - Form state persistence

3. **API Layer**:
   - Create API client wrapper
   - Centralize error handling
   - Add request/response interceptors

4. **TypeScript**:
   - Add more strict types
   - Create shared type definitions
   - Remove `any` types

5. **Testing**:
   - Add integration tests
   - Mock API responses
   - Test edge cases

---

### 18.4 Documentation Needs

1. Component Storybook
2. API documentation (Swagger/OpenAPI)
3. Deployment guide
4. Contributing guidelines
5. Style guide

---

## Appendix

### A. Version Changelog

**Current Version**: 1.0.0

**Changes**:
- Initial release
- Next.js 16 with App Router
- React 19 integration
- Luxury design system
- Product pages
- Blog system
- Contact form

---

### B. Dependencies Table

See Section 16 for full dependency reference.

---

### C. Environment Variables Reference

See Section 4.3 for complete list of environment variables.

---

### D. File Naming Conventions

**Pages**: `page.tsx`, `layout.tsx`, `loading.tsx`, `error.tsx`

**Components**: PascalCase (e.g., `Header.tsx`, `ContactForm.tsx`)

**Utilities**: camelCase (e.g., `utils.ts`, `theme.ts`)

**Types**: PascalCase with `.d.ts` extension (e.g., `types.d.ts`)

**Tests**: `*.test.tsx` or `*.spec.tsx`

---

### E. Git Workflow

**Branches**:
- `main`: Production branch
- `develop`: Development branch
- `feature/*`: Feature branches
- `hotfix/*`: Hotfix branches

**Commit Messages**:
- Use conventional commits
- Format: `type(scope): message`
- Types: feat, fix, docs, style, refactor, test, chore

**Example**:
```
feat(blog): add markdown editor
fix(header): mobile menu z-index issue
docs(readme): update installation steps
```

---

### F. Browser Support

**Supported Browsers**:
- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)

**Mobile**:
- iOS Safari 14+
- Chrome Android (last 2 versions)

**Not Supported**:
- Internet Explorer (any version)

---

### G. Accessibility

**Standards**: WCAG 2.1 Level AA

**Features**:
- Semantic HTML
- ARIA labels where needed
- Keyboard navigation
- Focus management
- Screen reader support
- Color contrast compliance
- Reduced motion support

---

### H. License

See LICENSE file in repository.

---

### I. Contact and Support

**Email**: contact@genrecai.com

**GitHub**: [Repository URL]

**Documentation**: This file

---

## End of Documentation

This comprehensive documentation covers every aspect of the Genrec AI website project. For questions or clarifications, refer to the specific sections above or contact the development team.

**Last Updated**: November 7, 2025

**Version**: 1.0.0

**Authors**: Jai Samyukth, Shyamnath Sankar
