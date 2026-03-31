import { useRef } from 'react'
import { Badge } from '@/components/ui/badge'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import SectionDivider from '@/components/SectionDivider'

const cases = [
  {
    tag: 'SMM',
    title: 'Ведение сообщества ВКонтакте для застройщика',
    description: 'Разработали визуальный стиль, контент-план и запустили регулярное ведение группы. Рост аудитории и вовлечённости за 3 месяца.',
    stats: ['+47% охват', '+120% вовлечённость'],
    href: 'https://vk.com/@kvadrat_agency-keis-po-oformleniu-i-vedeniu-soobschestva-vkontakte-dlya-zas',
    imgUrl: 'https://sun9-13.userapi.com/impf/c857428/v857428545/1d9f49/gXNBj5YTGOA.jpg?size=1280x720&quality=96&sign=7e219ee5b5fd079745049553bab7fd91&type=album',
    gradient: 'linear-gradient(135deg, #1a237e 0%, #283593 60%, #3949ab 100%)',
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <rect x="4" y="4" width="40" height="40" rx="10" fill="#4a76a8" fillOpacity="0.3" />
        <path d="M8 24c0 8.837 7.163 16 16 16s16-7.163 16-16S32.837 8 24 8 8 15.163 8 24z" stroke="white" strokeOpacity="0.6" strokeWidth="1.5" />
        <path fill="white" fillOpacity="0.9" d="M25.5 17h-3v8h3v-8zm-1.5-3a1.5 1.5 0 100 3 1.5 1.5 0 000-3z"/>
        <path fill="white" fillOpacity="0.7" d="M29 22l-4 3 4 3v-6z"/>
        <rect x="10" y="34" width="28" height="2" rx="1" fill="white" fillOpacity="0.2"/>
        <rect x="15" y="31" width="18" height="2" rx="1" fill="white" fillOpacity="0.15"/>
      </svg>
    ),
  },
  {
    tag: 'Веб-разработка',
    title: 'Обновление сайта клиники Смотри',
    description: 'Полностью переработали дизайн и структуру сайта. Современный адаптивный дизайн и улучшенная конверсия.',
    stats: ['+35% конверсия', '−40% отказы'],
    href: 'https://vk.com/@kvadrat_agency-kak-my-obnovili-sait-oftalmologicheskoi-kliniki-smotri',
    imgUrl: '',
    gradient: 'linear-gradient(135deg, #004d40 0%, #00695c 60%, #00897b 100%)',
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <ellipse cx="24" cy="24" rx="20" ry="12" stroke="white" strokeOpacity="0.6" strokeWidth="1.5" />
        <circle cx="24" cy="24" r="6" stroke="white" strokeOpacity="0.9" strokeWidth="1.5" />
        <circle cx="24" cy="24" r="3" fill="white" fillOpacity="0.7" />
        <path d="M8 24c4-8 12-12 16-12s12 4 16 12" stroke="white" strokeOpacity="0.3" strokeWidth="1" />
        <rect x="4" y="4" width="40" height="40" rx="10" fill="#00bcd4" fillOpacity="0.15" />
      </svg>
    ),
  },
  {
    tag: 'Веб-разработка',
    title: 'Сайт для сети фитнес-клубов',
    description: 'Создали красивый и удобный сайт с интеграцией расписания, онлайн-записью и мощным визуальным оформлением.',
    stats: ['+60% заявки', '4.9★ оценка'],
    href: 'https://vk.com/@kvadrat_agency-kak-my-sozdali-krasivyi-i-udobnyi-sait-dlya-seti-fitnes-klub',
    imgUrl: '',
    gradient: 'linear-gradient(135deg, #b71c1c 0%, #c62828 60%, #e53935 100%)',
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <rect x="4" y="4" width="40" height="40" rx="10" fill="#ff5722" fillOpacity="0.2" />
        <path d="M10 24h4v-8h4v16h4V16h4v20h4V20h4v4h4" stroke="white" strokeOpacity="0.8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="38" cy="24" r="2" fill="white" fillOpacity="0.6" />
      </svg>
    ),
  },
]

