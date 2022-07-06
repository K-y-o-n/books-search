import { ISearchData } from "../../types/types"
import { SearchBooksActionTypes } from "../../types/types"
import { TPayload } from "../../types/types";

const initialState:{}|ISearchData = {}

function booksListReducer(state = initialState,action:{type:string,payload:any}) {
  switch (action.type) {
    case SearchBooksActionTypes.ADD_BOOKS_LIST:
      return state = action.payload;
    
    case SearchBooksActionTypes.LOAD_MORE_TO_BOOKS_LIST:
      return {...state,searchResult:[...state.searchResult,...action.payload.searchResult],searchParams:{...state.searchParams,startIndex:action.payload.startIndex}}

    case SearchBooksActionTypes.ADD_BOOK_IMG:
      const index = state.searchResult.findIndex(el => el.id == action.payload.id)
      state.searchResult[index].bigImg=action.payload.img
      return state
      

    default:
      return state;
  }
  
}

export default booksListReducer;

