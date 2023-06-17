import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Table from './Table';
import NameTitleImage from './NameTitleImage';
import PublishLanguage from './PublishLanguage';
import Description from './Description';
import { InfoProvider } from './Context';
import axios from 'axios';


const App = () => {
  const [search, setSearch] = useState("");
  const [bookData, setBookData] = useState([]);
  const searchInputRef = useRef();

  const [author, setAuthor] = useState("")
  const handleChildValue = (value) => {
    setAuthor(value.toString());
  };

  useEffect(() => {
    if (author) {
      searchInputRef.current.focus();
      setSearch(author)
      searchAuthorBook()
    }
  }, [author]);


  // FETCH
  const searchBook = (e) => {
    if (e.key === "Enter" || e.type === 'click') {
      axios.get('https://www.googleapis.com/books/v1/volumes?q=' + search + '&maxResults=8&key=AIzaSyByMaInieCYxjKQ06R75SD5kP8KX1b8Rw8')
        .then(res => setBookData(res.data.items))
        .catch(err => console.log(err))
      setSearch("")
    }
  }

  // FETCH OTHER BOOKS FROM THE SAME AUTHOR
  const searchAuthorBook = (e) => {
    axios.get('https://www.googleapis.com/books/v1/volumes?q=' + author + '&maxResults=8&key=AIzaSyByMaInieCYxjKQ06R75SD5kP8KX1b8Rw8')
      .then(res => setBookData(res.data.items))
      .catch(err => console.log(err))
    setSearch("")
  }

  return (
    <>
      <InfoProvider>
        <Router>
          <div>
            <div className='flex justify-center pt-10'>
              <input ref={searchInputRef} value={search} onChange={e => setSearch(e.target.value)} onKeyPress={searchBook} className='border border-gray-400 focus:border-gray-600 focus:outline-none focus:gray-blue-600 p-2 rounded shadow' type="text" placeholder='Enter your book name' />
              <button onClick={searchBook} className='bg-white hover:bg-gray-100 text-gray-800 px-2 border border-gray-400 rounded shadow ml-1'>search</button>
            </div>
            < Table book={bookData} handleChildValue={handleChildValue} authorrr={author} />
          </div>

          <Route path="/author" component={NameTitleImage} />
          <Route path="/language" component={PublishLanguage} />
          <Route path="/description" component={Description} />
        </Router >
      </InfoProvider>
    </>
  );
};



export default App;



