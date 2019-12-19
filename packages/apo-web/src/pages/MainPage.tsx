import * as React from 'react'
import Layout from 'antd/es/layout'
import { Books } from '../Books'
import { SideNav } from '../common/SideNav'

const { Header, Footer, Sider, Content } = Layout

export interface IMainPageProps {
  className?: string
}

export const MainPage: React.FunctionComponent<IMainPageProps> = ({ children, ...props }) => {
  return (
    <Layout>
      <Sider breakpoint="lg" collapsedWidth="0">
        <SideNav />
      </Sider>
      <Layout>
        <Header>Библиотека</Header>
        <Content></Content>
        {/* <Footer>Footer</Footer> */}
      </Layout>
    </Layout>
  )
}
