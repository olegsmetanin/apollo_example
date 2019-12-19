import * as React from 'react'
import Row from 'antd/es/row'
import Col from 'antd/es/col'

export interface IBooksProps {
  className?: string
}

export const Books: React.FunctionComponent<IBooksProps> = ({ children, ...props }) => {
  return (
    <Row>
      <Col>Books</Col>
    </Row>
  )
}
