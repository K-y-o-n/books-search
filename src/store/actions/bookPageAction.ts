// import { Dispatch } from "react"
// import { AnyAction } from "redux"
// import { APIKey } from "../../APIKey/APIKey";
// import { SearchBooksActionTypes } from "../../types/types";
// import { IAddBookImg } from "../../types/types";

// export const addBookImg = (data:IAddBookImg) => ({
//   type: SearchBooksActionTypes.ADD_BOOK_IMG,
//   payload: data
// });


// export const getBookInfo = (id:string) => async (dispatch:Dispatch<AnyAction>) => {
  
//   try {
//     const response = await fetch(`https://www.googleapis.com/books/v1/volumes/${id}`);

//     if (!response.ok) {
//       throw new Error(`Request failed with status ${response.status}`);
//     }

//     const data = await response.json();

//     dispatch(addBookImg({img:data.volumeInfo.imageLinks.small,id:id})) 

//   } catch (err) {
//     console.log(err);
//   }
// };