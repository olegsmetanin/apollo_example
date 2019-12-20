import * as React from 'react'
import Row from 'antd/es/row'
import Col from 'antd/es/col'
import { List, Comment, Skeleton, Avatar } from 'antd'
import { useQuery } from '@apollo/react-hooks'

import { ICommentListData, ICommentListVars, GET_BOOK_COMMENTS } from '../queries/comments'
import { IComment } from '../queries/comment'
import { Link } from 'react-router-dom'

export interface ICommentListProps {
  className?: string
  byBookId?: number
}

export const CommentList: React.FunctionComponent<ICommentListProps> = ({
  children,
  byBookId,
  ...props
}) => {
  const { loading, data } = useQuery<ICommentListData, ICommentListVars>(GET_BOOK_COMMENTS, {
    variables: { book_id: byBookId }
  })

  console.log({ loading, data })

  return (
    <List
      className="comment-list"
      header={`${data?.comments.length} replies`}
      itemLayout="horizontal"
      dataSource={data?.comments}
      renderItem={item => (
        <li>
          <Comment
            actions={[<span key="comment-list-reply-to-0">Reply to</span>]}
            author="Guest"
            avatar="https://cdn.icon-icons.com/icons2/602/PNG/512/Guest_icon-icons.com_55899.png"
            content={<p>{item?.content}</p>}
            // datetime={item.datetime}
          />
        </li>
      )}
    />
  )
}
