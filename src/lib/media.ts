import {getPayload} from 'payload'
import config from '@payload-config'

export async function getMediaUrlByFilename(filename: string) {
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
}
