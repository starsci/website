import {isSupervisorOrSocialMediaManager} from '@/admin/access'
import type {CollectionConfig} from 'payload'

export const OrganizationalChart: CollectionConfig = {
  slug: 'organizational-chart',
  access: {
    read: () => true,
    create: ({req: {user}}) => isSupervisorOrSocialMediaManager(user),
    update: ({req: {user}}) => isSupervisorOrSocialMediaManager(user),
    delete: ({req: {user}}) => isSupervisorOrSocialMediaManager(user)
  },
  admin: {
    useAsTitle: 'name',
    group: 'People',
    hidden: ({user}) => {
      if (!isSupervisorOrSocialMediaManager(user)) {
        return true
      }

      return false
    }
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true
    },
    {
      name: 'position',
      type: 'select',
      required: true,
      options: [
        {label: 'Principal', value: 'principal'},
        {label: 'Administrative Officer', value: 'administrative-officer'},
        {label: 'Registrar', value: 'registrar'},
        {label: 'Guidance Designate', value: 'guidance-designate'},
        {label: 'Head Teacher', value: 'head-teacher'},
        {label: 'Master Teacher', value: 'master-teacher'},
        {label: 'Key Teacher', value: 'key-teacher'}
      ]
    },
    {
      name: 'displayRole',
      type: 'text',
      required: true
    },
    {
      name: 'photo',
      type: 'upload',
      relationTo: 'media',
      required: true
    },
    {
      name: 'sortOrder',
      type: 'number',
      required: true,
      defaultValue: 1,
      admin: {
        description: 'Controls display order within each position group.'
      }
    }
  ]
}
