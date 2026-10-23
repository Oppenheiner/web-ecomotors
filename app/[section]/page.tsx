import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, ArrowUpRight } from 'lucide-react'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { About } from '@/components/about'
import { Projects } from '@/components/projects'
import { Hualkana } from '@/components/hualkana'
import { History } from '@/components/history'
import { Team, Partners } from '@/components/team-partners'
import { Contact } from '@/components/contact'
import { contactEmail, sources } from '@/lib/site-content'

const pages = {
  nosotros: { title: 'Ingeniería con propósito', label: 'Nosotros', description: 'Conoce cómo transformamos conocimiento en soluciones de movilidad sostenible.' },
  proyectos: { title: 'Ideas que se ponen en movimiento', label: 'Proyectos', description: 'Explora nuestras cinco líneas de investigación y desarrollo.' },
  hualkana: { title: 'Hualkana. Ingeniería en evolución.', label: 'Hualkana', description: 'Tres generaciones de prototipos eléctricos, aprendizaje e investigación aplicada.' },
  trayectoria: { title: 'Cada paso construye el siguiente', label: 'Trayectoria', description: 'Nuestra evolución, participaciones y publicaciones documentadas.' },
  equipo: { title: 'El motor es nuestro equipo', label: 'Equipo', description: 'Distintas disciplinas, una misma dirección.' },
  aliados: { title: 'Construyamos una alianza', label: 'Aliados', description: 'Conecta tu experiencia y recursos con el talento de Eco Motors UNI.' },
  patrocinio: { title: 'Impulsa la próxima generación', label: 'Patrocinio', description: 'Materiales, tecnología, conocimiento o apoyo económico: encuentra tu forma de colaborar.' },
  contacto: { title: 'La próxima etapa empieza aquí', label: 'Contacto', description: 'Conversemos sobre una idea, una alianza o un nuevo desafío.' },
  privacidad: { title: 'Aviso de privacidad', label: 'Privacidad', description: 'Cómo funciona el contacto y el tratamiento de los datos que compartes.' },
  creditos: { title: 'Créditos y fuentes', label: 'Créditos', description: 'Las fuentes públicas detrás de las fotografías y la información del sitio.' },
}

type Section = keyof typeof pages
function isSection(value: string): value is Section { return Object.hasOwn(pages, value) }
export function generateStaticParams() { return Object.keys(pages).map(section => ({ section })) }
export async function generateMetadata({ params }: { params: Promise<{ section: string }> }): Promise<Metadata> {
  const { section } = await params
  if (!isSection(section)) return {}
  return { title: `${pages[section].label} | Eco Motors UNI`, description: pages[section].description }
}

export default async function SectionPage({ params }: { params: Promise<{ section: string }> }) {
  const { section } = await params
  if (!isSection(section)) notFound()
  const page = pages[section]
  return <>
    <a className="skip-link" href="#contenido">Saltar al contenido</a><SiteHeader />
    <main id="contenido">
      <header className="inner-page-heading"><div className="container-shell"><Link href="/" className="text-link"><ArrowLeft size={16} /> Inicio</Link><p className="eyebrow">ECO MOTORS UNI / {page.label}</p><h1>{page.title}</h1><p>{page.description}</p></div></header>
      {section === 'nosotros' && <About />}
      {section === 'proyectos' && <Projects />}
      {section === 'hualkana' && <Hualkana />}
      {section === 'trayectoria' && <History />}
      {section === 'equipo' && <Team />}
      {(section === 'aliados' || section === 'patrocinio') && <Partners />}
      {section === 'contacto' && <Contact />}
      {section === 'privacidad' && <section className="container-shell section-pad editorial-copy"><h2>Tus datos, con transparencia.</h2><p>Este sitio no almacena los datos del formulario. Al preparar un correo, su contenido se transfiere a tu aplicación de correo. El mensaje solo se envía cuando tú lo confirmas desde esa aplicación.</p><p>Eco Motors UNI utilizará la información recibida para responder a tu consulta. Para solicitudes relacionadas con tus datos, escribe a <a href={`mailto:${contactEmail}`}>{contactEmail}</a>.</p><Link href="/contacto" className="text-link">Ir a contacto <ArrowUpRight size={16} /></Link></section>}
      {section === 'creditos' && <section className="container-shell section-pad editorial-copy"><h2>Información con respaldo.</h2><p>Las publicaciones se enlazan para facilitar la consulta de su contexto original.</p><a href={sources.andina2026} target="_blank" rel="noopener noreferrer">Andina · Hualkana 3 y equipo · 15 de agosto de 2026 <ArrowUpRight size={16} /></a><a href={sources.uni2025} target="_blank" rel="noopener noreferrer">UNI · Hualkana 1 · 2 de abril de 2025 <ArrowUpRight size={16} /></a><a href={sources.andina2024} target="_blank" rel="noopener noreferrer">UNI / Andina · Fotografía de archivo · 17 de mayo de 2024 <ArrowUpRight size={16} /></a><p>Los logotipos visibles en las fotografías pertenecen a sus respectivos titulares y no implican una relación de patrocinio vigente.</p></section>}
      {section !== 'contacto' && section !== 'privacidad' && section !== 'creditos' && <aside className="inner-page-next container-shell"><div><p className="eyebrow">SIGAMOS EN MOVIMIENTO</p><h2>¿Construimos el siguiente paso?</h2></div><Link className="action action-primary" href="/contacto">Habla con el equipo <ArrowUpRight size={18} /></Link></aside>}
    </main><SiteFooter />
  </>
}
