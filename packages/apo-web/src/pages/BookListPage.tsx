import * as React from 'react'
import Layout from 'antd/es/layout'
import { BookList } from '../BookList'
import { SideNav } from '../common/SideNav'

const { Header, Footer, Sider, Content } = Layout

export interface IBooksPageProps {
  className?: string
}

export const BookListPage: React.FunctionComponent<IBooksPageProps> = ({ children, ...props }) => {
  return (
    <Layout>
      <Sider breakpoint="lg" collapsedWidth="0">
        <SideNav />
      </Sider>
      <Layout>
        <Header>Книги</Header>
        <Content>
          <BookList />
        </Content>
        {/* <Footer>Footer</Footer> */}
      </Layout>
    </Layout>
  )
}
