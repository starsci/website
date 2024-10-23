import type {CollectionConfig} from 'payload'
import {isSupervisorOrSatelliteMember} from '@/admin/access'

import {
  HTMLConverterFeature,
  lexicalEditor,
  lexicalHTML
} from '@payloadcms/richtext-lexical'

export const TheSatelliteNews: CollectionConfig = {
  slug: 'the-satellite-news',
  access: {
    read: () => true,
    create: isSupervisorOrSatelliteMember,
    update: isSupervisorOrSatelliteMember,
    delete: isSupervisorOrSatelliteMember
  },
  admin: {
    group: 'Newspaper'
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true
    },
    {
      name: 'authors',
      fields: [
        {
          name: 'first_name',
          type: 'text',
          required: true
        },
        {
          name: 'last_name',
          type: 'text',
          required: true
        }
      ],
      type: 'array',
      required: true
    },
    {
      name: 'category',
      type: 'select',
      options: [
        {label: 'News', value: 'news'},
        {label: 'Opinion', value: 'opinion'},
        {label: 'Feature', value: 'feature'},
        {label: 'Sports', value: 'sports'},
        {label: 'Science and Technology', value: 'sci-and-tech'}
      ]
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
        features: ({ defaultFeatures }) => [
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
