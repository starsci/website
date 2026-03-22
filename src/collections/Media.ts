import type {CollectionConfig} from 'payload'

export const Media: CollectionConfig = {
  slug: 'media',
  access: {
    read: () => true
  },
  admin: {
    // hide from non-supervisors
    hidden: ({user}) => {
      if (user && user.collection === 'admins' && user.role === 'supervisor') {
        return false
      }

      return true
    }
  },
  upload: {
    // S3 storage is configured via plugin in payload.config.ts
    // Files are stored in S3 and served directly from there
  },
  fields: []
}
