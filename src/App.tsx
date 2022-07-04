import React from 'react';
import './App.css';
import SearchPage from './components/SearchPage/SearchPage';
import { BrowserRouter } from "react-router-dom";
import SearchResultPage from './components/SearchResultPage/SearchResultPage';

function App() {
  const basename = document.querySelector('base')?.getAttribute('href') ?? '/'
  
  return (
  <BrowserRouter basename={basename}>
    <SearchPage />
    <SearchResultPage />
  </BrowserRouter>
  );
}

export default App;
