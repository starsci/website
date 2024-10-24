'use server'

import {getPayloadHMR} from '@payloadcms/next/utilities'
import config from '@payload-config'
import {CollectionSlug} from 'payload'

const payload = await getPayloadHMR({config})

export async function queryCollection<TSlug extends CollectionSlug>(
  collection: TSlug,
  options: Omit<Parameters<typeof payload.find<TSlug>>[0], 'collection'>
) {
  return await payload.find({
    collection,
    ...options
  })
}
