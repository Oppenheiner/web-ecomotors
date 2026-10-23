import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { About } from '@/components/about'
import { Projects } from '@/components/projects'
import { Hualkana } from '@/components/hualkana'
import { History } from '@/components/history'
import { Team, Partners } from '@/components/team-partners'
import { Contact } from '@/components/contact'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return <>
    <a className="skip-link" href="#contenido">Saltar al contenido</a>
    <SiteHeader />
    <main id="contenido"><Hero /><About /><Projects /><Hualkana /><History /><Team /><Partners /><Contact /></main>
    <SiteFooter />
  </>
}
