import React from 'react'
import './App.css';
import Breadcrumb from './Breadcrumb'
import { GetInfo } from './Context'
import { useHistory } from 'react-router-dom';

const DetailedData = ({ bookItem, showBox }) => {

    const history = useHistory();
    const goBack = () => {
        history.goBack();
    };

    const { getPathIndex } = GetInfo()
    getPathIndex(bookItem)

    return (
        <>
            {showBox &&
                <div className='flex justify-center text-center pl-8 mb-8'>
                    {/* BREADCRUMB */}
                    <button onClick={goBack} className='bg-white hover:bg-gray-100 text-gray-800 px-2 border border-gray-400 rounded shadow'>← Go back</button>
                    <Breadcrumb />
                </div>
            }
        </>
    )
}

export default DetailedData