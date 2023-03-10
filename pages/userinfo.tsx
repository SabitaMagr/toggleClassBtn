import DropdownBox from "@/component/DropdownBox";
import Tab from "@/component/Tab";
import Link from "next/link"
import { useState } from "react"
import {HiUserCircle} from 'react-icons/Hi';

const user=()=>{
    return(
        <User/>
    )
}

export default user


const User=()=>{
    return (
        <div>            
            <Tab 
            options={[
            { 
                title: 'Own Profile',
                key:'tab-profile',
                children:<Profile/>
            },
            {
                title:'Change Password',
                key: 'tab-change password',
                children:<Password/>
            }
        ]}/>
        <div className="flex">
        <DropdownBox 
        options={[
            {
                key:'Nepali',
                value:'nepali'       
           },
            {
                key:'English',
                value:'english'
            },
            {
                key:'Hindi',
                value:'hindi'
            }
            ]}
            placeholder="Language"
            />
            <DropdownBox 
        options={[
            {
                key:'Nepal',
                value:'nepal'       
           },
            {
                key:'India',
                value:'india'
            },
            {
                key:'China',
                value:'china'
            }
            ]}
            placeholder="Country"
            />
        </div>
        
        </div>
        
    )
}

const Profile=()=>{
    return(
        <div className={`p-5 w-[50%] flex border font-bold bg-slate-400`} >
            <div className="w-[25%]">
                <span><HiUserCircle size={100}/></span>
            </div> 
        <div className=" w-[100%] mt-3">
             <h1 className=" p-2 text-lg underline ">Personal Information</h1>
             <div className="p-2 flex  gap-16 ">
                 <h5>Super Admin</h5>
                 <h5>Gaushala</h5>
                 <h5>Admin</h5>
             </div>
        </div>
        </div>
    )
}

const Password=()=>{
    return(
        <div className={`p-5 w-[50%] flex border rounded  text-center bg-slate-400`}>
                <div className=" ml-40">
                    <h1 className=" p-2 text-lg underline font-bold  ">Change Password</h1> <br/>
                    <input type="text" placeholder="Old Password" className=" text-center border rounded p-2 w-[15rem] " /> <br />
                    <input type="text" placeholder="New Password" className="text-center border rounded mt-4 p-2 w-[15rem]" /> <br />
                    <input type="text" placeholder="Re-Type New Password" className="text-center border rounded mt-4 mb-5 p-2 w-[15rem]"/> <br />
                    <button className=" border-green-600 bg-green-600 rounded p-2 font-bold">Save Changes</button><br />
                    <button className=" border-red-600  bg-red-600 rounded p-2 font-bold mt-5">Cancel</button>

                </div>
        </div>
    )
}

