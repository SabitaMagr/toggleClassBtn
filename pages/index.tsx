import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import { useState } from 'react'

// const inter = Inter({ subsets: ['latin'] })

const home=()=> {

 
  return (
    <Home/>
  )
}

export default home

const Home=()=>{
  const [state,setState] = useState (false);
  const toggleButton=()=>{
      setState(!state);
  }
  return(
    <button className={`${(state ? 'bg-red-500' : 'bg-green-500')}  p-5`} onClick={toggleButton}>{state ? 'InActive' : 'Active'}</button>
  )
}


