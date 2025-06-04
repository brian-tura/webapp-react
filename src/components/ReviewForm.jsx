import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'


const ReviewForm = () => {
    const { id } = useParams();

    const initalData = {
        movie_id: parseInt(id),
        name: "",
        vote: null,
        text: ""
    }

    const [formData, setFormData] = useState(initalData)
    const navigate = useNavigate();

    const setFieldValue = (e) => {
        const { value, name } = e.target;
        setFormData({ ...formData, [name]: value })

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://127.0.0.1:3000/api/movies/reviews', formData).then(() => {
            navigate(`/movies/${id}`)
        })
    }


    return (
        <>
            <div className='container'>
                <div className='row'>
                    <div className='col-12'>
                        <h2>Nuova recensione</h2>
                    </div>
                    <div className='col-12'>
                        <form onSubmit={handleSubmit}>
                            <div className='row'>
                                <div className='col-12'>
                                    <label htmlFor="" className='control-label'>
                                        Name
                                    </label>
                                    <input type="text"
                                        name='name'
                                        className='form-control'
                                        placeholder='name'
                                        value={formData.name}
                                        onChange={setFieldValue}
                                    />
                                </div>
                                <div className='col-12'>
                                    <label htmlFor="" className='control-label'>
                                        Vote
                                    </label>
                                    <input type="number"
                                        name='vote'
                                        className='form-control'
                                        placeholder='vote'
                                        value={formData.vote}
                                        onChange={setFieldValue}
                                    />
                                </div>
                                <div className='col-12'>
                                    <label htmlFor="" className='control-label'>
                                        Review
                                    </label>
                                    <textarea type="text"
                                        name='text'
                                        className='form-control'
                                        placeholder='text'
                                        value={formData.text}
                                        onChange={setFieldValue}
                                    />
                                </div>
                                <button type='submit' className='btn btn-primary mt-3 ms-2 col-1'>Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ReviewForm