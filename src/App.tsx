import React from 'react';
import SearchPage from './components/SearchPage/SearchPage';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SearchResultPage from './components/SearchResultPage/SearchResultPage';
import BookPage from './components/BookPage/BookPage';

function App() {
  const basename = document.querySelector('base')?.getAttribute('href') ?? '/'
  
  return (
  <BrowserRouter basename={basename}>
    <SearchPage />
    <Routes>
      <Route path="/" element={<SearchResultPage />}></Route>
      <Route path="book/:id" element={<BookPage />}></Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
