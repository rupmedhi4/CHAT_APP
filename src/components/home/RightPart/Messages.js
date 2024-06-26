import React from 'react'
import Message from './Message'
import useGetMessage from '../../context/useGetMessage'

export default function Messages() {
  const {loading, messages} = useGetMessage()
  console.log(messages);
  
    return (
        <div className='flex-1 overflow-y-auto' style={{minHeight:"calc(92vh - 10vh)"}}>
          <Message/>
         
        </div>
    )
}
