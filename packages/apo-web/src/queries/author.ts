import gql from 'graphql-tag'

export interface IAuthor {
  id: number
  name: string
  img: string
}

export interface IAuthorData {
  author?: IAuthor
}

export interface AuthorVars {
  id?: string
}

export const GET_AUTHOR = gql`
  query Author($id: ID!) {
    author(id: $id) {
      id
      name
      img
    }
  }
`
