import React from 'react'

export default function User() {
  return (
    <div>
         <div className='flex space-x-4 px-8 py-3 hover:bg-slate-700 duration-300 cursor-pointer'>
                <div className="avatar online">
                    <div className="w-12 rounded-full">
                        <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                    </div>
                </div>
                <div>
                    <h1>rup</h1>
                    <span>rup@gmail.com</span>
                </div>
            </div>
    </div>
  )
}