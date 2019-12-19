import * as React from 'react'
import Row from 'antd/es/row'
import Col from 'antd/es/col'
import { useQuery } from '@apollo/react-hooks'
import { IAuthorData, AuthorVars, GET_AUTHOR } from '../queries/author'

import './author.css'

export interface IAuthorProps {
  className?: string
  id?: string
}

export const Author: React.FunctionComponent<IAuthorProps> = ({ children, ...props }) => {
  const { id } = props

  const { loading, data } = useQuery<IAuthorData, AuthorVars>(GET_AUTHOR, { variables: { id } })
  // const { name, img } = data?.author

  console.log({ loading, data })

  return (
    <Row>
      <Col>
        <div className="card">
          <div className="card--left-block">
            <img src={data?.author.img} width="480" height={640} />
          </div>
          <div className="card--right-block">
            <h1>{data?.author.name}</h1>
            <div>Книги: </div>
          </div>
        </div>
      </Col>
    </Row>
  )
}
