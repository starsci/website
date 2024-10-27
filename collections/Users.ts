import {isSupervisor} from '@/admin/access'
import type {CollectionConfig} from 'payload'

export const Users: CollectionConfig = {
  slug: 'users',
  access: {
    read: isSupervisor
  },
  admin: {
    useAsTitle: 'email',
    group: 'People'
  },
  auth: true,
  fields: [
    // Email added by default
    // Add more fields as needed
    {
      name: 'role',
      type: 'select',
      required: true,
      options: [
        {label: 'Staff', value: 'staff'} // can view internal announcements
      ]
    }
  ]
}
