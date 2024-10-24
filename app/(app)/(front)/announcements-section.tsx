'use client'

import {NewsSection} from '@/components/news-section'
import {Section} from '@/components/section'
import {getAnnouncements, getPararayos, getSatellite} from './actions'
import useSWR from 'swr'

export function AnnouncementsSection() {
  const {
    data: announcements,
    isLoading: i1,
    error: e1
  } = useSWR('/api/school-announcements', getAnnouncements)
  const {
    data: theSatellite,
    isLoading: i2,
    error: e2
  } = useSWR('/api/the-satellite-news', getSatellite)
  const {
    data: angPararayos,
    isLoading: i3,
    error: e3
  } = useSWR('/api/ang-pararayos-news', getPararayos)

  if (i1 || i2 || i3) {
    // if any of the data is loading
    return (
      <Section>
        <p>Loading...</p>
      </Section>
    )
  }

  if (e1 || e2 || e3) {
    // if any of the data has an error
    return (
      <Section>
        <p>Failed to load announcements:</p>
        {e1 && <p>{e1.message}</p>}
        {e2 && <p>{e2.message}</p>}
        {e3 && <p>{e3.message}</p>}
      </Section>
    )
  }

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
