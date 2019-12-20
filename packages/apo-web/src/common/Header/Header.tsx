import * as React from 'react'
import Menu from 'antd/es/menu'
import Icon from 'antd/es/icon'
import { NavLink } from 'react-router-dom'

export interface IHeaderProps {
  className?: string
}

export const Header: React.FunctionComponent<IHeaderProps> = ({ className }) => {
  return (
    <Menu className={className} theme="dark" mode="horizontal">
      <Menu.Item>
        <NavLink to="/">
          <Icon type="book" />
          Library
        </NavLink>
      </Menu.Item>
    </Menu>
  )
}
