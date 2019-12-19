import './book.css'

import * as React from 'react'

import { AuthorVars, GET_AUTHOR, IAuthorData } from '../queries/author'
import { Badge, Descriptions } from 'antd'
import { BookVars, GET_BOOK, IBook, IBookData } from '../queries/book'

import Col from 'antd/es/col'
import Row from 'antd/es/row'
import { useQuery } from '@apollo/react-hooks'

export interface IBookProps {
  className?: string
  id?: string
}

export const Book: React.FunctionComponent<IBookProps> = ({ children, ...props }) => {
  const { id } = props

  const { loading, data } = useQuery<IBookData, BookVars>(GET_BOOK, { variables: { id } })
  const { author_id, title, img } = data?.book as IBook

  const { loading: authorLoading, data: authorData } = useQuery<IAuthorData, AuthorVars>(
    GET_AUTHOR,
    {
      variables: { id: String(author_id) }
    }
  )

  console.log({ loading, data })
  console.log({ authorLoading, authorData })

  return (
    <Row>
      <Col>
        <div className="card">
          <div className="card--left-block">
            <img src={img} width="480" height={640} />
          </div>
          <div className="card--right-block">
            <h1>{title}</h1>
            <h2>Автор</h2>
          </div>
        </div>
      </Col>
    </Row>
  )
}
