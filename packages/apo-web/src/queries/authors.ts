import { IAuthor } from './author'
import gql from 'graphql-tag'

export interface AuthorData {
  authors: IAuthor[]
}

export interface AuthorVars {
  page: number
}

export const GET_AUTHORS = gql`
  query {
    authors(page: 1) {
      id
      name
      description
      img
    }
  }
`
