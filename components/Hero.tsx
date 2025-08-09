'use client'

import { motion } from 'framer-motion'
import { FaCheckCircle, FaArrowRight, FaUserMd, FaWrench, FaBuilding, FaStar } from 'react-icons/fa'

const Hero = () => {
  const features = [
    'Licenced & Insured',
    'Eco-Friendly Products',
    '100% Satisfaction Guarantee',
    '24/7 Emergency Service',
  ]

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-12 sm:pt-16 md:pt-20 bg-gradient-to-br from-qbs-secondary via-qbs-white to-qbs-gray-light overflow-x-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-qbs-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-qbs-primary/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative section-padding py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >


            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight"
            >
              Professional{' '}
              <span className="gradient-text">Cleaning Services</span>{' '}
              That Exceed Expectations
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-qbs-text-light mb-8 leading-relaxed"
            >
              South Australia's premier commercial cleaning specialists. From medical clinics to construction sites, 
              we deliver spotless results that protect your reputation and create healthier environments.
            </motion.p>

            {/* Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8"
            >
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <FaCheckCircle className="text-qbs-primary flex-shrink-0" />
                  <span className="text-qbs-text">{feature}</span>
                </div>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a href="#contact" className="btn-primary flex items-center justify-center space-x-2 group">
                <span>Get Free Quote</span>
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#services" className="btn-secondary flex items-center justify-center">
                View Our Services
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="grid grid-cols-2 gap-6 mt-12 pt-12 border-t border-qbs-gray max-w-sm mx-auto"
            >
              <div>
                <h3 className="text-3xl font-bold text-qbs-primary">10+</h3>
                <p className="text-sm text-qbs-text-dim">Years Experience</p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-qbs-primary">24/7</h3>
                <p className="text-sm text-qbs-text-dim">Support Available</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Hero Image/Graphics */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden lg:block"
          >
                          <div className="relative">
              {/* Decorative Elements */}
              <div className="absolute inset-0 bg-gradient-to-br from-qbs-primary to-qbs-primary-light rounded-3xl opacity-10 blur-2xl" />
              
              {/* Service Cards */}
              <div className="relative grid grid-cols-2 gap-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  className="glass-effect p-6 rounded-2xl card-hover h-40"
                >
                  <div className="w-12 h-12 bg-qbs-primary/20 rounded-lg flex items-center justify-center mb-4">
                    <FaUserMd className="text-xl text-qbs-primary" />
                  </div>
                  <h4 className="text-lg font-semibold mb-2 text-qbs-text">Clinic Cleaning</h4>
                  <p className="text-sm text-qbs-text-dim">Medical-grade sanitization</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 }}
                  className="glass-effect p-6 rounded-2xl card-hover h-40"
                >
                  <div className="w-12 h-12 bg-qbs-primary/20 rounded-lg flex items-center justify-center mb-4">
                    <FaWrench className="text-xl text-qbs-primary" />
                  </div>
                  <h4 className="text-lg font-semibold mb-2 text-qbs-text">Builders Clean</h4>
                  <p className="text-sm text-qbs-text-dim">Post-construction excellence</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.0 }}
                  className="glass-effect p-6 rounded-2xl card-hover h-40"
                >
                  <div className="w-12 h-12 bg-qbs-primary/20 rounded-lg flex items-center justify-center mb-4">
                    <FaBuilding className="text-xl text-qbs-primary" />
                  </div>
                  <h4 className="text-lg font-semibold mb-2 text-qbs-text">Office Cleaning</h4>
                  <p className="text-sm text-qbs-text-dim">Professional workspace care</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.1 }}
                  className="glass-effect p-6 rounded-2xl card-hover h-40"
                >
                  <div className="w-12 h-12 bg-qbs-primary/20 rounded-lg flex items-center justify-center mb-4">
                    <FaStar className="text-xl text-qbs-primary" />
                  </div>
                  <h4 className="text-lg font-semibold mb-2 text-qbs-text">Deep Cleaning</h4>
                  <p className="text-sm text-qbs-text-dim">Thorough & detailed service</p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
