import gql from 'graphql-tag'

export interface IBook {
  id: number
  author_id: number
  title: string
  img: string
}

export interface IBookData {
  book?: IBook
}

export interface BookVars {
  id?: string
}

export const GET_BOOK = gql`
  query Book($id: ID!) {
    book(id: $id) {
      id
      author_id
      title
      img
    }
  }
`
