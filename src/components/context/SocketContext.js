import { createContext, useEffect, useState } from "react";
import { useAuth } from "./AuthProvider";
import io from 'socket.io-client'





const socketContext = createContext()


export  const SocketProvider = ({ children }) => {
    const [socket, setSocket] = useState(null)
    const [authUser] = useAuth()


    useEffect(() => {
        if (authUser) {
            const socket = io("http://localhost:4048", {
                query: {
                    userId: authUser.user._id
                }
            })
            setSocket(socket)
        }
    }, [authUser])

    return(
        <socketContext.Provider value={{socket}}>
            {children}
        </socketContext.Provider>
    )
}