import Image from 'next/image'

const leadershipGroups = [
  {
    id: 'coordinacion-general',
    title: 'Coordinación general',
    members: [
      { name: 'Heyner Rimisky Arellano Minaya', role: 'Coordinador General', responsibility: 'Responsable de Ingeniería', image: '/images/directiva/heyner.jpeg', position: '61% center' },
      { name: 'Xiomara Nicole Cruzado Castillo', role: 'Secretaria General', responsibility: 'Responsable del Área Administrativa', image: '/images/directiva/xiomara.jpeg', position: '52% center' },
    ],
  },
  {
    id: 'responsables-tecnicos',
    title: 'Responsables técnicos',
    members: [
      { name: 'Diana Fernandez Astupiñan', role: 'Responsable de Mecánica', responsibility: null, image: '/images/directiva/diana.jpeg', position: '57% center' },
      { name: 'Iohann Gianpierre Saavedra Véliz', role: 'Responsable de Propulsión', responsibility: null, image: '/images/directiva/iohann.jpeg', position: '57% center' },
    ],
  },
]

export function Leadership() {
  return (
    <section className="leadership" aria-labelledby="leadership-title">
      <header className="leadership-heading">
        <p className="eyebrow">LAS PERSONAS DETRÁS DEL IMPULSO</p>
        <h2 id="leadership-title">Directiva <span>actual.</span></h2>
        <p>Coordinación y liderazgo técnico para transformar nuestras ideas en proyectos.</p>
      </header>
      {leadershipGroups.map(group => (
        <section className="leadership-group" key={group.id} aria-labelledby={group.id}>
          <h3 className="leadership-group-title" id={group.id}>{group.title}</h3>
          <div className="leadership-grid">
            {group.members.map(member => (
              <article className="leadership-card" key={member.name}>
                <div className="leadership-portrait">
                  <Image src={member.image} alt={`Retrato de ${member.name}, integrante de la directiva de Eco Motors UNI`} fill sizes="(max-width: 600px) 42vw, (max-width: 1000px) 22vw, 260px" style={{ objectPosition: member.position }} />
                </div>
                <div className="leadership-info">
                  <span className="leadership-rule" aria-hidden="true" />
                  <h4>{member.name}</h4>
                  <p className="leadership-role">{member.role}</p>
                  {member.responsibility && <p className="leadership-responsibility">{member.responsibility}</p>}
                </div>
              </article>
            ))}
          </div>
        </section>
      ))}
    </section>
  )
}
