import React from 'react'
import axios from 'axios'
import { useContext, useEffect, useState } from 'react'
import MovieContext from '../contexts/MovieContext'
import { useParams } from 'react-router-dom'

const MoviePage = () => {
  const { id } = useParams();

  const [movie, setMovie] = useState({})
  const [reviews, setReviews] = useState([])

  useEffect(() => {
    axios.get(`http://127.0.0.1:3000/api/movies/${id}`).then((res) => {
      console.log(res.data)
      console.log(res.data.reviews)
      setMovie(res.data)
      setReviews(res.data.reviews)
    })
  }, [])

  return (
    <>
      <div className='row'>
        <div className="col-12 col-md-6 col-lg-8">
          Immagine
        </div>
        <div className="col-12 col-md-6 col-lg-8">
          <h1>{movie.title}</h1>
          <p>direttore: {movie.director}</p>
          <p>genere: {movie.genre}</p>
          <p>anno: {movie.release_year}</p>
          {reviews.map((rev) =>
            <div key={rev.id} className='card mb-3 p-2'>
              <h4>{rev.name}</h4>
              <p>{rev.text}</p>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default MoviePage