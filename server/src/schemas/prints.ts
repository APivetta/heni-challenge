import { gql } from 'apollo-server-express'

export const Prints = gql`
  type Prints {
    info: Info
    records: [Print]
  }

  type Info {
    totalrecordsperquery: Int
    totalrecords: Int
    pages: Int
    page: Int
  }
`
