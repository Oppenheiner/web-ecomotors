export const contactEmail = 'team.ecomotors@uni.edu.pe'

export const sources = {
  uni2025: 'https://www.gob.pe/institucion/uni/noticias/1139691-eco-motors-uni-innovacion-peruana-que-impulsa-el-futuro-de-la-movilidad-sostenible',
  andina2024: 'https://andina.pe/agencia/noticia-vehiculo-electrico-construido-la-uni-representara-a-peru-competencia-global-977722.aspx',
  andina2026: 'https://andina.pe/agencia/noticia-vehiculo-electrico-hecho-la-uni-representara-al-peru-competencia-brasil-1087696.aspx',
}

export const projects = [
  { id: 'hualkana', name: 'HUALKANA', category: 'EFICIENCIA ELÉCTRICA', description: 'Cada decisión de diseño cuenta. Nuestra familia de prototipos eléctricos integra aerodinámica, estructuras ligeras y propulsión eficiente.', detail: 'Investigamos la relación entre masa, resistencia aerodinámica y consumo energético. Hualkana reúne el trabajo de nuestras áreas de ingeniería en una plataforma experimental para aprender, validar y evolucionar.', icon: 'electric', featured: true },
  { id: 'hydra', name: 'HYDRA', category: 'NUEVAS ENERGÍAS', description: 'Exploramos el potencial del hidrógeno para la movilidad.', detail: 'Una línea de investigación en propulsión y soluciones energéticas basadas en hidrógeno, con atención a la integración de sistemas y la seguridad.', icon: 'hydrogen' },
  { id: 'urban', name: 'URBAN CONCEPT', category: 'MOVILIDAD URBANA', description: 'Pensamos la movilidad de las ciudades desde la ingeniería.', detail: 'Diseño de un vehículo urbano que considera ergonomía, seguridad y movilidad sostenible. Una mirada integral a la interacción entre las personas y el vehículo.', icon: 'urban' },
  { id: 'polar', name: 'POLAR 3D', category: 'MANUFACTURA ADITIVA', description: 'Fabricación a gran escala para ideas que van más allá.', detail: 'Desarrollo de impresión 3D de gran formato para moldes y componentes de apoyo. Conecta el diseño digital con las necesidades de fabricación del equipo.', icon: 'print' },
  { id: 'banco', name: 'BANCO DE PRUEBAS', category: 'VALIDACIÓN EXPERIMENTAL', description: 'Transformamos pruebas en conocimiento aplicable.', detail: 'Infraestructura experimental para la caracterización de motores y el análisis de sistemas de propulsión. Medir y comparar nos permite fundamentar cada mejora.', icon: 'test' },
]

