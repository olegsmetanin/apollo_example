import * as React from 'react'
import Layout from 'antd/es/layout'
import { NavLink } from 'react-router-dom'
import { Authors } from '../Authors'
import { SideNav } from '../common/SideNav'
import { Header } from '../common/Header'
import { Breadcrumbs } from '../common/Breadcrumbs'

const { Footer, Sider, Content } = Layout

export interface IAuthorsPageProps {
  className?: string
}

export const AuthorsPage: React.FunctionComponent<IAuthorsPageProps> = ({ children, ...props }) => {
  return (
    <Layout>
      <Header className="header" />
      <Layout>
        <Sider breakpoint="lg" collapsedWidth="0" className="sider">
          <SideNav />
        </Sider>
        <Layout className="layout">
          <Breadcrumbs>
            <NavLink to="/">Библиотека</NavLink>
            <>Авторы</>
          </Breadcrumbs>
          <Content className="content">
            <Authors />
          </Content>
          {/* <Footer>Footer</Footer> */}
        </Layout>
      </Layout>
    </Layout>
  )
}
