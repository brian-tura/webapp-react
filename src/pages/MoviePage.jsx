import React from 'react'
import { useContext } from 'react'
import MovieContext from '../contexts/MovieContext'
import { useParams } from 'react-router-dom'

const MoviePage = () => {
  
  const { initalMovies } = useContext(MovieContext)
  const { id } = useParams();
  
  return (
    <>
      <div className='row'>
        <div className="col-12 col-md-6 col-lg-8">
          Immagine
        </div>
        <div className="col-12 col-md-6 col-lg-8">
          <h1>Titolo</h1>
          <p>Altre informazione</p>
        </div>
      </div>
    </>
  )
}

export default MoviePage