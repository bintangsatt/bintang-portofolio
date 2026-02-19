interface Props {
  label: string
  title: string
  subtitle?: string
}

export default function SectionHeading({ label, title, subtitle }: Props) {
  return (
    <div className="mb-16">
      <p className="font-mono text-accent text-xs tracking-[0.3em] uppercase mb-3 opacity-80">{label}</p>
      <h2 className="font-display font-bold text-3xl md:text-4xl text-textPrimary">{title}</h2>
      {subtitle && (
        <p className="mt-4 text-textSecondary text-base max-w-xl leading-relaxed">{subtitle}</p>
      )}
    </div>
  )
}
