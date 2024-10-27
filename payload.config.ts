// storage-adapter-import-placeholder
import {postgresAdapter} from '@payloadcms/db-postgres'
import {lexicalEditor} from '@payloadcms/richtext-lexical'
import {nodemailerAdapter} from '@payloadcms/email-nodemailer'
import {ZeptomailTransport} from 'nodemailer-zeptomail-transport'
import path from 'path'
import {buildConfig} from 'payload'
import {fileURLToPath} from 'url'
import nodemailer from 'nodemailer'
import sharp from 'sharp'

import {Admins} from './collections/Admins'
import {Media} from './collections/Media'
import {Clubs} from './collections/Clubs'
import {SchoolAnnouncements} from './collections/SchoolAnnouncements'
import {ClubAnnouncements} from './collections/ClubAnnouncements'
import {Users} from './collections/Users'
import {TheSatelliteNews} from './collections/TheSatelliteNews'
import {AngPararayosNews} from './collections/AngPararayosNews'
import addCloudinary from './plugins/cloudinary/cloudinaryPlugin'

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
    TheSatelliteNews,
    AngPararayosNews
  ],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts')
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI || ''
    }
  }),
  email: nodemailerAdapter({
    defaultFromName: 'No-reply',
    defaultFromAddress: 'no-reply@srsths.edu.ph',
    transport: nodemailer.createTransport(
      new ZeptomailTransport({
        apiKey: process.env.ZEPTOMAIL_API_KEY || '',
      })
    )
  }),
  sharp,
  plugins: [addCloudinary]
})
