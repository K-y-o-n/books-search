import React from 'react';
import { useSelector } from 'react-redux';
import { TSearchResultArray } from '../../types/types';
import { ISearchParams } from '../../types/types';
import { TTotalItems } from '../../types/types';
import "./SearchResultPage.css"
import { useDispatch } from 'react-redux';
import { MyDispatch } from '../../store';
import { getMoreBooks } from '../../store/actions/searchPageAction';
import { Link } from "react-router-dom";
import { IStore } from '../../types/types';
import Spinner from '../Spinner/Spinner';

function SearchResultPage() {
  const books:TSearchResultArray = useSelector((state:IStore) => state.books.searchResult)
  const totalItems:TTotalItems = useSelector((state:IStore) => state.books.totalItems)
  const searchParams:ISearchParams = useSelector((state:IStore) => state.books.searchParams)
  const isLoading:boolean = useSelector((state:IStore) => state.loading)
  const dispatch:MyDispatch = useDispatch();
 
  function loadMore(){
    dispatch(getMoreBooks(searchParams.searchValue,searchParams.categories,searchParams.sortingBy,searchParams.startIndex+30))
  }

  return (
    <main>
      <div className='container-search-result'>
        {totalItems!==undefined && books.length ? <span className='total-items'>Found {totalItems} results</span>:null}

        <div className='books-list'>
          {books!==undefined && books.length ? books.map((book,index)=>{
            return (
              <Link to={`/book/${book.id}`} className='book-preview' key={book.id+index}>
                <img className='book-preview__img' src={book.img?book.img:"https://spectexexpert.ru/assets/template/images/cards/noimage.jpeg"} alt="book-miniImg"></img>
                <span className='book-preview__categories'>{book.categories?book.categories:""}</span>
                <h4 className='book-preview__title'>{book.title}</h4>
                <span className='book-preview__authors'>{book.authors ? book.authors.join(", "):"No Author"}</span>
              </Link>
            )
          }):books == undefined ?"Use the search to find a specific book":"Unfortunately, the search for the selected parameters did not return any results. Try searching with other parameters."}
        </div>

        {isLoading ? <Spinner />: null }

        {books!==undefined && books.length? <button className='load-more' onClick={loadMore}>Load more</button> :null}
      </div>
    </main>
  );
}

export default SearchResultPage;