# Genrec AI Website

A luxury, privacy-first AI solutions website built with Next.js 14, TypeScript, TailwindCSS, and Framer Motion. Features a sophisticated parallax design system, blog engine with hidden admin panel, and consistent midnight-black & metallic gold theme.

## 🎨 Design Philosophy

**"We don't automate people, we amplify them."**

- **Color Palette**: Midnight black (#0b0f1a), metallic gold (#C9A66B), crisp white (#F7F7F7)
- **Typography**: Merriweather (serif) for headings, Inter (sans) for body
- **Animations**: Subtle parallax that never obscures content, GPU-accelerated transforms
- **Privacy**: Data sovereignty is non-negotiable - all solutions can run on-premise

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## 📁 Project Structure

```
src/
├── app/                    # Next.js app router pages
│   ├── blog/              # Blog system
│   │   ├── [slug]/        # Individual blog posts
│   │   └── admin/         # Hidden admin panel
│   ├── products/          # Product pages
│   │   ├── tabble/        # Tabble product
│   │   └── lumina-iq/     # Lumina IQ product
│   ├── about/             # About/founders page
│   ├── contact/           # Contact page
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── Hero.tsx          # Parallax hero with proper z-indexing
│   ├── FAQ.tsx           # Reusable FAQ accordion
│   └── ...
├── data/                  # JSON data storage
│   ├── blogs.json        # Blog posts
│   └── comments.json     # Blog comments
├── lib/                   # Utilities
│   └── theme.ts          # Centralized theme configuration
└── types/                # TypeScript definitions
```

## 🔐 Admin Panel

Hidden blog administration at `/blog/admin`:

- **URL**: `http://localhost:3000/blog/admin` (not linked anywhere)
- **Username**: `genrecai`
- **Password**: `jaisamyukth1709`

### Admin Features:
- Create/edit/delete blog posts
- Rich markdown editor
- Cover image URL management
- Draft/publish toggle
- SEO metadata control

## 📝 Blog System

### Adding Blog Posts Manually

Edit `src/data/blogs.json`:

```json
{
  "posts": [
    {
      "id": "unique-id",
      "slug": "url-friendly-slug",
      "title": "Post Title",
      "excerpt": "Short description",
      "content": "Full markdown content",
      "coverImage": "https://unsplash.com/image-url",
      "author": "Author Name",
      "date": "2024-01-20",
      "category": "AI Innovation",
      "readTime": "5 min read",
      "published": true
    }
  ]
}
```

### Comment System

Comments are stored in `src/data/comments.json` keyed by post slug:

```json
{
  "post-slug": [
    {
      "id": "comment-id",
      "postSlug": "post-slug",
      "name": "Commenter Name",
      "content": "Comment text",
      "timestamp": "2024-01-20T10:30:00Z"
    }
  ]
}
```

## 🎯 Key Features

### 1. Parallax System
- Background images move independently of content
- CTAs and text always remain accessible
- GPU-accelerated for smooth 60fps performance
- Proper z-index management prevents overlap

### 2. Products
- **Tabble**: Luxury dining software for hotels
  - Guest, staff, and kitchen interfaces
  - 40+ language support
  - Privacy-first architecture
- **Lumina IQ**: Adaptive learning AI
  - Personalized learning paths
  - Real-time analytics
  - FERPA/COPPA compliant

### 3. Theme Consistency
- Every page follows the luxury color scheme
- Consistent spacing and typography
- Hover states with gold accents
- Smooth transitions throughout

### 4. Performance
- Lighthouse score > 90 on desktop
- Optimized images from Unsplash
- Lazy loading for below-fold content
- Static generation where possible

## 🛠️ Technologies

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: TailwindCSS + Custom Theme
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Images**: Unsplash (high-quality stock photos)
- **Deployment**: Vercel-ready

## 📊 SEO & Accessibility

- Semantic HTML structure
- Meta tags on all pages
- Open Graph tags for social sharing
- WCAG AA compliant color contrast
- Keyboard navigation support
- Screen reader friendly

## 🚢 Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import to Vercel
3. Deploy (automatic)

### Manual Deployment

```bash
# Build the application
npm run build

# Start production server
npm start
```

### Environment Variables

Create `.env.local`:

```env
# Optional SMTP for contact form (if implemented)
SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_USER=your-email
SMTP_PASS=your-password

# Optional Analytics
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

## 📈 Analytics & Monitoring

- Built-in Vercel Analytics support
- Performance monitoring ready
- Error tracking compatible with Sentry
- User behavior tracking with privacy respect

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing`)
5. Open a Pull Request

## 📄 License

© 2024 Genrec AI. All rights reserved.

## 🔗 Links

- **Production**: [https://genrecai.com](https://genrecai.com)
- **Documentation**: This README
- **Support**: contact@genrecai.com

## 🎯 Core Values

1. **Privacy First**: Your data never leaves your infrastructure
2. **Engineering Excellence**: Production-ready from day one
3. **Human-Centric**: AI amplifies human capability, doesn't replace it
4. **Measurable Impact**: Clear ROI, not vague promises

---

Built with precision by engineers who believe privacy isn't optional and AI should amplify humanity, not automate it away.
"# genrec_ai_website" 
