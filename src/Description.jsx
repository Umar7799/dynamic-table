import React from 'react'
import { GetInfo } from './Context'

const Description = () => {
    const { bookItem } = GetInfo()

    return (
        <div className='m-8 mt-16 text-center border border-gray-400 rounded shadow py-6 px-4'>
            <a className='bg-white hover:bg-gray-100 text-gray-800 py-2 px-4 border border-gray-400 rounded shadow' href={bookItem.volumeInfo.previewLink}><button>More</button></a>
            <p className='mt-4'>{bookItem.volumeInfo.description}</p>
        </div>
    )
}

export default Description