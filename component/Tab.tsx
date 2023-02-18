import React,{ReactNode,useState,useEffect,Fragment} from 'react'

export interface TabOption{
    title:string;
    key:string | number;
    children: ReactNode;
}

interface TabProps{
    readonly options?:TabOption[];
    readonly containerClassName?: string;
    onTabChange?:(key:string | number) =>void
}

const Tab = ({containerClassName,options,onTabChange}:TabProps) => {
    const [option]= useState<TabOption[]>(options || [])
    const [activeTab, setActiveTab] = useState<TabOption>(option[0]);
    useEffect(()=>{
        if(onTabChange){
            onTabChange(activeTab.key)
        }
    },[activeTab])
  return (
    <div className={`${containerClassName} p-5 `}>
        <div className='pt-5'>
            {
                option.map((data,i)=>{
                    return(
                        <button onClick={() =>{ setActiveTab (data)}} type='button' key={i} className={`${data.key ==activeTab.key && 'bg-white'} bg-slate-400  border rounded font-bold p-5 rounded `} title={data.key as string}>
                            {data.title}
                        </button>
                    )
                })
            }
        </div>
        {
            option.map((data,i)=>{
                return(
                    <Fragment>
                        {
                            activeTab.key == data.key &&
                            <div key={i} className='px-2'>
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

export default Tab
