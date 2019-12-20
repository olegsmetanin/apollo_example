import gql from 'graphql-tag'
import { IBook } from './book'

export interface BookListData {
  books: IBook[]
}

export interface BookListVars {
  page?: number
  author_id?: number
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

export const GET_AUTHOR_BOOK_LIST = gql`
  query Books($author_id: ID!) {
    books(author_id: $author_id) {
      id
      title
      img
    }
  }
`
