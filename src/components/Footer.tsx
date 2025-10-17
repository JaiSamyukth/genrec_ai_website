import Link from 'next/link'
import { Mail, Linkedin, Twitter, Github } from 'lucide-react'

const products = [
  { name: 'Tabble', href: '/products/tabble' },
  { name: 'Lumina IQ', href: '/products/lumina-iq' },
  { name: 'Construct AI', href: '/products/construct-ai' },
  { name: 'Restaurant Tech', href: '/products/restaurant-tech' },
]

const company = [
  { name: 'About', href: '/about' },
  { name: 'Case Studies', href: '/case-studies' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
]

const legal = [
  { name: 'Privacy Policy', href: '/privacy' },
  { name: 'Terms of Service', href: '/terms' },
  { name: 'Cookie Policy', href: '/cookies' },
]

export function Footer() {
  return (
    <footer className="bg-primary-bg text-light-text">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-serif font-bold mb-4">
              Genrec<span className="text-accent-metal">AI</span>
            </h3>
            <p className="text-muted text-sm mb-4">
              Privacy-first AI solutions for construction, hospitality, and education.
              Engineering-grade systems that scale.
            </p>
            <p className="text-muted text-xs">
              We respect your privacy. No third-party selling of data.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Products</h4>
            <ul className="space-y-2">
              {products.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-muted hover:text-accent-metal transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              {company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-muted hover:text-accent-metal transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="space-y-2">
              <a
                href="mailto:contact@genrecai.com"
                className="flex items-center text-muted hover:text-accent-metal transition-colors text-sm"
              >
                <Mail className="w-4 h-4 mr-2" />
                contact@genrecai.com
              </a>
              <div className="flex space-x-4 mt-4">
                <a
                  href="https://linkedin.com/company/genrecai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted hover:text-accent-metal transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="https://twitter.com/genrecai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted hover:text-accent-metal transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a
                  href="https://github.com/genrecai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted hover:text-accent-metal transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} Genrec AI. All rights reserved.
            </p>
            <ul className="flex space-x-6">
              {legal.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-muted hover:text-accent-metal transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
