import React from 'react'
import { Auth } from '@supabase/auth-ui-react'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import {SUPABSE_API_KEY, SUPABSE_APP_URL} from '../assets/constant'
import {
  // Import predefined theme
  ThemeSupa,
} from '@supabase/auth-ui-shared'


const supabase = createClientComponentClient(
{
  supabaseUrl : SUPABSE_APP_URL,
  supabaseKey : SUPABSE_API_KEY
}
)
export default function SignIn() {
  
  return (
    <div className='w-full h-screen flex flex-col justify-center items-center'>
         <h1>Web3  authentication</h1>

         <Auth
    supabaseClient={supabase}
    view="magic_link"
    appearance={{
      // If you want to extend the default styles instead of overriding it, set this to true
      extend: true,
      // Your custom classes
      className: {
        anchor: 'my-awesome-anchor',
        button: 'my-awesome-button',
        container : " w-[300px]"
        //..
      },
    }}
  /> 
 
    </div>
  )
}
