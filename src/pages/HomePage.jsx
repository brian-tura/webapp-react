import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import MovieCard from '../components/MovieCard';
import { useContext, useState } from 'react';
import MovieContext from '../contexts/MovieContext';
import axios from 'axios';


const HomePage = () => {

  // const { initialMovies } = useContext(MovieContext);
  const [initialMovies, setInitalMovies] = useState([])

  useEffect(() => {
    axios.get('http://127.0.0.1:3000/api/movies/').then((res) => {
      console.log(res.data);
      setInitalMovies(res.data)
    }).catch((err) => {
      console.log(err)
    })
  }, [])

  return (
    <>
      <h1>Movies</h1>
      <div className='row gy-4'>
        {initialMovies.map((movie) =>
          <MovieCard title={movie.title} author={movie.director} genre={movie.genre} release_year={movie.release_year} abstract={movie.abstract} img={movie.image} id={movie.id}/>
        )}
      </div>
    </>
  )
}

export default HomePage