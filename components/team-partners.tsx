import Image from 'next/image'
import { ArrowUpRight, ArrowRight, Boxes, Handshake, Lightbulb, Wrench, MonitorCog, Workflow } from 'lucide-react'
import { SectionLabel } from '@/components/about'
import { sponsorshipDossier } from '@/lib/site-content'

export function Team() {
  return <section id="equipo" className="section-pad container-shell team-section"><div className="team-layout"><div><SectionLabel number="05">EL MOTOR ES NUESTRO EQUIPO</SectionLabel><h2>DISTINTAS DISCIPLINAS.<br /><span>UNA MISMA DIRECCIÓN.</span></h2><p className="team-description">Aprendemos haciendo. Estudiantes de distintas especialidades conectamos nuestras capacidades para transformar un reto técnico en una experiencia de ingeniería real.</p><div className="team-photo"><Image src="/images/hualkana-3-detail.webp" alt="Integrantes de Eco Motors UNI junto a Hualkana 3 en el campus universitario" fill sizes="(max-width: 800px) 100vw, 50vw" /></div><p className="photo-credit">Eco Motors UNI · Hualkana 3 · Fotografía publicada por Andina, 2026.</p></div><div className="organization"><div className="org-title"><span className="live-dot" /> ECO MOTORS UNI <Workflow size={22} /></div><div className="org-group"><span className="eyebrow">01 / ADMINISTRATIVA</span><h3>El soporte para avanzar.</h3><p>Logística y Operaciones</p><p>Marketing y Comunicación</p></div><div className="org-group"><span className="eyebrow">02 / INGENIERÍA</span><h3>El conocimiento en acción.</h3><div className="org-subgroup"><strong>Mecánica</strong><p>Estructuras y Chasis · Dirección y Suspensión · Aerodinámica y Carrocería</p></div><div className="org-subgroup"><strong>Propulsión</strong><p>Powertrain · Energía · Electrónica</p></div><div className="org-subgroup"><strong>Pilotos</strong><p>Preparación, conducción y validación en pista.</p></div></div></div></div></section>
}

const principalPartners = [
  { name: 'ANSYS', logo: '/images/partners/ansys.png', square: false },
  { name: 'ESSS', logo: '/images/partners/esss.png', square: false },
  { name: 'Altium', logo: '/images/partners/altium.png', square: true },
  { name: 'SOLIDWORKS', logo: '/images/partners/solidworks.png', square: true },
  { name: 'Control', logo: null, square: false },
  { name: 'Carbono Perú', logo: null, square: false },
]

const collaboration = [
  { icon: Handshake, name: 'Apoyo económico', text: 'Impulsa el desarrollo y la participación del equipo.' },
  { icon: Boxes, name: 'Materiales y componentes', text: 'Ayúdanos a convertir los diseños en prototipos.' },
  { icon: MonitorCog, name: 'Herramientas y software', text: 'Acerca la tecnología a la investigación aplicada.' },
  { icon: Wrench, name: 'Fabricación y ensayos', text: 'Conecta tu experiencia con nuestros desafíos técnicos.' },
  { icon: Lightbulb, name: 'Mentoría técnica', text: 'Comparte conocimiento. Forma a la siguiente generación.' },
]

export function Partners() {
  return <section id="aliados" className="partners-section section-pad"><div className="container-shell"><SectionLabel number="06">NUESTROS ALIADOS</SectionLabel><div className="principal-partners"><div className="principal-partners-heading"><span className="eyebrow">ALIADOS PRINCIPALES</span><h2>JUNTOS, HACEMOS POSIBLE<br /><span>EL SIGUIENTE PASO.</span></h2><p>Empresas que acompañan a Eco Motors UNI en el desarrollo de nuestros proyectos.</p></div><ul className="principal-partners-grid" aria-label="Aliados principales de Eco Motors UNI">{principalPartners.map(({ name, logo, square }) => <li key={name} className={logo ? 'partner-with-logo' : undefined}>{logo ? <img src={logo} alt={name} width={240} height={140} loading="lazy" decoding="async" className={square ? 'partner-logo partner-logo-square' : 'partner-logo'} /> : <span>{name}</span>}</li>)}</ul></div><div className="section-intro"><h2>EL TALENTO ESTÁ AQUÍ.<br /><span>EL SIGUIENTE IMPULSO PUEDE SER TUYO.</span></h2><div><p>Buscamos empresas e instituciones que crean en la ingeniería peruana y quieran construir con nosotros.</p><a className="text-link" href={sponsorshipDossier ?? '/contacto'}> {sponsorshipDossier ? 'Descargar dossier de patrocinio' : 'Solicitar dossier de patrocinio'} <ArrowUpRight size={18} /></a></div></div><div className="collaboration-grid">{collaboration.map(({ icon: Icon, name, text }) => <article key={name}><Icon size={25} strokeWidth={1.4} /><h3>{name}</h3><p>{text}</p></article>)}</div><div className="partner-benefits"><span>UNA ALIANZA CON PROPÓSITO</span><p>Visibilidad de marca · Vinculación con talento · Difusión conjunta · Actividades técnicas</p><small>Las oportunidades se definen según los acuerdos de cada alianza.</small></div><div className="partner-cta"><p>Más que apoyar un prototipo.<br /><strong>Es invertir en quienes diseñan lo que viene.</strong></p><a className="action action-primary" href="/contacto">Conversemos sobre una alianza <ArrowRight size={18} /></a></div></div></section>
}
