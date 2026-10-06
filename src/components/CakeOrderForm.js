'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'motion/react'
import { Calendar, Cake, CheckCircle, ShoppingBag, User, ImagePlus, X, Loader2 } from 'lucide-react'
import { submitToWeb3Forms } from '@/lib/web3forms'
import { uploadToCloudinary } from '@/lib/cloudinary'

// Web3Forms free plan caps attachments at ~5 MB. We validate client-side so the
// user gets a friendly message instead of a server rejection.
const MAX_IMAGE_BYTES = 5 * 1024 * 1024 // 5 MB
const ACCEPTED_IMAGE_TYPES = ['image/jpeg', 'image/png', 'image/webp', 'image/heic', 'image/heif']

/**
 * The Baker Babe cake order form, extracted so it can be rendered both on the
 * dedicated /booking page and inline on the Home page. Renders the white form
 * card only — surrounding section/hero layout is owned by each page.
 */
export default function CakeOrderForm() {
  // Baker Babe operates in Melbourne, Australia. Compute "now" in Melbourne
  // (Australia/Melbourne handles AEST/AEDT daylight saving automatically) so
  // past dates/times are blocked regardless of the visitor's own timezone.
  const melbourneNow = () => {
    const parts = new Intl.DateTimeFormat('en-CA', {
      timeZone: 'Australia/Melbourne',
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
    }).formatToParts(new Date())
    const get = (type) => parts.find((p) => p.type === type)?.value
    // en-CA formats date as YYYY-MM-DD, which matches <input type="date">/"time".
    const date = `${get('year')}-${get('month')}-${get('day')}`
    let hour = get('hour')
    if (hour === '24') hour = '00' // some engines emit 24 for midnight
    const time = `${hour}:${get('minute')}`
    return { date, time }
  }

  const { date: today, time: nowTime } = melbourneNow()

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

  // Reference image attachment (optional). Sent to Web3Forms as a file so it
  // arrives as an attachment on the order email.
  const [imageFile, setImageFile] = useState(null)
  const [imagePreview, setImagePreview] = useState('')
  const [imageName, setImageName] = useState('')
  const [imageError, setImageError] = useState('')
  const [uploading, setUploading] = useState(false)

  const handleImageSelect = (e) => {
    const file = e.target.files?.[0]
    // Allow re-selecting the same file later by clearing the input value.
    e.target.value = ''
    if (!file) return

    setImageError('')

    if (!file.type.startsWith('image/')) {
      setImageError('Please choose an image file (JPG, PNG, WEBP, or HEIC).')
      return
    }
    if (file.size > MAX_IMAGE_BYTES) {
      const mb = (MAX_IMAGE_BYTES / (1024 * 1024)).toFixed(0)
      setImageError(
        `That image is ${(file.size / (1024 * 1024)).toFixed(1)} MB — please choose one under ${mb} MB.`,
      )
      return
    }

    if (imagePreview) URL.revokeObjectURL(imagePreview)
    setImageFile(file)
    setImagePreview(URL.createObjectURL(file))
    setImageName(file.name)
  }

  const handleRemoveImage = () => {
    if (imagePreview) URL.revokeObjectURL(imagePreview)
    setImageFile(null)
    setImagePreview('')
    setImageName('')
    setImageError('')
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    // Contact number: allow only digits, spaces, and + - ( ) so letters can't be typed.
    const nextValue =
      name === 'contactNumber' ? value.replace(/[^0-9+\-() ]/g, '') : value
    setFormData((prev) => ({
      ...prev,
      [name]: nextValue,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    // Guard against a delivery date/time in the past (Melbourne time).
    // Re-check at submit time in case the form sat open for a while.
    const { date: nowDate, time: currentTime } = melbourneNow()
    if (
      formData.deliveryDate < nowDate ||
      (formData.deliveryDate === nowDate && formData.deliveryTime && formData.deliveryTime < currentTime)
    ) {
      setError('Please choose a delivery date and time in the future (Melbourne time).')
      return
    }

    setSubmitting(true)
    setError('')
    try {
      // If a reference image is attached, upload it to Cloudinary first and
      // include the resulting URL in the order email (inline preview + link).
      let imageUrl = ''
      if (imageFile) {
        setUploading(true)
        const upload = await uploadToCloudinary(imageFile)
        setUploading(false)
        if (!upload.success) {
          setError(upload.message || 'Could not upload the reference image. Please try again.')
          setSubmitting(false)
          return
        }
        imageUrl = upload.url
      }

      const payload = {
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
        // Clickable link to the full-resolution reference image on Cloudinary.
        // (Web3Forms' free plan sends plain-text emails, so a link is used
        // rather than an inline <img>, which would not render.)
        'Reference Image': imageUrl || 'None provided',
      }

      const { success, message } = await submitToWeb3Forms(payload)
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
                <User className="w-5 h-5 text-baker-pink" />
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
                  maxLength={60}
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
                  inputMode="tel"
                  maxLength={20}
                  pattern="[0-9+\-() ]{6,}"
                  title="Please enter a valid phone number (digits only, e.g. 0410 730 227)"
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
                  maxLength={100}
                  pattern="[^@\s]+@[^@\s]+\.[^@\s]+"
                  title="Please enter a valid email address, e.g. name@example.com"
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
                <Calendar className="w-5 h-5 text-baker-pink" />
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
                  min={today}
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
                  min={formData.deliveryDate === today ? nowTime : undefined}
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
                <Cake className="w-5 h-5 text-baker-pink" />
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
                    <option value="Cold Coffee Cake">Cold Coffee Cake</option>
                    <option value="Chocolate Truffle">Chocolate Truffle</option>
                    <option value="Caramel Crunch">Caramel Crunch</option>
                    <option value="Strawberry Vanilla">Strawberry Vanilla</option>
                    <option value="Tiramisu Cake">Tiramisu Cake</option>
                    <option value="Chocolate Tiramisu">Chocolate Tiramisu</option>
                    <option value="Classic Vanilla Cake">Classic Vanilla Cake</option>
                    <option value="Pistachio Raspberry">Pistachio Raspberry</option>
                    <option value="Cookie and Cream">Cookie and Cream</option>
                    <option value="Blueberry Vanilla">Blueberry Vanilla</option>
                    <option value="Chocolate Raspberry Cake">Chocolate Raspberry Cake</option>
                    <option value="Raspberry Vanilla">Raspberry Vanilla</option>
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
                  maxLength={3000}
                  value={formData.designDetails}
                  onChange={handleChange}
                  placeholder="Describe your dream cake design, theme, colours, or any specific details..."
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-baker-pink focus:border-transparent transition resize-none"
                />
                <p className="text-xs text-gray-400 text-right mt-1">
                  {formData.designDetails.length} / 3000
                </p>
              </div>

              <div>
                <label htmlFor="allergies" className="block text-sm font-medium text-baker-dark mb-2">
                  Allergies / Dietary Requirements
                </label>
                <input
                  type="text"
                  id="allergies"
                  name="allergies"
                  maxLength={300}
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
                  maxLength={100}
                  value={formData.cakeMessage}
                  onChange={handleChange}
                  placeholder="e.g., Happy Birthday Sarah!"
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-baker-pink focus:border-transparent transition"
                />
                <p className="text-xs text-gray-400 text-right mt-1">
                  {formData.cakeMessage.length} / 100
                </p>
              </div>
            </div>
          </div>

          {/* Section D: Reference Photo */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-baker-soft-pink rounded-full flex items-center justify-center">
                <ImagePlus className="w-5 h-5 text-baker-pink" />
              </div>
              <h2 className="font-playfair text-2xl font-bold text-baker-dark">
                Reference Photo
              </h2>
            </div>

            <label className="block text-sm font-medium text-baker-dark mb-2">
              Have a design in mind? Attach a reference picture{' '}
              <span className="text-gray-400 font-normal">(optional)</span>
            </label>

            {imagePreview ? (
              // Preview state: thumbnail + filename + remove
              <div className="flex items-center gap-4 border border-gray-200 rounded-2xl p-4">
                <div className="relative w-20 h-20 shrink-0 rounded-xl overflow-hidden bg-baker-cream">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={imagePreview}
                    alt="Reference cake preview"
                    className="w-full h-full object-cover"
                  />
                  {uploading && (
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                      <Loader2 className="w-6 h-6 text-white animate-spin" />
                    </div>
                  )}
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-medium text-baker-dark truncate">{imageName}</p>
                  <p className="text-xs mt-0.5">
                    {uploading ? (
                      <span className="text-gray-500">Uploading…</span>
                    ) : (
                      <span className="text-green-600">Ready to send ✓</span>
                    )}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={handleRemoveImage}
                  className="shrink-0 inline-flex items-center gap-1 text-sm text-gray-500 hover:text-red-500 transition"
                  aria-label="Remove reference photo"
                >
                  <X className="w-4 h-4" />
                  Remove
                </button>
              </div>
            ) : (
              // Empty state: styled dropzone / file picker
              <label
                htmlFor="referenceImage"
                className="flex flex-col items-center justify-center gap-2 border-2 border-dashed border-gray-200 rounded-2xl px-6 py-10 text-center cursor-pointer hover:border-baker-pink hover:bg-baker-soft-pink/30 transition"
              >
                <ImagePlus className="w-8 h-8 text-baker-pink" />
                <span className="text-sm font-medium text-baker-dark">
                  Click to attach an image
                </span>
                <span className="text-xs text-gray-400">
                  JPG, PNG, WEBP or HEIC — up to 5 MB
                </span>
                <input
                  type="file"
                  id="referenceImage"
                  name="referenceImage"
                  accept="image/*"
                  onChange={handleImageSelect}
                  className="hidden"
                />
              </label>
            )}

            {imageError && (
              <p className="text-red-500 text-sm mt-2">{imageError}</p>
            )}
          </div>

          {/* Submit */}
          <div>
            {error && (
              <p className="text-red-500 text-sm text-center bg-red-50 rounded-xl py-3 px-4 mb-4">
                {error}
              </p>
            )}
            <p className="text-gray-500 text-sm text-center mb-4">
              By submitting, you agree to our{' '}
              <Link
                href="/terms"
                target="_blank"
                className="text-baker-pink font-medium hover:underline"
              >
                Terms &amp; Conditions
              </Link>
              .
            </p>
            <button
              type="submit"
              disabled={submitting || uploading}
              className="bg-baker-pink text-white w-full py-4 rounded-full font-semibold text-lg hover:bg-baker-pink-hover transition flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              <ShoppingBag className="w-5 h-5" />
              {uploading ? 'Uploading image…' : submitting ? 'Submitting...' : 'Submit Cake Order'}
            </button>
            <p className="text-gray-500 text-sm text-center mt-4">
              By submitting this form, Baker Babe will review your order and get back to you
              with a quote and confirmation.
            </p>
          </div>
        </form>
      )}
    </motion.div>
  )
}
