import { authors, books, comments } from './db'

import filter from 'lodash/filter'

export const resolvers = {
  Query: {
    books: (_, { page, author_id }) => {
      if (author_id) {
        return filter(books, book => book.author_id == author_id)
      }
      console.log('books', books)
      return books
    },
    book: (_, { id }) => filter(books, book => book.id == id)[0],
    authors: (_, { page }) => filter(authors, author => true),
    author: (_, { id }) => filter(authors, author => author.id == id)[0],

    comments: (_, { book_id, page }) => filter(comments, comment => comment.book_id == book_id)
  }
}
