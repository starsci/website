import {
  getAngPararayos,
  getTheSatellite,
  getAnnouncements
} from '@/functions/news'
import {NewsSection} from './news-section'

export async function AnnouncementsSection() {
  const announcements = await getAnnouncements()
  const theSatellite = await getTheSatellite()
  const angPararayos = await getAngPararayos()

  return (
    <section className="px-4 lg:px-8 py-8 lg:py-14 w-full text-white flex flex-col gap-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 container">
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
    </section>
  )
}
