import * as React from 'react'

import { AuthorVars, GET_AUTHOR, IAuthor, IAuthorData } from '../queries/author'

import { Link } from 'react-router-dom'
import { Skeleton } from 'antd'
import { useQuery } from '@apollo/react-hooks'

export interface IAuthorNameProps {
  className?: string
  id?: string
}

export const AuthorName: React.FunctionComponent<IAuthorNameProps> = ({
  children,
  id,
  ...props
}) => {
  // let process = { loading: true, data: { author: { name: '' } } }
  // React.useEffect(() => {
  //   if (id) {
  //     process = useQuery<IAuthorData, AuthorVars>(GET_AUTHOR, { variables: { id: String(id) } })
  //   }
  // }, [id])

  const {loading, data} = useQuery<IAuthorData, AuthorVars>(GET_AUTHOR, { variables: { id: String(id) } })
  const { name } = data?.author as IAuthor

  // const { name } = process.data.author
  return (
    <Skeleton title loading={loading} active>
      <Link to={`/author/${id}`}>{name}</Link>
    </Skeleton>
  )
}
