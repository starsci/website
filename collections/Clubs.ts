import type {CollectionConfig} from 'payload'

export const Clubs: CollectionConfig = {
  slug: 'clubs',
  access: {
    read: () => true
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true
    },
    {
      name: 'description',
      type: 'textarea',
      required: true
    },
    {
      name: 'logo',
      type: 'upload',
      relationTo: 'media',
      required: true
    }
  ]
}
