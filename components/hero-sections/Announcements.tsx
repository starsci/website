'use client'

import {NewsBit} from '@/components/NewsBit'
import {HeroSection} from '@/components/HeroSection'
import {useQuery} from '@/hooks/use-query'

export function Announcements() {
  const queryOptions = {
    depth: 1,
    pagination: true,
    limit: 5,
    sort: '-createdAt'
  }

  const announcements = useQuery({
    collection: 'school-announcements',
    ...queryOptions
  })
  const satellite = useQuery({
    collection: 'the-satellite-news',
    ...queryOptions
  })
  const pararayos = useQuery({
    collection: 'ang-pararayos-news',
    ...queryOptions
  })

  if (announcements.isLoading || satellite.isLoading || pararayos.isLoading) {
    // if any of the data is loading
    return (
      <HeroSection>
        <p>Loading...</p>
      </HeroSection>
    )
  }

  if (announcements.error || satellite.error || pararayos.error) {
    // if any of the data has an error
    return (
      <HeroSection>
        <p>Failed to load announcements:</p>
        {announcements.error && <p>{announcements.error.message}</p>}
        {satellite.error && <p>{satellite.error.message}</p>}
        {pararayos.error && <p>{pararayos.error.message}</p>}
      </HeroSection>
    )
  }

  if (!announcements.data || !satellite.data || !pararayos.data) {
    // if any of the data is missing
    return (
      <HeroSection>
        <p>No data</p>
      </HeroSection>
    )
  }

  return (
    <HeroSection>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <NewsBit
          title="Announcements"
          news={announcements.data}
          href="/announcements"
        />
        <NewsBit
          title="The Satellite"
          news={satellite.data}
          href="/the-satellite"
        />
        <NewsBit title="Pararayos" news={pararayos.data} href="/pararayos" />
      </div>
    </HeroSection>
  )
}
