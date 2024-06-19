import React from 'react'
import Search from './Search'
import User from './User'
import Logout from './Logout'
import useGetAllUsers from '../../context/useGetAllUsers'
import { RiH1 } from 'react-icons/ri'

export default function Left() {
  const [allUsers, loading] = useGetAllUsers()
  console.log(allUsers);

  return (
    <div className='w-[30%] bg-black text-gray-300'>
      <Search />
      <div className='flex-1 overflow-y-auto' style={{ maxHeight: "calc(92vh - 10vh)" }}>
        {allUsers ?
          allUsers.map((user, index) => (
            <User key={index} user={user} />
          )) : <h1>loading....</h1>
        }
      </div>
      <Logout />
    </div>
  )
}
