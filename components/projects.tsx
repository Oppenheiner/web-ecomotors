'use client'

import Image from 'next/image'
import { Atom, ArrowUpRight, CircuitBoard, Cuboid, Printer, Zap } from 'lucide-react'
import { projects } from '@/lib/site-content'
import { SectionLabel } from '@/components/about'

const icons = { electric: Zap, hydrogen: Atom, urban: Cuboid, print: Printer, test: CircuitBoard }

export function Projects() {
  return <section id="proyectos" className="projects-section section-pad"><div className="container-shell">
    <SectionLabel number="02">NUESTROS PROYECTOS</SectionLabel>
    <div className="section-intro"><h2>UN EQUIPO.<br /><span>MÚLTIPLES FORMAS DE INNOVAR.</span></h2><p>De la eficiencia eléctrica a las nuevas energías.<br />Cinco líneas de trabajo, una misma ambición.</p></div>
    <div className="project-grid">{projects.map((project, i) => { const Icon = icons[project.icon as keyof typeof icons]; return <article key={project.id} className={project.featured ? 'project-card featured-project' : 'project-card'}>
      {project.featured ? <><Image src="/images/hualkana-3.webp" fill sizes="(max-width: 700px) 100vw, 50vw" alt="Hualkana 3, prototipo eléctrico con carrocería de fibra de carbono" className="project-photo" /><div className="project-photo-shade" /><span className="project-feature-label"><span className="live-dot" /> PROYECTO INSIGNIA</span></> : <div className="project-card-top"><Icon size={30} strokeWidth={1.2} /><span>0{i + 1}</span></div>}
      <div className="project-card-content"><p className="eyebrow">{project.category}</p><h3>{project.name}</h3><p>{project.description}</p><a href={project.featured ? '/hualkana' : `/proyectos/${project.id}`} className="project-page-link">Explorar proyecto <ArrowUpRight size={18} /></a></div>
    </article> })}</div>
  </div></section>
}
