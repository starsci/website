// https://github.com/payloadcms/payload/discussions/220#discussioncomment-976890

import {Config} from 'payload'
import {
  // afterChangeHook,
  afterDeleteHook,
  beforeChangeHook
} from './hooks/CloudinaryMediaHooks'

const addCloudinary = (incomingConfig: Config): Config => {
  const config: Config = {
    ...incomingConfig,
    collections: incomingConfig.collections?.map(collection => {
      if (Boolean(collection.slug === 'media')) {
        return {
          ...collection,
          hooks: {
            ...collection.hooks,
            beforeChange: [beforeChangeHook],
            // afterChange: [afterChangeHook],
            afterDelete: [afterDeleteHook]
          },
          fields: [
            ...collection.fields,
            {
              name: 'public_id', // This field would be needed to delete and update cloudinary files.
              label: 'Cloudinary Public ID',
              type: 'text',
              access: {
                // prevent writing to the field, instead hooks are responsible for this
                create: () => false,
                update: () => false
              },
              admin: {
                position: 'sidebar',
                condition: data => Boolean(data?.public_id),
                readOnly: true
              }
            },
            {
              name: 'url',
              label: 'Cloudinary URL',
              type: 'text',
              access: {
                // prevent writing to the field, instead hooks are responsible for this
                create: () => false,
                update: () => false
              },
              // I don't think we need this because I already set it in beforeChangeHook,
              // I hope I am not missing something? but everything works smoothly for now
              hooks: {
                afterRead: [
                  ({data}) => {
                    return data?.url
                  }
                ]
              },
              admin: {
                position: 'sidebar',
                readOnly: true,
                // only show the field when it has a value
                condition: data => Boolean(data?.url)
              }
            }
          ]
        }
      }

      return collection
    })
  }

  return config
}

export default addCloudinary
