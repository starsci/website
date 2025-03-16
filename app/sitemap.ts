import {MetadataRoute} from 'next'

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

  // fetch announcements, Pararayos, and The Satellite
  // to get the latest date of modification

  const announcements = await fetch(`${baseUrl}/api/school-announcements`)
  const pararayos = await fetch(`${baseUrl}/api/ang-pararayos-news`)
  const satellite = await fetch(`${baseUrl}/api/the-satellite-news`)

  if (!(announcements.ok && pararayos.ok && satellite.ok)) {
    throw new Error('Failed to fetch data')
  }

  const announcementsData = await announcements.json()
  const pararayosData = await pararayos.json()
  const satelliteData = await satellite.json()

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
      url: `${baseUrl}/pararayos/${article.id}`,
      lastModified: new Date(article.createdAt).toISOString()
    })
  })

  // append The Satellite articles
  satelliteData.docs.forEach((article: any) => {
    sitemap.push({
      url: `${baseUrl}/the-satellite/${article.id}`,
      lastModified: new Date(article.createdAt).toISOString()
    })
  })

  return sitemap
}
