import {
  getAngPararayos,
  getTheSatellite,
  getAnnouncements
} from '@/functions/news'
import {NewsSection} from './news-section'
import {Section} from './section'

export async function AnnouncementsSection() {
  const announcements = await getAnnouncements()
  const theSatellite = await getTheSatellite()
  const angPararayos = await getAngPararayos()

  return (
    <Section>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <NewsSection
          title="Announcements"
          news={announcements}
          href="/announcements"
        />
        <NewsSection
          title="The Satellite"
          news={theSatellite}
          href="/the-satellite"
        />
        <NewsSection
          title="Ang Pararayos"
          news={angPararayos}
          href="/ang-pararayos"
        />
      </div>
    </Section>
  )
}
