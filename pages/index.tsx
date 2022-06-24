import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Contact } from '../components/contact'
import { Header } from '../components/header'

const Home: NextPage = () => {
  return (
    <div className='flex flex-col w-screen min-h-screen justify-center px-10 m-auto'>
      <Header/>
      <Contact/>
    </div>
  )
}

export default Home
