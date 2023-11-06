import React from 'react'

const Loder = () => {
    const skeletonElements = Array.from({ length: 8 }, (_, index) => index);
    return skeletonElements.map(index => (
        <div key={index} className='w-60 h-auto border-2 rounded-md mx-auto mt-20'>
            <div className='flex animate-pulse flex-row items-center h-full justify-center space-x-5'>
                <div className='w-12 bg-gray-300 h-12 rounded-full'></div>
                <div className='flex flex-col space-y-3'>
                    <div className='w-36 bg-gray-300 h-6 rounded-md'></div>
                    <div className='w-24 bg-gray-300 h-6 rounded-md'></div>
                    <div className='w-24 bg-gray-300 h-6 rounded-md'></div>
                    <div className='w-36 bg-gray-300 h-6 rounded-md'></div>
                </div>
            </div>
        </div>
    ))
}



export default Loder