'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Mail, Send, Github, Linkedin, ArrowRight } from 'lucide-react'
import SectionHeading from '@/components/ui/SectionHeading'
import { personal } from '@/data'

export default function ContactSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In production: integrate with email service (Resend, EmailJS, etc.)
    setSubmitted(true)
  }

  return (
    <section id="contact" className="section-padding relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      {/* Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full bg-accent/5 blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <SectionHeading
            label="06 / Contact"
            title="Let's Build Something Great"
            subtitle="Open to collaboration, freelance work, and full-time opportunities."
          />
        </motion.div>

        <div className="grid md:grid-cols-[1fr_1.2fr] gap-12 items-start">
          {/* Left info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-textSecondary leading-relaxed">
              Have a project idea, collaboration in mind, or just want to talk about distributed systems?
              Drop me a message — I reply within 24 hours.
            </p>

            {/* Direct email */}
            <a
              href={`mailto:${personal.email}`}
              className="flex items-center gap-3 group"
            >
              <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/25 flex items-center justify-center shrink-0">
                <Mail size={16} className="text-accent" />
              </div>
              <div>
                <p className="text-xs text-textMuted mb-0.5">Email</p>
                <p className="text-textSecondary text-sm group-hover:text-textPrimary transition-colors font-mono">
                  {personal.email}
                </p>
              </div>
              <ArrowRight size={14} className="text-textMuted group-hover:text-accent transition-colors ml-auto" />
            </a>

            {/* Social */}
            <div className="pt-4 border-t border-border space-y-3">
              <p className="text-xs text-textMuted">Also find me on</p>
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 group"
              >
                <div className="w-10 h-10 rounded-xl glass border border-border flex items-center justify-center shrink-0 group-hover:border-accent/30 transition-colors">
                  <Github size={16} className="text-textSecondary group-hover:text-accent transition-colors" />
                </div>
                <span className="text-sm text-textSecondary group-hover:text-textPrimary transition-colors font-mono">
                  github.com/bintangsatrio
                </span>
              </a>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 group"
              >
                <div className="w-10 h-10 rounded-xl glass border border-border flex items-center justify-center shrink-0 group-hover:border-accent/30 transition-colors">
                  <Linkedin size={16} className="text-textSecondary group-hover:text-accent transition-colors" />
                </div>
                <span className="text-sm text-textSecondary group-hover:text-textPrimary transition-colors font-mono">
                  linkedin.com/in/bintangsatrio
                </span>
              </a>
            </div>
          </motion.div>

          {/* Right - form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {submitted ? (
              <div className="glass rounded-2xl p-8 border border-emerald-500/30 text-center">
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 flex items-center justify-center mx-auto mb-4">
                  <Send size={20} className="text-emerald-400" />
                </div>
                <h3 className="font-display font-semibold text-textPrimary mb-2">Message Sent!</h3>
                <p className="text-textSecondary text-sm">Thanks for reaching out. I&apos;ll get back to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="glass rounded-2xl p-6 md:p-8 border border-border space-y-5">
                <div>
                  <label className="block text-xs text-textMuted font-mono mb-2">Name</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Your name"
                    className="w-full bg-surfaceHigh border border-border rounded-xl px-4 py-3 text-sm text-textPrimary placeholder-textMuted focus:outline-none focus:border-accent/50 transition-colors duration-200"
                  />
                </div>
                <div>
                  <label className="block text-xs text-textMuted font-mono mb-2">Email</label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="your@email.com"
                    className="w-full bg-surfaceHigh border border-border rounded-xl px-4 py-3 text-sm text-textPrimary placeholder-textMuted focus:outline-none focus:border-accent/50 transition-colors duration-200"
                  />
                </div>
                <div>
                  <label className="block text-xs text-textMuted font-mono mb-2">Message</label>
                  <textarea
                    required
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Tell me about your project or idea..."
                    rows={5}
                    className="w-full bg-surfaceHigh border border-border rounded-xl px-4 py-3 text-sm text-textPrimary placeholder-textMuted focus:outline-none focus:border-accent/50 transition-colors duration-200 resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-accent text-background font-semibold text-sm rounded-xl hover:bg-accent/90 transition-all duration-200 shadow-lg shadow-accent/20"
                >
                  <Send size={14} />
                  Send Message
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
