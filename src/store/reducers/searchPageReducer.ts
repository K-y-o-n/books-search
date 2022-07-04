import { ISearchData } from "../../types/types"
import { SearchBooksActionTypes } from "../../types/types"

const initialState:{} = {}

function booksListReducer(state:{}|ISearchData= initialState,action:{type:string,payload:ISearchData}) {
  switch (action.type) {
    case SearchBooksActionTypes.ADD_BOOKS_LIST:
      return state = action.payload;
    
    case SearchBooksActionTypes.LOAD_MORE_TO_BOOKS_LIST:
      return state;

    default:
      return state;
  }
  
}

export default booksListReducer;

