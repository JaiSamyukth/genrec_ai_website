// Genrec AI Theme Configuration - Luxury Gold & Midnight Black
export const theme = {
  colors: {
    background: {
      primary: '#0b0f1a', // Midnight black
      secondary: '#111827', // Slightly lighter black
      tertiary: '#1f2937', // Dark gray
    },
    accent: {
      gold: '#C9A66B', // Primary metallic gold (matches logo)
      goldHover: '#D4B478', // Lighter gold for hover
      goldDark: '#B8955A', // Darker gold for active states
      goldLight: 'rgba(201, 166, 107, 0.1)', // Light gold for backgrounds
      goldGlow: 'rgba(201, 166, 107, 0.3)', // Gold glow effects
    },
    text: {
      primary: '#F7F7F7', // Crisp white
      secondary: '#9AA3B2', // Muted gray
      dark: '#0b0f1a', // Dark for light backgrounds
      gold: '#C9A66B', // Gold text for emphasis
    },
    status: {
      success: '#10b981',
      error: '#ef4444',
      warning: '#f59e0b',
      info: '#3b82f6',
    }
  },
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
  button: 'bg-gradient-to-r from-[#C9A66B] to-[#D4B478]', // Gold gradient for buttons
  buttonHover: 'bg-gradient-to-r from-[#D4B478] to-[#E0C084]', // Lighter on hover
  text: 'bg-gradient-to-r from-[#C9A66B] to-[#D4B478] bg-clip-text text-transparent',
  goldShine: 'bg-gradient-to-r from-[#B8955A] via-[#C9A66B] to-[#D4B478]', // Animated gold shine
}
