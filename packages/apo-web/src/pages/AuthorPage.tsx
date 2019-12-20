import * as React from 'react'
import Layout from 'antd/es/layout'
import { AuthorCard } from '../AuthorCard'
import { NavLink } from 'react-router-dom'
import { SideNav } from '../common/SideNav'
import { Header } from '../common/Header'
import { Breadcrumbs } from '../common/Breadcrumbs'

import get from 'lodash/get'

const { Footer, Sider, Content } = Layout

export interface IAuthorPageProps {
  className?: string
}

export const AuthorPage: React.FunctionComponent<IAuthorPageProps> = ({ children, ...props }) => {
  const id = get(props, 'match.params.id')

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
            <NavLink to="/authors">Authors</NavLink>
            <>Author {id}</>
          </Breadcrumbs>
          <Content className="content">
            <AuthorCard id={id} />
          </Content>
        </Layout>
      </Layout>
    </Layout>
  )
}
