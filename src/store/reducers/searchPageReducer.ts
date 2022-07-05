import { ISearchData } from "../../types/types"
import { SearchBooksActionTypes } from "../../types/types"

const initialState:{}|ISearchData = {}

function booksListReducer(state = initialState,action:{type:string,payload:ISearchData}) {
  switch (action.type) {
    case SearchBooksActionTypes.ADD_BOOKS_LIST:
      return state = action.payload;
    
    case SearchBooksActionTypes.LOAD_MORE_TO_BOOKS_LIST:
      // console.log(action.payload,"ятут");
      return {...state,searchResult:[...state.searchResult,...action.payload.searchResult],searchParams:{...state.searchParams,startIndex:action.payload.startIndex}}

    default:
      return state;
  }
  
}

export default booksListReducer;

