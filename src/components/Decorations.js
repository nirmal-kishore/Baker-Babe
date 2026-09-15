'use client'

import { motion } from 'motion/react'

/**
 * Decorative, on-brand background elements for Baker Babe.
 * All elements are absolutely positioned and pointer-events-none so they
 * never interfere with content. Drop inside a `relative overflow-hidden` parent.
 */

// Soft blurred gradient blobs that gently drift
export function FloatingBlobs() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none" aria-hidden="true">
      <motion.div
        className="absolute -top-20 -left-20 w-96 h-96 rounded-full bg-baker-pink/25 blur-3xl"
        animate={{ y: [0, 30, 0], x: [0, 20, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute top-1/3 -right-24 w-[28rem] h-[28rem] rounded-full bg-baker-topbar/20 blur-3xl"
        animate={{ y: [0, -40, 0], x: [0, -20, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-0 left-1/4 w-80 h-80 rounded-full bg-baker-pink/15 blur-3xl"
        animate={{ y: [0, 25, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
      />
    </div>
  )
}

// Clearly visible repeating polka-dot pattern
export function DotPattern({ className = '' }) {
  return (
    <div
      className={`absolute inset-0 z-0 pointer-events-none ${className}`}
      aria-hidden="true"
      style={{
        backgroundImage:
          'radial-gradient(circle, rgba(232,90,128,0.25) 2px, transparent 2px)',
        backgroundSize: '26px 26px',
      }}
    />
  )
}

// Floating hearts that slowly rise and fade — playful bakery accent
export function FloatingHearts() {
  const hearts = [
    { left: '8%', top: '20%', size: 30, delay: 0, dur: 9 },
    { left: '82%', top: '15%', size: 22, delay: 1.5, dur: 11 },
    { left: '70%', top: '55%', size: 36, delay: 0.8, dur: 10 },
    { left: '20%', top: '70%', size: 24, delay: 2.2, dur: 12 },
    { left: '45%', top: '8%', size: 20, delay: 3, dur: 13 },
  ]
  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {hearts.map((h, i) => (
        <motion.span
          key={i}
          className="absolute text-baker-pink/40"
          style={{ left: h.left, top: h.top, fontSize: h.size }}
          animate={{ y: [0, -24, 0], opacity: [0.4, 0.8, 0.4], rotate: [0, 10, -10, 0] }}
          transition={{ duration: h.dur, delay: h.delay, repeat: Infinity, ease: 'easeInOut' }}
        >
          ♥
        </motion.span>
      ))}
    </div>
  )
}

// Floating dessert emoji — clearly visible, playful bakery theme
export function FloatingDesserts() {
  const items = [
    { emoji: '🧁', left: '4%', top: '16%', size: 44, delay: 0, dur: 10 },
    { emoji: '🎂', left: '3%', top: '52%', size: 50, delay: 1, dur: 12 },
    { emoji: '🍰', left: '14%', top: '78%', size: 44, delay: 0.5, dur: 11 },
    { emoji: '🍩', left: '30%', top: '90%', size: 38, delay: 2, dur: 13 },
    { emoji: '🍓', left: '24%', top: '38%', size: 30, delay: 1.4, dur: 9 },
    { emoji: '✨', left: '44%', top: '90%', size: 28, delay: 0.8, dur: 8 },
  ]
  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {items.map((it, i) => (
        <motion.span
          key={i}
          className="absolute opacity-70"
          style={{ left: it.left, top: it.top, fontSize: it.size }}
          animate={{ y: [0, -22, 0], rotate: [0, 8, -8, 0] }}
          transition={{ duration: it.dur, delay: it.delay, repeat: Infinity, ease: 'easeInOut' }}
        >
          {it.emoji}
        </motion.span>
      ))}
    </div>
  )
}

// A soft wave divider (place at the top or bottom edge of a section)
export function WaveDivider({ flip = false, color = '#FDEEF1', className = '' }) {
  return (
    <div
      className={`absolute inset-x-0 ${flip ? 'top-0 rotate-180' : 'bottom-0'} leading-none pointer-events-none ${className}`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1440 120"
        className="w-full h-[60px] md:h-[90px]"
        preserveAspectRatio="none"
      >
        <path
          fill={color}
          d="M0,64L60,74.7C120,85,240,107,360,101.3C480,96,600,64,720,53.3C840,43,960,53,1080,64C1200,75,1320,85,1380,90.7L1440,96L1440,120L0,120Z"
        />
      </svg>
    </div>
  )
}

// Sprinkle confetti — small tilted rounded bars in brand tones
export function Sprinkles() {
  const sprinkles = [
    { left: '6%', top: '25%', rot: 25, color: 'bg-baker-pink/60' },
    { left: '90%', top: '30%', rot: -35, color: 'bg-baker-topbar/60' },
    { left: '15%', top: '80%', rot: 60, color: 'bg-baker-pink/50' },
    { left: '78%', top: '75%', rot: -15, color: 'bg-amber-300/70' },
    { left: '50%', top: '18%', rot: 45, color: 'bg-baker-pink/50' },
    { left: '35%', top: '88%', rot: -50, color: 'bg-amber-300/60' },
    { left: '62%', top: '40%', rot: 20, color: 'bg-baker-topbar/50' },
  ]
  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {sprinkles.map((s, i) => (
        <motion.span
          key={i}
          className={`absolute w-7 h-2.5 rounded-full ${s.color}`}
          style={{ left: s.left, top: s.top, rotate: `${s.rot}deg` }}
          animate={{ y: [0, -12, 0], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 6 + i, repeat: Infinity, ease: 'easeInOut' }}
        />
      ))}
    </div>
  )
}
