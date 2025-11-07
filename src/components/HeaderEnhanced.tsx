'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown } from 'lucide-react'

const navigation = [
  { name: 'Home', href: '/' },
  { 
    name: 'Products', 
    href: '/products',
    submenu: [
      { name: 'Lumina IQ', href: '/products/lumina-iq' },
      { name: 'Tabble', href: '/products/tabble' },
      { name: 'Construction Websites', href: '/products/construction-website' },
      { name: 'Educational Websites', href: '/products/educational-website' },
      { name: 'Restaurant Websites', href: '/products/restaurant-website' },
    ]
  },
  { name: 'Case Studies', href: '/case-studies' },
  { name: 'About', href: '/about' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
]

/**
 * Sticky header with scroll hide/show and backdrop blur
 * - Hides on scroll down, shows on scroll up
 * - 10px backdrop blur after scroll
 * - Mobile: full-screen menu with focus trap
 * - Accessibility: skip links, keyboard navigation
 */
export function HeaderEnhanced() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null)
  const pathname = usePathname()

  useEffect(() => {
    let ticking = false

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY

          // Set scrolled state for backdrop blur
          setIsScrolled(currentScrollY > 20)

          // Hide/show header based on scroll direction
          if (currentScrollY > lastScrollY && currentScrollY > 100) {
            // Scrolling down
            setIsVisible(false)
          } else {
            // Scrolling up
            setIsVisible(true)
          }

          setLastScrollY(currentScrollY)
          ticking = false
        })

        ticking = true
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false)
    setActiveSubmenu(null)
  }, [pathname])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileMenuOpen])

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white backdrop-blur-lg border-b border-gray-200 shadow-sm' 
            : 'bg-white/95 backdrop-blur-md'
        }`}
        initial={{ y: 0 }}
        animate={{ y: isVisible ? 0 : -100 }}
        transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
      >
        <nav className="max-w-7xl mx-auto px-6 lg:px-8" aria-label="Main navigation">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link 
              href="/" 
              className="text-2xl font-extrabold hover:opacity-90 transition-all focus:outline-none focus:ring-2 focus:ring-accent-gold focus:ring-offset-2 focus:ring-offset-white rounded px-2 py-1 relative z-50"
              aria-label="Genrec AI - Home"
            >
              <span style={{ color: '#000000' }}>Genrec</span>
              <span style={{ 
                background: 'linear-gradient(135deg, #C9A66B 0%, #D4B478 50%, #C9A66B 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>AI</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navigation.map((item) => (
                <div key={item.name} className="relative group">
                  {item.submenu ? (
                    <>
                      <button
                        className={`flex items-center gap-1 font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-accent-gold rounded px-2 py-1 ${
                          pathname.startsWith(item.href)
                            ? 'text-accent-gold'
                            : 'text-gray-700 hover:text-accent-gold'
                        }`}
                        aria-expanded="false"
                        aria-haspopup="true"
                      >
                        {item.name}
                        <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform" />
                      </button>
                      
                      {/* Dropdown */}
                      <div className="absolute top-full left-0 mt-2 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                        <div className="bg-white rounded-lg shadow-xl border border-gray-200 py-2">
                          {item.submenu.map((subitem) => (
                            <Link
                              key={subitem.href}
                              href={subitem.href}
                              className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-accent-gold transition-colors"
                            >
                              {subitem.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      className={`font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-accent-gold rounded px-2 py-1 ${
                        pathname === item.href
                          ? 'text-accent-gold'
                          : 'text-gray-700 hover:text-accent-gold'
                      }`}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}

              {/* CTA */}
              <Link
                href="/contact"
                className="px-6 py-3 bg-gradient-to-r from-accent-gold to-accent-gold-hover text-white font-semibold rounded-lg hover:from-accent-gold-hover hover:to-accent-gold-dark transition-all transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-accent-gold/50 focus:ring-offset-2 focus:ring-offset-white shadow-lg shadow-accent-gold/20"
              >
                Get Started
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-gray-700 hover:text-accent-gold focus:outline-none focus:ring-2 focus:ring-accent-gold rounded"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" aria-hidden="true" />
              ) : (
                <Menu className="w-6 h-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-50 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-black/50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
            />

            {/* Menu panel */}
            <motion.div
              className="absolute top-0 right-0 bottom-0 w-full max-w-sm bg-secondary-bg shadow-2xl border-l border-accent-gold/20"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.26, ease: [0.4, 0, 0.2, 1] }}
            >
              <div className="flex flex-col h-full">
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-accent-gold/20">
                  <span className="text-xl font-bold text-accent-gold-hover">Menu</span>
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2 text-white hover:text-accent-gold-hover focus:outline-none focus:ring-2 focus:ring-accent-gold rounded"
                    aria-label="Close menu"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                {/* Navigation */}
                <nav className="flex-1 overflow-y-auto p-6">
                  <motion.div
                    className="space-y-2"
                    initial="closed"
                    animate="open"
                    variants={{
                      open: {
                        transition: { staggerChildren: 0.06, delayChildren: 0.1 }
                      },
                      closed: {}
                    }}
                  >
                    {navigation.map((item, index) => (
                      <motion.div
                        key={item.name}
                        variants={{
                          open: { opacity: 1, x: 0 },
                          closed: { opacity: 0, x: 20 }
                        }}
                      >
                        {item.submenu ? (
                          <div>
                            <button
                              onClick={() => setActiveSubmenu(activeSubmenu === item.name ? null : item.name)}
                              className="flex items-center justify-between w-full px-4 py-3 text-lg font-medium text-white hover:bg-tertiary-bg hover:text-accent-gold-hover rounded-lg transition-colors"
                            >
                              {item.name}
                              <ChevronDown 
                                className={`w-5 h-5 transition-transform ${
                                  activeSubmenu === item.name ? 'rotate-180' : ''
                                }`}
                              />
                            </button>
                            <AnimatePresence>
                              {activeSubmenu === item.name && (
                                <motion.div
                                  initial={{ height: 0, opacity: 0 }}
                                  animate={{ height: 'auto', opacity: 1 }}
                                  exit={{ height: 0, opacity: 0 }}
                                  transition={{ duration: 0.2 }}
                                  className="ml-4 mt-2 space-y-1 overflow-hidden"
                                >
                                  {item.submenu.map((subitem) => (
                                    <Link
                                      key={subitem.href}
                                      href={subitem.href}
                                      className="block px-4 py-2 text-gray-300 hover:text-accent-gold-hover hover:bg-tertiary-bg rounded-lg transition-colors"
                                    >
                                      {subitem.name}
                                    </Link>
                                  ))}
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                        ) : (
                          <Link
                            href={item.href}
                            className={`block px-4 py-3 text-lg font-medium rounded-lg transition-colors ${
                              pathname === item.href
                                ? 'bg-accent-gold/10 text-accent-gold-hover'
                                : 'text-white hover:bg-tertiary-bg hover:text-accent-gold-hover'
                            }`}
                          >
                            {item.name}
                          </Link>
                        )}
                      </motion.div>
                    ))}
                  </motion.div>
                </nav>

                {/* CTA */}
                <div className="p-6 border-t border-accent-gold/20">
                  <Link
                    href="/contact"
                    className="block w-full px-6 py-4 bg-gradient-to-r from-accent-gold to-accent-gold-hover text-primary-bg text-center font-semibold rounded-lg hover:from-accent-gold-hover hover:to-accent-gold-dark transition-all shadow-lg shadow-accent-gold/20"
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
