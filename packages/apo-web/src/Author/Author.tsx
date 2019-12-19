import * as React from 'react'
import Row from 'antd/es/row'
import Col from 'antd/es/col'
import { Descriptions, Badge } from 'antd'
import { useQuery } from '@apollo/react-hooks'
import './book.css'
import { IBookData, BookVars, GET_BOOK } from '../queries/book'
import { IAuthorData, AuthorVars, GET_AUTHOR } from '../queries/author'

export interface IBookProps {
  className?: string
  id?: string
}

export const Book: React.FunctionComponent<IBookProps> = ({ children, ...props }) => {
  const { id } = props

  const { loading, data } = useQuery<IBookData, BookVars>(GET_BOOK, { variables: { id } })
  const { author_id, title, img } = data?.book

  const { loading: authorLoading, data: authorData } = useQuery<IAuthorData, AuthorVars>(
    GET_AUTHOR,
    {
      variables: { id: author_id }
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
