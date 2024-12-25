'use client'

import {NewsBit} from '@/components/NewsBit'
import {HeroSection} from '@/components/HeroSection'
import {useQuery} from '@/hooks/use-query'

export function CampusNews() {
  const queryOptions = {
    depth: 1,
    pagination: true,
    limit: 5,
    sort: '-createdAt'
  }

  const satellite = useQuery({
    collection: 'the-satellite-news',
    ...queryOptions
  })
  const pararayos = useQuery({
    collection: 'ang-pararayos-news',
    ...queryOptions
  })

  if (satellite.isLoading || pararayos.isLoading) {
    // if any of the data is loading
    return (
      <HeroSection>
        <p>Loading...</p>
      </HeroSection>
    )
  }

  if (satellite.error || pararayos.error) {
    // if any of the data has an error
    return (
      <HeroSection>
        <p>Failed to load announcements:</p>
        {satellite.error && <p>{satellite.error.message}</p>}
        {pararayos.error && <p>{pararayos.error.message}</p>}
      </HeroSection>
    )
  }

  if (!satellite.data || !pararayos.data) {
    // if any of the data is missing
    return (
      <HeroSection>
        <p>No data</p>
      </HeroSection>
    )
  }

  return (
    <HeroSection>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
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
