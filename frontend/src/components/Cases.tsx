import { useRef } from 'react'
import { Badge } from '@/components/ui/badge'

const cases = [
  {
    tag: 'SMM',
    title: 'Ведение сообщества ВКонтакте для застройщика',
    description: 'Разработали визуальный стиль, контент-план и запустили регулярное ведение группы. Рост аудитории и вовлечённости за 3 месяца.',
    stats: ['+47% охват', '+120% вовлечённость'],
    href: 'https://vk.com/@kvadrat_agency-keis-po-oformleniu-i-vedeniu-soobschestva-vkontakte-dlya-zas',
  },
  {
    tag: 'Веб-разработка',
    title: 'Обновление сайта офтальмологической клиники Смотри',
    description: 'Полностью переработали дизайн и структуру сайта клиники. Современный адаптивный дизайн и улучшенная конверсия.',
    stats: ['+35% конверсия', '−40% отказы'],
    href: 'https://vk.com/@kvadrat_agency-kak-my-obnovili-sait-oftalmologicheskoi-kliniki-smotri',
  },
  {
    tag: 'Веб-разработка',
    title: 'Сайт для сети фитнес-клубов',
    description: 'Создали красивый и удобный сайт с интеграцией расписания, онлайн-записью и мощным визуальным оформлением.',
    stats: ['+60% заявки', '4.9★ оценка'],
    href: 'https://vk.com/@kvadrat_agency-kak-my-sozdali-krasivyi-i-udobnyi-sait-dlya-seti-fitnes-klub',
  },
]

export default function Cases() {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (dir: 'left' | 'right') => {
    if (!scrollRef.current) return
    const cardWidth = 420
    scrollRef.current.scrollBy({ left: dir === 'right' ? cardWidth : -cardWidth, behavior: 'smooth' })
  }

  return (
    <section id="cases" className="py-24 px-6" style={{ backgroundColor: 'var(--color-dark)' }}>
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-white text-center mb-12">Наши кейсы</h2>
        <div className="relative">
          {/* Left arrow */}
          <button
            onClick={() => scroll('left')}
            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-5 z-10 w-10 h-10 items-center justify-center rounded-full transition-all duration-200"
            style={{ backgroundColor: 'var(--color-primary)', border: '1px solid rgba(5,227,236,0.3)' }}
            onMouseEnter={e => (e.currentTarget.style.borderColor = 'var(--color-accent)')}
            onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(5,227,236,0.3)')}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="2" strokeLinecap="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          {/* Cards container */}
          <div
            ref={scrollRef}
            className="flex flex-row overflow-x-auto gap-6 pb-4 snap-x snap-mandatory scrollbar-hide"
          >
            {cases.map((c, i) => (
              <div
                key={i}
                className="flex-none snap-start rounded-xl overflow-hidden flex flex-col"
                style={{
                  minWidth: 320,
                  width: 'clamp(320px, 40vw, 420px)',
                  backgroundColor: 'var(--color-primary)',
                }}
              >
                {/* Image area */}
                <div
                  className="relative h-48"
                  style={{ background: 'linear-gradient(135deg, var(--color-dark) 0%, var(--color-primary) 100%)' }}
                >
                  <div className="absolute inset-0 flex items-center justify-center opacity-10">
                    <svg width="80" height="80" viewBox="0 0 28 28" fill="none">
                      <rect x="1" y="1" width="11" height="11" rx="2" stroke="var(--color-accent)" strokeWidth="1.5" />
                      <rect x="16" y="1" width="11" height="11" rx="2" stroke="var(--color-accent)" strokeWidth="1.5" />
                      <rect x="1" y="16" width="11" height="11" rx="2" stroke="var(--color-accent)" strokeWidth="1.5" />
                      <rect x="16" y="16" width="11" height="11" rx="2" stroke="var(--color-accent)" strokeWidth="1.5" />
                    </svg>
                  </div>
                  <Badge
                    className="absolute top-4 right-4 text-xs font-semibold px-3 py-1"
                    style={{ backgroundColor: 'var(--color-accent)', color: 'var(--color-dark)', border: 'none' }}
                  >
                    {c.tag}
                  </Badge>
                </div>
                {/* Body */}
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-white font-semibold text-lg leading-snug">{c.title}</h3>
                  <p className="text-gray-300 text-sm mt-2 leading-relaxed flex-1">{c.description}</p>
                  <div className="flex gap-4 mt-4">
                    {c.stats.map((stat, si) => (
                      <span key={si} className="font-bold text-sm" style={{ color: 'var(--color-accent)' }}>
                        {stat}
                      </span>
                    ))}
                  </div>
                  <a
                    href={c.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 text-sm font-medium transition-opacity hover:opacity-70"
                    style={{ color: 'var(--color-accent)' }}
                  >
                    Читать кейс →
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Right arrow */}
          <button
            onClick={() => scroll('right')}
            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-5 z-10 w-10 h-10 items-center justify-center rounded-full transition-all duration-200"
            style={{ backgroundColor: 'var(--color-primary)', border: '1px solid rgba(5,227,236,0.3)' }}
            onMouseEnter={e => (e.currentTarget.style.borderColor = 'var(--color-accent)')}
            onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(5,227,236,0.3)')}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="2" strokeLinecap="round">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}
