import React from 'react';

const Loader = () => {
    return (
        <div className='absolute h-full w-full bg-white z-10'>
            <div className="flex h-full items-center justify-center ">
                <div className="w-40 h-40 border-t-4 border-b-4 border-emerald-500 rounded-full animate-spin"></div>
            </div>
        </div>
    )
}

export default Loader