import * as React from 'react'
import Layout from 'antd/es/layout'
import { BookCard } from '../BookCard'
import { SideNav } from '../common/SideNav'
import get from 'lodash/get'

const { Header, Footer, Sider, Content } = Layout

export interface IBooksPageProps {
  className?: string
}

export const BookPage: React.FunctionComponent<IBooksPageProps> = ({ children, ...props }) => {
  const id = get(props, 'match.params.id')

  return (
    <Layout>
      <Sider breakpoint="lg" collapsedWidth="0">
        <SideNav />
      </Sider>
      <Layout>
        <Header>Книга {id}</Header>
        <Content>
          <BookCard id={id} />
        </Content>
        {/* <Footer>Footer</Footer> */}
      </Layout>
    </Layout>
  )
}
