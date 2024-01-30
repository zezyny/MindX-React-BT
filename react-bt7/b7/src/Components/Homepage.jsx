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

    const delTask = (event) => {
        let delItem = task.filter((it) => {
            return it.id != event.target.id
        })
        setTask(delItem)
        toast.info("Xóa thành công!")
        return
    }
    const changeStat = (id) => {
        console.log(id);
        setTask(
            task.map((item) =>
                item.id === id ? { ...item, taskStat: !item.taskStat } : item
            )
        )
        let checkedItem = task.find((it) => {
            return it.id == id
        })
        toast.info(`Cập nhật trạng thái ${checkedItem.taskName}`)
    }
    const changeInput = (event) => {
        setInput(event.target.value)
    }
    const addBtn = () => {
        // let temp = task.find(it => it.taskName == input)
        if (task.find(it => it.taskName == input) != undefined) {
            toast.error("Đã tồn tại!")
            return
        }
        if (!input) {
            toast.error("Không được để trống")
            return
        }

        let newTask = [...task]
        newTask.push({
            id: Math.floor(Math.random() * 10000) + 1,
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
                    <Button type='primary' onClick={addBtn}>Add</Button>
                </div>
                <div className='nav'>
                    <div className='tabList'>
                        <TabList item={task} del={delTask} change={changeStat} />
                    </div>

                </div>

            </div>
            <ToastContainer />
        </>
    )
}
