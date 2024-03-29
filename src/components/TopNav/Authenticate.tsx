import React from 'react'
import {useTheme} from 'next-themes'
import { disconnect } from '@particle-network/auth-core'
import  {createClient} from '@supabase/supabase-js'
import  {SUPABSE_APP_URL, SUPABSE_API_KEY}  from '../../assets/constant'
 type Props = {
   authenticate : any
 }

  const supabase =  createClient(SUPABSE_APP_URL, SUPABSE_API_KEY)
export default function Authenticate({authenticate} : Props) {
    const {theme} = useTheme()

	const signOut =  async () =>  {
		let res =  await supabase.auth.signOut()
		console.log("the response", res)
	}
  return (
	<div className='flex gap-2'>

<div className={`bg-black text-white px-1 md:px-2 py-1 md:py-1.5 cursor-pointer dark:bg-white dark:text-black rounded-xl font-semibold`} onClick={() => signOut()}>
    	{/*<ConnectButton >
		{(status, { connect, disconnect }) => (
			<button onClick={status.isConnected ? disconnect : connect} className='text-sm md:text-lg'>
				{!status.isConnected && "Connect"}
			</button>
		)}
		</ConnectButton>*/}

		 <p>Sign out</p>
   </div>

   <div className={`bg-black text-white px-1 md:px-2 py-1 md:py-1.5 cursor-pointer dark:bg-white dark:text-black rounded-xl font-semibold`} onClick={() => authenticate()}>
    	{/*<ConnectButton >
		{(status, { connect, disconnect }) => (
			<button onClick={status.isConnected ? disconnect : connect} className='text-sm md:text-lg'>
				{!status.isConnected && "Connect"}
			</button>
		)}
		</ConnectButton>*/}
   
		 <p>connect</p>
   </div>
  
   </div>
  )
}
