import { createApp } from './app'

const port = 4000
const app = createApp()

app.listen(port, () => {
  console.log(`Heni challenge - Prints server listening on port ${port}`)
})
