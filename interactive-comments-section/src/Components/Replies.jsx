import React from 'react'
import Reply from './Reply'

const Replies = () => {
  return (
    <div className='border-l-solid border-l-[2px] border-black pl-10 ml-3'>
      <Reply activeUser={false}/>
      <Reply activeUser={false}/>
    </div>
  )
}

export default Replies
