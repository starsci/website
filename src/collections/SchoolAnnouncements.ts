import type {CollectionConfig} from 'payload'
import {canManageAnnouncements, getAnnouncementReadAccess} from '@/admin/access'

import {lexicalEditor} from '@payloadcms/richtext-lexical'

export const SchoolAnnouncements: CollectionConfig = {
  slug: 'school-announcements',
  access: {
    read: ({req: {user}}) => getAnnouncementReadAccess(user),
    create: ({req: {user}}) => canManageAnnouncements(user),
    update: ({req: {user}}) => canManageAnnouncements(user),
    delete: ({req: {user}}) => canManageAnnouncements(user)
  },
  admin: {
    group: 'Announcements',
    hidden: ({user}) => {
      // hide if not supervisor or social media manager
      if (!canManageAnnouncements(user)) {
        return true
      }

      return false
    }
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
    },
    {
      name: 'internal', // This field is used to determine if the announcement is internal to staff/admins or publicly viewable
      label: 'Is announcement internal?',
      type: 'checkbox',
      defaultValue: false,
      admin: {
        position: 'sidebar'
      }
    },
    {
      name: 'frontPage',
      label: 'Is announcement for front page?',
      type: 'checkbox',
      defaultValue: false,
      admin: {
        position: 'sidebar'
      }
    }
  ],
  hooks: {
    beforeChange: [
      async ({data, req}) => {
        // remove the frontPage flag from all other announcements if this announcement is set to be on the front page
        if (data.frontPage) {
          await req.payload.update({
            collection: 'school-announcements',
            where: {
              frontPage: {
                equals: true
              }
            },
            data: {
              frontPage: false
            },
            req
          })
        }
        return data
      }
    ]
  }
}
