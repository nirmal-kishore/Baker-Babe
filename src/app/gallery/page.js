'use client';

import { useState, Suspense } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { motion, AnimatePresence } from 'motion/react';
import { Camera, ShoppingBag } from 'lucide-react';
import { galleryItems, galleryCategories, cakeImages } from '@/lib/cakeImages';


function GalleryContent() {
  const searchParams = useSearchParams();
  // Initial filter comes from ?category= in the URL (e.g. from the Home "Explore" links).
  const categoryParam = searchParams.get('category');
  const initialFilter = galleryCategories.some((c) => c.key === categoryParam)
    ? categoryParam
    : 'all';
  const [activeFilter, setActiveFilter] = useState(initialFilter);

  // "All Cakes" shows a curated 3 per category; a specific filter shows all of that category.
  let filteredItems;
  if (activeFilter === 'all') {
    const counts = {};
    filteredItems = galleryItems.filter((item) => {
      counts[item.category] = (counts[item.category] || 0) + 1;
      return counts[item.category] <= 3;
    });
  } else {
    filteredItems = galleryItems.filter((item) => item.category === activeFilter);
  }

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
              src={cakeImages.birthday[1]}
              alt="Baker Babe gallery showcase"
              width={1122}
              height={1402}
              className="rounded-2xl aspect-[4/5] object-cover w-full"
              priority
              unoptimized
            />
          </div>
        </div>
      </motion.section>

      {/* ─── Section 2: Interactive Category Filter Bar ─── */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex gap-3 overflow-x-auto scrollbar-none pb-2" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          {galleryCategories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveFilter(cat.key)}
              className={`whitespace-nowrap rounded-full px-6 py-2 text-sm font-medium transition ${
                activeFilter === cat.key
                  ? 'bg-baker-pink text-white'
                  : 'bg-white border border-gray-200 text-baker-dark hover:border-baker-pink hover:text-baker-pink'
              }`}
            >
              {cat.label}
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
              >
                <div className="relative rounded-2xl overflow-hidden">
                  <Image
                    src={item.src}
                    alt={`${item.label} cake by Baker Babe`}
                    width={500}
                    height={650}
                    className="aspect-[3/4] object-cover w-full"
                    unoptimized
                  />
                </div>
                <p className="text-xs uppercase tracking-wider text-gray-500 pt-3">
                  {item.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* ─── Section 5: Instagram Grid ─── */}
      <section className="py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-baker-soft-pink rounded-[2.5rem] px-6 py-12 lg:px-16 lg:py-16 shadow-sm">
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
              {[cakeImages.festive[0], cakeImages.corporate[0], cakeImages['baby-shower'][0]].map((src, i) => (
                <a
                  key={i}
                  href="https://www.instagram.com/baker_babe27/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="View Baker Babe on Instagram"
                  className="block rounded-xl overflow-hidden aspect-square group"
                >
                  <Image
                    src={src}
                    alt={`Instagram post ${i + 1}`}
                    width={200}
                    height={200}
                    className="rounded-xl aspect-square object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                    unoptimized
                  />
                </a>
              ))}
              {[cakeImages.custom[1], cakeImages.corporate[2]].map((src, i) => (
                <a
                  key={`ig-extra-${i}`}
                  href="https://www.instagram.com/baker_babe27/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="View Baker Babe on Instagram"
                  className="block rounded-xl overflow-hidden aspect-square group"
                >
                  <Image
                    src={src}
                    alt={`Instagram post ${i + 4}`}
                    width={200}
                    height={200}
                    className="rounded-xl aspect-square object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                    unoptimized
                  />
                </a>
              ))}
            </div>
          </div>
          </div>
        </div>
      </section>

      {/* ─── Section 6: Custom Cake CTA Banner ─── */}
      <section className="py-12 lg:py-16">
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

export default function GalleryPage() {
  return (
    <Suspense fallback={null}>
      <GalleryContent />
    </Suspense>
  );
}
