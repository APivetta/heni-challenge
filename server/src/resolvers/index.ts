import { getPrints } from './getPrints'
import { getPrint } from './getPrint'

export const resolvers = {
  Query: {
    getPrints,
    getPrint
  }
}
