import './book.css'

import * as React from 'react'

import { BookVars, GET_BOOK, IBookData } from '../queries/book'

import Col from 'antd/es/col'
import Row from 'antd/es/row'
import { useQuery } from '@apollo/react-hooks'
import { Link } from 'react-router-dom'

// import { IAuthorData, AuthorVars, GET_AUTHOR } from '../queries/author'
// import { Link } from 'react-router-dom'

export interface IBookCardProps {
  className?: string
  id?: string
}

export const BookCard: React.FunctionComponent<IBookCardProps> = ({ children, ...props }) => {
  const { id } = props

  const { loading, data } = useQuery<IBookData, BookVars>(GET_BOOK, {
    variables: { id: String(id) }
  })
  if (!data) {
    return <div className="loading">Loading</div>
  }
  const { author_id, title, img, author } = data.book
  console.log({ loading, data })

  return (
    <Row>
      <Col>
        <div className="card">
          <div className="card--left-block">
            <img src={img} width="480" height={640} alt="" />
          </div>
          <div className="card--right-block">
            <h1>{title}</h1>
            <div>
              Author: <Link to={`/author/${author_id}`}>{author.name}</Link>
            </div>
          </div>
        </div>
      </Col>
    </Row>
  )
}
