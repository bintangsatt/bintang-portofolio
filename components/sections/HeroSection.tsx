'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Download, ExternalLink } from 'lucide-react'
import { personal } from '@/data'
import { useSection } from '@/components/ui/SectionContext'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: 'easeOut' },
  }),
}

export default function HeroSection() {
  const { setActiveSection } = useSection()

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center grid-bg overflow-hidden"
    >
      {/* Ambient glows */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full bg-accent/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-accentPurple/5 blur-[100px] pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

      <div className="max-w-4xl mx-auto px-6 pt-[80px] pb-[60px] lg:pt-[60px] lg:pb-[60px] w-full">
        <div className="max-w-3xl">
          {/* Status badge */}
          <motion.div
            custom={0} initial="hidden" animate="show" variants={fadeUp}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass border border-accent/20 text-xs text-accent font-mono mb-8"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Available for opportunities
          </motion.div>

          {/* Name */}
          <motion.h1
            custom={1} initial="hidden" animate="show" variants={fadeUp}
            className="font-display font-extrabold text-5xl md:text-7xl lg:text-7xl leading-[0.95] tracking-tight text-textPrimary mb-6"
          >
            Bintang
            <br />
            <span className="text-gradient-blue">Satrio Aji</span>
            <span className="text-accent">.</span>
          </motion.h1>

          {/* Title badges */}
          <motion.div
            custom={2} initial="hidden" animate="show" variants={fadeUp}
            className="flex flex-wrap items-center gap-3 mb-6"
          >
            <span className="px-3 py-1 bg-accent/10 border border-accent/25 text-accent text-sm font-mono rounded-md">
              Full-Stack Developer
            </span>
            <span className="text-textMuted">×</span>
            <span className="px-3 py-1 bg-accentPurple/10 border border-accentPurple/25 text-accentPurple text-sm font-mono rounded-md">
              Microservice Enthusiast
            </span>
          </motion.div>

          {/* Tagline */}
          <motion.p
            custom={3} initial="hidden" animate="show" variants={fadeUp}
            className="text-textSecondary text-lg md:text-xl leading-relaxed max-w-2xl mb-10 font-light"
          >
            {personal.tagline}
          </motion.p>

          {/* CTAs */}
          <motion.div
            custom={4} initial="hidden" animate="show" variants={fadeUp}
            className="flex flex-wrap gap-4 mb-12"
          >
            {/* View Projects — pakai SectionContext, bukan anchor */}
            <button
              onClick={() => setActiveSection('projects')}
              className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-background font-semibold text-sm rounded-lg hover:bg-accent/90 transition-all duration-200 shadow-lg shadow-accent/20"
            >
              <ExternalLink size={15} />
              View Projects
            </button>
            <a
              href={personal.cvUrl}
              download
              className="inline-flex items-center gap-2 px-6 py-3 glass border border-border text-textPrimary font-semibold text-sm rounded-lg hover:border-accent/40 hover:bg-accent/5 transition-all duration-200"
            >
              <Download size={15} />
              Download CV
            </a>
          </motion.div>

          {/* Social links */}
          <motion.div
            custom={5} initial="hidden" animate="show" variants={fadeUp}
            className="flex items-center gap-4"
          >
            <a
              href={personal.github} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 text-textSecondary hover:text-textPrimary text-sm transition-colors duration-200 group"
            >
              <Github size={18} className="group-hover:text-accent transition-colors" />
              <span className="font-mono">GitHub</span>
            </a>
            <span className="w-px h-4 bg-border" />
            <a
              href={personal.linkedin} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 text-textSecondary hover:text-textPrimary text-sm transition-colors duration-200 group"
            >
              <Linkedin size={18} className="group-hover:text-accent transition-colors" />
              <span className="font-mono">LinkedIn</span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
