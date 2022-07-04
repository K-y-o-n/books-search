// import { configureStore, getDefaultMiddleware,combineReducers } from '@reduxjs/toolkit';
// // import booksList from './reducers/searchPageReducer';
// import { Dispatch } from "react";

// export type MyDispatch = Dispatch<any>

// // const rootReducer = combineReducers({
// //   books: booksList
// // })

// const middleware = getDefaultMiddleware({
//   immutableCheck: false,
//   serializableCheck: false,
//   thunk: true,
// });

// export const store = configureStore({
//  reducer: rootReducer,
//  middleware,
//  devTools: process.env.NODE_ENV !== 'production',
// });

import {combineReducers, applyMiddleware } from "redux";
import { legacy_createStore as createStore} from 'redux'
import { composeWithDevTools } from "@redux-devtools/extension";
import thunk from "redux-thunk";
import booksListReducer from './reducers/searchPageReducer';
import { Dispatch } from "react";

export type MyDispatch = Dispatch<any>

const rootReducer = combineReducers({
  books: booksListReducer,
  // loading: spinnerReducer
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);