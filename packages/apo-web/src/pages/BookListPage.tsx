import * as React from 'react'
import Layout from 'antd/es/layout'
import { NavLink } from 'react-router-dom'
import Breadcrumb from 'antd/es/breadcrumb'
import { BookList } from '../BookList'
import { SideNav } from '../common/SideNav'
import { Header } from '../common/Header'
import { Breadcrumbs } from '../common/Breadcrumbs'
import { Col, Row } from 'antd'

const { Footer, Sider, Content } = Layout

export interface IBooksPageProps {
  className?: string
}

export const BookListPage: React.FunctionComponent<IBooksPageProps> = ({ children, ...props }) => {
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
            <>Books</>
          </Breadcrumbs>
          <Content className="content">
            <Row>
              <Col>
                <BookList />
              </Col>
            </Row>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  )
}
