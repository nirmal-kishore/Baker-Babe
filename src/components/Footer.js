import Link from '@/components/ScrollLink'
import Image from 'next/image'
import { Phone, Mail, MapPin, Heart } from 'lucide-react'

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Menu', href: '/menu' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Workshop', href: '/workshop' },
  { label: 'Contact Us', href: '/contact' },
  { label: 'Order a Cake', href: '/booking' },
]

const cakeLinks = [
  { label: 'Birthday Cakes', href: '/menu' },
  { label: 'Wedding Cakes', href: '/menu' },
  { label: 'Custom Cakes', href: '/menu' },
  { label: 'Party Cakes', href: '/menu' },
  { label: 'Festive Cakes', href: '/menu' },
  { label: 'Corporate Cakes', href: '/menu' },
]

const bottomNavLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Menu', href: '/menu' },
  { label: 'Workshop', href: '/workshop' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Contact Us', href: '/contact' },
]

/* ── Inline brand icons (lucide-react v1.41 doesn't export brand icons) ── */

function InstagramIcon({ size = 18, ...props }) {
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

function FacebookIcon({ size = 18, ...props }) {
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

const socialLinks = [
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/baker_babe27/',
    icon: InstagramIcon,
  },
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/bakerbabe27/',
    icon: FacebookIcon,
  },
]

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* ── 4-column grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1 — Brand */}
          <div>
            <Link href="/" className="flex items-center gap-3 mb-4">
              <Image
                src="/logo.png"
                alt="Baker Babe logo"
                width={50}
                height={50}
                className="rounded-full"
              />
              <div>
                <span className="font-playfair font-bold text-lg leading-tight block">
                  Baker Babe
                </span>
                <span className="text-[9px] tracking-[0.2em] text-baker-pink uppercase block">
                  Custom Treats
                </span>
              </div>
            </Link>
            <p className="text-sm text-gray-600 leading-relaxed mb-5">
              Handcrafted custom cakes made with love in Melbourne. Every cake is
              a unique creation designed to make your celebration truly
              unforgettable.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-full bg-baker-soft-pink text-baker-pink flex items-center justify-center hover:bg-baker-pink hover:text-white transition"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2 — Quick Links */}
          <div>
            <h4 className="font-playfair font-bold text-lg mb-4">
              Quick Links
            </h4>
            <ul className="space-y-1">
              {quickLinks.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-sm text-gray-600 hover:text-baker-pink transition block py-1"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Our Cakes */}
          <div>
            <h4 className="font-playfair font-bold text-lg mb-4">Our Cakes</h4>
            <ul className="space-y-1">
              {cakeLinks.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-sm text-gray-600 hover:text-baker-pink transition block py-1"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 — Contact Info */}
          <div>
            <h4 className="font-playfair font-bold text-lg mb-4">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone
                  size={18}
                  className="text-baker-pink mt-0.5 shrink-0"
                />
                <a
                  href="tel:+61410730227"
                  className="text-sm text-gray-600 hover:text-baker-pink transition"
                >
                  0410 730 227
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={18} className="text-baker-pink mt-0.5 shrink-0" />
                <a
                  href="mailto:bakerbabe@gmail.com"
                  className="text-sm text-gray-600 hover:text-baker-pink transition"
                >
                  bakerbabe@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin
                  size={18}
                  className="text-baker-pink mt-0.5 shrink-0"
                />
                <span className="text-sm text-gray-600">
                  Hopper Crossing, Melbourne
                  <br />
                  Servicing all over Melbourne
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* ── Divider ── */}
        <hr className="border-gray-200 my-8" />

        {/* ── Bottom bar ── */}
        <div className="flex justify-between items-center flex-wrap gap-4">
          <p className="text-xs text-gray-500">
            © 2025 Baker Babe. All rights reserved. · ABN 58 631 282 355
          </p>

          <nav className="flex items-center gap-4">
            {bottomNavLinks.map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                className="text-xs text-gray-500 hover:text-baker-pink transition"
              >
                {label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            {socialLinks.slice(0, 3).map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="text-gray-400 hover:text-baker-pink transition"
              >
                <Icon size={14} />
              </a>
            ))}
          </div>
        </div>

        {/* ── Final tagline ── */}
        <p className="text-sm text-gray-400 text-center mt-4">
          Cakes Made With Love ♡ Especially For You
        </p>
      </div>
    </footer>
  )
}
