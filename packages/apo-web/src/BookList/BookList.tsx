import * as React from 'react'

import { Avatar, List, Skeleton } from 'antd'
import { BookListData, BookListVars, GET_AUTHOR_BOOK_LIST, GET_BOOK_LIST } from '../queries/books'

import { IBook } from '../queries/book'
import { Link } from 'react-router-dom'
import { useQuery } from '@apollo/react-hooks'

export interface IBookListProps {
  className?: string
  byAuthorId?: number
}

export const BookList: React.FunctionComponent<IBookListProps> = ({
  children,
  byAuthorId,
  ...props
}) => {
  const { loading, data } = useQuery<BookListData, BookListVars>(
    byAuthorId !== undefined ? GET_AUTHOR_BOOK_LIST : GET_BOOK_LIST,
    byAuthorId !== undefined ? { variables: { author_id: byAuthorId } } : undefined
  )

  return (
    <List
      className="books-loadmore-list"
      loading={loading}
      itemLayout="horizontal"
      dataSource={data?.books}
      renderItem={(item: IBook) => {
        return (
          <List.Item>
            <Skeleton avatar title={false} loading={loading} active>
              <List.Item.Meta
                avatar={item?.img ? <Avatar shape="square" size="large" src={item.img} /> : null}
                title={
                  <span>
                    <Link to={`/book/${item.id}`}>{item.title}</Link> by{' '}
                    <Link to={`/author/${item.author.id}`}>{item.author.name}</Link>
                  </span>
                }
                description={item.description}
              />
            </Skeleton>
          </List.Item>
        )
      }}
    />
  )
}
