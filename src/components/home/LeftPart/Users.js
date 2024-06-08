import React from 'react'
import User from './User'
import Logout from './Logout'

export default function Users() {
    return (
        <div className='pt-6 container mx-auto'>
            <h1 className='px-8 py-2 text-white font-semibold bg-slate-800 rounded-md text-center md:text-left'>Messages</h1>
            <div className='py-2 flex-1 overflow-y-auto' style={{maxHeight: "calc(74vh - 10vh)"}}>
                <div >
                    <User />
                    <User />
                    <User />
                    <User />
                    <User />
                    <User />
                    <User />
                    <User />
                    <User />
                    <User />
                    <User />
                </div>
            </div>
        </div>
    )
}