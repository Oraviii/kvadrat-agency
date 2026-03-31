import { useScrollReveal } from '@/hooks/useScrollReveal'

export default function Footer() {
  const innerRef = useScrollReveal<HTMLDivElement>()

  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <footer className="py-8 px-4 sm:px-6" style={{ backgroundColor: 'rgba(10,15,45,0.92)', borderTop: '1px solid rgba(5,227,236,0.08)' }}>
      <div className="max-w-7xl mx-auto">
        <div ref={innerRef} className="fade-up flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <svg width="22" height="22" viewBox="0 0 28 28" fill="none">
              <rect x="1" y="1" width="11" height="11" rx="2" stroke="var(--color-accent)" strokeWidth="1.5" />
              <rect x="16" y="1" width="11" height="11" rx="2" stroke="var(--color-accent)" strokeWidth="1.5" />
              <rect x="1" y="16" width="11" height="11" rx="2" stroke="var(--color-accent)" strokeWidth="1.5" />
              <rect x="16" y="16" width="11" height="11" rx="2" stroke="var(--color-accent)" strokeWidth="1.5" />
            </svg>
            <span className="text-white font-semibold text-sm">Агентство Квадрат</span>
          </div>

          {/* Nav */}
          <nav className="flex flex-wrap gap-x-6 gap-y-2">
            {[
              { label: 'Услуги', id: 'services' },
              { label: 'Кейсы', id: 'cases' },
              { label: 'О нас', id: 'about' },
              { label: 'Контакты', id: 'contacts' },
            ].map(({ label, id }) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className="text-gray-400 hover:text-white transition-colors text-sm"
              >
                {label}
              </button>
            ))}
          </nav>

          {/* VK */}
          <a
            href="https://vk.com/kvadrat_agency"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-gray-400 transition-colors w-fit"
            onMouseEnter={e => (e.currentTarget.style.color = 'var(--color-accent)')}
            onMouseLeave={e => (e.currentTarget.style.color = '')}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M15.684 0H8.316C1.592 0 0 1.592 0 8.316v7.368C0 22.408 1.592 24 8.316 24h7.368C22.408 24 24 22.408 24 15.684V8.316C24 1.592 22.408 0 15.684 0zm3.692 17.123h-1.744c-.66 0-.862-.523-2.049-1.712-1.033-1.01-1.49-.848-1.49.494v1.218c0 .375-.12.598-1.1.598-1.616 0-3.41-.98-4.674-2.808-1.896-2.668-2.418-4.668-2.418-4.668s-.054-.124.003-.195c.065-.08.27-.097.27-.097h1.764c.254 0 .347.143.444.38 0 0 .91 2.617 2.178 3.965.43.465.822.466 1.015.14.213-.35.225-2.086.225-2.086s.014-1.18-.558-1.37c-.27-.09.003-.33.34-.38.434-.065 1.228-.086 1.935.01.645.087.621.483.621 1.543v1.36c0 .374.16.42.283.42.21 0 .517-.21 1.146-.88 1.286-1.392 2.2-3.525 2.2-3.525.07-.16.21-.3.47-.3h1.744c.524 0 .638.283.524.67-.208.826-2.186 3.73-2.186 3.73-.174.283-.24.41 0 .734.175.24.745.74 1.126 1.188.698.8 1.235 1.473 1.378 1.94.138.457-.075.69-.548.69z"/>
            </svg>
            ВКонтакте
          </a>
        </div>

        <p className="text-gray-600 text-xs text-center mt-6">
          © 2025 Агентство Квадрат. Все права защищены.
        </p>
      </div>
    </footer>
  )
}
