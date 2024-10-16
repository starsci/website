'use server'

import {createClient} from '@/utils/supabase/server'
import {v2} from 'cloudinary'

export type Club = {
  id: number
  name: string
}

export async function getClubs() {
  const supabase = createClient()

  // fetch clubs from clubs table
  const {error, data} = await supabase.from('clubs').select('*').order('name')

  // throw error if there is any
  if (error) {
    throw error
  }

  return data as Club[]
}

export async function getClubLogoUrl(
  clubId: number,
  width = 100,
  height = 100
) {
  // retrieve cloudinary/logos/club.id from the club id
  return v2.url(`logos/${clubId}`, {
    width,
    height,
    format: 'webp',
    gravity: 'face',
    crop: 'fill'
  })
}
