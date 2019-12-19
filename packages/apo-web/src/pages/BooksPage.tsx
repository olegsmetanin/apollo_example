import * as React from 'react'
import Layout from 'antd/es/layout'
import { Books } from '../Books'
import { SideNav } from '../common/SideNav'

const { Header, Footer, Sider, Content } = Layout

export interface IBooksPageProps {
  className?: string
}

export const BooksPage: React.FunctionComponent<IBooksPageProps> = ({ children, ...props }) => {
  return (
    <Layout>
      <Sider breakpoint="lg" collapsedWidth="0">
        <SideNav />
      </Sider>
      <Layout>
        <Header>Книги</Header>
        <Content>
          <Books />
        </Content>
        {/* <Footer>Footer</Footer> */}
      </Layout>
    </Layout>
  )
}
