import Image from 'next/image'
import { ArrowDown, ArrowDownRight, ArrowRight, ArrowUpRight, MoveUpRight } from 'lucide-react'

export function Hero() {
  return <>
    <section className="hero" id="inicio" aria-labelledby="hero-title">
      <div className="hero-image"><Image src="/images/hualkana-3.webp" alt="Hualkana 3, el prototipo eléctrico real de Eco Motors UNI, en el campus universitario" fill priority sizes="(max-width: 700px) 100vw, 80vw" quality={90} /></div>
      <div className="hero-shade" />
      <div className="hero-grid" aria-hidden="true" />
      <div className="container-shell hero-content">
        <div className="eyebrow hero-eyebrow"><span className="live-dot" /> EL FUTURO SE DISEÑA. NOSOTROS LO CONSTRUIMOS.</div>
        <h1 id="hero-title">INGENIERÍA<br />PERUANA. MOVILIDAD<br /><span>SOSTENIBLE.</span></h1>
        <p className="hero-description">Somos Eco Motors UNI. Investigamos, diseñamos y construimos soluciones de movilidad eficiente. Del conocimiento al prototipo. De la idea a la pista.</p>
        <div className="hero-actions"><a className="action action-primary" href="/hualkana">Conoce Hualkana <ArrowUpRight size={18} /></a><a className="action action-primary" href="/patrocinio">Patrocina al equipo <ArrowUpRight size={18} /></a></div>
        <div className="hero-institution"><span className="institution-mark" aria-hidden="true">UNI</span><span>Semillero de investigación<br /><strong>Facultad de Ingeniería Mecánica · Perú</strong></span></div>
      </div>
      <div className="hero-annotation" aria-hidden="true"><span className="annotation-cross">+</span><span>DISEÑADO PARA IR MÁS LEJOS.<br />CON MENOS ENERGÍA.</span><ArrowDownRight size={30} /></div>
      <a className="hero-model" href="/hualkana"><span>PROTOTIPO ELÉCTRICO / GENERACIÓN 03</span><strong>HUALKANA <em>III</em></strong><span className="model-discover">EXPLORA LA INGENIERÍA <ArrowRight size={16} /></span></a>
      <div className="hero-bottom container-shell"><a href="/nosotros"><ArrowDown size={15} /> DESCUBRE EL EQUIPO</a><span>LIMA, PERÚ <span className="peru-flag" aria-label="Perú" /></span></div>
    </section>
    <div className="principles-strip"><div className="container-shell"><span>INVESTIGAR <MoveUpRight /></span><i /><span>DISEÑAR <MoveUpRight /></span><i /><span>CONSTRUIR <MoveUpRight /></span><i /><span>VALIDAR <MoveUpRight /></span><i /><span className="strip-purpose">MÁS EFICIENCIA. <b>MENOS IMPACTO.</b></span></div></div>
  </>
}
