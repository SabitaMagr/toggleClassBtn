import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import { useState } from 'react'
import Accordian from '@/component/Accordian'
import accordionData from '../data/accordian.data'


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
        <div>

        </div>
        <div className=' w-[60%] ml-[14rem] '>
        <div>
            <h1 className=' text-xl font-bold text-center bg-slate-500 p-3 '>Accordion(Interview Questions) </h1>
        </div>
        {
          accordionData?.map((data,i)=>(
            <Accordian  question={data.question} answer={data.answer} key={i} />

          ))
        }
        </div>
        
      
    </div>

   </div>
  )
}


