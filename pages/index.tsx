import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import { useState } from 'react'
import Accordian from '@/component/Accordian'

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
   <div>
    <div>
      <button className={`${(state ? 'bg-red-500' : 'bg-green-500')}  p-5`} onClick={toggleButton}>{state ? 'InActive' : 'Active'}</button>
        {/* to display paragraph when user click on questions */}
      <Accordian/>
    </div>

   </div>
  )
}


