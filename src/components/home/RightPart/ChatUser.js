import React from 'react'

export default function ChatUser() {
    return (
        <div className='h-[10vh] flex space-x-3 items-center justify-center bg-gray-800 hover:bg-gray-700 duration-300'>
            <div className="avatar online">
                <div className="w-16 rounded-full">
                    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
            </div>
            <div >
                <h1 className='text-xl'>rup</h1>
                <span className='text-sm'>offline</span>
            </div>
        </div>
    )
}
