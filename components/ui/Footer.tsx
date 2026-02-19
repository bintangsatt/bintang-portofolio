import { personal } from '@/data'

export default function Footer() {
  return (
    <footer className="border-t border-border py-8 mt-4">
      <div className="max-w-4xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-textMuted text-sm font-mono">
          © {new Date().getFullYear()} Bintang Satrio Aji
        </p>
        <p className="text-textMuted text-xs">
          Built with{' '}
          <span className="text-accent">Next.js</span> ·{' '}
          <span className="text-accentPurple">Tailwind CSS</span> ·{' '}
          <span className="text-accentCyan">Framer Motion</span>
        </p>
        <a
          href={`mailto:${personal.email}`}
          className="text-textMuted hover:text-textSecondary text-xs font-mono transition-colors"
        >
          {personal.email}
        </a>
      </div>
    </footer>
  )
}
