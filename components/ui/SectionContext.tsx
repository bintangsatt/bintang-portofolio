'use client'

/**
 * SectionContext
 * Menyimpan section mana yang sedang aktif ditampilkan.
 * Dipakai oleh Sidebar (untuk set active) dan page.tsx (untuk render section).
 */

import { createContext, useContext, useState, ReactNode } from 'react'

export type SectionId =
  | 'home'
  | 'about'
  | 'skills'
  | 'projects'
  | 'experience'
  | 'contact'

interface SectionContextValue {
  activeSection: SectionId
  setActiveSection: (id: SectionId) => void
}

const SectionContext = createContext<SectionContextValue>({
  activeSection: 'home',
  setActiveSection: () => {},
})

export function SectionProvider({ children }: { children: ReactNode }) {
  const [activeSection, setActiveSection] = useState<SectionId>('home')

  return (
    <SectionContext.Provider value={{ activeSection, setActiveSection }}>
      {children}
    </SectionContext.Provider>
  )
}

export const useSection = () => useContext(SectionContext)
