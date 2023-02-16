import Link from "next/link"
import { useState } from "react"
import {HiUserCircle} from 'react-icons/Hi';

const user=()=>{
    return(
        <User/>
    )
}

export default user

// const breadCrumb:{title:string,link:string}[]=[
//     {
//         title:'Own Profile',
//         link:'/profile'
//     },
//     {
//         title:'Change Password',
//         link:'/password'
//     },
// ]

const User=()=>{

    const [state,setState]=useState(1);

    const toggle = (index) =>{
        setState(index);
    }
    return (
        <div>
            <h1 className="p-5 font-serif text-3xl font-black">User Profile</h1>
            <div className="tabs w-[50%]  ml-10  inline-flex grid-cols-2 gap-4 ">
                <div className={`cursor-pointer  p-2 font-bold ${(state === 1 ? ' border-2 rounded-t-lg border-t-orange-600 tab active-tab' : 'tab')}`} onClick={()=>toggle(1)} >Own Profile</div>
                <div className={`tab cursor-pointer p-2 font-bold ${(state === 2 ? ' border-2 rounded-t-lg border-t-orange-600 tab active-tab' : 'tab')}`} onClick={()=>toggle(2)}>Change Password</div>
            </div>
            <div className="contentt  w-[100%] ml-10  inline-flex gap-2 ">
              <div className={`p-5 w-[100%]  font-bold ${(state === 1 ? 'content active-content flex border' : 'content')}`} >
                   <div className="w-[25%]">
                        <span><HiUserCircle size={100}/></span>
                   </div> 
                   <div className=" w-[100%] mt-3">
                        <h1 className=" p-2 text-base ">Personal Information</h1>
                        <div className="p-2 flex  gap-16 ">
                            <h5>Super Admin</h5>
                            <h5>Gaushala</h5>
                            <h5>Admin</h5>
                        </div>
                   </div>
              </div>
              <div className={`p-5 w-[100%] content invisible border flex font-bold ${(state === 2 ? 'content active-content invisible' : ' visible content')}`} >  
                  <div className=" w-[100%]">
                        <h1 className=" p-2 text-base ">Password</h1>
                        <div className="flex gap-16 ">
                            <h2>Admin</h2>
                            <h2 placeholder="Enter new password"></h2>
                            <h2 placeholder="Re-Enter new password"></h2>
                        </div>
                   </div>
              </div>
            </div>
            
        </div>
        
    )
}