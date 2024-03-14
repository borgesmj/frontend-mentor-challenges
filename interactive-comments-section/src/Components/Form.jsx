import React from 'react'

const Form = ({profilePic}) => {
  return (
    <form className='bg-color-white rounded-[10px] p-4 flex flex-wrap justify-between'>
      <textarea name="" id="" cols="30" rows="3" className='w-full rounded-[10px] px-6 py-4 border-solid border-[2px] border-Light-gray mb-6' placeholder='Add a comment..'></textarea>
      <img src={profilePic} alt="" className='h-8 w-auto mt-[15px]' />
      <input type="submit" value="SEND" className='font-medium bg-[#5457b6] text-white py-4 px-8 rounded-[10px]' />
    </form>
  )
}

export default Form
