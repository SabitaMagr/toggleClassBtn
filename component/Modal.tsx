import React ,{useState}from 'react'

interface Props{
    heading?:string;
    paragraph?:string;
}

const Modal = ({heading,paragraph}:Props) => {
    const [show,setShow]= useState<Boolean>(false);
    const hideModal=()=>setShow((show)=> !show);
  return (
    <div  className=' mt-5' >
      <div className=' items-center'>
        <button onClick={hideModal} className='p-2 font-bold ml-10 border rounded hover:border-sky-500 hover:text-sky-500'>Show Modal</button>
      </div>
      {
        show &&
        <div className=' '>
            <div className=' fixed bg-slate-200 inset-0'></div>
                <div className=' fixed w-96 p-5 border top-[10%] left-[10%] rounded-2xl bg-white'>
                    <div className=' flex justify-between'>
                        <h1 className=' font-bold'>{heading}</h1> 
                        <span className=' font-bold cursor-pointer' onClick={hideModal}>X</span>
                    </div>
                    <p className=' mt-2' >{paragraph}</p>
                    <div className='flex p-5 ml-24'>
                        <button onClick={hideModal} className='p-2 font-bold mr-3 border rounded hover:border-sky-500 hover:text-sky-500'>Cancel</button>
                        <button  onClick={hideModal} className='p-2 w-16 font-bold bg-sky-500 border text-white rounded  hover:bg-sky-300' >Ok</button>
                    </div>
                </div>
            
        </div>
        

      }
    </div>
  )
}

export default Modal
