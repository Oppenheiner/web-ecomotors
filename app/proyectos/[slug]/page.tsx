import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound, redirect } from 'next/navigation'
import { ArrowLeft, ArrowUpRight, Atom, CircuitBoard, Cuboid, Printer, Zap } from 'lucide-react'
import { projects } from '@/lib/site-content'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'

const icons = { electric: Zap, hydrogen: Atom, urban: Cuboid, print: Printer, test: CircuitBoard }
export function generateStaticParams() { return projects.map(project => ({ slug: project.id })) }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const project = projects.find(item => item.id === slug)
  return project ? { title: `${project.name} | Eco Motors UNI`, description: project.description } : {}
}
export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = projects.find(item => item.id === slug)
  if (!project) notFound()
  if (project.featured) redirect('/hualkana')
  const Icon = icons[project.icon as keyof typeof icons]
  return <><a href="#contenido" className="skip-link">Saltar al contenido</a><SiteHeader /><main id="contenido">
    <header className="inner-page-heading"><div className="container-shell"><Link href="/proyectos" className="text-link"><ArrowLeft size={16} /> Todos los proyectos</Link><p className="eyebrow">{project.category}</p><h1>{project.name}</h1><p>{project.description}</p></div></header>
    <section className="container-shell section-pad project-detail-layout"><div className="project-detail-symbol"><Icon size={100} strokeWidth={1} /><span className="eyebrow">INVESTIGACIÓN APLICADA / ECO MOTORS UNI</span></div><div className="editorial-copy"><p className="eyebrow">LA IDEA Y EL DESAFÍO</p><h2>Del conocimiento a la ingeniería.</h2><p>{project.detail}</p><p>Esta línea forma parte de nuestros proyectos de investigación. Para conocer su avance o explorar una colaboración, conversa directamente con el equipo.</p><Link href="/contacto" className="action action-primary">Consultar sobre {project.name} <ArrowUpRight size={18} /></Link><Link href="/equipo" className="text-link">Conoce al equipo <ArrowUpRight size={16} /></Link></div></section>
    <aside className="inner-page-next container-shell"><div><p className="eyebrow">UNA MISMA AMBICIÓN</p><h2>Descubre otras formas de innovar.</h2></div><Link href="/proyectos" className="action action-outline">Ver todos los proyectos <ArrowUpRight size={18} /></Link></aside>
  </main><SiteFooter /></>
}
