'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'motion/react'
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react'
import { submitToWeb3Forms } from '@/lib/web3forms'

function Instagram({ className, ...props }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}

function Facebook({ className, ...props }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}

const contactInfo = [
  {
    icon: Phone,
    title: 'Phone',
    value: '0410 730 227',
    href: 'tel:+61410730227',
  },
  {
    icon: Mail,
    title: 'Email',
    value: 'hello@bakerbabe.com.au',
    href: 'mailto:hello@bakerbabe.com.au',
  },
  {
    icon: MapPin,
    title: 'Address',
    value: 'Melbourne, Victoria, Australia',
    href: null,
  },
  {
    icon: Clock,
    title: 'Business Hours',
    value: 'Mon-Sat: 9AM - 6PM',
    href: null,
  },
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitting(true)
    setError('')
    try {
      const { success, message } = await submitToWeb3Forms({
        subject: 'New Contact Message — Baker Babe',
        from_name: 'Baker Babe Website',
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
      })
      if (success) {
        setSubmitted(true)
      } else {
        setError(message || 'Something went wrong. Please try again.')
      }
    } catch {
      setError('Network error. Please check your connection and try again.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <main>
      {/* Hero Section */}
      <section className="bg-baker-soft-pink py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-playfair text-5xl font-bold text-baker-dark">
              Contact Us
            </h1>
            <p className="font-script text-2xl text-baker-pink mt-4">
              We&apos;d love to hear from you!
            </p>
            <p className="text-gray-600 mt-4 text-lg max-w-2xl mx-auto">
              Have a question about our cakes, workshops, or custom orders? Get in touch and
              we&apos;ll get back to you as soon as possible.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-16">
          {/* Left: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-playfair text-3xl font-bold text-baker-dark mb-8">
              Get in Touch
            </h2>

            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-white rounded-xl p-6 flex items-start gap-4 shadow-sm"
                >
                  <div className="w-12 h-12 bg-baker-soft-pink rounded-full flex items-center justify-center flex-shrink-0">
                    <info.icon className="w-5 h-5 text-baker-pink" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-baker-dark">{info.title}</h3>
                    {info.href ? (
                      <a
                        href={info.href}
                        className="text-gray-600 mt-1 hover:text-baker-pink transition"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-gray-600 mt-1 whitespace-pre-line">{info.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Media */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="mt-8"
            >
              <h3 className="font-semibold text-baker-dark text-lg mb-4">Follow Us</h3>
              <div className="flex gap-4">
                <a
                  href="https://www.instagram.com/baker_babe27/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-baker-soft-pink rounded-full flex items-center justify-center hover:bg-baker-pink hover:text-white text-baker-pink transition"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="https://www.facebook.com/bakerbabe27/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-baker-soft-pink rounded-full flex items-center justify-center hover:bg-baker-pink hover:text-white text-baker-pink transition"
                >
                  <Facebook className="w-5 h-5" />
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-white rounded-3xl p-8 shadow-sm">
              {submitted ? (
                <div className="text-center py-12">
                  <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-6" />
                  <h3 className="font-playfair text-3xl font-bold text-baker-dark">
                    Message Sent!
                  </h3>
                  <p className="text-gray-600 mt-4 text-lg max-w-md mx-auto">
                    Thank you for reaching out! We&apos;ll get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false)
                      setFormData({ name: '', email: '', phone: '', message: '' })
                    }}
                    className="inline-block bg-baker-pink text-white px-8 py-3.5 rounded-full font-semibold hover:bg-baker-pink-hover transition mt-8"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <>
                  <h2 className="font-playfair text-3xl font-bold text-baker-dark mb-8">
                    Send Us a Message
                  </h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-baker-dark mb-2">
                        Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-baker-pink focus:border-transparent transition"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-baker-dark mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-baker-pink focus:border-transparent transition"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-baker-dark mb-2">
                        Phone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="0410 730 227"
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-baker-pink focus:border-transparent transition"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-baker-dark mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        required
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us how we can help you..."
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-baker-pink focus:border-transparent transition resize-none"
                      />
                    </div>

                    {error && (
                      <p className="text-red-500 text-sm text-center bg-red-50 rounded-xl py-3 px-4">
                        {error}
                      </p>
                    )}

                    <button
                      type="submit"
                      disabled={submitting}
                      className="bg-baker-pink text-white w-full py-3.5 rounded-full font-semibold text-lg hover:bg-baker-pink-hover transition flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      <Send className="w-5 h-5" />
                      {submitting ? 'Sending...' : 'Send Message'}
                    </button>
                  </form>
                </>
              )}
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
