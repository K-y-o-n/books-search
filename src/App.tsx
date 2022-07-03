import React from 'react';
import './App.css';
import SearchPage from './components/SearchPage/SearchPage';
import { BrowserRouter } from "react-router-dom";

function App() {
  const basename = document.querySelector('base')?.getAttribute('href') ?? '/'
  
  return (
  <BrowserRouter basename={basename}>
    <SearchPage />
  </BrowserRouter>
  );
}

export default App;
