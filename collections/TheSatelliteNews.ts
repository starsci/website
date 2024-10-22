import type {CollectionConfig} from 'payload'
import {
  isSupervisorOrSocialMediaManager,
  isSupervisorOrSocialMediaManagerOrStaff
} from '@/admin/access'

export const TheSatelliteNews: CollectionConfig = {
  slug: 'the-satellite-news',
  access: {
    read: () => true,
    create: isSupervisorOrSocialMediaManager,
    update: isSupervisorOrSocialMediaManager,
    delete: isSupervisorOrSocialMediaManager
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
        {label: 'Science and Technology', value: 'sci-and-tech'},
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
      required: true
    },
    {
      name: 'thumbnail',
      type: 'upload',
      relationTo: 'media'
    }
  ]
}
