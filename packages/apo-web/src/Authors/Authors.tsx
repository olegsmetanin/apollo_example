import * as React from 'react'
import Row from 'antd/es/row'
import Col from 'antd/es/col'

export interface IAuthorsProps {
  className?: string
}

export const Authors: React.FunctionComponent<IAuthorsProps> = ({ children, ...props }) => {
  return (
    <Row>
      <Col>Authors</Col>
    </Row>
  )
}
