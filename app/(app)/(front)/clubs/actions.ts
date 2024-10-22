'use server'

import {getPayloadHMR} from '@payloadcms/next/utilities'
import config from '@payload-config'

export async function getClubs() {
  const payload = await getPayloadHMR({config})

  // fetch clubs from clubs table
  const data = await payload.find<'clubs'>({
    collection: 'clubs',
    depth: 0,
    pagination: false,
  })

  console.log(data)

  return data
}
