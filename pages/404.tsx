import React from 'react'
import Navbar from '../src/components/navbar/Navbar';

function NotFound() {
    return (
        <>
            <Navbar />
            <div className='container mx-auto'>
                <h1 className='mt-10 text-6xl text-emerald-500 font-bold text-center'>Not Found</h1>
            </div>
        </>
    )
}

export default NotFound;