import { gql } from '@apollo/client'
import { Print } from '../types/Print'

export type GetPrintsArgs = {
  page?: number
}

export type GetPrintsData = {
  getPrints: {
    info: {
      totalrecordsperquery: number
      totalrecords: number
      pages: number
      page: number
    }
    records: Print[]
  }
}

export const GET_PRINTS_QUERY = gql`
  query GetPrints($page: Int) {
    getPrints(page: $page) {
      info {
        totalrecordsperquery
        totalrecords
        pages
        page
      }
      records {
        copyright
        creditline
        division
        contact
        colorcount
        rank
        id
        verificationleveldescription
        images {
          date
          copyright
          imageid
          format
          description
          technique
          renditionnumber
          baseimageurl
          alttext
          width
          publiccaption
          height
        }
        imagecount
        standardreferencenumber
        classification
        primaryimageurl
        lastupdate
        technique
        edition
        description
        title
        colors {
          color
          spectrum
          hue
          percent
          css3
        }
        dated
        department
        dateend
        people {
          role
          birthplace
          gender
          displaydate
          prefix
          culture
          displayname
          alphasort
          name
          personid
          deathplace
        }
        url
        century
        datebegin
        culture
        dimensions
      }
    }
  }
`
