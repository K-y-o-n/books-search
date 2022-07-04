import React from 'react';
import { useSelector } from 'react-redux';

function SearchResultPage() {
  const books = useSelector((state:any) => state.books.searchResult)
  console.log(books,"111111")
  return (
    <div>
      тут будут превью книг
    </div>
  );
}

export default SearchResultPage;