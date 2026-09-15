'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'motion/react'
import { Clock, MapPin, Users, Award, CheckCircle, Send } from 'lucide-react'
import { submitToWeb3Forms } from '@/lib/web3forms'

const overviewItems = [
  { icon: Clock, title: 'Duration', value: '3-4 Hours' },
  { icon: MapPin, title: 'Location', value: 'Melbourne CBD Studio' },
  { icon: Users, title: 'Group Size', value: 'Small, Hands-On Groups' },
  { icon: Award, title: 'Certificate', value: 'E-Certificate Provided' },
]

const inclusions = [
  'All ingredients and equipment provided',
  'Hands-on guidance from Baker Babe',
  'Take home your very own creation',
  'Tea, coffee & sweet treats on the day',
  'E-certificate provided upon completion',
  'Suitable for all skill levels',
]

export default function WorkshopPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    contactNumber: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitting(true)
    setError('')
    try {
      const { success, message } = await submitToWeb3Forms({
        subject: 'New Workshop Enquiry — Baker Babe',
        from_name: 'Baker Babe Website',
        'Full Name': formData.fullName,
        Email: formData.email,
        'Contact Number': formData.contactNumber,
        Message: formData.message,
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
      {/* Hero */}
      <section className="bg-baker-soft-pink py-20">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-baker-pink font-semibold tracking-widest text-sm uppercase">
              Learn With Us
            </span>
            <h1 className="font-playfair text-4xl sm:text-5xl font-bold text-baker-dark mt-4 leading-tight">
              Cake Decorating Workshops
            </h1>
            <p className="font-script text-2xl text-baker-pink mt-4">
              Unleash your inner baker!
            </p>
            <p className="text-gray-600 mt-6 text-lg leading-relaxed">
              Join our hands-on cake decorating classes in the heart of Melbourne. Whether
              you&apos;re a complete beginner or looking to refine your skills, our workshops
              offer a fun and creative learning experience. Every participant receives an
              E-certificate upon completion!
            </p>
            <a
              href="#enquire"
              className="inline-flex items-center gap-2 bg-baker-pink text-white px-8 py-3.5 rounded-full font-semibold text-lg hover:bg-baker-pink-hover transition mt-8"
            >
              Enquire Now
            </a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Image
              src="/workshop-1.jpg"
              alt="Cake decorating workshop"
              width={600}
              height={500}
              className="rounded-3xl w-full h-auto object-cover"
              unoptimized
            />
          </motion.div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-14"
          >
            <p className="text-baker-pink text-sm tracking-wider uppercase font-semibold">
              · At a Glance ·
            </p>
            <h2 className="font-playfair text-4xl font-bold text-baker-dark mt-3">
              Workshop Overview
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {overviewItems.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 text-center shadow-sm"
              >
                <div className="w-14 h-14 bg-baker-soft-pink rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-7 h-7 text-baker-pink" />
                </div>
                <h3 className="font-semibold text-baker-dark text-lg">{item.title}</h3>
                <p className="text-gray-600 mt-1">{item.value}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="bg-baker-soft-pink py-20">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src="/workshop-2.jpg"
              alt="A Baker Babe workshop in progress"
              width={600}
              height={500}
              className="rounded-3xl w-full aspect-[4/5] object-cover object-bottom"
              unoptimized
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-baker-pink text-sm tracking-wider uppercase font-semibold">
              · What&apos;s Included ·
            </p>
            <h2 className="font-playfair text-4xl font-bold text-baker-dark mt-3">
              Everything You Need
            </h2>
            <p className="text-gray-600 mt-4 leading-relaxed">
              Just bring yourself and your enthusiasm — we take care of the rest. Here&apos;s
              what every workshop includes:
            </p>
            <ul className="mt-6 space-y-3">
              {inclusions.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-baker-pink shrink-0 mt-0.5" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Enquiry Form */}
      <section id="enquire" className="py-20">
        <div className="max-w-2xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <p className="text-baker-pink text-sm tracking-wider uppercase font-semibold">
              · Interested? ·
            </p>
            <h2 className="font-playfair text-4xl font-bold text-baker-dark mt-3">
              Enquire About a Workshop
            </h2>
            <p className="text-gray-600 mt-4 text-lg">
              Leave your details and we&apos;ll get back to you with upcoming dates and
              everything you need to know.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-3xl p-8 lg:p-12 shadow-sm"
          >
            {submitted ? (
              <div className="text-center py-12">
                <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-6" />
                <h3 className="font-playfair text-3xl font-bold text-baker-dark">
                  Enquiry Sent!
                </h3>
                <p className="text-gray-600 mt-4 text-lg max-w-md mx-auto">
                  Thank you for your interest! Baker Babe will get back to you soon with
                  workshop dates and details.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false)
                    setFormData({ fullName: '', email: '', contactNumber: '', message: '' })
                  }}
                  className="inline-block bg-baker-pink text-white px-8 py-3.5 rounded-full font-semibold hover:bg-baker-pink-hover transition mt-8"
                >
                  Send Another Enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium text-baker-dark mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    required
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-baker-pink focus:border-transparent transition"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-baker-dark mb-2">
                    Email Address *
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
                  <label htmlFor="contactNumber" className="block text-sm font-medium text-baker-dark mb-2">
                    Contact Number *
                  </label>
                  <input
                    type="tel"
                    id="contactNumber"
                    name="contactNumber"
                    required
                    value={formData.contactNumber}
                    onChange={handleChange}
                    placeholder="0410 730 227"
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-baker-pink focus:border-transparent transition"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-baker-dark mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us what you'd like to learn, preferred timing, group size, or any questions..."
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
                  {submitting ? 'Sending...' : 'Send Enquiry'}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </section>

      {/* Past Workshop Gallery */}
      <section className="bg-baker-soft-pink py-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="font-playfair text-4xl font-bold text-baker-dark">
              Workshop Gallery
            </h2>
            <p className="text-gray-600 mt-4 text-lg">
              Moments from our past workshops
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {['/workshop-1.jpg', '/workshop-2.jpg', '/workshop-3.jpg'].map((src, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="relative aspect-square"
              >
                <Image
                  src={src}
                  alt={`Workshop gallery image ${index + 1}`}
                  fill
                  className="rounded-2xl object-cover"
                  unoptimized
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
