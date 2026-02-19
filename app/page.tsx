'use client'

/**
 * page.tsx — Single-section display
 *
 * Hanya menampilkan SATU section sesuai activeSection dari SectionContext.
 * Tidak ada scrolling antar section. Setiap ganti section ada animasi fade+slide.
 */

import { motion, AnimatePresence } from 'framer-motion'
import Sidebar from '@/components/ui/Sidebar'
import Footer from '@/components/ui/Footer'
import { SectionProvider, useSection } from '@/components/ui/SectionContext'
import HeroSection from '@/components/sections/HeroSection'
import AboutSection from '@/components/sections/AboutSection'
import SkillsSection from '@/components/sections/SkillsSection'
import ProjectsSection from '@/components/sections/ProjectsSection'
import ExperienceSection from '@/components/sections/ExperienceSection'
import ContactSection from '@/components/sections/ContactSection'

// Animasi transisi antar section
const sectionVariants = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.35, ease: 'easeOut' } },
  exit:    { opacity: 0, y: -10, transition: { duration: 0.2, ease: 'easeIn' } },
}

// Inner component yang bisa akses SectionContext
function PageContent() {
  const { activeSection } = useSection()

  return (
    <div className="min-h-screen bg-background">
      <Sidebar />

      {/* Main area — offset kanan sejauh sidebar di desktop */}
      <main className="main-content min-h-screen flex flex-col">
        {/* Wrapper AnimatePresence untuk animasi masuk/keluar */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSection}            // key berubah → trigger animasi
            variants={sectionVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="flex-1"
          >
            {activeSection === 'home'       && <HeroSection />}
            {activeSection === 'about'      && <AboutSection />}
            {activeSection === 'skills'     && <SkillsSection />}
            {activeSection === 'projects'   && <ProjectsSection />}
            {activeSection === 'experience' && <ExperienceSection />}
            {activeSection === 'contact'    && <ContactSection />}
          </motion.div>
        </AnimatePresence>

        <Footer />
      </main>
    </div>
  )
}

// Root export — bungkus dengan SectionProvider
export default function Home() {
  return (
    <SectionProvider>
      <PageContent />
    </SectionProvider>
  )
}
