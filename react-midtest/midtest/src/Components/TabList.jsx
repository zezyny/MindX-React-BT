import React from 'react'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { Button } from 'antd';
import TimeAgo from 'timeago-react';
function TabList(props) {
    const renderAll = () => {
        let sortedData = props.item.sort((a, b) => a.timestamp - b.timestamp)
        return sortedData.map((item) => {
            const date = new Date(item.timestamp)
            return <Button className='contactList-btn' key={item.id} onClick={props.click} name={item.id}>
                <div className="contactContent-left">
                    <img src={item.avatar} />
                    <div className="chat-content">
                        <h5>{item.sender}</h5>
                        <p>{item.message}</p>
                    </div>
                </div>
                <TimeAgo datetime={item.timestamp} />
            </Button>
        })
    }

    const renderRead = () => {
        let sortedData = props.item.sort((a, b) => a.timestamp - b.timestamp)
        let readData = sortedData.filter((item) =>
            item.read == true)
        return readData.map((item) => {
            const date = new Date(item.timestamp * 1000)
            return <Button className='contactList-btn' key={item.id}>
                <div className="contactContent-left">
                    <img src={item.avatar} />
                    <div className="chat-content">
                        <h5>{item.sender}</h5>
                        <p>{item.message}</p>
                    </div>
                </div>
                <p>{date.getMinutes()} phút trước</p>
            </Button>
        })
    }
    const renderUnread = () => {
        let sortedData = props.item.sort((a, b) => a.timestamp - b.timestamp)
        let unreadData = sortedData.filter((item) =>
            item.read == false)
        return unreadData.map((it) => {
            const date = new Date(it.timestamp * 1000)
            return <Button className='contactList-btn' key={it.id}>
                <div className="contactContent-left">
                    <img src={it.avatar} />
                    <div className="chat-content">
                        <h5>{it.sender}</h5>
                        <p>{it.message}</p>
                    </div>
                </div>
                <p>{date.getMinutes()} phút trước</p>
            </Button>
        })
    }
    return (
        <Tabs
            defaultActiveKey="all"
            id="tab-list"
            className="mb-1"
            justify
            variant='pills'
        >
            <Tab eventKey="all" title="All">
                {renderAll()}
            </Tab>
            <Tab eventKey="read" title="Read">
                {renderRead()}
            </Tab>
            <Tab eventKey="unread" title="Unread">
                {renderUnread()}
            </Tab>
        </Tabs>
    );
}

export default TabList;
