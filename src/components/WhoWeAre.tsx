'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Linkedin, Github } from 'lucide-react'

const founders = [
  {
    name: 'Jai Samyukth B U',
    role: 'Co-Founder',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
    bio: 'Building intelligent systems from first principles.',
  },
  {
    name: 'Shyamnath Sankar',
    role: 'Co-Founder',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80',
    bio: 'Engineering precision into every line of code.',
  },
  {
    name: 'Harish V',
    role: 'Technical Lead',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80',
    bio: 'Architecting scalable solutions that endure.',
  },
]

export function WhoWeAre() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section className="bg-secondary-bg py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="mb-6 text-4xl font-light tracking-tight text-light-text sm:text-5xl">
            Who We <span className="font-normal bg-gradient-to-r from-accent-gold to-accent-gold-hover bg-clip-text text-transparent">Are</span>
          </h2>
          <p className="text-lg leading-relaxed text-secondary-text">
            Founded by <strong className="text-accent-gold">Jai Samyukth B U</strong> and <strong className="text-accent-gold">Shyamnath Sankar</strong>, 
            with <strong className="text-accent-gold">Harish V</strong> as Technical Lead.
            <br />
            <br />
            We build from nothing but code, caffeine, and conviction.
            <br />
            No investors. No paid tools. No noise. Just pure engineering.
          </p>
        </motion.div>

        {/* Founders Grid */}
        <div className="mx-auto mt-20 grid max-w-5xl grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {founders.map((founder, index) => (
            <motion.div
              key={founder.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 + index * 0.15 }}
              className="group relative"
            >
              {/* Image Container with luxury hover effect */}
              <div className="relative mb-6 aspect-square overflow-hidden bg-tertiary-bg rounded-lg border-2 border-transparent transition-all duration-500 group-hover:border-accent-gold group-hover:shadow-2xl group-hover:shadow-accent-gold/20">
                <div
                  className="founder-image absolute inset-0 bg-cover bg-center transition-all duration-700 group-hover:scale-110"
                  style={{
                    backgroundImage: `url(${founder.image})`,
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-bg/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                {/* Social Links with gold theme */}
                <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <button className="flex h-10 w-10 items-center justify-center border border-accent-gold bg-primary-bg/80 backdrop-blur-sm transition-colors hover:bg-accent-gold hover:text-primary-bg">
                    <Linkedin className="h-4 w-4 text-accent-gold transition-colors hover:text-primary-bg" />
                  </button>
                  <button className="flex h-10 w-10 items-center justify-center border border-accent-gold bg-primary-bg/80 backdrop-blur-sm transition-colors hover:bg-accent-gold hover:text-primary-bg">
                    <Github className="h-4 w-4 text-accent-gold transition-colors hover:text-primary-bg" />
                  </button>
                </div>
              </div>

              {/* Info */}
              <div className="text-center">
                <h3 className="mb-1 text-xl font-medium text-light-text group-hover:text-accent-gold transition-colors">
                  {founder.name}
                </h3>
                <p className="mb-3 text-sm font-medium tracking-wider text-accent-gold uppercase">
                  {founder.role}
                </p>
                <p className="text-sm leading-relaxed text-secondary-text">
                  {founder.bio}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
