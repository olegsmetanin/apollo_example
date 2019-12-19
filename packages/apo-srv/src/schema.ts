export const schema = `
  type Query {
    hello(name: String): String
    books(page: Int): [Book!]!
    authors(page: Int): [Author!]!
    comments(book_id: ID!, page: Int): [Comment!]!
  }

  type Book {
    id: ID!
    title: String
  }

  type Author {
    id: ID!
    title: String
  }

  type Comment {
    id: ID!
    book_id: ID!
    content: String
  }

`
