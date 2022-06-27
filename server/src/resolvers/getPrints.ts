import axios from 'axios'

type GetPrintArgs = {
  page?: number;
};

export const getPrints = async (_: unknown, args: GetPrintArgs) => {
  if (!process.env.HARVARD_URL) throw new Error('HARVARD_URL not set')

  const { page } = args
  const params = {
    apikey: process.env.API_KEY || '',
    page: page && page > 0 ? page.toString() : '1',
    classification: 'Prints',
    sort: 'rank',
    sortorder: 'desc',
    hasImage: '1',
    q: 'verificationlevel:4 AND accesslevel:1' //  verificationlevel:4 is verified to Best standard, accesslevel:1 is Public access
  }
  const search = new URLSearchParams(params).toString()

  const result = await axios.get(`${process.env.HARVARD_URL}/object?${search}`)
  return result.data
}
