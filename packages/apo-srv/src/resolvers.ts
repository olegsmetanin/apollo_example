import { authors, books, comments } from './db'

import filter from 'lodash/filter'

export const resolvers = {
  Query: {
    hello: (_, args) => `Hello ${args.name || 'World'}!`,
    books: (_, {page}) => filter(books, (book) => true ),
    authors: (_, {page}) => filter(authors, (author) => true ),
    comments: (_, {book_id, page}) => {
      console.log('book_id', book_id, page)
      return filter(comments, (comment) => comment.book_id == book_id)
    }
  },
}