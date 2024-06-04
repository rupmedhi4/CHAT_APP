import React from 'react'
import { FaSearch } from "react-icons/fa";

export default function Search() {
  return (
   <div className='h-[10vh]'>
     <div className='px-6 py-4'>
      <form action="">
        <div className=" flex space-x-3">
          <label className="border-[1px] rounded-lg p-3 border-gray-700 flex items-center gap-2 w-[80%]">
            <input type="text" className="grow" placeholder="Search" />
          </label>
          <button><FaSearch className='text-5xl p-2 hover:bg-slate-600 rounded-full duration-300'/></button>
        </div>
      </form>
    </div>
   </div>
  )
}
