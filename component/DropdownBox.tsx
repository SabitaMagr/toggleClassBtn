import React,{ReactNode,useState,Fragment,useEffect,} from 'react'


export interface DropdownOption{
    title:string;
    key:string | number;
    children: ReactNode;
}

interface ButtonProps{
    readonly options?:DropdownOption[];
    readonly containerClassName?: string;
    onButtonChange?:(key: string |number) =>void
}

const DropdownBox = ({containerClassName,options,onButtonChange}:ButtonProps) => {
    const [option]=useState<DropdownOption[]>(options || [])
    const [activeButton,setActiveButton]=useState<DropdownOption>(option[0])
    useEffect(()=>{
            if(onButtonChange){
                onButtonChange(activeButton.key)
            }
    })
  return (
    <div className={`${containerClassName} mt-5`}>
      <div className='m-5'>
            {
                option.map((data,i)=>{
                    return(
                        <button type='button' onClick={() =>{ setActiveButton (data)}} title={data.key as string} key={i} className={`${data.key ==activeButton.key }' p-2 border rounded'`}>{data.title}</button>
                        )
                })
            }
      </div>
      {
        option.map((data,i)=>{
            return (
                <Fragment>
                    {
                        activeButton.key == data.key &&
                        <div key={i}>
                           {data.children}
                        </div>
                    }
                </Fragment>
            )
        })
      }
    </div>
  )
}

export default DropdownBox
