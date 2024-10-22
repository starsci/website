import type {CollectionConfig} from 'payload'

export const Users: CollectionConfig = {
  slug: 'users',
  admin: {
    useAsTitle: 'email'
  },
  auth: true,
  fields: [
    // Email added by default
    // Add more fields as needed
    {
      name: 'role',
      type: 'select',
      hasMany: true,
      required: true,
      options: [
        {label: 'Admin', value: 'admin'}, // full control
        {label: 'Content Manager', value: 'content-manager'}, // can access the admin panel
        {label: 'Club Manager', value: 'club-manager'}, // in combination with content-manager, can manage announcements of their own club
        {label: 'Social Media Manager', value: 'social-media-manager'}, // in combination with content-manager, can manage school-wide announcements
        {label: 'Staff', value: 'staff'} // can view internal announcements
      ]
    }
  ]
}
