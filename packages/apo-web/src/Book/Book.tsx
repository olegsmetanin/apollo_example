import * as React from 'react'
import Row from 'antd/es/row'
import Col from 'antd/es/col'
import { Descriptions, Badge } from 'antd'
import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'

interface IBook {
  id: number
  title: string
  img: string
}

interface IBookData {
  book?: IBook
}

interface BookVars {
  id?: string
}

const GET_BOOK = gql`
  query Book($id: ID!) {
    book(id: $id) {
      id
      title
      img
    }
  }
`

export interface IBookProps {
  className?: string
  id?: string
}

export const Book: React.FunctionComponent<IBookProps> = ({ children, ...props }) => {
  const { id } = props

  const { loading, data } = useQuery<IBookData, BookVars>(GET_BOOK, { variables: { id } })

  console.log({ loading, data })
  return (
    <Row>
      <Col>
        <Descriptions title={`Книга ${id}`} bordered>
          <Descriptions.Item label="Обложка" span={4}>
            <img src={data?.book?.img} width="480" height={640} />
          </Descriptions.Item>
          <Descriptions.Item label="Billing Mode">Prepaid</Descriptions.Item>
          <Descriptions.Item label="Automatic Renewal">YES</Descriptions.Item>
          <Descriptions.Item label="Order time">2018-04-24 18:00:00</Descriptions.Item>
          <Descriptions.Item label="Usage Time" span={2}>
            2019-04-24 18:00:00
          </Descriptions.Item>
          <Descriptions.Item label="Status" span={3}>
            <Badge status="processing" text="Running" />
          </Descriptions.Item>
          <Descriptions.Item label="Negotiated Amount">$80.00</Descriptions.Item>
          <Descriptions.Item label="Discount">$20.00</Descriptions.Item>
          <Descriptions.Item label="Official Receipts">$60.00</Descriptions.Item>
          <Descriptions.Item label="Config Info">
            Data disk type: MongoDB
            <br />
            Database version: 3.4
            <br />
            Package: dds.mongo.mid
            <br />
            Storage space: 10 GB
            <br />
            Replication factor: 3
            <br />
            Region: East China 1<br />
          </Descriptions.Item>
        </Descriptions>
      </Col>
    </Row>
  )
}
