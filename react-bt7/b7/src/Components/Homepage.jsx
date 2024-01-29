import React, { useState } from 'react'
import "./style.css"
import { Input } from 'antd';
import { Button } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import TabList from './Tabs';
export default function Homepage() {
    const [task, setTask] = useState([])
    const [input, setInput] = useState("")
    const changeInput = (event) => {
        setInput(event.target.value)
    }
    const addBtn = () => {
        if (!input) {
            toast.error("Không được để trống")
            return
        }
        let newTask = [...task]
        newTask.push({
            id: Math.floor(Math.random() * 100) + 1,
            taskName: input,
            taskStat: false
        })
        setTask(newTask)
        setInput("")
        toast.success("Thêm thành công!")
    }
    console.log(task)

    return (
        <>
            <div className='listContainer'>
                <h1>TO DO LIST</h1>
                <div className='inputField'>
                    <Input type="text" placeholder='Enter new task' onChange={changeInput} value={input} />
                    <Button type='primary' onClick={() => { addBtn() }}>Add</Button>
                </div>
                <div className='nav'>
                    <div className='tabList'>
                        <TabList item={task} />
                    </div>

                </div>

            </div>
            <ToastContainer />
        </>
    )
}
