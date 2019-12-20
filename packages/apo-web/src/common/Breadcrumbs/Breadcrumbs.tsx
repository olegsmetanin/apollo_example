import * as React from 'react'
import Breadcrumb from 'antd/es/breadcrumb'
import { NavLink } from 'react-router-dom'

export interface IBreadcrumbsProps {
  className?: string
  children?: any
}

export const Breadcrumbs: React.FunctionComponent<IBreadcrumbsProps> = ({ children }) => {
  return (
    <Breadcrumb className="breadcrumb">
      {children &&
        React.Children.map(children, child => <Breadcrumb.Item>{child}</Breadcrumb.Item>)}
    </Breadcrumb>
  )
}
