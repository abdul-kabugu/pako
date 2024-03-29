import React from 'react'
import { IoDiamondOutline } from "react-icons/io5";


export default function EarnTokens({isShowAd} : any) {
  return (
    <div className='bg-gradient-to-b from-sky-500 via-blue-400 to-sky-300 h-[330px] flex-col w-[300px] hidden lg:flex fixed top-[70px] right-1 rounded-xl p-3'>
     <h1 className='text-white text-2xl font-semibold'>How to  Earn tokens  in lol app</h1>
       <div className='my-3'>
         <ul>
           <li className='flex space-x-2 items-center my-2'>
            <IoDiamondOutline className='text-white w-5 h-5'  />
            <span className='  text-white'>You like</span>
           </li>
         
           <li className='flex space-x-2 items-center my-2'>
            <IoDiamondOutline className='text-white w-5 h-5'  />
            <span className='  text-white'>You share</span>
           </li>
           <li className='flex space-x-2 items-center my-2'>
            <IoDiamondOutline className='text-white w-5 h-5'  />
            <span className='  text-white'>You post</span>
           </li>
           <li className='flex space-x-2 items-center my-2'>
            <IoDiamondOutline className='text-white w-5 h-5'  />
            <span className='  text-white'>You watch</span>
           </li>
           <li className='flex space-x-2 items-center my-2'>
            <IoDiamondOutline className='text-white w-5 h-5'  />
            <span className='  text-white'>You stake</span>
           </li>
         </ul>

          <h3 className='text-white'>You  get  rewarded  for each contribution You make in the platform</h3>

          <button className='bg-white text-black font-semibold my-3 w-full rounded-xl py-2 px-4'>Learn more</button>
       </div>
        </div>
  )
}
