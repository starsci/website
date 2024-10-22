import {HeroSection} from './hero-section'
import {ServicesSection} from './services-section'
import {AnnouncementsSection} from './announcements-section'

export default async function Home() {
  return (
    <div>
      <HeroSection />
      <ServicesSection />
      <hr className="border-t border-gray-300" />
      <AnnouncementsSection />
    </div>
  )
}
