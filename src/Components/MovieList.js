import React from 'react'
import MovieCard from './MovieCard'

export default function MovieList({movies}) {
  return (
    <div className='movie-grid'>
        {movies.map( move =>  
        <div key={move.id}>
        <MovieCard  
        img={move.posterUrl}
        title={move.title}
        description={move.description} 
        rating={move.rating}  
        /> 
        </div>
        )}
        
    </div>
  )
}
