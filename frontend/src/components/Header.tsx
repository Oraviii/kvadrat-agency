import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'

const navLinks = [
  { label: 'Услуги', id: 'services' },
  { label: 'Кейсы', id: 'cases' },
  { label: 'О нас', id: 'about' },
  { label: 'Контакты', id: 'contacts' },
]

export default function Header() {
  const [scrolled, setScrolled]   = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id: string) => {
    setMobileOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backdropFilter: (scrolled || mobileOpen) ? 'blur(14px)' : 'none',
        backgroundColor: (scrolled || mobileOpen) ? 'rgba(10,15,45,0.9)' : 'transparent',
        borderBottom: (scrolled || mobileOpen) ? '1px solid rgba(5,227,236,0.1)' : 'none',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <div
          className="flex items-center gap-2 cursor-pointer flex-shrink-0"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <svg width="26" height="26" viewBox="0 0 28 28" fill="none">
            <rect x="1" y="1" width="11" height="11" rx="2" stroke="var(--color-accent)" strokeWidth="1.5" />
            <rect x="16" y="1" width="11" height="11" rx="2" stroke="var(--color-accent)" strokeWidth="1.5" />
            <rect x="1" y="16" width="11" height="11" rx="2" stroke="var(--color-accent)" strokeWidth="1.5" />
            <rect x="16" y="16" width="11" height="11" rx="2" stroke="var(--color-accent)" strokeWidth="1.5" />
          </svg>
          <span className="text-white font-semibold text-sm sm:text-base">Агентство Квадрат</span>
        </div>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map(({ label, id }) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className="text-gray-300 hover:text-white transition-colors text-sm font-medium"
            >
              {label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          {/* Desktop CTA */}
          <Button
            onClick={() => scrollTo('contacts')}
            className="hidden sm:inline-flex text-sm font-medium transition-all duration-200"
            style={{ background: 'transparent', border: '1px solid var(--color-accent)', color: 'var(--color-accent)' }}
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

          {/* Hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-1"
            onClick={() => setMobileOpen(v => !v)}
            aria-label="Меню"
          >
            <span
              className="block w-6 h-0.5 transition-all duration-300 origin-center"
              style={{
                backgroundColor: 'var(--color-accent)',
                transform: mobileOpen ? 'rotate(45deg) translate(4px, 4px)' : 'none',
              }}
            />
            <span
              className="block w-6 h-0.5 transition-all duration-300"
              style={{
                backgroundColor: 'var(--color-accent)',
                opacity: mobileOpen ? 0 : 1,
              }}
            />
            <span
              className="block w-6 h-0.5 transition-all duration-300 origin-center"
              style={{
                backgroundColor: 'var(--color-accent)',
                transform: mobileOpen ? 'rotate(-45deg) translate(4px, -4px)' : 'none',
              }}
            />
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      <div
        className="md:hidden overflow-hidden transition-all duration-300"
        style={{ maxHeight: mobileOpen ? 300 : 0 }}
      >
        <nav className="flex flex-col px-6 pb-4 gap-1">
          {navLinks.map(({ label, id }) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className="text-left text-gray-200 hover:text-white py-3 text-base border-b transition-colors"
              style={{ borderColor: 'rgba(5,227,236,0.1)' }}
            >
              {label}
            </button>
          ))}
          <button
            onClick={() => scrollTo('contacts')}
            className="mt-3 w-full py-2.5 rounded-lg font-semibold text-sm transition-all duration-200"
            style={{ backgroundColor: 'var(--color-accent)', color: 'var(--color-dark)' }}
          >
            Обсудить проект
          </button>
        </nav>
      </div>
    </header>
  )
}
