import React from 'react'
export default function Navbar() {
    return (
        <div className='nav-container'>
            <h1>Anonime</h1>
            <div className="nav-link">
                <a href="">Home</a>
                <a href="">List anime</a>
            </div>
            <input placeholder='Search anime or movie' />
        </div>
    )
}
