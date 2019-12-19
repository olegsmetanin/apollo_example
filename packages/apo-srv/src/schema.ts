export const schema = `
  type Query {
    hello(name: String): String
    books(page: Int, author_id: ID): [Book!]!
    book(id: ID!): Book
    authors(page: Int): [Author!]!
    author(id: ID!): Author
    comments(book_id: ID!, page: Int): [Comment!]!
  }

  type Book {
    id: ID!
    author_id: ID!
    author: Author
    title: String
    img: String
  }

  type Author {
    id: ID!
    name: String
    img: String
  }

  type Comment {
    id: ID!
    book_id: ID!
    content: String
  }

`
