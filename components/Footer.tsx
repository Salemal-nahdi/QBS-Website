'use client'

import Link from 'next/link'
import Image from 'next/image'
import { FaFacebook, FaInstagram, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ]

  const services = [
    { name: 'Clinic Cleaning', href: '#services' },
    { name: 'Builders Clean', href: '#services' },
    { name: 'Office Cleaning', href: '#services' },
    { name: 'Emergency Service', href: '#services' },
  ]

  const socialLinks = [
    { icon: <FaFacebook />, href: '#', label: 'Facebook' },
    { icon: <FaInstagram />, href: '#', label: 'Instagram' },
  ]

  return (
    <footer className="bg-qbs-primary text-white border-t border-qbs-primary-dark/20">
      <div className="section-padding py-12">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="relative w-10 h-10">
                <Image
                  src="/images/logo-symbol.png"
                  alt="QBS Logo"
                  fill
                  className="object-contain brightness-0 invert"
                />
              </div>
              <h3 className="text-xl font-bold text-white">QBS</h3>
            </div>
            <p className="text-white/80 mb-4">
              South Australia's trusted partner for professional commercial cleaning services.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-white/10 border border-white/20 rounded-lg flex items-center justify-center 
                           text-white/70 hover:text-white hover:bg-white/20 
                           transition-all duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-white/70 hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Our Services</h3>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <a
                    href={service.href}
                    className="text-white/70 hover:text-white transition-colors"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact Info</h3>
            <div className="space-y-3">
              <a
                href="tel:+61423831446"
                className="flex items-start space-x-3 text-white/70 hover:text-white transition-colors"
              >
                <FaPhone className="mt-1 flex-shrink-0" />
                <span>+61 423 831 446</span>
              </a>
              <a
                href="mailto:info@qbs.com.au"
                className="flex items-start space-x-3 text-white/70 hover:text-white transition-colors"
              >
                <FaEnvelope className="mt-1 flex-shrink-0" />
                <span>info@qbs.com.au</span>
              </a>
              <div className="flex items-start space-x-3 text-white/70">
                <FaMapMarkerAlt className="mt-1 flex-shrink-0" />
                <span>Servicing the Greater Adelaide Region</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/20">
          <div className="text-center">
            <p className="text-white/70 text-sm">
              © {currentYear} QBS Professional Cleaning. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
