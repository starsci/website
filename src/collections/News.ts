import type {CollectionConfig} from 'payload'
import {canCreateNews, canManageNews} from '@/admin/access'

import {lexicalEditor} from '@payloadcms/richtext-lexical'

export const News: CollectionConfig = {
  slug: 'news',
  access: {
    read: () => true,
    create: canCreateNews,
    update: canManageNews,
    delete: canManageNews
  },
  admin: {
    group: 'Newspaper'
  },
  fields: [
    {
      name: 'publication',
      type: 'select',
      required: true,
      options: [
        {label: 'Pararayos', value: 'pararayos'},
        {label: 'The Satellite', value: 'the-satellite'}
      ]
    },
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
        features: ({defaultFeatures}) => [...defaultFeatures]
      })
    },
    {
      name: 'thumbnail',
      type: 'upload',
      relationTo: 'media'
    }
  ]
}
