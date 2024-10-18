import {createClient} from '@/utils/supabase/server'

export type News = {
  id: number
  title: string
  authors: string[]
  created_at: string
  body: string
  thumbnail_id: string
}

function newsPromise(table: string, maxLength: number) {
  const supabase = createClient()
  // get length most recent news from public.announcements
  const promise = supabase
    .from(table)
    .select('*')
    .order('created_at', {ascending: false})

  return maxLength > 0 ? promise.limit(maxLength) : promise
}

async function getNews(maxLength: number, table: string) {
  const promise = newsPromise(table, maxLength) // get length most recent news from public.announcements
  const {data, error} = await promise

  if (error) {
    throw error
  }

  console.log(data)

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

export async function getClubAnnouncements(
  clubId: number,
  maxLength: number = 5
) {
  const promise = newsPromise('club_announcements', maxLength)
  const {data, error} = await promise.eq('club_id', clubId)

  if (error) {
    throw error
  }

  return data as News[]
}
