
import { Button, Input } from "antd";
import { IoIosArrowDown, IoIosCall, IoIosSend } from "react-icons/io";
import { BiSolidMicrophone } from "react-icons/bi";
import { BsFillCameraVideoFill } from "react-icons/bs";
import { LuMoreVertical } from "react-icons/lu";
import { GoDotFill } from "react-icons/go";
import { HiDotsHorizontal } from "react-icons/hi";
import { MdInsertEmoticon, MdOutlineAttachFile } from "react-icons/md";
import { AiFillPicture } from "react-icons/ai";
import 'react-chat-elements/dist/main.css'
import data from "./data";
import TimeAgo from "timeago-react";
import { useState } from "react";
export default function Boxchat(props) {
    const [reply, setReply] = useState()
    const [repContent, setRepContent] = useState([])
    const getReply = (event) => {
        setReply(event.target.value)
    }
    const sendBtn = () => {
        if (reply != "") {
            let newRep = [...repContent]
            newRep.push({
                rep: reply,
                timestamp: Date.now(),
                sendTo: props.item
            })
            setRepContent(newRep)
            setReply("")

        }
        localStorage.setItem('repJSON', JSON.stringify(repContent))
    }
    const renderRep = () => {
        let temp = repContent.filter((item) => item.sendTo == props.item)
        if (temp != null) {
            return temp.map((item) => {
                return <div className="outChat" key={item.sendTo}>
                    <div>
                        <span className="chat-bubble">{item.rep}</span>
                    </div>
                    <TimeAgo datetime={item.timestamp} className="chat-timestamp" live={false} />
                </div>
            })

        }

    }


    const renderChat = () => {
        let temp = data.find((it) => {
            return it.id == props.item
        })

        return <div key={props.item}>
            <div>
                <img src={temp.avatar} alt="" className="chat-avatar" />
                <span className="chat-bubble">{temp.message}</span>
            </div>
            <TimeAgo datetime={temp.timestamp} className="chat-timestamp" />
        </div>
    }
    return (
        <div className="chat-container">
            <div className="chat-header">
                <div className="chatHeader-left">
                    <span>{props.sender}</span>
                    <Button type="text"><IoIosArrowDown /></Button>
                    <GoDotFill color="green" />
                </div>
                <div className="chatHeader-right">
                    <Button type="primary"><IoIosCall /></Button>
                    <Button type="primary"><BsFillCameraVideoFill /></Button>
                    <Button><LuMoreVertical /></Button>
                </div>
            </div>
            <div className="chat-body">
                <div className="in-chat">{renderChat()}</div>
                <div className="out-chat">{renderRep()}</div>

            </div>
            <div className="chat-input">
                <Input placeholder="Type your message..." value={reply} onChange={getReply} />
                <div className="chatInput-btn">
                    <div className="chatInputBtn-left">
                        <Button><MdInsertEmoticon /></Button>
                        <Button><AiFillPicture /></Button>
                        <Button><MdOutlineAttachFile /></Button>
                        <Button><BiSolidMicrophone /></Button>
                        <Button><HiDotsHorizontal /></Button>
                    </div>
                    <div className="chatInputBtn-right">
                        <Button type="primary" onClick={sendBtn}>Send <IoIosSend /></Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
