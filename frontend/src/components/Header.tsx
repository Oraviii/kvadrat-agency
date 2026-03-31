import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        backgroundColor: scrolled ? 'rgba(10,15,45,0.85)' : 'transparent',
        borderBottom: scrolled ? '1px solid rgba(5,227,236,0.1)' : 'none',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
            <rect x="1" y="1" width="11" height="11" rx="2" stroke="var(--color-accent)" strokeWidth="1.5" fill="none" />
            <rect x="16" y="1" width="11" height="11" rx="2" stroke="var(--color-accent)" strokeWidth="1.5" fill="none" />
            <rect x="1" y="16" width="11" height="11" rx="2" stroke="var(--color-accent)" strokeWidth="1.5" fill="none" />
            <rect x="16" y="16" width="11" height="11" rx="2" stroke="var(--color-accent)" strokeWidth="1.5" fill="none" />
          </svg>
          <span className="text-white font-semibold text-base hidden sm:block">Агентство Квадрат</span>
        </div>

        {/* Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {[
            { label: 'Услуги', id: 'services' },
            { label: 'Кейсы', id: 'cases' },
            { label: 'О нас', id: 'about' },
            { label: 'Контакты', id: 'contacts' },
          ].map(({ label, id }) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className="text-gray-300 hover:text-white transition-colors text-sm font-medium"
            >
              {label}
            </button>
          ))}
        </nav>

        {/* CTA */}
        <Button
          onClick={() => scrollTo('contacts')}
          className="text-sm font-medium transition-all duration-200"
          style={{
            background: 'transparent',
            border: '1px solid var(--color-accent)',
            color: 'var(--color-accent)',
          }}
          onMouseEnter={e => {
            (e.currentTarget as HTMLButtonElement).style.background = 'var(--color-accent)'
            ;(e.currentTarget as HTMLButtonElement).style.color = 'var(--color-dark)'
          }}
          onMouseLeave={e => {
            (e.currentTarget as HTMLButtonElement).style.background = 'transparent'
            ;(e.currentTarget as HTMLButtonElement).style.color = 'var(--color-accent)'
          }}
        >
          Обсудить проект
        </Button>
      </div>
    </header>
  )
}
