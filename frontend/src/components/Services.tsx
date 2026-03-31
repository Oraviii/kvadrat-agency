import { useEffect, useRef } from 'react'
import { Card } from '@/components/ui/card'

const services = [
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="var(--color-accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M36 20c0 8.837-7.163 16-16 16S4 28.837 4 20 11.163 4 20 4s16 7.163 16 16z" />
        <path d="M14 16h12M14 20h8M14 24h10" />
        <circle cx="30" cy="32" r="6" fill="var(--color-dark)" stroke="var(--color-accent)" strokeWidth="1.5" />
        <path d="M27 32l2 2 4-3" strokeWidth="1.5" />
      </svg>
    ),
    title: 'Ведение соцсетей',
    description: 'Разработаем цепляющий контент и мощную стратегию продвижения, чтобы превратить ваши социальные сети из просто красивой витрины в стабильный генератор лояльных подписчиков и реальных продаж.',
  },
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="var(--color-accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
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
    description: 'Настроим точечную таргетированную рекламу, которая безошибочно найдет вашу идеальную аудиторию и обеспечит бизнес стабильным потоком горячих заявок, загрузив ваш отдел продаж реальными клиентами.',
  },
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="var(--color-accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 4l2.5 7.5H30l-6.5 4.5 2.5 7.5L20 19l-6 4.5 2.5-7.5L10 11.5h7.5L20 4z" />
        <path d="M8 30c4 2 8 3 12 3s8-1 12-3" />
        <path d="M12 35h16" />
      </svg>
    ),
    title: 'Разработка фирменного стиля',
    description: 'Упакуем ваш бизнес в сильный и запоминающийся фирменный стиль, который с первого взгляда вызовет доверие аудитории, подчеркнет статус компании и навсегда выделит бренд на фоне конкурентов.',
  },
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="var(--color-accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="8" width="32" height="22" rx="3" />
        <line x1="14" y1="34" x2="26" y2="34" />
        <line x1="20" y1="30" x2="20" y2="34" />
        <path d="M13 20l4 4 10-8" />
      </svg>
    ),
    title: 'Создание сайтов на Tilda, 1С-Битрикс',
    description: 'Создадим под ключ уникальный и адаптивный сайт, который стильно подчеркнет индивидуальность вашего бизнеса и превратит посетителей в реальных клиентов с конверсией от 10%.',
  },
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="var(--color-accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="18" cy="18" r="12" />
        <line x1="27" y1="27" x2="36" y2="36" />
        <path d="M18 10v8l5 3" />
      </svg>
    ),
    title: 'Продвижение на Яндекс',
    description: 'Запустим эффективную контекстную рекламу, которая выведет вас на первые строки поиска и перехватит самых горячих клиентов ровно в тот момент, когда они уже готовы совершить покупку.',
  },
]

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null)
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            cardRefs.current.forEach((card, i) => {
              if (card) {
                setTimeout(() => card.classList.add('visible'), i * 100)
              }
            })
            observer.disconnect()
          }
        })
      },
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="services" ref={sectionRef} className="py-24 px-6" style={{ backgroundColor: 'var(--color-dark)' }}>
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-white text-center mb-12">Наши услуги</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <div
              key={i}
              ref={el => { cardRefs.current[i] = el }}
              className="service-card"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <Card
                className="p-6 rounded-xl border-0 border-t-2 h-full transition-transform duration-300 hover:scale-[1.03]"
                style={{
                  backgroundColor: 'rgba(32,39,111,0.6)',
                  borderTopColor: 'var(--color-accent)',
                  borderTopWidth: 2,
                  borderTopStyle: 'solid',
                }}
              >
                <div>{service.icon}</div>
                <h3 className="text-white font-semibold text-lg mt-4">{service.title}</h3>
                <p className="text-gray-300 text-sm mt-2 leading-relaxed">{service.description}</p>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
