import * as React from 'react'
import { useQuery } from '@apollo/react-hooks'
import { AuthorVars, GET_AUTHOR, IAuthor, IAuthorData } from '../queries/author'

import Col from 'antd/es/col'
import Row from 'antd/es/row'

import './author.css'
import { BookList } from '../BookList'

export interface IAuthorCardProps {
  className?: string
  id?: string
}

export const AuthorCard: React.FunctionComponent<IAuthorCardProps> = ({ children, ...props }) => {
  const { id } = props

  const { loading, data } = useQuery<IAuthorData, AuthorVars>(GET_AUTHOR, { variables: { id } })
  if (!data) {
    return <div className="loading">Loading</div>
  }
  const { name, img } = data.author

  console.log({ loading, data })

  return (
    <Row>
      <Col>
        <div className="card">
          <div className="card--left-block">
            <img src={img} width="320" alt="" />
          </div>
          <div className="card--right-block">
            <h1>{name}</h1>
            <div>Книги: </div>
            <BookList byAuthorId={Number(id)} />
          </div>
        </div>
      </Col>
    </Row>
  )
}
