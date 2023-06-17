import React from 'react'
import { useState } from "react"
import { Link } from 'react-router-dom'

const Breadcrumb = () => {
    const booksPath = ['author', 'language', 'description']
    const [activeIndex, setActiveIndex] = useState(null)

    return (
        <div>
            <div className='flex'>
                {
                    booksPath.map((path, index) => {
                        return <React.Fragment key={index}>
                            {index > 0 && index !== path.length && <span className='py-2'>/</span>}
                            <h1 onClick={() => { setActiveIndex(index); }} className={index === activeIndex ? 'text-blue-700 p-2' : ' p-2'}><Link to={path}>{path}</Link></h1>
                        </React.Fragment>
                    })
                }
            </div>
        </div >
    )
}

export default Breadcrumb