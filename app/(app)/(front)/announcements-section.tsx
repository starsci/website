import {NewsSection} from '@/components/news-section'
import {Section} from '@/components/section'
import {getAnnouncements, getPararayos, getSatellite} from './actions'

export async function AnnouncementsSection() {
  const announcements = await getAnnouncements()
  const theSatellite = await getSatellite()
  const angPararayos = await getPararayos()

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
