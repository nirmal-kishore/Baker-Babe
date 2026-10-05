'use client'

import { motion } from 'motion/react'
import { Cake } from 'lucide-react'
import CakeOrderForm from '@/components/CakeOrderForm'

export default function BookingPage() {
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
          <CakeOrderForm />
        </div>
      </section>
    </main>
  )
}
