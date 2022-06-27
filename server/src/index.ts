import 'dotenv/config'
import { createApp } from './app'

if (!process.env.API_KEY) throw new Error('API_KEY not set')

createApp()
