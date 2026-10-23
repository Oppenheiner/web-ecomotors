'use client'

import Image from 'next/image'
import { ArrowUpRight, Box, ChevronLeft, ChevronRight, Zap } from 'lucide-react'
import { useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Button } from '@/components/ui/button'
import { SectionLabel } from '@/components/about'
import { sources, versions } from '@/lib/site-content'

const gallery = [
  { src: '/images/hualkana-3.webp', alt: 'Hualkana 3 junto a su piloto en el campus de la UNI', caption: '01 / HUALKANA 3 · PROTOTIPO ELÉCTRICO' },
  { src: '/images/hualkana-3-detail.webp', alt: 'Equipo Eco Motors UNI con Hualkana 3 y su banco de pruebas', caption: '02 / HUALKANA 3 · INGENIERÍA EN EQUIPO' },
]

export function Hualkana() {
  const [slide, setSlide] = useState(0)
  return <section id="hualkana" className="section-pad container-shell">
    <SectionLabel number="03">NUESTRO PROTOTIPO INSIGNIA</SectionLabel>
    <div className="section-intro"><h2>HUALKANA.<br /><span>CADA GENERACIÓN, MÁS ALLÁ.</span></h2><p>No se trata de ir más rápido.<br />Se trata de llegar más lejos con menos energía.</p></div>
    <Tabs defaultValue="3" className="prototype-tabs"><TabsList variant="line" aria-label="Generaciones de Hualkana">{versions.map(v => <TabsTrigger key={v.id} value={v.id}>{v.name}<span className="version-year">{v.year}</span></TabsTrigger>)}</TabsList>
      {versions.map(version => <TabsContent key={version.id} value={version.id}><div className="prototype-layout"><div className="prototype-visual">{version.image ? <>
        <div className="prototype-image"><Image src={version.id === '3' ? gallery[slide].src : version.image} alt={version.id === '3' ? gallery[slide].alt : version.alt} fill sizes="(max-width: 800px) 100vw, 55vw" /><div className="image-corner top-left" aria-hidden="true" /><div className="image-corner bottom-right" aria-hidden="true" /></div>
        <div className="gallery-bar"><span>{version.id === '3' ? gallery[slide].caption : 'HUALKANA 1 · PRIMERA GENERACIÓN'}</span>{version.id === '3' && <div className="gallery-controls"><Button size="icon" variant="outline" aria-label="Fotografía anterior de Hualkana 3" onClick={() => setSlide((slide + 1) % gallery.length)}><ChevronLeft /></Button><Button size="icon" variant="outline" aria-label="Fotografía siguiente de Hualkana 3" onClick={() => setSlide((slide + 1) % gallery.length)}><ChevronRight /></Button></div>}</div><p className="photo-credit">Fotografía: {version.credit}.</p>
      </> : <div className="prototype-no-photo"><Box size={70} strokeWidth={0.7} /><span>GENERACIÓN 02 / 2025</span><h3>HUALKANA 2</h3><p>Una evolución del diseño.<br />Una nueva etapa de aprendizaje.</p><small>Consulta la presentación institucional de esta versión.</small></div>}</div>
      <div className="prototype-info"><div className="eyebrow text-foreground"><Zap size={14} /> DESARROLLO {version.year}</div><h3>{version.heading}</h3><p>{version.description}</p><Accordion className="technical-accordion">{version.systems.map(([title, text], index) => <AccordionItem value={String(index)} key={title}><AccordionTrigger><span className="system-number">0{index + 1}</span>{title}</AccordionTrigger><AccordionContent>{text}</AccordionContent></AccordionItem>)}</Accordion><a href={version.id === '2' ? sources.uni2025 : version.source} target="_blank" rel="noopener noreferrer" className="text-link source-link">Consultar fuente pública <ArrowUpRight size={15} /></a></div>
      </div></TabsContent>)}
    </Tabs>
  </section>
}
