import type { FC } from 'react'

type Props = {
  onClickVideo: () => void
}

const TopOverlay: FC<Props> = ({ onClickVideo }) => {
  return (
    <div className=' '>
      <h2 className=' z-30 text-white'>hello  world</h2>
    <div
      role='button'
      tabIndex={0}
      onClick={() => onClickVideo()}
      className='absolute inset-0 z-[1] w-full cursor-default outline-none'
    />
    </div>
  )
}

export default TopOverlay
