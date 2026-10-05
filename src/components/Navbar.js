'use client'

import { useState } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, ShoppingBag } from 'lucide-react'
import { motion, AnimatePresence } from 'motion/react'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Menu', href: '/menu' },
  { label: 'Workshop', href: '/workshop' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Contact Us', href: '/contact' },
]

// Baker Babe business WhatsApp. wa.me requires digits only (country code,
// no "+" or spaces). +61 410 730 227 → 61410730227.
const WHATSAPP_URL =
  'https://wa.me/61410730227?text=' +
  encodeURIComponent("Hi Baker Babe! I'd like to order a cake.")

// Plain chat link (no prefilled message) — used for the social icon clusters.
const WHATSAPP_PLAIN_URL = 'https://wa.me/61410730227'

function WhatsAppIcon({ size = 16, ...props }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      {...props}
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.263.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.885-9.885 9.885M20.52 3.449C18.24 1.245 15.24.044 12.045.044 5.463.044.104 5.403.101 11.986c0 2.096.549 4.14 1.595 5.945L0 24l6.335-1.652a11.96 11.96 0 0 0 5.71 1.447h.006c6.585 0 11.946-5.36 11.949-11.945a11.9 11.9 0 0 0-3.48-8.411" />
    </svg>
  )
}

function InstagramIcon({ size = 16, ...props }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}

function FacebookIcon({ size = 16, ...props }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()

  // If a link points to the page we're already on, scroll to top
  // (Next.js won't re-navigate, so the effect-based scroll won't fire).
  const handleSamePageClick = (href) => (e) => {
    if (pathname === href) {
      e.preventDefault()
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
    }
  }

  return (
    <>
      {/* ── Announcement Bar ── */}
      <div className="bg-baker-topbar text-white py-2">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
          <p className="text-xs sm:text-sm">Made with love in Melbourne, Australia</p>

          <div className="flex items-center gap-3">
            <a
              href="https://www.instagram.com/baker_babe27/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:opacity-80 transition"
            >
              <InstagramIcon size={16} />
            </a>
            <a
              href="https://www.facebook.com/bakerbabe27/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="hover:opacity-80 transition"
            >
              <FacebookIcon size={16} />
            </a>
            <a
              href={WHATSAPP_PLAIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="hover:opacity-80 transition"
            >
              <WhatsAppIcon size={16} />
            </a>
          </div>
        </div>
      </div>

      {/* ── Sticky Navbar ── */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-20">
          {/* Logo + Brand */}
          <Link href="/" onClick={handleSamePageClick('/')} className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="Baker Babe logo"
              width={60}
              height={60}
              className="rounded-full"
              priority
            />
            <div>
              <span className="font-playfair font-bold text-xl leading-tight block">
                Baker Babe
              </span>
              <span className="text-[10px] tracking-[0.2em] text-baker-pink uppercase block">
                Cakes That Speak Love
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <ul className="hidden lg:flex items-center gap-8">
            {navLinks.map(({ label, href }) => {
              const isActive = pathname === href
              return (
                <li key={href}>
                  <Link
                    href={href}
                    onClick={handleSamePageClick(href)}
                    className={`text-sm font-medium transition pb-1 ${
                      isActive
                        ? 'text-baker-pink border-b-2 border-baker-pink'
                        : 'text-baker-dark hover:text-baker-pink'
                    }`}
                  >
                    {label}
                  </Link>
                </li>
              )
            })}
          </ul>

          {/* Desktop CTA + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:flex items-center gap-2 bg-baker-soft-pink text-baker-pink border border-baker-pink px-5 py-2.5 rounded-full hover:bg-baker-pink hover:text-white transition text-sm font-semibold"
            >
              <WhatsAppIcon size={16} />
              Order on WhatsApp
            </a>

            <Link
              href="/booking"
              onClick={handleSamePageClick('/booking')}
              className="hidden lg:flex items-center gap-2 bg-baker-pink text-white px-5 py-2.5 rounded-full hover:bg-baker-pink-hover transition text-sm font-semibold"
            >
              <ShoppingBag size={16} />
              Order a Cake →
            </Link>

            <button
              onClick={() => setMobileOpen((prev) => !prev)}
              className="lg:hidden text-baker-dark"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>

        {/* ── Mobile Menu ── */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: 'easeInOut' }}
              className="lg:hidden overflow-hidden bg-white shadow-lg rounded-b-2xl"
            >
              <div className="p-6 flex flex-col gap-4">
                {navLinks.map(({ label, href }) => {
                  const isActive = pathname === href
                  return (
                    <Link
                      key={href}
                      href={href}
                      onClick={(e) => {
                        setMobileOpen(false)
                        handleSamePageClick(href)(e)
                      }}
                      className={`text-sm font-medium transition ${
                        isActive
                          ? 'text-baker-pink'
                          : 'text-baker-dark hover:text-baker-pink'
                      }`}
                    >
                      {label}
                    </Link>
                  )
                })}

                <Link
                  href="/booking"
                  onClick={(e) => {
                    setMobileOpen(false)
                    handleSamePageClick('/booking')(e)
                  }}
                  className="mt-2 flex items-center justify-center gap-2 bg-baker-pink text-white px-6 py-2.5 rounded-full hover:bg-baker-pink-hover transition text-sm font-semibold"
                >
                  <ShoppingBag size={16} />
                  Order a Cake →
                </Link>

                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-center gap-2 bg-baker-soft-pink text-baker-pink border border-baker-pink px-6 py-2.5 rounded-full hover:bg-baker-pink hover:text-white transition text-sm font-semibold"
                >
                  <WhatsAppIcon size={16} />
                  Order on WhatsApp
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  )
}
