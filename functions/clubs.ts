import {createClient} from '@/utils/supabase/server'

export type Club = {
  id: number
  name: string
}

function clubPromise() {
  const supabase = createClient()
  return supabase.from('clubs').select('*').order('name', {ascending: true})
}

export async function getClubs() {
  // get all clubs from public.clubs
  const {data, error} = await clubPromise()

  if (error) {
    throw error
  }

  return data as Club[]
}

export async function getClub(id: number) {
  // get club by id from public.clubs
  const promise = clubPromise().eq('id', id).single()
  const {data, error} = await promise

  if (error) {
    throw error
  }

  return data as Club
}
