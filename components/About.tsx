'use client'

import { motion } from 'framer-motion'
import { FaAward, FaClock, FaLeaf } from 'react-icons/fa'

const About = () => {
  const stats = [
    { icon: <FaAward />, value: '10+', label: 'Years of Excellence' },

    { icon: <FaClock />, value: '24/7', label: 'Service Availability' },
    { icon: <FaLeaf />, value: '100%', label: 'Eco-Friendly' },
  ]

  const values = [
    {
      title: 'Quality First',
      description: 'We never compromise on the quality of our service, ensuring exceptional results every time.',
    },
    {
      title: 'Reliability',
      description: 'Punctual, consistent, and dependable - we\'re the cleaning partner you can count on.',
    },
    {
      title: 'Innovation',
      description: 'Using the latest cleaning technologies and methods to deliver superior results.',
    },
    {
      title: 'Sustainability',
      description: 'Committed to eco-friendly practices that protect both your space and our environment.',
    },
  ]

  return (
    <section id="about" className="py-20 bg-white">
      <div className="section-padding">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-qbs-primary font-semibold text-sm uppercase tracking-wider">About QBS</span>
            <h2 className="text-4xl md:text-5xl font-black mt-4 mb-6 text-qbs-text">
              South Australia's Most <span className="gradient-text">Trusted</span> Cleaning Partner
            </h2>
            <p className="text-lg text-qbs-text-light mb-6 leading-relaxed">
              For over a decade, QBS has been setting the standard for commercial cleaning excellence 
              across South Australia. From Adelaide's bustling medical clinics to major construction 
              projects throughout the state, we've built our reputation on reliability, quality, and 
              exceptional customer service.
            </p>
            <p className="text-lg text-qbs-text-light mb-8 leading-relaxed">
              Our team of certified professionals uses state-of-the-art equipment and eco-friendly 
              products to deliver results that not only meet but exceed industry standards. We understand 
              that every business has unique needs, which is why we offer customised cleaning solutions 
              tailored to your specific requirements.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8 max-w-lg mx-auto sm:max-w-none">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center flex flex-col items-center"
                >
                  <div className="text-qbs-primary text-2xl mb-2">{stat.icon}</div>
                  <div className="text-3xl font-bold text-qbs-text mb-1">{stat.value}</div>
                  <div className="text-xs text-qbs-text-dim">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Content - Values */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="bg-qbs-gray-light border border-qbs-gray/30 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-6 text-qbs-text">Our Core Values</h3>
              <div className="space-y-4">
                {values.map((value, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex items-start space-x-4"
                  >
                    <div className="w-2 h-2 bg-qbs-primary rounded-full mt-2 flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-semibold text-qbs-text mb-1">{value.title}</h4>
                      <p className="text-qbs-text-dim text-sm">{value.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-qbs-gray-light border border-qbs-gray/30 p-6 rounded-2xl"
            >
              <h4 className="text-lg font-semibold mb-4 text-qbs-text">Certifications & Compliance</h4>
              <div className="grid grid-cols-2 gap-4">

                <div className="flex items-center space-x-2">
                  <span className="text-qbs-primary">✓</span>
                  <span className="text-sm text-qbs-text">Fully Insured</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-qbs-primary">✓</span>
                  <span className="text-sm text-qbs-text">Police Checked Staff</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-qbs-primary">✓</span>
                  <span className="text-sm text-qbs-text">WHS Compliant</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
