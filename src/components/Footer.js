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
  { label: 'Event Cakes', href: '/menu' },
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

function WhatsAppIcon({ size = 18, ...props }) {
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
  {
    label: 'WhatsApp',
    href: 'https://wa.me/61410730227',
    icon: WhatsAppIcon,
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
                <a href="tel:+61410730227" aria-label="Call us" className="mt-0.5 shrink-0 hover:opacity-70 transition">
                  <Phone size={18} className="text-baker-pink" />
                </a>
                <a
                  href="tel:+61410730227"
                  className="text-sm text-gray-600 hover:text-baker-pink transition"
                >
                  0410 730 227
                </a>
              </li>
              <li className="flex items-start gap-3">
                <a href="mailto:bakerbabe@gmail.com" aria-label="Email us" className="mt-0.5 shrink-0 hover:opacity-70 transition">
                  <Mail size={18} className="text-baker-pink" />
                </a>
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
