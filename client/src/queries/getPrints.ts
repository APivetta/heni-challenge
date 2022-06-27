import { gql } from '@apollo/client'

export type GetPrintsArgs = {
  page?: number
}

type Image = {
  date: string
  copyright: string
  imageid: number
  format: string
  description: string
  technique: string
  renditionnumber: string
  baseimageurl: string
  alttext: string
  width: number
  publiccaption: string
  height: number
}

type Color = {
  color: string
  spectrum: string
  hue: string
  percent: number
  css3: string
}

type People = {
  role: string
  birthplace: string
  gender: string
  displaydate: string
  prefix: string
  culture: string
  displayname: string
  alphasort: string
  name: string
  personid: number
  deathplace: string
}

type Print = {
  copyright: string
  creditline: string
  division: string
  contact: string
  colorcount: number
  rank: number
  id: number
  verificationleveldescription: string
  images: Image[]
  imagecount: number
  standardreferencenumber: string
  classification: string
  primaryimageurl: string
  lastupdate: string
  technique: string
  edition: string
  description: string
  title: string
  colors: Color[]
  dated: string
  department: string
  dateend: number
  people: People[]
  url: string
  century: string
  datebegin: number
  culture: string
  dimensions: string
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
