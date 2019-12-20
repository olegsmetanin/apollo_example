import * as React from 'react'
import Menu from 'antd/es/menu'
import Icon from 'antd/es/icon'
import { NavLink } from 'react-router-dom'

export interface ISideNavProps {
  className?: string
}

export const SideNav: React.FunctionComponent<ISideNavProps> = ({ children, ...props }) => {
  return (
    <Menu mode="inline" style={{ height: '100%', borderRight: 0 }}>
      <Menu.Item key="1">
        <NavLink to="/books" className="nav-text" activeClassName="selected">
          <Icon type="book" />
          Книги
        </NavLink>
      </Menu.Item>
      <Menu.Item key="2">
        <NavLink to="/authors" className="nav-text" activeClassName="selected">
          <Icon type="user" />
          Авторы
        </NavLink>
      </Menu.Item>
    </Menu>
  )
}
