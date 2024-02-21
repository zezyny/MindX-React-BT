import React from 'react'

export default function Carousel(props) {
    const renderCarousel = () => {
        return <div key={props.item.id} className='carousel-container'>
            <img src={props.item.image} alt="" />
            <div className="movie-detail">
                <h2>{props.item.movieName}</h2>
                <p>{props.item.description}</p>
            </div>
        </div>
    }
    return (
        <div>
            {renderCarousel()}
        </div>
    )
}
