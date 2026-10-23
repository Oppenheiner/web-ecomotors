'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

export function PageMotion() {
  const pathname = usePathname()

  useEffect(() => {
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)')
    const elements = Array.from(document.querySelectorAll<HTMLElement>(
      '.section-intro, .capability, .leadership-card, .project-card, .timeline article, .press-card, .team-photo, .organization, .collaboration-grid article, .contact-form, .editorial-copy, .prototype-layout, .inner-page-next',
    ))
    const reset = () => elements.forEach(element => {
      element.classList.remove('motion-pending', 'motion-visible')
      element.style.removeProperty('--reveal-delay')
    })
    if (preference.matches || !('IntersectionObserver' in window)) return

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return
        entry.target.classList.add('motion-visible')
        observer.unobserve(entry.target)
      })
    }, { threshold: 0.08, rootMargin: '0px 0px -24px 0px' })

    elements.forEach(element => {
      if (element.getBoundingClientRect().top < window.innerHeight) return
      const index = Array.from(element.parentElement?.children ?? []).indexOf(element)
      element.style.setProperty('--reveal-delay', `${Math.min(index, 3) * 70}ms`)
      element.classList.add('motion-pending')
      observer.observe(element)
    })
    const handlePreference = () => {
      observer.disconnect()
      reset()
    }
    preference.addEventListener('change', handlePreference)
    return () => {
      observer.disconnect()
      preference.removeEventListener('change', handlePreference)
      reset()
    }
  }, [pathname])

  return null
}
