'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Briefcase, GraduationCap } from 'lucide-react'
import SectionHeading from '@/components/ui/SectionHeading'
import { experiences } from '@/data'

export default function ExperienceSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="experience" className="section-padding relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <SectionHeading
            label="04 / Experience"
            title="Where I've Worked"
          />
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[22px] top-0 bottom-0 w-px bg-border hidden md:block" />

          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="md:pl-16 relative"
              >
                {/* Timeline dot */}
                <div className="absolute left-0 top-6 hidden md:flex w-11 h-11 rounded-full glass border border-border items-center justify-center">
                  {exp.type === 'Academic' ? (
                    <GraduationCap size={16} className="text-accent" />
                  ) : (
                    <Briefcase size={16} className="text-accentPurple" />
                  )}
                </div>

                <div className="glass rounded-2xl p-6 border border-border hover:border-accent/30 transition-colors duration-300 group">
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                    <div>
                      <h3 className="font-display font-semibold text-lg text-textPrimary">{exp.title}</h3>
                      <p className="text-textSecondary text-sm">{exp.company}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className={`text-xs px-2 py-1 rounded-md font-mono ${
                        exp.type === 'Academic'
                          ? 'bg-accent/10 text-accent border border-accent/20'
                          : 'bg-accentPurple/10 text-accentPurple border border-accentPurple/20'
                      }`}>
                        {exp.type}
                      </span>
                      <span className="text-xs text-textMuted font-mono">{exp.period}</span>
                    </div>
                  </div>

                  <p className="text-textSecondary text-sm leading-relaxed mb-4">{exp.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {exp.highlights.map((h) => (
                      <span
                        key={h}
                        className="text-xs px-2.5 py-1 bg-surfaceHigh border border-border rounded-md text-textMuted font-mono"
                      >
                        {h}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
