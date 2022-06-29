import { getPrint } from './getPrint'
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

    expect(() => getPrint(null, { id: 1 })).rejects.toThrow('HARVARD_URL not set')
  })

  test('Should call the correct URL', async () => {
    process.env.HARVARD_URL = 'http://test.hardvard.com'
    const mockGet = jest.fn().mockResolvedValue({ data: null })
    axios.get = mockGet

    await getPrint(null, { id: 1 })

    const calledUrl = new URL(mockGet.mock.calls[0][0])
    expect(calledUrl.origin).toBe(process.env.HARVARD_URL)
    expect(calledUrl.pathname).toBe('/object/1')
  })
})
