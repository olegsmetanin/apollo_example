import * as React from 'react'
import Row from 'antd/es/row'
import Col from 'antd/es/col'
import { List, Avatar, Button, Skeleton } from 'antd'
import { Link } from 'react-router-dom'
import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'

export interface IBookListProps {
  className?: string
}

interface IBook {
  id: number
  title: String
}

interface BookData {
  books: IBook[]
}

interface BooksVars {
  page: number
}

const GET_BOOKS = gql`
  query {
    books(page: 1) {
      id
      title
    }
  }
`
// const GET_BOOKS =

const list = [
  {
    loading: false,
    id: 12,
    name: 'Book1'
  },
  {
    loading: false,
    id: 13,
    name: 'Book2'
  }
]

export const BookList: React.FunctionComponent<IBookListProps> = ({ children, ...props }) => {
  const { loading, data } = useQuery<BookData, BooksVars>(GET_BOOKS)

  console.log({ loading, data })
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
  return (
    <Row>
      <Col>
        <List
          className="books-loadmore-list"
          loading={loading}
          itemLayout="horizontal"
          // loadMore={loadMore}
          dataSource={data?.books}
          renderItem={item => (
            <List.Item
              actions={[<a key="list-loadmore-edit">edit</a>, <a key="list-loadmore-more">more</a>]}
            >
              <Skeleton avatar title={false} active>
                <List.Item.Meta
                  avatar={
                    <Avatar src="https://images-na.ssl-images-amazon.com/images/I/61-uFOBDLDL.jpg" />
                  }
                  title={<Link to={`/book/${item.id}`}>{item.title}</Link>}
                  description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                />
                <div>content</div>
              </Skeleton>
            </List.Item>
          )}
        />
      </Col>
    </Row>
  )
}
