'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Mail, Linkedin, Twitter, Github } from 'lucide-react'

export function FooterRedesign() {
  const currentYear = new Date().getFullYear()

  const footerSections = [
    {
      title: 'Products',
      links: [
        { name: 'Tabble', href: '/products/tabble' },
        { name: 'Lumina IQ', href: '/products/lumina-iq' },
        { name: 'Construction Websites', href: '/products/construction-website' },
        { name: 'Educational Websites', href: '/products/educational-website' },
        { name: 'Restaurant Websites', href: '/products/restaurant-website' },
      ],
    },
    {
      title: 'Company',
      links: [
        { name: 'About', href: '/about' },
        { name: 'Case Studies', href: '/case-studies' },
        { name: 'Blog', href: '/blog' },
        { name: 'Contact', href: '/contact' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { name: 'Privacy Policy', href: '/privacy' },
        { name: 'Terms of Service', href: '/terms' },
        { name: 'Cookie Policy', href: '/cookies' },
      ],
    },
  ]

  return (
    <footer className="border-t border-accent-gold/10 bg-primary-bg py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 gap-12 lg:grid-cols-4"
        >
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block">
              <h3 className="text-2xl font-bold">
                <span className="text-light-text">Genrec</span>
                <span className="bg-gradient-to-r from-accent-gold to-accent-gold-hover bg-clip-text text-transparent">AI</span>
              </h3>
            </Link>
            <p className="mt-4 text-sm text-gray-100 leading-relaxed">
              Built by precision. Driven by purpose. Engineering-grade AI systems that scale, protect data, and make operations smarter.
            </p>
            
            {/* Social Links */}
            <div className="mt-6 flex items-center gap-4">
              <a
                href="https://linkedin.com/company/genrecai"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-100 hover:text-accent-gold-hover transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com/genrecai"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-100 hover:text-accent-gold-hover transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/genrecai"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-100 hover:text-accent-gold-hover transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="mailto:contact@genrecai.com"
                className="text-gray-100 hover:text-accent-gold-hover transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Footer Sections */}
          {footerSections.map((section, sectionIdx) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 * (sectionIdx + 1) }}
            >
              <h4 className="text-sm font-semibold text-accent-gold-hover uppercase tracking-wider mb-4">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-100 hover:text-accent-gold-hover transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 pt-8 border-t border-accent-gold/10"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-100">
              © {currentYear} <span className="text-white font-semibold">Genrec</span><span className="text-accent-gold-hover font-semibold">AI</span>. All rights reserved.
            </p>
            <p className="text-sm text-gray-100">
              Handcrafted with <span className="text-accent-gold-hover">precision</span> and <span className="text-accent-gold-hover">purpose</span>.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
