import {isSupervisor, isSupervisorOrClubManager} from '@/admin/access'
import type {CollectionConfig} from 'payload'

export const Clubs: CollectionConfig = {
  slug: 'clubs',
  access: {
    read: () => true,
    create: isSupervisor,
    update: isSupervisorOrClubManager,
    delete: isSupervisor
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
