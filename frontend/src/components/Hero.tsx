import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'

export default function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 100)
    return () => clearTimeout(t)
  }, [])

  const scrollToContacts = () => document.getElementById('contacts')?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Content */}
      <div
        className="relative z-10 text-center px-6 max-w-4xl w-full"
        style={{
          opacity: mounted ? 1 : 0,
          transform: mounted ? 'translateY(0)' : 'translateY(2.5rem)',
          transition: 'opacity 1s ease, transform 1s ease',
        }}
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight">
          Агентство Квадрат —<br />
          <span style={{ color: 'var(--color-accent)' }}>digital-агентство</span> полного цикла
        </h1>
        <p
          className="text-gray-300 text-lg sm:text-xl mt-5 max-w-xl mx-auto"
          style={{
            opacity: mounted ? 1 : 0,
            transform: mounted ? 'translateY(0)' : 'translateY(1rem)',
            transition: 'opacity 1s ease 0.3s, transform 1s ease 0.3s',
          }}
        >
          Главная ценность — наши клиенты.
        </p>
        <div
          style={{
            opacity: mounted ? 1 : 0,
            transition: 'opacity 1s ease 0.55s',
          }}
        >
          <Button
            onClick={scrollToContacts}
            size="lg"
            className="mt-8 text-base font-semibold px-8 transition-all duration-200"
            style={{ background: 'transparent', border: '2px solid var(--color-accent)', color: 'var(--color-accent)' }}
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
      </div>

      {/* Scroll arrow */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        style={{ animation: 'bounce 2.5s ease-in-out infinite', opacity: mounted ? 1 : 0, transition: 'opacity 1s ease 1s' }}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </div>
    </section>
  )
}
