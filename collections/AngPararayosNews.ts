import type {CollectionConfig} from 'payload'
import {isSupervisorOrPararayosMember} from '@/admin/access'

import {
  HTMLConverterFeature,
  lexicalEditor,
  lexicalHTML
} from '@payloadcms/richtext-lexical'

export const AngPararayosNews: CollectionConfig = {
  slug: 'ang-pararayos-news',
  access: {
    read: () => true,
    create: isSupervisorOrPararayosMember,
    update: isSupervisorOrPararayosMember,
    delete: isSupervisorOrPararayosMember
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
      required: true,
      options: [
        {label: 'Balita', value: 'news'},
        {label: 'Opinyon', value: 'opinion'},
        {label: 'Lathalain', value: 'feature'},
        {label: 'Isports', value: 'sports'},
        {label: 'Agham at Teknolohiya', value: 'sci-and-tech'}
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
