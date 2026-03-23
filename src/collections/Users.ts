import {hasSupervisorRole} from '@/admin/access'
import type {CollectionConfig} from 'payload'

export const Users: CollectionConfig = {
  slug: 'users',
  access: {
    read: () => true,
    create: ({req: {user}}) => hasSupervisorRole(user),
    update: ({req: {user}}) => hasSupervisorRole(user),
    delete: ({req: {user}}) => hasSupervisorRole(user)
  },
  admin: {
    useAsTitle: 'email',
    group: 'People',
    hidden: ({user}) => {
      // Hide the Users collection from non-supervisors
      if (!hasSupervisorRole(user)) {
        return true
      }

      return false
    }
  },
  auth: true,
  fields: []
}
