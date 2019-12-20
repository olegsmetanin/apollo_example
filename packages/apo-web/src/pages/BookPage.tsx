import * as React from 'react'
import Layout from 'antd/es/layout'
import { BookCard } from '../BookCard'
import { NavLink } from 'react-router-dom'
import { SideNav } from '../common/SideNav'
import { Header } from '../common/Header'
import { Breadcrumbs } from '../common/Breadcrumbs'

import get from 'lodash/get'

const { Footer, Sider, Content } = Layout

export interface IBooksPageProps {
  className?: string
}

export const BookPage: React.FunctionComponent<IBooksPageProps> = ({ children, ...props }) => {
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
            <NavLink to="/">Библиотека</NavLink>
            <NavLink to="/books">Книги</NavLink>
            <>Книга {id}</>
          </Breadcrumbs>
          <Content className="content">
            <BookCard id={id} />
          </Content>
        </Layout>
      </Layout>
    </Layout>
  )
}
