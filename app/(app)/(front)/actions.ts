'use server'

import {CollectionSlug, getPayload} from 'payload'
import config from '@payload-config'

const payload = await getPayload({config})

async function queryCollection(collection: CollectionSlug) {
  return await payload.find({
    collection,
    depth: 1,
    pagination: true,
    limit: 5,
    sort: '-createdAt'
  })
}

export async function getAnnouncements() {
  // fetch clubs from clubs table
  return await queryCollection('club-announcements')
}

export async function getSatellite() {
  // fetch clubs from clubs table
  return await queryCollection('the-satellite-news')
}

export async function getPararayos() {
  // fetch clubs from clubs table
  return await queryCollection('ang-pararayos-news')
}
