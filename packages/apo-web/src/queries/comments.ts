import { IComment } from './comment'
import gql from 'graphql-tag'

export interface ICommentListData {
  comments: IComment[]
}

export interface ICommentListVars {
  page?: number
  book_id: number | undefined
}

export const GET_BOOK_COMMENTS = gql`
  query Comments($book_id: ID!) {
    comments(book_id: $book_id) {
      id
      book_id
      content
      img
    }
  }
`
