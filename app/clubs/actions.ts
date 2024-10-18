'use server'

import {createClient} from '@/utils/supabase/server'

export type Club = {
  id: number
  name: string
  logoId: string
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
