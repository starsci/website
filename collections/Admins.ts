import { isSupervisor } from '@/admin/access'
import type {CollectionConfig} from 'payload'

export const Admins: CollectionConfig = {
  slug: 'admins',
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
        {label: 'Supervisor', value: 'supervisor'}, // can manage all collections
        {label: 'Club Manager', value: 'club-manager'}, // can manage announcements of their own club
        {label: 'Social Media Manager', value: 'social-media-manager'} // can manage school-wide announcements
      ]
    },
    {
      name: 'club',
      type: 'relationship',
      relationTo: 'clubs',
      required: true,
      admin: {
        condition: data => data.role === 'club-manager' // only show this field if the user is a club manager
      }
    }
  ]
}
