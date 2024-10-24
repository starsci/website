import {Hero} from '@/components/hero-sections/hero'
import {Services} from '@/components/hero-sections/services'
import {Announcements} from '@/components/hero-sections/announcements'
import {HR} from '@/components/hr'

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

export const dynamic = 'force-dynamic'
