import React, { useState } from 'react'
import accordionData from '../data/accordian.data'

const Accordian = () => {
    const [data,setData]=useState(accordionData);
    const [show,setShow]=useState(false);
  return (
    <>
    <div className='  mt-5 ml-10 p-5' >
        <h1 className=' text-xl font-bold '>Accordion(Interview Questions) </h1>
        <div>
        {
            data.map((data,i)=>{
                return(
                    <div>
                    <div className=' flex' key={i}>
                        <p className='' onClick={()=>setShow(!show)}>+</p>
                        <h1>{data.question}</h1>
                    </div>
                    {
                        show && <p key={i}>{data.answer}</p>
                    }
                        
                    </div>
                    
                )
            })
        }
        </div>
    </div>
    </>
  )
}

export default Accordian
