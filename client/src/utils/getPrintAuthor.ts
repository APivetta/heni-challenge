import { Print } from '../types/Print'

export const getPrintAuthors = (print: Print) => print.people
  ? print.people
    .filter(({ role, name }) => role === 'Artist' && name)
    .map(artist => artist.name)
    .join(', ')
  : ''
