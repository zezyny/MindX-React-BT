import React from 'react'
import { data } from './data.json';
export default function NewRelease(props) {
    const renderList = () => {
        return data.map((item) => {
            return <div key={item.id} className='movie-container'>
                <button style={{ backgroundImage: `url(${item.image})` }} onClick={props.click} name={item.id}>
                    <span>Episode {item.episode}</span>
                </button >
                <button onClick={props.click} className='a' name={item.id}>{item.movieName}</button>
            </div>
        })
    }
    return (
        <div>
            <h2>New release</h2>
            <div className='list-container'>

                {renderList()}
            </div>
        </div>
    )
}
