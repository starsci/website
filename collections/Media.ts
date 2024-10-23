import type {CollectionConfig} from 'payload'

export const Media: CollectionConfig = {
  slug: 'media',
  access: {
    read: () => true
  },
  upload: {
    // thumbnail image for the admin UI will use cloudinary instead of the admin host URL
    adminThumbnail: ({doc}) => String(doc.url)
  },
  fields: [
  ],
}
