import { useEffect, useRef } from 'react'

/**
 * Adds class "visible" to the returned ref element (and optionally its
 * children with class "fade-up") when it enters the viewport.
 * Stagger delay is applied to children via their --delay CSS var.
 */
export function useScrollReveal<T extends HTMLElement>(staggerChildren = false) {
  const ref = useRef<T>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return

        if (staggerChildren) {
          const children = Array.from(el.querySelectorAll<HTMLElement>('.fade-up'))
          children.forEach((child, i) => {
            setTimeout(() => child.classList.add('visible'), i * 120)
          })
        } else {
          el.classList.add('visible')
        }

        observer.disconnect()
      },
      { threshold: 0.1 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [staggerChildren])

  return ref
}
