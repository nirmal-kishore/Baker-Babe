'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'motion/react';
import { Leaf, MessageCircle } from 'lucide-react';

/* ─── Cake Menu — flavour based (from official menu) ─── */
const cakes = [
  {
    name: 'Cold Coffee Cake',
    image: '/menu/cake-coldcoffee.png',
    layers: ['Chocolate coffee soaked sponge', 'Chocolate ganache', 'Coffee icing (buttercream)'],
  },
  {
    name: 'Chocolate Truffle',
    image: '/menu/cake-chocotruffle.png',
    layers: ['Chocolate sponge', 'Chocolate ganache'],
  },
  {
    name: 'Caramel Crunch',
    image: '/menu/cake-caramelcrunch.png',
    layers: ['Chocolate sponge', 'Caramel filling', 'Chocolate ganache icing', 'Topped with chocolate crunch'],
  },
  {
    name: 'Strawberry Vanilla',
    image: '/menu/cake-strawberryvanilla.png',
    layers: ['Vanilla sponge', 'Strawberry compote', 'Vanilla buttercream'],
  },
  {
    name: 'Tiramisu Cake',
    image: '/menu/cake-tiramisu.png',
    layers: ['Soaked coffee sponge', 'Coffee buttercream'],
  },
  {
    name: 'Chocolate Tiramisu',
    image: '/menu/cake-chocotiramisu.png',
    layers: ['Chocolate sponge soaked with coffee syrup', 'Coffee buttercream'],
  },
  {
    name: 'Classic Vanilla Cake',
    image: '/menu/cake-classicvanilla.png',
    layers: ['Classic vanilla sponge', 'Classic vanilla buttercream'],
  },
  {
    name: 'Pistachio Raspberry',
    image: '/menu/cake-pistachioraspberry.png',
    layers: ['Pistachio sponge', 'Raspberry compote', 'Pistachio buttercream'],
  },
  {
    name: 'Cookie and Cream',
    image: '/menu/cake-cookiecream.png',
    layers: ['Chocolate sponge', 'Cookie and cream buttercream'],
  },
  {
    name: 'Blueberry Vanilla',
    image: '/menu/cake-blueberryvanilla.png',
    layers: ['Vanilla sponge', 'Blueberry compote', 'Vanilla buttercream'],
  },
  {
    name: 'Chocolate Raspberry Cake',
    image: '/menu/cake-chocoraspberry.png',
    layers: ['Chocolate sponge', 'Raspberry compote', 'Chocolate buttercream'],
  },
  {
    name: 'Raspberry Vanilla',
    image: '/menu/cake-raspberryvanilla.png',
    layers: ['Vanilla sponge', 'Raspberry compote', 'Vanilla buttercream'],
  },
];

/* ─── Brownie Menu (from official menu) ─── */
const brownies = [
  { name: 'Red Velvet Brownie', image: '/menu/brownie-redvelvet.png', tag: null },
  { name: 'Chocolate Fudge Brownie', image: '/menu/brownie-chocofudge.png', tag: 'Eggless' },
  { name: 'Oreo Cheesecake Brownie', image: '/menu/brownie-oreocheesecake.png', tag: null },
  { name: 'Millionaire Brownie', image: '/menu/brownie-millionaire.png', tag: 'Eggless' },
  { name: 'Classic Chocolate Walnut Brownie', image: '/menu/brownie-walnut.png', tag: 'Egg' },
  { name: 'Bistella Brownie', image: '/menu/brownie-bistella.png', tag: 'Lotus Biscoff · Eggless' },
];

const terms = [
  'All our cakes are freshly baked from scratch, using carefully selected, premium-quality ingredients.',
  'Our fruit-based cake flavours and fillings are made with fresh fruit, never essences, extracts, or oils.',
  'We also offer dietary options, including vegan and gluten-free cakes.',
  'Please mention your dietary requirements when placing your order with us on WhatsApp, so we can guide you with the best options available.',
  'Prices depend on customisation.',
];

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

