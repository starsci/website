import type {CollectionConfig} from 'payload'
import {isAdmin, isClubObject, UserType, ClubType} from '@/admin/access'
import {lexicalEditor} from '@payloadcms/richtext-lexical'
import {News as NewsType} from '@/payload-types'

function getNewsPublicationFromClub(
  user: UserType
): NewsType['publication'] | null {
  if (!isAdmin(user)) {
    return null
  }

  const club = user.club as ClubType
  if (!isClubObject(club)) {
    return null
  }

  const clubName = club.name

  if (clubName === 'Pararayos') {
    return 'pararayos'
  }

  if (clubName === 'The Satellite') {
    return 'the-satellite'
  }

  return null
}

function canManageNews(user: UserType) {
  if (isAdmin(user) && user.role === 'supervisor') {
    return true
  }

  const allowedPublication = getNewsPublicationFromClub(user)
  if (!allowedPublication) {
    return false
  }

  return {
    publication: {
      equals: allowedPublication
    }
  }
}

export const News: CollectionConfig = {
  slug: 'news',
  access: {
    read: ({req: {user}}) => {
      // if non-user or user is not admin, show
      if (!user || user.collection !== 'admins') {
        return true
      }

      // only show if can manage news of specific publication
      return canManageNews(user)
    },
    create: ({req: {user}}) => canManageNews(user),
    update: ({req: {user}}) => canManageNews(user),
    delete: ({req: {user}}) => canManageNews(user)
  },
  admin: {
    group: 'Newspaper',
    hidden: ({user}) => {
      // hide from non-supervisor or non-news-managers
      if (!canManageNews(user)) {
        return true
      }

      return false
    }
  },
  fields: [
    {
      name: 'publication',
      type: 'select',
      required: true,
      options: [
        {label: 'Pararayos', value: 'pararayos'},
        {label: 'The Satellite', value: 'the-satellite'}
      ],
      admin: {
        readOnly: true
      },
      defaultValue: ({user}) => {
        if (!user) {
          return null
        }

        const publication = getNewsPublicationFromClub(user)
        return publication
      }
    },
    {
      name: 'title',
      type: 'text',
      required: true
    },
    {
      name: 'authors',
      fields: [
        {
          name: 'first_name',
          type: 'text',
          required: true
        },
        {
          name: 'last_name',
          type: 'text',
          required: true
        }
      ],
      type: 'array',
      required: true
    },
    {
      name: 'category',
      type: 'select',
      required: true,
      options: [
        {label: 'News', value: 'news'},
        {label: 'Opinion', value: 'opinion'},
        {label: 'Feature', value: 'feature'},
        {label: 'Sports', value: 'sports'},
        {label: 'Science and Technology', value: 'sci-and-tech'}
      ]
    },
    {
      name: 'published_at',
      label: 'Published At',
      type: 'date',
      required: true
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
