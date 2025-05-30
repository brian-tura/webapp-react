import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'

const DefaultLayouts = () => {
    return (
        <>
            <Header></Header>
            <main className='container'>
                <Outlet />
            </main>
        </>
    )
}

export default DefaultLayouts