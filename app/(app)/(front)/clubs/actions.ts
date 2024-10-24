'use server'

import config from '@payload-config'
import {getPayload} from 'payload'

export async function getClubs() {
  const payload = await getPayload({config})

  // fetch clubs from clubs table
  return await payload.find({
    collection: 'clubs',
    depth: 1,
    pagination: false
  })
}
