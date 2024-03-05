import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Tabslist from './Tabs';
export default function Homepage() {

    const [input, setInput] = useState("")
    const [task, setTask] = useState([])
    useEffect(() => {
        let storedTask = JSON.parse(localStorage.getItem('tasks'))
        if (storedTask) {
            let newTask = [...storedTask]
            setTask(newTask)
        }
    }, [])
    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(task))
    }, [task])
    const handleChange = (e) => {
        setInput(e.target.value)
    }
    const addTask = () => {
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
            id: Math.floor(Math.random() * 1000),
            taskName: input,
            complete: false
        })
        setTask(newTask)
        setInput("")
    }

    const checkCompleteTask = (id) => {
        setTask(
            task.map((item) =>
                item.id === id ? { ...item, complete: !item.complete } : item
            )
        )
    }
    const delTask = (id) => {
        let delItem = task.filter((it) => {
            return it.id != id
        })
        setTask(delItem)
        toast.info("Xóa thành công!")
        return
    }
    const delAllTask = () => {
        setTask([])
        return
    }
    return (
        <div>
            <h1>#todo</h1>

            <div className="task-container">
                <Tabslist
                    item={task}
                    change={checkCompleteTask}
                    del={delTask}
                    delall={delAllTask}
                    input={input}
                    changeInput={handleChange}
                    addTask={addTask}
                />
            </div>
            <ToastContainer />
        </div>
    )
}
