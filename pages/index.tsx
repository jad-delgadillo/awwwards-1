import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Contact } from '../components/contact'
import { Header } from '../components/header'
import { Menu } from '../components/Menu/menu'
import { MenuButton } from '../components/Menu/menuButton'


const Home: NextPage = () => {
  return (
    <div className=' block justify-center items-center min-h-screen z-10  w-20 md:border-r border-black'>
      <MenuButton/>

      <div className='flex flex-col w-screen min-h-screen justify-center md:pl-28 px-10 m-auto'>
        
        <Header/>
        <Contact/>
      </div>
    </div>
  )
}

export default Home
