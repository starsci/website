import {payload} from '@/lib/payload'
import {Media} from '@/payload-types'
import {cacheLife, cacheTag} from 'next/cache'

// get cached Media object
async function fetchCachedMediaById(id: number) {
  'use cache'

  // set cache time and tag
  cacheLife('weeks') // this doesn't change too much, so we can cache for a long time
  cacheTag('media') // if any media changes, we want to invalidate this cache

  const media = await payload.find({
    collection: 'media',
    where: {
      id: {
        equals: id
      }
    },
    limit: 1,
    pagination: false,
    depth: 0
  })

  if (media.docs.length === 1) {
    return media.docs[0]
  }

  return null
}

export async function fetchCachedMediaByName(filename: string) {
  'use cache'

  // set cache time and tag
  cacheLife('weeks') // this doesn't change too much, so we can cache for a long time
  cacheTag('media') // if any media changes, we want to invalidate this cache

  const media = await payload.find({
    collection: 'media',
    where: {
      filename: {
        contains: filename
      }
    },
    limit: 1,
    pagination: false,
    depth: 0,
    sort: '-createdAt'
  })

  if (media.docs[0]?.url) {
    return media.docs[0].url
  }

  return `https://placehold.co/400x400.png?text=${encodeURIComponent(filename)}`
}

export async function getMedia(media: Media | number | null | undefined) {
  // return the Media object if it's already a Media, otherwise fetch it by ID
  if (typeof media === 'number') {
    const mediaObj = await fetchCachedMediaById(media)
    return mediaObj
  }

  return media ?? null
}
