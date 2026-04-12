import {hasSupervisorRole, isStaffUser} from '@/admin/access'
import type {CollectionConfig} from 'payload'

export const Users: CollectionConfig = {
  slug: 'users',
  access: {
    read: ({req: {user}}) => {
      if (hasSupervisorRole(user)) {
        return true
      }

      if (isStaffUser(user)) {
        return {
          id: {
            equals: user.id
          }
        }
      }

      return false
    },
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
