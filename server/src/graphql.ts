import { Server } from 'http'
import { ApolloServer } from 'apollo-server-express'
import { ApolloServerPluginDrainHttpServer } from 'apollo-server-core'
import { typeDefs } from './schemas'
import { resolvers } from './resolvers'

export const startApolloServer = async (httpServer: Server) => {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    csrfPrevention: true,
    cache: 'bounded',
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })]
  })

  await server.start()
  return server
}
