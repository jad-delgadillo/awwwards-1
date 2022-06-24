import React from 'react'
import { IoMdMenu } from 'react-icons/io'
import { MenuContent } from './menuContent'


export const MenuButton = () => {
  return (
    <div className='absolute justify-center items-center top-8 left-6'>
      <button 
      className=' justify-center items-center text-3xl'
      onClick={() => {}}>
        <span className=''>
          <IoMdMenu/>
        </span>
        </button>
    </div>
  )
}
