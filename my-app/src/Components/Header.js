import React from 'react'
import '../App.css'

export default function Header({handleChange, handleFilter}) {
  return (
    <div className='movie-header'>
    <p>Movie Book</p>
    <div>
    <input></input><button>Search Movies</button>
    </div>
    <button onClick={handleChange}>Add Movies</button>
    </div>
  )
}
