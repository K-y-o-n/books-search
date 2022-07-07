export type TTotalItems = number;

export interface ISearchResult {
  id: string,
  title: string,
  authors: [],
  description: string,
  categories: [],
  img: string
};

export type TSearchResultArray = ISearchResult[]

export interface ISearchParams {
  searchValue: string,
  categories: string,
  sortingBy: string,
  startIndex: number
};

export interface IStore {
  loading: boolean,
  books: ISearchData
}

export interface ISearchData {
  totalItems: TTotalItems,
  searchParams: ISearchParams,
  searchResult: TSearchResultArray
}
export interface ILoadMoreData {
  searchResult: TSearchResultArray,
  startIndex: number
}

export interface IAddBookImg {
  img: string,
  id: string
}

export type TPayload = ISearchData|ILoadMoreData|IAddBookImg

export enum SearchBooksActionTypes {
  ADD_BOOKS_LIST = "ADD_BOOKS_LIST",
  LOAD_MORE_TO_BOOKS_LIST ="LOAD_MORE_TO_BOOKS_LIST"
};

