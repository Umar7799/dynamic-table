import React from 'react'
import { GetInfo } from './Context'


const PublishLanguage = () => {
    const { bookItem } = GetInfo()

    return (

        <div className='m-8 mt-16 text-center border border-gray-400 rounded shadow py-6 px-4'>
            <h4>{bookItem.volumeInfo.publisher} <span>{bookItem.volumeInfo.publishedDate}</span> </h4>
            <h1 className='text-blue-700 text-lg'><span className='text-black text-sm'>Language:</span> {bookItem.volumeInfo.language}</h1>
        </div>

    )
}

export default PublishLanguage