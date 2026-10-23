import type { Metadata, Viewport } from 'next'
import { Barlow_Condensed, Geist } from 'next/font/google'
import './globals.css'
import { PageMotion } from '@/components/page-motion'
import { FloatingWhatsApp } from '@/components/floating-whatsapp'

const geist = Geist({ subsets: ['latin'], variable: '--font-geist', display: 'swap' })
const barlow = Barlow_Condensed({ subsets: ['latin'], weight: ['500', '600', '700', '800'], variable: '--font-display', display: 'swap' })

export const metadata: Metadata = {
  metadataBase: new URL(process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'http://localhost:3000'),
  title: 'Eco Motors UNI | Ingeniería peruana. Movilidad sostenible.',
  description: 'Somos Eco Motors UNI, semillero de investigación de la Facultad de Ingeniería Mecánica. Diseñamos y construimos prototipos de movilidad sostenible desde el Perú. Conoce Hualkana y sé parte de nuestra próxima etapa.',
  keywords: ['Eco Motors UNI', 'Hualkana', 'movilidad sostenible', 'ingeniería peruana', 'Shell Eco-marathon', 'Universidad Nacional de Ingeniería'],
  openGraph: {
    title: 'ECO MOTORS UNI — Ingeniería en movimiento',
    description: 'Del conocimiento al prototipo. De la idea a la pista. Conoce al equipo que impulsa la movilidad sostenible desde la UNI, Perú.',
    locale: 'es_PE',
    type: 'website',
    images: [{ url: '/images/hualkana-3.webp', width: 1568, height: 1045, alt: 'Hualkana 3 de Eco Motors UNI' }],
  },
  twitter: { card: 'summary_large_image', title: 'Eco Motors UNI | Movilidad sostenible', description: 'Ingeniería peruana que transforma conocimiento en movilidad sostenible.', images: ['/images/hualkana-3.webp'] },
  icons: { icon: '/icon.svg' },
}

export const viewport: Viewport = { themeColor: '#111315', colorScheme: 'dark', width: 'device-width', initialScale: 1 }

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="es" className={`${geist.variable} ${barlow.variable}`}><body>{children}<FloatingWhatsApp /><PageMotion /></body></html>
}
