import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './content/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Genrec AI Luxury Theme - Gold & Midnight Black (per comprehensive documentation)
        'primary-bg': '#0b0f1a', // Midnight black
        'secondary-bg': '#111827', // Slightly lighter black
        'tertiary-bg': '#1f2937', // Dark gray
        'accent-metal': '#C9A66B', // Primary metallic gold (matches logo)
        'accent-gold': '#C9A66B',
        'accent-gold-hover': '#D4B478',
        'accent-gold-dark': '#B8955A',
        'light-text': '#F7F7F7', // Crisp white
        'secondary-text': '#9AA3B2', // Muted gray
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: '#C9A66B', // Gold as primary
          foreground: '#0b0f1a', // Dark text on gold
        },
        secondary: {
          DEFAULT: '#111827', // Lighter black
          foreground: '#F7F7F7', // White text
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: '#1f2937', // Dark gray
          foreground: '#9AA3B2', // Muted gray text
        },
        accent: {
          DEFAULT: '#C9A66B', // Gold
          foreground: '#0b0f1a', // Dark text on gold
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: '#111827', // Dark cards
          foreground: '#F7F7F7', // White text
        },
      },
      fontFamily: {
        serif: ['Merriweather', 'Georgia', 'serif'],
        sans: ['var(--font-sans)', 'Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        xs: ['0.75rem', { lineHeight: '1rem' }],
        sm: ['0.875rem', { lineHeight: '1.25rem' }],
        base: ['1rem', { lineHeight: '1.45' }], // Per spec: 1.45 line height
        lg: ['1.125rem', { lineHeight: '1.75rem' }],
        xl: ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1.1' }],
        '6xl': ['3.75rem', { lineHeight: '1.1' }],
        '7xl': ['4.5rem', { lineHeight: '1.1' }],
        '8xl': ['6rem', { lineHeight: '1' }],
        '9xl': ['8rem', { lineHeight: '1' }],
      },
      animation: {
        // Spec-compliant animations with exact durations and easing
        'fade-in': 'fadeIn 180ms cubic-bezier(0.2, 0.9, 0.3, 1)',
        'badge-fade': 'badgeFade 180ms cubic-bezier(0.2, 0.9, 0.3, 1) 120ms both',
        'h1-reveal': 'h1Reveal 420ms cubic-bezier(0.2, 0.9, 0.3, 1) 120ms both',
        'slide-up': 'slideUp 240ms cubic-bezier(0.2, 0.9, 0.3, 1)',
        'subheading-slide': 'subheadingSlide 240ms cubic-bezier(0.2, 0.9, 0.3, 1)',
        'cta-hover': 'ctaHover 160ms ease-out',
        'card-hover': 'cardHover 160ms ease-out',
        'scale-in': 'scaleIn 120ms cubic-bezier(0.2, 0.9, 0.3, 1)',
        'spin-slow': 'spin 3s linear infinite',
        'counter': 'counter 700ms ease-out',
        'progress-line': 'progressLine 600ms cubic-bezier(0.2, 0.9, 0.3, 1)',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        badgeFade: {
          '0%': { transform: 'translateY(-6px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        h1Reveal: {
          '0%': { clipPath: 'inset(0 100% 0 0)', opacity: '0' },
          '100%': { clipPath: 'inset(0 0 0 0)', opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(6px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        subheadingSlide: {
          '0%': { transform: 'translateY(6px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        ctaHover: {
          '0%': { transform: 'translateY(0) scale(1)' },
          '100%': { transform: 'translateY(-3px) scale(1.02)' },
        },
        cardHover: {
          '0%': { transform: 'translateY(0) scale(1)' },
          '100%': { transform: 'translateY(-8px) scale(1.01)' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.98)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        counter: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        progressLine: {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        },
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}

export default config
