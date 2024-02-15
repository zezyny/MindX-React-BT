import React, { useState } from 'react'
import "./style.css"
export default function Hompage() {
    const [data, setData] = useState(["task1", "task2"])


    const [input, setInput] = useState("")
    const changeInput = (event) => {
        setInput(event.target.value)
    }

    const submit = () => {
        if (data.find(item => item == input) == undefined) {
            // clone lại data
            let newData = [...data]
            newData.push(input)
            setData(newData)
            setInput("")
        } else {
            alert("Đã tồn tại")
        }

    }
    const deleteItem = (item) => {
        // clone lại data
        let newData = [...data]
        // tìm vị trí của phần tử trong mảng 
        let indexItem = newData.findIndex((it) => {
            return it == item
        })
        newData.splice(indexItem, 1)
        setData(newData)
    }


    //    ham render giao dien 
    const renderContent = () => {
        let arrJSX = []
        for (let i = 0; i < data.length; i++) {
            arrJSX.push(
                <div style={{ display: 'flex' }} className='task-list'>
                    <h3>{data[i]} </h3>
                    <button onClick={() => { deleteItem(data[i]) }}>delete</button>
                </div>
            )
        }
        return arrJSX
    }
    return (
        <div className='list-container'>
            <h1>Task list</h1>
            <div className='content'>
                <div className='input-container'>
                    <input onChange={changeInput} type="text" value={input} />
                    <button onClick={() => { submit() }}>submit </button>
                </div>
                {renderContent()}
            </div>
        </div>
    )
}
