import React from 'react'
import { RiSendPlaneFill } from "react-icons/ri";

export default function Typesend() {
    return (
        <div className='flex  h-[10vh]  bg-gray-800'>
            <div className ="w-[70%] mx-4">
                <input type="text" placeholder="Type here" className="border border-gray-700 outline-none px-4 py-3 w-full max-full mt-1 rounded-xl" />
            </div>
            <button>
                <RiSendPlaneFill className='text-3xl'/>
            </button>


        </div>
    )
}
