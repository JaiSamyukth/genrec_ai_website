'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu'
import { Menu, X } from 'lucide-react'
import { ContactModal } from './ContactModal'

const products = [
  {
    title: 'Lumina IQ',
    href: '/products/lumina-iq',
    description: 'AI-powered learning platform with interactive PDF processing',
  },
  {
    title: 'Tabble',
    href: '/products/tabble',
    description: 'Premium dining tablet system for luxury hotels',
  },
  {
    title: 'DataScience Agent',
    href: '/products/data-agent',
    description: 'Analytical automation and predictive insights',
  },
  {
    title: 'HRMS',
    href: '/products/hrms',
    description: 'Employee & attendance management system',
  },
  {
    title: 'Anonymous Feedback',
    href: '/products/feedback-system',
    description: 'Staff-student feedback platform with sentiment analysis',
  },
  {
    title: 'Billing System',
    href: '/products/billing',
    description: 'Internal billing module with automated invoicing',
  },
  {
    title: 'CRM Application',
    href: '/products/crm',
    description: 'Business management and sales pipeline system',
  },
  {
    title: 'Invoice Generator',
    href: '/products/invoice-generator',
    description: 'Lightweight invoice automation tool',
  },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [contactOpen, setContactOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      
      // Determine visibility
      if (currentScrollY < lastScrollY || currentScrollY < 100) {
        setIsVisible(true) // Scrolling up or near top
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false) // Scrolling down
      }
      
      setIsScrolled(currentScrollY > 50)
      setLastScrollY(currentScrollY)
    }

    const handleMouseMove = (e: MouseEvent) => {
      // Show header when cursor is within 100px of top
      if (e.clientY < 100) {
        setIsVisible(true)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [lastScrollY])

  return (
    <>
    <motion.header
      initial={{ y: 0 }}
      animate={{ y: isVisible ? 0 : -100 }}
      transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
      className={cn(
        'fixed top-0 left-0 right-0 z-50 w-full border-b transition-all duration-300',
        isScrolled ? 'bg-white/95 backdrop-blur-sm' : 'bg-white'
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-serif font-bold text-primary-bg">
              Genrec<span className="text-accent-metal">AI</span>
            </span>
          </Link>

          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Products</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    {products.map((product) => (
                      <ListItem
                        key={product.title}
                        title={product.title}
                        href={product.href}
                      >
                        {product.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/divisions" legacyBehavior passHref>
                  <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                    Divisions
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/case-studies" legacyBehavior passHref>
                  <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                    Case Studies
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/about" legacyBehavior passHref>
                  <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                    About
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/blog" legacyBehavior passHref>
                  <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                    Blog
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <div className="flex items-center space-x-4">
            <button
              onClick={() => setContactOpen(true)}
              className="hidden lg:block px-6 py-2 rounded-full font-bold transition-all shadow-lg hover:shadow-xl"
              style={{
                background: 'linear-gradient(135deg, #C9A66B 0%, #B8955A 100%)',
                color: '#0b0f1a'
              }}
            >
              Contact
            </button>

            <button
              className="lg:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="lg:hidden border-t bg-white"
        >
          <nav className="container mx-auto px-4 py-4">
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-sm text-muted mb-2">Products</h3>
                {products.map((product) => (
                  <Link
                    key={product.title}
                    href={product.href}
                    className="block py-2 text-sm hover:text-accent-metal transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {product.title}
                  </Link>
                ))}
              </div>
              <Link
                href="/divisions"
                className="block py-2 text-sm hover:text-accent-metal transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Divisions
              </Link>
              <Link
                href="/case-studies"
                className="block py-2 text-sm hover:text-accent-metal transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Case Studies
              </Link>
              <Link
                href="/about"
                className="block py-2 text-sm hover:text-accent-metal transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/blog"
                className="block py-2 text-sm hover:text-accent-metal transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Blog
              </Link>
              <Link
                href="/contact"
                className="block"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Button className="w-full bg-accent-metal hover:bg-accent-metal/90 text-white">
                  Request 20-min demo
                </Button>
              </Link>
            </div>
          </nav>
        </motion.div>
      )}
    </motion.header>
    
    <ContactModal isOpen={contactOpen} onClose={() => setContactOpen(false)} />
    </>
  )
}

const ListItem = ({ className, title, children, ...props }: any) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          className={cn(
            'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
}
