import React from 'react'
import './MovieCard.css'

export default function MovieCard({img, title, description, rating}) {
  return (
    <div className='single-movie' >
    {<img src={`../Assets/${img}`} alt='' className='single-img'/>}
    <h2>{title}</h2>
    <h4>Movie Description:</h4><p>{description}</p>
    <h3>Rating: {rating}</h3>
    </div>
  )
}
