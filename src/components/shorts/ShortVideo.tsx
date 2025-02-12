//@ts-nocheck

import MetaTags from '../common/MetaTags'

import VideoPlayer from '../VideoPlayer'
import type { FC } from 'react'
import React, {useState, useEffect, useRef } from 'react'
import BottomOverlay from './BottomOverly'
import TopOverlay from './TopOverly'
import ByteActions from './ByteActions'
import { IPFS_GATEWAY } from '@/assets/constant'
import ByteMObileActions from './ByteMobileActions'
type Props = {
  video: any
  currentViewingId: string
  intersectionCallback: (id: string) => void
}

const ByteVideo: FC<Props> = ({
  video,
  currentViewingId,
  intersectionCallback
}) => {
  const videoRef = useRef<HTMLMediaElement>()
  const intersectionRef = useRef<HTMLDivElement>(null)
  //const targetPublication = getPublication(video)
  const [allFilterePosts, setallFilterePosts] = useState([])
  const [allPostswMetadata, setallPostswMetadata] = useState({})
  const [postMetadata, setpostMetadata] = useState()


 // Function to fetch metadata for a given CID
 const fetchMetadata = async (cid) => {
  try {
     fetch(`https://ipfs.subsocial.network/ipfs/${cid}`)
  .then(response => response.json())
  .then(data => setpostMetadata(data))
  .catch(error => console.error('Error:', error));
    
  } catch (error) {
    console.error('Error fetching metadata for CID:', cid, error);
    return {}; // Return empty object in case of error
  }
};
    
console.log('the post metadta', postMetadata)


     useEffect(() => {
      if(video){
        fetchMetadata(video?.contentURI)
      }
    
     }, [video])
     

  console.log("the  fuck video from video", video)
  const thumbnailUrl = `${IPFS_GATEWAY}${postMetadata?.cover}`
  const playbackId = `${postMetadata?.media}`
  const videoId = `${video?.profile?.id}-${video?.id}`
  const activeProfile = "0x004455663xacuuu"
  
  const playVideo = () => {
    if (!videoRef.current) {
      return
    }
    videoRef.current.currentTime = 0
    videoRef.current.volume = 1
    videoRef.current.autoplay = true
    videoRef.current?.play().catch(() => {})
  }

  const observer = new IntersectionObserver((data) => {
    if (data[0].target.id && data[0].isIntersecting) {
      intersectionCallback(data[0].target.id)
      const nextUrl = `${location.origin}/shorts/${videoId}`
      history.replaceState({ path: nextUrl }, '', nextUrl)
    }
  })

  useEffect(() => {
    if (intersectionRef.current) {
      observer.observe(intersectionRef.current)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const pauseVideo = () => {
    if (!videoRef.current) {
      return
    }
    videoRef.current.volume = 0
    videoRef.current?.pause()
    videoRef.current.autoplay = false
  }

  const onClickVideo = () => {
    if (videoRef.current?.paused) {
      playVideo()
    } else {
      pauseVideo()
    }
  }

  const refCallback = (ref: HTMLMediaElement) => {
    if (!ref) {
      return
    }
    videoRef.current = ref
    playVideo()
  }

  if (!video) {
    return null
  }

  //keen-slider__slide flex snap-center justify-center focus-visible:outline-none md:ml-16 md:pb-2
  return (
    <div className="keen-slider__slide flex snap-center  justify-center focus-visible:outline-none md:ml-16 md:pb-2 ">
      <MetaTags title={video?.metadata?.content?.title} />
      <div className="relative">
        <div className="rounded-xl 2xl:w-[650px] flex h-full  w-[calc(100vw-5px)]  min-w-[270px] items-center overflow-hidden bg-black  md:w-[490px] lg:w-[305px]">
          <div
            className="absolute top-[50%]"
            ref={intersectionRef}
            id={videoId}
          />
          <VideoPlayer
            address={activeProfile}
            refCallback={refCallback}
            playbackId={playbackId}
            posterUrl={thumbnailUrl}
            ratio="9to16"
            showControls={false}
            options={{
              autoPlay: currentViewingId === videoId,
              muted: currentViewingId !== videoId,
              loop: true,
              loadingSpinner: true,
              isCurrentlyShown: currentViewingId === videoId,
              maxHeight : true
            }}
           // shouldUpload={getShouldUploadVideo(targetPublication)}
          />
        </div>
        <TopOverlay onClickVideo={onClickVideo} />
        <BottomOverlay video={video} />
        <div className='sm:hidden px-2 '>
        
       {/*} <ByteActions video={video?.id} />*/}
       <ByteMObileActions  video={video?.id}    />
        </div>
      </div>
      <div className='hidden sm:flex  items-end '>
      <ByteActions video={video} />
      </div>
    </div>
  )
}

export default React.memo(ByteVideo)