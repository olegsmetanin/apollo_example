import * as React from 'react'
import Row from 'antd/es/row'
import Col from 'antd/es/col'

export interface IBookProps {
  className?: string
}

export const Book: React.FunctionComponent<IBookProps> = ({ children, ...props }) => {
  return (
    <Row>
      <Col>Книга</Col>
    </Row>
  )
}
