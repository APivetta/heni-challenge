import { createApp } from './app'

const port = 4000
const app = createApp()

app.listen(port, () => {
  console.log(`HENI challenge - Prints server listening on port ${port}`)
})
