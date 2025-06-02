import React from 'react'
import { Link } from 'react-router-dom'
import MovieCard from '../components/MovieCard';
import { useContext } from 'react';
import MovieContext from '../contexts/MovieContext';


const HomePage = () => {

  const { initialMovies } = useContext(MovieContext);

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