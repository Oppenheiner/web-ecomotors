import { Car, ArrowUpRight, MessageCircle } from 'lucide-react'

const message = encodeURIComponent('Hola, Eco Motors UNI. Me gustaría recibir más información sobre el equipo y sus proyectos.')

const socialLinks = [
  { name: 'Instagram', slug: 'instagram', url: 'https://www.instagram.com/eco_motors_uni/' },
  { name: 'TikTok', slug: 'tiktok', url: 'https://www.tiktok.com/@eco.motors.uni' },
  { name: 'Facebook', slug: 'facebook', url: 'https://www.facebook.com/semEMU2024' },
  { name: 'LinkedIn', slug: 'linkedin', url: 'https://www.linkedin.com/company/eco-motors-uni/posts/?feedView=all' },
]

export function FloatingWhatsApp() {
  return (
    <nav className="floating-social-dock" aria-label="Redes sociales y contacto del equipo">
      <div className="floating-social-links">
        {socialLinks.map(({ name, slug, url }) => (
          <a key={slug} className={`floating-social-link social-${slug}`} href={url} target="_blank" rel="noopener noreferrer" aria-label={`${name} de Eco Motors UNI (se abre en una nueva pestaña)`}>
            <img src={`https://cdn.jsdelivr.net/gh/glincker/thesvg@main/public/icons/${slug}/${slug === 'instagram' || slug === 'facebook' ? 'mono' : 'default'}.svg`} width={24} height={24} alt="" />
            <span className="floating-social-tooltip" aria-hidden="true">{name}</span>
          </a>
        ))}
      </div>
    <a
      className="floating-whatsapp"
      href={`https://wa.me/51929129606?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar a Eco Motors UNI por WhatsApp (se abre en una nueva pestaña)"
    >
      <span className="floating-whatsapp-icon" aria-hidden="true">
        <span className="floating-whatsapp-track" />
        <Car className="floating-whatsapp-car" size={60} strokeWidth={1.5} />
        <span className="floating-whatsapp-badge"><MessageCircle size={15} strokeWidth={2.2} /></span>
      </span>
      <span className="floating-whatsapp-copy">
        <span className="floating-whatsapp-kicker">ECO MOTORS <span> / </span> UNI</span>
        <strong>Tu próxima conexión.</strong>
        <span className="floating-whatsapp-caption"><span className="floating-whatsapp-dot" /> Hablemos por WhatsApp</span>
      </span>
      <span className="floating-whatsapp-arrow" aria-hidden="true"><ArrowUpRight size={20} /></span>
    </a>
    </nav>
  )
}
