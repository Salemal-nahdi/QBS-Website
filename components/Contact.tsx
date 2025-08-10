'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaPaperPlane } from 'react-icons/fa'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      const form = e.target as HTMLFormElement
      const formData = new FormData(form)
      
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData as any).toString(),
      })
      
      if (response.ok) {
        setIsSubmitting(false)
        setSubmitStatus('success')
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          service: '',
          message: '',
        })
        
        // Reset status after 5 seconds
        setTimeout(() => setSubmitStatus('idle'), 5000)
      } else {
        throw new Error('Form submission failed')
      }
    } catch (error) {
      setIsSubmitting(false)
      setSubmitStatus('error')
      console.error('Form submission error:', error)
      
      // Reset status after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000)
    }
  }

  const contactInfo = [
    {
      icon: <FaPhone />,
      title: 'Phone',
      content: '+61 423 831 446',
      link: 'tel:+61423831446',
    },
    {
      icon: <FaEnvelope />,
      title: 'Email',
      content: 'info@qbs.com.au',
      link: 'mailto:info@qbs.com.au',
    },
    {
      icon: <FaMapMarkerAlt />,
      title: 'Service Area',
      content: 'All of South Australia',
      link: null,
    },
    {
      icon: <FaClock />,
      title: 'Hours',
      content: '24/7 Emergency Service',
      link: null,
    },
  ]

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="section-padding">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-qbs-primary font-semibold text-sm uppercase tracking-wider">Get In Touch</span>
          <h2 className="text-4xl md:text-5xl font-black mt-4 mb-6 text-qbs-text">
            Request Your <span className="gradient-text">Free Quote</span>
          </h2>
          <p className="text-xl text-qbs-text-light max-w-3xl mx-auto">
            Tell us about your cleaning needs and we'll provide a customised solution with transparent pricing.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-qbs-gray-light border border-qbs-gray/30 p-8 rounded-2xl"
          >
            <form 
              name="contact" 
              method="POST" 
              data-netlify="true" 
              data-netlify-honeypot="bot-field"
              onSubmit={handleSubmit} 
              className="space-y-6"
            >
              <input type="hidden" name="form-name" value="contact" />
              <div style={{ display: 'none' }}>
                <label>
                  Don't fill this out if you're human: <input name="bot-field" />
                </label>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2 text-qbs-text">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white border border-qbs-gray/30 
                             focus:border-qbs-primary focus:outline-none transition-colors"
                    placeholder="John Smith"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2 text-qbs-text">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white border border-qbs-gray/30 
                             focus:border-qbs-primary focus:outline-none transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2 text-qbs-text">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white border border-qbs-gray/30 
                             focus:border-qbs-primary focus:outline-none transition-colors"
                    placeholder="+61 423 831 446"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium mb-2 text-qbs-text">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-white border border-qbs-gray/30 
                             focus:border-qbs-primary focus:outline-none transition-colors"
                    placeholder="Your Company"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium mb-2 text-qbs-text">
                  Service Required *
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-qbs-gray border border-qbs-gray/30 
                           focus:border-qbs-accent focus:outline-none transition-colors"
                >
                  <option value="">Select a service</option>
                  <option value="clinic">Medical & Clinic Cleaning</option>
                  <option value="builders">Builders Clean</option>
                  <option value="office">Office Cleaning</option>
                  <option value="retail">Retail & Showroom Cleaning</option>
                  <option value="deep">Deep Cleaning</option>
                  <option value="emergency">Emergency Cleaning</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2 text-qbs-text">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-qbs-gray border border-qbs-gray/30 
                           focus:border-qbs-accent focus:outline-none transition-colors resize-none"
                  placeholder="Tell us more about your cleaning needs..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full btn-primary flex items-center justify-center space-x-2 
                         ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                {isSubmitting ? (
                  <span>Sending...</span>
                ) : (
                  <>
                    <span>Send Message</span>
                    <FaPaperPlane />
                  </>
                )}
              </button>

              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center p-4 bg-qbs-primary/20 border border-qbs-primary/50 rounded-lg"
                >
                  <p className="text-qbs-primary">Thank you! We'll be in touch within 24 hours.</p>
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center p-4 bg-red-100 border border-red-300 rounded-lg"
                >
                  <p className="text-red-600">Sorry, there was an error sending your message. Please try again or call us directly.</p>
                </motion.div>
              )}
            </form>
          </motion.div>

          {/* Contact Information & Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Quick Contact Info */}
            <div className="bg-qbs-gray-light border border-qbs-gray/30 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-6 text-qbs-text">Quick Contact</h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex items-center space-x-4"
                  >
                    <div className="text-qbs-primary text-xl flex-shrink-0 w-6 flex justify-center">{info.icon}</div>
                    <div>
                      <p className="font-semibold text-qbs-text">{info.title}</p>
                      {info.link ? (
                        <a href={info.link} className="text-qbs-text-light hover:text-qbs-primary transition-colors">
                          {info.content}
                        </a>
                      ) : (
                        <p className="text-qbs-text-light">{info.content}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Service Areas */}
            <div className="bg-qbs-gray-light border border-qbs-gray/30 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-6 text-qbs-text">Service Areas</h3>
              <p className="text-qbs-text-light mb-4">
                We proudly serve all of South Australia, with rapid response times in:
              </p>
              <div className="grid grid-cols-2 gap-2">
                {['Adelaide CBD', 'North Adelaide', 'Glenelg', 'Norwood', 'Port Adelaide', 
                  'Mount Barker', 'Victor Harbor', 'Murray Bridge'].map((area, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <span className="text-qbs-primary">✓</span>
                    <span className="text-sm text-qbs-text">{area}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Emergency Contact */}
            <div className="bg-gradient-to-br from-qbs-primary to-qbs-primary-dark p-8 rounded-2xl text-white">
              <h3 className="text-2xl font-bold mb-4">Need Emergency Cleaning?</h3>
              <p className="mb-6">
                Our rapid response team is available 24/7 for urgent cleaning requirements.
              </p>
              <a
                href="tel:+61423831446"
                className="inline-flex items-center space-x-2 bg-white text-qbs-primary px-6 py-3 
                       rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                <FaPhone />
                <span>Call Emergency Hotline</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
