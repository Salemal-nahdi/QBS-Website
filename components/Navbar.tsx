'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { FaBars, FaTimes, FaPhone, FaEnvelope } from 'react-icons/fa'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on window resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) { // lg breakpoint
        setIsOpen(false)
      }
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Close mobile menu on escape key
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false)
      }
    }
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown)
      // Prevent body scroll when menu is open
      document.body.style.overflow = 'hidden'
      // Prevent any automatic focus when menu opens
      setTimeout(() => {
        // Remove focus from any active element
        if (document.activeElement && document.activeElement instanceof HTMLElement) {
          document.activeElement.blur()
        }
        // Ensure no links have focus or active states
        const allLinks = document.querySelectorAll('a')
        allLinks.forEach(link => {
          if (link instanceof HTMLElement) {
            link.blur()
            link.classList.remove('active')
          }
        })
      }, 50)
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Why Choose Us', href: '#why-us' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 glass-effect ${
      isOpen ? 'shadow-lg bg-white' : scrolled ? 'shadow-lg bg-white/95' : 'bg-white/80 shadow-sm'
    }`}>
      <div className="section-padding py-3 md:py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center z-10"
          >
            <Link href="/" className="flex items-center space-x-3">
              <div className="relative w-10 h-10 md:w-12 md:h-12">
                <Image
                  src="/images/logo-symbol.png"
                  alt="QBS Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <div className="block">
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-qbs-primary">
                  <span className="sm:hidden">QBS Cleaning Services</span>
                  <span className="hidden sm:inline">QBS</span>
                </h2>
                <p className="text-xs text-qbs-text-dim hidden sm:block">Professional Cleaning</p>
              </div>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-qbs-text hover:text-qbs-primary transition-colors duration-300 font-medium"
              >
                {link.name}
              </motion.a>
            ))}

          </div>

          {/* Contact Info - Desktop */}
          <div className="hidden xl:flex items-center space-x-6 text-sm">
            <a href="tel:+61423831446" className="flex items-center space-x-2 text-qbs-text-dim hover:text-qbs-primary transition-colors">
              <FaPhone className="text-qbs-primary" />
              <span>+61 423 831 446</span>
            </a>
            <a href="mailto:info@qbs.com.au" className="flex items-center space-x-2 text-qbs-text-dim hover:text-qbs-primary transition-colors">
              <FaEnvelope className="text-qbs-primary" />
              <span>info@qbs.com.au</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-qbs-text text-2xl focus:outline-none z-10 p-2 hover:text-qbs-primary transition-colors relative"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <>
              {/* Mobile Menu Overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="lg:hidden fixed inset-0 bg-qbs-primary/20 backdrop-blur-lg z-0"
                onClick={() => setIsOpen(false)}
              />
              
              {/* Mobile Menu Content */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="lg:hidden absolute top-full left-0 right-0 bg-white border-t border-qbs-gray/30 shadow-xl"
              >
                <div className="section-padding py-6">
                  <div className="flex flex-col space-y-8">
                    {/* Navigation Links */}
                    <div className="flex flex-col space-y-2">
                      {navLinks.map((link, index) => (
                        <motion.a
                          key={link.name}
                          href={link.href}
                          onClick={() => setIsOpen(false)}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: 0.1 }}
                          className="text-qbs-text hover:text-qbs-primary transition-colors duration-300 font-medium py-4 px-6 border-b border-qbs-gray/40 focus:outline-none last:border-b-0 !bg-transparent"
                        >
                          {link.name}
                        </motion.a>
                      ))}
                    </div>
                    

                    
                    {/* Contact Info */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.3 }}
                      className="pt-6 border-t border-qbs-gray/20 space-y-4 mx-2"
                    >
                      <a 
                        href="tel:+61423831446" 
                        className="flex items-center space-x-3 text-qbs-text-dim hover:text-qbs-primary transition-colors py-2"
                      >
                        <FaPhone className="text-qbs-primary text-lg" />
                        <span className="font-medium">+61 423 831 446</span>
                      </a>
                      <a 
                        href="mailto:info@qbs.com.au" 
                        className="flex items-center space-x-3 text-qbs-text-dim hover:text-qbs-primary transition-colors py-2"
                      >
                        <FaEnvelope className="text-qbs-primary text-lg" />
                        <span className="font-medium">info@qbs.com.au</span>
                      </a>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </nav>
  )
}

export default Navbar
