import express from 'express'
import http from 'http'
import { startApolloServer } from './graphql'

export const createApp = async () => {
  const port = 4000
  const app = express()
  const httpServer = http.createServer(app)
  const apolloServer = await startApolloServer(httpServer)

  app.use(apolloServer.getMiddleware())
  app.listen(port, () => {
    console.log(`HENI challenge - Prints server listening on port ${port}`)
    console.log(`Graphql served at ${apolloServer.graphqlPath}`)
  })

  return app
}
