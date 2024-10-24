import {Hero} from '@/components/hero-sections/hero'
import {Services} from '@/components/hero-sections/services'
import {Announcements} from '@/components/hero-sections/announcements'

export default async function Home() {
  return (
    <div>
      <Hero />
      <Services />
      <hr className="border-t border-gray-300" />
      <Announcements />
    </div>
  )
}

export const dynamic = 'force-dynamic'
