import {Hero} from '@/components/sections/hero'
import {Services} from '@/components/sections/services'
import {Announcements} from '@/components/sections/announcements'

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
