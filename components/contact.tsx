import React from 'react'
import { IoIosAdd } from 'react-icons/io'

export const Contact = () => {
  return (
    <div className='flex md:justify-end justify-end mt-10 md:mt-0 items-center'>
        <button className='flex flex-row tracking-widest uppercase text-white bg-black px-4 py-4 md:text-base text-xs items-center hover:bg-transparent hover:text-black hover:ring-2 ring-black transition-all md:rounded-none rounded-2xl'>
            <span className='md:text-base text-base'>Contact us</span>
            <IoIosAdd className='md:text-2xl text-3xl animate-pulse'/>
            
        </button>
    </div>
  )
}
