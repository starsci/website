'use server'

import {getPayloadHMR} from '@payloadcms/next/utilities'
import config from '@payload-config'

const payload = await getPayloadHMR({config})

export async function getAnnouncements() {
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

export async function getSatellite() {
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


export async function getPararayos() {
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