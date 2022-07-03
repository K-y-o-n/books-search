import { Dispatch } from "react"
import { AnyAction } from "redux"

export const searchBooks = (searchValue:string) => async (dispatch:Dispatch<AnyAction>) => {
  
  try {
    const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchValue}`);

    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    }

    const data= await response.json();
    console.log(data)
    // dispatch(getUsersList(data));
    
  } catch (err) {
    console.log(err);
  }
};
