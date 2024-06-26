import React from 'react'

export default function Message({ message }) {
    if (!message) {
        return null;
    }

    const authUser = JSON.parse(localStorage.getItem("ChatApp"));
    const itsMe = message.senderId === authUser.user._id;

    const chatName = itsMe ? " chat-end" : "chat-start";
    const chatColor = itsMe ? "bg-blue-500" : "";

    console.log(message.message);
    return (
        <div>
            <div className='p-4'>
                <div className={`chat ${chatName}`}>
                    <div className={`chat-bubble text-white ${chatColor}`}>
                        {message.message}
                    </div>
                </div>
            </div>

        </div>
    )
}  
