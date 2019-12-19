import * as React from 'react'
import { Link } from 'react-router-dom'
import { useQuery } from '@apollo/react-hooks'
import { Skeleton } from 'antd'

import { IAuthorData, AuthorVars, GET_AUTHOR } from '../queries/author'

export interface IAuthorNameProps {
  className?: string
  id?: string
}

export const AuthorName: React.FunctionComponent<IAuthorNameProps> = ({
  children,
  id,
  ...props
}) => {
  let process = { loading: true, data: { author: { name: '' } } }
  React.useEffect(() => {
    if (id) {
      process = useQuery<IAuthorData, AuthorVars>(GET_AUTHOR, { variables: { id } })
    }
  }, [id])
  const { name } = process.data.author
  return (
    <Skeleton title loading={loading} active>
      <Link to={`/author/${id}`}>{name}</Link>
    </Skeleton>
  )
}
