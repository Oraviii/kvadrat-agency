export default function SectionDivider({ label }: { label?: string }) {
  return (
    <div className="flex items-center gap-4 max-w-7xl mx-auto px-6 py-2">
      <div style={{ flex: 1, height: 1, background: 'linear-gradient(to right, transparent, rgba(5,227,236,0.3))' }} />
      {label && (
        <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: 'rgba(5,227,236,0.5)' }}>
          {label}
        </span>
      )}
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
        <rect x="0.5" y="0.5" width="5.5" height="5.5" rx="1" stroke="var(--color-accent)" strokeOpacity="0.4" />
        <rect x="8" y="0.5" width="5.5" height="5.5" rx="1" stroke="var(--color-accent)" strokeOpacity="0.4" />
        <rect x="0.5" y="8" width="5.5" height="5.5" rx="1" stroke="var(--color-accent)" strokeOpacity="0.4" />
        <rect x="8" y="8" width="5.5" height="5.5" rx="1" stroke="var(--color-accent)" strokeOpacity="0.4" />
      </svg>
      {label && (
        <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: 'rgba(5,227,236,0.5)' }}>
          {label}
        </span>
      )}
      <div style={{ flex: 1, height: 1, background: 'linear-gradient(to left, transparent, rgba(5,227,236,0.3))' }} />
    </div>
  )
}
