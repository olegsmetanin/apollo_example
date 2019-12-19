export const resolvers = {
  Query: {
    hello: (_, args) => `Hello ${args.name || 'World'}!`,
    books: (page, args) => [{id: 'qwe', title: 'qwe'}]
  },
}