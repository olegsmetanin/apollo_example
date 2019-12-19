export const schema = `
  type Query {
    hello(name: String): String
    books(page: Int): [Book!]!
  }

  type Book {
    id: ID!
    title: String
  }

`

// query {
//   books(page: 1) {
//     id
//   }
// }

//
//   type Query {
//     books: [Book!]!
//     # book(id: ID!): Book
//     # authors: [Author]!
//     # author(id: ID!): Author
//     # comments(book_id: ID!): [Comment!]!
//     # comment(id: ID!): Comment
//     # Queries for the current user
//     # me: User
//   }

//   type Book {
//     id: ID!
//     title: String
//     content: String
//     published: Boolean
//     # name: String
//     # author: String
//     # authorId: ID
//     # releaseDate: String
//     # pageInfo: String
//     # summary: String
//   }

// #  type Author {
// #    id: ID!
// #    name: String
// #    surname: String
// #    booksCount: Int
// #    biography: String
// #    books: [Book]!
// #  }

// #  type Comment {
// #    id: ID!
// #    book_id: ID!
// #    author: String
// #    text: String
// #  }
