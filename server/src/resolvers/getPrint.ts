import axios from 'axios'

type GetPrintArgs = {
  id: number;
};

export const getPrint = async (_: unknown, args: GetPrintArgs) => {
  if (!process.env.HARVARD_URL) throw new Error('HARVARD_URL not set')

  const { id } = args
  const params = {
    apikey: process.env.API_KEY || ''
  }
  const search = new URLSearchParams(params).toString()

  const result = await axios.get(`${process.env.HARVARD_URL}/object/${id}?${search}`)
  return result.data
}
