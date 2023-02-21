import React, { useState } from 'react'

interface Props{
    question:string;
    answer:string;
}

const Accordian = ({question,answer} : Props) => {
    const [show,setShow]=useState(false);
  return (
    <>
    <div className=' mt-3 p-5' >
        <div>
            <div className=' flex justify-between bg-slate-200 p-2 items-center ' >
                <h1>{question}</h1>
                <span onClick={() =>setShow((show) => !show)} className=' text-3xl font-bold '>{show ? '-' :'+'}</span>
            </div>
                    {
                        show && <p className=' bg-slate-400 p-4' >{answer}</p>
                    }
        </div>
    </div>
    </>
  )
}

export default Accordian