export default function Cases() {
  const scrollRef  = useRef<HTMLDivElement>(null)
  const titleRef   = useScrollReveal<HTMLHeadingElement>()
  const wrapperRef = useScrollReveal<HTMLDivElement>(true)

  const scroll = (dir: 'left' | 'right') => {
    if (!scrollRef.current) return
    scrollRef.current.scrollBy({ left: dir === 'right' ? 420 : -420, behavior: 'smooth' })
  }

  return (
    <>
      <SectionDivider label="Кейсы" />
      <section id="cases" className="py-14 px-4 sm:px-6" style={{ backgroundColor: 'rgba(10,15,45,0.80)' }}>
        <div className="max-w-7xl mx-auto">
          <h2 ref={titleRef} className="fade-up text-2xl sm:text-3xl font-bold text-white text-center mb-10">
            Наши кейсы
          </h2>

          <div ref={wrapperRef} className="relative">
            {/* Left arrow */}
            <button
              onClick={() => scroll('left')}
              className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-9 h-9 items-center justify-center rounded-full transition-all duration-200"
              style={{ backgroundColor: 'rgba(32,39,111,0.8)', border: '1px solid rgba(5,227,236,0.3)' }}
              onMouseEnter={e => (e.currentTarget.style.borderColor = 'var(--color-accent)')}
              onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(5,227,236,0.3)')}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="2" strokeLinecap="round">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>

            <div
              ref={scrollRef}
              className="flex flex-row overflow-x-auto gap-4 sm:gap-5 pb-4 snap-x snap-mandatory scrollbar-hide"
            >
              {cases.map((c, i) => (
                <div
                  key={i}
                  className="fade-up flex-none snap-start rounded-xl overflow-hidden flex flex-col"
                  style={{
                    minWidth: 'min(300px, 85vw)',
                    width: 'clamp(300px, 38vw, 400px)',
                    backgroundColor: 'rgba(32,39,111,0.6)',
                    border: '1px solid rgba(5,227,236,0.1)',
                  }}
                >
                  {/* Case image / visual */}
                  <div className="relative h-44 overflow-hidden" style={{ background: c.gradient }}>
                    {c.imgUrl ? (
                      <img
                        src={c.imgUrl}
                        alt={c.title}
                        className="w-full h-full object-cover opacity-60"
                        onError={e => { (e.currentTarget as HTMLImageElement).style.display = 'none' }}
                      />
                    ) : null}
                    <div className="absolute inset-0 flex items-center justify-center">
                      {c.icon}
                    </div>
                    <Badge
                      className="absolute top-3 right-3 text-xs font-semibold px-2.5 py-0.5"
                      style={{ backgroundColor: 'var(--color-accent)', color: 'var(--color-dark)', border: 'none' }}
                    >
                      {c.tag}
                    </Badge>
                  </div>

                  {/* Body */}
                  <div className="p-5 flex flex-col flex-1">
                    <h3 className="text-white font-semibold text-base leading-snug">{c.title}</h3>
                    <p className="text-gray-300 text-sm mt-2 leading-relaxed flex-1">{c.description}</p>
                    <div className="flex gap-4 mt-3">
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
                      className="mt-3 text-sm font-medium transition-opacity hover:opacity-70"
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
              className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-9 h-9 items-center justify-center rounded-full transition-all duration-200"
              style={{ backgroundColor: 'rgba(32,39,111,0.8)', border: '1px solid rgba(5,227,236,0.3)' }}
              onMouseEnter={e => (e.currentTarget.style.borderColor = 'var(--color-accent)')}
              onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(5,227,236,0.3)')}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="2" strokeLinecap="round">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          </div>
        </div>
      </section>
    </>
  )
}
