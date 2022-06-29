import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000',
    viewportHeight: 1024,
    viewportWidth: 1280
  }
})
