import React from 'react'
import { GetInfo } from './Context'


const NameTitleImage = () => {
    const { bookItem } = GetInfo()

    return (
        <div className='m-8 mt-16 text-center border border-gray-400 rounded shadow py-6 px-4'>
            <h1 className='text-green-700 text-xl'>{bookItem.volumeInfo.title}</h1>
            <h3 className='text-sm mt-2'>Author: <span className='text-xl'>{bookItem.volumeInfo.authors}</span> </h3>
        </div>
    )
}

export default NameTitleImage