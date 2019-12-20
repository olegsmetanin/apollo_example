import * as React from 'react'

import { Avatar, List, Skeleton, Row } from 'antd'

import Col from 'antd/es/col'
import { Link } from 'react-router-dom'
import { useQuery } from '@apollo/react-hooks'

import { BookListData, BookListVars, GET_BOOK_LIST, GET_AUTHOR_BOOK_LIST } from '../queries/books'
import { IBook } from '../queries/book'

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

  console.log({ loading, data })

  return (
    <List
      className="books-loadmore-list"
      loading={loading}
      itemLayout="horizontal"
      // loadMore={loadMore}
      dataSource={data?.books}
      renderItem={(item: IBook) => {
        return (
          <List.Item>
            <Skeleton avatar title={false} loading={loading} active>
              <List.Item.Meta
                avatar={item?.img ? <Avatar src={item.img} /> : null}
                title={<Link to={`/book/${item.id}`}>{item.title}</Link>}
                description="Ant Design, a design language for background applications, is refined by Ant UED Team"
              />
              <div>content</div>
            </Skeleton>
          </List.Item>
        )
      }}
    />
  )
}

// getData = callback => {
//   reqwest({
//     url: fakeDataUrl,
//     type: 'json',
//     method: 'get',
//     contentType: 'application/json',
//     success: res => {
//       callback(res)
//     }
//   })
// }

// onLoadMore = () => {
//   this.setState({
//     loading: true,
//     list: this.state.data.concat([...new Array(count)].map(() => ({ loading: true, name: {} })))
//   })
//   this.getData(res => {
//     const data = this.state.data.concat(res.results)
//     this.setState(
//       {
//         data,
//         list: data,
//         loading: false
//       },
//       () => {
//         // Resetting window's offsetTop so as to display react-virtualized demo underfloor.
//         // In real scene, you can using public method of react-virtualized:
//         // https://stackoverflow.com/questions/46700726/how-to-use-public-method-updateposition-of-react-virtualized
//         window.dispatchEvent(new Event('resize'))
//       }
//     )
//   })
// }

// const { initLoading, loading, list } = this.state
// const loadMore =
//   !initLoading && !loading ? (
//     <div
//       style={{
//         textAlign: 'center',
//         marginTop: 12,
//         height: 32,
//         lineHeight: '32px'
//       }}
//     >
//       <Button onClick={() => console.log('LoadMore') /* this.onLoadMore */}>
//         loading more
//       </Button>
//     </div>
//   ) : null
