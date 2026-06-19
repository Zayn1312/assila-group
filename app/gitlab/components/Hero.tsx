'use client'

import { motion } from 'framer-motion'
import { ArrowDown, Download } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden py-16 md:py-24">
      {/* Orange glow blob */}
      <motion.div
        className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] rounded-full opacity-40 pointer-events-none"
        style={{
          background:
            'radial-gradient(circle, rgba(252,109,38,0.4) 0%, transparent 70%)',
          filter: 'blur(120px)',
        }}
        animate={{
          x: [0, 40, 0],
          y: [0, -30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 12,
          ease: 'easeInOut',
          repeat: Infinity,
          repeatType: 'reverse',
        }}
      />
      {/* Purple glow blob */}
      <motion.div
        className="absolute bottom-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full opacity-40 pointer-events-none"
        style={{
          background:
            'radial-gradient(circle, rgba(110,73,203,0.4) 0%, transparent 70%)',
          filter: 'blur(120px)',
        }}
        animate={{
          x: [0, -40, 0],
          y: [0, 30, 0],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 14,
          ease: 'easeInOut',
          repeat: Infinity,
          repeatType: 'reverse',
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <motion.p
          className="text-orange-gitlab font-medium text-sm md:text-base tracking-wide uppercase mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          GitLab Account Executive &middot; Case Study
        </motion.p>

        <motion.h1
          className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.05] mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          Thales. From zero
          <br />
          pipeline to signed.
        </motion.h1>

        <motion.p
          className="text-[#C8C2D4] text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          How I would have taken complete pipeline ownership of the biggest
          single-application DevSecOps win in EMEA aerospace.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
        >
          <a
            href="#case-study"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-orange-gitlab text-white font-semibold rounded-xl hover:bg-orange-gitlab/90 transition-colors"
          >
            Read the case study
            <ArrowDown className="w-4 h-4" />
          </a>
          <a
            href="/assets/anouar-thales-case.pdf"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-white/10 text-white font-semibold rounded-xl border border-white/20 hover:bg-white/15 transition-colors"
          >
            Download the deck
            <Download className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
