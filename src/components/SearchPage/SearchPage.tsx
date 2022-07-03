import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { MyDispatch } from '../../store';
import { searchBooks } from '../../store/actions/searchPageAction';

function SearchPage() {
  const [searchValue, setSearchValue] = useState<string>("");
  const [categoties, setCategoties] = useState<string>("all");
  const [sortingBy, setSortingBy] = useState<string>("relevance");
  const dispatch:MyDispatch = useDispatch();
  
  function search(e:any) {
    e.preventDefault();
    dispatch(searchBooks(searchValue))
  }

  return (
    <div>
      <form>
        <label>
          <input value={searchValue} onChange={(e) =>setSearchValue(e.target.value)}></input>
        </label>
        <label>
          <span>Categoties</span>
          <select value={categoties} onChange={(e) =>setCategoties(e.target.value)}>
            <option>all</option>
            <option>art</option>
            <option>biography</option>
            <option>computers</option>
            <option>history</option>
            <option>medical</option>
            <option>poetry</option>
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