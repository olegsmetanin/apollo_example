import * as React from 'react'
import Layout from 'antd/es/layout'
import { NavLink } from 'react-router-dom'
import { AuthorList } from '../AuthorList'
import { SideNav } from '../common/SideNav'
import { Header } from '../common/Header'
import { Breadcrumbs } from '../common/Breadcrumbs'

const { /* Footer */ Sider, Content } = Layout

export interface IAuthorListPageProps {
  className?: string
}

export const AuthorListPage: React.FunctionComponent<IAuthorListPageProps> = ({
  children,
  ...props
}) => {
  return (
    <Layout>
      <Header className="header" />
      <Layout>
        <Sider breakpoint="lg" collapsedWidth="0" className="sider">
          <SideNav />
        </Sider>
        <Layout className="layout">
          <Breadcrumbs>
            <NavLink to="/">Library</NavLink>
            <>Authors</>
          </Breadcrumbs>
          <Content className="content">
            <AuthorList />
          </Content>
          {/* <Footer>Footer</Footer> */}
        </Layout>
      </Layout>
    </Layout>
  )
}
