import type {CollectionConfig} from 'payload'
import {
  isSupervisorOrSocialMediaManager,
  isSupervisorOrSocialMediaManagerOrStaff
} from '@/admin/access'

import {
  HTMLConverterFeature,
  lexicalEditor,
  lexicalHTML
} from '@payloadcms/richtext-lexical'

export const SchoolAnnouncements: CollectionConfig = {
  slug: 'school-announcements',
  access: {
    read: isSupervisorOrSocialMediaManagerOrStaff,
    create: isSupervisorOrSocialMediaManager,
    update: isSupervisorOrSocialMediaManager,
    delete: isSupervisorOrSocialMediaManager
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
    },
    {
      name: 'internal', // This field is used to determine if the announcement is internal to staff/admins or publicly viewable
      label: 'Is announcement internal?',
      type: 'checkbox',
      defaultValue: false,
      admin: {
        position: 'sidebar'
      }
    }
  ]
}