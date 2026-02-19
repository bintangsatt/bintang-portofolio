'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import SectionHeading from '@/components/ui/SectionHeading'

const stats = [
  { value: '1+', label: 'Years building' },
  { value: '2', label: 'Projects shipped' },
  { value: '∞', label: 'Lines debugged' },
]

export default function AboutSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" className="section-padding relative">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <SectionHeading
            label="01 / About"
            title="Who I Am"
            subtitle="A backend-focused builder who believes in clean architecture."
          />
        </motion.div>

        <div className="grid md:grid-cols-[1fr_1fr] gap-12 items-start">
          {/* Left - Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-5 text-textSecondary leading-relaxed"
          >
            <p>
              I&apos;m a <span className="text-textPrimary font-medium">Fresh Graduate Informatics Engineering</span>{' '}
              passionate about building systems that are not just functional, but built to scale. My focus sits at the
              intersection of backend architecture and modern web development.
            </p>
            <p>
              My interest in{' '}
              <span className="text-accent font-medium">microservice architecture</span> started when I began noticing
              how monolithic systems struggle under real-world complexity. That led me down a path of studying
              distributed systems, service decomposition, and scalable API design.
            </p>
            <p>
              Beyond code, I find it important to understand the{' '}
              <span className="text-textPrimary font-medium">why</span> behind architectural decisions — why we separate
              concerns, why we version APIs, why we define clear domain boundaries. Good software mirrors the real
              world it models.
            </p>
            <p>
              Currently building with <span className="font-mono text-accentCyan text-sm">Laravel</span>,{' '}
              <span className="font-mono text-accentCyan text-sm">Express.js</span>, and{' '}
              <span className="font-mono text-accentCyan text-sm">React</span> — always looking for projects that
              challenge system design thinking.
            </p>
          </motion.div>

          {/* Right - Stats + Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-4"
          >
            {/* Stats grid */}
            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat) => (
                <div key={stat.label} className="glass rounded-xl p-4 text-center hover:border-accent/30 transition-colors duration-200">
                  <div className="font-display font-bold text-2xl text-accent mb-1">{stat.value}</div>
                  <div className="text-xs text-textMuted">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Terminal-style card */}
            <div className="glass rounded-xl overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-surfaceHigh/50">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
                <span className="ml-2 text-xs text-textMuted font-mono">whoami.sh</span>
              </div>
              <div className="p-5 font-mono text-xs space-y-2">
                <p><span className="text-accent">$</span> <span className="text-textSecondary">cat profile.json</span></p>
                <div className="text-textSecondary pl-4 space-y-1">
                  <p><span className="text-accentPurple">"role"</span>: <span className="text-emerald-400">"Full-Stack Developer"</span>,</p>
                  <p><span className="text-accentPurple">"focus"</span>: <span className="text-emerald-400">"Backend Architecture"</span>,</p>
                  <p><span className="text-accentPurple">"passion"</span>: <span className="text-emerald-400">"Microservices & DDD"</span>,</p>
                  <p><span className="text-accentPurple">"status"</span>: <span className="text-emerald-400">"Final Year Student"</span>,</p>
                  <p><span className="text-accentPurple">"looking_for"</span>: <span className="text-emerald-400">"Great Challenges"</span></p>
                </div>
                <p className="pt-1"><span className="text-accent">$</span> <span className="text-textMuted animate-pulse">▌</span></p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
