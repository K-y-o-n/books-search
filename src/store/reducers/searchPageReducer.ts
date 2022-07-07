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

    default:
      return state;
  }
  
}

export default booksListReducer;

