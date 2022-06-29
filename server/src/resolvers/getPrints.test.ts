import { getPrints } from './getPrints'
import axios from 'axios'

describe('getPrints resolver', () => {
  const ENV = process.env

  beforeEach(() => {
    jest.resetModules()
    process.env = { ...ENV }
  })

  afterAll(() => {
    process.env = ENV
  })

  test('Should throw error if HARVARD_URL is not set', () => {
    process.env.HARVARD_URL = ''

    expect(() => getPrints(null, { page: 1 })).rejects.toThrow('HARVARD_URL not set')
  })

  test('Should call the correct URL', async () => {
    process.env.HARVARD_URL = 'http://test.hardvard.com'
    const mockGet = jest.fn().mockResolvedValue({ data: null })
    axios.get = mockGet

    await getPrints(null, { })

    const calledUrl = new URL(mockGet.mock.calls[0][0])
    expect(calledUrl.origin).toBe(process.env.HARVARD_URL)
    expect(calledUrl.pathname).toBe('/object')
  })

  test('Should default to first page is page parameter is not provided', async () => {
    process.env.HARVARD_URL = 'http://test.hardvard.com'
    const mockGet = jest.fn().mockResolvedValue({ data: null })
    axios.get = mockGet

    await getPrints(null, { page: undefined })

    const calledUrl = new URL(mockGet.mock.calls[0][0])
    expect(calledUrl.searchParams.get('page')).toBe('1')
  })

  test('Should default to first page is page parameter is negative', async () => {
    process.env.HARVARD_URL = 'http://test.hardvard.com'
    const mockGet = jest.fn().mockResolvedValue({ data: null })
    axios.get = mockGet

    await getPrints(null, { page: -10 })

    const calledUrl = new URL(mockGet.mock.calls[0][0])
    expect(calledUrl.searchParams.get('page')).toBe('1')
  })
})
