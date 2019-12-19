import * as React from 'react'
import Layout from 'antd/es/layout'
// import { Authors } from '../Authors'
import { SideNav } from '../common/SideNav'

const { Header, Footer, Sider, Content } = Layout

export interface IAuthorsPageProps {
  className?: string
}

export const AuthorsPage: React.FunctionComponent<IAuthorsPageProps> = ({ children, ...props }) => {
  return (
    <Layout>
      <Sider breakpoint="lg" collapsedWidth="0">
        <SideNav />
      </Sider>
      <Layout>
        <Header>Авторы</Header>
        <Content>{/* <Authors /> */}</Content>
        {/* <Footer>Footer</Footer> */}
      </Layout>
    </Layout>
  )
}
