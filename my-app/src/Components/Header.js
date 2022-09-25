import React from 'react'
import '../App.css'

export default function Header({handleChange, handleFilter, term}) {

  return (
    <div className='movie-header'>
    <p>Movie Book</p>
    <div>
    <input 
      type='search'
      placeholder='Search Movies....'
      onChange={(e) => handleFilter(e.target.value)}
    />
    {/* <input></input><button onChange={handleFilter}>Search Movies</button> */}
    </div>
    <button onClick={handleChange}>Add Movies</button>
    </div>
  )
}
