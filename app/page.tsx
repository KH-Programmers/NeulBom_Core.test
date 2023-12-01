import { cookies } from 'next/headers'
import { redirect } from "next/navigation";

import { createClient } from '@utils/supabase/server'

export default async function Index() {
  const cookieStore = cookies()
  const supabase = createClient(cookieStore)
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    return redirect('/login')
  }
}
