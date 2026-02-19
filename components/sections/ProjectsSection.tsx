'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import Image from 'next/image'
import { Github, ChevronDown, ChevronUp, Layers, Zap, AlertTriangle, CheckCircle, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react'
import SectionHeading from '@/components/ui/SectionHeading'
import { projects } from '@/data'

// ─────────────────────────────────────────────────────────────────────────────
// ProjectScreenshot — renders image slideshow or placeholder
// ─────────────────────────────────────────────────────────────────────────────
function ProjectScreenshot({
  screenshots,
  title,
  gradient,
  isBlue,
  accentClass,
}: {
  screenshots: string[]
  title: string
  gradient: string
  isBlue: boolean
  accentClass: string
}) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const hasScreenshots = screenshots.length > 0
  const hasMultiple = screenshots.length > 1

  const prev = () => setCurrentIndex((i) => (i - 1 + screenshots.length) % screenshots.length)
  const next = () => setCurrentIndex((i) => (i + 1) % screenshots.length)

  // ── Placeholder (no screenshots yet) ──────────────────────────
  if (!hasScreenshots) {
    return (
      <div className="rounded-xl border border-border bg-surfaceHigh/60 h-44 flex items-center justify-center mb-6 overflow-hidden relative">
        <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-50`} />
        <div className="relative z-10 text-center">
          <div className={`w-10 h-10 rounded-xl ${isBlue ? 'bg-accent/20' : 'bg-accentPurple/20'} flex items-center justify-center mx-auto mb-2`}>
            <Layers size={18} className={accentClass} />
          </div>
          <p className="text-textMuted text-xs font-mono">Screenshot coming soon</p>
        </div>
      </div>
    )
  }

  // ── Screenshot display ─────────────────────────────────────────
  return (
    <>
      <div className="rounded-xl border border-border overflow-hidden mb-6 relative group bg-surfaceHigh/60">
        {/* Main image */}
        <div className="relative h-52 md:h-64 w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="absolute inset-0"
            >
              <Image
                src={screenshots[currentIndex]}
                alt={`${title} screenshot ${currentIndex + 1}`}
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 800px"
              />
            </motion.div>
          </AnimatePresence>

          {/* Overlay gradient for readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent pointer-events-none" />

          {/* Lightbox button */}
          <button
            onClick={() => setLightboxOpen(true)}
            className="absolute top-3 right-3 p-2 rounded-lg glass border border-border opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-textSecondary hover:text-textPrimary"
            title="View fullscreen"
          >
            <Maximize2 size={13} />
          </button>

          {/* Slideshow controls — only if multiple screenshots */}
          {hasMultiple && (
            <>
              <button
                onClick={prev}
                className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-lg glass border border-border opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-textSecondary hover:text-textPrimary"
              >
                <ChevronLeft size={14} />
              </button>
              <button
                onClick={next}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-lg glass border border-border opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-textSecondary hover:text-textPrimary"
              >
                <ChevronRight size={14} />
              </button>
            </>
          )}
        </div>

        {/* Dot indicators — only if multiple screenshots */}
        {hasMultiple && (
          <div className="flex items-center justify-center gap-1.5 py-2.5 bg-surfaceHigh/80 border-t border-border">
            {screenshots.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`h-1.5 rounded-full transition-all duration-200 ${
                  i === currentIndex
                    ? `w-5 ${isBlue ? 'bg-accent' : 'bg-accentPurple'}`
                    : 'w-1.5 bg-border hover:bg-textMuted'
                }`}
              />
            ))}
            <span className="ml-2 text-[10px] text-textMuted font-mono">
              {currentIndex + 1}/{screenshots.length}
            </span>
          </div>
        )}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxOpen(false)}
            className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4 cursor-zoom-out"
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-5xl max-h-[85vh] rounded-xl overflow-hidden border border-border cursor-default"
            >
              <Image
                src={screenshots[currentIndex]}
                alt={`${title} screenshot ${currentIndex + 1}`}
                width={1200}
                height={800}
                className="object-contain w-full h-full"
              />
              {/* Lightbox prev/next */}
              {hasMultiple && (
                <>
                  <button
                    onClick={prev}
                    className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-xl glass border border-border text-textSecondary hover:text-textPrimary"
                  >
                    <ChevronLeft size={18} />
                  </button>
                  <button
                    onClick={next}
                    className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-xl glass border border-border text-textSecondary hover:text-textPrimary"
                  >
                    <ChevronRight size={18} />
                  </button>
                </>
              )}
              <button
                onClick={() => setLightboxOpen(false)}
                className="absolute top-4 right-4 p-2 rounded-lg glass border border-border text-textMuted hover:text-textPrimary text-xs font-mono"
              >
                ESC
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// ProjectCard
// ─────────────────────────────────────────────────────────────────────────────
function ProjectCard({ project, index }: { project: typeof import('@/data').projects[0]; index: number }) {
  const [expanded, setExpanded] = useState(false)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const isBlue = project.color === 'blue'
  const accentClass = isBlue ? 'text-accent' : 'text-accentPurple'
  const borderClass = isBlue ? 'border-accent/25 hover:border-accent/50' : 'border-accentPurple/25 hover:border-accentPurple/50'
  const badgeBg = isBlue ? 'bg-accent/10 text-accent border-accent/25' : 'bg-accentPurple/10 text-accentPurple border-accentPurple/25'

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className={`glass rounded-2xl border ${borderClass} overflow-hidden transition-all duration-300`}
    >
      {/* Gradient header stripe */}
      <div className={`h-1 w-full bg-gradient-to-r ${isBlue ? 'from-accent via-accentCyan' : 'from-accentPurple via-accent'} to-transparent`} />

      <div className="p-6 md:p-8">
        {/* Header */}
        <div className="flex flex-wrap items-start justify-between gap-4 mb-5">
          <div>
            <p className={`font-mono text-xs ${accentClass} tracking-widest uppercase mb-2 opacity-70`}>
              Project 0{index + 1}
            </p>
            <h3 className="font-display font-bold text-xl md:text-2xl text-textPrimary leading-tight">
              {project.title}
            </h3>
            <p className="text-textSecondary text-sm mt-1">{project.tagline}</p>
          </div>
        </div>

        {/* Description */}
        <p className="text-textSecondary text-sm leading-relaxed mb-6">{project.description}</p>

        {/* Tech stack pills */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 text-xs font-mono text-textSecondary bg-surfaceHigh border border-border rounded-md"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Screenshot — edit screenshots[] di data/index.ts */}
        <ProjectScreenshot
          screenshots={project.screenshots}
          title={project.title}
          gradient={project.gradient}
          isBlue={isBlue}
          accentClass={accentClass}
        />

        {/* Expandable details */}
        <button
          onClick={() => setExpanded(!expanded)}
          className={`w-full flex items-center justify-between px-4 py-3 rounded-xl ${isBlue ? 'bg-accent/5 hover:bg-accent/10' : 'bg-accentPurple/5 hover:bg-accentPurple/10'} transition-colors duration-200 text-sm text-textSecondary group`}
        >
          <span className="font-medium">View Architecture Details</span>
          {expanded ? (
            <ChevronUp size={14} className="group-hover:opacity-100 opacity-60" />
          ) : (
            <ChevronDown size={14} className="group-hover:opacity-100 opacity-60" />
          )}
        </button>

        {/* Expanded content */}
        {expanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-6 space-y-6"
          >
            {/* Architecture */}
            <div>
              <h4 className="flex items-center gap-2 text-sm font-semibold text-textPrimary mb-3">
                <Layers size={14} className={accentClass} /> Service Architecture
              </h4>
              <div className="grid sm:grid-cols-2 gap-3">
                {project.architecture.map((svc) => (
                  <div key={svc.name} className="p-3 bg-surfaceHigh rounded-lg border border-border">
                    <p className={`text-xs font-mono font-semibold ${accentClass} mb-1`}>{svc.name}</p>
                    <p className="text-xs text-textMuted">{svc.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Features */}
            <div>
              <h4 className="flex items-center gap-2 text-sm font-semibold text-textPrimary mb-3">
                <Zap size={14} className={accentClass} /> Key Features
              </h4>
              <div className="space-y-2">
                {project.features.map((f) => (
                  <div key={f} className="flex items-start gap-2 text-xs text-textSecondary">
                    <CheckCircle size={12} className="text-emerald-400 mt-0.5 shrink-0" />
                    {f}
                  </div>
                ))}
              </div>
            </div>

            {/* Challenges & Solutions */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <h4 className="flex items-center gap-2 text-sm font-semibold text-textPrimary mb-3">
                  <AlertTriangle size={14} className="text-amber-400" /> Challenges
                </h4>
                <div className="space-y-2">
                  {project.challenges.map((c) => (
                    <div key={c} className="flex items-start gap-2 text-xs text-textSecondary">
                      <span className="text-amber-400 mt-0.5 shrink-0">—</span>
                      {c}
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="flex items-center gap-2 text-sm font-semibold text-textPrimary mb-3">
                  <CheckCircle size={14} className="text-emerald-400" /> Solutions
                </h4>
                <div className="space-y-2">
                  {project.solutions.map((s) => (
                    <div key={s} className="flex items-start gap-2 text-xs text-textSecondary">
                      <span className="text-emerald-400 mt-0.5 shrink-0">+</span>
                      {s}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Why Microservice */}
            {project.whyMicroservice && (
              <div className="p-4 rounded-xl border border-accent/20 bg-accent/5">
                <h4 className="text-sm font-semibold text-accent mb-2">Why Microservice over Monolith?</h4>
                <p className="text-xs text-textSecondary leading-relaxed">{project.whyMicroservice}</p>
              </div>
            )}
          </motion.div>
        )}
      </div>
    </motion.div>
  )
}

export default function ProjectsSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="projects" className="section-padding relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <SectionHeading
            label="03 / Projects"
            title="Featured Work"
            subtitle="Case studies of systems I've designed and built — with architecture reasoning."
          />
        </motion.div>

        <div className="space-y-8">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
