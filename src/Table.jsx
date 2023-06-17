import React, { useState } from 'react';
import DetailedData from './DetailedData';

function Table({ book: books, handleChildValue }) {

    const [showBox, setShowBox] = useState(false);
    const [bookItem, setBookItem] = useState();
    const [selectedRow, setSelectedRow] = useState(null)

    const handleSelectedRowClick = (index) => {
        setSelectedRow(index);
    };

    function handleAuthorRowClick(author) {
        handleChildValue(author)
    }


    return (
        <>
            <div class="flex flex-col p-8">
                <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                        <div class="overflow-hidden shadow">
                            <table class="min-w-full text-left text-sm font-light">
                                <thead class="border-b font-medium">
                                    <tr className='text-center border'>
                                        <th scope="col" class="px-6 py-2 border-x">Id</th>
                                        <th scope="col" class="px-6 py-2">Author</th>
                                        <th scope="col" class="px-6 py-2 border-l">Title</th>
                                        <th scope="col" class="px-6 py-2 border-x">Kind</th>
                                    </tr>
                                </thead>
                                {books.map((item, index) => {
                                    let CounterId = + index + 1
                                    return (
                                        <tbody>
                                            <tr onClick={() => { setShowBox(true); setBookItem(item); handleSelectedRowClick(index); handleAuthorRowClick(item.volumeInfo.authors) }} key={item.id} class={selectedRow === index ? "border-b text-center transition duration-300 ease-in-out bg-gradient-to-r from-neutral-200 to-neutral-400 " : "border-b text-center transition duration-300 ease-in-out hover:bg-neutral-100"}>
                                                <td class="cursor-pointer py-3 border-x font-medium">{CounterId}</td>
                                                <td class="cursor-pointer py-3 px-2">{item.volumeInfo.authors}</td>
                                                <td class="cursor-pointer py-3 px-2 border-l">{item.volumeInfo.title}</td>
                                                <td class="cursor-pointer py-3 px-2 border-x">{item.kind}</td>
                                            </tr>
                                        </tbody>
                                    )
                                })}
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <div className='absolute'>
                <DetailedData bookItem={bookItem} showBox={showBox} />
            </div>

        </>
    );

}

export default Table;
