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

export interface ISearchData {
  totalItems: TTotalItems,
  searchParams: ISearchParams,
  searchResult: TSearchResultArray
}

export enum SearchBooksActionTypes {
  ADD_BOOKS_LIST= "ADD_BOOKS_LIST",
  LOAD_MORE_TO_BOOKS_LIST="LOAD_MORE_TO_BOOKS_LIST"
};