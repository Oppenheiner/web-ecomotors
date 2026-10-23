import Image from 'next/image'
import { ArrowUpRight, Newspaper } from 'lucide-react'
import { SectionLabel } from '@/components/about'
import { press, sources, timeline } from '@/lib/site-content'

export function History() {
  return <section id="trayectoria" className="history-section section-pad"><div className="container-shell">
    <SectionLabel number="04">NUESTRO CAMINO</SectionLabel>
    <div className="section-intro"><h2>LA INGENIERÍA SE DEMUESTRA.<br /><span>EL CAMINO SE CONSTRUYE.</span></h2><p>Cada prototipo abre una nueva etapa.<br />Cada desafío nos enseña a ir más allá.</p></div>
    <div className="timeline">{timeline.map(item => <article key={item.year}><div className="timeline-year">{item.year}<span /></div><p className="eyebrow">{item.type}</p><h3>{item.title}</h3><p>{item.description}</p><a href={item.source} className="text-link" target="_blank" rel="noopener noreferrer">Ver fuente <ArrowUpRight size={15} /></a></article>)}</div>
    <div className="competition-record"><div><span className="eyebrow text-foreground">PARTICIPACIONES EN COMPETENCIAS</span><h3>SHELL ECO-MARATHON BRASIL</h3><p>Un entorno internacional para poner a prueba nuestra ingeniería.</p></div><div className="competition-editions">{['2024', '2025', '2026'].map(year => <a href={sources.andina2026} key={year} target="_blank" rel="noopener noreferrer"><strong>{year}</strong><span>Inspecciones técnicas superadas</span><ArrowUpRight size={17} /></a>)}</div></div>
    <p className="history-note">Las participaciones e inspecciones técnicas son hitos de validación, no premios ni resultados de eficiencia. Fuente: Agencia Andina. No se incluyen reconocimientos sin documentación verificable.</p>
    <div className="press-heading"><h3>INGENIERÍA QUE SE HACE NOTICIA.</h3><span className="eyebrow">EN LOS MEDIOS <ArrowUpRight size={16} /></span></div>
    <div className="press-grid">{press.map(item => <a className="press-card" key={item.href} href={item.href} target="_blank" rel="noopener noreferrer"><div className="press-image">{item.image ? <Image src={item.image} alt="" fill sizes="(max-width: 700px) 100vw, 33vw" /> : <div className="press-editorial"><Newspaper size={36} strokeWidth={1} /><span>DEL CONOCIMIENTO<br />A LA PISTA.</span></div>}<span className="press-arrow"><ArrowUpRight size={20} /></span></div><div className="press-meta"><span>{item.outlet}</span><time>{item.date}</time></div><h4>{item.title}</h4><span className="text-link">Leer publicación <ArrowUpRight size={15} /></span></a>)}</div>
  </div></section>
}
