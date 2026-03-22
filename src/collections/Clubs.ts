import {isAdmin, isClubObject, isSupervisor, UserType} from '@/admin/access'
import type {CollectionConfig} from 'payload'

function canManageClubs(user: UserType) {
  if (!isAdmin(user)) {
    return false
  }

  // if supervisor, return true
  if (user.role == 'supervisor') {
    return true
  }

  if (!isClubObject(user.club)) {
    return false
  }

  // if club manager, return only announcements of their own club
  if (user.role == 'club-manager') {
    return {
      id: {
        equals: user.club.id
      }
    }
  }

  // otherwise,
  return false
}

export const Clubs: CollectionConfig = {
  slug: 'clubs',
  access: {
    read: ({req: {user}}) => {
      // if non-user or user is not admin, show
      if (!user || user.collection !== 'admins') {
        return true
      }

      return canManageClubs(user)
    },
    create: ({req: {user}}) => isSupervisor(user),
    update: ({req: {user}}) => canManageClubs(user),
    delete: ({req: {user}}) => isSupervisor(user)
  },
  admin: {
    useAsTitle: 'name'
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
