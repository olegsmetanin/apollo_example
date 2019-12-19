import { GraphQLServer } from 'graphql-yoga'
import { resolvers } from './resolvers'
import { schema } from './schema'

const server = new GraphQLServer({
  typeDefs: schema,
  resolvers,
})
const options = {
  cors: true,
  port: 4000,
  endpoint: '/graphql',
  // playground: '/graphql-cli'
}
server.start(() => console.log('Server is running on http://localhost:4000'))
