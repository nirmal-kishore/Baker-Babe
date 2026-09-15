'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';
import { Heart, Camera, ShoppingBag, ArrowRight } from 'lucide-react';

const categories = ['All Cakes', 'Birthday', 'Wedding', 'Custom Cakes', 'Party', 'Festive', 'Corporate'];

const galleryItems = [
  { id: 1, title: 'Blush Romance', category: 'Wedding', image: '/cake-wedding.jpg' },
  { id: 2, title: 'Choco Indulgence', category: 'Birthday', image: '/cake-birthday-1.jpg' },
  { id: 3, title: 'Magical Unicorn', category: 'Birthday', image: '/cake-birthday-2.jpg' },
  { id: 4, title: 'Timeless Elegance', category: 'Wedding', image: '/cake-wedding.jpg' },
  { id: 5, title: 'Garden Bloom', category: 'Custom Cakes', image: '/cake-custom-1.jpg' },
  { id: 6, title: 'Cookies & Cream', category: 'Party', image: '/cake-party.jpg' },
  { id: 7, title: 'Golden Chocolate', category: 'Festive', image: '/cake-festive.jpg' },
  { id: 8, title: 'Cherry Bliss', category: 'Birthday', image: '/cake-birthday-1.jpg' },
  { id: 9, title: 'Little Hero', category: 'Birthday', image: '/cake-birthday-2.jpg' },
  { id: 10, title: 'Boho Dream', category: 'Custom Cakes', image: '/cake-custom-2.jpg' },
  { id: 11, title: 'Christmas Joy', category: 'Festive', image: '/cake-festive.jpg' },
  { id: 12, title: 'Corporate Delight', category: 'Corporate', image: '/cake-corporate.jpg' },
];

