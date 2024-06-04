import React from 'react'
import { AiOutlineLogout } from "react-icons/ai";

export default function Logout() {
  return (
   <div className='h-[10vh]'>
     <div className='px-6 py-4'>
          <button><AiOutlineLogout  className='text-5xl p-2 hover:bg-slate-600 rounded-full duration-300'/></button>
        </div>
    </div>

  )
}