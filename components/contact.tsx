'use client'

import { useState, type FormEvent } from 'react'
import { ArrowUpRight, Mail, MapPin } from 'lucide-react'
import { SectionLabel } from '@/components/about'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Field, FieldGroup, FieldLabel, FieldError } from '@/components/ui/field'
import { contactEmail } from '@/lib/site-content'

type Values = { name: string; email: string; organization: string; reason: string; message: string }

export function Contact() {
  const [values, setValues] = useState<Values>({ name: '', email: '', organization: '', reason: 'Patrocinio', message: '' })
  const [errors, setErrors] = useState<Partial<Record<keyof Values, string>>>({})
  const [prepared, setPrepared] = useState(false)
  function update(key: keyof Values, value: string) { setValues(previous => ({ ...previous, [key]: value })); setPrepared(false); setErrors(previous => ({ ...previous, [key]: undefined })) }
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const next: Partial<Record<keyof Values, string>> = {}
    if (values.name.trim().length < 2) next.name = 'Escribe tu nombre (al menos 2 caracteres).'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) next.email = 'Escribe un correo electrónico válido.'
    if (values.message.trim().length < 10) next.message = 'Cuéntanos un poco más (al menos 10 caracteres).'
    setErrors(next)
    const first = Object.keys(next)[0]
    if (first) { document.getElementById(first)?.focus(); return }
    const body = `Nombre: ${values.name.trim()}\nCorreo: ${values.email.trim()}\nOrganización: ${values.organization.trim() || 'No indicada'}\nMotivo: ${values.reason}\n\n${values.message.trim()}`
    window.location.href = `mailto:${contactEmail}?subject=${encodeURIComponent(`${values.reason} · Eco Motors UNI`)}&body=${encodeURIComponent(body)}`
    setPrepared(true)
  }
  return <section id="contacto" className="section-pad container-shell"><div className="contact-layout"><div><SectionLabel number="07">HABLEMOS DEL FUTURO</SectionLabel><h2>CONSTRUYAMOS<br />JUNTOS <span>LA PRÓXIMA<br />ETAPA.</span></h2><p className="contact-description">Una idea, una alianza o un nuevo desafío.<br />El siguiente paso empieza con una conversación.</p><a className="contact-email" href={`mailto:${contactEmail}`}><Mail size={19} />{contactEmail}<ArrowUpRight size={20} /></a><p className="contact-location"><MapPin size={16} /> Facultad de Ingeniería Mecánica<br />Universidad Nacional de Ingeniería · Lima, Perú</p></div><form onSubmit={submit} noValidate className="contact-form"><FieldGroup><FieldGroup className="form-row"><Field data-invalid={!!errors.name}><FieldLabel htmlFor="name">Nombre <span aria-hidden="true">*</span></FieldLabel><Input id="name" name="name" autoComplete="name" placeholder="Tu nombre" value={values.name} onChange={e => update('name', e.target.value)} maxLength={100} required aria-invalid={!!errors.name} aria-describedby={errors.name ? 'name-error' : undefined} />{errors.name && <FieldError id="name-error">{errors.name}</FieldError>}</Field><Field data-invalid={!!errors.email}><FieldLabel htmlFor="email">Correo electrónico <span aria-hidden="true">*</span></FieldLabel><Input id="email" name="email" type="email" autoComplete="email" placeholder="tu@organizacion.com" value={values.email} onChange={e => update('email', e.target.value)} maxLength={254} required aria-invalid={!!errors.email} aria-describedby={errors.email ? 'email-error' : undefined} />{errors.email && <FieldError id="email-error">{errors.email}</FieldError>}</Field></FieldGroup><Field><FieldLabel htmlFor="organization">Organización o empresa <span className="optional">(opcional)</span></FieldLabel><Input id="organization" name="organization" autoComplete="organization" placeholder="¿Desde dónde nos escribes?" value={values.organization} onChange={e => update('organization', e.target.value)} maxLength={150} /></Field><Field><FieldLabel htmlFor="reason">Motivo de contacto</FieldLabel><select id="reason" name="reason" value={values.reason} onChange={e => update('reason', e.target.value)}><option>Patrocinio</option><option>Colaboración técnica</option><option>Prensa</option><option>Consulta general</option></select></Field><Field data-invalid={!!errors.message}><FieldLabel htmlFor="message">Mensaje <span aria-hidden="true">*</span></FieldLabel><Textarea id="message" name="message" placeholder="Cuéntanos cómo podemos construir juntos." rows={4} value={values.message} onChange={e => update('message', e.target.value)} maxLength={4000} required aria-invalid={!!errors.message} aria-describedby={errors.message ? 'message-error' : undefined} />{errors.message && <FieldError id="message-error">{errors.message}</FieldError>}</Field><p className="form-notice">Tus datos se usarán para atender tu consulta. Este formulario prepara un correo en tu aplicación de correo; no almacena datos ni realiza envíos automáticos. <a href="/privacidad">Privacidad</a>.</p><Button type="submit" size="lg">Preparar correo <ArrowUpRight data-icon="inline-end" /></Button>{prepared && <p role="status" className="mail-status">El correo está preparado para tu aplicación de correo. Aún debes enviarlo desde allí. Si no se abrió, escríbenos a <a href={`mailto:${contactEmail}`}>{contactEmail}</a>.</p>}</FieldGroup></form></div></section>
}
