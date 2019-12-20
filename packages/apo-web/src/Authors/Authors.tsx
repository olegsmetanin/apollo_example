import * as React from 'react'
import Row from 'antd/es/row'
import Col from 'antd/es/col'
import { List, Skeleton } from 'antd'
import { useQuery } from '@apollo/react-hooks'

import { AuthorData, AuthorVars, GET_AUTHORS } from '../queries/authors'

export interface IAuthorsProps {
  className?: string
}

export const Authors: React.FunctionComponent<IAuthorsProps> = ({ children, ...props }) => {
  const { loading, data } = useQuery<AuthorData, AuthorVars>(GET_AUTHORS)

  console.log({ loading, data })

  return (
    <Row>
      <Col>
        <List
          className="books-loadmore-list"
          loading={loading}
          itemLayout="horizontal"
          // loadMore={loadMore}
          dataSource={data?.authors}
          renderItem={(item: IAuthor) => {
            console.log({ item })
            return (
              <List.Item
                actions={[
                  <a key="list-loadmore-edit">edit</a>,
                  <a key="list-loadmore-more">more</a>
                ]}
              >
                <Skeleton avatar title={false} loading={loading} active>
                  <List.Item.Meta
                    // avatar={item?.img ? <Avatar src={item.img} /> : null}
                    title={item.name}
                    description="Ant Design, a design language for background applications, is refined by Ant UED Team"
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
