import React from 'react'
import { IoIosAdd } from 'react-icons/io'

export const Contact = () => {
  return (
    <div className='flex flex-row justify-end items-center'>
        <button className='flex flex-row tracking-widest uppercase text-white bg-black px-4 py-2 md:text-base text-xs items-center'>
            <span>Contact us</span>
            <IoIosAdd className='md:text-2xl text-lg'/>
            
        </button>
    </div>
  )
}
