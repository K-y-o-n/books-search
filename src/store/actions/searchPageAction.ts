import { Dispatch } from "react"
import { AnyAction } from "redux"
import { ISearchResult } from "../../types/types";
import { TTotalItems } from "../../types/types";

export const getSearchBooks = (searchValue:string,categories:string,sortingBy:string) => async (dispatch:Dispatch<AnyAction>) => {
  
  try {
    const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchValue}&orderBy=${sortingBy}&startIndex=0&maxResults=30`);

    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    }

    const data= await response.json();

    const totalItems:TTotalItems = data.totalItems

    let filteredData;
    if(categories == "All") filteredData = data
    else filteredData = data.items.filter((el:any)=> el.volumeInfo.categories == categories)

    const searchResult:ISearchResult = filteredData.map((el:any)=> el={ 
      id: el.id, 
      title: el.volumeInfo.title,
      authors: el.volumeInfo.authors,
      description: el.volumeInfo.description,
      categories: el.volumeInfo.categories,
      img: el.volumeInfo.imageLinks.thumbnail
    })
    console.log(searchResult)
    // dispatch(getUsersList(data));
    
  } catch (err) {
    console.log(err);
  }
};
