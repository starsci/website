import {postgresAdapter} from '@payloadcms/db-postgres'
import {lexicalEditor} from '@payloadcms/richtext-lexical'
import {nodemailerAdapter} from '@payloadcms/email-nodemailer'
import {s3Storage} from '@payloadcms/storage-s3'
import path from 'path'
import {buildConfig} from 'payload'
import {fileURLToPath} from 'url'
import nodemailer from 'nodemailer'
import sharp from 'sharp'

import {Admins} from './src/collections/Admins'
import {Media} from './src/collections/Media'
import {Clubs} from './src/collections/Clubs'
import {SchoolAnnouncements} from './src/collections/SchoolAnnouncements'
import {ClubAnnouncements} from './src/collections/ClubAnnouncements'
import {Users} from './src/collections/Users'
import {News} from './src/collections/News'
import {OrganizationalChart} from './src/collections/OrganizationalChart'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Admins.slug,
    importMap: {
      baseDir: path.resolve(dirname)
    }
  },
  collections: [
    Admins,
    Users,
    Media,
    Clubs,
    SchoolAnnouncements,
    ClubAnnouncements,
    News,
    OrganizationalChart
  ],
  plugins: [
    s3Storage({
      collections: {
        media: true
      },
      bucket: process.env.S3_BUCKET || '',
      config: {
        credentials: {
          accessKeyId: process.env.S3_ACCESS_KEY_ID || '',
          secretAccessKey: process.env.S3_SECRET_ACCESS_KEY || ''
        },
        region: process.env.S3_REGION || 'us-east-1'
      }
    })
  ],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'src', 'payload-types.ts')
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URL || ''
    }
  }),
  email: nodemailerAdapter({
    defaultFromName: 'No-reply',
    defaultFromAddress: 'no-reply@srsths.edu.ph',
    transport: nodemailer.createTransport({
      jsonTransport: true
    })
  }),
  sharp
})
