import React from 'react';
import { useSelector } from 'react-redux';
import { TSearchResultArray } from '../../types/types';
import "./SearchResultPage.css"

function SearchResultPage() {
  const books:TSearchResultArray = useSelector((state:any) => state.books.searchResult)
  const totalItems = useSelector((state:any) => state.books.totalItems)
  console.log(books,"111111")
  console.log(totalItems,"111111")
  return (
    <main>
      <div className='container'>
        {totalItems!==undefined && books.length ? <span className='total-items'>Found {totalItems} results</span>:null}
        <div className='books-list'>
          {books!==undefined && books.length ? books.map(book=>{
            return (
              <div className='book-preview' key={book.id}>
                <img className='book-preview__img' src={book.img?book.img:"https://spectexexpert.ru/assets/template/images/cards/noimage.jpeg"} alt="book-miniImg"></img>
                <span className='book-preview__categories'>{book.categories?book.categories:""}</span>
                <h4 className='book-preview__title'>{book.title}</h4>
                <span className='book-preview__authors'>{book.authors ? book.authors.join():"No Author"}</span>
              </div>
            )
          }):"Ничего не найдено"}
        </div>
        <button className='load-more'>Load more</button>
      </div>
    </main>
  );
}

export default SearchResultPage;