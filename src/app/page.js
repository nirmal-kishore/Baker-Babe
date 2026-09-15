'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';
import { Star, ChevronDown, Camera, Heart, ArrowRight } from 'lucide-react';
import { FloatingBlobs, FloatingHearts, WaveDivider } from '@/components/Decorations';

/* ───────────────────────── Data ───────────────────────── */

const categories = [
  {
    title: 'Birthday Cakes',
    image: '/cake-birthday-1.jpg',
    description: 'Make their special day unforgettable with a custom birthday cake designed just for them.',
  },
  {
    title: 'Wedding Cakes',
    image: '/cake-wedding.jpg',
    description: 'Elegant, show-stopping wedding cakes crafted to match your dream celebration.',
  },
  {
    title: 'Custom Cakes',
    image: '/cake-custom-1.jpg',
    description: 'Bring any idea to life — from themed designs to sculpted masterpieces.',
  },
  {
    title: 'Party Cakes',
    image: '/cake-party.jpg',
    description: 'Fun and vibrant cakes perfect for baby showers, engagements, and every party in between.',
  },
  {
    title: 'Festive Cakes',
    image: '/cake-festive.jpg',
    description: 'Celebrate the season with festive cakes for Christmas, Diwali, Easter, and more.',
  },
  {
    title: 'Corporate Cakes',
    image: '/cake-corporate.jpg',
    description: 'Professional cakes for brand launches, milestones, and corporate events.',
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
    answer: 'We recommend ordering at least 2 weeks in advance for custom cakes. For wedding cakes, 4-6 weeks notice is ideal.',
  },
  {
    question: 'Can I customise my cake design?',
    answer: 'Absolutely! Every cake we make is custom. Share your vision, reference images, and we will bring it to life.',
  },
  {
    question: 'Do you offer dietary-friendly options?',
    answer: 'Yes! We offer gluten-free and vegan options for most of our cake styles. Let us know your requirements.',
  },
  {
    question: 'Do you deliver or is it pickup only?',
    answer: 'We offer both pickup and delivery within Melbourne metropolitan area. Delivery fees apply based on location.',
  },
  {
    question: 'How should I store my cake?',
    answer: 'Keep refrigerated until 1-2 hours before serving. Fondant cakes should be kept in a cool room, away from direct sunlight.',
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
        className="relative overflow-hidden py-20 pb-32"
      >
        {/* Landscape background image */}
        <Image
          src="/hero-cake-bg.jpg"
          alt=""
          fill
          priority
          unoptimized
          aria-hidden="true"
          className="object-cover object-center -z-10"
        />
        {/* Soft overlay so content stays readable */}
        <div
          className="absolute inset-0 -z-10 bg-gradient-to-b from-baker-cream/70 via-baker-soft-pink/60 to-baker-cream/75"
          aria-hidden="true"
        />
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center relative z-10">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <span className="text-baker-pink text-sm tracking-wider uppercase font-semibold">
              HANDCRAFTED WITH LOVE
            </span>
            <h1 className="font-playfair text-5xl lg:text-6xl font-bold leading-tight mt-4">
              For Life&apos;s
              <br />
              <span className="font-script text-baker-pink">Sweetest</span> Moments
            </h1>
            <p className="text-gray-600 mt-6 text-lg leading-relaxed max-w-lg">
              Melbourne&apos;s favourite custom cake studio. We create beautiful,
              handcrafted cakes that taste as incredible as they look — made with
              love for every occasion.
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <Link
                href="/booking"
                className="bg-baker-pink text-white px-8 py-3.5 rounded-full hover:bg-baker-pink-hover font-semibold transition"
              >
                ORDER NOW →
              </Link>
              <Link
                href="/gallery"
                className="border-2 border-baker-pink text-baker-pink px-8 py-3.5 rounded-full hover:bg-baker-pink hover:text-white transition font-semibold"
              >
                View Gallery →
              </Link>
            </div>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            viewport={{ once: true }}
            className="relative"
          >
            <Image
              src="/hero-cake.jpg"
              alt="Beautiful custom cake by Baker Babe"
              width={1254}
              height={1254}
              className="rounded-3xl shadow-2xl aspect-square object-contain w-full"
              priority
              unoptimized
            />
          </motion.div>
        </div>
        <WaveDivider color="#FFF9F6" />
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
                    href="/menu"
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
        className="bg-baker-soft-pink py-20"
      >
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — Image */}
          <div className="relative">
            <Image
              src="/cake-placeholder.jpg"
              alt="Shreya — Founder of Baker Babe"
              width={600}
              height={600}
              className="rounded-3xl aspect-square object-cover w-full"
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
              I founded Baker Babe in 2019 with a simple belief — every celebration
              deserves a cake made with heart. What started as baking for friends
              and family quickly grew into Melbourne&apos;s beloved custom cake studio.
            </p>
            <p className="text-gray-600 mt-4 leading-relaxed">
              Every cake I create is a labour of love. I pour my passion for design,
              flavour, and creativity into each order — making sure your special
              moments are as sweet as they should be.
            </p>
            <Link
              href="/about"
              className="text-baker-pink font-semibold inline-flex items-center gap-2 mt-6 hover:underline"
            >
              Read Our Story →
              <ArrowRight className="size-4" />
            </Link>
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
              src="/cake-placeholder.jpg"
              alt="Cake decorating workshop"
              width={600}
              height={338}
              className="rounded-2xl aspect-video object-cover w-full"
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
      <section className="bg-baker-soft-pink py-20">
        <div className="max-w-3xl mx-auto px-4">
          <p className="text-baker-pink text-sm tracking-wider uppercase text-center font-semibold">
            · GOT QUESTIONS? ·
          </p>
          <h2 className="font-playfair text-4xl font-bold text-center mt-3">
            Frequently Asked Questions
          </h2>

          <div className="mt-12">
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
            <div className="relative group overflow-hidden rounded-2xl aspect-square">
              <Image
                src="/cake-placeholder.jpg"
                alt="Instagram post"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-baker-pink/0 group-hover:bg-baker-pink/30 transition-colors duration-300 flex items-center justify-center">
                <Heart className="size-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>

            {/* Image 2 */}
            <div className="relative group overflow-hidden rounded-2xl aspect-square">
              <Image
                src="/hero-cake.jpg"
                alt="Instagram post"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-baker-pink/0 group-hover:bg-baker-pink/30 transition-colors duration-300 flex items-center justify-center">
                <Heart className="size-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>

            {/* Quote Card */}
            <div className="bg-white rounded-2xl aspect-square flex flex-col items-center justify-center p-6 text-center">
              <p className="font-script text-baker-pink text-2xl">Baked with</p>
              <p className="font-playfair font-bold text-3xl mt-1">Love</p>
              <Heart className="size-6 text-baker-pink fill-baker-pink mt-3" />
            </div>

            {/* Image 3 */}
            <div className="relative group overflow-hidden rounded-2xl aspect-square">
              <Image
                src="/cake-placeholder.jpg"
                alt="Instagram post"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-baker-pink/0 group-hover:bg-baker-pink/30 transition-colors duration-300 flex items-center justify-center">
                <Heart className="size-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>

            {/* Pink Gradient Card */}
            <div className="bg-gradient-to-br from-baker-pink to-baker-pink-hover rounded-2xl aspect-square flex flex-col items-center justify-center p-6 text-center text-white">
              <Camera className="size-8 mb-3" />
              <p className="font-playfair font-bold text-lg">@bakerbabe</p>
              <p className="text-sm opacity-90 mt-1">Follow for more</p>
            </div>
          </div>
        </div>
      </motion.section>
    </>
  );
}
