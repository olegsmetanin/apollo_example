import * as React from 'react'
import Row from 'antd/es/row'
import Col from 'antd/es/col'
import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'

export interface IAuthorsProps {
  className?: string
}

interface IAuthor {
  id: number
  name: string
}

interface AuthorData {
  authors: IAuthor[]
}

interface AuthorVars {
  page: number
}

const GET_AUTHORS = gql`
  query {
    authors(page: 1) {
      id
      name
    }
  }
`

export const Authors: React.FunctionComponent<IAuthorsProps> = ({ children, ...props }) => {
  const { loading, data } = useQuery<AuthorData, AuthorVars>(GET_AUTHORS)

  console.log({ loading, data })

  return (
    <div>
      {data?.authors.map(author => (
        <Row key={author.id}>
          <Col span={1}>{author.id}</Col>
          <Col span={6}>{author.name}</Col>
        </Row>
      ))}
    </div>
  )
}
