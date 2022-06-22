import express from 'express'

export const createApp = () => {
  const app = express()
  app.use('/', (req, res) => {
    res.send('hi')
  })
  return app
}
