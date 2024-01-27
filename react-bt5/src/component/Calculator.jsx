import React, { useState } from 'react'
import "./style.css"
export default function Calculator() {
    let [result, setResult] = useState("");

    const handleClick = (e) => {
        setResult(result.concat(e.target.name));
    }
    const clear = () => {
        setResult("")
    }
    const calculate = () => {
        setResult(eval(result))
    }
    return (
        <div className='calContainer'>
            <div className='calDisplay'>{result}</div>
            <button onClick={handleClick} name="7">7</button>
            <button onClick={handleClick} name="8">8</button>
            <button onClick={handleClick} name="9">9</button>
            <button onClick={handleClick} name="/">/</button>
            <button onClick={handleClick} name="4">4</button>
            <button onClick={handleClick} name="5">5</button>
            <button onClick={handleClick} name="6">6</button>
            <button onClick={handleClick} name="*">*</button>
            <button onClick={handleClick} name="1">1</button>
            <button onClick={handleClick} name="2">2</button>
            <button onClick={handleClick} name="3">3</button>
            <button onClick={handleClick} name="-">-</button>
            <button onClick={handleClick} name="0">0</button>
            <button onClick={calculate} name="=" style={{ backgroundColor: "#00cc66", color: "#fff" }}>=</button>
            <button onClick={clear} name="C">C</button>
            <button onClick={handleClick} name="+" style={{ backgroundColor: "#ffaa66", color: "#fff" }}>+</button>
        </div>
    )
}
