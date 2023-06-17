import React, { createContext, useContext, useState } from 'react'
export const InfoContext = createContext()
export function GetInfo() {
    return useContext(InfoContext)
}


export function InfoProvider({ children }) {

    const [bookItem, setBookItem] = useState('')
    const getPathIndex = (book) => {
        setBookItem(book)
        console.log(book)
    }


    return (
        <InfoContext.Provider value={{ getPathIndex, bookItem }}>
            {children}
        </InfoContext.Provider>
    )

}