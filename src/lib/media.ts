import {getPayload} from 'payload'
import config from '@payload-config'
import {unstable_cache} from 'next/cache'

export const getMediaUrlByFilename = unstable_cache(
  async (filename: string) => {
    const payload = await getPayload({config})

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
  },
  ['media'],
  {
    tags: ['media'],
    revalidate: 60 * 60 * 1 // 1 hour
  }
)
