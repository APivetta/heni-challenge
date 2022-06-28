import { gql } from '@apollo/client'
import { Print } from '../types/Print'

export type GetPrintArgs = {
  id: number
}

export type GetPrintData = {
  getPrint: Print
}

export const GET_PRINT_QUERY = gql`
  query GetPrint($id: Int!) {
    getPrint(id: $id) {
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
`
