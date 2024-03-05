import React from 'react'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { Input, Button, Checkbox } from 'antd'
import { DeleteOutlined } from '@ant-design/icons';
export default function Tabslist(props) {
    const renderAllTask = () => {
        return props.item.map((i) => {
            return <div key={i.id} className={!i.complete ? 'task-list' : 'task-completed'} >
                <Checkbox checked={i.complete} onChange={() => { props.change(i.id) }} /> <span>{i.taskName}</span>
            </div >
        })
    }

    const renderActiveTask = () => {
        let all = props.item.filter((item) => {
            return item.complete == false
        })
        return all.map((i) => {
            return <div key={i.id} className='task-list'>
                <Checkbox checked={i.complete} onChange={() => { props.change(i.id) }} /> <span>{i.taskName}</span>
            </div>
        })
    }

    const renderCompletedTask = () => {
        let completed = props.item.filter((item) => {
            return item.complete == true
        })
        return completed.map((i) => {
            return <div key={i.id} className={!i.complete ? 'task-list' : 'task-completed'} id='completed-task' >
                <div><Checkbox checked={i.complete} onChange={() => { props.change(i.id) }} /> <span>{i.taskName}</span></div>
                <Button type="text" id={i.id} onClick={() => { props.del(i.id) }}><DeleteOutlined /></Button>
            </div>
        })
    }
    return (
        <div>
            <Tabs
                defaultActiveKey="All"
                className="mb-3"
                fill>
                <Tab eventKey="All" title="All"><div className="input-fields">
                    <Input value={props.input} onChange={props.changeInput} size='large' placeholder='add details' />
                    <Button type='primary' size='large' onClick={props.addTask}>Add</Button>
                </div>
                    {renderAllTask()}
                </Tab>
                <Tab eventKey="Active" title="Active"><div className="input-fields">
                    <Input value={props.input} onChange={props.changeInput} size='large' placeholder='add details' />
                    <Button type='primary' size='large' onClick={props.addTask}>Add</Button>
                </div>
                    {renderActiveTask()}
                </Tab>
                <Tab eventKey="Completed" title="Completed">
                    {renderCompletedTask()}
                    <Button className='del-all-btn' type='primary' danger onClick={props.delall}>Delete All</Button>
                </Tab>
            </Tabs>
        </div>
    )
}
