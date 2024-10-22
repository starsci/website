import {NewsSection} from '../../../components/news-section'
import {Section} from '@/components/section'

import {getPayloadHMR} from '@payloadcms/next/utilities'
import config from '@payload-config'

const payload = await getPayloadHMR({config})

async function getAnnouncements() {
  'use server'

  // fetch clubs from clubs table
  const data = await payload.find({
    collection: 'school-announcements',
    pagination: true,
    limit: 5,
    sort: '-published_at'
  })

  console.log(data)

  return data
}

async function getSatellite() {
  'use server'

  // fetch clubs from clubs table
  const data = await payload.find({
    collection: 'the-satellite-news',
    pagination: true,
    limit: 5,
    sort: '-published_at'
  })

  console.log(data)

  return data
}


async function getPararayos() {
  'use server'

  // fetch clubs from clubs table
  const data = await payload.find({
    collection: 'ang-pararayos-news',
    pagination: true,
    limit: 5,
    sort: '-published_at'
  })

  console.log(data)

  return data
}


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
