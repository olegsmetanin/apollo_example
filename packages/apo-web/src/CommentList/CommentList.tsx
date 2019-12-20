import * as React from 'react'

import { Comment, List } from 'antd'
import { GET_BOOK_COMMENTS, ICommentListData, ICommentListVars } from '../queries/comments'

import { useQuery } from '@apollo/react-hooks'

export interface ICommentListProps {
  className?: string
  byBookId?: number
}

export const CommentList: React.FunctionComponent<ICommentListProps> = ({
  children,
  byBookId,
  ...props
}) => {
  const { data } = useQuery<ICommentListData, ICommentListVars>(GET_BOOK_COMMENTS, {
    variables: { book_id: byBookId }
  })

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
            avatar={item.img}
            content={<p>{item?.content}</p>}
          />
        </li>
      )}
    />
  )
}
