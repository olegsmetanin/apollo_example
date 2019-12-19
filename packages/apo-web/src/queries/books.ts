import gql from 'graphql-tag'

export interface IBook {
  id: number
  title: string
  img: string
}

export interface BookData {
  books: IBook[]
}

export interface BooksVars {
  page: number
}

export const GET_BOOKS = gql`
  query {
    books(page: 1) {
      id
      title
      img
    }
  }
`
