import React from 'react'
import Search from './Search'
import Users from './Users'
import Logout from './Logout'

export default function Left() {
  return (
    <div className='w-[30%] bg-black text-gray-300'>
    <Search/>
      <Users/>
      <Logout/>
    </div>
  )
}