const signatureSpecials = [
  {
    title: 'Rosy Elegance',
    subtitle: 'A timeless favourite for every celebration.',
  },
  {
    title: 'Chocolate Royale',
    subtitle: 'Rich. Decadent. Unforgettable.',
  },
  {
    title: 'Berry Beautiful',
    subtitle: 'A fresh take on classic indulgence.',
  },
];

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState('All Cakes');
  const [favorites, setFavorites] = useState(new Set());

  const filteredItems =
    activeFilter === 'All Cakes'
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeFilter);

  const toggleFavorite = (id) => {
    setFavorites((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  return (
    <main>
      {/* ─── Section 1: Gallery Hero Header ─── */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7 }}
        className="bg-baker-soft-pink rounded-3xl p-8 lg:p-16 mx-4 lg:mx-auto max-w-7xl mt-8"
      >
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div>
            <span className="text-baker-pink text-sm font-semibold tracking-wider uppercase">
              OUR CREATIONS
            </span>
            <h1 className="font-playfair text-5xl lg:text-7xl font-bold text-baker-dark mt-3">
              Gallery
            </h1>
            <p className="font-playfair text-xl italic text-baker-dark/80 mt-4">
              A celebration of creativity, love and all things cake.
            </p>
            <div className="w-16 h-1 bg-baker-pink rounded-full my-4" />
            <p className="text-gray-600 text-sm leading-relaxed">
              From intimate moments to grand celebrations, explore our handcrafted
              creations that bring people&apos;s sweetest dreams to life.
            </p>
          </div>

          {/* Right */}
          <div className="relative">
            <Image
              src="/hero-cake.jpg"
              alt="Baker Babe gallery showcase"
              width={1254}
              height={1254}
              className="rounded-2xl aspect-square object-contain w-full"
              priority
              unoptimized
            />
            <span className="absolute top-6 right-6 font-script text-2xl text-baker-pink rotate-[-8deg]">
              More Than Just Cakes ♡
            </span>
            <span className="absolute bottom-4 right-4 text-[10px] tracking-wider uppercase bg-white/80 backdrop-blur px-3 py-2 rounded-lg">
              SWEET PEOPLE BRIGHTER DAYS
            </span>
          </div>
        </div>
      </motion.section>

      {/* ─── Section 2: Interactive Category Filter Bar ─── */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex gap-3 overflow-x-auto scrollbar-none pb-2" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`whitespace-nowrap rounded-full px-6 py-2 text-sm font-medium transition ${
                activeFilter === cat
                  ? 'bg-baker-pink text-white'
                  : 'bg-white border border-gray-200 text-baker-dark hover:border-baker-pink hover:text-baker-pink'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* ─── Section 3: 12-Card Gallery Grid ─── */}
      <div className="max-w-7xl mx-auto px-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                whileHover={{ scale: 1.03, boxShadow: '0 10px 40px rgba(0,0,0,0.1)' }}
                transition={{ duration: 0.3 }}
                className="cursor-pointer"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  width={500}
                  height={650}
                  className="rounded-2xl aspect-[3/4] object-cover w-full"
                  unoptimized
                />
                <div className="flex justify-between items-start pt-3">
                  <div>
                    <p className="font-semibold text-sm">{item.title}</p>
                    <p className="text-xs uppercase tracking-wider text-gray-500">
                      {item.category}
                    </p>
                  </div>
                  <button
                    onClick={() => toggleFavorite(item.id)}
                    className="mt-0.5 transition"
                    aria-label={`Toggle favourite for ${item.title}`}
                  >
                    <Heart
                      size={18}
                      className={
                        favorites.has(item.id)
                          ? 'fill-baker-pink text-baker-pink'
                          : 'text-gray-300 hover:text-baker-pink'
                      }
                    />
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* ─── Section 4: Signature Specials ─── */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7 }}
        className="max-w-7xl mx-auto px-4 py-20"
      >
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <span className="text-baker-pink text-sm font-semibold tracking-wider uppercase">
              · FEATURED CREATIONS ·
            </span>
            <h2 className="font-playfair text-4xl lg:text-5xl font-bold italic mt-3">
              Signature Specials
            </h2>
            <p className="text-gray-600 mt-4 leading-relaxed">
              A closer look at some of our most-loved creations, crafted with extra
              care and a touch of magic.
            </p>
            <Link
              href="/menu"
              className="bg-baker-pink text-white px-8 py-3 rounded-full hover:bg-baker-pink-hover inline-flex items-center gap-2 font-semibold text-sm mt-4 transition"
            >
              View Full Menu <ArrowRight size={16} />
            </Link>
          </div>

          {/* Right */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {signatureSpecials.map((item) => (
              <div key={item.title}>
                <Image
                  src="/cake-placeholder.jpg"
                  alt={item.title}
                  width={300}
                  height={400}
                  className="rounded-2xl aspect-[3/4] object-cover w-full"
                />
                <h3 className="font-playfair font-bold text-lg mt-3">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-500">{item.subtitle}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* ─── Section 5: Instagram Grid ─── */}
      <section className="bg-baker-soft-pink py-20 mt-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-[1fr_2fr] gap-12 items-center">
            {/* Left */}
            <div>
              <span className="text-baker-pink text-sm tracking-wider uppercase">
                · FOLLOW OUR JOURNEY ·
              </span>
              <h2 className="font-playfair text-4xl font-bold mt-3">
                On Instagram
              </h2>
              <p className="text-gray-600 mt-4 leading-relaxed">
                Behind the scenes, new creations, happy customers and a whole lot
                of cake love.
              </p>
              <a
                href="https://www.instagram.com/baker_babe27/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-baker-pink text-white px-6 py-2.5 rounded-full inline-flex items-center gap-2 text-sm mt-6 hover:bg-baker-pink-hover transition"
              >
                <Camera size={16} />
                Follow Us →
              </a>
            </div>

            {/* Right */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
              {[1, 2, 3].map((i) => (
                <Image
                  key={i}
                  src="/cake-placeholder.jpg"
                  alt={`Instagram post ${i}`}
                  width={200}
                  height={200}
                  className="rounded-xl aspect-square object-cover w-full"
                  unoptimized
                />
              ))}
              <div className="bg-baker-pink/10 rounded-xl aspect-square flex items-center justify-center p-4">
                <p className="font-script text-lg lg:text-xl text-baker-pink text-center">
                  Happiness Looks Good On You ♡
                </p>
              </div>
              <div className="bg-gradient-to-br from-baker-pink to-baker-pink-hover rounded-xl aspect-square flex items-center justify-center p-4">
                <p className="font-script text-xl lg:text-2xl text-white text-center">
                  Good Cakes = Happier People ♡
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Section 6: Custom Cake CTA Banner ─── */}
      <section className="bg-baker-soft-pink py-16 mt-0">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-gradient-to-r from-baker-pink/5 to-baker-soft-pink rounded-3xl p-8 lg:p-12 flex flex-col lg:flex-row justify-between items-center gap-8">
            {/* Left */}
            <div>
              <span className="text-baker-pink text-sm tracking-wider uppercase font-semibold">
                LET&apos;S CREATE SOMETHING SWEET
              </span>
              <h2 className="font-playfair text-3xl lg:text-4xl font-bold mt-2">
                Order Your Custom Cake
              </h2>
              <p className="text-gray-600 mt-3 leading-relaxed">
                Tell us your vision, and we&apos;ll bring it to life — beautifully,
                deliciously, and uniquely yours.
              </p>
            </div>

            {/* Right */}
            <Link
              href="/booking"
              className="bg-baker-pink text-white px-8 py-3.5 rounded-full hover:bg-baker-pink-hover inline-flex items-center gap-2 font-semibold shadow-lg transition shrink-0"
            >
              <ShoppingBag size={18} />
              Order a Cake →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
