'use client'

import { motion } from 'framer-motion'
import { 
  FaShieldAlt, FaClock, FaUserTie, FaRecycle, 
  FaChartLine, FaHandshake 
} from 'react-icons/fa'

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: <FaShieldAlt />,
      title: 'Fully Insured & Licenced',
      description: 'Complete peace of mind with comprehensive insurance coverage and all required licenses.',
    },
    {
      icon: <FaClock />,
      title: '24/7 Availability',
      description: 'Round-the-clock service to accommodate your schedule and emergency cleaning needs.',
    },
    {
      icon: <FaUserTie />,
      title: 'Trained Professionals',
      description: 'Highly skilled, police-checked staff with ongoing training in the latest cleaning techniques.',
    },
    {
      icon: <FaRecycle />,
      title: 'Eco-Friendly Solutions',
      description: 'Sustainable cleaning products and practices that protect your health and the environment.',
    },
    {
      icon: <FaChartLine />,
      title: 'Competitive Pricing',
      description: 'Transparent, fair pricing with no hidden costs. Quality service that fits your budget.',
    },
    {
      icon: <FaHandshake />,
      title: 'Satisfaction Guarantee',
      description: '100% satisfaction guarantee. If you\'re not happy, we\'ll make it right - no questions asked.',
    },


  ]



  return (
    <section id="why-us" className="py-20 bg-qbs-gray-light">
      <div className="section-padding">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-qbs-primary font-semibold text-sm uppercase tracking-wider">Why Choose Us</span>
          <h2 className="text-4xl md:text-5xl font-black mt-4 mb-6 text-qbs-text">
            The <span className="gradient-text">QBS Difference</span>
          </h2>
          <p className="text-xl text-qbs-text-light max-w-3xl mx-auto">
            Discover why hundreds of businesses across South Australia trust QBS for their cleaning needs.
          </p>
        </motion.div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              className="bg-white shadow-lg p-6 rounded-xl border border-qbs-gray/30 hover:border-qbs-primary/50 
                       transition-all duration-300 group card-hover hover:shadow-xl"
            >
              <div className="text-qbs-primary text-3xl mb-4 group-hover:scale-110 transition-transform">
                {reason.icon}
              </div>
              <h3 className="text-lg font-bold mb-2 text-qbs-text group-hover:text-qbs-primary transition-colors">
                {reason.title}
              </h3>
              <p className="text-sm text-qbs-text-light">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>



        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center bg-qbs-primary/5 border border-qbs-primary/20 p-12 rounded-3xl"
        >
          <h3 className="text-3xl font-bold mb-4 text-qbs-text">
            Ready to Experience the <span className="gradient-text">QBS Difference?</span>
          </h3>
          <p className="text-xl text-qbs-text-light mb-8 max-w-2xl mx-auto">
            Join hundreds of satisfied businesses across South Australia. 
            Get your free, no-obligation quote today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contact" className="btn-primary">
              Get Your Free Quote
            </a>
            <a href="tel:0400000000" className="btn-secondary">
              Call Us Now
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default WhyChooseUs
