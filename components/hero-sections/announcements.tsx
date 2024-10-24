'use client'

import {NewsBit} from '@/components/news-bit'
import {HeroSection} from '@/components/hero-section'
import {getAnnouncements, getPararayos, getSatellite} from './actions'
import useSWR from 'swr'

export function Announcements() {
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
      <HeroSection>
        <p>Loading...</p>
      </HeroSection>
    )
  }

  if (e1 || e2 || e3) {
    // if any of the data has an error
    return (
      <HeroSection>
        <p>Failed to load announcements:</p>
        {e1 && <p>{e1.message}</p>}
        {e2 && <p>{e2.message}</p>}
        {e3 && <p>{e3.message}</p>}
      </HeroSection>
    )
  }

  return (
    <HeroSection>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <NewsBit
          title="Announcements"
          news={announcements}
          href="/announcements"
        />
        <NewsBit
          title="The Satellite"
          news={theSatellite}
          href="/the-satellite"
        />
        <NewsBit
          title="Ang Pararayos"
          news={angPararayos}
          href="/ang-pararayos"
        />
      </div>
    </HeroSection>
  )
}
