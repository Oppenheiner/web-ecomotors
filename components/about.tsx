import { ArrowUpRight, Box, Focus, Layers3, Wind } from 'lucide-react'
import { Leadership } from '@/components/leadership'

const capabilities = [
  { icon: Box, number: '01', title: 'Diseño e ingeniería', text: 'Convertimos los retos de movilidad en soluciones con fundamento técnico.', image: '/images/process-design.png', alt: 'Visualización de diseño CAD de un chasis ligero en una estación de ingeniería.' },
  { icon: Wind, number: '02', title: 'Simulación y análisis', text: 'Evaluamos estructuras, aerodinámica y sistemas antes de fabricar.', image: '/images/process-simulation.png', alt: 'Visualización ilustrativa de flujos aerodinámicos alrededor de un prototipo eficiente.' },
  { icon: Layers3, number: '03', title: 'Manufactura e integración', text: 'Llevamos el diseño al mundo real, componente a componente.', image: '/images/process-manufacture.png', alt: 'Ilustración del ensamblaje de una pieza de aluminio sobre un chasis de fibra de carbono.' },
  { icon: Focus, number: '04', title: 'Experimentación y validación', text: 'Medimos, aprendemos y mejoramos. La evidencia guía cada decisión.', image: '/images/process-testing.png', alt: 'Ilustración de sensores e instrumentos para probar un sistema eléctrico en laboratorio.' },
]

export function SectionLabel({ number, children }: { number: string; children: React.ReactNode }) {
  return <div className="section-label"><span>{number}</span><span className="label-line" />{children}</div>
}

export function About() {
  return <section id="nosotros" className="section-pad container-shell">
    <SectionLabel number="01">INGENIERÍA CON PROPÓSITO</SectionLabel>
    <div className="section-intro about-intro"><h2>NO SOLO CONSTRUIMOS<br />VEHÍCULOS. <span>FORMAMOS FUTURO.</span></h2><div><p>Somos un semillero de investigación de la Facultad de Ingeniería Mecánica de la UNI. Unimos talento multidisciplinario para resolver un mismo desafío: movernos mejor, usando menos.</p><a href="/equipo" className="text-link">Conoce al equipo detrás de cada idea <ArrowUpRight size={17} /></a></div></div>
    <div className="capabilities capabilities-visual">{capabilities.map(({ icon: Icon, number, title, text, image, alt }) => <article className="capability" key={number}>
      <div className="capability-image"><img src={image} alt={alt} loading="lazy" decoding="async" width={1536} height={1024} /><span className="capability-image-step" aria-hidden="true">{number} /</span></div>
      <div className="capability-copy"><div className="capability-top"><Icon size={26} strokeWidth={1.3} aria-hidden="true" /><span>ETAPA {number}</span></div><h3>{title}</h3><p>{text}</p></div>
    </article>)}</div>
    <p className="capabilities-caption">Visualizaciones ilustrativas de las etapas de ingeniería.</p>
    <Leadership />
  </section>
}
