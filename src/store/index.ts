import {combineReducers, applyMiddleware } from "redux";
import { legacy_createStore as createStore} from 'redux'
import { composeWithDevTools } from "@redux-devtools/extension";
import thunk from "redux-thunk";
import booksListReducer from './reducers/searchPageReducer';
import spinnerReducer from "./reducers/spinnerReducer";
import { Dispatch } from "react";

export type MyDispatch = Dispatch<any>

const rootReducer = combineReducers({
  books: booksListReducer,
  loading: spinnerReducer
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);