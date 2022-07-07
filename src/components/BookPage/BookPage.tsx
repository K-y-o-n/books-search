import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {useSelector } from 'react-redux';
import { IStore } from '../../types/types';
import "./BookPage.css"

function BookPage() {
  const id = useParams().id;
  const bookInfo = useSelector((state:IStore) => state.books.searchResult.find((el)=>el.id === id))
  const [IMG,setIMG]=useState("")

  async function getBookInfo(id:string) {
    try {
      const response = await fetch(`https://www.googleapis.com/books/v1/volumes/${id}`);
  
      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
      }
  
      const data = await response.json();
      setIMG(data.volumeInfo.imageLinks.small)
  
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(()=>{
    getBookInfo(id)
  },[])

  return (
    <main className='wrapper'>
      <div className='book'>
        <div className='book__img-wrapper'>
          <img className='book__img' src={IMG ?IMG:bookInfo?.img}></img>
        </div>
        
        <div className='book__info'>
          <h2>{bookInfo?.title}</h2>
          <p className='book__info-categories'>{bookInfo?.categories ? bookInfo?.categories.join(", "): "No categories"}</p>
          <p className='book__info-authors'>{bookInfo?.authors ? bookInfo.authors.join(", "):"No Author"}</p>
            <div>
              <p>{bookInfo?.description ? bookInfo?.description : "No description" }</p>
            </div>
        </div>
      </div>
    </main>
  );
}

export default BookPage;