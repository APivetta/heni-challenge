export type Image = {
  date: string | null
  copyright: string | null
  imageid: number | null
  format: string | null
  description: string | null
  technique: string | null
  renditionnumber: string | null
  baseimageurl: string | null
  alttext: string | null
  width: number | null
  publiccaption: string | null
  height: number | null
}

export type Color = {
  color: string | null
  spectrum: string | null
  hue: string | null
  percent: number | null
  css3: string | null
}

export type People = {
  role: string | null
  birthplace: string | null
  gender: string | null
  displaydate: string | null
  prefix: string | null
  culture: string | null
  displayname: string | null
  alphasort: string | null
  name: string | null
  personid: number | null
  deathplace: string | null
}

export type Print = {
  copyright: string | null
  creditline: string | null
  division: string | null
  contact: string | null
  colorcount: number | null
  rank: number | null
  id: number | null
  verificationleveldescription: string | null
  images: Image[] | null
  imagecount: number | null
  standardreferencenumber: string | null
  classification: string | null
  primaryimageurl: string | null
  lastupdate: string | null
  technique: string | null
  edition: string | null
  description: string | null
  title: string | null
  colors: Color[] | null
  dated: string | null
  department: string | null
  dateend: number | null
  people: People[] | null
  url: string | null
  century: string | null
  datebegin: number | null
  culture: string | null
  dimensions: string | null
}
