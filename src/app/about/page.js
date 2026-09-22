'use client';

import { motion, useInView } from 'motion/react';
import { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Heart, Award, Users, Clock, Star } from 'lucide-react';
import { cakeImages } from '@/lib/cakeImages';

function CountUp({ target, suffix = '', duration = 2000 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    const start = 0;
    const end = target;
    const startTime = performance.now();

    function animate(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(start + (end - start) * eased);

      setCount(current);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    }

    requestAnimationFrame(animate);
  }, [isInView, target, duration]);

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  );
}

const values = [
  {
    icon: Heart,
    title: 'Made with Love',
    description: 'Every creation is infused with passion and care',
  },
  {
    icon: Award,
    title: 'Quality First',
    description: 'Premium ingredients, no shortcuts, no compromises',
  },
  {
    icon: Star,
    title: 'Unique Designs',
    description: 'Each cake is a one-of-a-kind masterpiece',
  },
  {
    icon: Users,
    title: 'Customer Joy',
    description: 'Your happiness is our greatest reward',
  },
];

const stats = [
  { target: 5, suffix: '+', label: 'Years of Baking' },
  { target: 1000, suffix: '+', label: 'Happy Customers' },
  { target: 100, suffix: '%', label: 'Custom Creations' },
  { target: 50, suffix: '+', label: 'Cake Flavours' },
];

export default function AboutPage() {
  return (
    <main>
      {/* Section 1: About Hero */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-baker-pink text-sm tracking-wider uppercase font-semibold">
              OUR STORY
            </p>
            <h1 className="font-playfair text-5xl lg:text-6xl font-bold text-baker-dark mt-4">
              About Baker Babe
            </h1>
            <p className="font-script text-2xl text-baker-pink mt-2">
              Where every cake tells a story
            </p>
            <p className="text-gray-600 mt-6 leading-relaxed max-w-lg">
              Born from a deep love for baking and a passion for creating edible art,
              Baker Babe is Melbourne&apos;s home of handcrafted cakes made with love,
              premium ingredients, and a sprinkle of magic.
            </p>
          </motion.div>

          {/* Right - Image Collage */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="rounded-3xl overflow-hidden shadow-lg">
              <Image
                src={cakeImages.wedding[1]}
                alt="A signature Baker Babe cake"
                width={600}
                height={700}
                className="w-full h-auto object-cover"
                unoptimized
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 2: Founder Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="rounded-3xl overflow-hidden aspect-[3/4]">
              <Image
                src="/bakerbabe.png"
                alt="Shreya, founder of Baker Babe"
                width={500}
                height={667}
                className="w-full h-full object-cover"
                unoptimized
              />
            </div>
          </motion.div>

          {/* Right - Story */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-baker-pink text-sm tracking-wider uppercase font-semibold">
              · MEET SHREYA ·
            </p>
            <h2 className="font-playfair text-3xl font-bold text-baker-dark mt-4">
              The Heart Behind Baker Babe
            </h2>
            <div className="mt-6 space-y-4 text-gray-600 leading-relaxed">
              <p>
                What started as a random cake-making workshop in my early 20s soon
                turned into a beautiful journey of curiosity, creativity, and
                learning. That little workshop sparked my interest to learn more,
                explore new techniques, and turn my ideas into something beautiful
                through cakes.
              </p>
              <p>
                I then pursued a Diploma in Baking &amp; Patisserie in Mumbai and,
                right after completing the course, started putting my skills into
                practice. With every cake I created, I discovered something new — a
                new technique, a new challenge, a new creative idea, and a new skill.
                What began as curiosity slowly became a passion, and every step of
                the journey has taught me so much more.
              </p>
              <p>
                My fascination for baking and learning grew with every new order, and
                my love for feeding people led me to where I am now. Today, Baker Babe
                is based in Melbourne, creating custom bakes for celebrations all
                across the city.
              </p>
              <p>
                And I&apos;m still learning, creating, experimenting, and falling in
                love with the art of cakes every day. Every order is built personally
                for you and crafted with all the love — we feed you exactly what we
                feed our family, so the best quality of ingredients and the most
                amount of love goes into your every single order.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 3: Brand Values */}
      <section className="py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-baker-soft-pink rounded-[2.5rem] px-6 py-12 lg:px-16 lg:py-16 shadow-sm">
          <div className="text-center">
            <p className="text-baker-pink text-sm tracking-wider uppercase font-semibold">
              · WHAT WE BELIEVE ·
            </p>
            <h2 className="font-playfair text-4xl font-bold text-baker-dark mt-4">
              Our Values
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-8 text-center shadow-sm"
                >
                  <div className="w-16 h-16 bg-baker-soft-pink rounded-full flex items-center justify-center mx-auto">
                    <IconComponent className="w-7 h-7 text-baker-pink" />
                  </div>
                  <h3 className="font-playfair font-bold text-lg mt-4 text-baker-dark">
                    {value.title}
                  </h3>
                  <p className="text-sm text-gray-600 mt-2">
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
          </div>
        </div>
      </section>

      {/* Section 4: Stats Counter */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="font-playfair text-5xl font-bold text-baker-pink">
                  <CountUp
                    target={stat.target}
                    suffix={stat.suffix}
                    duration={2000}
                  />
                </div>
                <p className="text-gray-600 text-sm mt-2">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: CTA */}
      <section className="px-4 mb-20">
        <div className="bg-baker-pink py-16 rounded-3xl max-w-7xl mx-auto">
          <div className="text-center text-white px-4">
            <h2 className="font-playfair text-3xl font-bold">
              Ready to Order?
            </h2>
            <p className="mt-4 max-w-md mx-auto opacity-90">
              Let us create something special for your next celebration. From
              birthdays to weddings, we&apos;ve got you covered.
            </p>
            <Link
              href="/booking"
              className="inline-block mt-8 bg-white text-baker-pink px-8 py-3.5 rounded-full font-semibold hover:bg-gray-50 transition-colors"
            >
              Book Your Cake
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
