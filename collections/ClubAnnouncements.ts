import {isSupervisorOrClubManager} from '@/admin/access'
import type {CollectionConfig} from 'payload'

import {
  HTMLConverterFeature,
  lexicalEditor,
  lexicalHTML
} from '@payloadcms/richtext-lexical'

export const ClubAnnouncements: CollectionConfig = {
  slug: 'club-announcements',
  access: {
    read: () => true,
    create: isSupervisorOrClubManager,
    update: isSupervisorOrClubManager,
    delete: isSupervisorOrClubManager
  },
  admin: {
    group: 'Announcements'
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true
    },
    {
      name: 'published_at',
      label: 'Published At',
      type: 'date',
      required: true
    },
    {
      name: 'club',
      type: 'relationship',
      relationTo: 'clubs',
      required: true
    },
    {
      name: 'body',
      type: 'richText',
      required: true,
      editor: lexicalEditor({
        features: ({ defaultFeatures }) => [
          ...defaultFeatures,
          HTMLConverterFeature({}),
        ],
      }),
    },
    lexicalHTML('body', {
      name: 'bodyHTML'
    }),
    {
      name: 'thumbnail',
      type: 'upload',
      relationTo: 'media'
    }
  ]
}
