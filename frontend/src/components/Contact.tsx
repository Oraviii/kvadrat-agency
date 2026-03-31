import { useState, FormEvent } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import SectionDivider from '@/components/SectionDivider'

export default function Contact() {
  const [name, setName]       = useState('')
  const [contact, setContact] = useState('')
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError]     = useState<string | null>(null)

  const titleRef    = useScrollReveal<HTMLHeadingElement>()
  const subtitleRef = useScrollReveal<HTMLParagraphElement>()
  const formRef     = useScrollReveal<HTMLFormElement>()

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, contact, message: message || null }),
      })
      if (res.status === 201) setSuccess(true)
      else setError('Что-то пошло не так. Попробуйте ещё раз.')
    } catch {
      setError('Что-то пошло не так. Попробуйте ещё раз.')
    } finally {
      setLoading(false)
    }
  }

  const inputStyle = { backgroundColor: 'rgba(32,39,111,0.7)', border: '1px solid rgba(5,227,236,0.15)', color: 'white' }

  return (
    <>
      <SectionDivider label="Контакты" />
      <section id="contacts" className="py-14 px-4 sm:px-6" style={{ backgroundColor: 'rgba(15,21,53,0.86)' }}>
        <div className="max-w-lg mx-auto text-center">
          <h2 ref={titleRef} className="fade-up text-2xl sm:text-3xl font-bold text-white">Обсудим ваш проект?</h2>
          <p ref={subtitleRef} className="fade-up text-gray-300 mt-3 text-base sm:text-lg">Оставьте заявку — свяжемся в течение часа</p>

          {success ? (
            <div className="mt-10 flex flex-col items-center gap-4">
              <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
                <circle cx="28" cy="28" r="27" stroke="var(--color-accent)" strokeWidth="2" />
                <path d="M18 28l7 7 13-14" stroke="var(--color-accent)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <p className="text-white text-xl font-medium">Спасибо! Свяжемся с вами в ближайшее время.</p>
            </div>
          ) : (
            <form ref={formRef} onSubmit={handleSubmit} className="fade-up mt-8 flex flex-col gap-3 text-left">
              <Input
                placeholder="Ваше имя"
                required
                value={name}
                onChange={e => setName(e.target.value)}
                style={inputStyle}
                className="placeholder:text-gray-500 focus-visible:ring-1 focus-visible:ring-accent"
              />
              <Input
                placeholder="Телефон или Email"
                required
                value={contact}
                onChange={e => setContact(e.target.value)}
                style={inputStyle}
                className="placeholder:text-gray-500 focus-visible:ring-1 focus-visible:ring-accent"
              />
              <Textarea
                placeholder="Расскажите о проекте"
                rows={4}
                value={message}
                onChange={e => setMessage(e.target.value)}
                style={inputStyle}
                className="placeholder:text-gray-500 focus-visible:ring-1 focus-visible:ring-accent resize-none"
              />
              {error && <p className="text-red-400 text-sm">{error}</p>}
              <Button
                type="submit"
                disabled={loading}
                className="w-full font-semibold text-base h-11 mt-1 transition-all duration-200"
                style={{ backgroundColor: 'var(--color-accent)', color: 'var(--color-dark)' }}
                onMouseEnter={e => { if (!loading) (e.currentTarget as HTMLButtonElement).style.backgroundColor = '#04cdd6' }}
                onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.backgroundColor = 'var(--color-accent)' }}
              >
                {loading ? (
                  <span className="flex items-center gap-2">
                    <svg className="animate-spin" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
                    </svg>
                    Отправка...
                  </span>
                ) : 'Отправить заявку'}
              </Button>
            </form>
          )}
        </div>
      </section>
    </>
  )
}
