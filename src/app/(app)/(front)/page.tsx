import { Hero } from '@/components/hero-sections/Hero'
import { CampusNews } from '@/components/hero-sections/CampusNews'
import { Services } from '@/components/hero-sections/Services'

export default async function Home() {
  return (
    <div>
      <Hero />
      <Services />
      <CampusNews />
    </div>
  )
}
