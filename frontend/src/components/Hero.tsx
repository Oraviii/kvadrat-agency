import { Button } from '@/components/ui/button'

export default function Hero() {
  const scrollToContacts = () => {
    document.getElementById('contacts')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #0a0f2d 0%, #20276f 40%, #05e3ec 100%)',
        backgroundSize: '400% 400%',
        animation: 'gradientShift 10s ease-in-out infinite',
      }}
    >
      {/* Floating shapes */}
      <div
        className="absolute"
        style={{
          top: '12%', left: '8%',
          width: 80, height: 80,
          border: '1px solid var(--color-accent)',
          borderRadius: 8,
          opacity: 0.08,
          animation: 'float1 7s ease-in-out infinite',
        }}
      />
      <div
        className="absolute"
        style={{
          top: '20%', right: '12%',
          width: 120, height: 60,
          backgroundColor: 'var(--color-primary)',
          borderRadius: 8,
          opacity: 0.12,
          animation: 'float2 9s ease-in-out infinite',
        }}
      />
      <div
        className="absolute"
        style={{
          bottom: '25%', left: '15%',
          width: 60, height: 60,
          border: '1px solid var(--color-accent)',
          borderRadius: 4,
          opacity: 0.07,
          animation: 'float3 11s ease-in-out infinite',
        }}
      />
      <div
        className="absolute"
        style={{
          bottom: '20%', right: '8%',
          width: 100, height: 100,
          backgroundColor: 'var(--color-primary)',
          borderRadius: 12,
          opacity: 0.1,
          animation: 'float4 8s ease-in-out infinite',
        }}
      />
      <div
        className="absolute"
        style={{
          top: '60%', left: '50%',
          width: 150, height: 40,
          border: '1px solid var(--color-accent)',
          borderRadius: 4,
          opacity: 0.05,
          animation: 'float5 13s ease-in-out infinite',
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight">
          Агентство Квадрат —<br />
          <span style={{ color: 'var(--color-accent)' }}>digital-агентство</span> полного цикла
        </h1>
        <p className="text-gray-300 text-xl mt-6 max-w-2xl mx-auto">
          Главная ценность — наши клиенты.
        </p>
        <Button
          onClick={scrollToContacts}
          size="lg"
          className="mt-10 text-base font-semibold px-8 transition-all duration-200"
          style={{
            background: 'transparent',
            border: '2px solid var(--color-accent)',
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

      {/* Scroll arrow */}
      <div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        style={{ animation: 'bounce 2s ease-in-out infinite' }}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </div>
    </section>
  )
}
