import {HeroSection} from './hero-section.tsx'
import {ServicesSection} from './services-section.tsx'
import {AnnouncementsSection} from './announcements-section.tsx'

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
