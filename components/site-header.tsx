'use client'

import { useState } from 'react'
import { usePathname } from 'next/navigation'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const navigation = [['Nosotros', '/nosotros'], ['Proyectos', '/proyectos'], ['Hualkana', '/hualkana'], ['Trayectoria', '/trayectoria'], ['Aliados', '/aliados'], ['Contacto', '/contacto']]

export function Wordmark() {
  return <a className="wordmark" href="/" aria-label="Eco Motors UNI — inicio"><span className="wordmark-top">ECO<span className="text-foreground">/</span>MOTORS</span><span className="wordmark-bottom">UNI <span>INGENIERÍA EN MOVIMIENTO</span></span></a>
}

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()
  return <header className="site-header">
    <div className="container-shell header-inner">
      <Wordmark />
      <nav className="desktop-nav" aria-label="Navegación principal">{navigation.map(([label, href]) => <a key={href} href={href} aria-current={pathname === href ? 'page' : undefined}>{label}</a>)}</nav>
      <a href="/patrocinio" className="action action-primary header-cta">Patrocina al equipo <ArrowUpRight size={16} /></a>
      <Button className="mobile-menu-button" variant="ghost" size="icon-lg" aria-label={open ? 'Cerrar menú' : 'Abrir menú'} aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</Button>
    </div>
    <nav id="mobile-navigation" aria-label="Navegación móvil" hidden={!open} className={cn('mobile-nav', open && 'is-open')} onKeyDown={event => { if (event.key === 'Escape') { setOpen(false); document.querySelector<HTMLButtonElement>('.mobile-menu-button')?.focus() } }}>{navigation.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}<ArrowUpRight size={17} /></a>)}<a href="/patrocinio" onClick={() => setOpen(false)} className="text-foreground">Patrocina al equipo <ArrowUpRight size={17} /></a></nav>
  </header>
}