export const versions = [
  { id: '1', name: 'Hualkana 1', year: '2024', heading: 'El inicio de nuestro recorrido.', description: 'Nuestro primer prototipo eléctrico: una plataforma de aprendizaje que conectó diseño, fabricación y validación para la Shell Eco-marathon Brasil 2024.', source: sources.uni2025, image: '/images/eco-motors-uni.jpg', alt: 'Equipo Eco Motors UNI junto a Hualkana 1, con carrocería blanca', credit: 'UNI · publicación institucional, 2 de abril de 2025', systems: [ ['Estructura y chasis', 'Chasis de aluminio para una arquitectura ligera de tres ruedas.'], ['Carrocería y aerodinámica', 'Carrocería de fibra de carbono orientada a reducir la resistencia al avance.'], ['Baterías y almacenamiento', 'Almacenamiento energético mediante baterías de litio.'], ['Sistema de propulsión', 'Motor eléctrico integrado a una plataforma de alta eficiencia.'], ['Electrónica e instrumentación', 'Integración eléctrica como parte del desarrollo del prototipo.'], ['Ensayos y eficiencia', 'Participación documentada en Shell Eco-marathon Brasil 2024.'] ] },
  { id: '2', name: 'Hualkana 2', year: '2025', heading: 'Aprender. Optimizar. Evolucionar.', description: 'La segunda generación da continuidad al aprendizaje de Hualkana 1, con un enfoque de mejora en aerodinámica, peso y eficiencia energética.', source: sources.uni2025, image: null, alt: '', credit: '', systems: [ ['Estructura y chasis', 'Optimización del peso como objetivo de desarrollo de esta generación.'], ['Carrocería y aerodinámica', 'Mejoras aerodinámicas documentadas en la presentación institucional.'], ['Baterías y almacenamiento', 'Línea de desarrollo de prototipos eléctricos a baterías.'], ['Sistema de propulsión', 'Evolución de la plataforma de propulsión eléctrica.'], ['Electrónica e instrumentación', 'La ficha electrónica detallada no se incluye sin documentación pública validada.'], ['Ensayos y eficiencia', 'Participación de 2025 e inspecciones técnicas documentadas por Andina; sin publicar cifras de rendimiento.'] ] },
  { id: '3', name: 'Hualkana 3', year: '2026', heading: 'La evolución se construye.', description: 'Una nueva generación de ingeniería aplicada. Estructuras de fibra de carbono, simulación aerodinámica y control eléctrico trabajan juntos para aprovechar mejor cada unidad de energía.', source: sources.andina2026, image: '/images/hualkana-3.webp', alt: 'Hualkana 3 de fibra de carbono junto a su piloto en el campus de la UNI', credit: 'Andina · publicación del 15 de agosto de 2026', systems: [ ['Estructura y chasis', 'Estructura y chasis de fibra de carbono para reducir la masa del conjunto.'], ['Carrocería y aerodinámica', 'Geometría optimizada con simulación CFD en ANSYS Fluent.'], ['Baterías y almacenamiento', 'Integración de baterías adaptada a las necesidades del vehículo.'], ['Sistema de propulsión', 'Motor de tipo Hub BLDC y optimización del consumo energético.'], ['Electrónica e instrumentación', 'Sistema eléctrico y de control optimizado para la integración del prototipo.'], ['Ensayos y eficiencia', 'Inspecciones técnicas superadas en Brasil 2026. La lluvia limitó las oportunidades de prueba en pista; no se publica un resultado de eficiencia.'] ] },
]

export const timeline = [
  { year: '2022', type: 'EL ORIGEN', title: 'Una idea compartida.', description: 'Nace Eco Motors UNI con la visión de investigar y desarrollar movilidad eficiente desde la universidad.', source: sources.andina2024 },
  { year: '2024', type: 'DESARROLLO DE PROTOTIPOS', title: 'Hualkana 1 toma forma.', description: 'Nuestra primera generación integra un chasis de aluminio, carrocería de carbono y propulsión eléctrica.', source: sources.uni2025 },
  { year: '2025', type: 'DESARROLLO DE PROTOTIPOS', title: 'Una nueva generación.', description: 'Hualkana 2 continúa la evolución con un enfoque de mejora en aerodinámica, peso y eficiencia.', source: sources.uni2025 },
  { year: '2026', type: 'DESARROLLO DE PROTOTIPOS', title: 'Hualkana 3, el siguiente paso.', description: 'Estructura de carbono, simulación CFD e integración eléctrica optimizada definen esta generación.', source: sources.andina2026 },
]

export const press = [
  { outlet: 'AGENCIA ANDINA', date: '15 AGO 2026', title: 'Vehículo eléctrico hecho en la UNI representará al Perú en competencia en Brasil', image: '/images/hualkana-3.webp', href: sources.andina2026 },
  { outlet: 'UNIVERSIDAD NACIONAL DE INGENIERÍA', date: '02 ABR 2025', title: 'Eco Motors UNI: innovación peruana que impulsa el futuro de la movilidad sostenible', image: '/images/eco-motors-uni.jpg', href: sources.uni2025 },
  { outlet: 'AGENCIA ANDINA', date: '17 MAY 2024', title: 'Vehículo eléctrico construido en la UNI representará a Perú en competencia global', image: '/images/hualkana-archive.webp', href: sources.andina2024 },
]

export const sponsorshipDossier: string | null = null