export default function MenuPage() {
  return (
    <main>
      {/* ─── Hero ─── */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-baker-pink text-sm tracking-wider uppercase font-semibold">
            Our Menu
          </p>
          <h1 className="font-playfair text-5xl lg:text-6xl font-bold text-baker-dark mt-4">
            Delicious Creations
          </h1>
          <p className="font-script text-2xl text-baker-pink mt-2">
            Handcrafted with love, designed to delight
          </p>
          <p className="text-gray-600 mt-4 max-w-xl mx-auto">
            Every cake is baked fresh to order using premium ingredients. Explore our
            signature flavours and freshly baked brownies below.
          </p>
        </div>
      </section>

      {/* ─── Cake Menu ─── */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div {...fadeUp} className="text-center mb-14">
            <p className="text-baker-pink text-sm tracking-wider uppercase font-semibold">
              · Signature Flavours ·
            </p>
            <h2 className="font-playfair text-4xl font-bold text-baker-dark mt-3">
              Cake Menu
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {cakes.map((cake, i) => (
              <motion.div
                key={cake.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
                whileHover={{ scale: 1.03 }}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow"
              >
                <div className="bg-baker-cream flex items-center justify-center p-6">
                  <Image
                    src={cake.image}
                    alt={cake.name}
                    width={300}
                    height={340}
                    className="object-contain h-44 w-auto"
                    unoptimized
                  />
                </div>
                <div className="p-6 border-t border-baker-soft-pink">
                  <h3 className="font-playfair font-bold text-xl text-baker-dark">
                    {cake.name}
                  </h3>
                  <ul className="mt-3 space-y-1.5">
                    {cake.layers.map((layer) => (
                      <li
                        key={layer}
                        className="text-sm text-gray-600 flex items-start gap-2"
                      >
                        <span className="text-baker-pink mt-1.5 w-1.5 h-1.5 rounded-full bg-baker-pink shrink-0" />
                        {layer}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Brownie Menu ─── */}
      <section className="py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4">
        <div className="bg-baker-soft-pink rounded-[2.5rem] px-6 py-12 lg:px-14 lg:py-14 shadow-sm">
          <motion.div {...fadeUp} className="text-center mb-14">
            <p className="text-baker-pink text-sm tracking-wider uppercase font-semibold">
              · Freshly Baked ·
            </p>
            <h2 className="font-playfair text-4xl font-bold text-baker-dark mt-3">
              Brownie Menu
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {brownies.map((brownie, i) => (
              <motion.div
                key={brownie.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
                whileHover={{ scale: 1.03 }}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow text-center"
              >
                <div className="bg-baker-cream flex items-center justify-center p-6">
                  <Image
                    src={brownie.image}
                    alt={brownie.name}
                    width={300}
                    height={300}
                    className="object-contain h-40 w-auto"
                    unoptimized
                  />
                </div>
                <div className="p-6 border-t border-baker-soft-pink">
                  <h3 className="font-playfair font-bold text-lg text-baker-dark">
                    {brownie.name}
                  </h3>
                  {brownie.tag && (
                    <span className="inline-block mt-2 text-xs bg-baker-soft-pink text-baker-pink px-3 py-1 rounded-full font-medium">
                      {brownie.tag}
                    </span>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        </div>
      </section>

      {/* ─── Terms & Conditions ─── */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4">
          <motion.div {...fadeUp} className="text-center mb-12">
            <p className="text-baker-pink text-sm tracking-wider uppercase font-semibold">
              · Good to Know ·
            </p>
            <h2 className="font-playfair text-4xl font-bold text-baker-dark mt-3">
              Terms &amp; Conditions
            </h2>
          </motion.div>

          <div className="space-y-4">
            {terms.map((term, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="bg-white rounded-xl p-5 shadow-sm flex items-start gap-3"
              >
                <span className="w-6 h-6 rounded-full bg-baker-soft-pink text-baker-pink flex items-center justify-center shrink-0 mt-0.5">
                  <Leaf className="w-3.5 h-3.5" />
                </span>
                <p className="text-gray-700 text-sm leading-relaxed">{term}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="py-12 lg:py-16">
        <div className="max-w-4xl mx-auto px-4">
        <div className="bg-baker-soft-pink rounded-[2.5rem] px-6 py-12 text-center shadow-sm">
          <h2 className="font-playfair text-3xl font-bold text-baker-dark">
            Ready to order your favourite?
          </h2>
          <p className="text-gray-600 mt-3 max-w-md mx-auto">
            Tell us your vision and dietary requirements — we&apos;ll craft the perfect
            cake or brownies, made fresh just for you.
          </p>
          <div className="flex flex-wrap gap-4 justify-center mt-8">
            <Link
              href="/booking"
              className="bg-baker-pink text-white px-8 py-3.5 rounded-full font-semibold hover:bg-baker-pink-hover transition-colors inline-flex items-center gap-2"
            >
              Order a Cake →
            </Link>
            <a
              href="https://www.instagram.com/baker_babe27/"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-baker-pink text-baker-pink px-8 py-3.5 rounded-full font-semibold hover:bg-baker-pink hover:text-white transition inline-flex items-center gap-2"
            >
              <MessageCircle className="w-5 h-5" />
              Enquire on Instagram
            </a>
          </div>
        </div>
        </div>
      </section>
    </main>
  );
}
