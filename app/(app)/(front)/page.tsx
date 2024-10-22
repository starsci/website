import {HeroSection} from './hero-section.jsx'
import {ServicesSection} from './services-section.jsx'
import {AnnouncementsSection} from './announcements-section.jsx'

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
