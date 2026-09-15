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
          <div className="flex items-center gap-4">
            <Link
              href="/booking"
              onClick={handleSamePageClick('/booking')}
              className="hidden lg:flex items-center gap-2 bg-baker-pink text-white px-6 py-2.5 rounded-full hover:bg-baker-pink-hover transition text-sm font-semibold"
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
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  )
}
