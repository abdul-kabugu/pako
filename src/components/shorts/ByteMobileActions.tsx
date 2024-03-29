/*import MirrorPublication from '@components/Common/MirrorPublication'
import PublicationOptions from '@components/Common/Publication/PublicationOptions'
import PublicationReaction from '@components/Common/Publication/PublicationReaction'
import OpenActions from '@components/Watch/OpenActions'
import { Button, Dialog, DialogClose, Flex, IconButton } from '@radix-ui/themes'
import type { MirrorablePublication } from '@tape.xyz/lens'*/

import { SlLike } from "react-icons/sl";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { LuCircleDollarSign } from "react-icons/lu";
import { useState } from "react"
import { IoMdShareAlt } from "react-icons/io";
import ShareButtons from '../cards/Share';
import { useRouter } from "next/router";
import { GrLike } from "react-icons/gr";
import { TfiCommentAlt } from "react-icons/tfi";
import { PiShareFatThin } from "react-icons/pi";
import { TfiShare } from "react-icons/tfi";
import { AiOutlineGift } from "react-icons/ai";
import { FaRegCommentDots } from "react-icons/fa";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
  } from "@/components/ui/drawer"

import { WEBSITE_URL } from "@/assets/constant";
import Modal from "../common/Modal";
import TipModal from "../common/TipModal";
//  dark:bg-gray-700/10   bg-black/30 dark:sm:bg-inherit sm:mb-5  sm:bg-inherit


const ByteMObileActions = ({ video }: any) => {
  const [isShowTipModal, setisShowTipModal] = useState(false)
  const note = {
    noteId : video?.id,
    characterId : video?.profile?.id

  }

 
 

  const router = useRouter();

 

   const [testTruth, settestTruth] = useState(false)

  
  return (
    <div className='flex sm:w-16 rounded-sm flex-col items-center justify-between absolute sm:static px-3   bottom-20 sm:bottom-0 sm:right-0 right-0 z-50 space-y-2 text-text'>
             {testTruth? (
              <div className='flex items-center gap-2 text-rose-600 md:text-rose-500 cursor-pointer'>
      <GrLike   className="w-6 h-6"  />
  <p className=' text-sm md:font-semibold hidden'>{ "0"}</p>
              </div>
            ) : (
              <div className='flex items-center flex-col gap-2 p-2 bg-black/40 md:bg-inherit rounded-full justify-center  text-white md:text-black cursor-pointer' >
       
       <GrLike   className="w-6 h-6"  />
<p className='  '>{"0"}</p>
          </div>
            )
             }

<div className='flex p-2 bg-black/40 md:bg-inherit rounded-full justify-center  text-white md:text-black flex-col items-center  hover:text-rose-500 cursor-pointer'  >
    <LuCircleDollarSign   className="w-6 h-6" />


<p className='text-sm md:font-semibold '>30</p>
          </div>

  <Drawer>
  <DrawerTrigger asChild>
          <div className=' p-2 bg-black/50 md:bg-inherit rounded-full justify-center  text-white md:text-black flex flex-col items-center  hover:text-rose-500 cursor-pointer'  >
          
    <FaRegCommentDots   className="w-6 h-6" />
<p className='text-sm md:font-semibold '>0</p>
          </div>

          </DrawerTrigger>
          <DrawerContent>
          <div className="mx-auto w-full max-w-sm"> 
            <DrawerHeader>
            <DrawerTitle>Move Goal</DrawerTitle>
            <DrawerDescription>Set your daily activity goal.</DrawerDescription>
            </DrawerHeader>

            <div className="w-full bg-white h-[50vh]"></div>
           </div>

            </DrawerContent>
          </Drawer>

          <Drawer>
  <DrawerTrigger asChild>
  <div className=' p-2 bg-black/50 md:bg-inherit rounded-full justify-center  text-white md:text-black flex flex-col items-center  hover:text-rose-500 cursor-pointer'  >
    <AiOutlineGift   className="w-6 h-6" />
<p className='text-sm md:font-semibold '>0</p>
          </div>

          </DrawerTrigger>
          <DrawerContent>
          <div className="mx-auto w-full max-w-sm"> 
            <DrawerHeader>
            <DrawerTitle>Move Goal</DrawerTitle>
            <DrawerDescription>Set your daily activity goal.</DrawerDescription>
            </DrawerHeader>

            <div className="w-full bg-white h-[50vh]"></div>
           </div>

            </DrawerContent>
          </Drawer>

          <Drawer>
  <DrawerTrigger asChild>
  <div className="p-2 bg-black/50 md:bg-inherit rounded-full justify-center  text-white md:text-black flex flex-col items-center">
  <PiShareFatThin className="sm:text-2xl cursor-pointer text-white md:text-black hover:text-rose-500 " />
</div>

          </DrawerTrigger>
          <DrawerContent>
          <div className="mx-auto w-full max-w-sm"> 
            <DrawerHeader>
            <DrawerTitle>Move Goal</DrawerTitle>
            <DrawerDescription>Set your daily activity goal.</DrawerDescription>
            </DrawerHeader>

            <div className="w-full bg-white h-[50vh]"></div>
           </div>

            </DrawerContent>
          </Drawer>
        
    {/*}
          <TooltipProvider>
           <Tooltip>
            <TooltipTrigger>
            <div className=' items-center gap-2 text-text-primary cursor-pointer  flex' >
       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
  <path d="M11.644 1.59a.75.75 0 01.712 0l9.75 5.25a.75.75 0 010 1.32l-9.75 5.25a.75.75 0 01-.712 0l-9.75-5.25a.75.75 0 010-1.32l9.75-5.25z" />
  <path d="M3.265 10.602l7.668 4.129a2.25 2.25 0 002.134 0l7.668-4.13 1.37.739a.75.75 0 010 1.32l-9.75 5.25a.75.75 0 01-.71 0l-9.75-5.25a.75.75 0 010-1.32l1.37-.738z" />
  <path d="M10.933 19.231l-7.668-4.13-1.37.739a.75.75 0 000 1.32l9.75 5.25c.221.12.489.12.71 0l9.75-5.25a.75.75 0 000-1.32l-1.37-.738-7.668 4.13a2.25 2.25 0 01-2.134-.001z" />
</svg>
<p className='text-sm font-semibold hidden'>Minted 2</p>
        </div>
            </TooltipTrigger>
            <TooltipContent>
              <div className='flex items-center gap-2'>
                <p className='text-2xl'>💡</p>
                 <p className='text-sm font-semibold'>collecting NFT  requires <span>$PAX</span> Token </p>
              </div>
            </TooltipContent>
           </Tooltip>
        </TooltipProvider>

            */}
   <Dialog>
  <DialogTrigger>
 
 <div className="p-2 bg-black/50 md:bg-inherit rounded-full justify-center  text-white md:text-black flex flex-col items-center">
  <PiShareFatThin className="sm:text-2xl cursor-pointer text-white md:text-black hover:text-rose-500 " />
</div>

  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle className='mb-4 '>Share</DialogTitle>
      <DialogDescription>
       <ShareButtons url={`${WEBSITE_URL}/shorts/${note?.characterId}-${video?.noteId}`} />
      </DialogDescription>
    </DialogHeader>
  </DialogContent>
</Dialog>

 <Modal isOpen={isShowTipModal} closeModal={() => setisShowTipModal(! isShowTipModal)}>
 <TipModal  />
   
 </Modal>
    </div>
  )
}

export default ByteMObileActions
