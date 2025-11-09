// Genrec AI Theme Configuration - Luxury Gold & Midnight Black
export const theme = {
  colors: {
    background: {
      primary: '#FFFFFF', // White (light mode default)
      secondary: '#F9FAFB', // Light gray
      tertiary: '#F3F4F6', // Lighter gray
      dark: '#0b0f1a', // Midnight black (for dark sections)
      darkSecondary: '#111827', // Slightly lighter black
      darkTertiary: '#1f2937', // Dark gray
    },
    accent: {
      gold: '#C9A66B', // Primary metallic gold (matches logo)
      goldHover: '#D4B478', // Lighter gold for hover
      goldDark: '#B8955A', // Darker gold for active states
      goldLight: 'rgba(201, 166, 107, 0.1)', // Light gold for backgrounds
      goldGlow: 'rgba(201, 166, 107, 0.3)', // Gold glow effects
    },
    text: {
      primary: '#111827', // Dark gray (light mode)
      secondary: '#6B7280', // Medium gray
      muted: '#9CA3AF', // Light gray
      white: '#FFFFFF', // White (for dark backgrounds)
      gold: '#C9A66B', // Gold text for emphasis
    },
    border: {
      light: '#E5E7EB', // Light border
      DEFAULT: '#D1D5DB', // Default border
      dark: '#9CA3AF', // Dark border
    },
    status: {
      success: '#10b981',
      error: '#ef4444',
      warning: '#f59e0b',
      info: '#3b82f6',
    }
  },
  fonts: {
    serif: 'Merriweather, Georgia, serif',
    sans: 'Inter, system-ui, sans-serif',
  },
  spacing: {
    section: {
      DEFAULT: 'py-24',
      sm: 'py-12',
      lg: 'py-32',
    },
    container: 'container mx-auto px-6 lg:px-8',
    maxWidth: 'max-w-7xl mx-auto',
  },
  shadow: {
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    DEFAULT: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
    md: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
    lg: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
    xl: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
    gold: '0 10px 30px rgba(201, 166, 107, 0.3)',
  },
  animation: {
    fast: 'transition-all duration-[240ms]',
    DEFAULT: 'transition-all duration-300',
    slow: 'transition-all duration-500',
  }
}

export const gradients = {
  hero: 'bg-gradient-to-b from-[#0b0f1a] via-[#111827] to-[#0b0f1a]',
  heroLight: 'bg-gradient-to-b from-gray-50 via-white to-gray-50',
  card: 'bg-gradient-to-br from-[#111827] to-[#1f2937]',
  cardLight: 'bg-gradient-to-br from-gray-50 to-white',
  button: 'bg-gradient-to-r from-[#C9A66B] to-[#D4B478]',
  buttonHover: 'bg-gradient-to-r from-[#D4B478] to-[#E0C084]',
  text: 'bg-gradient-to-r from-[#C9A66B] to-[#D4B478] bg-clip-text text-transparent',
  goldShine: 'bg-gradient-to-r from-[#B8955A] via-[#C9A66B] to-[#D4B478]',
  // Division-specific gradients (all gold-based)
  gold1: 'from-[#C9A66B] to-[#D4B478]',
  gold2: 'from-[#D4B478] to-[#E0C084]',
  gold3: 'from-[#B8955A] to-[#C9A66B]',
  gold4: 'from-[#E0C084] to-[#D4B478]',
}

// Standardized Button Classes
export const buttons = {
  primary: 'px-8 py-4 bg-gradient-to-r from-[#C9A66B] to-[#D4B478] text-white font-semibold tracking-wider rounded-lg hover:shadow-xl transition-all duration-300 hover:scale-105',
  secondary: 'px-8 py-4 border-2 border-gray-900 text-gray-900 font-semibold tracking-wider rounded-lg hover:bg-gray-900 hover:text-white transition-all duration-300',
  ghost: 'px-8 py-4 border border-white text-white font-semibold tracking-wider rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300',
}
