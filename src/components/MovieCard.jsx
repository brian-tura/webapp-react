import React from 'react'
import { Link } from 'react-router-dom'

const MovieCard = ({ title, author, release_year, genre, abstract, img, id }) => {
    return (
        <>
            <div key={id} className='col-12 col-md-6 col-lg-4'>
                <div className='card'>
                    <div className="card-image-top">
                        <img src={img} className='img-fluid' alt="Movie" />
                    </div>
                    <div className='card-body'>
                        <h3 className='text-primary'>{title}</h3>
                        <h4>
                            <em>{author}</em>
                            <p>{genre}</p>
                            <p>{release_year}</p>
                            <p>{abstract}</p>
                            <Link className='btn btn-primary' to="/movies/1">Link</Link>
                        </h4>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MovieCard