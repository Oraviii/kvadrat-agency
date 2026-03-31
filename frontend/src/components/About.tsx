import { Button } from '@/components/ui/button'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import SectionDivider from '@/components/SectionDivider'

const stats = [
  { value: '5+', label: 'лет на рынке' },
  { value: '120+', label: 'проектов' },
  { value: '40+', label: 'клиентов' },
  { value: '98%', label: 'довольных клиентов' },
]

const clients = [
  'Смотри', 'FitLife', 'СтройДом', 'МедКлиник', 'АвтоПрестиж', 'TechStart', 'РетейлПро', 'ЮрЦентр',
  'Смотри', 'FitLife', 'СтройДом', 'МедКлиник', 'АвтоПрестиж', 'TechStart', 'РетейлПро', 'ЮрЦентр',
]

export default function About() {
  const titleRef    = useScrollReveal<HTMLHeadingElement>()
  const subtitleRef = useScrollReveal<HTMLParagraphElement>()
  const statsRef    = useScrollReveal<HTMLDivElement>(true)
  const marqueeRef  = useScrollReveal<HTMLDivElement>()
  const founderRef  = useScrollReveal<HTMLDivElement>()
  const bottomRef   = useScrollReveal<HTMLDivElement>()

  const scrollToContacts = () => document.getElementById('contacts')?.scrollIntoView({ behavior: 'smooth' })

  return (
    <>
      <SectionDivider label="О нас" />
      <section id="about" className="py-14 px-4 sm:px-6" style={{ backgroundColor: 'rgba(10,15,45,0.82)' }}>
        <div className="max-w-5xl mx-auto">
          <h2 ref={titleRef} className="fade-up text-2xl sm:text-3xl font-bold text-white text-center">О нас</h2>
          <p ref={subtitleRef} className="fade-up text-gray-300 text-base sm:text-lg text-center max-w-2xl mx-auto mt-3 leading-relaxed">
            Мы помогаем бизнесу увеличивать продажи и расти с помощью инструментов интернет-рекламы и маркетинга.
          </p>

          {/* Stats */}
          <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-10">
            {stats.map((s, i) => (
              <div
                key={i}
                className="fade-up rounded-xl p-5 text-center"
                style={{ backgroundColor: 'rgba(32,39,111,0.55)', border: '1px solid rgba(5,227,236,0.1)' }}
              >
                <div className="text-3xl sm:text-4xl font-bold" style={{ color: 'var(--color-accent)' }}>{s.value}</div>
                <div className="text-gray-300 text-xs sm:text-sm mt-1.5">{s.label}</div>
              </div>
            ))}
          </div>

          {/* Marquee */}
          <div ref={marqueeRef} className="fade-up mt-10 overflow-hidden">
            <div className="flex gap-3" style={{ animation: 'marquee 20s linear infinite', width: 'max-content' }}>
              {clients.map((name, i) => (
                <span
                  key={i}
                  className="text-white text-xs sm:text-sm px-3 py-1.5 rounded-full whitespace-nowrap flex-none"
                  style={{ backgroundColor: 'rgba(32,39,111,0.6)', border: '1px solid rgba(5,227,236,0.1)' }}
                >
                  {name}
                </span>
              ))}
            </div>
          </div>

          {/* Founder card */}
          <div ref={founderRef} className="fade-up mt-10 max-w-xs mx-auto rounded-xl p-7 flex flex-col items-center text-center"
            style={{ backgroundColor: 'rgba(32,39,111,0.55)', border: '1px solid rgba(5,227,236,0.1)' }}>
            <div
              className="w-18 h-18 rounded-full flex items-center justify-center text-xl font-bold"
              style={{ width: 72, height: 72, backgroundColor: 'var(--color-accent)', color: 'var(--color-dark)' }}
            >
              ЛА
            </div>
            <div className="text-white font-semibold text-lg mt-3">Леонид Антонов</div>
            <div className="text-gray-400 text-sm mt-1">Руководитель агентства</div>
          </div>

          {/* VK + CTA */}
          <div ref={bottomRef} className="fade-up flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
            <a
              href="https://vk.com/kvadrat_agency"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-medium hover:underline"
              style={{ color: 'var(--color-accent)' }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M15.684 0H8.316C1.592 0 0 1.592 0 8.316v7.368C0 22.408 1.592 24 8.316 24h7.368C22.408 24 24 22.408 24 15.684V8.316C24 1.592 22.408 0 15.684 0zm3.692 17.123h-1.744c-.66 0-.862-.523-2.049-1.712-1.033-1.01-1.49-.848-1.49.494v1.218c0 .375-.12.598-1.1.598-1.616 0-3.41-.98-4.674-2.808-1.896-2.668-2.418-4.668-2.418-4.668s-.054-.124.003-.195c.065-.08.27-.097.27-.097h1.764c.254 0 .347.143.444.38 0 0 .91 2.617 2.178 3.965.43.465.822.466 1.015.14.213-.35.225-2.086.225-2.086s.014-1.18-.558-1.37c-.27-.09.003-.33.34-.38.434-.065 1.228-.086 1.935.01.645.087.621.483.621 1.543v1.36c0 .374.16.42.283.42.21 0 .517-.21 1.146-.88 1.286-1.392 2.2-3.525 2.2-3.525.07-.16.21-.3.47-.3h1.744c.524 0 .638.283.524.67-.208.826-2.186 3.73-2.186 3.73-.174.283-.24.41 0 .734.175.24.745.74 1.126 1.188.698.8 1.235 1.473 1.378 1.94.138.457-.075.69-.548.69z"/>
              </svg>
              Мы ВКонтакте
            </a>
            <Button
              onClick={scrollToContacts}
              className="font-semibold transition-all duration-200"
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
              Связаться с нами
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
