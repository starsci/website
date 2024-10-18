'use server'

import {createClient} from '@/utils/supabase/server.ts'

export type Club = {
  id: number
  name: string
  logo_id: string
  description: string
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
