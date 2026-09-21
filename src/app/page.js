'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';
import { Star, ChevronDown, Camera, Heart, ArrowRight } from 'lucide-react';
import { FloatingBlobs, FloatingHearts, WaveDivider } from '@/components/Decorations';
import { cakeImages } from '@/lib/cakeImages';

/* ───────────────────────── Data ───────────────────────── */

const categories = [
  {
    title: 'Birthday',
    key: 'birthday',
    image: cakeImages.birthday[2],
    description: 'Custom birthday cakes designed to make their special day unforgettable.',
  },
  {
    title: 'Custom & Themed',
    key: 'custom',
    image: cakeImages.custom[1],
    description: 'Bring any idea to life — from themed designs to sculpted masterpieces.',
  },
  {
    title: 'Wedding & Engagement',
    key: 'wedding',
    image: cakeImages.wedding[0],
    description: 'Elegant, show-stopping cakes crafted to match your dream celebration.',
  },
  {
    title: 'Baby Shower',
    key: 'baby-shower',
    image: cakeImages['baby-shower'][0],
    description: 'Sweet, adorable cakes to welcome the newest little arrival.',
  },
  {
    title: 'Corporate',
    key: 'corporate',
    image: cakeImages.corporate[0],
    description: 'Professional cakes and treats for launches, milestones, and events.',
  },
  {
    title: 'Festive & Seasonal',
    key: 'festive',
    image: cakeImages.festive[0],
    description: 'Celebrate every season and festival with limited-time festive bakes.',
  },
  {
    title: 'Desserts',
    key: 'desserts',
    image: cakeImages.desserts[0],
    description: 'A sweet selection of handcrafted desserts to round off any celebration.',
  },
];

const steps = [
  {
    title: 'Browse & Explore',
    description: 'Check out our menu and gallery for cake inspiration and ideas.',
  },
  {
    title: 'Submit Your Order',
    description: 'Fill out our cake order form with your requirements and preferences.',
  },
  {
    title: 'We Review & Confirm',
    description: 'Baker Babe reviews your order and confirms details and pricing.',
  },
  {
    title: 'Order Confirmed!',
    description: 'Your custom cake is confirmed directly with Baker Babe. Simple!',
  },
];

const testimonials = [
  {
    quote: 'The cake was absolutely stunning and tasted even better! Shreya truly outdid herself.',
    name: 'Sarah M.',
    occasion: 'Birthday Celebration',
  },
  {
    quote: 'Our wedding cake was a masterpiece. Every guest was amazed by both the design and flavour.',
    name: 'Priya & Raj',
    occasion: 'Wedding',
  },
  {
    quote: 'Best cakes in Melbourne! The attention to detail and the love that goes into each creation is incredible.',
    name: 'Emma L.',
    occasion: 'Custom Order',
  },
];

const faqs = [
  {
    question: 'How far in advance should I order?',
    answer: 'We recommend placing your order at least a day in advance. For larger or more detailed custom cakes, a little more notice is always appreciated — reach out and we will do our best to accommodate you.',
  },
  {
    question: 'Can I customise my cake design?',
    answer: 'Absolutely! Every cake we make is custom. Share your vision, theme, and reference photos, and we will bring it to life — every order is built personally for you.',
  },
  {
    question: 'Do you offer dietary-friendly options?',
    answer: 'Yes! We offer gluten-free, vegan, and other dietary bakes. Just let us know your requirements when you enquire and we will guide you with the best options.',
  },
  {
    question: 'Do you deliver or is it pickup only?',
    answer: 'We offer both pickup and delivery, servicing all over Melbourne. For delivery, we just need your delivery address to arrange it.',
  },
  {
    question: 'Is there a minimum order?',
    answer: 'No — there is no minimum order. Whether it is a single treat or a large celebration cake, we are happy to bake for you.',
  },
  {
    question: 'How should I store my cake?',
    answer: 'Keep your cake refrigerated until 1-2 hours before serving. Fondant cakes are best kept in a cool room, away from direct sunlight.',
  },
];

/* ───────────────────────── Component ───────────────────────── */

