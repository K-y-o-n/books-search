import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { MyDispatch } from '../../store';
import { getBooksList } from '../../store/actions/searchPageAction';
import "./SearchPage.css"

function SearchPage() {
  const [searchValue, setSearchValue] = useState<string>("");
  const [categories, setCategories] = useState<string>("All");
  const [sortingBy, setSortingBy] = useState<string>("relevance");
  const dispatch:MyDispatch = useDispatch();
  
  function search(e:any) {
    e.preventDefault();
    dispatch(getBooksList(searchValue,categories,sortingBy))
  }

  return (
    <div className='container'>
      <form className='search-form'>
        <h2 className='search-form__title'>Boo<span>k</span>s Search</h2>
        <label className='search-form__input'>
          <input  value={searchValue} onChange={(e) =>setSearchValue(e.target.value)}></input>
          <button onClick={e => search(e)}>Search</button>
        </label>
        <div>
          <label className='search-form__filter'>
            <span>Categoties</span>
            <select className='search-form__filter_margin' value={categories} onChange={(e) =>setCategories(e.target.value)}>
              <option>All</option>
              <option>Art</option>
              <option>Biography</option>
              <option>Computers</option>
              <option>History</option>
              <option>Medical</option>
              <option>Poetry</option>
            </select>
          </label>
          <label className='search-form__filter'>
            <span>Sorting by</span>
            <select value={sortingBy} onChange={(e) =>setSortingBy(e.target.value)}>
              <option>relevance</option>
              <option>newest</option>
            </select>
          </label>
        </div>
      </form>
    </div>
  );
}

export default SearchPage;