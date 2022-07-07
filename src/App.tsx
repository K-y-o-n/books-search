import React from 'react';
import SearchPage from './components/SearchPage/SearchPage';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SearchResultPage from './components/SearchResultPage/SearchResultPage';
import BookPage from './components/BookPage/BookPage';
import Footer from './components/Footer/Footer';

function App() {
  
  return (
  <BrowserRouter>
    <SearchPage />
    <Routes>
      <Route path="/" element={<SearchResultPage />}></Route>
      <Route path="book/:id" element={<BookPage />}></Route>
    </Routes>
    <Footer />
  </BrowserRouter>
  );
}

export default App;
