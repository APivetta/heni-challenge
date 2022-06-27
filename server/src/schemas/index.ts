import { gql } from 'apollo-server-express'
import { Prints } from './prints'
import { Print } from './print'

const Queries = gql`
type Query {
    getPrints(page: Int): Prints
    getPrint(id: Int!): Print
  }
`

export const typeDefs = [Queries, Print, Prints]
