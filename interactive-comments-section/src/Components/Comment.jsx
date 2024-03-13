import React from 'react'

const Comment = () => {
  return (
    <div className='bg-color-white p-4 rounded-[10px] flex flex-col my-2 relative'>
      <div className='w-full flex flex-row justify-between items-center mb-2'>
        <img src="./images/avatars/image-juliusomo.webp" alt="profile_user_image" className='w-10 h-auto' />
        <a href='#' className='font-bold'>juliusomo</a>
        <span className='bg-Moderate-blue py-[2px] px-[6px] text-[14px] font-bold text-white rounded'>you</span>
        <span className='txt-Grayish-Blue'>2 days ago</span>
      </div>
      <p className='my-2 txt-Grayish-Blue'>
      Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You've nailed the design and the responsiveness at various breakpoints works really well.
      </p>
      <div className='bg-Very-light-gray p-[5px] w-[30%] txt-Moderate-blue font-bold flex flex-row justify-between rounded-[8px] text-[18px]'>
        <button className='w-1/4'>+</button>
        <input type="text" name="" id="" value={12}  className='w-1/4 bg-transparent'/>
        <button className='w-1/4'>-</button>
      </div>
      <div className='flex flex-row absolute justify-between w-[70px] bottom-[20px] right-[20px] items-center'>
        <img src="/images/icon-reply.svg" alt="" />
        <span className='txt-Moderate-blue font-bold'>Reply</span>
      </div>
    </div>
  )
}

export default Comment
