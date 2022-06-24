import React from 'react'
import { IoIosAdd } from 'react-icons/io'

export const Contact = () => {
  return (
    <div className='flex md:justify-end justify-end mt-10 md:mt-0 items-center'>
        <button className='flex flex-row tracking-widest uppercase text-white bg-black px-4 py-2 md:text-base text-xs items-center hover:animate-pulse'>
            <span className='text-lg'>Contact us</span>
            <IoIosAdd className='md:text-4xl text-4xl animate-spin'/>
            
        </button>
    </div>
  )
}
