import * as React from 'react'

import { AuthorData, AuthorVars, GET_AUTHORS } from '../queries/authors'
import { Avatar, List, Skeleton } from 'antd'

import Col from 'antd/es/col'
import { IAuthor } from '../queries/author'
import { Link } from 'react-router-dom'
import Row from 'antd/es/row'
import { useQuery } from '@apollo/react-hooks'

export interface IAuthorListProps {
  className?: string
}

export const AuthorList: React.FunctionComponent<IAuthorListProps> = ({ children, ...props }) => {
  const { loading, data } = useQuery<AuthorData, AuthorVars>(GET_AUTHORS)

  return (
    <Row>
      <Col>
        <List
          className="books-loadmore-list"
          loading={loading}
          itemLayout="horizontal"
          dataSource={data?.authors}
          renderItem={(item: IAuthor) => {
            return (
              <List.Item
                actions={[
                ]}
              >
                <Skeleton avatar title={false} loading={loading} active>
                  <List.Item.Meta
                    avatar={item?.img ? <Avatar src={item.img} /> : null}
                    title={<Link to={`/author/${item.id}`}>{item.name}</Link>}
                    description={item.description}
                  />
                </Skeleton>
              </List.Item>
            )
          }}
        />
      </Col>
    </Row>
  )
}
