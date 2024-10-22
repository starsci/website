import {isClubManager, isSupervisorOrClubManager} from '@/admin/access'
import type {CollectionConfig} from 'payload'

export const ClubAnnouncements: CollectionConfig = {
  slug: 'club-announcements',
  access: {
    read: () => true,
    create: isSupervisorOrClubManager,
    update: isSupervisorOrClubManager,
    delete: isSupervisorOrClubManager
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
      required: true
    },
    {
      name: 'thumbnail',
      type: 'upload',
      relationTo: 'media'
    }
  ]
}
