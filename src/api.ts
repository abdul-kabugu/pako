import { APP_NAME, WC_PROJECT_ID, WEBSITE_URL, SUPABSE_API_KEY, SUPABSE_APP_URL } from '@/assets/constant';
import { createPagesBrowserClient } from '@supabase/auth-helpers-nextjs'

export const supabaseClient = createPagesBrowserClient(
    {
      supabaseUrl : SUPABSE_APP_URL,
      supabaseKey : SUPABSE_API_KEY
    }
      )