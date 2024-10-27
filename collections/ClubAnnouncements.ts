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
    create: ({req: {user}, data}) => {
      if (user?.role === 'supervisor' || user?.role === 'club-manager') {
        return true
      }

      // if data.club is null, return true
      if (!data?.club) {
        return true
      }

      // return false if club is not the same as user's club
      return data.club === user.club.id
    },
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
        features: ({defaultFeatures}) => [
          ...defaultFeatures,
          HTMLConverterFeature({})
        ]
      })
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
