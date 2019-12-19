import gql from 'graphql-tag'
import { IBook } from './book'

export interface BookListData {
  books: IBook[]
}

export interface BookListVars {
  page: number
}

export const GET_BOOK_LIST = gql`
  query {
    books(page: 1) {
      id
      title
      img
    }
  }
`
