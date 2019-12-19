import { authors, books, comments } from './db'

import filter from 'lodash/filter'

export const resolvers = {
  Query: {
    hello: (_, args) => `Hello ${args.name || 'World'}!`,
    books: (page, args) => filter(books, (book) => true ),
    authors: (page, args) => filter(authors, (author) => true ),
    comments: (book_id, page, args) => filter(comments, (comment) => comment.book_id === book_id),
  },
}