import { useState, FormEvent, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

interface Props {
  service: string
  onClose: () => void
}

export default function ServiceModal({ service, onClose }: Props) {
  const [name, setName]       = useState('')
  const [contact, setContact] = useState('')
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError]     = useState<string | null>(null)

  // close on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [onClose])

  // lock body scroll
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [])

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, contact, message: `[${service}] ${message}`.trim() }),
      })
      if (res.status === 201) setSuccess(true)
      else setError('Что-то пошло не так. Попробуйте ещё раз.')
    } catch {
      setError('Что-то пошло не так. Попробуйте ещё раз.')
    } finally {
      setLoading(false)
    }
  }

  const inputStyle = {
    backgroundColor: 'rgba(32,39,111,0.8)',
    border: '1px solid rgba(5,227,236,0.2)',
    color: 'white',
  }

  return (
    <div className="modal-overlay" onClick={e => { if (e.target === e.currentTarget) onClose() }}>
      <div
        className="modal-card w-full max-w-md rounded-2xl p-8 relative"
        style={{ backgroundColor: '#0f1535', border: '1px solid rgba(5,227,236,0.15)' }}
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full transition-colors"
          style={{ color: 'rgba(255,255,255,0.5)' }}
          onMouseEnter={e => (e.currentTarget.style.color = 'white')}
          onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.5)')}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        {success ? (
          <div className="flex flex-col items-center gap-4 py-6 text-center">
            <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
              <circle cx="28" cy="28" r="27" stroke="var(--color-accent)" strokeWidth="2" />
              <path d="M18 28l7 7 13-14" stroke="var(--color-accent)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <p className="text-white text-lg font-medium">Заявка отправлена!</p>
            <p className="text-gray-400 text-sm">Свяжемся с вами в ближайшее время.</p>
            <Button
              onClick={onClose}
              className="mt-2 font-semibold"
              style={{ backgroundColor: 'var(--color-accent)', color: 'var(--color-dark)' }}
            >
              Закрыть
            </Button>
          </div>
        ) : (
          <>
            <div className="mb-6">
              <p className="text-gray-400 text-xs font-semibold tracking-widest uppercase mb-1">Интересует услуга</p>
              <h3 className="text-white text-xl font-bold">{service}</h3>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
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
                placeholder="Расскажите о проекте (необязательно)"
                rows={3}
                value={message}
                onChange={e => setMessage(e.target.value)}
                style={inputStyle}
                className="placeholder:text-gray-500 focus-visible:ring-1 focus-visible:ring-accent resize-none"
              />
              {error && <p className="text-red-400 text-sm">{error}</p>}
              <Button
                type="submit"
                disabled={loading}
                className="w-full font-semibold h-11 mt-1 transition-all duration-200"
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
          </>
        )}
      </div>
    </div>
  )
}
