import React, { useState } from 'react'
import Contact from './Contact'
import Boxchat from './Boxchat'
import data from './data'
import "./style.css"
export default function Homepage() {
    const [chat, setChat] = useState(1)
    const [sender, setSender] = useState("Shakura")
    const handleClickChat = (event) => {
        setChat(event.target.name)
        let getSend = data.find((item) => item.id == event.target.name)
        setSender(getSend.sender)
    }
    return (
        <div className='container'>
            <Contact click={handleClickChat} />
            <Boxchat item={chat} sender={sender} />
        </div>
    )
}
