import * as React from 'react'
import Layout from 'antd/es/layout'
import { Book } from '../Book'
import { SideNav } from '../common/SideNav'

const { Header, Footer, Sider, Content } = Layout

export interface IBooksPageProps {
  className?: string
}

export const BookPage: React.FunctionComponent<IBooksPageProps> = ({ children, ...props }) => {
  return (
    <Layout>
      <Sider breakpoint="lg" collapsedWidth="0">
        <SideNav />
      </Sider>
      <Layout>
        <Header>Книга</Header>
        <Content>
          <Book />
        </Content>
        {/* <Footer>Footer</Footer> */}
      </Layout>
    </Layout>
  )
}
