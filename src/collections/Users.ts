import {isSupervisor} from '@/admin/access'
import type {CollectionConfig} from 'payload'

export const Users: CollectionConfig = {
  slug: 'users',
  access: {
    read: () => true,
    create: ({req: {user}}) => isSupervisor(user),
    update: ({req: {user}}) => isSupervisor(user),
    delete: ({req: {user}}) => isSupervisor(user)
  },
  admin: {
    useAsTitle: 'email',
    group: 'People',
    hidden: ({user}) => {
      // Hide the Users collection from non-supervisors
      if (!isSupervisor(user)) {
        return true
      }

      return false
    }
  },
  auth: true,
  fields: []
}
