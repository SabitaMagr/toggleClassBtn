import React,{ReactNode,useState,Fragment,useEffect, useRef,} from 'react'
// import { MdArrowDropDown, MdArrowDropUp } from "react-icons/md";


export interface DropdownOption{
    value:string;
    key:string;
}

interface Props{
    placeholder: string;
    options: DropdownOption[];
    onSelect?: (activeOption: DropdownOption) =>void
}

const DropdownBox = ({placeholder,options,onSelect}:Props) => {
    const [activeOpt,setctiveOPt]=useState<DropdownOption>();
    const [show,setShow]=useState(false);
    const ref= useRef<HTMLDivElement>(null);

    const handleClick=(e:MouseEvent) =>{
        if(ref.current && !ref.current.contains(e?.target as Node)){
            setShow(false);
        }
    }
    useEffect(()=>{
            document.addEventListener("click",handleClick)
            return()=>{
                document.removeEventListener("click",handleClick)
            };
    },[ref]);
  return (
    <div ref={ref} className={`mt-5`}>
      <div className='m-5' onClick={()=>setShow(!show)}>
            <button type='button' className={`' p-2 border rounded'`}>{activeOpt?.key || placeholder}</button>
            {/* <span>{a}</span> */}
      </div>
      {show ? (
        <div >
            <div>
                {options.map((data,i)=>{
                    return(
                        <div key={i} onClick={()=>{
                            setctiveOPt(data);
                            setShow(false);
                            onSelect && onSelect(data);
                        }} >{data.key}</div>
                    );
                })}
            </div>
        </div>
      ) : null
      }
    </div>
  )
}

export default DropdownBox
