import * as React from 'react'
import Menu from 'antd/es/menu'
import { NavLink } from 'react-router-dom'

export interface ISideNavProps {
  className?: string
}

export const SideNav: React.FunctionComponent<ISideNavProps> = ({ children, ...props }) => {
  return (
    <Menu mode="inline">
      <Menu.Item key="1">
        {/* <Icon type="user" /> */}
        <NavLink to="/books" className="nav-text" activeClassName="selected">
          Кники
        </NavLink>
      </Menu.Item>
      <Menu.Item key="2">
        {/* <Icon type="video-camera" /> */}
        <NavLink to="/authors" className="nav-text" activeClassName="selected">
          Авторы
        </NavLink>
      </Menu.Item>
    </Menu>
  )
}
