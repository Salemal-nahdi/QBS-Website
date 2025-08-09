'use client'

import { motion } from 'framer-motion'
import { FaHospital, FaHardHat, FaBuilding, FaHome, FaShieldAlt } from 'react-icons/fa'
import { MdCleaningServices } from 'react-icons/md'

const Services = () => {
  const services = [
    {
      icon: <FaHospital className="text-3xl" />,
      title: 'Medical & Clinic Cleaning',
      description: 'Specialised cleaning for medical facilities with hospital-grade disinfection protocols.',
      features: [
        'TGA-approved disinfectants',
        'Biohazard waste management',
        'Infection control compliance',
        'Daily, weekly, or monthly schedules',
      ],
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: <FaHardHat className="text-3xl" />,
      title: 'Builders Clean',
      description: 'Complete post-construction cleaning to make your property move-in ready.',
      features: [
        'Debris and dust removal',
        'Window and glass cleaning',
        'Floor polishing and treatment',
        'Final detail cleaning',
      ],
      color: 'from-orange-500 to-yellow-500',
    },
    {
      icon: <FaBuilding className="text-3xl" />,
      title: 'Commercial Office Cleaning',
      description: 'Keep your workspace pristine and productive with our office cleaning services.',
      features: [
        'Daily office maintenance',
        'Restroom sanitization',
        'Kitchen and breakroom cleaning',
        'Waste management',
      ],
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: <FaHome className="text-3xl" />,
      title: 'Retail & Showroom Cleaning',
      description: 'Maintain an immaculate presentation for your customers and clients.',
      features: [
        'Floor care and maintenance',
        'Display and fixture cleaning',
        'Entrance and window cleaning',
        'After-hours service available',
      ],
      color: 'from-green-500 to-teal-500',
    },
    {
      icon: <MdCleaningServices className="text-3xl" />,
      title: 'Deep Cleaning Services',
      description: 'Comprehensive deep cleaning for spaces that need extra attention.',
      features: [
        'Carpet steam cleaning',
        'Upholstery cleaning',
        'High-pressure washing',
        'Sanitization and deodorizing',
      ],
      color: 'from-red-500 to-pink-500',
    },
    {
      icon: <FaShieldAlt className="text-3xl" />,
      title: 'Emergency Cleaning',
      description: '24/7 emergency cleaning services for unexpected situations.',
      features: [
        'Rapid response team',
        'Flood and water damage',
        'Biohazard cleanup',
        'Same-day service',
      ],
      color: 'from-indigo-500 to-blue-500',
    },
  ]

  return (
    <section id="services" className="py-20 bg-qbs-gray-light">
      <div className="section-padding">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-qbs-primary font-semibold text-sm uppercase tracking-wider">Our Services</span>
          <h2 className="text-4xl md:text-5xl font-black mt-4 mb-6 text-qbs-text">
            Comprehensive <span className="gradient-text">Cleaning Solutions</span>
          </h2>
          <p className="text-xl text-qbs-text-light max-w-3xl mx-auto">
            From medical facilities to construction sites, we provide specialised cleaning services 
            tailored to your industry's unique requirements.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="bg-white shadow-lg p-8 rounded-2xl h-full border border-qbs-gray/30 
                            hover:border-qbs-primary/50 transition-all duration-300 card-hover hover:shadow-xl
                            flex flex-col">
                {/* Icon */}
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.color} 
                              flex items-center justify-center text-white mb-6
                              group-hover:scale-110 transition-transform duration-300`}>
                  {service.icon}
                </div>

                {/* Content */}
                <div className="flex-grow">
                  <h3 className="text-2xl font-bold mb-3 text-qbs-text group-hover:text-qbs-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-qbs-text-light mb-6">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start space-x-3">
                        <span className="text-qbs-primary text-sm font-semibold flex-shrink-0 mt-0.5">✓</span>
                        <span className="text-sm text-qbs-text leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <div className="mt-auto pt-4">
                  <a
                    href="#contact"
                    className="inline-flex items-center text-qbs-primary font-semibold 
                             hover:text-qbs-primary-dark transition-colors"
                  >
                    Get Quote
                    <svg
                      className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-16"
        >
          <p className="text-qbs-text-light mb-6">
            Can't find what you're looking for? We offer customised cleaning solutions.
          </p>
          <a href="#contact" className="btn-primary">
            Discuss Your Requirements
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Services
