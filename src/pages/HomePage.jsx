import React from 'react'
import { Link } from 'react-router-dom'

const HomePage = () => {
  return (
    <>
      <h1>Movies</h1>
      <div className='row gy-4'>
        <div className='col-12 col-md-6 mol-lg-4'>
          <div className='card'>
            <div className="card-image-top">
              <img src="" className='img-fluid' alt="Movie" />
            </div>
            <div className='card-body'>
              <h3 className='text-primary'>Titolo</h3>
              <h4>
                <em>Autore</em>
                <p>Excerpt</p>
                <Link className='btn btn-primary' to="/movies/1">Link</Link>
              </h4>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default HomePage