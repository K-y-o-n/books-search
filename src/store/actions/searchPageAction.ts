import { Dispatch } from "react"
import { AnyAction } from "redux"
import { TSearchResultArray } from "../../types/types";
import { TTotalItems } from "../../types/types";
import { ISearchParams } from "../../types/types";
import { SearchBooksActionTypes } from "../../types/types";
import { ISearchData } from "../../types/types";
import { APIKey } from "../../APIKey/APIKey";
import { ILoadMoreData } from "../../types/types";
import { isLoading } from "../reducers/spinnerReducer";


export const booksListAction = (searchData:ISearchData) => ({
  type: SearchBooksActionTypes.ADD_BOOKS_LIST,
  payload: searchData
});

export const loadMoreBooksAction = (loadMoreData:ILoadMoreData) => ({
  type: SearchBooksActionTypes.LOAD_MORE_TO_BOOKS_LIST,
  payload: loadMoreData
});


export const getBooksList = (searchValue:string,categories:string,sortingBy:string) => async (dispatch:Dispatch<AnyAction>) => {

  dispatch(isLoading(true))
  try {
    const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchValue}&orderBy=${sortingBy}&startIndex=0&maxResults=30&key=${APIKey}`);

    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    }

    const data= await response.json();

    const totalItems:TTotalItems = data.totalItems
    const searchParams:ISearchParams = {
      searchValue:searchValue,
      categories:categories,
      sortingBy:sortingBy,
      startIndex: 0
    }

    const searchResult:TSearchResultArray = searchDataFilter(data,categories)
    
    dispatch(booksListAction({searchResult,totalItems,searchParams}));
    dispatch(isLoading(false))
    
  } catch (err) {
    console.log(err);
  }
};


export const getMoreBooks = (searchValue:string,categories:string,sortingBy:string,startIndex:number) => async (dispatch:Dispatch<AnyAction>) => {

  dispatch(isLoading(true))
  try {
    const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchValue}&orderBy=${sortingBy}&startIndex=${startIndex}&maxResults=30&key=${APIKey}`);

    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    }

    const data= await response.json();

    const searchResult:TSearchResultArray = searchDataFilter(data,categories)

    dispatch(loadMoreBooksAction({searchResult,startIndex}));
    dispatch(isLoading(false))
    
  } catch (err) {
    console.log(err);
  }
};



function searchDataFilter(data:any,categories:string) {
  let filteredData;

  if(categories === "All") filteredData = data.items
  else filteredData = data.items.filter((el:any)=> el.volumeInfo.categories == categories)

  const searchResult:TSearchResultArray = filteredData.map((el:any)=> el={ 
    id: el.id, 
    title: el.volumeInfo.title,
    authors: el.volumeInfo.authors,
    description: el.volumeInfo.description,
    categories: el.volumeInfo.categories,
    img: el.volumeInfo.imageLinks?.thumbnail
  })

  return searchResult;
}