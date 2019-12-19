import gql from 'graphql-tag'

export interface IAuthor {
  id: number
  name: string
}

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
    }
  }
`
