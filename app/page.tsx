import {HeroSection} from './hero'
import {ServicesSection} from './services'
import {AnnouncementsSection} from './announcements'

export default async function Home() {
  return (
    <div>
      <HeroSection />
      <ServicesSection />
      <hr className="border-t border-neutral-700" />
      <AnnouncementsSection />
    </div>
  )
}