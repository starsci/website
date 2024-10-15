import {createClient} from '@/utils/supabase/server'

export type News = {
  id: number
  title: string
  authors: string[]
  created_at: string
  body: string
  thumbnail_url: string | null
}

async function getNews(length: number, table: string) {
  const supabase = createClient()
  // get length most recent news from public.announcements
  const {data, error} = await supabase
    .from(table)
    .select('*')
    .order('created_at', {ascending: false})
    .limit(length)

  if (error) {
    throw error
  }

  return data as News[]
}

export async function getAnnouncements(maxLength: number = 5) {
  return getNews(maxLength, 'announcements')
}

export async function getTheSatellite(maxLength: number = 5) {
  return getNews(maxLength, 'news_satellite')
}

export async function getAngPararayos(maxLength: number = 5) {
  return getNews(maxLength, 'news_pararayos')
}
