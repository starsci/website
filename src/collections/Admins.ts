import {hasSupervisorRole, canAccessOwnOrSupervisor} from '@/admin/access'
import type {CollectionConfig} from 'payload'

export const Admins: CollectionConfig = {
  slug: 'admins',
  access: {
    read: ({req: {user}}) => canAccessOwnOrSupervisor(user),
    create: ({req: {user}}) => hasSupervisorRole(user),
    update: ({req: {user}}) => canAccessOwnOrSupervisor(user),
    delete: ({req: {user}}) => hasSupervisorRole(user)
  },
  admin: {
    useAsTitle: 'email',
    group: 'People',
    hidden: ({user}) => !hasSupervisorRole(user)
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
      ],
      saveToJWT: true,
      access: {
        update: ({req: {user}}) => hasSupervisorRole(user)
      }
    },
    {
      name: 'club',
      type: 'relationship',
      relationTo: 'clubs',
      saveToJWT: true,
      validate: (value: unknown, {siblingData}: {siblingData?: {role?: string}}) => {
        if (siblingData?.role === 'club-manager' && !value) {
          return 'Club is required for club managers.'
        }

        return true
      },
      admin: {
        condition: data => data.role === 'club-manager' // only show this field if the user is a club manager
      },
      access: {
        update: ({req: {user}}) => hasSupervisorRole(user)
      }
    }
  ]
}