export default function Home() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <>
      {/* ─── Section 1: Hero ─── */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative overflow-hidden bg-[#FFF9F6] lg:min-h-[760px] lg:flex lg:items-center"
      >
        {/* Desktop-only full-bleed banner background (overlay layout) */}
        <Image
          src="/hero-cake-bg2.jpg"
          alt=""
          fill
          sizes="100vw"
          priority
          unoptimized
          aria-hidden="true"
          className="hidden lg:block absolute inset-0 w-full h-full object-cover object-center z-0"
        />
        {/* Desktop-only soft left gradient for text legibility */}
        <div
          className="hidden lg:block absolute inset-y-0 left-0 w-2/3 bg-gradient-to-r from-[#FFF9F6]/70 via-[#FFF9F6]/30 to-transparent pointer-events-none z-0"
          aria-hidden="true"
        />

        {/* Text content — overlaid on desktop, stacked on mobile */}
        <div className="max-w-7xl mx-auto px-4 relative z-10 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="max-w-xl pt-16 pb-8 text-center lg:text-left lg:py-28 mx-auto lg:mx-0"
          >
            <span className="inline-block bg-white/80 backdrop-blur-sm text-baker-pink text-sm tracking-wider uppercase font-semibold px-4 py-1.5 rounded-full shadow-sm">
              HANDCRAFTED WITH LOVE
            </span>
            <h1
              className="font-playfair text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mt-4"
              style={{ textShadow: '0 1px 12px rgba(255,249,246,0.8)' }}
            >
              For Life&apos;s
              <br />
              <span className="font-script text-baker-pink">Sweetest</span> Moments
            </h1>
            <p
              className="text-baker-dark/90 mt-6 text-lg leading-relaxed max-w-lg font-medium mx-auto lg:mx-0"
              style={{ textShadow: '0 1px 8px rgba(255,249,246,0.9)' }}
            >
              Melbourne&apos;s favourite custom cake studio. We create beautiful,
              handcrafted cakes that taste as incredible as they look — made with
              love for every occasion.
            </p>
            <div className="flex flex-wrap gap-4 mt-8 justify-center lg:justify-start">
              <Link
                href="/booking"
                className="bg-baker-pink text-white px-8 py-3.5 rounded-full hover:bg-baker-pink-hover font-semibold transition"
              >
                ORDER NOW →
              </Link>
              <Link
                href="/gallery"
                className="border-2 border-baker-pink text-baker-pink px-8 py-3.5 rounded-full hover:bg-baker-pink hover:text-white transition font-semibold bg-white/60 backdrop-blur-sm"
              >
                View Gallery →
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Mobile-only decorated image below the text (no overlap) */}
        <div className="lg:hidden relative w-full px-4 pb-8 pt-2">
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.92 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="relative mx-auto max-w-md"
          >
            {/* Soft frame behind the image (contained, does not tint the page) */}
            <div className="absolute -inset-2 rounded-[2rem] bg-gradient-to-br from-baker-pink/15 to-baker-soft-pink rotate-2" aria-hidden="true" />

            <div className="relative rounded-[1.75rem] overflow-hidden shadow-xl ring-4 ring-white">
              {/* Continuous ultra-slow Ken Burns drift */}
              <motion.div
                initial={{ scale: 1.12 }}
                whileInView={{ scale: 1.06 }}
                viewport={{ once: true }}
                transition={{ duration: 1.6, ease: 'easeOut' }}
              >
                <motion.div
                  animate={{ scale: [1.06, 1.14, 1.06], x: [0, -8, 0], y: [0, -6, 0] }}
                  transition={{ duration: 24, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <Image
                    src="/hero-cake-bg-mobile.jpg"
                    alt="Beautiful custom cake by Baker Babe"
                    width={1371}
                    height={1148}
                    priority
                    unoptimized
                    className="w-full h-auto object-cover"
                  />
                </motion.div>
              </motion.div>

              {/* subtle bottom gradient for depth */}
              <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/10 to-transparent" aria-hidden="true" />
            </div>
          </motion.div>
        </div>

        <WaveDivider color="#FFF9F6" className="hidden lg:block" />
      </motion.section>

      {/* ─── Section 2: Featured Menu Categories ─── */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="relative overflow-hidden py-20"
      >
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <p className="text-baker-pink text-sm tracking-wider uppercase text-center font-semibold">
            · OUR SPECIALITIES ·
          </p>
          <h2 className="font-playfair text-4xl font-bold text-center mt-3">
            What We Bake
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {categories.map((cat) => (
              <motion.div
                key={cat.title}
                whileHover={{ scale: 1.03 }}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow"
              >
                <Image
                  src={cat.image}
                  alt={cat.title}
                  width={600}
                  height={450}
                  className="aspect-[4/3] object-cover w-full"
                  unoptimized
                />
                <div className="p-6">
                  <h3 className="font-playfair font-bold text-xl">{cat.title}</h3>
                  <p className="text-sm text-gray-600 mt-2">{cat.description}</p>
                  <Link
                    href={`/gallery?category=${cat.key}`}
                    className="text-baker-pink text-sm font-semibold mt-4 inline-block hover:underline"
                  >
                    Explore →
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* ─── Section 3: Founder Intro ─── */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="py-12 lg:py-16"
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-baker-soft-pink rounded-[2.5rem] px-6 py-12 lg:px-16 lg:py-16 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center shadow-sm">
          {/* Left — Image */}
          <div className="relative">
            <Image
              src={cakeImages.custom[3]}
              alt="A signature Baker Babe creation"
              width={600}
              height={600}
              className="rounded-3xl aspect-square object-cover w-full"
              unoptimized
            />
            <span className="bg-baker-pink text-white rounded-full px-4 py-2 absolute top-4 left-4 text-sm font-semibold">
              Est. 2019
            </span>
          </div>

          {/* Right — Text */}
          <div>
            <p className="text-baker-pink text-sm tracking-wider uppercase font-semibold">
              · MEET THE BAKER ·
            </p>
            <h2 className="font-playfair text-4xl font-bold mt-3">
              Hi, I&apos;m Shreya!
            </h2>
            <p className="text-gray-600 mt-6 leading-relaxed">
              What started as a random cake-making workshop in my early 20s soon
              turned into a beautiful journey of curiosity, creativity, and learning.
              After pursuing a Diploma in Baking &amp; Patisserie, I turned that
              passion into Baker Babe.
            </p>
            <p className="text-gray-600 mt-4 leading-relaxed">
              Every order is built personally for you and crafted with all the love —
              we feed you exactly what we feed our family, so the best quality of
              ingredients and the most amount of love goes into your every single
              order.
            </p>
            <Link
              href="/about"
              className="text-baker-pink font-semibold inline-flex items-center gap-2 mt-6 hover:underline"
            >
              Read Our Story
              <ArrowRight className="size-4" />
            </Link>
          </div>
          </div>
        </div>
      </motion.section>

      {/* ─── Section 4: How to Order ─── */}
      <section className="relative overflow-hidden py-20">
        <FloatingHearts />
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <p className="text-baker-pink text-sm tracking-wider uppercase text-center font-semibold">
            · HOW IT WORKS ·
          </p>
          <h2 className="font-playfair text-4xl font-bold text-center mt-3">
            Order Your Dream Cake
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 text-center shadow-sm"
              >
                <div className="bg-baker-pink text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto font-bold text-lg">
                  {i + 1}
                </div>
                <h3 className="font-playfair font-bold text-lg mt-4">
                  {step.title}
                </h3>
                <p className="text-sm text-gray-600 mt-2">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Section 5: Workshop Teaser ─── */}
      <section className="max-w-7xl mx-auto my-12 px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-baker-pink to-baker-pink-hover py-16 rounded-3xl"
        >
          <div className="grid lg:grid-cols-2 items-center gap-8 px-8 lg:px-16">
            {/* Left — Text */}
            <div className="text-white">
              <p className="text-sm tracking-wider uppercase font-semibold opacity-90">
                · LEARN WITH US ·
              </p>
              <h2 className="font-playfair text-3xl font-bold mt-3">
                Cake Decorating Workshops
              </h2>
              <p className="mt-4 leading-relaxed opacity-90">
                Join our hands-on cake decorating classes and learn the art of
                creating beautiful cakes. Perfect for beginners and enthusiasts
                alike — discover techniques, have fun, and take home your creation!
              </p>
              <Link
                href="/workshop"
                className="bg-white text-baker-pink px-8 py-3 rounded-full font-semibold hover:bg-baker-cream transition inline-block mt-6"
              >
                Explore Workshops →
              </Link>
            </div>

            {/* Right — Image */}
            <Image
              src={cakeImages.workshop[0]}
              alt="Cake decorating workshop"
              width={600}
              height={338}
              className="rounded-2xl aspect-video object-cover w-full"
              unoptimized
            />
          </div>
        </motion.div>
      </section>

      {/* ─── Section 6: Testimonials ─── */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="relative overflow-hidden py-20"
      >
        <FloatingBlobs />
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <p className="text-baker-pink text-sm tracking-wider uppercase text-center font-semibold">
            · WHAT PEOPLE SAY ·
          </p>
          <h2 className="font-playfair text-4xl font-bold text-center mt-3">
            Sweet Words From Our Customers
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="bg-white rounded-2xl p-8 shadow-sm"
              >
                {/* Stars */}
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="fill-yellow-400 text-yellow-400 size-4"
                    />
                  ))}
                </div>
                <p className="text-gray-600 text-sm italic mt-4">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <p className="font-semibold mt-4">{t.name}</p>
                <p className="text-xs text-gray-400">{t.occasion}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* ─── Section 7: FAQ Accordion ─── */}
      <section className="py-12 lg:py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-baker-soft-pink rounded-[2.5rem] px-6 py-12 lg:px-14 lg:py-14 shadow-sm">
          <p className="text-baker-pink text-sm tracking-wider uppercase text-center font-semibold">
            · GOT QUESTIONS? ·
          </p>
          <h2 className="font-playfair text-4xl font-bold text-center mt-3">
            Frequently Asked Questions
          </h2>

          <div className="mt-10 max-w-3xl mx-auto">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white rounded-xl mb-3">
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex justify-between items-center p-5 text-left cursor-pointer"
                  aria-expanded={openIndex === i}
                >
                  <span className="font-semibold text-sm">{faq.question}</span>
                  <motion.span
                    animate={{ rotate: openIndex === i ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="size-5 text-gray-500 shrink-0" />
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {openIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <p className="p-5 pt-0 text-sm text-gray-600">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
          </div>
        </div>
      </section>

      {/* ─── Section 8: Instagram Grid ─── */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="py-20"
      >
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-baker-pink text-sm tracking-wider uppercase text-center font-semibold">
            · FOLLOW OUR JOURNEY ·
          </p>
          <h2 className="font-playfair text-4xl font-bold text-center mt-3">
            On Instagram
          </h2>
          <p className="text-gray-600 text-center mt-4 max-w-lg mx-auto">
            Follow us on Instagram for daily cake inspiration, behind-the-scenes
            moments, and the latest creations from our studio.
          </p>
          <div className="text-center mt-6">
            <a
              href="https://www.instagram.com/baker_babe27/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-baker-pink text-white px-8 py-3 rounded-full font-semibold hover:bg-baker-pink-hover transition inline-flex items-center gap-2"
            >
              <Camera className="size-5" />
              Follow Us
            </a>
          </div>

          {/* Instagram-style 5-card grid */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-12">
            {/* Image 1 */}
            <a
              href="https://www.instagram.com/baker_babe27/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View Baker Babe on Instagram"
              className="relative group overflow-hidden rounded-2xl aspect-square block"
            >
              <Image
                src={cakeImages.birthday[4]}
                alt="Instagram post"
                fill
                sizes="(max-width: 768px) 50vw, 20vw"
                unoptimized
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-baker-pink/0 group-hover:bg-baker-pink/30 transition-colors duration-300 flex items-center justify-center">
                <Camera className="size-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </a>

            {/* Image 2 */}
            <a
              href="https://www.instagram.com/baker_babe27/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View Baker Babe on Instagram"
              className="relative group overflow-hidden rounded-2xl aspect-square block"
            >
              <Image
                src={cakeImages.birthday[5]}
                alt="Instagram post"
                fill
                sizes="(max-width: 768px) 50vw, 20vw"
                unoptimized
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-baker-pink/0 group-hover:bg-baker-pink/30 transition-colors duration-300 flex items-center justify-center">
                <Camera className="size-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </a>

            {/* Quote Card */}
            <div className="bg-white rounded-2xl aspect-square flex flex-col items-center justify-center p-6 text-center">
              <p className="font-script text-baker-pink text-2xl">Baked with</p>
              <p className="font-playfair font-bold text-3xl mt-1">Love</p>
              <Heart className="size-6 text-baker-pink fill-baker-pink mt-3" />
            </div>

            {/* Image 3 */}
            <a
              href="https://www.instagram.com/baker_babe27/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View Baker Babe on Instagram"
              className="relative group overflow-hidden rounded-2xl aspect-square block"
            >
              <Image
                src={cakeImages.custom[4]}
                alt="Instagram post"
                fill
                sizes="(max-width: 768px) 50vw, 20vw"
                unoptimized
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-baker-pink/0 group-hover:bg-baker-pink/30 transition-colors duration-300 flex items-center justify-center">
                <Camera className="size-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </a>

            {/* Pink Gradient Card */}
            <a
              href="https://www.instagram.com/baker_babe27/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-br from-baker-pink to-baker-pink-hover rounded-2xl aspect-square flex flex-col items-center justify-center p-6 text-center text-white hover:opacity-90 transition-opacity"
            >
              <Camera className="size-8 mb-3" />
              <p className="font-playfair font-bold text-lg">@baker_babe27</p>
              <p className="text-sm opacity-90 mt-1">Follow for more</p>
            </a>
          </div>
        </div>
      </motion.section>
    </>
  );
}
