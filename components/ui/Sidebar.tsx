'use client'

/**
 * Sidebar — Two-card layout
 * Card atas : foto profil + nama + status
 * Card bawah : navigation menu + theme toggle + CV download
 *
 * Desktop : fixed sidebar kiri (w-72)
 * Mobile  : header bar + dropdown menu
 *
 * Navigation menggunakan SectionContext — klik menu HANYA menampilkan
 * section tersebut, tanpa scroll. Tidak ada scroll antar section.
 */

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Home, User, Code2, Briefcase, Layers, Settings, Mail,
  Github, Linkedin, Download, Sun, Moon, Menu, X,
} from 'lucide-react'
import { personal } from '@/data'
import { useTheme } from './ThemeProvider'
import { useSection, SectionId } from './SectionContext'

const navItems: { id: SectionId; label: string; icon: React.ElementType }[] = [
  { id: 'home',       label: 'Home',        icon: Home },
  { id: 'about',      label: 'About',       icon: User },
  { id: 'skills',     label: 'Skills',      icon: Code2 },
  { id: 'projects',   label: 'Projects',    icon: Layers },
  { id: 'experience', label: 'Experience',  icon: Briefcase },
  { id: 'contact',    label: 'Contact',     icon: Mail },
]

export default function Sidebar() {
  const { theme, toggleTheme } = useTheme()
  const { activeSection, setActiveSection } = useSection()
  const [mobileOpen, setMobileOpen] = useState(false)

  const handleNav = (id: SectionId) => {
    setActiveSection(id)
    setMobileOpen(false)
    // Scroll ke atas konten utama saat ganti section
    window.scrollTo({ top: 0, behavior: 'instant' })
  }

  return (
    <>
      {/* ─── DESKTOP SIDEBAR ──────────────────────────────────────── */}
      <aside className="hidden lg:flex flex-col gap-4 w-72 fixed left-6 top-6 bottom-6 z-40">

        {/* ── Card Atas: Foto + Identitas ─────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="sidebar-card rounded-2xl overflow-hidden"
        >
          {/* Cover / banner strip */}
          <div className="h-16 bg-gradient-to-br from-accent/40 via-accentPurple/30 to-accentCyan/20 relative">
            <div className="absolute inset-0 grid-bg opacity-40" />
          </div>

          {/* Avatar */}
          <div className="px-5 pb-5 -mt-9 relative">
            <div className="w-16 h-16 rounded-2xl border-2 border-border overflow-hidden bg-surfaceHigh relative shadow-xl">
              {personal.photoUrl ? (
                <Image
                  src={personal.photoUrl}
                  alt={personal.name}
                  fill
                  className="object-cover"
                  sizes="64px"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-accent/20 to-accentPurple/20">
                  <span className="font-display font-bold text-xl text-accent">BS</span>
                </div>
              )}
            </div>

            {/* Online status dot */}
            <div className="absolute top-0 left-[74px] w-3.5 h-3.5 rounded-full bg-emerald-400 border-2 border-background" />

            {/* Info */}
            <div className="mt-3">
              <h2 className="font-display font-bold text-base text-textPrimary leading-tight">
                {personal.name}
              </h2>
              <p className="text-xs text-textSecondary mt-0.5">{personal.title}</p>
            </div>

            {/* Socials */}
            <div className="flex gap-2 mt-4">
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-1.5 py-1.5 rounded-lg sidebar-btn text-xs"
              >
                <Github size={12} />
                <span className="font-mono">GitHub</span>
              </a>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-1.5 py-1.5 rounded-lg sidebar-btn text-xs"
              >
                <Linkedin size={12} />
                <span className="font-mono">LinkedIn</span>
              </a>
            </div>
          </div>
        </motion.div>

        {/* ── Card Bawah: Navigation + Theme + CV ─────────────────── */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
          className="sidebar-card rounded-2xl p-4 flex flex-col gap-1 flex-1 min-h-0 overflow-y-auto"
        >
          <p className="text-[10px] font-mono text-textMuted tracking-[0.2em] uppercase px-2 mb-1">
            Navigation
          </p>

          {navItems.map((item) => {
            const Icon = item.icon
            const isActive = activeSection === item.id
            return (
              <button
                key={item.id}
                onClick={() => handleNav(item.id)}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm transition-all duration-200 text-left group
                  ${isActive
                    ? 'bg-accent/15 text-accent border border-accent/25'
                    : 'text-textSecondary hover:text-textPrimary hover:bg-white/5 border border-transparent'
                  }`}
              >
                <Icon
                  size={15}
                  className={`shrink-0 transition-colors ${isActive ? 'text-accent' : 'text-textMuted group-hover:text-textSecondary'}`}
                />
                <span className="font-medium">{item.label}</span>
                {isActive && (
                  <motion.span
                    layoutId="active-dot"
                    className="ml-auto w-1.5 h-1.5 rounded-full bg-accent"
                  />
                )}
              </button>
            )
          })}

          {/* Divider */}
          <div className="h-px bg-border my-2" />

          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm sidebar-btn mt-1"
          >
            {theme === 'dark' ? (
              <>
                <Sun size={15} className="shrink-0 text-amber-400" />
                <span className="font-medium text-textSecondary">Light Mode</span>
              </>
            ) : (
              <>
                <Moon size={15} className="shrink-0 text-accent" />
                <span className="font-medium text-textSecondary">Dark Mode</span>
              </>
            )}
          </button>
        </motion.div>
      </aside>

      {/* ─── MOBILE HEADER ────────────────────────────────────────── */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-50 sidebar-card border-b border-border/60 px-4 h-14 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-lg overflow-hidden bg-gradient-to-br from-accent/20 to-accentPurple/20 flex items-center justify-center flex-shrink-0">
            {personal.photoUrl ? (
              <Image src={personal.photoUrl} alt={personal.name} width={28} height={28} className="object-cover" />
            ) : (
              <span className="font-display font-bold text-xs text-accent">BS</span>
            )}
          </div>
          <span className="font-display font-bold text-sm text-textPrimary">{personal.name}</span>
          <span className="text-textMuted text-xs font-mono hidden sm:inline">
            / {navItems.find(n => n.id === activeSection)?.label}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <button onClick={toggleTheme} className="p-2 rounded-lg sidebar-btn">
            {theme === 'dark'
              ? <Sun size={15} className="text-amber-400" />
              : <Moon size={15} className="text-accent" />
            }
          </button>
          <button onClick={() => setMobileOpen(!mobileOpen)} className="p-2 rounded-lg sidebar-btn">
            {mobileOpen ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18 }}
            className="lg:hidden fixed top-14 left-0 right-0 z-40 sidebar-card border-b border-border/60 px-4 py-3"
          >
            <div className="grid grid-cols-2 gap-2">
              {navItems.map((item) => {
                const Icon = item.icon
                const isActive = activeSection === item.id
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNav(item.id)}
                    className={`flex items-center gap-2 px-3 py-2.5 rounded-xl text-sm transition-all duration-200
                      ${isActive
                        ? 'bg-accent/15 text-accent border border-accent/25'
                        : 'text-textSecondary hover:text-textPrimary sidebar-btn border border-transparent'
                      }`}
                  >
                    <Icon size={13} className="shrink-0" />
                    <span>{item.label}</span>
                  </button>
                )
              })}
              <a
                href={personal.cvUrl}
                download
                onClick={() => setMobileOpen(false)}
                className="col-span-2 flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl text-sm sidebar-btn-accent"
              >
                <Download size={13} />
                Download CV
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
