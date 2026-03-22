import type {CollectionConfig} from 'payload'

import {lexicalEditor} from '@payloadcms/richtext-lexical'
import {isAdmin, isClubObject, UserType} from '@/admin/access'

function canManageClubAnnouncements(user: UserType) {
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
      club: {
        equals: user.club.id
      }
    }
  }

  // otherwise,
  return false
}

export const ClubAnnouncements: CollectionConfig = {
  slug: 'club-announcements',
  access: {
    read: ({req: {user}}) => {
      // if non-user or user is not admin, show
      if (!user || user.collection !== 'admins') {
        return true
      }

      return canManageClubAnnouncements(user)
    },
    create: ({req: {user}}) => canManageClubAnnouncements(user),
    update: ({req: {user}}) => canManageClubAnnouncements(user),
    delete: ({req: {user}}) => canManageClubAnnouncements(user)
  },
  admin: {
    group: 'Announcements'
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
      required: true,
      admin: {
        readOnly: true
      },
      defaultValue: ({user}) => {
        if (!user) {
          return null
        }

        if (
          user.collection === 'admins' &&
          user.role === 'club-manager' &&
          isClubObject(user.club)
        ) {
          return user.club.id
        }

        return null
      }
    },
    {
      name: 'body',
      type: 'richText',
      required: true,
      editor: lexicalEditor({
        features: ({defaultFeatures}) => [...defaultFeatures]
      })
    },
    {
      name: 'thumbnail',
      type: 'upload',
      relationTo: 'media'
    }
  ]
}
