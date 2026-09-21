'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'motion/react'
import { Calendar, Clock, Cake, Send, CheckCircle, ShoppingBag } from 'lucide-react'
import { submitToWeb3Forms } from '@/lib/web3forms'

export default function BookingPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    contactNumber: '',
    email: '',
    deliveryDate: '',
    deliveryTime: '',
    cakeSize: '',
    flavour: '',
    designDetails: '',
    allergies: '',
    cakeMessage: '',
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
        subject: 'New Cake Order — Baker Babe',
        from_name: 'Baker Babe Website',
        'Full Name': formData.fullName,
        'Contact Number': formData.contactNumber,
        Email: formData.email,
        'Date of Delivery': formData.deliveryDate,
        'Time of Delivery / Pick-Up': formData.deliveryTime,
        'Cake Size': formData.cakeSize,
        Flavour: formData.flavour,
        'Design / Theme Details': formData.designDetails,
        'Allergies / Dietary Requirements': formData.allergies,
        'Message on the Cake': formData.cakeMessage,
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
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
              <Cake className="w-8 h-8 text-baker-pink" />
            </div>
            <h1 className="font-playfair text-4xl sm:text-5xl font-bold text-baker-dark">
              Order Your Dream Cake
            </h1>
            <p className="font-script text-2xl text-baker-pink mt-4">
              Made with love, just for you!
            </p>
            <p className="text-gray-600 mt-4 text-lg max-w-2xl mx-auto">
              Tell us about your dream cake and we&apos;ll bring it to life. Fill in the details below
              and we&apos;ll get back to you with a quote.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
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
                  Order Submitted Successfully!
                </h3>
                <p className="text-gray-600 mt-4 text-lg max-w-md mx-auto">
                  Thank you! Baker Babe will review your order and contact you shortly to confirm
                  details and pricing.
                </p>
                <Link
                  href="/menu"
                  className="inline-flex items-center gap-2 bg-baker-pink text-white px-8 py-3.5 rounded-full font-semibold hover:bg-baker-pink-hover transition mt-8"
                >
                  Browse More Cakes
                </Link>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-10">
                {/* Section A: Your Details */}
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-baker-soft-pink rounded-full flex items-center justify-center">
                      <span className="text-baker-pink font-bold">A</span>
                    </div>
                    <h2 className="font-playfair text-2xl font-bold text-baker-dark">
                      Your Details
                    </h2>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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

                    <div className="md:col-span-2">
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
                  </div>
                </div>

                {/* Section B: Delivery Details */}
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-baker-soft-pink rounded-full flex items-center justify-center">
                      <span className="text-baker-pink font-bold">B</span>
                    </div>
                    <h2 className="font-playfair text-2xl font-bold text-baker-dark">
                      Delivery Details
                    </h2>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="deliveryDate" className="block text-sm font-medium text-baker-dark mb-2">
                        Date of Delivery *
                      </label>
                      <input
                        type="date"
                        id="deliveryDate"
                        name="deliveryDate"
                        required
                        value={formData.deliveryDate}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-baker-pink focus:border-transparent transition"
                      />
                    </div>

                    <div>
                      <label htmlFor="deliveryTime" className="block text-sm font-medium text-baker-dark mb-2">
                        Time of Delivery / Pick-Up *
                      </label>
                      <input
                        type="time"
                        id="deliveryTime"
                        name="deliveryTime"
                        required
                        value={formData.deliveryTime}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-baker-pink focus:border-transparent transition"
                      />
                    </div>
                  </div>
                </div>

                {/* Section C: Cake Details */}
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-baker-soft-pink rounded-full flex items-center justify-center">
                      <span className="text-baker-pink font-bold">C</span>
                    </div>
                    <h2 className="font-playfair text-2xl font-bold text-baker-dark">
                      Cake Details
                    </h2>
                  </div>

                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="cakeSize" className="block text-sm font-medium text-baker-dark mb-2">
                          Cake Size
                        </label>
                        <select
                          id="cakeSize"
                          name="cakeSize"
                          value={formData.cakeSize}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-baker-pink focus:border-transparent transition"
                        >
                          <option value="">Select a size</option>
                          <option value="6inch">6 inch (serves 8-10)</option>
                          <option value="8inch">8 inch (serves 12-15)</option>
                          <option value="10inch">10 inch (serves 20-25)</option>
                          <option value="2tier">2 Tier</option>
                          <option value="3tier">3 Tier</option>
                          <option value="custom">Custom</option>
                        </select>
                      </div>

                      <div>
                        <label htmlFor="flavour" className="block text-sm font-medium text-baker-dark mb-2">
                          Flavour
                        </label>
                        <select
                          id="flavour"
                          name="flavour"
                          value={formData.flavour}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-baker-pink focus:border-transparent transition"
                        >
                          <option value="">Select a flavour</option>
                          <option value="vanilla">Vanilla</option>
                          <option value="chocolate">Chocolate</option>
                          <option value="red-velvet">Red Velvet</option>
                          <option value="lemon">Lemon</option>
                          <option value="strawberry">Strawberry</option>
                          <option value="caramel">Caramel</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="designDetails" className="block text-sm font-medium text-baker-dark mb-2">
                        Design / Theme Details
                      </label>
                      <textarea
                        id="designDetails"
                        name="designDetails"
                        rows={4}
                        value={formData.designDetails}
                        onChange={handleChange}
                        placeholder="Describe your dream cake design, theme, colours, or any specific details..."
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-baker-pink focus:border-transparent transition resize-none"
                      />
                    </div>

                    <div>
                      <label htmlFor="allergies" className="block text-sm font-medium text-baker-dark mb-2">
                        Allergies / Dietary Requirements
                      </label>
                      <input
                        type="text"
                        id="allergies"
                        name="allergies"
                        value={formData.allergies}
                        onChange={handleChange}
                        placeholder="e.g., Nut-free, Gluten-free, Vegan..."
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-baker-pink focus:border-transparent transition"
                      />
                    </div>

                    <div>
                      <label htmlFor="cakeMessage" className="block text-sm font-medium text-baker-dark mb-2">
                        Message on the Cake
                      </label>
                      <input
                        type="text"
                        id="cakeMessage"
                        name="cakeMessage"
                        value={formData.cakeMessage}
                        onChange={handleChange}
                        placeholder="e.g., Happy Birthday Sarah!"
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-baker-pink focus:border-transparent transition"
                      />
                    </div>
                  </div>
                </div>

                {/* Section D: Reference */}
                {/* Submit */}
                <div>
                  {error && (
                    <p className="text-red-500 text-sm text-center bg-red-50 rounded-xl py-3 px-4 mb-4">
                      {error}
                    </p>
                  )}
                  <button
                    type="submit"
                    disabled={submitting}
                    className="bg-baker-pink text-white w-full py-4 rounded-full font-semibold text-lg hover:bg-baker-pink-hover transition flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    <ShoppingBag className="w-5 h-5" />
                    {submitting ? 'Submitting...' : 'Submit Cake Order'}
                  </button>
                  <p className="text-gray-500 text-sm text-center mt-4">
                    By submitting this form, Baker Babe will review your order and get back to you
                    with a quote and confirmation.
                  </p>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </section>
    </main>
  )
}
