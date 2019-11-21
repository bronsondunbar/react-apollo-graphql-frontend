const { GraphQLServerLambda } = require('graphql-yoga')
const { prisma } = require('./generated/prisma-client')
const Query = require('./resolvers/Query')
const Mutation = require('./resolvers/Mutation')
const Subscription = require('./resolvers/Subscription')
const User = require('./resolvers/User')
const Link = require('./resolvers/Link')
const Vote = require('./resolvers/Vote')

const resolvers = {
  Query,
  Mutation,
  Subscription,
  User,
  Link,
  Vote,
}

const server = new GraphQLServerLambda({
  typeDefs: './src/lambda/src/schema.graphql',
  resolvers,
  context: request => ({
    ...request,
    prisma,
  }),
})
exports.handler = server.handler
// server.start(() => console.log(`Server is running on http://localhost:4000`))