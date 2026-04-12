import {MetadataRoute} from 'next'
import {queryCollection} from '@/hooks/server/payload-query'

function getLatestTime(doc: any) {
  if (doc.length === 0) {
    return new Date()
  }

  return new Date(
    Math.max(
      ...doc.map((article: any) => new Date(article.createdAt).getTime())
    )
  )
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.API_BASE || ''

  const announcementsData = await queryCollection({
    collection: 'school-announcements',
    limit: 0,
    pagination: false
  })
  const pararayosData = await queryCollection({
    collection: 'news',
    where: {
      publication: {
        equals: 'pararayos'
      }
    },
    limit: 0,
    pagination: false
  })
  const satelliteData = await queryCollection({
    collection: 'news',
    where: {
      publication: {
        equals: 'the-satellite'
      }
    },
    limit: 0,
    pagination: false
  })

  const latestAnnouncement = getLatestTime(announcementsData.docs)
  const latestPararayos = getLatestTime(pararayosData.docs)
  const latestSatellite = getLatestTime(satelliteData.docs)

  const sitemap = [
    {
      url: baseUrl
    },
    {
      url: `${baseUrl}/about`
    },
    {
      url: `${baseUrl}/announcements`,
      lastModified: latestAnnouncement.toISOString()
    },
    {
      url: `${baseUrl}/pararayos`,
      lastModified: latestPararayos.toISOString()
    },
    {
      url: `${baseUrl}/the-satellite`,
      lastModified: latestSatellite.toISOString()
    },
    {
      url: `${baseUrl}/contact`
    },
    {
      url: `${baseUrl}/clubs`
    }
  ]

  // append announcements
  announcementsData.docs.forEach((announcement: any) => {
    sitemap.push({
      url: `${baseUrl}/announcements/${announcement.id}`,
      lastModified: new Date(announcement.createdAt).toISOString()
    })
  })

  // append Pararayos articles
  pararayosData.docs.forEach((article: any) => {
    sitemap.push({
      url: `${baseUrl}/pararayos/articles/${article.id}`,
      lastModified: new Date(article.createdAt).toISOString()
    })
  })

  // append The Satellite articles
  satelliteData.docs.forEach((article: any) => {
    sitemap.push({
      url: `${baseUrl}/the-satellite/articles/${article.id}`,
      lastModified: new Date(article.createdAt).toISOString()
    })
  })

  return sitemap
}
