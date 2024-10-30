import {Hero} from '@/components/hero-sections/Hero'
import {Services} from '@/components/hero-sections/Services'
import {Announcements} from '@/components/hero-sections/Announcements'
import {HR} from '@/components/HR'

export default async function Home() {
  return (
    <div>
      <Hero />
      <Services />
      <HR />
      <Announcements />
    </div>
  )
}
