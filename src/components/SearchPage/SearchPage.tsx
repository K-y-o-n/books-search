import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { MyDispatch } from '../../store';
import { getBooksList } from '../../store/actions/searchPageAction';

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
    <div>
      <form>
        <label>
          <input value={searchValue} onChange={(e) =>setSearchValue(e.target.value)}></input>
        </label>
        <label>
          <span>Categoties</span>
          <select value={categories} onChange={(e) =>setCategories(e.target.value)}>
            <option>All</option>
            <option>Art</option>
            <option>Biography</option>
            <option>Computers</option>
            <option>History</option>
            <option>Medical</option>
            <option>Poetry</option>
          </select>
        </label>
        <label>
          <span>SortingBy</span>
          <select value={sortingBy} onChange={(e) =>setSortingBy(e.target.value)}>
            <option>relevance</option>
            <option>newest</option>
          </select>
        </label>
        <button onClick={e => search(e)}>Искать</button>
      </form>
    </div>
  );
}

export default SearchPage;