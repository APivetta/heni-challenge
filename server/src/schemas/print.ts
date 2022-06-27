import { gql } from 'apollo-server-express'

export const Print = gql`
  type Print {
    copyright: String
    creditline: String
    division: String
    contact: String
    colorcount: Int
    rank: Int
    id: Int
    verificationleveldescription: String
    images: [Image]
    imagecount: Int
    standardreferencenumber: String
    classification: String
    primaryimageurl: String
    lastupdate: String
    technique: String
    edition: String
    description: String
    title: String
    colors: [Color]
    dated: Int
    department: String
    dateend: Int
    people: [People]
    url: String
    century: String
    datebegin: Int
    culture: String
    dimensions: String
  }

  type People {
    role: String
    birthplace: String
    gender: String
    displaydate: String
    prefix: String
    culture: String
    displayname: String
    alphasort: String
    name: String
    personid: Int
    deathplace: String
  }

  type Image {
    date: String
    copyright: String
    imageid: Int
    format: String
    description: String
    technique: String
    renditionnumber: String
    baseimageurl: String
    alttext: String
    width: Int
    publiccaption: String
    height: Int
  }

  type Color {
    color: String
    spectrum: String
    hue: String
    percent: Float
    css3: String
  }
`
