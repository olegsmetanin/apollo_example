import gql from 'graphql-tag'
import { IAuthor } from './author'

export interface IBook {
  id: number
  // author_id: number
  author: IAuthor
  title: string
  img: string
}

export interface IBookData {
  book?: IBook
}

export interface BookVars {
  id: string
}

export const GET_BOOK = gql`
  query Book($id: ID!) {
    book(id: $id) {
      id
      author {
        id
        name
        img
      }
      author_id
      title
      img
    }
  }
`
