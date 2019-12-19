import './author.css'

import * as React from 'react'

import { AuthorVars, GET_AUTHOR, IAuthor, IAuthorData } from '../queries/author'

import Col from 'antd/es/col'
import Row from 'antd/es/row'
import { useQuery } from '@apollo/react-hooks'

export interface IAuthorProps {
  className?: string
  id?: string
}

export const Author: React.FunctionComponent<IAuthorProps> = ({ children, ...props }) => {
  const { id } = props

  const { loading, data } = useQuery<IAuthorData, AuthorVars>(GET_AUTHOR, { variables: { id } })
  const { name, img } = data?.author as IAuthor

  console.log({ loading, data })

  return (
    <Row>
      <Col>
        <div className="card">
          <div className="card--left-block">
            <img src={img} width="480" height={640} />
          </div>
          <div className="card--right-block">
            <h1>{name}</h1>
            <div>Книги: </div>
          </div>
        </div>
      </Col>
    </Row>
  )
}