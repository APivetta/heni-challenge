export type Image = {
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

export type Color = {
  color: string
  spectrum: string
  hue: string
  percent: number
  css3: string
}

export type People = {
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

export type Print = {
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
