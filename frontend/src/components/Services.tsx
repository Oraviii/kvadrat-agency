import { useEffect, useRef, useState } from 'react'
import { Card } from '@/components/ui/card'
import SectionDivider from '@/components/SectionDivider'
import ServiceModal from '@/components/ServiceModal'

const services = [
  {
    icon: (
      <svg width="38" height="38" viewBox="0 0 40 40" fill="none" stroke="var(--color-accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M36 20c0 8.837-7.163 16-16 16S4 28.837 4 20 11.163 4 20 4s16 7.163 16 16z" />
        <path d="M14 16h12M14 20h8M14 24h10" />
        <circle cx="30" cy="32" r="6" fill="var(--color-dark)" stroke="var(--color-accent)" strokeWidth="1.5" />
        <path d="M27 32l2 2 4-3" strokeWidth="1.5" />
      </svg>
    ),
    title: 'Ведение соцсетей',
    description: 'Разработаем цепляющий контент и мощную стратегию продвижения, чтобы превратить ваши социальные сети в стабильный генератор лояльных подписчиков и реальных продаж.',
  },
  {
    icon: (
      <svg width="38" height="38" viewBox="0 0 40 40" fill="none" stroke="var(--color-accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="20" cy="20" r="16" />
        <circle cx="20" cy="20" r="8" />
        <circle cx="20" cy="20" r="3" fill="var(--color-accent)" stroke="none" />
        <line x1="20" y1="4" x2="20" y2="12" />
        <line x1="20" y1="28" x2="20" y2="36" />
        <line x1="4" y1="20" x2="12" y2="20" />
        <line x1="28" y1="20" x2="36" y2="20" />
      </svg>
    ),
    title: 'Таргетированная реклама',
    description: 'Настроим точечную рекламу, которая найдёт вашу идеальную аудиторию и обеспечит бизнес стабильным потоком горячих заявок, загрузив ваш отдел продаж реальными клиентами.',
  },
  {
    icon: (
      <svg width="38" height="38" viewBox="0 0 40 40" fill="none" stroke="var(--color-accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 4l2.5 7.5H30l-6.5 4.5 2.5 7.5L20 19l-6 4.5 2.5-7.5L10 11.5h7.5L20 4z" />
        <path d="M8 30c4 2 8 3 12 3s8-1 12-3" />
        <path d="M12 35h16" />
      </svg>
    ),
    title: 'Разработка фирменного стиля',
    description: 'Упакуем ваш бизнес в сильный и запоминающийся фирменный стиль, который с первого взгляда вызовет доверие и навсегда выделит бренд на фоне конкурентов.',
  },
  {
    icon: (
      <svg width="38" height="38" viewBox="0 0 40 40" fill="none" stroke="var(--color-accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="8" width="32" height="22" rx="3" />
        <line x1="14" y1="34" x2="26" y2="34" />
        <line x1="20" y1="30" x2="20" y2="34" />
        <path d="M13 20l4 4 10-8" />
      </svg>
    ),
    title: 'Создание сайтов',
    description: 'Создадим под ключ уникальный и адаптивный сайт на Tilda или 1С-Битрикс, который превратит посетителей в реальных клиентов с конверсией от 10%.',
  },
  {
    icon: (
      <svg width="38" height="38" viewBox="0 0 40 40" fill="none" stroke="var(--color-accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="18" cy="18" r="12" />
        <line x1="27" y1="27" x2="36" y2="36" />
        <path d="M18 10v8l5 3" />
      </svg>
    ),
    title: 'Продвижение на Яндекс',
    description: 'Запустим контекстную рекламу, которая выведет вас на первые строки поиска и перехватит горячих клиентов в момент, когда они уже готовы совершить покупку.',
  },
]

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null)
  const cardRefs   = useRef<(HTMLDivElement | null)[]>([])
  const [modal, setModal] = useState<string | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting) {
          cardRefs.current.forEach((card, i) => {
            if (card) setTimeout(() => card.classList.add('visible'), i * 100)
          })
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <SectionDivider label="Услуги" />
      <section
        id="services"
        ref={sectionRef}
        className="py-14 px-4 sm:px-6"
        style={{ backgroundColor: 'rgba(10,15,45,0.82)' }}
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-10">Наши услуги</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {services.map((s, i) => (
              <div
                key={i}
                ref={el => { cardRefs.current[i] = el }}
                className="service-card"
              >
                <Card
                  onClick={() => setModal(s.title)}
                  className="p-5 rounded-xl border-0 h-full cursor-pointer group"
                  style={{
                    backgroundColor: 'rgba(32,39,111,0.55)',
                    borderTop: '2px solid var(--color-accent)',
                    transition: 'transform 0.25s ease, box-shadow 0.25s ease, background-color 0.25s ease',
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.transform = 'translateY(-4px) scale(1.02)'
                    ;(e.currentTarget as HTMLElement).style.boxShadow = '0 8px 32px rgba(5,227,236,0.15)'
                    ;(e.currentTarget as HTMLElement).style.backgroundColor = 'rgba(32,39,111,0.75)'
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.transform = 'none'
                    ;(e.currentTarget as HTMLElement).style.boxShadow = 'none'
                    ;(e.currentTarget as HTMLElement).style.backgroundColor = 'rgba(32,39,111,0.55)'
                  }}
                >
                  <div>{s.icon}</div>
                  <h3 className="text-white font-semibold text-base mt-3">{s.title}</h3>
                  <p className="text-gray-300 text-sm mt-2 leading-relaxed">{s.description}</p>
                  <p
                    className="text-xs font-semibold mt-3 flex items-center gap-1 transition-opacity group-hover:opacity-100 opacity-60"
                    style={{ color: 'var(--color-accent)' }}
                  >
                    Оставить заявку
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </p>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {modal && <ServiceModal service={modal} onClose={() => setModal(null)} />}
    </>
  )
}
