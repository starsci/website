import {
  getAngPararayos,
  getTheSatellite,
  getAnnouncements
} from '@/functions/news'
import {NewsList} from './news-list'
import {Section} from './section'

export async function AnnouncementsSection() {
  const announcements = await getAnnouncements()
  const theSatellite = await getTheSatellite()
  const angPararayos = await getAngPararayos()

  return (
    <Section>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 container">
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-semibold">Announcements</h2>
          <hr className="border-t border-neutral-500" />
          <NewsList news={announcements} href="/news/announcements" />
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-semibold">The Satellite</h2>
          <hr className="border-t border-neutral-500" />
          <NewsList news={theSatellite} href="/news/the-satellite" />
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-semibold">Ang Pararayos</h2>
          <hr className="border-t border-neutral-500" />
          <NewsList news={angPararayos} href="/news/ang-pararayos" />
        </div>
      </div>
    </Section>
  )
}
