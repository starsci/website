import {Hero} from '@/components/hero-sections/Hero'
import {CampusNews} from '@/components/hero-sections/CampusNews'
import {HR} from '@/components/HR'

export default async function Home() {
  return (
    <div>
      <Hero />
      <HR />
      <CampusNews />
    </div>
  )
}
